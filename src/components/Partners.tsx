import { partners } from '../data/site';

/** Dual-row infinite marquee of real partner logos. */
export default function Partners() {
  const row = [...partners, ...partners];
  return (
    <div className="partners">
      <div className="partners-marquee" aria-hidden="true">
        <div className="partners-track">
          {row.map((p, i) => (
            <div className="partner-chip" key={i}>
              <img src={p.logo} alt={p.name} loading="lazy" />
              <span>{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
