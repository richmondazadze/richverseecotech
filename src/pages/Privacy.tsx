import { brand } from '../data/site';
import Seo from '../components/Seo';
import PageHead from '../components/PageHead';

export default function Privacy() {
  return (
    <div className="page section-pad-top">
      <Seo
        title="Privacy Policy — Richverseecotech"
        description="How Richverseecotech collects, uses, and protects your personal information."
        path="/privacy"
      />
      <div className="container">
        <PageHead
          eyebrow="[ Legal ]"
          title={<>Privacy <em>Policy</em>.</>}
          intro="Last updated: 2026. This policy explains how we handle information you share with us."
        />
        <article className="legal reveal">
          <h3>Who we are</h3>
          <p>
            Richverseecotech (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates this website and provides technology,
            security, marketing, and renewable-energy services. We can be reached at{' '}
            <a href={`mailto:${brand.email}`}>{brand.email}</a>.
          </p>

          <h3>Information we collect</h3>
          <ul>
            <li><strong>Contact details</strong> you submit through our contact form (name, company, email, message).</li>
            <li><strong>Newsletter email</strong> when you subscribe to updates.</li>
            <li><strong>Usage data</strong> such as pages visited, collected in aggregate to improve the site.</li>
          </ul>

          <h3>How we use your information</h3>
          <ul>
            <li>To respond to your enquiries and provide requested services.</li>
            <li>To send newsletters you have opted into (you can unsubscribe at any time).</li>
            <li>To maintain, secure, and improve our website.</li>
          </ul>

          <h3>Sharing &amp; third parties</h3>
          <p>
            We do not sell your personal data. We use trusted providers (for example, email delivery services) solely
            to operate our services, and they process data on our behalf under appropriate safeguards.
          </p>

          <h3>Your rights</h3>
          <p>
            You may request access to, correction of, or deletion of your personal data, and you may withdraw consent
            for marketing at any time. To exercise any right, email{' '}
            <a href={`mailto:${brand.email}`}>{brand.email}</a>.
          </p>

          <h3>Data retention &amp; security</h3>
          <p>
            We retain personal data only as long as necessary for the purposes above and apply reasonable technical and
            organizational measures to protect it.
          </p>

          <h3>Contact</h3>
          <p>
            Questions about this policy? Contact us at <a href={`mailto:${brand.email}`}>{brand.email}</a>. Offices in{' '}
            {brand.offices.map((o) => `${o.city}, ${o.country}`).join(' and ')}.
          </p>

          <p className="legal-note">
            This is a general template and not legal advice. Have it reviewed by a qualified professional before publishing.
          </p>
        </article>
      </div>
    </div>
  );
}
