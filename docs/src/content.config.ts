import { defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';

// Custom function to preserve dots in slugs and normalize to lowercase
function generateId({ entry, base }: { entry: string; base: string }) {
  // Remove the base path and file extension, but preserve dots
  const relativePath = entry.replace(base + '/', '').replace(/\.mdx?$/, '');
  
  // Convert path separators to forward slashes, preserve dots, and normalize to lowercase
  return relativePath.replace(/\\/g, '/').toLowerCase();
}

export const collections = {
  docs: defineCollection({
    loader: glob({
      pattern: '**/*.{md,mdx}',
      base: './src/content/docs',
      generateId: generateId,
    }),
    schema: docsSchema(),
  }),
};