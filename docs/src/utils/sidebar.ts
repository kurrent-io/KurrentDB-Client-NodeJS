// src/utils/sidebar.ts
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface SidebarItem {
  label: string;
  link?: string;
  items?: SidebarItem[];
  autogenerate?: { directory: string };
  collapsed?: boolean;
}

export interface VersionInfo {
  version: string;
  label: string;
  urlPath: string;
}

// Parse version string to comparable array
function parseVersion(version: string): number[] {
  // Remove 'v' prefix if present
  const cleanVersion = version.replace(/^v/, '');
  return cleanVersion.split('.').map(part => parseInt(part, 10) || 0);
}

// Compare two version arrays using semver logic
function compareVersions(a: number[], b: number[]): number {
  const maxLength = Math.max(a.length, b.length);
  
  for (let i = 0; i < maxLength; i++) {
    const aPart = a[i] || 0;
    const bPart = b[i] || 0;
    
    if (aPart > bPart) return 1;
    if (aPart < bPart) return -1;
  }
  
  return 0;
}

// Find the latest version from an array of version strings
function findLatestVersion(versions: string[]): string | null {
  if (versions.length === 0) return null;
  
  let latestVersion = versions[0];
  let latestParsed = parseVersion(latestVersion);
  
  for (let i = 1; i < versions.length; i++) {
    const currentParsed = parseVersion(versions[i]);
    if (compareVersions(currentParsed, latestParsed) > 0) {
      latestVersion = versions[i];
      latestParsed = currentParsed;
    }
  }
  
  return latestVersion;
}

// Format label from file/folder name
export function formatLabel(name: string): string {
  // Remove file extension
  const withoutExt = name.replace(/\.(md|mdx)$/, '');
  
  // Replace dashes and underscores with spaces
  const withSpaces = withoutExt.replace(/[-_]/g, ' ');
  
  // Capitalize first letter of each word
  return withSpaces
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// Get the sidebar file path for a given content path
export function getSidebarPath(contentPath: string): string | null {
  const normalizedPath = contentPath.replace(/\\/g, '/');
  const docsRoot = path.join(process.cwd(), 'src', 'content', 'docs');
  
  // Split the path to analyze structure
  const pathParts = normalizedPath.split('/').filter(Boolean);
  
  // Try to find sidebar.json by walking up the directory tree
  let currentPath = path.join(docsRoot, ...pathParts);
  
  while (currentPath.startsWith(docsRoot) && currentPath !== docsRoot) {
    const sidebarPath = path.join(currentPath, 'sidebar.json');
    if (fs.existsSync(sidebarPath)) {
      return sidebarPath;
    }
    currentPath = path.dirname(currentPath);
  }
  
  return null;
}

// Load sidebar from JSON file
export function loadSidebarFromFile(filePath: string): SidebarItem[] | null {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error loading sidebar from ${filePath}:`, error);
    return null;
  }
}

// Auto-generate sidebar from directory structure
export function generateSidebarFromDirectory(dirPath: string, basePath: string = ''): SidebarItem[] {
  const items: SidebarItem[] = [];
  
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    
    // Sort entries: directories first, then files
    entries.sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });
    
    for (const entry of entries) {
      // Skip hidden files, images, and non-content files
      if (entry.name.startsWith('.') || 
          entry.name === 'sidebar.json' ||
          /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(entry.name)) {
        continue;
      }
      
      const fullPath = path.join(dirPath, entry.name);
      const relativePath = basePath ? `${basePath}/${entry.name}` : entry.name;
      
      if (entry.isDirectory()) {
        // Check if directory has content
        const subItems = generateSidebarFromDirectory(fullPath, relativePath);
        if (subItems.length > 0) {
          items.push({
            label: formatLabel(entry.name),
            items: subItems,
            collapsed: true
          });
        }
      } else if (/\.(md|mdx)$/i.test(entry.name)) {
        // Skip index files as they're usually the parent page
        if (entry.name.toLowerCase() === 'index.md' || entry.name.toLowerCase() === 'index.mdx') {
          continue;
        }
        
        // Generate the link path - ensure forward slashes
        const linkPath = `/${relativePath.replace(/\.(md|mdx)$/, '').toLowerCase()}`.replace(/\\/g, '/');
        
        items.push({
          label: formatLabel(entry.name),
          link: linkPath
        });
      }
    }
  } catch (error) {
    console.error(`Error generating sidebar for ${dirPath}:`, error);
  }
  
  return items;
}

// Extract version information from path
export function extractVersionInfo(contentPath: string): { 
  isVersioned: boolean; 
  currentVersion?: string;
  versionPattern?: RegExp;
  basePathBeforeVersion?: string;
} {
  const normalizedPath = contentPath.replace(/\\/g, '/');
  
  // Pattern for server versions (v5, v22.10, v24.6, v25.0, etc.)
  // Handle both with and without leading slash
  const serverMatch = normalizedPath.match(/(?:^|\/)server\/(v\d+(?:\.\d+)?)/);
  
  if (serverMatch) {
    return {
      isVersioned: true,
      currentVersion: serverMatch[1],
      versionPattern: /^v\d+(?:\.\d+)?$/,
      basePathBeforeVersion: '/server'
    };
  }
  
  // Pattern for client versions (1.0, 2.0, etc.)
  const clientMatch = normalizedPath.match(/(?:^|\/)clients\/([^/]+)\/([^/]+)\/([\d.]+)/);
  
  if (clientMatch) {
    return {
      isVersioned: true,
      currentVersion: clientMatch[3],
      versionPattern: /^\d+\.\d+$/,
      basePathBeforeVersion: `/clients/${clientMatch[1]}/${clientMatch[2]}`
    };
  }
  
  return { isVersioned: false };
}

// Get available versions for a versioned path
export function getAvailableVersions(contentPath: string): VersionInfo[] {
  const versionInfo = extractVersionInfo(contentPath);
  if (!versionInfo.isVersioned || !versionInfo.basePathBeforeVersion) {
    return [];
  }
  
  const docsRoot = path.join(process.cwd(), 'src', 'content', 'docs');
  const basePath = path.join(docsRoot, ...versionInfo.basePathBeforeVersion.split('/').filter(Boolean));
  
  try {
    const entries = fs.readdirSync(basePath, { withFileTypes: true });
    const versionStrings: string[] = [];
    
    // Collect all valid version directories
    for (const entry of entries) {
      if (entry.isDirectory() && versionInfo.versionPattern?.test(entry.name)) {
        versionStrings.push(entry.name);
      }
    }
    
    // Find the latest version using semver comparison
    const latestVersion = findLatestVersion(versionStrings);
    
    // Create VersionInfo objects
    const versions: VersionInfo[] = versionStrings.map(version => ({
      version,
      label: version === latestVersion ? `${version} (Latest)` : version,
      urlPath: `${versionInfo.basePathBeforeVersion}/${version}`
    }));
    
    // Sort versions in descending order for display
    versions.sort((a, b) => {
      const aParsed = parseVersion(a.version);
      const bParsed = parseVersion(b.version);
      return compareVersions(bParsed, aParsed); // Reverse order for descending
    });
    
    return versions;
  } catch (error) {
    console.error(`Error getting versions for ${contentPath}:`, error);
    return [];
  }
}

// Process sidebar items to ensure proper paths for versioned content
function processSidebarPaths(items: SidebarItem[], currentPath: string): SidebarItem[] {
  const versionInfo = extractVersionInfo(currentPath);
  
  return items.map(item => {
    const newItem = { ...item };
    
    // If this is a link, ensure it uses forward slashes
    if (newItem.link) {
      // Replace all backslashes with forward slashes
      newItem.link = newItem.link.replace(/\\/g, '/');
      
      // If we're in versioned content, ensure it includes the version
      if (versionInfo.isVersioned && versionInfo.currentVersion) {
        // Check if the link already includes the base path and version
        const linkHasVersion = newItem.link.includes(versionInfo.currentVersion);
        
        if (!linkHasVersion) {
          // Prepend the versioned base path if not already there
          const versionedBase = `${versionInfo.basePathBeforeVersion}/${versionInfo.currentVersion}`;
          
          // Remove leading slash from link for proper concatenation
          const cleanLink = newItem.link.startsWith('/') ? newItem.link.slice(1) : newItem.link;
          
          // Only prepend if the link doesn't already start with the versioned base
          if (!newItem.link.startsWith(versionedBase)) {
            newItem.link = `${versionedBase}/${cleanLink}`;
          }
        }
      }
    }
    
    // Process child items recursively
    if (newItem.items) {
      newItem.items = processSidebarPaths(newItem.items, currentPath);
    }
    
    return newItem;
  });
}

// Main function to get sidebar configuration
export function getSidebarConfig(currentPath: string): {
  sidebar: SidebarItem[];
  versionInfo?: {
    isVersioned: boolean;
    currentVersion?: string;
    availableVersions?: VersionInfo[];
  };
} {
  try {
    // Clean up the path
    const cleanPath = currentPath.replace(/^\//, '').replace(/\/$/, '').toLowerCase();
    
    
    // Extract version information
    const versionInfo = extractVersionInfo(cleanPath);
    
    // Try to find sidebar.json file
    const sidebarPath = getSidebarPath(cleanPath);
    let sidebar: SidebarItem[] = [];
    
    if (sidebarPath) {
      // Load from file
      const loadedSidebar = loadSidebarFromFile(sidebarPath);
      if (loadedSidebar) {
        sidebar = loadedSidebar;
      }
    } 
    
    // If no sidebar loaded, generate from directory
    if (sidebar.length === 0) {
      const docsRoot = path.join(process.cwd(), 'src', 'content', 'docs');
      const contentDir = path.join(docsRoot, ...cleanPath.split('/').filter(Boolean));
      
      // For versioned content, generate from the version directory
      if (fs.existsSync(contentDir) && fs.statSync(contentDir).isDirectory()) {
        sidebar = generateSidebarFromDirectory(contentDir, cleanPath);
      } else {
        // Try parent directory
        const parentDir = path.dirname(contentDir);
        if (fs.existsSync(parentDir) && fs.statSync(parentDir).isDirectory()) {
          const parentPath = cleanPath.split('/').slice(0, -1).join('/');
          sidebar = generateSidebarFromDirectory(parentDir, parentPath);
        }
      }
    }
    
    // Process autogenerate directives in loaded sidebar
    sidebar = processSidebarItems(sidebar, cleanPath);
    
    // Process paths to ensure they're correct for versioned content
    sidebar = processSidebarPaths(sidebar, cleanPath);
    
    
    // Get available versions if versioned
    let availableVersions: VersionInfo[] = [];
    if (versionInfo.isVersioned) {
      availableVersions = getAvailableVersions(cleanPath);
    }
    
    return {
      sidebar,
      versionInfo: {
        isVersioned: versionInfo.isVersioned,
        currentVersion: versionInfo.currentVersion,
        availableVersions
      }
    };
  } catch (error) {
    console.error('[getSidebarConfig] Error:', error);
    return { sidebar: [] };
  }
}

// Process sidebar items to handle autogenerate directives
function processSidebarItems(items: SidebarItem[], basePath: string): SidebarItem[] {
  return items.map(item => {
    // Create a copy of the item
    const processedItem = { ...item };
    
    // Ensure link uses forward slashes if present
    if (processedItem.link) {
      processedItem.link = processedItem.link.replace(/\\/g, '/');
    }
    
    if (processedItem.autogenerate?.directory) {
      const docsRoot = path.join(process.cwd(), 'src', 'content', 'docs');
      const dirPath = path.join(docsRoot, processedItem.autogenerate.directory);
      
      if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
        const generatedItems = generateSidebarFromDirectory(dirPath, processedItem.autogenerate.directory);
        return {
          ...processedItem,
          items: generatedItems
        };
      }
    } else if (processedItem.items) {
      return {
        ...processedItem,
        items: processSidebarItems(processedItem.items, basePath)
      };
    }
    
    return processedItem;
  });
}