import { cssVars, testimonials } from '../data/site';

export default function Testimonials() {
  return (
    <div className="testimonial-grid">
      {testimonials.map((t, i) => (
        <figure className="testimonial reveal" key={t.name} style={cssVars({ '--d': `${(i % 2) * 80}ms` })}>
          <span className="testimonial-quote" aria-hidden="true">&ldquo;</span>
          <blockquote>{t.text}</blockquote>
          <figcaption>
            <strong>{t.name}</strong>
            <em>{t.role}</em>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
