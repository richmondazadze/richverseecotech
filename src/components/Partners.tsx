import { partners } from '../data/site';

const fullMarks = new Set(['AWS', 'Stripe', 'Supabase', 'Vercel']);

export default function Partners() {
  const logos = partners.map(({name, logo}) => {
    const full = fullMarks.has(name);
    return <li key={name}><img src={logo} alt={full ? name : ''} className={full ? 'platform-wordmark' : undefined} width={full ? 84 : 28} height="28"/>{!full && name}</li>;
  });
  return <section className="platform-band" id="technologies" aria-labelledby="technologies-title">
    <div className="container platform-inner">
      <h2 id="technologies-title">Technologies we work with</h2>
      <div className="platform-window" id="technology-marks" role="group" aria-label="Technology logos" tabIndex={0}><div className="platform-track">
        <ul className="platform-list">{logos}</ul>
        <ul className="platform-list platform-copy" aria-hidden="true">{logos}</ul>
      </div></div>
    </div>
  </section>;
}
