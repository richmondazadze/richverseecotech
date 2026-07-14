import { ReactNode } from 'react';
import { cssVars } from '../data/site';

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
};

/** Editorial header used at the top of interior pages. */
export default function PageHead({ eyebrow, title, intro }: Props) {
  return (
    <header className="page-head">
      <p className="eyebrow reveal">{eyebrow}</p>
      <h1 className="page-title reveal" style={cssVars({ '--d': '80ms' })}>
        {title}
      </h1>
      {intro && (
        <p className="page-intro reveal" style={cssVars({ '--d': '160ms' })}>
          {intro}
        </p>
      )}
    </header>
  );
}
