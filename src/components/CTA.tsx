import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import Icon from './Icon';
import ChapterRule from './ChapterRule';

type Props = {
  title: ReactNode;
  buttonLabel?: string;
  to?: string;
};

export default function CTA({ title, buttonLabel = 'Start a project', to = '/contact' }: Props) {
  return (
    <section className="cta-section"><div className="container cta-band"><ChapterRule/>
      <div><p className="eyebrow">A good place to begin</p><h2 className="cta-title">{title}</h2><p>A rough idea or an existing project is enough. Tell us what needs to change.</p></div>
      <div className="cta-action"><Link to={to} className="btn-primary">{buttonLabel}<Icon name="arrow-right" size={20} /></Link><span>We aim to reply within one business day.</span></div>
    </div></section>
  );
}
