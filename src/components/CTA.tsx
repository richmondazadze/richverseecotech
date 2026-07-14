import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { cssVars } from '../data/site';

type Props = {
  title: ReactNode;
  buttonLabel?: string;
  to?: string;
};

export default function CTA({ title, buttonLabel = 'Start a project', to = '/contact' }: Props) {
  return (
    <section className="cta-band section-pad">
      <h2 className="cta-title reveal">{title}</h2>
      <Link to={to} className="btn-primary reveal" style={cssVars({ '--d': '120ms' })}>
        {buttonLabel}
      </Link>
    </section>
  );
}
