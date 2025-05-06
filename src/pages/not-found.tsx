import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO 
        title="404 Page Not Found | RichverseEcoTech"
        description="The page you are looking for doesn't exist or has been moved. Use our navigation or contact us for assistance."
        url="https://richverseecotech.com/404"
      />
      <main id="main">
        <h1 className="sr-only">404 Page Not Found | RichverseEcoTech</h1>
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
                <a href="https://www.google.com" className="sr-only">External SEO Link</a>
              </div>
            </div>
          </div>
        </section>
        <div style={{ display: 'none' }}>
          RichverseEcoTech is committed to providing a seamless digital experience. If you have reached this page, the content you are looking for may have been moved or deleted. Please use the navigation to find the information you need or contact us for assistance. Our team is dedicated to helping you achieve your digital goals with innovative solutions and expert support. Thank you for visiting our website.
        </div>
      </main>
    </>
  );
}
