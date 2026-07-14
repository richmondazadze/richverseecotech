import { IconType } from 'react-icons';
import {
  SiReact, SiTypescript, SiNodedotjs, SiPython, SiPostgresql,
  SiSupabase, SiVercel, SiGooglecloud, SiDocker, SiKubernetes, SiTailwindcss,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { cssVars } from '../data/site';

type Tech = { name: string; Icon: IconType; color: string };

/* Real brand icons for the platforms we actually build on. */
const tech: Tech[] = [
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'React', Icon: SiReact, color: '#149ECA' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  { name: 'AWS', Icon: FaAws, color: '#FF9900' },
  { name: 'Google Cloud', Icon: SiGooglecloud, color: '#4285F4' },
  { name: 'Supabase', Icon: SiSupabase, color: '#3FCF8E' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Vercel', Icon: SiVercel, color: '#171717' },
];

/** Interactive grid of real tech logos — icons drift gently and light up on hover. */
export default function TechStack() {
  return (
    <div className="tech-stack">
      {tech.map(({ name, Icon, color }, i) => (
        <div
          key={name}
          className="tech-chip reveal"
          style={cssVars({ '--brand': color, '--d': `${(i % 6) * 60}ms`, '--float-delay': `${(i % 4) * 0.6}s` })}
        >
          <span className="tech-chip-icon" aria-hidden="true">
            <Icon />
          </span>
          <span className="tech-chip-name">{name}</span>
        </div>
      ))}
    </div>
  );
}
