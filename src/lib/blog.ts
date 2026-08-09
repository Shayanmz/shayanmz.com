import type { CollectionEntry } from 'astro:content';

/**
 * Blog posts live in two folders — `blog/` (written here) and `blog-notion/`
 * (ported from Notion, HTML-bearing). The folder is an editing concern only:
 * it must never appear in a URL, or every ported post's link would break.
 */
export function postSlug(entry: CollectionEntry<'blog'>): string {
  return entry.id.replace(/^(blog|blog-notion)\//, '');
}

export function byNewest(
  a: CollectionEntry<'blog'>,
  b: CollectionEntry<'blog'>
): number {
  return b.data.date.getTime() - a.data.date.getTime();
}
