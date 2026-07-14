import { Link } from 'react-router-dom';
import { brand, cssVars, services, techEcosystem } from '../data/site';
import Seo from '../components/Seo';
import SectionHead from '../components/SectionHead';
import ServiceTile from '../components/ServiceTile';
import ValueCards from '../components/ValueCards';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Seo
        title="Richverseecotech — We build what moves you forward"
        description={brand.blurb}
        path="/"
      />
      {/* HERO */}
      <section className="hero" id="top">
        <div className="mesh" aria-hidden="true">
          <span className="mesh-blob mesh-a" />
          <span className="mesh-blob mesh-b" />
          <span className="mesh-blob mesh-c" />
        </div>

        <div className="hero-content">
          <p className="eyebrow hero-eyebrow reveal">[ {brand.subtagline} ]</p>
          <h1 className="hero-title">
            <span className="reveal" style={cssVars({ '--d': '60ms' })}>We build what</span>
            <span className="reveal" style={cssVars({ '--d': '140ms' })}><em>moves you</em></span>
            <span className="reveal" style={cssVars({ '--d': '220ms' })}>forward</span>
          </h1>
          <p className="hero-sub reveal" style={cssVars({ '--d': '320ms' })}>
            {brand.blurb}
          </p>
          <div className="hero-actions reveal" style={cssVars({ '--d': '400ms' })}>
            <Link to="/contact" className="btn-primary">Get started</Link>
            <Link to="/services" className="btn-ghost">Explore services</Link>
          </div>
        </div>

        <div className="wave-container" aria-hidden="true">
          <div className="wave-curve" />
          <Link to="/services" className="wave-button">
            <span>Initialize</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
          </Link>
        </div>
      </section>

      {/* TECH WE USE — logos of the platforms we build on */}
      <section className="trust-bar section-pad-sm">
        <p className="trust-label reveal">Technologies we build with</p>
        <Partners />
      </section>

      {/* SERVICES */}
      <section className="section-pad container">
        <SectionHead
          eyebrow="[ Our Services ]"
          title={<>Comprehensive <em>solutions</em>.</>}
          intro="Four disciplines, one philosophy — build systems that grow, adapt, and endure."
          link={{ to: '/services', label: 'All services' }}
        />
        <div className="service-grid">
          {services.map((s, i) => (
            <ServiceTile key={s.slug} service={s} index={i} />
          ))}
        </div>
      </section>

      {/* PRINCIPLES / VALUES */}
      <section className="section-pad container">
        <SectionHead
          eyebrow="[ Innovation & Sustainability ]"
          title={<>Our commitment to <em>excellence</em>.</>}
          intro="We blend cutting-edge technology with sustainable practice to create lasting impact."
          align="center"
        />
        <ValueCards limit={3} />
      </section>

      {/* TECH ECOSYSTEM */}
      <section className="section-pad container">
        <SectionHead
          eyebrow="[ Technology Ecosystem ]"
          title={<>Powered by <em>cutting-edge</em> tech.</>}
          intro="Our stack integrates the latest innovations to deliver powerful, scalable solutions."
          align="center"
        />
        <div className="tech-grid">
          {techEcosystem.map((t, i) => (
            <div className="tech-card reveal" key={t.title} style={cssVars({ '--d': `${i * 70}ms` })}>
              <span className="tech-dot" aria-hidden="true" />
              <h3 className="tech-title">{t.title}</h3>
              <p className="tech-body">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IMPACT */}
      <section className="stats-band section-pad container">
        <SectionHead
          eyebrow="[ Our Impact ]"
          title={<>Measured by what we <em>create</em>.</>}
          align="center"
        />
        <Stats />
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad container">
        <SectionHead
          eyebrow="[ Client Stories ]"
          title={<>What our clients <em>say</em>.</>}
          align="center"
        />
        <Testimonials />
      </section>

      {/* CTA */}
      <CTA title={<>Ready to build something <em>alive</em>?</>} />
    </>
  );
}
