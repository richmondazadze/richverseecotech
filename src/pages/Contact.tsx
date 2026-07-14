import { FormEvent, useState } from 'react';
import { brand, contactFaqs, cssVars, services } from '../data/site';
import Seo from '../components/Seo';
import PageHead from '../components/PageHead';
import FAQ from '../components/FAQ';
import SectionHead from '../components/SectionHead';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const company = (data.get('company') as string) || '';
    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      subject: data.get('topic') || 'General enquiry',
      message: `${company ? `Company: ${company}\n\n` : ''}${data.get('message') ?? ''}`,
    };

    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Something went wrong. Please email us directly.');
      }
      setStatus('sent');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  const sent = status === 'sent';

  return (
    <div className="page section-pad-top">
      <Seo
        title="Contact — Richverseecotech"
        description="Reach out for partnerships, support, or a new project. We respond within one business day."
        path="/contact"
      />
      <div className="container">
        <PageHead
          eyebrow="[ Contact ]"
          title={<>Let&rsquo;s <em>connect</em>.</>}
          intro="Reach out for partnerships, support, or just to say hello. We respond within one business day."
        />

        <div className="contact-split">
          {/* LEFT — details */}
          <aside className="contact-info reveal">
            <div className="contact-block">
              <p className="footer-label">[ Email ]</p>
              <a href={`mailto:${brand.email}`} className="contact-line">{brand.email}</a>
            </div>

            {brand.offices.map((o) => (
              <div className="contact-block" key={o.city}>
                <p className="footer-label">[ {o.city} Office ]</p>
                <p className="contact-line">{o.city}, {o.country}</p>
                <p className="contact-sub">{o.phone}</p>
              </div>
            ))}

            <div className="contact-block">
              <p className="footer-label">[ WhatsApp ]</p>
              <p className="contact-line">{brand.whatsapp}</p>
            </div>

            <div className="contact-block">
              <p className="footer-label">[ Hours ]</p>
              <p className="contact-sub">{brand.hours}</p>
            </div>

            <div className="contact-block">
              <p className="footer-label">[ Social ]</p>
              <div className="contact-socials">
                {brand.socials.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>
                ))}
              </div>
            </div>
          </aside>

          {/* RIGHT — form */}
          <div className="contact-form-wrap reveal" style={cssVars({ '--d': '120ms' })}>
            {sent ? (
              <div className="form-success">
                <span className="form-success-mark">◆</span>
                <h3>Message received.</h3>
                <p>Thanks — we&rsquo;ll be in touch within one business day.</p>
                <button className="btn-primary" onClick={() => setStatus('idle')}>Send another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="name">[ Name ]</label>
                    <input id="name" name="name" type="text" placeholder="Ada Lovelace" required />
                  </div>
                  <div className="field">
                    <label htmlFor="company">[ Company ]</label>
                    <input id="company" name="company" type="text" placeholder="Acme Inc." />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="email">[ Email ]</label>
                  <input id="email" name="email" type="email" placeholder="you@company.com" required />
                </div>
                <div className="field">
                  <label htmlFor="topic">[ Service ]</label>
                  <select id="topic" name="topic" defaultValue="">
                    <option value="" disabled>Select one…</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.name}>{s.name}</option>
                    ))}
                    <option value="Other">Something else</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">[ Brief ]</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell us what you're building…" required />
                </div>
                {status === 'error' && <p className="form-error">{errorMsg}</p>}
                <button className="btn-primary" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ */}
        <section className="section-pad">
          <SectionHead eyebrow="[ FAQ ]" title={<>Before you <em>reach out</em>.</>} align="center" />
          <div className="faq-wrap">
            <FAQ items={contactFaqs} />
          </div>
        </section>
      </div>
    </div>
  );
}
