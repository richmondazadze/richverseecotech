import { services } from '../data/site';
import Seo from '../components/Seo';
import PageHead from '../components/PageHead';
import ServiceTile from '../components/ServiceTile';
import CTA from '../components/CTA';

export default function Services() {
  return (
    <div className="page section-pad-top">
      <Seo
        title="Services — Richverseecotech"
        description="Web development, digital marketing, cybersecurity, and renewable energy — comprehensive solutions engineered to move your business forward."
        path="/services"
      />
      <div className="container">
        <PageHead
          eyebrow="[ Services ]"
          title={<>What we <em>cultivate</em>.</>}
          intro="From software to security to sustainable energy — comprehensive, innovative solutions engineered to move your business forward."
        />
        <div className="service-grid service-grid-lg">
          {services.map((s, i) => (
            <ServiceTile key={s.slug} service={s} index={i} />
          ))}
        </div>
      </div>
      <CTA title={<>Not sure where to <em>start</em>?</>} buttonLabel="Talk to us" />
    </div>
  );
}
