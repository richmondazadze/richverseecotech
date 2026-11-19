import StudioAtlas from '../components/StudioAtlas';
import ChapterRule from '../components/ChapterRule';
import Icon from '../components/Icon';
import { Link } from 'react-router-dom';
import { brand, aboutFaqs, team } from '../data/site';
import Seo from '../components/Seo';
import TeamGrid, { ProfileLinks } from '../components/TeamGrid';
import FAQ from '../components/FAQ';
import SectionHead from '../components/SectionHead';
import CTA from '../components/CTA';
import JsonLd from '../components/JsonLd';
import { aboutPageSchema, faqSchema, breadcrumbSchema } from '../data/structuredData';

export default function About() {
  return <div className="page studio-page">
    <Seo title="Our Studio & Team | Richverse Ecotech" description="Meet the people who lead Richverse Ecotech’s web, security, marketing, and energy work across Austin and Accra." path="/about"/>
    <JsonLd data={[aboutPageSchema(),breadcrumbSchema([{name:'Home',path:'/'},{name:'About',path:'/about'}]),faqSchema(aboutFaqs)]}/>
    <section className="container people-cover" aria-labelledby="people-title">
      <div className="people-intro"><p className="eyebrow">Inside Richverse</p>
        <h1 className="page-title" id="people-title">The people behind <em>your project.</em></h1>
        <p className="page-intro">From the first technical decision to the final handover, here’s who takes responsibility for the work.</p>
        <Link className="studio-link" to="/about#leadership">Meet the rest of the team<Icon name="arrow-right" size={18}/></Link>
      </div>
      <div className="people-leads"><p className="eyebrow">Studio leadership</p>
        {team.slice(0,2).map(member => <div className="lead-line" key={member.name}><h2>{member.name}</h2><span>{member.role}</span><p>{member.bio}</p><ProfileLinks member={member}/></div>)}
      </div>
    </section>
    <div className="container">
      <section id="leadership" className="section-pad" tabIndex={-1}><SectionHead eyebrow="01 / Studio contacts" title="Security and new projects."/><TeamGrid members={team.slice(2)}/></section>
      <section className="engagement"><ChapterRule/><div className="brief-lead"><p className="eyebrow">02 / Working practice</p><h2>How we run a project.</h2></div><div className="scope-list"><div><h3>Agree the brief</h3><p>Identify who the work serves, what must change, and which constraints matter.</p></div><div><h3>Review something tangible</h3><p>A prototype, campaign plan, risk register, or site assessment gives the team something concrete to discuss.</p></div><div><h3>Plan the handover</h3><p>Agree who will operate the result, maintain it, and decide what comes next.</p></div><Link className="studio-link" to="/services">Explore the disciplines<Icon name="arrow-right" size={18}/></Link></div></section>
      <section className="engagement"><ChapterRule/><div className="brief-lead"><p className="eyebrow">03 / Our offices</p><h2>Two places to start a conversation.</h2></div><div className="office-details"><StudioAtlas/><div className="office-index">{brand.offices.map(o=><div key={o.city}><strong>{o.city}</strong><span>{o.country}</span><a href={'tel:'+o.phone.replace(/\s/g,'')}>{o.phone}</a></div>)}</div></div></section>
      <section className="faq-wrap"><SectionHead eyebrow="Studio enquiries" title="Common questions."/><FAQ items={aboutFaqs}/></section></div>
    <CTA title={<>Tell us about <em>your brief.</em></>} />
  </div>;
}
