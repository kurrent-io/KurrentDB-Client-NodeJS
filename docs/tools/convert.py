#!/usr/bin/env python3
"""
tools/convert_all.py

Apply Markdown/MDX transformations in one pass—idempotent:

  0. Copy docs/**/images → public/assets/img/doc-imgs, dedupe, convert rasters to .webp, copy SVGs, delete originals.
  1. Ensure frontmatter with title (inject from first H1 or default), and always one blank line after the closing `---`.
  2. Remove redundant H1 matching the title.
  3. Rename .md → .mdx.
  4. Update image refs to /assets/img/doc-imgs/…
  5. Convert :::tabs blocks → <Tabs>…</Tabs>.
  6. Inline & block @\[code{…}\] directives → <Code lang=… code={…}/> with imports.
  7. Transform <Badge> → Starlight syntax (warning→caution).
  8. Fix admonitions.
  9. Consolidate all imports into two deduplicated blocks:
       • raw `?raw` imports
       • Starlight component imports
     leaving exactly one blank line after each block.
 10. Ensure `<Code>` and `<Tabs>` imports are present if used.

Usage:
  python3 tools/convert_all.py [path] [-v|--verbose] [--dry-run]
"""

import sys
import re
import shutil
import hashlib
import argparse
from pathlib import Path
from PIL import Image
from typing import Tuple, List, Set

SCRIPT_PATH    = Path(__file__).resolve()
PROJECT_ROOT   = SCRIPT_PATH.parent.parent
DOCS_DIR       = PROJECT_ROOT / "src" / "content" / "docs"
ASSETS_IMG     = PROJECT_ROOT / "public" / "assets" / "img" / "doc-imgs"
SAMPLES_ROOT   = PROJECT_ROOT / "src" / "content" / "_samples"
TAB_IMPORT = 'import { Tabs, TabItem } from "@astrojs/starlight/components";'

VERBOSE        = False
DRY_RUN        = False
img_converted  = 0
img_copied     = 0
files_updated  = 0

# Compiled regex patterns for better performance
TITLE_RE           = re.compile(r"^title:\s*(?P<title>.+)$")
H1_RE              = re.compile(r"^#\s+(?P<h1>.+)$")
BADGE_RE           = re.compile(r"<Badge\s+([^>]*?)\/?>", re.IGNORECASE)
ATTR_RE            = re.compile(r'(\w+)=[\'"]([^\'"]+)[\'"]')
ADMON_WITH_TITLE_RE= re.compile(r"^:::\s*(?P<type>\w+)\s+(?P<title>.+?)\s*(?:::)?$")
ADMON_TYPE_ONLY_RE = re.compile(r"^:::\s*(?P<type>\w+)\s*$")
CODE_DIR_RE        = re.compile(r"@\[code\{(?P<key>[^}]+)\}\]\(@(?P<alias>[^:]+):(?P<files>[^)\n]+)\)")
SIMPLE_CODE_RE     = re.compile(r"@\[code\{(?P<key>[^}]+)\}\]\((?P<rel>\.[^)]+)\)")
COMP_IMPORT_LINE   = "import { Code, Tabs, TabItem } from '@astrojs/starlight/components';"
BADGE_IMPORT_LINE  = "import { Badge } from '@astrojs/starlight/components';"
RAW_IMPORT_RE      = re.compile(r"^import\s+\w+\s+from\s*['\"].+\?raw['\"];$")
COMPONENT_RE       = re.compile(r"import\s*{\s*([^}]+)\s*}\s*from\s*['\"]@astrojs/starlight/components['\"];")
THEME_COMPONENT_RE = re.compile(r"import\s+\w+\s+from\s*['\"]@/components/ThemeAwareImages\.astro['\"];")


# Image processing
SUPPORTED_IMG_EXTENSIONS = {'.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff'}
SVG_EXTENSION = '.svg'

EXT_LABEL = {
    'py':   ('Python',    'python'),
    'js':   ('JavaScript','javascript'),
    'ts':   ('TypeScript','typescript'),
    'java': ('Java',      'java'),
    'cs':   ('C#',        'csharp'),
    'go':   ('Go',        'go'),
    'rs':   ('Rust',      'rust'),
    'sh':   ('Shell',     'bash'),
    'bash': ('Bash',      'bash'),
    'zsh':  ('Zsh',       'zsh'),
    'yaml': ('YAML',      'yaml'),
    'yml':  ('YAML',      'yaml'),
    'json': ('JSON',      'json'),
    'xml':  ('XML',       'xml'),
    'html': ('HTML',      'html'),
    'css':  ('CSS',       'css'),
    'scss': ('SCSS',      'scss'),
    'sass': ('Sass',      'sass'),
}


def log_verbose(msg: str) -> None:
    """Log message only if verbose mode is enabled."""
    if VERBOSE:
        print(msg)


def copy_all_images() -> None:
    """Copy and convert images from both docs and assets directories."""
    global img_converted, img_copied
    
    # Define source directories to process
    source_dirs = [
        (DOCS_DIR, "docs"),  # Original docs images
        (PROJECT_ROOT / "src" / "assets" / "img", "assets"),  # Assets directory
    ]
    
    seen_hashes = {}
    
    # Create assets directory if it doesn't exist
    ASSETS_IMG.mkdir(parents=True, exist_ok=True)
    
    for source_base, description in source_dirs:
        if not source_base.exists():
            log_verbose(f"Source directory {source_base} does not exist, skipping")
            continue
            
        # For docs, look in images subdirectories; for assets, look directly
        pattern = "**/images/**/*.*" if description == "docs" else "**/*.*"
        
        for img_path in source_base.rglob(pattern):
            if not img_path.is_file():
                continue
                
            # Skip already converted webp files
            if img_path.suffix.lower() == ".webp":
                continue
                
            try:
                # Calculate relative path based on source
                if description == "docs":
                    rel_path = img_path.relative_to(DOCS_DIR)
                else:
                    # For assets, preserve relative structure but handle logos specially
                    rel_from_assets = img_path.relative_to(source_base)
                    filename = img_path.name.lower()
                    
                    if "logo" in filename:
                        # Put logos in a special logo folder, preserving any subfolder structure
                        if rel_from_assets.parent != Path('.'):
                            rel_path = Path("logo") / rel_from_assets.parent / img_path.name
                        else:
                            rel_path = Path("logo") / img_path.name
                    else:
                        # For non-logo assets, don't add extra "assets" folder - use relative path directly
                        rel_path = rel_from_assets
                
                is_versioned = any(char.isdigit() for char in str(rel_path))
                ext = img_path.suffix.lower()
                
                # Calculate hash for deduplication (skip for SVGs to preserve them exactly)
                if ext != SVG_EXTENSION:
                    data = img_path.read_bytes()
                    file_hash = hashlib.md5(data).hexdigest()
                    
                    # Skip duplicates unless versioned
                    if not is_versioned and file_hash in seen_hashes:
                        log_verbose(f"Skipping duplicate: {img_path}")
                        continue
                        
                    seen_hashes[file_hash] = img_path
                
                dest_path = ASSETS_IMG / rel_path
                dest_path.parent.mkdir(parents=True, exist_ok=True)
                
                if not DRY_RUN:
                    if ext == SVG_EXTENSION:
                        # Copy SVG as-is
                        shutil.copy2(img_path, dest_path)
                        img_copied += 1
                        log_verbose(f"Copied SVG: {img_path} -> {dest_path}")
                    elif ext in SUPPORTED_IMG_EXTENSIONS:
                        # Convert to WebP
                        webp_dest = dest_path.with_suffix(".webp")
                        with Image.open(img_path) as img:
                            img.save(webp_dest, format="WEBP", quality=80, method=6)
                        img_converted += 1
                        log_verbose(f"Converted to WebP: {img_path} -> {webp_dest}")
                        
            except Exception as e:
                print(f"Error processing image {img_path}: {e}", file=sys.stderr)
                continue

    # Clean up original images from ALL processed directories
    if not DRY_RUN:
        cleanup_all_original_images(source_dirs)

def convert_numeric_titles_to_string(text: str) -> Tuple[str, bool]:
    """Convert numeric-only titles in frontmatter to strings by wrapping them in quotes."""
    lines = text.splitlines()
    changed = False
    
    # Check if document has frontmatter
    if not lines or lines[0].strip() != '---':
        return text, False
    
    try:
        # Find the end of frontmatter
        fm_end_idx = lines[1:].index('---') + 1
    except ValueError:
        return text, False
    
    # Process frontmatter lines
    for i in range(1, fm_end_idx):
        line = lines[i]
        
        # Check for title field
        title_match = re.match(r'^(\s*title:\s*)(.+)$', line)
        if title_match:
            prefix = title_match.group(1)
            title_value = title_match.group(2).strip()
            
            # Check if title is purely numeric and not already quoted
            if not (title_value.startswith('"') or title_value.startswith("'")):
                try:
                    float(title_value)
                    # If we can convert to float and it matches numeric pattern, wrap in quotes
                    if re.match(r'^-?\d+(\.\d+)?$', title_value):
                        lines[i] = f'{prefix}"{title_value}"'
                        changed = True
                        log_verbose(f"Converted numeric title '{title_value}' to string")
                except ValueError:
                    pass
    
    return "\n".join(lines), changed

def cleanup_all_original_images(source_dirs) -> None:
    """Remove original image files and empty directories from all source directories."""
    for source_base, description in source_dirs:
        if not source_base.exists():
            continue
            
        pattern = "**/images/**/*.*" if description == "docs" else "**/*.*"
        
        for img_path in source_base.rglob(pattern):
            if img_path.suffix.lower() in SUPPORTED_IMG_EXTENSIONS:
                try:
                    img_path.unlink()
                    log_verbose(f"Removed original: {img_path}")
                except Exception as e:
                    log_verbose(f"Could not remove {img_path}: {e}")
        
        # Remove empty image directories (only for docs)
        if description == "docs":
            for img_dir in source_base.rglob("**/images"):
                try:
                    if img_dir.is_dir() and not any(img_dir.iterdir()):
                        img_dir.rmdir()
                        log_verbose(f"Removed empty directory: {img_dir}")
                except Exception as e:
                    log_verbose(f"Could not remove directory {img_dir}: {e}")


def clean_converted_pngs_in_destination() -> None:
    """Remove any PNG/JPG files that were accidentally copied to destination instead of converted."""
    if not ASSETS_IMG.exists():
        return
        
    for img_path in ASSETS_IMG.rglob("*.*"):
        if img_path.suffix.lower() in SUPPORTED_IMG_EXTENSIONS:
            # Check if there's a corresponding .webp file
            webp_version = img_path.with_suffix(".webp")
            if webp_version.exists():
                try:
                    img_path.unlink()
                    log_verbose(f"Removed unconverted copy: {img_path}")
                except Exception as e:
                    log_verbose(f"Could not remove {img_path}: {e}")
            else:
                # Convert it now
                try:
                    with Image.open(img_path) as img:
                        img.save(webp_version, format="WEBP", quality=80, method=6)
                    img_path.unlink()
                    log_verbose(f"Converted and removed: {img_path} -> {webp_version}")
                except Exception as e:
                    log_verbose(f"Could not convert {img_path}: {e}")


def cleanup_original_images() -> None:
    """Remove original image files and empty directories."""
    for img_path in DOCS_DIR.rglob("**/images/**/*.*"):
        if img_path.suffix.lower() in SUPPORTED_IMG_EXTENSIONS | {SVG_EXTENSION}:
            try:
                img_path.unlink()
                log_verbose(f"Removed original: {img_path}")
            except Exception as e:
                log_verbose(f"Could not remove {img_path}: {e}")
    
    # Remove empty image directories
    for img_dir in DOCS_DIR.rglob("**/images"):
        try:
            if img_dir.is_dir() and not any(img_dir.iterdir()):
                img_dir.rmdir()
                log_verbose(f"Removed empty directory: {img_dir}")
        except Exception as e:
            log_verbose(f"Could not remove directory {img_dir}: {e}")


def ensure_frontmatter(text: str) -> Tuple[str, bool]:
    """Ensure document has proper frontmatter with title."""
    lines = text.splitlines()
    
    if not lines or lines[0].strip() != '---':
        # No frontmatter - create it
        title = extract_title_from_content(lines) or "Untitled"
        new_lines = remove_title_h1_if_matches(lines, title)
        frontmatter = ['---', f'title: "{title}"', '---', '']
        return "\n".join(frontmatter + new_lines), True
    
    # Has frontmatter - ensure it has title
    try:
        fm_end_idx = lines[1:].index('---') + 1
    except ValueError:
        return text, False
    
    # Check if title exists in frontmatter
    has_title = any(TITLE_RE.match(line) for line in lines[1:fm_end_idx])
    
    if not has_title:
        # Add title from first H1 or default
        title = extract_title_from_content(lines[fm_end_idx+1:]) or "Untitled"
        lines.insert(fm_end_idx, f'title: "{title}"')
        # Remove matching H1 after frontmatter
        content_lines = remove_title_h1_if_matches(lines[fm_end_idx+2:], title)
        lines = lines[:fm_end_idx+2] + content_lines
        
        # Ensure exactly one blank line after frontmatter
        ensure_blank_line_after_frontmatter(lines, fm_end_idx + 1)
        return "\n".join(lines), True
    
    return text, False

def extract_title_from_content(lines: List[str]) -> str:
    """Extract title from first H1 heading."""
    for line in lines:
        if line.strip():  # Skip empty lines
            match = H1_RE.match(line)
            if match:
                return match.group('h1').strip()
            break  # Stop at first non-empty line
    return ""

def normalize_powershell_language(text: str) -> Tuple[str, bool]:
    """Normalize PowerShell language identifiers for proper syntax highlighting."""
    # Pattern to match code blocks with PowerShell variants (including indented ones)
    pattern = re.compile(r'^(\s*)```(PowerShell|Powershell|POWERSHELL|pwsh|posh)\b', re.MULTILINE)
    
    def replacer(match):
        indent = match.group(1)  # Preserve the indentation
        return f'{indent}```powershell'
    
    new_text = pattern.sub(replacer, text)
    return (new_text, new_text != text)

def remove_catalog_component(text: str) -> Tuple[str, bool]:
    """Remove <Catalog/> component references."""
    # Pattern to match various forms of Catalog component
    patterns = [
        re.compile(r'<Catalog\s*/>', re.IGNORECASE),           # <Catalog/>
        re.compile(r'<Catalog\s*></Catalog>', re.IGNORECASE),  # <Catalog></Catalog>
        re.compile(r'<Catalog\s*>\s*</Catalog>', re.IGNORECASE), # <Catalog> </Catalog> (with whitespace)
    ]
    
    changed = False
    new_text = text
    
    for pattern in patterns:
        updated_text = pattern.sub('', new_text)
        if updated_text != new_text:
            changed = True
            new_text = updated_text
    
    return (new_text, changed)


def remove_title_h1_if_matches(lines: List[str], title: str) -> List[str]:
    """Remove H1 heading if it matches the title."""
    result = []
    title_removed = False
    
    for line in lines:
        if not title_removed and line.strip():
            match = H1_RE.match(line)
            if match and match.group('h1').strip() == title:
                title_removed = True
                continue
        result.append(line)
    
    return result


def ensure_blank_line_after_frontmatter(lines: List[str], fm_end_idx: int) -> None:
    """Ensure exactly one blank line after frontmatter."""
    # Remove existing blank lines
    while fm_end_idx < len(lines) and not lines[fm_end_idx].strip():
        lines.pop(fm_end_idx)
    
    # Add exactly one blank line
    if fm_end_idx < len(lines):
        lines.insert(fm_end_idx, '')


def remove_redundant_h1(text: str) -> Tuple[str, bool]:
    """Remove H1 that matches the frontmatter title."""
    lines = text.splitlines()
    
    if len(lines) < 3 or lines[0].strip() != '---':
        return text, False
    
    try:
        fm_end_idx = lines[1:].index('---') + 1
    except ValueError:
        return text, False
    
    # Extract title from frontmatter
    title = None
    for line in lines[1:fm_end_idx]:
        match = TITLE_RE.match(line)
        if match:
            title = match.group('title').strip().strip('"\' ')
            break
    
    if not title:
        return text, False
    
    # Look for matching H1 after frontmatter
    for i in range(fm_end_idx + 1, len(lines)):
        if not lines[i].strip():
            continue
        
        match = H1_RE.match(lines[i])
        if match and match.group('h1').strip() == title:
            # Remove H1 and following blank line if present
            lines.pop(i)
            if i < len(lines) and not lines[i].strip():
                lines.pop(i)
            return "\n".join(lines), True
        break
    
    return text, False


def update_image_paths(text: str, md_path: Path) -> Tuple[str, bool]:
    """Update image paths to point to assets directory, excluding theme-aware images."""
    # Skip processing if ThemeAwareImages components are present
    if '<ThemeAwareImages' in text:
        return text, False
    
    # Pattern to match images WITHOUT #light or #dark fragments
    pattern = re.compile(r"(!\[[^\]]*\]\()(?P<rel>(?:\.\.?/)*images/[^)#]+)(?<!#light)(?<!#dark)(\))")
    changed = False
    
    def replacer(match):
        nonlocal changed
        changed = True
        
        try:
            src_path = (md_path.parent / match.group("rel")).resolve()
            rel_path = src_path.relative_to(DOCS_DIR)
        except (ValueError, OSError):
            rel_path = Path(match.group("rel"))
        
        # Convert extensions to .webp for supported formats
        if rel_path.suffix.lower() in SUPPORTED_IMG_EXTENSIONS:
            rel_path = rel_path.with_suffix('.webp')
        
        return f"{match.group(1)}/assets/img/doc-imgs/{rel_path.as_posix()}{match.group(3)}"
    
    new_text = pattern.sub(replacer, text)
    return new_text, changed

def process_regular_image_paths(text: str, md_path: Path) -> str:
    """Process regular image paths that aren't in ThemeAwareImages components."""
    # Updated pattern to capture theme fragments, size specifications, and trailing spaces
    pattern = re.compile(r"(!\[[^\]]*\]\()(?P<rel>(?:\.\.?/)*images/[^)#=]+)(?P<fragment>#(?:light|dark))?(?P<size>=x?\d+)?\s*(\))")
    
    def replacer(match):
        try:
            rel_path_str = match.group("rel")
            fragment = match.group("fragment") or ""
            # Note: we're dropping the size specification (=x200, etc.) and trailing spaces
            
            src_path = (md_path.parent / rel_path_str).resolve()
            rel_path = src_path.relative_to(DOCS_DIR)
        except (ValueError, OSError):
            rel_path = Path(rel_path_str)
        
        # Convert extensions to .webp for supported formats
        if rel_path.suffix.lower() in SUPPORTED_IMG_EXTENSIONS:
            rel_path = rel_path.with_suffix('.webp')
        
        return f"{match.group(1)}/assets/img/doc-imgs/{rel_path.as_posix()}{fragment}{match.group(4)}"
    
    return pattern.sub(replacer, text)


def convert_theme_images_to_component(text: str, md_path: Path) -> Tuple[str, bool]:
    """Convert image pairs with #light and #dark to ThemeAwareImages component."""
    
    # Updated patterns to handle trailing spaces, size specifications, and SVGs
    light_pattern = re.compile(r'!\[([^\]]*)\]\(([^)#=]+?)#light\s*(?:=x?\d+)?\s*\)')
    dark_pattern = re.compile(r'!\[([^\]]*)\]\(([^)#=]+?)#dark\s*(?:=x?\d+)?\s*\)')
    
    # Find all images with theme fragments
    light_matches = list(light_pattern.finditer(text))
    dark_matches = list(dark_pattern.finditer(text))
    
    if not light_matches and not dark_matches:
        return text, False
    
    # Build a map of image pairs to replace
    components_to_add = []
    positions_to_remove = set()
    
    # Process each light image to find its dark counterpart
    for light_match in light_matches:
        alt_text = light_match.group(1)
        light_path = light_match.group(2).strip()
        
        # Look for corresponding dark image
        dark_match = None
        dark_path = None
        
        # Try to find a dark image with similar path
        for dm in dark_matches:
            dark_match_path = dm.group(2).strip()
            # Check if paths are related (same base name or -dark variant)
            light_base = light_path.replace('.png', '').replace('.jpg', '').replace('.webp', '').replace('.svg', '')
            dark_base = dark_match_path.replace('-dark.png', '').replace('-dark.jpg', '').replace('-dark.webp', '').replace('-dark.svg', '').replace('_dark.png', '').replace('_dark.jpg', '').replace('_dark.webp', '').replace('_dark.svg', '')
            
            if light_base == dark_base or dark_match_path.startswith(light_base):
                dark_match = dm
                dark_path = dark_match_path
                break
        
        # If we found a pair, create component
        if dark_match and dark_path:
            # Use the earlier position for component placement
            component_pos = min(light_match.start(), dark_match.start())
            
            # Calculate the actual image paths
            light_final_path = find_and_calculate_image_path(light_path, md_path)
            dark_final_path = find_and_calculate_image_path(dark_path, md_path)
            
            if light_final_path and dark_final_path:
                # Add width and height for SVGs
                width_height_attrs = ""
                if light_path.lower().endswith('.svg') or dark_path.lower().endswith('.svg'):
                    width_height_attrs = '\n  width="800"\n  height="600"'
                
                component = f'<ThemeAwareImages\n  light="{light_final_path}"\n  dark="{dark_final_path}"\n  alt="{alt_text}"{width_height_attrs}\n/>'
                
                components_to_add.append((component_pos, component))
                positions_to_remove.add((light_match.start(), light_match.end()))
                positions_to_remove.add((dark_match.start(), dark_match.end()))
    
    if not components_to_add:
        return text, False
    
    # Sort positions for removal in reverse order
    removal_positions = sorted(positions_to_remove, key=lambda x: x[0], reverse=True)
    
    # Remove original images
    new_text = text
    for start, end in removal_positions:
        new_text = new_text[:start] + new_text[end:]
    
    # Sort components by position in reverse order and add them
    components_to_add.sort(key=lambda x: x[0], reverse=True)
    
    for pos, component in components_to_add:
        # Adjust position based on previous removals
        adjusted_pos = pos
        for start, end in removal_positions:
            if start < pos:
                adjusted_pos -= (end - start)
        
        # Ensure we don't go below 0
        adjusted_pos = max(0, adjusted_pos)
        
        new_text = new_text[:adjusted_pos] + component + new_text[adjusted_pos:]
    
    # Add import if we added any ThemeAwareImages components
    has_theme_components = '<ThemeAwareImages' in new_text
    if has_theme_components:
        new_text = ensure_theme_component_import(new_text)
    
    return new_text, True

def find_and_calculate_image_path(original_path: str, md_path: Path) -> str:
    """Find the actual image file and calculate relative path from MDX to image."""
    # Extract just the filename from the original path
    filename = Path(original_path).name
    
    # Convert extension to .webp if it's a supported format (but not SVG)
    if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
        filename = filename.rsplit('.', 1)[0] + '.webp'
    # Keep SVG files as-is
    elif filename.lower().endswith('.svg'):
        pass  # SVGs stay as SVGs
    
    # Search for the file in the assets directory
    # Try to find it based on the document's relative path structure
    try:
        # Get the relative path of the MDX file from docs root
        mdx_rel_path = md_path.relative_to(DOCS_DIR)
        
        # Construct possible image paths
        possible_paths = []
        
        # Try exact path structure under doc-imgs
        mdx_dir_parts = mdx_rel_path.parent.parts
        if mdx_dir_parts:
            # Try with full path structure
            possible_paths.append(ASSETS_IMG / Path(*mdx_dir_parts) / 'images' / filename)
            # Try without 'images' subdirectory
            possible_paths.append(ASSETS_IMG / Path(*mdx_dir_parts) / filename)
        
        # Also try a general search
        for img_path in ASSETS_IMG.rglob(filename):
            if img_path not in possible_paths:
                possible_paths.append(img_path)
        
        # Find the first existing path
        target_image_path = None
        for path in possible_paths:
            if path.exists():
                target_image_path = path
                break
        
        if not target_image_path:
            log_verbose(f"Could not find image file: {filename}")
            return original_path
        
        # Calculate relative path from MDX file to image
        # This needs to go from src/content/docs/... to public/assets/img/doc-imgs/...
        
        # Calculate how many directories up we need to go from the MDX file
        mdx_depth = len(md_path.parent.relative_to(DOCS_DIR).parts) + 1  # +1 for the docs folder itself
        
        # Go up to src/content level (2 more levels up)
        total_up = mdx_depth + 2
        
        # Build the relative path
        up_path = "../" * total_up
        
        # Path from project root to the image
        image_from_root = target_image_path.relative_to(PROJECT_ROOT)
        
        # Since we're going to project root and then to public/assets/...
        relative_path = up_path + image_from_root.as_posix()
        
        # Remove 'public/' from the beginning of the path if it exists
        relative_path = relative_path.replace('public/', '', 1)
        
        return relative_path
        
    except Exception as e:
        log_verbose(f"Error calculating image path for {original_path}: {e}")
        return original_path

def clean_code_block_languages(text: str) -> Tuple[str, bool]:
    """Remove :no-line-numbers and similar suffixes from code block languages."""
    changed = False
    
    # Pattern 1: Code blocks with language + :no-line-numbers
    # Example: ```javascript:no-line-numbers -> ```javascript
    pattern1 = re.compile(r'^```(\w+):no-line-numbers\b', re.MULTILINE)
    new_text = pattern1.sub(r'```\1', text)
    if new_text != text:
        changed = True
        text = new_text
    
    # Pattern 2: Code blocks with only :no-line-numbers (no language)
    # Example: ```:no-line-numbers -> ```
    pattern2 = re.compile(r'^```:no-line-numbers\b', re.MULTILINE)
    new_text = pattern2.sub('```', text)
    if new_text != text:
        changed = True
        text = new_text
    
    return text, changed


def convert_tabs(text: str) -> Tuple[str, bool]:
    """Convert :::tabs and ::::tabs blocks to <Tabs> components."""
    changed = False
    
    # Handle both ::: and :::: variants (4 colons first, then 3)
    patterns = [
        r'(^[ \t]*::::\s*tabs[ \t]*\r?\n)(.*?)(^[ \t]*::::[ \t]*\r?\n?)',
        r'(^[ \t]*:::\s*tabs[ \t]*\r?\n)(.*?)(^[ \t]*:::[ \t]*\r?\n?)'
    ]
    
    def process_tab_block(match):
        nonlocal changed
        changed = True
        
        content = match.group(2)
        lines = content.splitlines()
        
        # Parse tab items
        items = []
        current_label = None
        current_content = []
        
        for line in lines:
            # Check if this line starts a new tab
            if re.match(r'^[ \t]*@tab\s+', line):
                # Save previous tab if exists
                if current_label is not None:
                    items.append((current_label, current_content))
                
                # Start new tab
                current_label = line.strip()[5:].strip()  # Remove '@tab ' prefix
                current_content = []
            else:
                # Add to current tab's content (even if no current tab yet)
                current_content.append(line)
        
        # Save last tab
        if current_label is not None:
            items.append((current_label, current_content))
        
        # If no tabs were found, return original content
        if not items:
            return match.group(0)
        
        # Build output
        result = "<Tabs>\n"
        for label, content_lines in items:
            result += f'  <TabItem label="{label}">\n'
            for content_line in content_lines:
                # Indent content properly, but preserve existing indentation
                if content_line.strip():  # Don't indent empty lines
                    result += f'    {content_line}\n'
                else:
                    result += '\n'
            result += "  </TabItem>\n"
        result += "</Tabs>\n"
        
        return result
    
    # Process each pattern
    for pattern in patterns:
        new_text = re.sub(pattern, process_tab_block, text, flags=re.DOTALL | re.MULTILINE)
        if new_text != text:
            changed = True
            text = new_text
    
    return text, changed


def transform_badges(text: str) -> Tuple[str, bool]:
    """Transform Badge components to Starlight syntax."""
    def replacer(match):
        attrs = dict(ATTR_RE.findall(match.group(1)))
        text_val = attrs.get('text') or attrs.get('label') or ''
        variant = (attrs.get('type') or attrs.get('variant') or '').lower()
        
        # Map variants to Starlight-compatible values
        if variant == 'warning':
            variant = 'caution'
        elif variant == 'info':
            variant = 'note'
        
        return f'<Badge text="{text_val}" variant="{variant}" />'
    
    new_text = BADGE_RE.sub(replacer, text)
    if new_text != text:
        return insert_import(new_text, BADGE_IMPORT_LINE), True
    return text, False

def fix_admonitions(text: str) -> Tuple[str, bool]:
    """Fix admonition syntax."""
    lines = text.splitlines()
    changed = False
    
    for i, line in enumerate(lines):
        # Handle admonitions with titles
        match = ADMON_WITH_TITLE_RE.match(line)
        if match:
            lines[i] = f":::{match.group('type')}[{match.group('title').strip()}]"
            changed = True
            continue
        
        # Handle type-only admonitions
        match = ADMON_TYPE_ONLY_RE.match(line)
        if match:
            lines[i] = f":::{match.group('type')}"
            changed = True
    
    return ("\n".join(lines), changed) if changed else (text, False)


def sanitize_var(key: str, lang: str, fname: str) -> str:
    """Create a sanitized variable name."""
    def clean(s):
        return re.sub(r'[^0-9A-Za-z_]', '_', s)
    
    base = Path(fname).stem
    return f"{clean(lang.lower())}_{clean(key)}_{clean(base)}"


def find_sample_path(rel: str, doc_path: Path) -> Path:
    """Find sample file path with better error handling."""
    rel_path = Path(rel.strip())
    
    # Try relative to current document
    if rel_path.parts and rel_path.parts[0] in ('.', '..'):
        doc_relative = (doc_path.parent / rel_path).resolve()
        if doc_relative.exists() and doc_relative.is_file():
            return doc_relative
    
    # Try relative to samples root
    sample_path = (SAMPLES_ROOT / rel_path).resolve()
    if sample_path.exists() and sample_path.is_file():
        return sample_path
    
    # Search by filename in samples root
    filename = rel_path.name
    if filename:
        try:
            matches = list(SAMPLES_ROOT.rglob(filename))
            if matches:
                if len(matches) > 1:
                    log_verbose(f"Warning: Multiple matches for '{filename}', using first: {matches[0]}")
                return matches[0]
        except ValueError as e:
            raise FileNotFoundError(f"Invalid pattern '{filename}' for rglob: {e}") from e
    
    raise FileNotFoundError(f"Cannot locate sample '{rel}' in any search path")


def process_inline_code_refs(text: str, path: Path) -> Tuple[str, bool]:
    """Process inline code references."""
    imports = []
    changed = False
    
    def replacer(match):
        nonlocal changed
        changed = True
        
        key = match.group('key')
        rel = match.group('rel').strip()
        
        try:
            src_path = (path.parent / rel).resolve()
            ext = src_path.suffix.lstrip('.').lower()
            lang = EXT_LABEL.get(ext, (None, ext))[1]
            var_name = sanitize_var(key, lang, str(src_path))
            import_path = "/" + src_path.relative_to(PROJECT_ROOT).as_posix() + "?raw"
            imports.append(f"import {var_name} from '{import_path}';")
            return f"```{lang}\n{var_name}\n```"
        except Exception as e:
            log_verbose(f"Error processing inline code ref {rel}: {e}")
            return match.group(0)  # Return original if error
    
    new_text = SIMPLE_CODE_RE.sub(replacer, text)
    if not changed:
        return text, False
    
    # Insert imports after frontmatter
    return insert_raw_imports(new_text, imports), True


def process_code_directives(text: str, path: Path) -> Tuple[str, bool]:
    """Process code directive blocks."""
    imports = []
    changed = False
    
    def replacer(match):
        nonlocal changed
        changed = True
        
        key = match.group('key')
        files = match.group('files').split(';')
        entries = []
        
        for file_ref in files:
            try:
                sample_path = find_sample_path(file_ref, path)
                ext = Path(file_ref).suffix.lstrip('.')
                label, lang = EXT_LABEL.get(ext, (ext, ext))
                var_name = sanitize_var(key, lang, file_ref)
                rel_path = sample_path.relative_to(PROJECT_ROOT).as_posix()
                imports.append(f"import {var_name} from '/{rel_path}?raw';")
                entries.append((label, lang, var_name))
            except FileNotFoundError:
                log_verbose(f"Could not find sample file: {file_ref}")
                continue
        
        if not entries:
            return ""
        
        imports.append(COMP_IMPORT_LINE)
        
        if len(entries) > 1:
            # Multiple files - use tabs
            result = ["<Tabs>"]
            for label, lang, var_name in entries:
                result.extend([
                    f'  <TabItem label="{label}">',
                    f'    <Code lang="{lang}" code={{{var_name}}} />',
                    '  </TabItem>',
                ])
            result.append("</Tabs>")
            return "\n".join(result)
        else:
            # Single file
            label, lang, var_name = entries[0]
            return f'<Code lang="{lang}" code={{{var_name}}} />'
    
    new_text = CODE_DIR_RE.sub(replacer, text)
    if not changed:
        return text, False
    
    return insert_raw_imports(new_text, imports), True


def insert_import(text: str, import_line: str) -> str:
    """Insert an import line after frontmatter if not already present."""
    if import_line in text:
        return text
    
    lines = text.splitlines()
    insert_idx = find_import_insertion_point(lines)
    
    # Ensure proper spacing
    if insert_idx > 0 and lines[insert_idx - 1].strip():
        lines.insert(insert_idx, '')
        insert_idx += 1
    
    lines.insert(insert_idx, import_line)
    
    if insert_idx + 1 < len(lines) and lines[insert_idx + 1].strip():
        lines.insert(insert_idx + 1, '')
    
    return "\n".join(lines)


def insert_raw_imports(text: str, imports: List[str]) -> str:
    """Insert raw import statements after frontmatter."""
    if not imports:
        return text
    
    # Deduplicate imports
    unique_imports = []
    for imp in imports:
        if imp not in unique_imports:
            unique_imports.append(imp)
    
    lines = text.splitlines()
    insert_idx = find_import_insertion_point(lines)
    
    # Insert imports with proper spacing
    if insert_idx > 0 and lines[insert_idx - 1].strip():
        lines.insert(insert_idx, '')
        insert_idx += 1
    
    for imp in reversed(unique_imports):
        lines.insert(insert_idx, imp)
    
    if insert_idx + len(unique_imports) < len(lines) and lines[insert_idx + len(unique_imports)].strip():
        lines.insert(insert_idx + len(unique_imports), '')
    
    return "\n".join(lines)


def find_import_insertion_point(lines: List[str]) -> int:
    """Find where to insert import statements."""
    if not lines or lines[0].strip() != '---':
        return 0
    
    try:
        fm_end_idx = lines[1:].index('---') + 1
        return fm_end_idx + 1
    except ValueError:
        return 0


def extract_starlight_components(text: str) -> Set[str]:
    """Extract used Starlight components from text."""
    components = set()
    for match in COMPONENT_RE.finditer(text):
        for name in match.group(1).split(','):
            components.add(name.strip())
    return components


def consolidate_imports(text: str) -> Tuple[str, bool]:
    """Consolidate all imports into organized blocks."""
    lines = text.splitlines()
    
    # Find frontmatter end
    fm_end_idx = -1
    if lines and lines[0].strip() == '---':
        try:
            fm_end_idx = lines[1:].index('---') + 1
        except ValueError:
            pass
    
    header_lines = lines[:fm_end_idx + 1] if fm_end_idx != -1 else []
    body_lines = lines[fm_end_idx + 1:] if fm_end_idx != -1 else lines
    
    # Separate imports from content
    raw_imports = []
    component_names = set()
    theme_component_imports = []
    content_lines = []
    
    for line in body_lines:
        stripped = line.strip()
        if RAW_IMPORT_RE.match(stripped):
            if stripped not in [imp.strip() for imp in raw_imports]:
                raw_imports.append(line)
        elif COMPONENT_RE.match(stripped):
            match = COMPONENT_RE.match(stripped)
            if match:
                for name in match.group(1).split(','):
                    component_names.add(name.strip())
        elif THEME_COMPONENT_RE.match(stripped):
            if stripped not in [imp.strip() for imp in theme_component_imports]:
                theme_component_imports.append(line)
        else:
            content_lines.append(line)
    
    # Rebuild file
    result = []
    
    # Add header
    if header_lines:
        result.extend(header_lines)
    
    # Add theme component imports first
    if theme_component_imports:
        if result and result[-1].strip():
            result.append('')
        result.extend(theme_component_imports)
        result.append('')
    
    # Add raw imports
    if raw_imports:
        if result and result[-1].strip():
            result.append('')
        result.extend(raw_imports)
        result.append('')
    
    # Add starlight component imports
    if component_names:
        if result and result[-1].strip():
            result.append('')
        sorted_components = ', '.join(sorted(component_names))
        result.append(f"import {{ {sorted_components} }} from '@astrojs/starlight/components';")
        result.append('')
    
    # Add content
    if content_lines:
        if result and result[-1].strip():
            result.append('')
        
        # Clean up consecutive blank lines in content
        cleaned_content = []
        prev_blank = False
        for line in content_lines:
            is_blank = not line.strip()
            if is_blank and prev_blank:
                continue
            cleaned_content.append(line)
            prev_blank = is_blank
        
        result.extend(cleaned_content)
    
    # Remove trailing blank lines
    while result and not result[-1].strip():
        result.pop()
    
    new_text = "\n".join(result)
    if result:
        new_text += "\n"
    
    return new_text, (text != new_text)


def markdown_autolinks_in_tables_to_mdx(text: str) -> Tuple[str, bool]:
    """Convert Markdown autolinks in tables to MDX links."""
    autolink_re = re.compile(r"<((?:https?://|www\.)[^>]+)>")
    table_row_re = re.compile(r"^\s*\|.*\|$")
    table_separator_re = re.compile(r"^\s*\|(?:\s*:?-+:?\s*\|)+")
    
    def replace_autolink(match):
        url = match.group(1)
        display_text = re.sub(r"^https?://", "", url)
        display_text = re.sub(r"^www\.", "", display_text)
        display_text = display_text.rstrip('/')
        return f"[{display_text or url}]({url})"
    
    lines = text.splitlines()
    new_lines = []
    changed = False
    
    for line in lines:
        if table_row_re.match(line) and not table_separator_re.match(line):
            parts = line.split('|')
            processed_parts = []
            
            for part in parts:
                new_part, num_subs = autolink_re.subn(replace_autolink, part)
                if num_subs > 0:
                    changed = True
                processed_parts.append(new_part)
            
            new_lines.append("|".join(processed_parts))
        else:
            new_lines.append(line)
    
    return ("\n".join(new_lines), changed) if changed else (text, False)


def close_br_tags(text: str) -> Tuple[str, bool]:
    """Ensure BR and WBR tags are properly closed for MDX."""
    new_text = re.sub(r'<(br|wbr)(?!/>)\s*/?>', r'<\1/>', text)
    return (new_text, new_text != text)

def fix_badge_duplicates(text: str) -> Tuple[str, bool]:
    """Fix Badge components with duplicate closing tags."""
    # Pattern to match self-closing Badge followed by closing tag
    # Matches: <Badge ...attributes... /></Badge>
    pattern = re.compile(r'<Badge\s+([^>]*?)\s*/>\s*</Badge>', re.IGNORECASE)
    
    def replacer(match):
        attributes = match.group(1)
        return f'<Badge {attributes} />'
    
    new_text = pattern.sub(replacer, text)
    return (new_text, new_text != text)


def remove_html_comments(text: str) -> Tuple[str, bool]:
    """Remove HTML comments."""
    new_text = re.sub(r'<!--[\s\S]*?-->', '', text)
    return (new_text, new_text != text)


def fix_extraneous_closing_brace(text: str) -> Tuple[str, bool]:
    """Fix extra closing braces in code props."""
    pattern = re.compile(r'(code=\{`[\s\S]*?`\})\}')
    new_text = pattern.sub(r'\1', text)
    return (new_text, new_text != text)


def rename_md_to_mdx(base: Path) -> None:
    """Rename .md files to .mdx."""
    if DRY_RUN:
        md_files = list(base.rglob("*.md"))
        if md_files:
            print(f"Would rename {len(md_files)} .md files to .mdx")
        return
    
    for md_file in base.rglob("*.md"):
        mdx_file = md_file.with_suffix(".mdx")
        if not mdx_file.exists():
            md_file.rename(mdx_file)
            log_verbose(f"Renamed: {md_file} -> {mdx_file}")

def remove_sink_component(text: str) -> Tuple[str, bool]:
    """Remove specific Vue.js component template and script block."""
    vue_component_pattern = re.compile(
    r'<template>\s*'
    r'<div>\s*'
    r'<label for="connector">Select Connector Type:</label>\s*'
    r'<select id="connector" v-model="selectedConnector">\s*'
    r'<option v-for="type in connectorTypes" :value="type">\{\{ type \}\}</option>\s*'
    r'</select>\s*'
    r'</div>\s*'
    r'</template>\s*'
    r'<script>\s*'
    r'export default \{\s*'
    r'data\(\) \{\s*'
    r'return \{\s*'
    r'selectedConnector: "serilog-sink",\s*//\s*Default connector type\s*'
    r'connectorTypes: \["serilog-sink", "http-sink", "custom-sink"\],\s*//\s*Add more connector types as needed\s*'
    r'\};\s*'
    r'\},\s*'
    r'\};\s*'
    r'</script>',
    re.DOTALL | re.MULTILINE
    )

    new_text = vue_component_pattern.sub('', text)
    return (new_text, new_text != text)

def escape_generic_types_in_tables(text: str) -> Tuple[str, bool]:
    """Escape generic type syntax in markdown tables for MDX compatibility."""
    table_row_re = re.compile(r"^\s*\|.*\|$")
    table_separator_re = re.compile(r"^\s*\|(?:\s*:?-+:?\s*\|)+")
    
    # Pattern to match generic types like dict<string,string>, List<T>, etc.
    generic_type_pattern = re.compile(r'(\w+)<([^>]+)>')
    
    def escape_generics(match):
        type_name = match.group(1)
        type_params = match.group(2)
        return f'{type_name}\\<{type_params}\\>'
    
    lines = text.splitlines()
    new_lines = []
    changed = False
    
    for line in lines:
        if table_row_re.match(line) and not table_separator_re.match(line):
            # This is a table row (not separator)
            new_line = generic_type_pattern.sub(escape_generics, line)
            if new_line != line:
                changed = True
            new_lines.append(new_line)
        else:
            new_lines.append(line)
    
    return ("\n".join(new_lines), changed) if changed else (text, False)

def clean_image_size_specs(text: str) -> Tuple[str, bool]:
    """Remove size specifications like =x200 from image references."""
    # Pattern to match size specs like =x200, =200x150, =200, etc.
    pattern = re.compile(r'(!\[[^\]]*\]\([^)]+?)=x?\d+(?:x\d+)?(\))')
    
    new_text = pattern.sub(r'\1\2', text)
    return (new_text, new_text != text)

def ensure_theme_component_import(text: str) -> str:
    """Ensure ThemeAwareImages import is present."""
    import_line = "import ThemeAwareImages from '@/components/ThemeAwareImages.astro';"
    
    # Check if import already exists
    if import_line in text or "import ThemeAwareImages" in text:
        return text
    
    lines = text.splitlines()
    insert_idx = find_import_insertion_point(lines)
    
    # Add import with proper spacing
    if insert_idx > 0 and lines[insert_idx - 1].strip():
        lines.insert(insert_idx, '')
        insert_idx += 1
    
    lines.insert(insert_idx, import_line)
    
    if insert_idx + 1 < len(lines) and lines[insert_idx + 1].strip():
        lines.insert(insert_idx + 1, '')
    
    return "\n".join(lines)

def process_file(path: Path) -> None:
    """Apply all transformations to a single MDX file."""
    global files_updated
    
    try:
        original_text = path.read_text(encoding="utf-8")
        text = original_text
        
        # Apply all transformations
        transformations = [
            ("frontmatter", lambda t: ensure_frontmatter(t)),
            ("frontmatter_syntax", lambda t: convert_frontmatter_syntax(t)),
            ("remove_sink_component", lambda t: remove_sink_component(t)),
            ("remove_cloud_banner", lambda t: remove_cloud_banner_component(t)),
            ("remove_catalog", lambda t: remove_catalog_component(t)),
            ("numeric_titles", lambda t: convert_numeric_titles_to_string(t)),
            ("remove_hope_icon", lambda t: remove_hope_icon_component(t)),
            ("theme_images", lambda t: convert_theme_images_to_component(t, path)),
            ("image_paths", lambda t: update_image_paths(t, path)),
            ("inline_code_refs", lambda t: process_inline_code_refs(t, path)),
            ("remove_curl_from_code", lambda t: remove_curl_from_code_directives(t)),
            ("redundant_h1", lambda t: remove_redundant_h1(t)),
            ("clean_code_blocks", lambda t: clean_code_block_languages(t)),
            ("normalize_powershell", lambda t: normalize_powershell_language(t)),
            ("tabs", lambda t: convert_tabs(t)),
            ("badges", lambda t: transform_badges(t)),
            ("fix_badge_duplicates", lambda t: fix_badge_duplicates(t)),
            ("admonitions", lambda t: fix_admonitions(t)),
            ("code_directives", lambda t: process_code_directives(t, path)),
            ("closing_braces", lambda t: fix_extraneous_closing_brace(t)),
            ("table_autolinks", lambda t: markdown_autolinks_in_tables_to_mdx(t)),
            ("escape_generic_types", lambda t: escape_generic_types_in_tables(t)),
            ("br_tags", lambda t: close_br_tags(t)),
            ("html_comments", lambda t: remove_html_comments(t)),
            ("consolidate_imports", lambda t: consolidate_imports(t)),
            ("clean_image_size_specs", lambda t: clean_image_size_specs(t)),
        ]
        
        changed_any = False
        for step_name, transform_func in transformations:
            try:
                text, step_changed = transform_func(text)
                if step_changed:
                    changed_any = True
                    log_verbose(f"Applied {step_name} to {path}")
            except Exception as e:
                print(f"Error in {step_name} transformation for {path}: {e}", file=sys.stderr)
                continue
        
        # Ensure required component imports are present
        text, imports_changed = ensure_component_imports(text)
        if imports_changed:
            changed_any = True
        
        # Ensure trailing newline
        if text and not text.endswith('\n'):
            text += '\n'
            if original_text.rstrip('\n') != text.rstrip('\n'):
                changed_any = True
        
        # Write back if changed
        if original_text != text:
            if not DRY_RUN:
                path.write_text(text, encoding="utf-8")
                files_updated += 1
                log_verbose(f"Updated: {path}")
            else:
                print(f"Would update: {path}")
                files_updated += 1
        elif changed_any:
            log_verbose(f"Processed {path} (no net changes)")
            
    except Exception as e:
        print(f"Error processing file {path}: {e}", file=sys.stderr)


def remove_cloud_banner_component(text: str) -> Tuple[str, bool]:
    """Remove <CloudBanner/> component references."""
    # Pattern to match various forms of CloudBanner component
    patterns = [
        re.compile(r'<CloudBanner\s*/>', re.IGNORECASE),           # <CloudBanner/>
        re.compile(r'<CloudBanner\s*></CloudBanner>', re.IGNORECASE),  # <CloudBanner></CloudBanner>
        re.compile(r'<CloudBanner\s*>\s*</CloudBanner>', re.IGNORECASE), # <CloudBanner> </CloudBanner> (with whitespace)
    ]
    
    changed = False
    new_text = text
    
    for pattern in patterns:
        updated_text = pattern.sub('', new_text)
        if updated_text != new_text:
            changed = True
            new_text = updated_text
    
    return (new_text, changed)


def ensure_component_imports(text: str) -> Tuple[str, bool]:
    """Ensure required component imports are present."""
    existing_components = extract_starlight_components(text)
    required_components = set()
    needs_cloud_banner = False
    
    # Check what components are used
    if '<Code ' in text:
        required_components.add('Code')
    if '<Tabs' in text or '<TabItem' in text:
        required_components.update(['Tabs', 'TabItem'])
    if '<Badge' in text:
        required_components.add('Badge')
    
    # Handle Starlight components
    missing_components = required_components - existing_components
    starlight_changed = False
    
    if missing_components:
        # Remove existing component imports
        lines = []
        for line in text.splitlines():
            if not COMPONENT_RE.match(line.strip()):
                lines.append(line)
        
        # Add consolidated import
        all_components = existing_components | required_components
        import_line = f"import {{ {', '.join(sorted(all_components))} }} from '@astrojs/starlight/components';"
        text = insert_import("\n".join(lines), import_line)
        starlight_changed = True
    
    return text, (starlight_changed)

def convert_frontmatter_syntax(text: str) -> Tuple[str, bool]:
    """Convert Markdown frontmatter syntax to MDX syntax."""
    # Pattern to match {{ $frontmatter.variable_name }}
    pattern = re.compile(r'\{\{\s*\$frontmatter\.(\w+)\s*\}\}')
    
    def replacer(match):
        variable_name = match.group(1)
        return f"{{frontmatter.{variable_name}}}"
    
    new_text = pattern.sub(replacer, text)
    return (new_text, new_text != text)

def remove_curl_from_code_directives(text: str) -> Tuple[str, bool]:
    """Remove 'curl', 'request', and 'response' from @[code{...}] directives, leaving empty braces."""
    # Pattern to match @[code{curl}], @[code{request}], or @[code{response}]
    pattern = re.compile(r'@\[code\{(?:curl|request|response)\}\]', re.IGNORECASE)
    
    new_text = pattern.sub('@[code{}]', text)
    return (new_text, new_text != text)

def validate_environment() -> bool:
    """Validate that required directories exist."""
    missing_dirs = []
    
    if not PROJECT_ROOT.exists():
        missing_dirs.append(f"PROJECT_ROOT: {PROJECT_ROOT}")
    if not SAMPLES_ROOT.exists():
        missing_dirs.append(f"SAMPLES_ROOT: {SAMPLES_ROOT}")
    
    if missing_dirs:
        print("Missing required directories:", file=sys.stderr)
        for dir_path in missing_dirs:
            print(f"  {dir_path}", file=sys.stderr)
        return False
    
    return True

def rename_readme_to_index(base: Path) -> None:
    """Rename README.md/README.mdx files to index.md/index.mdx."""
    readme_files_renamed = 0
    
    # Find all README files (case-insensitive)
    readme_patterns = ["README.md", "readme.md", "Readme.md", "README.mdx", "readme.mdx", "Readme.mdx"]
    
    for pattern in readme_patterns:
        for readme_file in base.rglob(pattern):
            # Determine the new filename based on the original extension
            if readme_file.suffix.lower() == '.md':
                index_file = readme_file.parent / "index.md"
            else:  # .mdx
                index_file = readme_file.parent / "index.mdx"
            
            # Only rename if index file doesn't already exist
            if not index_file.exists():
                if not DRY_RUN:
                    readme_file.rename(index_file)
                    log_verbose(f"Renamed README to index: {readme_file} -> {index_file}")
                else:
                    print(f"Would rename: {readme_file} -> {index_file}")
                readme_files_renamed += 1
            else:
                log_verbose(f"Skipping {readme_file} - index file already exists")
    
    if readme_files_renamed > 0:
        action_word = "Would rename" if DRY_RUN else "Renamed"
        print(f"{action_word} {readme_files_renamed} README files to index files")

def remove_hope_icon_component(text: str) -> Tuple[str, bool]:
    """Remove HopeIcon component references."""
    # Pattern to match various forms of HopeIcon component
    patterns = [
        re.compile(r'<HopeIcon\s+[^>]*?/>', re.IGNORECASE),           # <HopeIcon ... />
        re.compile(r'<HopeIcon\s+[^>]*?>\s*</HopeIcon>', re.IGNORECASE),  # <HopeIcon ...></HopeIcon>
        re.compile(r'<HopeIcon\s*>\s*</HopeIcon>', re.IGNORECASE),    # <HopeIcon></HopeIcon> (no attributes)
    ]
    
    changed = False
    new_text = text
    
    for pattern in patterns:
        updated_text = pattern.sub('', new_text)
        if updated_text != new_text:
            changed = True
            new_text = updated_text
    
    return (new_text, changed)

def print_summary() -> None:
    """Print summary of operations performed."""
    action_word = "Would process" if DRY_RUN else "Processed"
    print(f"\n{action_word} {files_updated} files")
    
    if img_converted > 0:
        action_word = "Would convert" if DRY_RUN else "Converted"
        print(f"{action_word} {img_converted} images to WebP")
    
    if img_copied > 0:
        action_word = "Would copy" if DRY_RUN else "Copied"
        print(f"{action_word} {img_copied} SVG files")




def main():
    """Main entry point."""
    global VERBOSE, DRY_RUN
    
    parser = argparse.ArgumentParser(
        description="Convert Markdown/MDX files for Starlight theme",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__
    )
    parser.add_argument(
        "path", 
        nargs="?", 
        help="Path to docs directory (default: auto-detected)"
    )
    parser.add_argument(
        "-v", "--verbose", 
        action="store_true", 
        help="Show detailed output"
    )
    parser.add_argument(
        "--dry-run", 
        action="store_true", 
        help="Show what would be done without making changes"
    )
    
    args = parser.parse_args()
    
    VERBOSE = args.verbose
    DRY_RUN = args.dry_run
    
    # Validate environment
    if not validate_environment():
        sys.exit(1)
    
    # Determine base directory
    base_dir = Path(args.path) if args.path else DOCS_DIR
    if not base_dir.exists():
        print(f"Error: Path not found: {base_dir}", file=sys.stderr)
        sys.exit(1)
    
    mode_text = " (DRY RUN)" if DRY_RUN else ""
    verbose_text = " (verbose)" if VERBOSE else ""
    print(f"Starting conversion on {base_dir}{mode_text}{verbose_text}")
    
    try:
        # Process images
        copy_all_images()
        
        # Clean up any PNG/JPG files that weren't properly converted
        clean_converted_pngs_in_destination()

        # Rename README files to index files (before .md to .mdx conversion)
        rename_readme_to_index(base_dir)
        
        # Rename .md to .mdx
        rename_md_to_mdx(base_dir)
        
        # Process all .mdx files
        mdx_files = list(base_dir.rglob("*.mdx"))
        if not mdx_files:
            print("No MDX files found to process", file=sys.stderr)
            sys.exit(1)
        
        log_verbose(f"Found {len(mdx_files)} MDX files to process")
        
        for file_path in mdx_files:
            process_file(file_path)
        
        print_summary()
        
    except KeyboardInterrupt:
        print("\nOperation cancelled by user", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"Unexpected error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()