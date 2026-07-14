import { Link } from 'react-router-dom';
import { cssVars, Service } from '../data/site';

export default function ServiceTile({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="service-tile reveal"
      style={cssVars({ '--tint': service.tint, '--accent': service.accent, '--d': `${(index % 2) * 80}ms` })}
    >
      <div className="service-orb" style={cssVars({ '--orb': service.orb })} />
      <div className="service-tile-top">
        <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="service-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9" /></svg>
        </span>
      </div>
      <h3 className="service-name">{service.name}</h3>
      <p className="service-desc">{service.short}</p>
      <span className="meta-line" />
      <span className="service-cta">Explore service</span>
    </Link>
  );
}
