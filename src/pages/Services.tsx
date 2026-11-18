import ChapterRule from '../components/ChapterRule';
import { services } from '../data/site';
import Seo from '../components/Seo';
import PageHead from '../components/PageHead';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { practice } from '../data/practice';
import CTA from '../components/CTA';
import JsonLd from '../components/JsonLd';
import { servicesItemListSchema, breadcrumbSchema } from '../data/structuredData';

export default function Services() {
  return (
    <div className="page section-pad-top">
      <Seo
        title="Web, Marketing, Security & Energy Services | Richverse Ecotech"
        description="Web development, digital marketing, cybersecurity, and renewable energy — compare deliverables, project fit, and how each engagement begins."
        path="/services"
      />
      <JsonLd data={[
        servicesItemListSchema(),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]),
      ]} />
      <div className="container">
        <PageHead
          eyebrow="Services"
          title={<>Four ways to <em>work together.</em></>}
          intro="Compare the problem you have with the work you need to take away. Each brief includes an example you can inspect."
        />
        <div className="comparison">
          <div className="comparison-head" aria-hidden="true"><span>Discipline</span><span>Start here if…</span><span>What you leave with</span></div>
          {services.map(service => {
            const brief = practice[service.slug];
            return <Link to={'/services/'+service.slug} key={service.slug} className="comparison-row" data-scroll-section="capability">
              <div className="comparison-name"><img data-enter="index" src={'/brand/practices/'+service.slug+'.svg'} width="72" height="50" alt=""/><h2>{service.name}</h2></div>
              <p><span>Start here if…</span>{brief.trigger}</p><p><span>What you leave with</span>{brief.delivery}</p>
              <Icon name="arrow-right" size={20}/>
            </Link>;
          })}
        </div>
        <section className="engagement"><ChapterRule/><div className="brief-lead"><h2>When two services overlap.</h2></div><div className="scope-list"><div><h3>A website and a campaign</h3><p>If visitors arrive but cannot complete the enquiry, start with the website. If the journey works but the right people never reach it, start with the campaign.</p></div><div><h3>Software and security</h3><p>If a workflow handles customer records, settle who should see or change them before building the screens. A review of an existing system can also stand on its own.</p></div></div></section>
      </div>
      <CTA title={<>Not sure where to <em>start</em>?</>} buttonLabel="Talk to us" />
    </div>
  );
}
