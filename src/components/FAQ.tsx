import { useState } from 'react';

export type QA = { q: string; a: string };

export default function FAQ({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number>(-1);
  return (
    <div className="faq">
      {items.map((item, i) => {
        const isOpen = i === open;
        return (
          <div key={item.q} className={'faq-item' + (isOpen ? ' is-open' : '')}>
            <button className="faq-q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
              <span>{item.q}</span>
              <span className="faq-icon" aria-hidden="true" />
            </button>
            <div className="faq-panel">
              <div className="faq-panel-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
