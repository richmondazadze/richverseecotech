import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { attachSectionSlides, sectionBoundary } from './sectionSlides';

type Cue =
  | 'title'
  | 'copy'
  | 'reading'
  | 'row'
  | 'label'
  | 'plate'
  | 'sheet'
  | 'index'
  | 'rule'
  | 'spread'
  | 'ink'
  | 'trace'
  | 'credit';
const cues: [string, Cue][] = [
  ['main p,main dd,.directory-bio,.footer-news-copy,.footer-brand > p', 'copy'],
  ['main h1,main h2,.footer-quote', 'title'],
  [
    'main h3,main dt,.directory-role,.office-index strong,.next-steps strong,.faq-label,.footer-col > .footer-label',
    'row',
  ],
  [
    '.eyebrow,.cover-kicker,main figcaption,.footer-news-line > span,.blog-cat,.blog-meta,[data-enter="caption"]',
    'label',
  ],
  ['.article-body :is(p,ul,ol),.legal :is(p,ul,ol)', 'reading'],
  ['.cap-title,.blog-card-title', 'row'],
  ['[data-enter="plate"],.blog-card-media', 'plate'],
  ['.work-sample,.live-evidence .proof-steps', 'sheet'],
  ['[data-enter="index"]', 'index'],
  ['.chapter-rule', 'rule'],
  ['.cover-story,.blog-featured-body,.blog-card-body', 'spread'],
  ['.blog-featured-media picture,.article-media picture', 'ink'],
  ['.enquiry-trace > i', 'trace'],
  ['.footer-bottom > span:first-child', 'credit'],
];

const exclude =
  '.record-preview,.live-evidence .enquiry-proof figcaption,form,nav,.form-success,.hp-field,.contact-hours,[role="status"],[role="alert"],noscript,.faq-answer';
const depthKinds = [
  'cover',
  'photo',
  'mount',
  'diagram',
  'atlas',
  'route',
] as const;

// offsetTop measures the layout box, not the translated paint that the reader sees.
function layoutTop(node: HTMLElement) {
  let top = node.offsetTop;
  for (
    let p = node.offsetParent as HTMLElement | null;
    p;
    p = p.offsetParent as HTMLElement | null
  )
    top += p.offsetTop + p.clientTop;
  return top;
}

export function attachScrollScenes() {
  const root = document.documentElement;
  const header = document.querySelector<HTMLElement>('.site-header');
  const main = document.querySelector('main');
  if (!main) return;
  const compact = matchMedia('(max-width:760px)').matches;
  const heading = main.querySelector('h1');
  const sections = new Map<HTMLElement, gsap.core.Timeline>();
  const openings = new Set<HTMLElement>();
  function scene(anchor: HTMLElement) {
    let tl = sections.get(anchor);
    if (!tl) {
      tl = gsap.timeline({ paused: true, defaults: { ease: 'none' } });
      sections.set(anchor, tl);
      if (heading && anchor.contains(heading)) openings.add(anchor);
    }
    return tl;
  }
  const targets = new Map<Element, Cue>();
  for (const [selector, cue] of cues) {
    for (const el of document.querySelectorAll(selector)) {
      // A spread's story moves as one piece; its individual lines must not stack up extra travel.
      if (
        el.closest(exclude) ||
        el.parentElement?.closest(
          '.cap-title,.cover-story,.blog-featured-body,.blog-card-body,.work-sample,.live-evidence .proof-steps'
        ) ||
        el.matches('.breadcrumbs,.blog-featured-media,.article-media') ||
        (cue === 'ink' && el.querySelector('[data-depth]'))
      )
        continue;
      targets.set(el, cue);
    }
  }
  for (const [el, cue] of targets) {
    const anchor = el.closest<HTMLElement>(sectionBoundary);
    if (!anchor) continue;
    const tl = scene(anchor);
    const opening = openings.has(anchor);
    const shortRow = anchor.matches('.service-tile');
    const prose = !!el.closest('.article-body,.legal');
    const travel = (desktop: number, phone: number) =>
      compact ? phone : desktop;
    // Positive on approach, negative on departure; no hold anywhere in the section.
    // Neighbouring section timelines overlap for the full shared viewport.
    const drift = (distance: number, axis: 'x' | 'y' = 'y') => {
      tl.fromTo(
        el,
        { [axis]: opening ? 0 : distance },
        { [axis]: -distance, duration: 1 },
        0
      );
    };
    // Contrast settles for reading independently of the uninterrupted spatial transition.
    const light = (entry: number) => {
      tl.fromTo(
        el,
        { opacity: opening ? 1 : entry },
        { opacity: 1, duration: 0.32 },
        0
      ).to(el, { opacity: 0.95, duration: 0.2 }, 0.8);
    };
    el.setAttribute('data-cue', cue);
    switch (cue) {
      case 'spread':
        if (el.matches('.blog-card-body')) {
          tl.fromTo(
            el,
            { x: -travel(12, 5), y: travel(18, 11) },
            { x: 0, y: -travel(12, 7), duration: 1 },
            0
          );
        } else
          drift(el.matches('.cover-story') ? travel(46, 23) : travel(34, 18));
        break;
      case 'title':
        drift(prose ? travel(10, 6) : travel(30, 19));
        light(0.86);
        break;
      case 'copy':
      case 'reading':
        drift(
          shortRow ? travel(10, 6) : prose ? travel(7, 4) : travel(23, 15)
        );
        light(0.91);
        break;
      case 'label':
        drift(travel(18, 11));
        light(0.94);
        break;
      case 'row':
        drift(el.matches('.faq-label') ? travel(11, 6) : travel(21, 10), 'x');
        light(0.91);
        break;
      case 'index':
        tl.fromTo(
          el,
          { x: -travel(16, 6), scale: 0.92 },
          { x: travel(12, 5), scale: 1.035, duration: 1 },
          0
        );
        break;
      case 'sheet':
        // Move the document as one piece; keep numbers, labels and rules aligned.
        drift(travel(12, 6));
        break;
      case 'plate':
        tl.fromTo(
          el,
          { y: travel(26, 15), scale: 0.95 },
          { y: -travel(22, 12), scale: 1, duration: 1 },
          0
        );
        break;
      case 'ink':
        // Keep the edge of the cropped frame filled as the editorial art pans past it.
        tl.fromTo(
          el,
          { yPercent: -2.5, scale: 1.09 },
          { yPercent: 2.5, scale: 1.065, duration: 1 },
          0
        );
        break;
      case 'rule':
        tl.fromTo(
          el,
          { x: 0, scaleX: 0.18, transformOrigin: 'left center' },
          { x: travel(36, 20), scaleX: 1.2, duration: 1 },
          0
        );
        break;
      case 'trace':
        // The panel moves its coloured edge, never the fields or their labels.
        tl.fromTo(el, { yPercent: 0 }, { yPercent: 400, duration: 1 }, 0);
        break;
      case 'credit':
        drift(8, 'x');
        break;
    }
  }

  // Illustrations share the section's playhead with its copy. Detailed diagrams
  // also have a local sequence measured against the actual figure, including on phones.
  for (const kind of depthKinds) {
    for (const el of main.querySelectorAll('[data-depth="' + kind + '"]')) {
      const anchor = el.closest<HTMLElement>(sectionBoundary);
      if (!anchor) continue;
      const tl = scene(anchor);
      if (kind === 'route') {
        tl.fromTo(
          el,
          { scaleX: 0.001, svgOrigin: '0 0' },
          { scaleX: 1, duration: 1 },
          0
        );
      } else {
        const pan =
          kind === 'cover'
            ? compact
              ? 4
              : 6
            : kind === 'photo'
              ? compact
                ? 4
                : 7
              : kind === 'atlas'
                ? 8
                : 0;
        const y =
          kind === 'mount' ? (compact ? 10 : 22) : kind === 'diagram' ? 7 : 0;
        const scale =
          kind === 'cover'
            ? compact
              ? 1.1
              : 1.15
            : kind === 'photo'
              ? 1.16
              : kind === 'atlas'
                ? 1.18
                : 1;
        tl.fromTo(
          el,
          { y: -y, yPercent: -pan, scale, transformOrigin: '50% 50%' },
          {
            y,
            yPercent: pan,
            scale: kind === 'cover' ? scale + 0.025 : scale,
            duration: 1,
          },
          0
        );
      }
    }
  }
  for (const figure of main.querySelectorAll<HTMLElement>('.practice-figure')) {
    const stages = figure.querySelectorAll('[data-figure-stage]');
    if (stages.length)
      scene(figure).fromTo(
        stages,
        { opacity: 0.45, y: 5 },
        { opacity: 1, y: 0, duration: 0.22, stagger: 0.065 },
        0.12
      );
    // Normalise this local score to the full visibility interval.
    scene(figure).to({}, { duration: 1 }, 0);
  }

  const triggers: ScrollTrigger[] = [];
  for (const [anchor, animation] of sections) {
    triggers.push(
      ScrollTrigger.create({
        trigger: anchor,
        animation,
        scrub: true,
        start: () =>
          openings.has(anchor)
            ? Math.max(0, layoutTop(anchor) - window.innerHeight)
            : layoutTop(anchor) - window.innerHeight,
        end: () =>
          layoutTop(anchor) + anchor.offsetHeight - (header?.offsetHeight ?? 0),
      })
    );
  }

  // Entrances use a different layer/property from the scrub, so a scroll never
  // has to wait for them. The controls, frosted pane and form fields stay still.
  const cover = main.querySelector<HTMLElement>('.practice-cover');
  const coverEntry = cover
    ? gsap
        .timeline({ paused: true, defaults: { ease: 'power3.out' } })
        .fromTo(
          '.cover-line > *',
          { yPercent: 50 },
          { yPercent: 0, duration: 0.56, stagger: 0.065 },
          0
        )
        .fromTo(
          '.cover-lens',
          { scale: 1.025 },
          { scale: 1, duration: 0.64 },
          0
        )
    : null;
  const slides = attachSectionSlides(compact, header, layoutTop);
  function enterCover() {
    const top = header?.offsetHeight ?? 0;
    if (
      cover &&
      cover.getBoundingClientRect().bottom > top + cover.offsetHeight * 0.25
    )
      coverEntry?.restart();
    else coverEntry?.progress(1).pause();
  }
  let frame = 0,
    disposed = false,
    pendingEntry = true,
    away = false;
  const sync = () => {
    frame = 0;
    if (disposed || document.hidden) return;
    // Instance refresh avoids changing the browser's restored scroll position.
    for (const trigger of triggers) trigger.refresh();
    ScrollTrigger.update();
    slides.measure(pendingEntry);
    if (pendingEntry) {
      pendingEntry = false;
      enterCover();
    }
  };
  const request = () => {
    if (!disposed && !document.hidden && !frame)
      frame = requestAnimationFrame(sync);
  };
  const leave = () => {
    away = true;
    cancelAnimationFrame(frame);
    frame = 0;
  };
  const resume = () => {
    if (document.hidden) return;
    if (away) pendingEntry = true;
    away = false;
    request();
  };
  const visibility = () => (document.hidden ? leave() : resume());
  // A disclosure changes body height every frame. Refresh the page's scroll
  // measurements once it settles instead of rebuilding every scene as it opens.
  let resizeTimer = 0;
  const sizes = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(request, 80);
  }) : null;
  sizes?.observe(document.body);
  if (header) sizes?.observe(header);
  document.fonts?.ready.then(request);
  document.addEventListener('toggle', request, true);
  document.addEventListener('visibilitychange', visibility);
  window.addEventListener('pagehide', leave);
  window.addEventListener('pageshow', resume);
  window.addEventListener('blur', leave);
  window.addEventListener('focus', resume);

  const strip = main.querySelector<HTMLElement>('.platform-window');
  let inView = false;
  const runStrip = () => {
    if (strip) strip.dataset.running = String(inView && !document.hidden);
  };
  const loop =
    strip && typeof IntersectionObserver !== 'undefined'
      ? new IntersectionObserver(([entry]) => {
          inView = entry.isIntersecting;
          runStrip();
        })
      : null;
  if (strip) loop?.observe(strip);
  document.addEventListener('visibilitychange', runStrip);
  root.dataset.scrollEngine = 'gsap';
  sync();
  return () => {
    disposed = true;
    window.clearTimeout(resizeTimer);
    cancelAnimationFrame(frame);
    sizes?.disconnect();
    loop?.disconnect();
    if (strip) delete strip.dataset.running;
    document.removeEventListener('toggle', request, true);
    document.removeEventListener('visibilitychange', visibility);
    document.removeEventListener('visibilitychange', runStrip);
    window.removeEventListener('pagehide', leave);
    window.removeEventListener('pageshow', resume);
    window.removeEventListener('blur', leave);
    window.removeEventListener('focus', resume);
    slides.dispose();
    for (const el of targets.keys()) el.removeAttribute('data-cue');
    delete root.dataset.scrollEngine;
    // useGSAP / matchMedia revert all timelines, triggers and original inline styles.
  };
}
