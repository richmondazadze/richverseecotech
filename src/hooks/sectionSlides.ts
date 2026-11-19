// ScrollTrigger owns the continuous artwork. Entrances use the independent
// translate property on complete blocks, so they finish even if the wheel stops.
export const sectionBoundary = 'main section,[data-scroll-section]';

const pieces = [
  '.cover-copy',
  '.people-intro',
  '.people-leads',
  '.brief-hero > div:first-child',
  '.practice-figure',
  '.feature-copy',
  '.work-print',
  '.section-head',
  '.brief-lead',
  '.work-sample',
  '.scope-list > div',
  '.scope-list > a',
  '.milestone-list > li',
  '.support-note',
  '.studio-directory > li',
  '.studio-atlas',
  '.office-index > div',
  '.faq-item',
  '.article-body > p',
  '.cta-band > div',
  '.footer-news > div',
  '.footer-news-line > span',
  '.footer-grid > div',
].join(',');
const leftColumn =
  '.brief-lead,.feature-copy,.brief-hero > div:first-child,.brief-panel,.footer-news > div:first-child';
const rightColumn =
  '.work-sample,.practice-figure,.feature-spread .work-print,.next-steps,.office-details > figure';
const extraBands = '.blog-filters,.article-tags';
const formRows = '.contact-form > :is(.field-row,.field,.brief-send)';
const staticController = {
  measure: (_replay: boolean) => {},
  dispose: () => {},
};

type Block = {
  el: HTMLElement;
  top: number;
  height: number;
  side: number;
  above: boolean;
  state: 'new' | 'waiting' | 'playing' | 'shown';
  animation?: Animation;
  parent?: Block;
};

export function attachSectionSlides(
  compact: boolean,
  header: HTMLElement | null,
  layoutTop: (el: HTMLElement) => number
) {
  if (typeof HTMLElement.prototype.animate !== 'function')
    return staticController;

  const map = new Map<HTMLElement, Block>();
  function add(el: HTMLElement, parent?: Block) {
    if (map.has(el)) return map.get(el)!;
    const side = el.matches(leftColumn) ? -1 : el.matches(rightColumn) ? 1 : 0;
    const block: Block = {
      el,
      top: 0,
      height: 0,
      side,
      above: false,
      state: 'new',
      parent,
    };
    map.set(el, block);
    return block;
  }

  for (const section of document.querySelectorAll<HTMLElement>(
    sectionBoundary
  )) {
    const parts = [...section.querySelectorAll<HTMLElement>(pieces)].filter(
      (el) => el.closest(sectionBoundary) === section
    );
    if (parts.length) parts.forEach((el) => add(el));
    else if (section.querySelector(sectionBoundary)) {
      // A containing section may have its own introduction above a grid of scenes.
      for (const child of section.children)
        if (
          child instanceof HTMLElement &&
          !child.matches(sectionBoundary) &&
          !child.querySelector(sectionBoundary) &&
          child.textContent?.trim()
        )
          add(child);
    } else add(section);
  }
  document.querySelectorAll<HTMLElement>(extraBands).forEach((el) => add(el));
  // A tall enquiry form is a single sheet on entry. Only rows still below the
  // fold get a second entrance later; there is never a double slide on a field.
  const panel = document.querySelector<HTMLElement>(
    '.brief-panel[data-scroll-section="enquiry"]'
  );
  function collectFormRows() {
    if (!panel) return;
    for (const [el, block] of map)
      if (block.parent && !el.isConnected) {
        block.animation?.cancel();
        map.delete(el);
      }
    panel
      .querySelectorAll<HTMLElement>(formRows)
      .forEach((el) => add(el, map.get(panel)));
  }

  const ease =
    getComputedStyle(document.documentElement)
      .getPropertyValue('--ease')
      .trim() || 'ease-out';
  let vh = 0,
    inset = 0,
    maxScroll = 0,
    frame = 0,
    disposed = false;
  let held: Block[] = [];
  let releaseTimer = 0;
  function state(b: Block, value: Block['state']) {
    b.state = value;
    b.el.dataset.slide = value;
  }
  function settle(b: Block) {
    b.animation?.cancel();
    b.animation = undefined;
    state(b, 'shown');
  }
  function play(b: Block, delay: number, onArrival: boolean) {
    const sign = b.above ? -1 : 1;
    const x = compact ? 0 : b.side * 84;
    const reading = !!b.el.closest('.article-body,.legal');
    // The sheet slides in as a whole. Later rows reveal in place so their
    // controls are already under the finger on the first frame after a scroll.
    const y = b.parent ? 0 : sign * (reading ? (compact ? 12 : 18) : compact ? 50 : b.side ? 18 : 68);
    const art = b.el.matches(
      '.practice-figure,.work-sample,.work-print,.blog-featured,.article-media'
    );
    const start: Keyframe = {
      translate: x + 'px ' + y + 'px',
      opacity: onArrival ? 0.85 : 0,
    };
    const end: Keyframe = { translate: '0px 0px', opacity: 1 };
    if (art) {
      start.clipPath = b.above ? 'inset(12% 0 0 0)' : 'inset(0 0 12% 0)';
      end.clipPath = 'inset(0 0 0% 0)';
    }
    b.animation?.cancel();
    state(b, 'playing');
    const animation = b.el.animate([start, end], {
      duration: compact ? 540 : 640,
      delay,
      easing: ease,
      fill: 'backwards',
    });
    animation.id = 'rv-section-slide';
    b.animation = animation;
    animation.onfinish = () => {
      if (b.animation === animation) settle(b);
    };
  }
  function paint(replay = false) {
    frame = 0;
    if (disposed || document.hidden) return;
    const y = window.scrollY,
      top = y + inset,
      bottom = y + vh;
    const focus = document.activeElement;
    const batch: Block[] = [];
    for (const b of map.values()) {
      if (!b.height || held.includes(b)) continue;
      if (focus && b.el.contains(focus)) {
        if (b.state !== 'shown') settle(b);
        continue;
      }
      const foot = b.top + b.height;
      // Rearm only after complete exit, never when the scroll direction merely changes.
      if (foot < top - 12 || b.top > bottom + 12) {
        b.above = foot < top;
        if (b.state !== 'waiting') {
          b.animation?.cancel();
          b.animation = undefined;
          state(b, 'waiting');
        }
        continue;
      }
      if (!replay && (b.state === 'playing' || b.state === 'shown')) continue;
      const gate = Math.min(compact ? 64 : 92, vh * 0.13, b.height * 0.45);
      // Clamp at either end of the document so even the last footer row can enter.
      if (
        y >= Math.min(maxScroll, b.top - vh + gate) &&
        y <= Math.max(0, foot - inset - gate)
      ) {
        if (
          b.parent &&
          (batch.includes(b.parent) || b.parent.state === 'playing')
        )
          settle(b);
        else batch.push(b);
      } else if (b.state === 'new') state(b, 'waiting');
    }
    batch.sort((a, b) => a.top - b.top);
    for (const [i, b] of batch.entries()) play(b, Math.min(i, 3) * 55, replay);
  }
  const scroll = () => {
    if (!frame) frame = requestAnimationFrame(() => paint());
  };
  // Never make a keyboard or pointer user wait for the field they are using.
  function containing(target: EventTarget | null) {
    return target instanceof Element
      ? [...map.values()].filter((b) => b.el.contains(target))
      : [];
  }
  const focusIn = (event: FocusEvent) => {
    for (const b of containing(event.target)) if (!held.includes(b)) settle(b);
  };
  const release = () => {
    window.clearTimeout(releaseTimer);
    held.forEach(settle);
    held = [];
  };
  const down = (event: PointerEvent) => {
    release();
    held = containing(event.target).filter(b => b.state === 'playing');
    held.forEach(b => b.animation?.pause());
  };
  // Mobile browsers can dispatch click after pointerup and another frame.
  // Freeze until click has its target; the timeout covers gestures with no click.
  const up = () => { if (held.length) releaseTimer = window.setTimeout(release, 450); };
  window.addEventListener('scroll', scroll, { passive: true });
  document.addEventListener('focusin', focusIn);
  document.addEventListener('pointerdown', down, true);
  window.addEventListener('pointerup', up, true);
  window.addEventListener('pointercancel', release, true);
  window.addEventListener('click', release, true);

  return {
    measure(replay: boolean) {
      collectFormRows();
      vh = window.innerHeight;
      inset = header?.offsetHeight ?? 0;
      maxScroll = Math.max(0, document.documentElement.scrollHeight - vh);
      for (const b of map.values()) {
        b.top = layoutTop(b.el);
        b.height = b.el.offsetHeight;
      }
      if (frame) cancelAnimationFrame(frame);
      paint(replay);
    },
    dispose() {
      disposed = true;
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scroll);
      document.removeEventListener('focusin', focusIn);
      document.removeEventListener('pointerdown', down, true);
      window.removeEventListener('pointerup', up, true);
      window.removeEventListener('pointercancel', release, true);
      window.removeEventListener('click', release, true);
      window.clearTimeout(releaseTimer);
      for (const b of map.values()) {
        b.animation?.cancel();
        delete b.el.dataset.slide;
      }
      map.clear();
    },
  };
}
