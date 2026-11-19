import { brand } from '../data/site';
import Seo from '../components/Seo';
import PageHead from '../components/PageHead';

export default function Privacy() {
  return (
    <div className="page section-pad-top">
      <Seo
        title="Privacy Policy — Richverse Ecotech"
        description="How Richverse Ecotech collects, uses, and protects your personal information."
        path="/privacy"
      />
      <div className="container">
        <PageHead
          eyebrow="Legal"
          title={<>Privacy <em>Policy</em>.</>}
          intro="Last updated: 2026. This policy explains how we handle information you share with us."
        />
        <article className="legal" data-reading>
          <section>
            <h2>Who we are</h2>
            <p>
              Richverse Ecotech (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates this website and provides technology,
              security, marketing, and renewable-energy services. We can be reached at{' '}
              <a href={`mailto:${brand.email}`}>{brand.email}</a>.
            </p>
          </section>
          <section>
            <h2>Information we collect</h2>
            <ul>
              <li><strong>Contact details</strong> you submit through our contact form (name, email, selected service, and message).</li>
              <li><strong>Newsletter email</strong> when you subscribe to updates.</li>
              <li><strong>Technical request information</strong> processed by our hosting provider when you visit the site, such as your IP address and browser information.</li>
            </ul>
          </section>
          <section>
            <h2>How we use your information</h2>
            <ul>
              <li>To respond to your enquiries and provide requested services. After our email provider accepts an enquiry, our server logs an event with the service category. That event does not include your name, email or message.</li>
              <li>To send newsletters you have opted into (you can unsubscribe at any time).</li>
              <li>To maintain, secure, and improve our website.</li>
            </ul>
          </section>
          <section>
            <h2>Sharing &amp; third parties</h2>
            <p>
              We do not sell your personal data. We use trusted providers (for example, email delivery services) solely
              to operate our services, and they process data on our behalf under appropriate safeguards.
            </p>
          </section>
          <section>
            <h2>Your rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal data, and you may withdraw consent
              for marketing at any time. To exercise any right, email{' '}
              <a href={`mailto:${brand.email}`}>{brand.email}</a>.
            </p>
          </section>
          <section>
            <h2>Data retention &amp; security</h2>
            <p>
              We retain personal data only as long as necessary for the purposes above and apply reasonable technical and
              organizational measures to protect it.
            </p>
          </section>
          <section>
            <h2>Contact</h2>
            <p>
              Questions about this policy? Contact us at <a href={`mailto:${brand.email}`}>{brand.email}</a>. Offices in{' '}
              {brand.offices.map((o) => `${o.city}, ${o.country}`).join(' and ')}.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
