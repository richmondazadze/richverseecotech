import { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
};

/** Editorial header used at the top of interior pages. */
export default function PageHead({ eyebrow, title, intro }: Props) {
  return (
    <header className="page-head" data-scroll-section="intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="page-title">
        {title}
      </h1>
      {intro && (
        <p className="page-intro">
          {intro}
        </p>
      )}
    </header>
  );
}
