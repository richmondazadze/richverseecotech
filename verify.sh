#!/usr/bin/env bash
# Complete local verification. Requires Node.js on PATH.
set -euo pipefail
cd "$(dirname "$0")"
node node_modules/typescript/bin/tsc --noEmit
node --test scripts/forms.test.mjs scripts/packaged-forms.test.mjs
node node_modules/vite/bin/vite.js build
node node_modules/vite/bin/vite.js build --ssr src/entry-server.tsx --outDir dist-ssr
node prerender.js
node scripts/verify-site.mjs
