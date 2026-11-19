/**
 * Post-build prerender: renders every known route to a static index.html with
 * full markup + per-route <head> (title, meta, canonical, Open Graph, JSON-LD).
 * Runs after `vite build` (client) and `vite build --ssr` (server bundle).
 */
import fs from 'node:fs';
import path from 'node:path';

const { render, routes, articleLastModified, journalEntries, sitemapImages } = await import('./dist-ssr/entry-server.js');
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
    .replace('<!--app-head-->', () => head)
    .replace('<!--app-html-->', () => html);

  const output = route === '/' ? 'dist/index.html' : path.join('dist', route + '.html');
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, page);
  count++;
}

console.log(`✓ Prerendered ${count} routes`);

const indexed = routes.filter(route => !route.startsWith('/blog/tag/') && route !== '/studio/components');
const origin = 'https://richverseecotech.com';
const xml = value => value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&apos;');
const declaration = '<?xml version="1.0" encoding="UTF-8"?>\n';
const loc = route => xml(origin + route);
fs.writeFileSync('dist/sitemap.xml', declaration +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n' +
  indexed.map(route => {
    const date = articleLastModified[route], image = sitemapImages[route];
    return `  <url><loc>${loc(route)}</loc>${date ? '<lastmod>'+xml(date)+'</lastmod>' : ''}${image ? '<image:image><image:loc>'+loc(image)+'</image:loc></image:image>' : ''}</url>`;
  }).join('\n') + '\n</urlset>\n');
fs.writeFileSync('dist/feed.xml', declaration +
  '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel>' +
  '<title>Richverse Ecotech Insights</title><link>'+origin+'/blog</link><description>Practical guides from the Richverse technology and energy studio.</description><language>en</language>' +
  '<atom:link href="'+origin+'/feed.xml" rel="self" type="application/rss+xml"/>\n' +
  journalEntries.map(p => `  <item><title>${xml(p.title)}</title><link>${loc(p.path)}</link><guid isPermaLink="true">${loc(p.path)}</guid><description>${xml(p.summary)}</description><category>${xml(p.category)}</category><pubDate>${new Date(p.published+'T00:00:00Z').toUTCString()}</pubDate></item>`).join('\n') +
  '\n</channel></rss>\n');
