import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

const Header = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [location] = useLocation();
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeaderScrolled(true);
      } else {
        setIsHeaderScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const toggleSubmenu = (submenu: string) => {
    if (activeSubmenu === submenu) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(submenu);
    }
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location === path;
    }
    return location.startsWith(path);
  };

  // Close mobile nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('#navbar') && !target.closest('.mobile-nav-toggle')) {
        setIsMobileNavActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile nav when location changes
  useEffect(() => {
    setIsMobileNavActive(false);
  }, [location]);

  return (
    <header id="header" className={`header fixed-top ${isHeaderScrolled ? 'header-scrolled' : ''}`}>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center">
          <img src="/assets/img/logo.svg" alt="RichverseEcoTech" />
          <span>RichverseEcoTech</span>
        </Link>

        <i 
          className={`bi ${isMobileNavActive ? 'bi-x' : 'bi-list'} mobile-nav-toggle`}
          onClick={toggleMobileNav}
        ></i>

        <nav id="navbar" className={`navbar ${isMobileNavActive ? 'navbar-mobile' : ''}`}>
          <ul>
            <li>
              <Link 
                href="/"
                className={`nav-link scrollto ${isActive('/') && !location.includes('/') ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li className="dropdown">
              <a 
                href="#"
                className={location.includes('softwaredev') || location.includes('dmarketing') || location.includes('cybersecurity') || location.includes('renergy') ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  toggleSubmenu('services');
                }}
              >
                <span>Services</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul className={isMobileNavActive && activeSubmenu === 'services' ? 'dropdown-active' : ''}>
                <li>
                  <Link href="/softwaredev">Web and Mobile App Development</Link>
                </li>
                <li>
                  <Link href="/dmarketing">Digital Marketing Suite</Link>
                </li>
                <li>
                  <Link href="/cybersecurity">Cybersecurity Solutions</Link>
                </li>
                <li>
                  <Link href="/renergy">Renewable Energy Solutions</Link>
                </li>
              </ul>
            </li>
            <li>
              <a 
                href="/#about" 
                className={`nav-link scrollto ${location === '/#about' ? 'active' : ''}`}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="/#team" 
                className={`nav-link scrollto ${location === '/#team' ? 'active' : ''}`}
              >
                Team
              </a>
            </li>
            <li>
              <Link 
                href="/blog"
                className={`nav-link ${location.includes('blog') ? 'active' : ''}`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                href="/contact"
                className="getstarted scrollto"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
