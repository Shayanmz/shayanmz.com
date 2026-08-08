---
name: good-ux-add
version: 2.0.0
description: Add a new example to the Good UX board (shayanmz.com/good-ux). Use when Shy wants to add a UX example, drop in a screenshot/screen recording of good UX, or says "add this to good-ux". Handles compression, the data entry, and the push.
---

# Add a Good UX Item

Adds one example to the Good UX board. Shy points at a file and gives you four
things; you compress the asset, write the entry, show him the result, and ship it.

**Repo:** `~/Documents/github/shayanmz.com` — the unified site repo
(`Shayanmz/shayanmz.com` on GitHub). The board lives at `/good-ux` inside it.
Pushing to `main` triggers the Cloudflare build. *(The old standalone
`Shayanmz/good-ux` repo is archived — never commit there.)*

## What you need from Shy

| Field | Maps to | Notes |
|---|---|---|
| The asset | `public/examples/<slug>.<ext>` | image or video, path on his machine |
| Title | `name` | the headline on the tile |
| Name/business | `company` | the sub-header — usually a domain like `posthog.com` |
| Description | `description` | the on-hover / modal copy — why it's good |

If he gives you the file and a sentence of context, infer the rest and **show him
your draft rather than asking four questions**. He's optimizing for low friction —
one round of review beats an interrogation. Only ask when something is genuinely
ambiguous (e.g. you can't tell what company the screenshot is from).

Date defaults to today. Only set `--date` if he says the example is older.

## Steps

### 1. Get the repo ready

```bash
cd ~/Documents/github/shayanmz.com && git pull --ff-only
```

If the directory doesn't exist:

```bash
git clone https://github.com/Shayanmz/shayanmz.com.git ~/Documents/github/shayanmz.com
```

### 2. Compress the asset

Never commit a raw screenshot or screen recording. Always run it through:

```bash
./scripts/compress-asset.sh "<source-path>" public/examples
```

It prints the final filename. It converts images to WebP (q82, max 1280px wide)
and video to H.264 (CRF 30, max 1440px, audio stripped), derives a URL-safe slug
from the filename, and keeps the original if re-encoding would make it bigger.

Pass a third argument to override the slug when the source filename is
meaningless (`Screen Recording 2026-08-08 at 3.41.02 PM.mov`):

```bash
./scripts/compress-asset.sh "<source-path>" public/examples raycast-prompt-explorer
```

Requires `ffmpeg` and `cwebp` (`brew install ffmpeg webp`).

### 3. Add the entry

```bash
node scripts/add-item.mjs \
  --name "<title>" \
  --company "<name/business>" \
  --description "<description>" \
  --media "<filename printed by step 2>"
```

It infers `mediaType` from the extension, assigns the next id, and refuses to
write if the asset isn't on disk or is already referenced. Add `--dry-run` to see
the entry without writing it.

For multi-paragraph descriptions, pass real newlines in the shell argument — the
script escapes them to `\n`, which is what the modal renders as paragraph breaks.

### 4. Review with Shy — do this before committing

Build, then report back in chat, as text:

```bash
npm run build
```

- the compressed size vs the original (e.g. `18MB → 1.2MB`)
- the final tile copy: title, company, description
- the resolved media URL

The board's tiles lazy-load via IntersectionObserver, so a screenshot of a local
preview is often blank and is **not** proof it works. To actually verify, check
the built output:

```bash
grep -c "<filename>" dist/_astro/GoodUXApp*.js   # entry made it into the bundle
ls -la dist/examples/<filename>                   # asset was copied
```

Wait for his OK. If he wants copy changes, edit `src/data/ux-examples.ts`
directly — it's the last entry in `unsortedExamples`.

### 5. Ship it

```bash
git add -A
git commit -m "content: add <title> (<company>)"
git push origin main
```

Cloudflare rebuilds and deploys on push. Confirm with him it's live a minute or
two later.

## Notes

- **Order on the board** is by `date` descending, handled by the data file's
  sort. Entries are appended, never inserted — don't hand-place them.
- **`media` holds a bare filename**, not a path. `MEDIA_BASE` in
  `src/data/ux-examples.ts` is prepended at export, so moving media to R2 or a
  CDN later is a one-line change. Don't reintroduce `/examples/` prefixes.
- **Size ceiling:** any single file over 25 MiB breaks the deploy. Compression
  keeps everything well under this; if a compressed video is still over ~10MB,
  it's probably too long — ask Shy to trim it.
- **Three entries have missing assets** (`ios-from-messages-suggestion`,
  `submitting-feedback-in-rewind-ai`, `superhuman-ui-transition-on-zoom`). They
  render as blank tiles. If Shy ever produces those files, drop them in
  `public/examples/` as `.webp` and they'll light up — no data change needed.
