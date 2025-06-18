#!/usr/bin/env node

import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const configPath = path.join(__dirname, 'repos-config.json');

// Check if config file exists
if (!fs.existsSync(configPath)) {
  console.error(`Configuration file not found: ${configPath}`);
  process.exit(1);
}

let config;
try {
  config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
} catch (error) {
  console.error(`Error reading configuration file: ${error.message}`);
  process.exit(1);
}

// Run a git command asynchronously with better error handling
function runGitAsync(args, cwd) {
  return new Promise((resolve, reject) => {
    const cp = spawn('git', args, { cwd, stdio: ['ignore', 'pipe', 'pipe'] });
    
    let stdout = '';
    let stderr = '';
    
    cp.stdout?.on('data', (data) => {
      stdout += data.toString();
    });
    
    cp.stderr?.on('data', (data) => {
      stderr += data.toString();
    });
    
    cp.on('error', err => {
      console.error(`Git command failed: git ${args.join(' ')}`);
      console.error(`Error: ${err.message}`);
      reject(err);
    });
    
    cp.on('exit', code => {
      if (code === 0) {
        resolve();
      } else {
        console.error(`Git command failed: git ${args.join(' ')}`);
        if (stderr) {
          console.error(`Git error output: ${stderr.trim()}`);
          
          // Provide helpful error messages for common issues
          if (stderr.includes('Authentication failed') || stderr.includes('Permission denied')) {
            console.error('\n🔐 Authentication Error:');
            console.error('This appears to be a private repository. Try one of these solutions:');
            console.error('1. Use SSH URL instead: git@github.com:owner/repo.git');
            console.error('2. Set up GitHub CLI: gh auth login');
            console.error('3. Use a Personal Access Token in the URL');
            console.error('4. Make sure your SSH keys are properly configured');
          }
          
          if (stderr.includes('Repository not found')) {
            console.error('\n❌ Repository Error:');
            console.error('The repository was not found. Check:');
            console.error('1. The repository URL is correct');
            console.error('2. You have access to the repository');
            console.error('3. The repository exists and is not private (or you have proper auth)');
          }
        }
        reject(new Error(`git ${args.join(' ')} exited with code ${code}`));
      }
    });
  });
}

async function cloneSubPath(repoUrl, branchName, subPath, destDir, entryId, version) {
  const tempDir = path.join(projectRoot, '.tmp', entryId, version, subPath.replace(/[\\/]+/g, '_'));

  try {
    // Prepare directories
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
    if (fs.existsSync(destDir)) {
      fs.rmSync(destDir, { recursive: true, force: true });
    }
    fs.mkdirSync(tempDir, { recursive: true });

    console.log(`Cloning ${entryId}@${version}:${subPath}`);
    
    // Clone with sparse checkout
    await runGitAsync(['clone', '--depth', '1', '--branch', branchName, '--filter=blob:none', '--sparse', repoUrl, tempDir], projectRoot);
    await runGitAsync(['sparse-checkout', 'init', '--cone'], tempDir);
    await runGitAsync(['sparse-checkout', 'set', subPath], tempDir);

    // Check if subPath exists in the cloned repository
    const sourcePath = path.join(tempDir, subPath);
    if (!fs.existsSync(sourcePath)) {
      throw new Error(`Subpath '${subPath}' not found in repository ${repoUrl} on branch ${branchName}`);
    }

    // Copy only the subPath contents
    fs.mkdirSync(destDir, { recursive: true });
    
    // Check if there's a nested folder with the same name as entryId that we should extract from
    const nestedPath = path.join(sourcePath, entryId);
    const finalSourcePath = fs.existsSync(nestedPath) ? nestedPath : sourcePath;
    
    fs.cpSync(finalSourcePath, destDir, { recursive: true });

    console.log(`✓ Completed ${entryId}@${version}:${subPath}`);
  } catch (error) {
    console.error(`✗ Failed to clone ${entryId}@${version}:${subPath} - ${error.message}`);
    throw error;
  } finally {
    // Clean up temp directory even if there was an error
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  }
}

async function main() {
  console.log('Starting repository synchronization...');
  
  const operations = [];
  let totalOperations = 0;

  // Build list of all operations to perform
  for (const entry of config) {
    const repoUrl = entry.repo;
    
    if (!repoUrl) {
      console.error(`Missing repo URL for entry: ${entry.id || 'unknown'}`);
      continue;
    }

    for (const branch of entry.branches) {
      const version = branch.version;
      const branchName = branch.name;
      const entryId = entry.id;

      if (!version || !branchName || !entryId) {
        console.error(`Missing required fields for entry: ${JSON.stringify(branch)}`);
        continue;
      }

      const basePath = entry.basePath || entry.id || 'default';

      // Add docs operation
      if (entry.docsRelativePath) {
        const subPath = entry.docsRelativePath.join('/').replace(/\\/g, '/');
        
        // Only include version in path if entry.includeVersionInPath is not false
        const includeVersion = entry.includeVersionInPath !== false;
        const docsDest = includeVersion 
          ? path.join(projectRoot, 'src', 'content', 'docs', basePath, version)
          : path.join(projectRoot, 'src', 'content', 'docs', basePath);
        
        operations.push({
          type: 'docs',
          repoUrl,
          branchName,
          subPath,
          destDir: docsDest,
          entryId,
          version
        });
        totalOperations++;
      }

      // Add samples operation
      if (entry.samplesRelativePath) {
        const subPath = entry.samplesRelativePath.join('/').replace(/\\/g, '/');
        
        // Only include version in path if entry.includeVersionInPath is not false
        const includeVersion = entry.includeVersionInPath !== false;
        const samplesDest = includeVersion 
          ? path.join(projectRoot, 'src', 'content', '_samples', basePath, version)
          : path.join(projectRoot, 'src', 'content', '_samples', basePath);
        
        operations.push({
          type: 'samples',
          repoUrl,
          branchName,
          subPath,
          destDir: samplesDest,
          entryId,
          version
        });
        totalOperations++;
      }
    }
  }

  console.log(`Total operations to perform: ${totalOperations}`);

  // Execute all operations in parallel
  const results = await Promise.allSettled(
    operations.map(async (op) => {
      try {
        await cloneSubPath(op.repoUrl, op.branchName, op.subPath, op.destDir, op.entryId, op.version);
        return { success: true, operation: op };
      } catch (error) {
        console.error(`Failed to sync ${op.type} for ${op.entryId}@${op.version}: ${error.message}`);
        return { success: false, operation: op, error };
      }
    })
  );

  // Count results
  const completedOperations = results.filter(r => r.status === 'fulfilled' && r.value.success).length;
  const failedOperations = results.filter(r => r.status === 'rejected' || (r.status === 'fulfilled' && !r.value.success)).length;

  console.log('\nSynchronization complete!');
  console.log(`✓ Completed: ${completedOperations}`);
  console.log(`✗ Failed: ${failedOperations}`);
  console.log(`📊 Total: ${totalOperations}`);

  // Show failed operations details
  if (failedOperations > 0) {
    console.log('\nFailed operations:');
    results.forEach(result => {
      if (result.status === 'rejected') {
        console.log(`❌ ${result.reason.message}`);
      } else if (result.status === 'fulfilled' && !result.value.success) {
        const op = result.value.operation;
        console.log(`❌ ${op.entryId}@${op.version} (${op.type})`);
      }
    });
    
    process.exit(1);
  }
}

// Handle process termination gracefully
process.on('SIGINT', () => {
  console.log('\nOperation cancelled by user');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\nOperation terminated');
  process.exit(0);
});

main().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});