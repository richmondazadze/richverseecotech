import { useState } from 'react';
import { partners } from '../data/site';

const fullMarks = new Set(['AWS', 'Stripe', 'Supabase', 'Vercel']);

export default function Partners() {
  const [expanded, setExpanded] = useState(false);
  const logos = partners.map(({name, logo}) => {
    const full = fullMarks.has(name);
    return <li key={name}><img src={logo} alt={full ? name : ''} className={full ? 'platform-wordmark' : undefined} width={full ? 84 : 28} height="28"/>{!full && name}</li>;
  });
  return <section className="platform-band" aria-label="Our technology toolkit">
    <div className="container platform-inner" data-expanded={expanded}>
      <div className="platform-controls"><p>Technologies we work with</p>
        <button type="button" className="toolkit-switch" aria-controls="technology-marks" aria-expanded={expanded} onClick={() => setExpanded(v => !v)}>
          {expanded ? 'Show scrolling view' : 'View all technologies'}<span aria-hidden="true">{expanded ? '−' : '+'}</span>
        </button>
      </div>
      <div className="platform-window" id="technology-marks"><div className="platform-track">
        <ul className="platform-list" aria-label="Technologies we work with">{logos}</ul>
        <ul className="platform-list platform-copy" aria-hidden="true">{logos}</ul>
      </div></div>
    </div>
  </section>;
}
