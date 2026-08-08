#!/usr/bin/env bash
# compress-asset.sh — normalize a single good-ux asset for the web.
#
#   ./scripts/compress-asset.sh <input> <output-dir> [slug]
#
# Images -> WebP  (q82, max width 1280)
# Videos -> H.264 (CRF 30, max width 1440, audio stripped, faststart)
# GIFs   -> MP4   (same video settings; far smaller than an animated GIF)
#
# Prints the final filename on stdout so callers can capture it.
# Requires: ffmpeg, cwebp  (brew install ffmpeg webp)

set -euo pipefail

IMG_MAX_W=1280
IMG_QUALITY=82
VID_MAX_W=1440
VID_CRF=30

die() { echo "error: $*" >&2; exit 1; }

[ $# -ge 2 ] || die "usage: compress-asset.sh <input> <output-dir> [slug]"
IN="$1"; OUTDIR="$2"; SLUG="${3:-}"

[ -f "$IN" ] || die "no such file: $IN"
command -v ffmpeg >/dev/null || die "ffmpeg not found (brew install ffmpeg)"
mkdir -p "$OUTDIR"

# Derive a url-safe slug from the filename when one isn't supplied.
if [ -z "$SLUG" ]; then
  # -E: BSD sed (macOS) has no \+ in basic regex, so use extended throughout.
  SLUG=$(basename "${IN%.*}" \
    | tr '[:upper:]' '[:lower:]' \
    | sed -E -e 's/[^a-z0-9]+/-/g' -e 's/^-+//' -e 's/-+$//')
  [ -n "$SLUG" ] || die "could not derive a slug from: $IN"
fi

ext="$(echo "${IN##*.}" | tr '[:upper:]' '[:lower:]')"

case "$ext" in
  png|jpg|jpeg|heic|webp)
    command -v cwebp >/dev/null || die "cwebp not found (brew install webp)"
    OUT="$OUTDIR/$SLUG.webp"
    read -r w h < <(ffprobe -v error -select_streams v:0 \
      -show_entries stream=width,height -of csv=p=0 "$IN" 2>/dev/null | tr ',' ' ')
    w=${w:-0}; h=${h:-0}

    if [ "$h" -gt 16000 ] 2>/dev/null; then
      # cwebp caps dimensions at 16383px; pre-scale tall full-page captures
      # through ffmpeg so they survive the conversion at all.
      tmp="$(mktemp -t goodux).png"
      ffmpeg -v error -i "$IN" -vf "scale='min($IMG_MAX_W,iw)':-1" "$tmp" -y
      cwebp -quiet -q "$IMG_QUALITY" "$tmp" -o "$OUT"
      rm -f "$tmp"
    elif [ "$w" -gt "$IMG_MAX_W" ] 2>/dev/null; then
      cwebp -quiet -q "$IMG_QUALITY" -resize "$IMG_MAX_W" 0 "$IN" -o "$OUT"
    else
      # Already narrower than the cap — re-encode without resizing so we
      # never upscale a small asset into a bigger file.
      cwebp -quiet -q "$IMG_QUALITY" "$IN" -o "$OUT"
    fi
    ;;

  mp4|mov|m4v|webm|avi|mkv|gif)
    OUT="$OUTDIR/$SLUG.mp4"
    ffmpeg -v error -i "$IN" \
      -vf "scale='min($VID_MAX_W,iw)':-2" \
      -c:v libx264 -crf "$VID_CRF" -preset slow \
      -pix_fmt yuv420p -an -movflags +faststart \
      "$OUT" -y
    ;;

  *)
    die "unsupported file type: .$ext"
    ;;
esac

# Some sources are already leaner than our encoder settings produce (a
# low-bitrate screen capture, say). Never ship the bigger file — if the
# input is already a web-ready format, keep it as-is.
if [ -f "$OUT" ] && [ "$IN" != "$OUT" ]; then
  in_b=$(wc -c < "$IN" | tr -d ' ')
  out_b=$(wc -c < "$OUT" | tr -d ' ')
  out_ext="$(echo "${OUT##*.}" | tr '[:upper:]' '[:lower:]')"
  if [ "$out_b" -ge "$in_b" ] && [ "$ext" = "$out_ext" ]; then
    cp -f "$IN" "$OUT"
  fi
fi

echo "$(basename "$OUT")"
