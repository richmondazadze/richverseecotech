import Select from '../components/Select';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ServiceTile from '../components/ServiceTile';
import FAQ from '../components/FAQ';
import Icon, { type IconName } from '../components/Icon';
import { services } from '../data/site';
type DemoState = 'Ready' | 'Sending' | 'Success' | 'Error';
export default function Showcase() {
  const [state,setState]=useState<DemoState>('Ready');
  return <div className="container section-pad-top showcase"><Seo title="Website Component Reference | Richverse Ecotech" description="Internal reference for Richverse website components and interaction states." path="/studio/components" noindex/>
    <header className="page-head" data-scroll-section="intro"><p className="eyebrow">Studio reference · local review</p><h1 className="page-title">The interface <em>in practice.</em></h1><p className="page-intro">Resize the page to compare mobile and desktop layouts. Tab through the controls to inspect focus. This demonstration sends no data.</p></header>
    <section><h2>Identity &amp; typography</h2><div className="swatches">{[['Ivory','#fcfbf9'],['Charcoal','#171717'],['Indigo','#4338ca'],['Wash','#f1f0f8']].map(([label,color])=><div key={label}><span style={{background:color}}/>{label} <small>{color}</small></div>)}</div><p>Manrope for explanations and controls. <em className="type-specimen">Playfair for a considered pause.</em></p></section>
    <section><h2>Links &amp; actions</h2><div className="hero-actions"><Link className="btn-primary" to="/contact">Discuss a project<Icon name="arrow-right" size={18}/></Link><Link className="studio-link" to="/services">Compare services<Icon name="arrow-right" size={18}/></Link><button className="btn-primary" disabled>Sending enquiry…</button></div></section>
    <section><h2>Heritage service symbols</h2><p>The small glyphs identify a discipline. The larger drawings explain its work.</p><ul className="icon-examples">{services.map(s=><li key={s.slug}><Icon name={s.slug as IconName} size={24}/>{s.name}</li>)}</ul><a className="studio-link" href="/brand/icons/preview.html">View the complete icon sheet<Icon name="arrow-right" size={18}/></a></section>
    <section><h2>Capability index</h2><div className="service-grid">{services.map(s=><ServiceTile key={s.slug} service={s}/>)}</div></section>
    <section><h2>Form feedback</h2><label className="demo-select">Preview state <Select value={state} onChange={e=>setState(e.target.value as DemoState)}>{['Ready','Sending','Success','Error'].map(x=><option key={x}>{x}</option>)}</Select></label>
      <div className="brief-panel" aria-live="polite">{state==='Success'?<div className="form-success"><Icon name="check"/><h3>Enquiry received.</h3><p>We’ll reply by email.</p></div>:<div className="contact-form"><div className="field"><label htmlFor="demo-email">Email address</label><input id="demo-email" type="email" placeholder="you@company.com" aria-invalid={state==='Error'} aria-describedby={state==='Error'?'demo-error':undefined}/>{state==='Error'&&<p id="demo-error" className="field-error">Enter an email address we can reply to.</p>}</div><button className="btn-primary" disabled={state==='Sending'} onClick={()=>setState('Success')}>{state==='Sending'?'Sending enquiry…':'Preview confirmation'}</button></div>}</div></section>
    <section><h2>Disclosure</h2><FAQ items={[{q:'What happens after an enquiry?',a:'A team member replies by email to clarify the brief and agree the next step.'}]}/></section>
  </div>;
}
