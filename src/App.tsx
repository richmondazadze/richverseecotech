import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import SoftwareDevPage from './pages/SoftwareDevPage'
import DigitalMarketingPage from './pages/services/DigitalMarketingPage'
import CybersecurityPage from './pages/services/CybersecurityPage'
import RenewableEnergyPage from './pages/services/RenewableEnergyPage'
import BlogPage from './pages/blog/BlogPage'
import BlogPostPage from './pages/blog/BlogPostPage'
import BlogCategoryPage from './pages/blog/BlogCategoryPage'
import BlogTagPage from './pages/blog/BlogTagPage'
import NotFoundPage from './pages/not-found'
import AboutPage from './pages/AboutPage'
import WebDevPage from './pages/services/WebDevPage'
import ScrollToTopButton from './components/ScrollToTopButton'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToTopButton />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/softwaredev" element={<SoftwareDevPage />} />
          <Route path="/services" element={<SoftwareDevPage />} />
          <Route path="/services/web-development" element={<WebDevPage />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/services/cybersecurity" element={<CybersecurityPage />} />
          <Route path="/services/renewable-energy" element={<RenewableEnergyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/blog/category/:category" element={<BlogCategoryPage />} />
          <Route path="/blog/tag/:tag" element={<BlogTagPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
