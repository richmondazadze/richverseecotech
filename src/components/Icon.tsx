import paths from '../data/icons.json';
import small from '../data/icons-small.json';

export type IconName = keyof typeof paths;

/** Original Richverse icons; decorative when accompanied by a visible label. */
export default function Icon({ name, size = 24, className = '' }: { name: IconName; size?: number; className?: string }) {
  const cut = size <= 16 ? small[name as keyof typeof small] : undefined;
  return <svg data-glyph={name} className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={cut ? "0 0 16 16" : "0 0 24 24"} fill="none" stroke="currentColor" strokeWidth={cut ? 1.25 : 1.5} strokeLinecap="square" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d={cut || paths[name]} /></svg>;
}
