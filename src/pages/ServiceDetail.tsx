import { Link, useParams } from 'react-router-dom';
import { cssVars, services } from '../data/site';
import Seo from '../components/Seo';
import NotFound from './NotFound';
import CTA from '../components/CTA';
import JsonLd from '../components/JsonLd';
import { serviceSchema, breadcrumbSchema } from '../data/structuredData';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  if (!service) return <NotFound />;

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <div className="page section-pad-top" style={cssVars({ '--accent': service.accent, '--tint': service.tint })}>
      <Seo
        title={`${service.name} — Richverseecotech`}
        description={service.intro}
        path={`/services/${service.slug}`}
      />
      <JsonLd data={[
        serviceSchema(service),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.name, path: `/services/${service.slug}` },
        ]),
      ]} />
      <div className="container">
        {/* Hero */}
        <header className="service-hero">
          <p className="eyebrow reveal">
            <Link to="/services" className="crumb">Services</Link> / {service.name}
          </p>
          <h1 className="page-title reveal" style={cssVars({ '--d': '80ms' })}>
            {service.name}
          </h1>
          <p className="service-hero-tag reveal" style={cssVars({ '--d': '140ms' })}>{service.tagline}</p>
          <p className="page-intro reveal" style={cssVars({ '--d': '200ms' })}>{service.intro}</p>
          <div className="reveal" style={cssVars({ '--d': '280ms' })}>
            <Link to="/contact" className="btn-primary service-hero-cta">Start a project</Link>
          </div>
        </header>

        {/* Offerings */}
        <section className="section-pad">
          <div className="section-head">
            <p className="eyebrow reveal">[ What we offer ]</p>
            <h2 className="section-title reveal" style={cssVars({ '--d': '80ms' })}>Our <em>expertise</em>.</h2>
          </div>
          <div className="offer-grid">
            {service.offerings.map((o, i) => (
              <div className="offer-card reveal" key={o.title} style={cssVars({ '--d': `${(i % 3) * 70}ms` })}>
                <span className="offer-index">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="offer-title">{o.title}</h3>
                <span className="meta-line" />
                <p className="offer-body">{o.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why choose us */}
        <section className="section-pad">
          <div className="section-head">
            <p className="eyebrow reveal">[ Why choose us ]</p>
            <h2 className="section-title reveal" style={cssVars({ '--d': '80ms' })}>Beyond the <em>build</em>.</h2>
          </div>
          <div className="why-grid">
            {service.why.map((w, i) => (
              <div className="why-card reveal" key={w.title} style={cssVars({ '--d': `${i * 60}ms` })}>
                <h3 className="why-title">{w.title}</h3>
                <p className="why-body">{w.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="section-pad">
          <div className="section-head">
            <p className="eyebrow reveal">[ How we work ]</p>
            <h2 className="section-title reveal" style={cssVars({ '--d': '80ms' })}>From idea to <em>launch</em>.</h2>
          </div>
          <div className="process-grid">
            {service.process.map((s, i) => (
              <div className="process-card reveal" key={s.n} style={cssVars({ '--d': `${i * 80}ms` })}>
                <span className="process-n">{s.n}</span>
                <span className="meta-line" />
                <h3 className="process-title">{s.title}</h3>
                <p className="process-body">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other services */}
        <section className="section-pad">
          <div className="section-head">
            <p className="eyebrow reveal">[ Explore more ]</p>
            <h2 className="section-title reveal" style={cssVars({ '--d': '80ms' })}>Other <em>capabilities</em>.</h2>
          </div>
          <div className="other-services">
            {others.map((s) => (
              <Link to={`/services/${s.slug}`} className="other-service reveal" key={s.slug}>
                <span className="other-dot" style={cssVars({ '--orb': s.accent })} />
                <span className="other-name">{s.name}</span>
                <span className="other-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <CTA title={<>Let&rsquo;s build your <em>{service.name.toLowerCase()}</em> solution.</>} />
    </div>
  );
}
