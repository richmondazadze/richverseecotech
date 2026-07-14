import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Wires up the on-scroll reveal system for the whole document.
 * Re-runs on every route change so freshly-mounted pages animate in,
 * and also scrolls to the top of the new page.
 *
 * - `.reveal`     → translateY(40px)/opacity fade-up (premium ease)
 * - `.meta-line`  → 1px rule that draws in horizontally
 */
export function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });

    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    const lineObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-drawn');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Wait a frame so the newly-routed DOM is present before observing.
    const raf = requestAnimationFrame(() => {
      document
        .querySelectorAll('.reveal:not(.is-visible)')
        .forEach((el) => revealObserver.observe(el));
      document
        .querySelectorAll('.meta-line:not(.is-drawn)')
        .forEach((el) => lineObserver.observe(el));
    });

    return () => {
      cancelAnimationFrame(raf);
      revealObserver.disconnect();
      lineObserver.disconnect();
    };
  }, [pathname]);
}
