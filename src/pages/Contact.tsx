import { useEnquiryDraft } from '../hooks/useEnquiryDraft';
import ContactTopic from '../components/ContactTopic';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { brand, contactFaqs, services } from '../data/site';
import Seo from '../components/Seo';
import PageHead from '../components/PageHead';
import FAQ from '../components/FAQ';
import SectionHead from '../components/SectionHead';
import JsonLd from '../components/JsonLd';
import Icon from '../components/Icon';
import { faqSchema, breadcrumbSchema } from '../data/structuredData';

type Status = 'idle' | 'sending' | 'sent' | 'error';
type FieldName = 'name' | 'email' | 'message';

export default function Contact() {
  const [params] = useSearchParams();
  const selectedService = services.find(s => s.slug === params.get('service'))?.name || '';
  const draft = useEnquiryDraft();
  const [topic, setTopic] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [replyEmail, setReplyEmail] = useState('');
  const success = useRef<HTMLHeadingElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const inFlight = useRef(false);
  useEffect(() => {
    const saved = draft.current;
    const next = !selectedService || selectedService === saved.from ? saved.topic ?? selectedService : selectedService;
    setTopic(next);
    if (next !== saved.topic || selectedService !== saved.from) draft.current = { ...saved, from: selectedService, topic: next };
  }, [draft, selectedService]);
  useEffect(() => { if (status === 'sent') success.current?.focus(); }, [status]);

  function editField(field: FieldName, value: string) {
    draft.current = { ...draft.current, [field]: value };
    setErrors(previous => ({ ...previous, [field]: undefined }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inFlight.current) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) || '').trim();
    const payload = { name: value('name'), email: value('email'), subject: topic || 'General enquiry', message: value('message'), website: value('website') };
    const invalid: Partial<Record<FieldName, string>> = {};
    if (!payload.name) invalid.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) invalid.email = 'Enter an email address we can reply to.';
    if (!payload.message) invalid.message = 'Tell us a little about what you need.';
    setErrors(invalid);
    if (Object.keys(invalid).length) {
      const first = form.elements.namedItem(Object.keys(invalid)[0]) as HTMLElement;
      first?.focus();
      return;
    }
    inFlight.current = true;
    const submitted = draft.current;
    setStatus('sending');
    setErrorMsg('');
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), signal: controller.signal });
      const body = await res.json().catch(() => null);
      if (!res.ok || !body?.message) throw new Error(body?.error || 'We couldn’t send your enquiry. Please try again or email us directly.');
      if (draft.current === submitted) draft.current = {};
      setTopic('');
      setReplyEmail(payload.email);
      setStatus('sent');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error && err.name === 'AbortError' ? 'We couldn’t confirm delivery. Please email us to check before trying again.' : err instanceof Error ? err.message : 'We couldn’t send your enquiry. Please try again.');
    } finally {
      window.clearTimeout(timeout);
      inFlight.current = false;
    }
  }

  return <div className="page section-pad-top">
    <Seo title="Contact Richverse Ecotech | Let’s Talk About Your Project" description="Tell us about your web, marketing, cybersecurity or renewable energy project. Contact our Austin and Accra team. We aim to reply within one business day." path="/contact" />
    <JsonLd data={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]), faqSchema(contactFaqs)]} />
    <div className="container">
      <div className="contact-head"><PageHead eyebrow="Let’s talk" title={<>Tell us about <em>your project.</em></>} intro={status === 'sent' ? undefined : "We aim to reply by email within one business day."} /><a className="studio-link contact-jump" href="#direct-contact">Prefer email or WhatsApp?<Icon name="arrow-right" size={16}/></a></div>
      <div className="contact-split">
        <div id="project-enquiry" tabIndex={-1} className="brief-panel" data-scroll-section="enquiry"><span aria-hidden="true" className="enquiry-trace"><i/></span><noscript><h2>Email your enquiry</h2><p>Send a few lines about your project to <a className="studio-link" href={'mailto:'+brand.email}>{brand.email}</a>.</p></noscript>
          {status === 'sent' ? <div className="form-success">
            <span className="form-success-mark"><Icon name="check" size={28} /></span>
            <h2 ref={success} tabIndex={-1}>Enquiry received.</h2>
            <p>Thank you for getting in touch. We aim to reply to <strong>{replyEmail}</strong> within one business day.</p>
            <button className="btn-primary" onClick={() => { setStatus('idle'); setErrors({}); requestAnimationFrame(() => nameInput.current?.focus()); }}>Send another enquiry<Icon name="arrow-right" size={18} /></button>
          </div> : <form className="contact-form" method="post" action="/api/contact" onSubmit={handleSubmit} noValidate aria-busy={status === 'sending'}>
            <div><h2>Project enquiry</h2></div>
            <div className="field-row">
              <div className="field"><label htmlFor="name">Your name</label><input ref={nameInput} id="name" name="name" autoComplete="name" placeholder="Full name" required maxLength={100} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} defaultValue={draft.current.name} onChange={e => editField('name', e.target.value)} />{errors.name && <span className="field-error" id="name-error">{errors.name}</span>}</div>
              <div className="field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" inputMode="email" placeholder="you@company.com" required maxLength={254} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} defaultValue={draft.current.email} onChange={e => editField('email', e.target.value)} />{errors.email && <span className="field-error" id="email-error">{errors.email}</span>}</div>
            </div>
            <div className="field"><label htmlFor="topic" id="topic-label">What can we help with?<small>(optional)</small></label><ContactTopic value={topic} onChange={value => { setTopic(value); draft.current = { ...draft.current, from: selectedService, topic: value }; }}/></div>
            <div className="field"><label htmlFor="message">A little about your project</label><p className="field-hint" id="brief-hint">Your goal, your timeline, or the problem you’d like to solve.</p><textarea id="message" name="message" rows={5} placeholder="We’re looking to…" required maxLength={5000} aria-invalid={Boolean(errors.message)} aria-describedby={`brief-hint${errors.message ? ' message-error' : ''}`} defaultValue={draft.current.message} onChange={e => editField('message', e.target.value)} />{errors.message && <span className="field-error" id="message-error">{errors.message}</span>}</div>
            <div className="hp-field" aria-hidden="true"><label htmlFor="website">Leave this field empty</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
            {status === 'error' && <div role="alert" className="form-error"><p>{errorMsg} Your draft is still here.</p><a href={`mailto:${brand.email}`}>Email us directly</a></div>}
            <div className="brief-send"><button className="btn-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending enquiry…' : 'Send enquiry'}<Icon name="arrow-right" size={18} /></button><p className="privacy-note">We’ll use your details to respond to your enquiry. See our <Link to="/privacy">privacy policy</Link> for more information.</p></div>
            <span className="hp-field" role="status">{status === 'sending' ? 'Sending your enquiry.' : ''}</span>
          </form>}
        </div>
        <aside className="contact-sidebar" aria-label="Next steps and direct contact">
          <div className="next-steps" data-scroll-section="next-steps"><h2>What happens next?</h2><ol>
            <li><div><strong>A personal reply</strong><p>We’ll put your brief in front of the person who can help.</p></div></li>
            <li><div><strong>A conversation about your goals</strong><p>We’ll ask a few questions and arrange a call if it would help.</p></div></li>
            <li><div><strong>A clear way forward</strong><p>We’ll recommend the right approach and discuss scope, timing, and budget.</p></div></li>
          </ol></div>
          <div id="direct-contact" tabIndex={-1} className="contact-info" data-scroll-section="contact-details"><h2>Prefer to reach us directly?</h2>
            <div className="contact-method"><Icon name="mail" size={20} /><div><p className="eyebrow">Email</p><a href={`mailto:${brand.email}`}>{brand.email}</a></div></div>
            {brand.offices.map(o => <div className="contact-method" key={o.city}><Icon name="phone" size={20} /><div><p className="eyebrow">{o.city} · {o.country}</p><a href={`tel:${o.phone.replace(/\s/g, '')}`}>{o.phone}</a></div></div>)}
            <div className="contact-method"><Icon name="chat" size={20} /><div><p className="eyebrow">WhatsApp</p><a href={`https://wa.me/${brand.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">Chat with our team <Icon name="arrow-up-right" size={16}/></a></div></div>
            <p className="contact-hours"><Icon name="clock" size={16} /><span>{brand.hours}</span></p>
          </div>
        </aside>
      </div>
      <section id="common-questions" className="section-pad"><SectionHead eyebrow="A few useful answers" title={<>Before we <em>begin.</em></>} align="center" /><div className="faq-wrap"><FAQ items={contactFaqs} /></div></section>
    </div>
  </div>;
}
