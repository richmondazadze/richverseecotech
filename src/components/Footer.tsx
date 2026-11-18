import { FormEvent, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { brand, nav } from '../data/site';
import SocialIcon from './SocialIcon';
import Brand from './Brand';
import Icon from './Icon';

export default function Footer() {
  const journal = useLocation().pathname.startsWith('/blog');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function subscribe(e: FormEvent) {
    e.preventDefault();
    if (!email || busy) return;
    setBusy(true);
    setError('');
    const controller=new AbortController();
    const timeout=window.setTimeout(()=>controller.abort(),20000);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST', signal:controller.signal,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const body = await res.json().catch(() => null);
      if (!res.ok || !body?.message) {
        throw new Error(body?.error || 'We couldn’t receive your signup. Please try again.');
      }
      setSubscribed(true);
      setEmail('');
    } catch (err) {
      setError(err instanceof Error && err.name === 'AbortError' ? 'We couldn’t confirm the signup. Email us if you need to check.' : err instanceof Error ? err.message : 'We couldn’t receive your signup. Please try again.');
    } finally {
      window.clearTimeout(timeout);setBusy(false);
    }
  }

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-inner">
        {journal ? <div id="studio-updates" tabIndex={-1} className="footer-news" data-scroll-section="newsletter">
          <div>
            <p className="footer-label">Newsletter</p>
            <h2 className="footer-quote" data-enter="heading">
              Notes from the <em>studio.</em>
            </h2>
            <p className="footer-news-copy">New guides on running a website, measuring a campaign, protecting an account, and planning for outages.</p>
          </div>
          {subscribed ? (
            <p className="footer-news-success" role="status">Thank you. We’ve received your signup request.</p>
          ) : (
            <div>
              <noscript><a href={'mailto:'+brand.email+'?subject=Newsletter%20signup'}>Request updates by email</a></noscript>
              <form className="footer-news-form" method="post" action="/api/newsletter" onSubmit={subscribe}>
                <label className="newsletter-field">Email address
                <input
                  type="email"
                  name="email" autoComplete="email"
                  maxLength={254}
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={busy}
                />
                </label>
                <button type="submit" className="btn-light" disabled={busy}>
                  {busy ? 'Subscribing…' : 'Subscribe'}
                </button>
              </form>
              <p className="footer-consent">Sign up for email updates. <Link to="/privacy">Privacy policy</Link> · Opt out anytime by email.</p>
              {error && <p className="footer-news-error" role="alert">{error}</p>}
            </div>
          )}
        </div> : <div className="footer-news-line" data-scroll-section="newsletter"><span>Notes from the studio</span><Link to="/blog#studio-updates">Get email updates <Icon name="arrow-right" size={16}/></Link></div>}

        <div className="footer-grid" data-scroll-section="directory">
          <div className="footer-brand"><Link to="/" className="logo" aria-label="Richverse Ecotech home"><Brand reversed /></Link><p>Technology and energy studio.<br />Austin &amp; Accra.</p></div>
          <div className="footer-col">
            <p className="footer-label">Navigate</p>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              {nav.map((l) => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-reach">
            <p className="footer-label">Reach the studio</p>
            <a className="footer-email" href={'mailto:'+brand.email}>{brand.email}</a>
            <div className="footer-offices">{brand.offices.map(o => <div key={o.city}><strong>{o.city}</strong><a href={'tel:'+o.phone.replace(/\s/g,'')}>{o.phone}</a></div>)}</div>
            <a className="footer-chat" href={'https://wa.me/'+brand.whatsapp.replace(/\D/g,'')}>WhatsApp · {brand.whatsapp}<Icon name="arrow-up-right" size={14}/></a>
            <p className="footer-hours">{brand.hours}</p>
          </div>
          <div className="footer-col">
            <p className="footer-label">Social</p>
            <div className="social-icons">
              {brand.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="social-icon-link"
                >
                  <SocialIcon label={s.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom" data-scroll-section="credits">
          <span>© {new Date().getFullYear()} Richverse Ecotech. All rights reserved.</span>
          <span className="footer-legal">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
