#!/usr/bin/env node
// scripts/generate-sidebars.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the project root (parent of tools directory)
const projectRoot = path.resolve(__dirname, '..');
const docsRoot = path.join(projectRoot, 'src', 'content', 'docs');

console.log('🚀 Starting sidebar generation script...');
console.log('📁 Project root:', projectRoot);
console.log('📁 Docs root:', docsRoot);
console.log('🔍 Checking if docs root exists:', fs.existsSync(docsRoot));

// Format label from file/folder name
function formatLabel(name) {
  const withoutExt = name.replace(/\.(md|mdx)$/, '');
  const withSpaces = withoutExt.replace(/[-_]/g, ' ');
  return withSpaces
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// Generate sidebar from directory structure
function generateSidebarFromDirectory(dirPath, basePath = '') {
  const items = [];
  
  console.log(`📂 Processing directory: ${dirPath}`);
  console.log(`   Base path: ${basePath}`);
  
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    console.log(`   Found ${entries.length} entries`);
    
    // Sort entries: directories first, then files
    entries.sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });
    
    for (const entry of entries) {
      console.log(`   - ${entry.name} (${entry.isDirectory() ? 'dir' : 'file'})`);
      
      // Skip hidden files, images, sidebar.json, and non-content files
      if (entry.name.startsWith('.') || 
          entry.name === 'sidebar.json' ||
          /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(entry.name)) {
        console.log(`     ↳ Skipped (${entry.name})`);
        continue;
      }
      
      const fullPath = path.join(dirPath, entry.name);
      const relativePath = basePath ? `${basePath}/${entry.name}` : entry.name;
      
      if (entry.isDirectory()) {
        // Check if directory has content
        const subItems = generateSidebarFromDirectory(fullPath, relativePath);
        if (subItems.length > 0) {
          console.log(`     ↳ Added directory with ${subItems.length} items`);
          items.push({
            label: formatLabel(entry.name),
            items: subItems,
            collapsed: true
          });
        } else {
          console.log(`     ↳ Skipped empty directory`);
        }
      } else if (/\.(md|mdx)$/i.test(entry.name)) {
        // Handle index files as parent link
        if (entry.name.toLowerCase() === 'index.md' || entry.name.toLowerCase() === 'index.mdx') {
          // Add as first item with special handling
          console.log(`     ↳ Added overview (index file)`);
          items.unshift({
            label: 'Overview',
            link: `/${basePath.toLowerCase()}`
          });
        } else {
          console.log(`     ↳ Added page: ${entry.name}`);
          items.push({
            label: formatLabel(entry.name),
            link: `/${relativePath.replace(/\.(md|mdx)$/, '').toLowerCase()}`
          });
        }
      } else {
        console.log(`     ↳ Skipped (not .md/.mdx)`);
      }
    }
  } catch (error) {
    console.error(`❌ Error generating sidebar for ${dirPath}:`, error);
  }
  
  console.log(`   Generated ${items.length} items for ${dirPath}`);
  return items;
}

// Find all directories that should have sidebars
function findSidebarDirectories(dir, accumulated = []) {
  console.log(`🔍 Scanning directory: ${dir}`);
  
  if (!fs.existsSync(dir)) {
    console.log(`   Directory doesn't exist: ${dir}`);
    return accumulated;
  }
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  console.log(`   Found ${entries.length} entries in ${dir}`);
  
  // Check if this directory has MDX content
  const hasMdxContent = entries.some(e => !e.isDirectory() && /\.(md|mdx)$/i.test(e.name));
  console.log(`   Has MDX content: ${hasMdxContent}`);
  
  if (hasMdxContent) {
    console.log(`   ✅ Added to sidebar directories: ${dir}`);
    accumulated.push(dir);
  }
  
  // Look for version patterns to determine where to place sidebars
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const fullPath = path.join(dir, entry.name);
      
      // Skip hidden directories
      if (entry.name.startsWith('.')) {
        console.log(`   Skipping hidden directory: ${entry.name}`);
        continue;
      }
      
      // Check if this is a version directory
      const isVersionDir = /^v?\d+\.\d+/.test(entry.name);
      console.log(`   Directory ${entry.name} is version dir: ${isVersionDir}`);
      
      if (isVersionDir) {
        // For version directories, each should have its own sidebar
        console.log(`   ✅ Added version directory: ${fullPath}`);
        accumulated.push(fullPath);
      } else {
        // Recursively check subdirectories
        findSidebarDirectories(fullPath, accumulated);
      }
    }
  }
  
  return accumulated;
}

// Generate sidebar.json files
function generateSidebars() {
  console.log('🔍 Scanning for directories that need sidebars...\n');
  
  // First, check if the docs root exists
  if (!fs.existsSync(docsRoot)) {
    console.error(`❌ Docs root directory doesn't exist: ${docsRoot}`);
    console.log('💡 Make sure you\'re running this from the project root directory');
    return;
  }
  
  const directories = findSidebarDirectories(docsRoot);
  console.log(`\n📊 Found ${directories.length} directories that need sidebars:`);
  directories.forEach((dir, index) => {
    console.log(`   ${index + 1}. ${path.relative(docsRoot, dir)}`);
  });
  
  if (directories.length === 0) {
    console.log('⚠️  No directories found that need sidebars. This could mean:');
    console.log('   - No .md/.mdx files found in any subdirectories');
    console.log('   - All directories already have sidebar.json files');
    console.log('   - The docs structure is different than expected');
    return;
  }
  
  console.log('\n🛠️  Processing directories...\n');
  
  let generated = 0;
  let skipped = 0;
  let errors = 0;
  
  directories.forEach(dir => {
    const sidebarPath = path.join(dir, 'sidebar.json');
    const relativeDir = path.relative(docsRoot, dir);
    
    console.log(`📝 Processing: ${relativeDir}`);
    
    // Skip if sidebar.json already exists
    if (fs.existsSync(sidebarPath)) {
      console.log(`   ✓ Sidebar already exists: ${path.relative(docsRoot, sidebarPath)}`);
      skipped++;
      return;
    }
    
    try {
      // Generate sidebar content
      const relativePath = path.relative(docsRoot, dir);
      const sidebar = generateSidebarFromDirectory(dir, relativePath);
      
      if (sidebar.length > 0) {
        // Write sidebar.json
        fs.writeFileSync(sidebarPath, JSON.stringify(sidebar, null, 2));
        console.log(`   ✅ Generated sidebar: ${path.relative(docsRoot, sidebarPath)}`);
        console.log(`   📄 Found ${sidebar.length} top-level items`);
        generated++;
      } else {
        console.log(`   ⚠️  No content found in: ${relativeDir}`);
        skipped++;
      }
    } catch (error) {
      console.error(`   ❌ Error processing ${relativeDir}:`, error.message);
      errors++;
    }
  });
  
  console.log('\n✅ Sidebar generation complete!');
  console.log(`📊 Summary:`);
  console.log(`   Generated: ${generated} sidebars`);
  console.log(`   Skipped: ${skipped} directories`);
  console.log(`   Errors: ${errors} failures`);
  
  if (generated > 0) {
    console.log('\n💡 You can now customize the generated sidebar.json files as needed.');
    console.log('The sidebars support:');
    console.log('  - Custom labels and ordering');
    console.log('  - Collapsed/expanded sections');
    console.log('  - Autogenerate directives for dynamic content');
  }
}

// Add error handling for the main execution
try {
  generateSidebars();
} catch (error) {
  console.error('💥 Fatal error:', error);
  process.exit(1);
}

// Run the script only if this file is executed directly
if (import.meta.url === `file://${__filename}`) {
  console.log('🎯 Script executed directly');
} else {
  console.log('📦 Script imported as module');
}