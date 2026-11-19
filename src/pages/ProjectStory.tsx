import EnquiryProof from '../components/EnquiryProof';
import ChapterRule from '../components/ChapterRule';
import Icon from '../components/Icon';
import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import JsonLd from '../components/JsonLd';
import CTA from '../components/CTA';
import NotFound from './NotFound';
import { stories, storyPath } from '../data/stories';
import { services } from '../data/site';
import { breadcrumbSchema, studioWorkSchema } from '../data/structuredData';

export default function ProjectStory(){
  const {slug} = useParams(), story = stories.find(s => s.slug === slug);
  if (!story) return <NotFound/>;
  const path = storyPath(story.slug), service = services.find(s => s.slug === story.service)!;
  return <div className="page section-pad-top"><Seo title="Website Redesign: From Service Page to Enquiry | Richverse Ecotech" description={story.brief} path={path} image={story.image} imageAlt={story.alt}/>
    <JsonLd data={[studioWorkSchema(path, story), breadcrumbSchema([{name:'Home',path:'/'},{name:story.title,path}])]}/>
    <article className="container story-article" data-reading>
      <header className="page-head" data-scroll-section="intro"><p className="eyebrow">Project story / {story.kind}</p><h1 className="page-title">{story.title}.</h1><p className="page-intro">{story.brief}</p></header>
      <EnquiryProof/>
      <div className="story-rows">{[['01 / Brief','The constraint',story.constraint],['02 / Delivery','What we changed',story.contribution],['03 / Result','See it in use',story.outcome]].map(([n,t,b])=><section className="story-row" key={n}><ChapterRule/><p className="eyebrow">{n}</p><div><h2>{t}</h2><p>{b}</p></div></section>)}</div>
      <section className="story-row" id="acceptance-test" tabIndex={-1}><ChapterRule/><p className="eyebrow">04 / Acceptance test</p><div><h2>How to check the handoff yourself</h2><p>Open the web development service and choose “Discuss your project.” The topic should already be Web Development. Change it to another service: the visitor’s choice should take priority. You can run both checks without sending the form.</p><p>That is the result we can demonstrate here. We have not measured a change in enquiries attributable to the redesign.</p><p>To write a similar test for your own project, use the <Link to="/blog/website-redesign-brief">website redesign brief and template</Link>.</p></div></section>
      <Link className="studio-link" to={'/services/'+service.slug}>Try the {service.name} enquiry journey<Icon name="arrow-right" size={18}/></Link>
    </article><CTA title={<>Have a similar <em>brief?</em></>} to={'/contact?service='+story.service}/>
  </div>;
}
