import { cssVars, impact } from '../data/site';

/** Qualitative impact statements — deliberately non-numeric. */
export default function Stats() {
  return (
    <div className="impact-grid">
      {impact.map((s, i) => (
        <div className="impact-card reveal" key={s.label} style={cssVars({ '--d': `${i * 80}ms` })}>
          <span className="impact-dot" aria-hidden="true" />
          <h3 className="impact-label">{s.label}</h3>
          <p className="impact-sub">{s.sub}</p>
        </div>
      ))}
    </div>
  );
}
