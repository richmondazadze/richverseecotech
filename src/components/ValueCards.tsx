import { cssVars, values } from '../data/site';

export default function ValueCards({ limit }: { limit?: number }) {
  const list = limit ? values.slice(0, limit) : values;
  return (
    <div className="values-grid">
      {list.map((v, i) => (
        <div className="value-card reveal" key={v.title} style={cssVars({ '--d': `${(i % 3) * 70}ms` })}>
          <div className="value-icon">
            <img src={v.icon} alt="" aria-hidden="true" loading="lazy" />
          </div>
          <h3 className="value-title">{v.title}</h3>
          <span className="meta-line" />
          <p className="value-body">{v.body}</p>
        </div>
      ))}
    </div>
  );
}
