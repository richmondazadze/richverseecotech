import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <div className="notfound">
      <Helmet>
        <title>Page not found — Richverseecotech</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <p className="eyebrow reveal">[ 404 ]</p>
      <h1 className="notfound-title reveal">
        Lost in the <em>mesh</em>.
      </h1>
      <p className="notfound-sub reveal">This page drifted out of orbit.</p>
      <Link to="/" className="btn-primary reveal">
        Back to base
      </Link>
    </div>
  );
}
