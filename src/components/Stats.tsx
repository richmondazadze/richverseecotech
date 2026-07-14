import { IconType } from 'react-icons';
import { FiTrendingUp, FiGlobe, FiAward, FiHeart } from 'react-icons/fi';
import { cssVars, impact } from '../data/site';

/* One icon per qualitative impact statement, in data order. */
const icons: IconType[] = [FiTrendingUp, FiGlobe, FiAward, FiHeart];

/** Qualitative impact statements — deliberately non-numeric. */
export default function Stats() {
  return (
    <div className="impact-grid">
      {impact.map((s, i) => {
        const Icon = icons[i % icons.length];
        return (
          <div className="impact-card reveal" key={s.label} style={cssVars({ '--d': `${i * 80}ms` })}>
            <span className="impact-icon" aria-hidden="true"><Icon /></span>
            <h3 className="impact-label">{s.label}</h3>
            <span className="meta-line" />
            <p className="impact-sub">{s.sub}</p>
          </div>
        );
      })}
    </div>
  );
}
