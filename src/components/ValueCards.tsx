import { cssVars, values } from '../data/site';

type Props = { limit?: number; columns?: 2 | 3 | 4 };

export default function ValueCards({ limit, columns = 2 }: Props) {
  const list = limit ? values.slice(0, limit) : values;
  return (
    <div className={`values-grid cols-${columns}`}>
      {list.map((v, i) => (
        <div className="value-card reveal" key={v.title} style={cssVars({ '--d': `${(i % columns) * 70}ms` })}>
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
