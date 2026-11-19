import ChapterRule from '../components/ChapterRule';
import { Link, useParams } from 'react-router-dom';
import { enquiryPath, services } from '../data/site';
import { practice } from '../data/practice';
import { getPostBySlug } from '../data/blog';
import { readingPaths } from '../data/readingPaths';
import { storyPath, stories } from '../data/stories';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import PracticeFigure from '../components/PracticeFigure';
import ServiceExample from '../components/ServiceExample';
import NotFound from './NotFound';
import CTA from '../components/CTA';
import JsonLd from '../components/JsonLd';
import { serviceSchema, breadcrumbSchema } from '../data/structuredData';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  if (!service) return <NotFound/>;
  const brief = practice[service.slug], path = '/services/'+service.slug, contact = enquiryPath(service.slug);
  const story = stories.find(s => s.service === service.slug);
  const sample = brief.sample;
  const reading = readingPaths[service.slug], guide = getPostBySlug(reading.guide);
  return <div className="page section-pad-top">
    <Seo title={reading.serviceTitle+' | Richverse Ecotech'} description={service.short} path={path}/>
    <JsonLd data={[serviceSchema(service),breadcrumbSchema([{name:'Home',path:'/'},{name:'Services',path:'/services'},{name:service.name,path}])]}/>
    <div className="container" data-reading>
      <header className="service-hero brief-hero" data-scroll-section="brief">
        <div><p className="breadcrumbs"><Link to="/services" className="crumb">Services</Link> / {brief.specialty}</p>
          <h1 className="page-title">{service.name}</h1><p className="page-intro">{brief.fit}</p>
          <div className="brief-actions"><Link to={contact} className="btn-primary service-hero-cta">Discuss your project<Icon name="arrow-right" size={18}/></Link>
            <Link to={path+'#worked-example'} className="studio-link">{sample.link}<Icon name="arrow-right" size={16}/></Link>
          </div>
        </div><PracticeFigure slug={service.slug}/>
      </header>
      <nav className="brief-contents" aria-label="In this service brief">
        <span>In this brief</span>
        {[['worked-example','Example'],['deliverables','Deliverables'],['process','Process'],['questions','Questions']].map(([id,label])=>
          <Link key={id} to={path+'#'+id} data-chapter={id}>{label}</Link>)}
      </nav>
      <section className="engagement sample-section" id="worked-example" tabIndex={-1} aria-labelledby="sample-question"><ChapterRule/>
        <div className="brief-lead"><p className="eyebrow">Inside the work</p><h2 id="sample-question">{brief.question}</h2><p>{sample.intro}</p>
          {story && <Link className="studio-link" to={storyPath(story.slug)}>Read the studio project<Icon name="arrow-right" size={18}/></Link>}
        </div>
        <ServiceExample contact={contact} sample={sample}/>
      </section>
      <section className="engagement" id="deliverables" tabIndex={-1}><ChapterRule/><div className="brief-lead"><p className="eyebrow">Deliverables</p><h2>{brief.outcome}</h2><p>{brief.handoff}</p>
        {service.slug==='web-development' && <Link className="studio-link" to="/blog/website-redesign-brief">Use the website brief template<Icon name="arrow-right" size={16}/></Link>}</div>
        <dl className="scope-list">{service.offerings.map(o=><div key={o.title}><dt>{o.title}</dt><dd>{o.body}</dd></div>)}</dl></section>
      <section className="engagement" id="process" tabIndex={-1}><ChapterRule/><div className="brief-lead"><p className="eyebrow">Working together</p><h2>{brief.processTitle}</h2><p>{brief.inputs}</p></div>
        <div><ol className="milestone-list">{brief.stages.map(([title,detail],i)=><li key={title}><span aria-hidden="true">0{i+1}</span><div><h3>{title}</h3><p>{detail}</p></div></li>)}</ol><p className="support-note"><strong>After handover. </strong>{brief.support}</p></div></section>
      <section className="engagement" id="questions" tabIndex={-1}><ChapterRule/><div className="brief-lead"><h2>Before you decide.</h2><Link className="studio-link" to={'/blog/category/'+service.slug}>Read {service.name.toLowerCase()} insights<Icon name="arrow-right" size={18}/></Link></div>
        <div><dl className="scope-list">{brief.decisions.map(d=><div key={d.q}><dt>{d.q}</dt><dd>{d.a}</dd></div>)}</dl>
          {guide && <p className="support-note">Studio guide: <Link className="studio-link" to={'/blog/'+guide.slug}>{guide.title}</Link></p>}</div></section>
    </div><CTA title={<>Talk to us about <em>{service.name.toLowerCase()}.</em></>} to={contact}/>
  </div>;
}
