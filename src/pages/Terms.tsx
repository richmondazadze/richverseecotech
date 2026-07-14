import { brand } from '../data/site';
import Seo from '../components/Seo';
import PageHead from '../components/PageHead';

export default function Terms() {
  return (
    <div className="page section-pad-top">
      <Seo
        title="Terms of Service — Richverseecotech"
        description="The terms and conditions governing your use of the Richverseecotech website and services."
        path="/terms"
      />
      <div className="container">
        <PageHead
          eyebrow="[ Legal ]"
          title={<>Terms of <em>Service</em>.</>}
          intro="Last updated: 2026. By using this website you agree to the terms below."
        />
        <article className="legal reveal">
          <h3>Use of the website</h3>
          <p>
            You may use this website for lawful purposes only. You agree not to misuse it, attempt to disrupt it, or
            access it in any way that could damage or impair its availability.
          </p>

          <h3>Intellectual property</h3>
          <p>
            All content on this site — text, graphics, logos, and design — is owned by Richverseecotech or its licensors
            and is protected by applicable intellectual-property laws. You may not reproduce it without permission.
          </p>

          <h3>Services</h3>
          <p>
            Descriptions of our services are provided for general information. Specific engagements are governed by a
            separate written agreement between you and Richverseecotech.
          </p>

          <h3>Third-party links &amp; trademarks</h3>
          <p>
            Product names and logos referenced on this site are trademarks of their respective owners and are used for
            identification only; their appearance does not imply endorsement.
          </p>

          <h3>Limitation of liability</h3>
          <p>
            This website is provided &ldquo;as is&rdquo; without warranties of any kind. To the fullest extent permitted
            by law, Richverseecotech is not liable for any damages arising from your use of the site.
          </p>

          <h3>Contact</h3>
          <p>
            Questions about these terms? Contact us at <a href={`mailto:${brand.email}`}>{brand.email}</a>.
          </p>

          <p className="legal-note">
            This is a general template and not legal advice. Have it reviewed by a qualified professional before publishing.
          </p>
        </article>
      </div>
    </div>
  );
}
