import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    icon: z.string().optional(),
    cover: z.string().optional(),
  }),
});

// The "now" page: current.md is what's live; archive/*.md are past versions,
// each one a dated snapshot shown in the Archive toggle at the bottom.
const now = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/now' }),
  schema: z.object({
    date: z.coerce.date(),
    /** optional note about what changed since the previous version */
    update: z.string().optional(),
  }),
});

export const collections = { blog, now };
