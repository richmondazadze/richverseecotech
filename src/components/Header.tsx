import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useMatch } from 'react-router-dom';
import { enquiryPath, nav, services } from '../data/site';
import Brand from './Brand';
import Icon from './Icon';

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const { pathname, search } = useLocation();
  const match = useMatch('/services/:slug');
  const service = services.find(s => s.slug === match?.params.slug);
  const enquiryTo = pathname === '/contact' ? { pathname, search, hash: '#project-enquiry' } : enquiryPath(service?.slug);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const update = () => {
      const active = navRef.current?.querySelector<HTMLElement>('.is-active');
      setIndicator({ left: active?.offsetLeft ?? 0, width: active?.offsetWidth ?? 0 });
    };
    update();
    const observer = new ResizeObserver(update);
    if (navRef.current) observer.observe(navRef.current);
    document.fonts.ready.then(update);
    return () => observer.disconnect();
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const outside = (e: PointerEvent) => { if (!header.current?.contains(e.target as Node)) close(); };
    const escape = (e: KeyboardEvent) => { if (e.key === 'Escape') { close(); toggle.current?.focus(); } };
    const media = window.matchMedia('(min-width: 861px)');
    media.addEventListener('change', close);
    document.addEventListener('keydown', escape);
    document.addEventListener('pointerdown', outside);
    return () => { media.removeEventListener('change', close); document.removeEventListener('keydown', escape); document.removeEventListener('pointerdown', outside); };
  }, [open]);

  const links = nav.filter(l => l.to !== '/contact').map(l => <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}
    className={({ isActive }) => 'nav-link' + (isActive ? ' is-active' : '')}>{l.label}</NavLink>);

  return <header ref={header} className="site-header" onBlur={e => {
    if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget)) setOpen(false);
  }}>
    <div className="header-inner">
      <Link to="/" className="logo" aria-label="Richverse Ecotech home" onClick={() => setOpen(false)}>
        <Brand />
      </Link>
      <nav ref={navRef} className="nav-center" aria-label="Primary">{links}<span className="nav-indicator" aria-hidden="true" style={{ width: indicator.width, transform: `translateX(${indicator.left}px)`, opacity: indicator.width ? 1 : 0 }} /></nav>
      <div className="header-right">
        <Link to={enquiryTo} className="header-cta">Start a project <Icon name="arrow-right" size={18} /></Link>
        <button type="button" ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="compact-nav" onClick={() => setOpen(v => !v)}>{open ? 'Close' : 'Menu'}<Icon name={open ? 'close' : 'menu'} size={20} /></button>
      </div>
    </div>
    <nav id="compact-nav" aria-label="Mobile" hidden={!open}>{links}<Link className="btn-primary" to={enquiryTo} onClick={() => setOpen(false)}>Start a project<Icon name="arrow-right" size={18} /></Link><p>Austin &amp; Accra. Working worldwide.</p></nav>
    <span className="reading-rail" hidden aria-hidden="true"><i/></span>
  </header>;
}
