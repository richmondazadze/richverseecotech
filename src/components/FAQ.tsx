import { useId } from 'react';
export type QA = { q: string; a: string };
export default function FAQ({ items }: {items: QA[]}) {
  const group=useId();
  return <div className="faq">{items.map(item=>
    <details key={item.q} className="faq-item" {...{name:group}}>
      <summary className="faq-q"><span className="faq-label">{item.q}</span><span className="faq-icon" aria-hidden="true"/></summary>
      <div className="faq-answer-clip"><p className="faq-answer">{item.a}</p></div>
    </details>)}</div>;
}
