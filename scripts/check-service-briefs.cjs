// Production-preview regression: check the destination and user-visible state, not route constants.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const { chromium, webkit } = require('playwright');
const base = process.env.RV_URL || 'http://127.0.0.1:4295';
const slugs = { 'web-development':'Web Development', 'digital-marketing':'Digital Marketing', cybersecurity:'Cybersecurity', 'renewable-energy':'Renewable Energy' };
const report = [];
async function chapter(p, id) {
  await p.waitForFunction(id => document.querySelector('[aria-current="location"]')?.dataset.chapter === id, id, { timeout: 3000 });
}
async function run(engine, driver) {
  const b = await driver.launch(engine==='chromium'?{executablePath:process.env.CHROMIUM_PATH}:{});
  try {
    for (const width of [390,1440]) {
      const phone=width===390;
      const p=await b.newPage({viewport:{width,height:phone?844:900},hasTouch:phone,isMobile:phone});
      const errors=[];p.on('pageerror',e=>errors.push(e.message));
      for(const [slug,topic] of Object.entries(slugs)){
        const url=base+'/services/'+slug;
        for(const source of ['header','hero','closing']){
          await p.goto(url); // Fresh document: no previous enquiry draft or topic.
          let target;
          if(source==='header' && phone){
            await p.getByRole('button',{name:'Menu',exact:true}).tap();
            target=p.locator('#compact-nav .btn-primary');
          }else target=p.locator(source==='header'?'.header-cta':source==='hero'?'.service-hero-cta':'.cta-action a');
          if(phone)await target.tap();else await target.click();
          await p.waitForFunction(topic=>document.querySelector('#topic')?.value===topic,topic,{timeout:3000});
          if(source==='header') { await p.locator('#topic').selectOption('Something else');assert.equal(await p.locator('#topic').inputValue(),'Something else'); }
        }
        await p.goto(url);
        const evidence=p.locator('.brief-actions .studio-link');
        if(phone)await evidence.tap();else await evidence.press('Enter');
        await chapter(p,'worked-example');
        for (const id of ['deliverables','process','questions']){
          const link=p.locator('[data-chapter="'+id+'"]');
          if(phone)await link.tap();else await link.press('Enter');
          await chapter(p,id);
          assert.equal(await p.evaluate(()=>document.activeElement.id),id);
        }
        await p.goBack();await chapter(p,'process');
        await p.goto('about:blank');await p.goto(url+'#deliverables');await chapter(p,'deliverables');
        await p.waitForTimeout(650);await chapter(p,'deliverables');
        // Manual scrolling must take ownership even when the URL still names a chapter.
        await p.locator('#worked-example').evaluate(el=>scrollTo({top:el.getBoundingClientRect().top+scrollY-40,behavior:'instant'}));
        await chapter(p,'worked-example');
        if(slug==='web-development'){
          await p.locator('.proof-action').click();
          await p.waitForFunction(()=>document.querySelector('#topic')?.value==='Web Development');
        }
        report.push({engine,width,slug,entries:['header','hero','closing'],chapters:['worked-example','deliverables','process','questions'],manualScroll:true,manualTopic:true});
        console.log(engine,width,slug,'passed');
      }
      await p.goto(base+'/services');assert.equal(await p.locator('.header-cta').getAttribute('href'),'/contact');assert.deepEqual(errors,[]);await p.close();
    }
  }finally{await b.close();}
}
(async()=>{for (const [engine,driver] of Object.entries({chromium,webkit}))await run(engine,driver);
if(process.env.RV_AUDIT_OUT) await fs.writeFile(process.env.RV_AUDIT_OUT+'/journeys.json',JSON.stringify(report,null,2)+'\n');})().catch(e=>{console.error(e);process.exitCode=1});
