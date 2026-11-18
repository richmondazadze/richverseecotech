import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { attachScrollScenes } from '../hooks/scrollScenes';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function PageMotion({ entry }: { entry: string }) {
  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add(
        {
          desktop: '(min-width: 761px)',
          compact: '(max-width: 760px)',
          reduce: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          if (context.conditions?.reduce || document.documentElement.dataset.motion === 'reduced')
            return;
          return attachScrollScenes();
        }
      );
      return () => media.revert();
    },
    { dependencies: [entry], revertOnUpdate: true }
  );
  return null;
}
