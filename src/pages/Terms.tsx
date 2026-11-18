import { brand } from '../data/site';
import Seo from '../components/Seo';
import PageHead from '../components/PageHead';

export default function Terms() {
  return (
    <div className="page section-pad-top">
      <Seo
        title="Terms of Service — Richverse Ecotech"
        description="The terms and conditions governing your use of the Richverse Ecotech website and services."
        path="/terms"
      />
      <div className="container">
        <PageHead
          eyebrow="Legal"
          title={<>Terms of <em>Service</em>.</>}
          intro="Last updated: 2026. By using this website you agree to the terms below."
        />
        <article className="legal" data-reading>
          <section>
            <h2>Use of the website</h2>
            <p>
              You may use this website for lawful purposes only. You agree not to misuse it, attempt to disrupt it, or
              access it in any way that could damage or impair its availability.
            </p>
          </section>
          <section>
            <h2>Intellectual property</h2>
            <p>
              All content on this site — text, graphics, logos, and design — is owned by Richverse Ecotech or its licensors
              and is protected by applicable intellectual-property laws. You may not reproduce it without permission.
            </p>
          </section>
          <section>
            <h2>Services</h2>
            <p>
              Descriptions of our services are provided for general information. Specific engagements are governed by a
              separate written agreement between you and Richverse Ecotech.
            </p>
          </section>
          <section>
            <h2>Third-party links &amp; trademarks</h2>
            <p>
              Product names and logos referenced on this site are trademarks of their respective owners and are used for
              identification only; their appearance does not imply endorsement.
            </p>
          </section>
          <section>
            <h2>Limitation of liability</h2>
            <p>
              This website is provided &ldquo;as is&rdquo; without warranties of any kind. To the fullest extent permitted
              by law, Richverse Ecotech is not liable for any damages arising from your use of the site.
            </p>
          </section>
          <section>
            <h2>Contact</h2>
            <p>
              Questions about these terms? Contact us at <a href={`mailto:${brand.email}`}>{brand.email}</a>.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
