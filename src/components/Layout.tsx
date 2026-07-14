import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Layout() {
  useScrollReveal();
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
