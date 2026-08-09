import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Two folders, one collection, identical URLs:
//   blog/        — posts written here (plain markdown, safe for the CMS's
//                  rich-text editor)
//   blog-notion/ — the posts ported from Notion. They carry raw HTML for
//                  things markdown can't express (toggles, tables, callouts,
//                  embeds), which a rich-text editor would silently delete,
//                  so the CMS edits these raw.
// The folder is stripped from the slug, so /blog/<name> works either way.
const blog = defineCollection({
  loader: glob({ pattern: '{blog,blog-notion}/**/*.md', base: './src/content' }),
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
