import React from 'react';
import { NavBar } from './ui/tubelight-navbar';
import { Footerdemo } from './ui/footer-section';
import { Home, User, Briefcase, FileText, Mail } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Services', url: '/services', icon: Briefcase },
    { name: 'Blog', url: '/blog', icon: FileText },
    { name: 'Contact', url: '/contact', icon: Mail },
  ];
  return (
    <div className="min-h-screen bg-background font-sans">
      <NavBar items={navItems} />
      <main className="pt-4 md:pt-16"> {/* Reduced padding for seamless transition */}
        {children}
      </main>
      <Footerdemo />
    </div>
  );
};

export default Layout; 