import { useState } from 'react';

export type AccordionItem = { title: string; body: string; tags?: string[] };

/** Fluid single-open accordion. Titles shift neutral-400 → black on hover/open. */
export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="accordion">
      {items.map((c, i) => {
        const open = i === openIndex;
        return (
          <div key={c.title} className={'acc-item' + (open ? ' is-open' : '')}>
            <button
              className="acc-trigger"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : i)}
            >
              <span className="acc-index">{String(i + 1).padStart(2, '0')}</span>
              <span className="acc-title">{c.title}</span>
              <span className="acc-icon" aria-hidden="true" />
            </button>
            <div className="acc-panel">
              <div className="acc-panel-inner">
                <p>{c.body}</p>
                {c.tags && (
                  <div className="acc-tags">
                    {c.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
