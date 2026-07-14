import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { brand, nav, cssVars } from '../data/site';
import SocialIcon from './SocialIcon';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function subscribe(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setBusy(true);
    setError('');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Subscription failed. Please try again.');
      }
      setSubscribed(true);
      setEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Subscription failed.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="footer-inner">
        {/* Newsletter */}
        <div className="footer-news reveal">
          <div>
            <p className="footer-label">[ Newsletter ]</p>
            <h2 className="footer-quote">
              Let&rsquo;s build something that <em>grows</em>.
            </h2>
          </div>
          {subscribed ? (
            <p className="footer-news-success">◆ Subscribed — watch your inbox.</p>
          ) : (
            <div>
              <form className="footer-news-form" onSubmit={subscribe}>
                <input
                  type="email"
                  placeholder="you@company.com"
                  aria-label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={busy}
                />
                <button type="submit" className="btn-light" disabled={busy}>
                  {busy ? 'Subscribing…' : 'Subscribe'}
                </button>
              </form>
              {error && <p className="footer-news-error">{error}</p>}
            </div>
          )}
        </div>

        <div className="footer-grid">
          <div className="footer-col reveal" style={cssVars({ '--d': '40ms' })}>
            <p className="footer-label">[ Navigate ]</p>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              {nav.map((l) => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col reveal" style={cssVars({ '--d': '100ms' })}>
            <p className="footer-label">[ Offices ]</p>
            {brand.offices.map((o) => (
              <p className="footer-text" key={o.city}>
                <strong>{o.city}, {o.country}</strong><br />
                {o.phone}
              </p>
            ))}
            <p className="footer-text">WhatsApp · {brand.whatsapp}</p>
          </div>

          <div className="footer-col reveal" style={cssVars({ '--d': '160ms' })}>
            <p className="footer-label">[ Contact ]</p>
            <p className="footer-text">
              <a href={`mailto:${brand.email}`}>{brand.email}</a><br />
              {brand.hours}
            </p>
            <p className="footer-label" style={{ marginTop: '1.5rem' }}>[ Social ]</p>
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

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {brand.name.toUpperCase()} · ALL RIGHTS RESERVED</span>
          <span className="footer-legal">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
