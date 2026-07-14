#!/usr/bin/env bash
# One-shot verification + finishing touches for the Richverseecotech redesign.
# Run this once you have freed a few GB of disk space:
#     cd redesign && bash verify.sh
set -e
cd "$(dirname "$0")"

echo "▶ 1/4  TypeScript typecheck…"
node node_modules/typescript/bin/tsc --noEmit && echo "   ✓ types OK"

echo "▶ 2/4  Production build…"
node node_modules/vite/bin/vite.js build && echo "   ✓ build OK"

echo "▶ 3/4  Regenerating a raster OG image (social-preview friendly)…"
if command -v qlmanage >/dev/null 2>&1; then
  qlmanage -t -s 1200 -o public public/og-image.svg >/dev/null 2>&1 || true
  if [ -f public/og-image.svg.png ]; then
    sips -s format jpeg -s formatOptions 80 public/og-image.svg.png --out public/og-image.jpg >/dev/null 2>&1 || true
    rm -f public/og-image.svg.png
    echo "   ✓ public/og-image.jpg created — update Seo.tsx OG_IMAGE + index.html to og-image.jpg"
  else
    echo "   ⚠ could not rasterize; keeping og-image.svg"
  fi
else
  echo "   ⚠ qlmanage not available; keeping og-image.svg"
fi

echo "▶ 4/4  Clean up build output…"
rm -rf dist
echo ""
echo "✅ Done. Start the app with:  npm run dev   (http://localhost:5273)"
echo "   Forms: set RESEND_API_KEY (see .env.example), then deploy to Vercel or run 'vercel dev'."
