import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav } from '../data/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Solidify the header once the user scrolls past the hero crest
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={
          'site-header' + (scrolled ? ' is-scrolled' : '') + (open ? ' is-menu-open' : '')
        }
      >
        <div className="header-inner">
          <Link to="/" className="logo" aria-label="RichverseEcotech — home">
            <img src="/logo.svg" alt="" className="logo-img" aria-hidden="true" />
            <span className="logo-word">Richverse<span className="logo-mark">Ecotech</span></span>
          </Link>

          <nav className="nav-center" aria-label="Primary">
            {nav.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => 'nav-link' + (isActive ? ' is-active' : '')}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-right">
            <Link to="/contact" className="cta-pill">
              <span className="status-dot" aria-hidden="true" />
              <span className="cta-pill-label">Start a project</span>
            </Link>
            <button
              className={'menu-toggle' + (open ? ' is-open' : '')}
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div className={'mobile-menu' + (open ? ' is-open' : '')}>
        <nav>
          {nav.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              style={{ transitionDelay: `${i * 60 + 80}ms` }}
              className={({ isActive }) => 'mobile-link' + (isActive ? ' is-active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="mobile-cta" style={{ transitionDelay: `${nav.length * 60 + 80}ms` }}>
            Start a project
          </Link>
        </nav>
      </div>
    </>
  );
}
