import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cssVars } from '../data/site';

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  link?: { to: string; label: string };
};

/** Section header for in-page sections (distinct from the page-top PageHead). */
export default function SectionHead({ eyebrow, title, intro, align = 'left', link }: Props) {
  return (
    <div className={'section-head' + (align === 'center' ? ' is-center' : '') + (link ? ' split-head' : '')}>
      <div>
        <p className="eyebrow reveal">{eyebrow}</p>
        <h2 className="section-title reveal" style={cssVars({ '--d': '80ms' })}>
          {title}
        </h2>
        {intro && (
          <p className="section-intro reveal" style={cssVars({ '--d': '140ms' })}>
            {intro}
          </p>
        )}
      </div>
      {link && (
        <Link to={link.to} className="ghost-link reveal" style={cssVars({ '--d': '160ms' })}>
          {link.label}
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </Link>
      )}
    </div>
  );
}
