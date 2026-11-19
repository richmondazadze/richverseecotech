// Optional browser acceptance suite against a built preview. No email is sent.
const {chromium,webkit}=require('playwright'), assert=require('node:assert/strict'),fs=require('fs');
const base=process.env.RV_URL || 'http://127.0.0.1:4295',records=[];
(async()=>{
for(const [engine,driver] of Object.entries({chromium,webkit})){
const b=await driver.launch(engine==='chromium'?{executablePath:process.env.CHROMIUM_PATH}:{});
try{
for(const w of [320,390,1440]){
 const p=await b.newPage({viewport:{width:w,height:w===1440?900:844},reducedMotion:'reduce'});
 const errors=[];p.on('pageerror',e=>errors.push(e.message));p.on('console',e=>{if(e.type()==='error' && /hydrat|react error/i.test(e.text()))errors.push(e.text())});
 const fit=async()=>assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'overflow '+p.url()+' at '+w);
 const go=async l=>{await l.scrollIntoViewIfNeeded();await l.press('Enter')};
 const h1=()=>p.getByRole('heading',{level:1});
 let response=await p.goto(base+'/');assert.equal(response.status(),200);assert.match(await h1().innerText(),/Websites that work/i);await fit();
 await go(p.getByRole('link',{name:'Compare repair, migration and rebuild.'}));
 await go(p.getByRole('link',{name:'our in-house enquiry project'}));
 await p.waitForURL('**/work/richverse-studio-website#acceptance-test');
 await go(p.getByRole('link',{name:'website redesign brief and template'}));
 await go(p.getByRole('link',{name:'two-quote cost worksheet below'}));
 const tool=p.locator('#quote-comparison');await tool.getByRole('status').waitFor();
 assert.match(await tool.innerText(),/6,600/);assert.match(await tool.innerText(),/6,000/);
 await tool.getByLabel(/Months to compare/).fill('18');assert.match(await tool.getByRole('status').innerText(),/A costs 5,700 · B costs 5,700/);
 await tool.getByLabel(/Months to compare/).fill('0');assert.match(await tool.getByRole('status').innerText(),/Enter all four/);
 await tool.getByLabel(/Months to compare/).fill('12');await fit();
 await go(p.getByRole('link',{name:'discuss your website with Richverse'}));await p.waitForFunction(()=>document.querySelector('#topic')?.textContent.includes('Web Development'));
 assert.equal(await p.locator('link[rel=canonical]').getAttribute('href'),'https://richverseecotech.com/contact'); await fit();
 await p.goto(base+'/blog/category/cybersecurity');await go(p.getByRole('link',{name:'Use the access review register'}));await p.waitForURL('**/small-business-access-review#record-the-decision');await p.reload();await p.locator('.article-media img').evaluate(im=>im.decode());await fit();
 const loc=await p.locator('#record-the-decision').boundingBox(); assert(loc && loc.y>=0 && loc.y<400,'anchor positioning '+JSON.stringify(loc));
 const down=await p.getByRole('link',{name:/Download the blank/}).getAttribute('href');let csv=await p.request.get(base+down);assert.equal(csv.status(),200);assert.match(await csv.text(),/Authorized owner,Due date/);
 await p.goto(base+'/blog/website-or-web-application#compare-three-options');await p.locator('.article-media img').evaluate(im=>im.decode());await fit();
 await go(p.getByRole('link',{name:'describe the workflow to our web development team'}));await p.waitForFunction(()=>document.querySelector('#topic')?.textContent.includes('Web Development'));
 assert.deepEqual(errors,[]);records.push({engine,width:w,home:true,guideToProject:true,quoteExamples:true,register:true,shareableAnswers:true,prefilledEnquiry:true,errors});await p.close();
}
const p=await b.newPage({javaScriptEnabled:false,viewport:{width:390,height:844}});await p.goto(base+'/blog/website-redesign-brief#quote-comparison');assert(await p.getByText(/both cost 5,700 at month 18/).isVisible());assert(!await p.getByLabel(/Months to compare/).isVisible());await p.goto(base+'/blog/small-business-access-review');await goNoJs(p);assert(await p.getByRole('link',{name:/Download the blank/}).isVisible());await p.close();console.log(engine,'passed at 320, 390 and 1440px plus JS disabled');
}finally{await b.close()}
}
if(process.env.RV_REPORT)fs.writeFileSync(process.env.RV_REPORT,JSON.stringify(records,null,2));
})().catch(e=>{console.error(e);process.exitCode=1});
async function goNoJs(p){await p.getByRole('link',{name:'When is a finding closed?'}).press('Enter');await p.waitForURL('**#verify-closure')}
