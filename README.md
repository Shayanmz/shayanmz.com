# shayanmz.com

Personal website — home, resume, blog, and the [Good UX board](https://shayanmz.com/good-ux).
Astro static site, deployed on Cloudflare Pages. No CMS, no subscriptions: content
is markdown in this repo.

## Layout

```
src/content/now/current.md      home ("what I'm up to") — the live version
src/content/now/archive/*.md    past versions, shown in the Archive toggle
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

## Updating the "now" page (and keeping the old one)

Nothing gets deleted — every past version stays readable under the Archive
toggle at the bottom of the homepage.

1. Move the current version into the archive, named for the date it went up:

   ```bash
   git mv src/content/now/current.md src/content/now/archive/2026-08-08.md
   ```

2. Write the new `src/content/now/current.md` with today's date:

   ```markdown
   ---
   date: 2026-11-01
   ---

   ### Section heading

   Body text.
   ```

The archived file can carry an optional `update:` line in its frontmatter —
a note on what happened since, shown in italics above that snapshot:

```markdown
---
date: 2026-08-08
update: Hit the 90lb weighted pull-up for 5 ✅
---
```

Archive entries are ordinary markdown, so an update can include images or
video the same way a blog post does.

## Adding a Good UX item

Use the `good-ux-add` skill (shyOS), or by hand:

```bash
./scripts/compress-asset.sh ~/Desktop/recording.mov public/examples
node scripts/add-item.mjs --name "..." --company "..." --description "..." --media <file>
```

## Editing in a browser (Pages CMS)

[`.pages.yml`](.pages.yml) configures [Pages CMS](https://pagescms.org), so the
site can be edited from a browser — phone included — at
[app.pagescms.org](https://app.pagescms.org). Sign in with GitHub, grant access
to this repo, and it exposes four things to edit: blog posts, the home page,
the home-page archive, and the resume. It commits straight to `main`; Cloudflare
rebuilds on push. No database — the markdown here stays the source of truth.

Images uploaded through the CMS land in `public/images` and are referenced as
`/images/...`. They are *not* auto-compressed, so run anything large through
`scripts/compress-asset.sh` when adding it from a laptop.

## Dev

```bash
npm install
npm run dev        # local dev server
npm run build      # static build to dist/
```

Deploys automatically on push to `main` via Cloudflare Pages.
