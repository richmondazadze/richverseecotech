import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import JsonLd from './JsonLd';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { organizationSchema, websiteSchema } from '../data/structuredData';

export default function Layout() {
  useScrollReveal();
  return (
    <>
      {/* Site-wide entity graph — present on every prerendered page */}
      <JsonLd data={[organizationSchema(), websiteSchema()]} />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
