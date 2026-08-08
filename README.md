# shayanmz.com

Personal website — home, resume, blog, and the [Good UX board](https://shayanmz.com/good-ux).
Astro static site, deployed on Cloudflare Pages. No CMS, no subscriptions: content
is markdown in this repo.

## Layout

```
src/pages/index.md        home ("what I'm up to")
src/pages/resume.md       resume
src/content/blog/*.md     blog posts (one file per post; slug = filename)
src/pages/good-ux/        the Good UX appreciation board (React island)
src/data/ux-examples.ts   Good UX entries (media filenames; MEDIA_BASE prepended)
public/examples/          Good UX media (compressed: WebP / H.264)
public/images/blog/       blog images (rehosted from Super's CDN)
scripts/                  compress-asset.sh + add-item.mjs (Good UX add flow)
```

## Writing a blog post

Add `src/content/blog/my-post-slug.md`:

```markdown
---
title: "My post title"
date: 2026-08-08
icon: "🧠"            # optional, shows on the card + post header
cover: /images/blog/my-cover.webp   # optional card image
---

Body in plain markdown.
```

The blog index, post page, and RSS feed (`/rss.xml`) pick it up on the next build.

## Adding a Good UX item

Use the `good-ux-add` skill (shyOS), or by hand:

```bash
./scripts/compress-asset.sh ~/Desktop/recording.mov public/examples
node scripts/add-item.mjs --name "..." --company "..." --description "..." --media <file>
```

## Dev

```bash
npm install
npm run dev        # local dev server
npm run build      # static build to dist/
```

Deploys automatically on push to `main` via Cloudflare Pages.
