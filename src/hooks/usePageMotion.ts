import { useEffect, useState } from 'react';
import type { ComponentType } from 'react';

// Load the enhancement after hydration. A missing chunk or reduced preference
// leaves the complete prerendered page and its native interactions usable.
export default function usePageMotion(reduced: boolean) {
  const [Runtime, setRuntime] = useState<ComponentType<{ entry: string }> | null>(null);
  useEffect(() => {
    if (
      reduced ||
      Runtime ||
      matchMedia('(prefers-reduced-motion: reduce)').matches ||
      document.documentElement.dataset.motion === 'reduced'
    )
      return;
    let active = true;
    import('../components/PageMotion')
      .then((module) => {
        if (active) setRuntime(() => module.default);
      })
      .catch(() => {
        /* The static page is the fallback. */
      });
    return () => {
      active = false;
    };
  }, [reduced, Runtime]);
  return reduced ? null : Runtime;
}
