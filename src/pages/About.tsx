import { aboutFaqs, cssVars, missionVision, process } from '../data/site';
import Seo from '../components/Seo';
import PageHead from '../components/PageHead';
import ValueCards from '../components/ValueCards';
import Stats from '../components/Stats';
import TeamGrid from '../components/TeamGrid';
import Partners from '../components/Partners';
import FAQ from '../components/FAQ';
import SectionHead from '../components/SectionHead';
import CTA from '../components/CTA';
import JsonLd from '../components/JsonLd';
import { faqSchema, breadcrumbSchema } from '../data/structuredData';

export default function About() {
  return (
    <div className="page section-pad-top">
      <Seo
        title="About — Richverseecotech"
        description="Richverseecotech combines innovation and sustainability to transform the digital world — empowering businesses to build a sustainable future."
        path="/about"
      />
      <JsonLd data={[
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]),
        faqSchema(aboutFaqs),
      ]} />
      <div className="container">
        <PageHead
          eyebrow="[ About ]"
          title={<>A studio for <em>living</em> systems.</>}
          intro="RichverseEcotech combines innovation and sustainability to transform the digital world — empowering businesses to build a sustainable future."
        />

        {/* Mission & Vision */}
        <section className="mv-grid">
          <div className="mv-card reveal">
            <p className="footer-label mv-label">[ Our Mission ]</p>
            <p className="mv-text">{missionVision.mission}</p>
          </div>
          <div className="mv-card reveal" style={cssVars({ '--d': '100ms' })}>
            <p className="footer-label mv-label">[ Our Vision ]</p>
            <p className="mv-text">{missionVision.vision}</p>
          </div>
        </section>

        {/* Values */}
        <section className="section-pad">
          <SectionHead
            eyebrow="[ Our Values ]"
            title={<>Guiding <em>principles</em>.</>}
            intro="Six convictions that shape everything we design and build."
          />
          <ValueCards />
        </section>

        {/* How we work */}
        <section className="section-pad">
          <SectionHead
            eyebrow="[ How We Work ]"
            title={<>The way we <em>build</em>.</>}
            intro="A living process — we sense, shape, grow, and sustain, shipping value continuously rather than in a single reveal."
          />
          <div className="process-grid">
            {process.map((s, i) => (
              <div className="process-card reveal" key={s.n} style={cssVars({ '--d': `${i * 80}ms` })}>
                <span className="process-n">{s.n}</span>
                <span className="meta-line" />
                <h3 className="process-title">{s.title}</h3>
                <p className="process-body">{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Impact */}
      <section className="stats-band section-pad container">
        <SectionHead eyebrow="[ Our Impact ]" title={<>What we <em>stand for</em>.</>} align="center" />
        <Stats />
      </section>

      {/* Partners */}
      <section className="section-pad">
        <div className="container">
          <SectionHead
            eyebrow="[ Our Stack ]"
            title={<>Technologies we <em>build with</em>.</>}
            align="center"
          />
        </div>
        <Partners />
      </section>

      {/* Team */}
      <section className="section-pad container">
        <SectionHead
          eyebrow="[ Our Leadership ]"
          title={<>Meet the <em>team</em>.</>}
          intro="Passionate professionals driving innovation and excellence in technology and sustainability."
          align="center"
        />
        <TeamGrid />
      </section>

      {/* FAQ */}
      <section className="section-pad container">
        <SectionHead eyebrow="[ FAQ ]" title={<>Common <em>questions</em>.</>} align="center" />
        <div className="faq-wrap">
          <FAQ items={aboutFaqs} />
        </div>
      </section>

      <CTA title={<>Ready to transform your <em>business</em>?</>} buttonLabel="Get in touch" />
    </div>
  );
}
