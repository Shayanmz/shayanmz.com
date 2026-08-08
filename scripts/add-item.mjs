#!/usr/bin/env node
// add-item.mjs — append one entry to src/data/ux-examples.ts.
//
//   node scripts/add-item.mjs \
//     --name "Cursor hover effect" \
//     --company "TLDraw" \
//     --description "Why this is good..." \
//     --media cursor-hover-effect.mp4 \
//     [--date "November 24, 2025"]   # defaults to today
//     [--dry-run]                    # print the entry, write nothing
//
// mediaType is inferred from the file extension. The id is the highest
// existing id + 1. Display order is handled by the date sort in the data
// file, so entries are simply appended.

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DATA = join(ROOT, 'src/data/ux-examples.ts')

const args = process.argv.slice(2)
const flag = (name) => {
  const i = args.indexOf(`--${name}`)
  return i === -1 ? undefined : args[i + 1]
}
const dryRun = args.includes('--dry-run')

const name = flag('name')
const company = flag('company')
const description = flag('description')
const media = flag('media')
let date = flag('date')

const missing = Object.entries({ name, company, description, media })
  .filter(([, v]) => !v)
  .map(([k]) => `--${k}`)
if (missing.length) {
  console.error(`error: missing required flag(s): ${missing.join(', ')}`)
  process.exit(1)
}

// Fail loudly if the compressed asset isn't actually on disk — a broken
// media path renders as an invisible tile, which is easy to miss.
const assetPath = join(ROOT, 'public/examples', media)
if (!existsSync(assetPath)) {
  console.error(`error: asset not found at public/examples/${media}`)
  console.error('       run scripts/compress-asset.sh first')
  process.exit(1)
}

const ext = media.split('.').pop().toLowerCase()
const mediaType = ['mp4', 'webm', 'mov'].includes(ext)
  ? 'video'
  : ext === 'gif'
    ? 'gif'
    : 'image'

if (!date) {
  date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const src = readFileSync(DATA, 'utf8')

const ids = [...src.matchAll(/id: '(\d+)'/g)].map((m) => Number(m[1]))
const nextId = ids.length ? Math.max(...ids) + 1 : 1

if (src.includes(`media: '${media}'`)) {
  console.error(`error: ${media} is already referenced in ux-examples.ts`)
  process.exit(1)
}

// TypeScript single-quoted string literal: escape backslashes and quotes,
// and keep newlines as \n escapes (descriptions use them for paragraphs).
const esc = (s) =>
  s
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r?\n/g, '\\n')

const entry = `  {
    id: '${nextId}',
    name: '${esc(name)}',
    company: '${esc(company)}',
    description: '${esc(description)}',
    date: '${date}',
    media: '${esc(media)}',
    mediaType: '${mediaType}'
  }`

if (dryRun) {
  console.log(entry)
  process.exit(0)
}

// Append to the end of the unsortedExamples array — the closing `\n];`
// that terminates it, before the sort/export block.
const marker = '\n];'
const at = src.indexOf(marker)
if (at === -1) {
  console.error('error: could not locate the end of unsortedExamples[]')
  process.exit(1)
}

const updated = src.slice(0, at) + ',\n' + entry + src.slice(at)
writeFileSync(DATA, updated)

console.log(`added id ${nextId}: ${name} — ${company} (${mediaType}, ${date})`)
