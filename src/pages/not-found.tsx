import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main id="main">
      <section className="error-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h1>404</h1>
              <h2>Page Not Found</h2>
              <p>The page you are looking for doesn't exist or has been moved.</p>
              <Link to="/" className="btn btn-primary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
