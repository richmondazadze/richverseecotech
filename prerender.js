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
for (const route of [...routes, '/404']) {
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

  const output = route === '/' ? 'dist/index.html' : path.join('dist', route + '.html');
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, page);
  count++;
}

console.log(`✓ Prerendered ${count} routes`);

const indexed = routes.filter(route => !route.startsWith('/blog/tag/') && route !== '/studio/components');
fs.writeFileSync('dist/sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  indexed.map(route => `  <url><loc>https://richverseecotech.com${route}</loc></url>`).join('\n') +
  '\n</urlset>\n');
