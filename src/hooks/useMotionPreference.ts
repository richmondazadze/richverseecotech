import { useSyncExternalStore } from 'react';

const key = 'richverse-motion';
type Mode = 'full' | 'reduced' | 'system';
function snapshot(): Mode {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return 'system';
  return document.documentElement.dataset.motion === 'reduced' ? 'reduced' : 'full';
}
function subscribe(notify: () => void) {
  const media = matchMedia('(prefers-reduced-motion: reduce)');
  function sync(event: StorageEvent) {
    if (event.key !== key && event.key !== null) return;
    document.documentElement.dataset.motion = event.newValue === 'reduced' ? 'reduced' : 'full';
    notify();
  }
  media.addEventListener('change', notify);
  window.addEventListener('storage', sync);
  return () => { media.removeEventListener('change', notify); window.removeEventListener('storage', sync); };
}
export default function useMotionPreference(): Mode {
  return useSyncExternalStore(subscribe, snapshot, () => 'full' as const);
}
