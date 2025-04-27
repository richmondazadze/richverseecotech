import { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  useEffect(() => {
    // Initialize or refresh AOS
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <main id="main">
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Contact' }
        ]}
      />

      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Contact</h2>
            <p>Get in Touch with Us</p>
          </header>

          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-geo-alt"></i>
                    <h3>Address</h3>
                    <p>
                      123 Innovation Drive<br />
                      Tech City, TC 10001<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-telephone"></i>
                    <h3>Call Us</h3>
                    <p>
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-envelope"></i>
                    <h3>Email Us</h3>
                    <p>
                      info@richverseecotech.com<br />
                      support@richverseecotech.com
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-clock"></i>
                    <h3>Open Hours</h3>
                    <p>
                      Monday - Friday<br />
                      9:00AM - 5:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row my-5">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095903057!2d-74.0059418846367!3d40.71277447933206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676005878581!5m2!1sen!2sus"
              style={{ border: 0, width: '100%', height: '350px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RichverseEcoTech Location"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
