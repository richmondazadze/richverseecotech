import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <div className="notfound" data-scroll-section="intro">
      <Seo title="Page Not Found | Richverse Ecotech" description="This page could not be found. Explore Richverse Ecotech’s services or contact our team for help." path="/404" noindex />
      <p className="eyebrow">404</p>
      <h1 className="notfound-title">
        Page not <em>found</em>.
      </h1>
      <p className="notfound-sub">The link may have changed or the page may no longer exist.</p>
      <Link to="/" className="btn-primary">
        Return home
      </Link>
    </div>
  );
}
