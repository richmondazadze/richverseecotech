import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, Code2, Megaphone, ShieldCheck, Leaf, Mail } from 'lucide-react';

const services = [
  { name: 'Web and Mobile App Development', to: '/services/web-development', icon: <Code2 className="w-5 h-5 text-blue-500" /> },
  { name: 'Digital Marketing Suite', to: '/services/digital-marketing', icon: <Megaphone className="w-5 h-5 text-orange-500" /> },
  { name: 'Cybersecurity Solutions', to: '/services/cybersecurity', icon: <ShieldCheck className="w-5 h-5 text-green-500" /> },
  { name: 'Renewable Energy Solutions', to: '/services/renewable-energy', icon: <Leaf className="w-5 h-5 text-yellow-500" /> },
];

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'About', to: '/about' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-white/80 via-white/60 to-white/80 backdrop-blur-md shadow-lg border-b border-gray-100 font-sans">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="url(#nav-logo-gradient)" />
            <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold" dy=".3em">RE</text>
            <defs>
              <linearGradient id="nav-logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4154f1" />
                <stop offset="1" stopColor="#08da4e" />
              </linearGradient>
            </defs>
          </svg>
          <span className="font-extrabold text-2xl bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent tracking-tight">RichverseEcoTech</span>
        </Link>
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 font-semibold text-lg">
          <li>
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          </li>
          <li className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="flex items-center gap-1 hover:text-primary transition-colors" onClick={() => setServicesOpen(v => !v)}>
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 mt-2 w-64 rounded-xl shadow-xl bg-white/95 border border-gray-100 py-2 z-50"
                >
                  {services.map(service => (
                    <li key={service.name}>
                      <Link to={service.to} className="flex items-center gap-3 px-5 py-3 hover:bg-primary/10 transition-colors text-base" onClick={() => setServicesOpen(false)}>
                        {service.icon}
                        <span>{service.name}</span>
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-primary transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" /> Contact
            </Link>
          </li>
        </ul>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-lg hover:bg-primary/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="w-7 h-7 text-primary" />
        </button>
        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-0 bg-white/95 z-50 flex flex-col p-8 md:hidden font-sans"
            >
              <button className="self-end mb-8" onClick={() => setMenuOpen(false)}>
                <span className="text-3xl">×</span>
              </button>
              <ul className="flex flex-col gap-6 text-xl font-semibold">
                <li>
                  <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors">Home</Link>
                </li>
                <li>
                  <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-2 text-lg font-bold">Services</span>
                    <ul className="pl-4 flex flex-col gap-2">
                      {services.map(service => (
                        <li key={service.name}>
                          <Link to={service.to} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 py-2 hover:text-primary transition-colors">
                            {service.icon}
                            <span>{service.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors">About</Link>
                </li>
                <li>
                  <Link to="/blog" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors">Blog</Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar; 