import { useEffect, useLayoutEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigationType } from 'react-router-dom';
import type { EnquiryDraft } from '../hooks/useEnquiryDraft';
import Header from './Header';
import Footer from './Footer';
import JsonLd from './JsonLd';
import { organizationSchema, websiteSchema } from '../data/structuredData';
import usePageMotion from '../hooks/usePageMotion';
import useReadingProgress from '../hooks/useReadingProgress';
import useMotionPreference from '../hooks/useMotionPreference';

const useBrowserLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

export default function Layout() {
  const { pathname, hash, key } = useLocation();
  const navigation = useNavigationType();
  const previous = useRef({key, pathname});
  const initial = useRef(true);
  const offsets = useRef(new Map<string, number>());
  const nativeRestoration = useRef<ScrollRestoration>();
  const enquiry = useRef<EnquiryDraft>({});
  const main = useRef<HTMLElement>(null);
  const reduced = useMotionPreference() !== 'full';
  const Motion = usePageMotion(reduced);
  useReadingProgress(pathname, reduced);
  useBrowserLayoutEffect(() => {
    const positions = offsets.current;
    let anchor: HTMLElement | null = null;
    if (hash) try { anchor = document.getElementById(decodeURIComponent(hash.slice(1))); } catch { /* Invalid fragment. */ }
    const chapter = !!anchor?.matches('[data-reading] > .engagement[id]');
    if ('scrollRestoration' in window.history) {
      nativeRestoration.current ??= window.history.scrollRestoration;
      // Restoration is per history entry. Let our anchor scroll stand when
      // returning to a chapter; preserve native behavior on other entries.
      window.history.scrollRestoration = chapter ? 'manual' : nativeRestoration.current;
    }
    if (previous.current.key !== key || (initial.current && hash)) {
      // Within a brief, Back should reopen the chapter, not the position of
      // the off-screen contents link the visitor scrolled back up to tap.
      const chapterHop = previous.current.pathname === pathname && chapter;
      const saved = navigation === 'POP' && !chapterHop ? positions.get(key) : undefined;
      const target = saved === undefined ? anchor : null;
      if (target) target.scrollIntoView({behavior:'instant',block:'start'});
      else window.scrollTo({top:saved ?? 0,behavior:'instant'});
      (target || main.current)?.focus({preventScroll:true});
    }
    initial.current = false;
    previous.current = {key, pathname};
    const save = () => positions.set(key, window.scrollY);
    window.addEventListener('scroll', save, {passive:true});
    return () => window.removeEventListener('scroll', save);
  }, [key,navigation,hash,pathname]);
  return (
    <>
      {/* Site-wide entity graph — present on every prerendered page */}
      <JsonLd data={[organizationSchema(), websiteSchema()]} />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1} ref={main}>
        <div className="route-frame"><Outlet context={{ enquiry }} /></div>
      </main>
      <Footer />
      {Motion && <Motion entry={pathname} />}
    </>
  );
}
