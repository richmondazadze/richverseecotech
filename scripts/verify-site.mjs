import fs from 'node:fs';
import postcss from 'postcss';
import path from 'node:path';
import assert from 'node:assert/strict';
import { routes } from '../dist-ssr/entry-server.js';

const sitemap = fs.readFileSync('dist/sitemap.xml','utf8');
const indexed = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
const expected = routes.filter(route=>!route.startsWith('/blog/tag/') && route !== '/studio/components').map(route=>`https://richverseecotech.com${route}`);
assert.deepEqual(indexed.sort(), expected.sort(), 'sitemap matches indexable routes');
const titles = new Set();
for (const route of [...routes,'/404']) {
  const file=route==='/'?'dist/index.html':path.join('dist',`${route}.html`);
  const html=fs.readFileSync(file,'utf8');
  const title=html.match(/<title[^>]*>(.*?)<\/title>/)?.[1];
  assert.ok(title,`${route}: title`);
  assert.ok(!titles.has(title),`${route}: unique title`); titles.add(title);
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length,1,`${route}: one H1`);
  assert.equal([...html.matchAll(/<link[^>]+rel="canonical"/g)].length,1,`${route}: one canonical`);
  const canonical=html.match(/<link\b(?=[^>]*\brel="canonical")[^>]*\bhref="([^"]+)"/)?.[1];
  assert.equal(canonical,`https://richverseecotech.com${route}`,`${route}: canonical URL`);
  assert.match(html,/<meta[^>]+name="description"[^>]+content="[^"]+"/,`${route}: description`);
  assert.match(html,/<meta[^>]+property="og:image"[^>]+content="https:\/\//,`${route}: absolute sharing image`);
  const shouldNoindex=route==='/404'||route==='/studio/components'||route.startsWith('/blog/tag/');
  assert.equal(/name="robots" content="noindex/.test(html),shouldNoindex,`${route}: robots policy`);
  const nodes=[...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].map(m=>JSON.parse(m[1]));
  if (route==='/blog'||route.startsWith('/blog/category/')||route.startsWith('/blog/tag/')) {
    const list=nodes.find(n=>n['@type']==='CollectionPage')?.mainEntity;
    assert.equal(list?.['@type'],'ItemList',`${route}: journal listing`);
    const displayed=[...html.matchAll(/<a\b(?=[^>]*\bclass="blog-(?:featured|card)")(?=[^>]*\bhref="([^"]+)")[^>]*>/g)].map(m=>new URL(m[1],canonical).href);
    assert.ok(displayed.length>0,`${route}: visible article links`);
    assert.deepEqual(list.itemListElement.map(item=>item.url),displayed,`${route}: article order must match visible cards`);
    for (const item of list.itemListElement) {
      const page=fs.readFileSync(path.join('dist',new URL(item.url).pathname+'.html'),'utf8');
      assert.ok(page.includes('"@id":'+JSON.stringify(item.item['@id'])),`${route}: referenced article exists`);
    }
  }
  for (const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)[^\"]*"/g)) {
    const url=match[1];
    if(url.startsWith('//')) continue;
    assert.ok(url==='/'||routes.includes(url)||fs.existsSync(path.join('dist',url)),`${route}: local target ${url}`);
  }
  assert.ok(!html.includes('<!--app-html-->'),`${route}: prerendered content`);
}
for (const [,href] of fs.readFileSync('dist/llms.txt','utf8').matchAll(/\]\((https:\/\/richverseecotech\.com[^)]*)\)/g)) {
  const u=new URL(href); assert.ok(indexed.includes(u.origin+u.pathname),`llms.txt: canonical page ${href}`);
  if(u.hash) assert.ok(fs.readFileSync(path.join('dist',u.pathname+'.html'),'utf8').includes('id="'+u.hash.slice(1)+'"'),`llms.txt: section exists ${href}`);
}
const css=fs.readdirSync('dist/assets').filter(f=>f.endsWith('.css')).map(f=>fs.readFileSync(`dist/assets/${f}`,'utf8')).join('');
postcss.parse(css).walkDecls(decl=>{
  assert.ok(!/gradient\(/.test(decl.value),'No decorative CSS gradients');
  if(/blur\(/.test(decl.value)){
    assert.ok(/^(?:-webkit-)?backdrop-filter$/.test(decl.prop) && /^\.practice-cover::?before$/.test(decl.parent.selector),
      'Frost only the hero reading pane');
  }
});
for(const mask of ['cover-edge','cover-edge-mobile','cover-feather']){
  assert.ok(css.includes('/editorial/'+mask+'.svg') && fs.existsSync('dist/editorial/'+mask+'.svg'),'Photographic cover mask: '+mask);
}
const icons=JSON.parse(fs.readFileSync('src/data/icons.json','utf8'));
for (const name of Object.keys(icons)) {
  const svg=fs.readFileSync(`public/brand/icons/${name}.svg`,'utf8');
  assert.match(svg,/viewBox="0 0 24 24"/); assert.match(svg,/stroke-width="1.5"/); assert.match(svg,/stroke="currentColor"/);
}
function luminance(hex) { const rgb=hex.match(/\w\w/g).map(s=>parseInt(s,16)/255).map(c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4); return .2126*rgb[0]+.7152*rgb[1]+.0722*rgb[2]; }
const pairs=[['171717','fcfbf9'],['4b4b4b','fcfbf9'],['4b4b4b','ffffff'],['4338ca','f1f0f8'],['ffffff','4338ca'],['c3c2cb','171717'],['a5b4fc','39334f'],['a23427','fff2ef']];
const contrasts=pairs.map(([a,b])=>{const x=luminance(a),y=luminance(b),ratio=(Math.max(x,y)+.05)/(Math.min(x,y)+.05);assert.ok(ratio>=4.5,`contrast ${a}/${b}`);return `${a}/${b}: ${ratio.toFixed(2)}:1`;});
console.log(`Verified ${routes.length+1} rendered pages, ${indexed.length} sitemap URLs, metadata, JSON-LD, local links/assets, ${Object.keys(icons).length} icons, and scoped hero glass.`);
console.log(`Text contrast: ${contrasts.join('; ')}`);

await import('./verify-discovery.mjs');
