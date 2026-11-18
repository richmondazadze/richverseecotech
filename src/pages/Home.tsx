import EnquiryProof from '../components/EnquiryProof';
import ChapterRule from '../components/ChapterRule';
import { Link } from 'react-router-dom';
import { services } from '../data/site';
import { stories, storyPath } from '../data/stories';
import Seo from '../components/Seo';
import SectionHead from '../components/SectionHead';
import ServiceTile from '../components/ServiceTile';
import Partners from '../components/Partners';
import CTA from '../components/CTA';
import JsonLd from '../components/JsonLd';
import Icon from '../components/Icon';
import PracticeCover from '../components/PracticeCover';
import { servicesItemListSchema } from '../data/structuredData';

export default function Home() {
  const story = stories[0];
  return <>
    <Seo title="Richverse Ecotech | Technology & Energy Studio" description="Web development, digital marketing, cybersecurity and renewable energy. Meet the Richverse Ecotech studio in Austin and Accra and discuss your project." path="/" />
    <JsonLd data={servicesItemListSchema()} />
    <PracticeCover/>
    <section className="container feature-spread" aria-labelledby="work-title">
      <ChapterRule/>
      <div className="feature-copy"><p className="eyebrow index-label">01 / In-house project</p><h2 id="work-title">{story.title}.</h2><p>{story.brief}</p><Link className="studio-link" to={storyPath(story.slug)}>Read the project story<Icon name="arrow-right" size={18}/></Link></div>
      <EnquiryProof/>
    </section>
    <Partners />
    <section id="expertise" className="section-pad container">
      <SectionHead eyebrow="02 / Capabilities" title={<>Where we can <em>help.</em></>} intro="Choose the problem closest to yours. Each brief shows what we would make, the decisions you would own, and how to tell if the work is ready." link={{ to: '/services', label: 'Compare services' }} />
      <div className="service-grid">{services.map(s => <ServiceTile key={s.slug} service={s} />)}</div>
    </section>
    <section className="container section-pad"><div className="studio-note"><ChapterRule/><p className="eyebrow">03 / The studio</p><div><h2>Who will work on your project?</h2><p>Meet the people who shape the brief, make the technical decisions and stay accountable for delivery.</p><Link to="/about" className="studio-link">Meet the team<Icon name="arrow-right" size={18}/></Link></div></div></section>
    <CTA title={<>What are you <em>working on?</em></>} />
  </>;
}
