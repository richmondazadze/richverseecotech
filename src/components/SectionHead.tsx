import Icon from './Icon';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  link?: { to: string; label: string };
};

/** Section header for in-page sections (distinct from the page-top PageHead). */
export default function SectionHead({ eyebrow, title, intro, align = 'left', link }: Props) {
  return (
    <div className={'section-head' + (align === 'center' ? ' is-center' : '') + (link ? ' split-head' : '')}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">
          {title}
        </h2>
        {intro && (
          <p className="section-intro">
            {intro}
          </p>
        )}
      </div>
      {link && (
        <Link to={link.to} className="ghost-link">
          {link.label}
          <Icon name="arrow-right" size={18}/>
        </Link>
      )}
    </div>
  );
}
