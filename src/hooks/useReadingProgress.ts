import { useEffect } from 'react';

// Measure the article once per layout change. A scroll frame only writes a transform.
export default function useReadingProgress(entry:string, reduced:boolean) {
  useEffect(()=>{

    const article=document.querySelector<HTMLElement>('main [data-reading]');
    const body=article ?? document.documentElement;
    const rail=document.querySelector<HTMLElement>('.reading-rail');
    const fill=rail?.firstElementChild as HTMLElement | null;
    if(!body || !rail || !fill || !('ResizeObserver' in window)) return;
    const links=Array.from(body.querySelectorAll<HTMLAnchorElement>('[data-chapter]'));
    const contents=body.querySelector<HTMLElement>('.brief-contents');
    if(reduced && !links.length) return;
    let start=0, span=0, frame=0, current=-2;
    let offsets:number[]=[];
    function paint() {
      frame=0;
      const t=Math.max(0,Math.min(1,(window.scrollY-start)/Math.max(1,span)));
      const at=window.scrollY+1; // Native scroll destinations can round to a whole pixel.
      let next=offsets.filter(top=>top<=at).length-1;
      // WebKit can settle a few pixels short after an initial hash jump.
      // Keep the explicitly focused chapter within its landing gutter;
      // once the reader scrolls past the gutter the geometry owns the state.
      const upcoming=links[next+1]?.dataset.chapter;
      if(upcoming && upcoming===document.activeElement?.id && window.location.hash==='#'+upcoming && offsets[next+1]-at<=16) next++;
      if(current!==next){links.forEach((a,i)=>i===next ? a.setAttribute('aria-current','location') : a.removeAttribute('aria-current'));current=next;}
      if(!reduced) fill!.style.transform=`scaleX(${t.toFixed(4)})`;
    }
    function measure() {
      const r=body!.getBoundingClientRect();
      const header=rail!.parentElement!.offsetHeight;
      // Use the same root padding and section margin as native fragment navigation.
      const padding=parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      if(contents && article){
        const sticky=getComputedStyle(contents).position==='sticky';
        const room=header+(sticky ? contents.offsetHeight : 0)+16-padding;
        article.style.setProperty('--brief-header',header+'px');
        article.style.setProperty('--brief-extra',Math.max(0,Math.ceil(room))+'px');
      }
      offsets=links.map(link=>{
        const section=document.getElementById(link.dataset.chapter!)!;
        const margin=parseFloat(getComputedStyle(section).scrollMarginTop) || 0;
        return section.getBoundingClientRect().top+window.scrollY-padding-margin;
      });
      start=article ? Math.max(0,window.scrollY+r.top-header) : 0;
      span=(article ? window.scrollY+r.bottom : document.documentElement.scrollHeight)-window.innerHeight-start;
      rail!.hidden=reduced || span<=0;paint();
    }
    const scroll=()=>{if(!frame) frame=requestAnimationFrame(paint);};
    const sizes=new ResizeObserver(measure);sizes.observe(body);sizes.observe(document.body);
    if(contents){sizes.observe(contents);sizes.observe(rail.parentElement!);}
    window.addEventListener('resize',measure);window.addEventListener('scroll',scroll,{passive:true});
    measure();
    return ()=>{cancelAnimationFrame(frame);sizes.disconnect();window.removeEventListener('resize',measure);window.removeEventListener('scroll',scroll);rail.hidden=true;links.forEach(a=>a.removeAttribute('aria-current'));fill.style.removeProperty('transform');article?.style.removeProperty('--brief-header');article?.style.removeProperty('--brief-extra');};
  },[entry,reduced]);
}
