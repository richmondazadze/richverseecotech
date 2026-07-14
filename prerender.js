/**
 * Post-build prerender: renders every known route to a static index.html with
 * full markup + per-route <head> (title, meta, canonical, Open Graph, JSON-LD).
 * Runs after `vite build` (client) and `vite build --ssr` (server bundle).
 */
import fs from 'node:fs';
import path from 'node:path';

const { render, routes } = await import('./dist-ssr/entry-server.js');
const template = fs.readFileSync('dist/index.html', 'utf-8');

let count = 0;
for (const route of routes) {
  const { html, helmet } = render(route);
  const head = [
    helmet.title?.toString() ?? '',
    // `prioritizeSeoTags` routes description/canonical/OG into `priority`.
    helmet.priority?.toString() ?? '',
    helmet.meta?.toString() ?? '',
    helmet.link?.toString() ?? '',
    helmet.script?.toString() ?? '',
  ]
    .filter(Boolean)
    .join('\n    ');

  const page = template
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html);

  const outDir = route === '/' ? 'dist' : path.join('dist', route);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), page);
  count++;
}

console.log(`✓ Prerendered ${count} routes`);
