// Parse the shipped documents, independently of the React route declarations.
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { parseDocument, DomUtils } from 'htmlparser2';

const origin = 'https://richverseecotech.com';
const read = name => readFileSync('dist/'+name, 'utf8');
const xml = name => parseDocument(read(name), {xmlMode:true});
const elements = (root,name) => DomUtils.getElementsByTagName(name,root.children);
const text = DomUtils.textContent;
const childText = (parent,name) => text(elements(parent,name)[0]);
const withAttr = (doc,tag,key,value) => elements(doc,tag).find(el=>el.attribs[key]===value);
const address = node => {
  const u=new URL(text(node));
  assert.equal(u.origin,origin); assert.ok(!u.search && !u.hash);
  return u.pathname;
};
const entries = elements(xml('sitemap.xml'),'url');
const pages = new Map(entries.map(entry=>{
  const p=address(elements(entry,'loc')[0]);
  return [p,parseDocument(read(p==='/'?'index.html':p.slice(1)+'.html'))];
}));
assert.equal(entries.length,pages.size,'duplicate sitemap entry');
const linked = new Map(), articles = new Map(), descriptions = new Set(), anchors = new Map();
const nodes = new Map([...pages].map(([p,doc])=>[p,elements(doc,'script').filter(n=>n.attribs.type==='application/ld+json').map(n=>JSON.parse(text(n)))]));
for(const [p,doc] of pages){
  const ids=DomUtils.findAll(el=>Boolean(el.attribs.id),doc.children).map(el=>el.attribs.id);
  anchors.set(p,new Set(ids));
}
for(const [p,doc] of pages){
  const desc=withAttr(doc,'meta','name','description')?.attribs.content;
  assert.ok(desc && !descriptions.has(desc),p+': missing or duplicate description'); descriptions.add(desc);
  const outgoing=new Set(); linked.set(p,outgoing);
  for(const a of elements(doc,'a')){
    if(!a.attribs.href) continue;
    const u=new URL(a.attribs.href,origin+p);
    if(u.origin!==origin || !pages.has(u.pathname))continue;
    outgoing.add(u.pathname);
    if(u.hash)assert.ok(anchors.get(u.pathname).has(decodeURIComponent(u.hash.slice(1))),p+' → '+a.attribs.href+': missing section');
  }
  const article=nodes.get(p).find(n=>n['@type']==='BlogPosting');
  if(!article)continue;
  articles.set(p,article);
  const parent=new URL(article.about['@id']);
  assert.ok(nodes.get(parent.pathname)?.some(n=>n['@id']===parent.href),p+': unresolved service');
  const body=withAttr(doc,'div','class','article-body'),nav=withAttr(doc,'nav','class','article-contents');
  const headings=elements(body,'h2'),toc=elements(nav,'a');
  assert.ok(headings.length>1 && headings.every(h=>h.attribs.id),p+': missing answer anchors');
  assert.deepEqual(toc.map(a=>[a.attribs.href,text(a)]),headings.map(h=>['#'+h.attribs.id,text(h)]),p+': contents must match headings');
  assert.equal(new Set(headings.map(h=>h.attribs.id)).size,headings.length,p+': duplicate section');
  for(const [property,expected] of [['article:published_time',article.datePublished],['article:modified_time',article.dateModified],['og:image',article.image]]){
    assert.equal(withAttr(doc,'meta','property',property)?.attribs.content,expected,p+': '+property);
  }
}
const depth=new Map([['/',0]]);
for(const [p,n] of depth)for(const dest of linked.get(p))if(!depth.has(dest))depth.set(dest,n+1);
assert.equal(depth.size,pages.size,'orphaned sitemap page');
assert.ok(Math.max(...depth.values())<=3,'sitemap page deeper than three clicks');
for(const p of ['/work/richverse-studio-website','/blog/repair-migrate-or-rebuild','/services/web-development'])assert.equal(depth.get(p),1,p+': priority page must be linked from Home');
const items=elements(xml('feed.xml'),'item'), feedPaths=new Set();
for(const item of items){
  const p=address(elements(item,'link')[0]), article=articles.get(p);feedPaths.add(p);
  assert.equal(childText(item,'guid'),origin+p);
  assert.equal(childText(item,'title'),article?.headline);
  assert.equal(childText(item,'description'),article?.description);
  assert.equal(new Date(childText(item,'pubDate')).toISOString().slice(0,10),article?.datePublished);
}
assert.equal(items.length,feedPaths.size,'duplicate feed item');
assert.deepEqual(feedPaths,new Set(articles.keys()),'feed must contain every published article');
assert.ok(withAttr(pages.get('/blog'),'a','href','/feed.xml'),'journal needs a visible RSS link');
for(const entry of entries){
  const p=address(elements(entry,'loc')[0]), doc=pages.get(p);
  const images=elements(entry,'image:loc').map(address);
  if(articles.has(p))assert.ok(images.includes(new URL(articles.get(p).image).pathname),p+': missing article sitemap image');
  for(const img of images)assert.ok(existsSync('dist'+img) && withAttr(doc,'img','src',img),p+': sitemap image must exist on page: '+img);
}
const config=JSON.parse(readFileSync('vercel.json','utf8'));
for(const r of config.redirects.filter(r=>!r.has))assert.ok(r.permanent && pages.has(r.destination) && !pages.has(r.source),r.source+': redirect must point directly to a canonical page');
assert.equal(config.redirects.find(r=>r.source==='/social-media-analytics-marketing-success-2024')?.destination,'/blog/social-media-analytics','preserve known root-level article reference');
console.log(`Verified ${pages.size} crawlable pages, max depth ${Math.max(...depth.values())}, ${articles.size} RSS entries, answer anchors, editorial dates, sitemap images and redirect destinations.`);
