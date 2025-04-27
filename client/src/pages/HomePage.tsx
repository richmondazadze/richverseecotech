import { Link } from 'wouter';
import { useEffect } from 'react';
import ServiceBox from '../components/services/ServiceBox';

const HomePage = () => {
  useEffect(() => {
    // Initialize or refresh AOS
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <main id="main">
      {/* Hero Section */}
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                We offer modern solutions for growing your business
              </h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                We are a team of talented developers, marketers, cybersecurity experts, and renewable energy specialists 
                <em><strong> making businesses thrive in the digital era.</strong></em>
              </h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div className="text-center text-lg-start">
                  <a
                    href="#services"
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Get Started</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src="/assets/img/hero-img.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Services</h2>
            <p>Comprehensive Technology Solutions for Your Business</p>
          </header>

          <div className="row gy-4">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <ServiceBox
                title="Web and Mobile App Development"
                description="We deliver cutting-edge web and mobile applications tailored to your business requirements, ensuring optimal performance and user experience."
                icon="bi bi-code-slash"
                color="blue"
                link="/softwaredev"
              />
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <ServiceBox
                title="Digital Marketing Suite"
                description="Enhance your online presence with our comprehensive digital marketing services, from SEO and content strategy to social media management."
                icon="bi bi-megaphone"
                color="orange"
                link="/dmarketing"
              />
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <ServiceBox
                title="Cybersecurity Solutions"
                description="Protect your business from digital threats with our robust cybersecurity solutions, including vulnerability assessments and secure system design."
                icon="bi bi-shield-lock"
                color="green"
                link="/cybersecurity"
              />
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <ServiceBox
                title="Renewable Energy Solutions"
                description="Embrace sustainability with our renewable energy solutions. We help businesses reduce their carbon footprint while optimizing energy efficiency."
                icon="bi bi-brightness-high"
                color="red"
                link="/renergy"
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Services Section */}

      {/* About Section */}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row gx-0">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="content">
                <h3>Who We Are</h3>
                <h2>
                  A passionate team of experts committed to delivering excellence in technology and sustainable solutions
                </h2>
                <p>
                  At RichverseEcoTech, we combine innovation, expertise, and sustainability to provide businesses with comprehensive technological solutions. Our diverse team of professionals is dedicated to helping our clients achieve their goals through cutting-edge technology and environmentally conscious practices.
                </p>
                <div className="text-center text-lg-start">
                  <a
                    href="#team"
                    className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Meet Our Team</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src="/assets/img/about.jpg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}

      {/* Team Section */}
      <section id="team" className="team">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Team</h2>
            <p>Our hard working team</p>
          </header>

          <div className="row gy-4">
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="/assets/img/team/team-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="#"><i className="bi bi-twitter"></i></a>
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <p>
                    Visionary leader with over 15 years of experience in technology and sustainable business solutions.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="/assets/img/team/team-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="#"><i className="bi bi-twitter"></i></a>
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Chief Technology Officer</span>
                  <p>
                    Expert in web development, mobile applications, and emerging technologies with a focus on innovation.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="/assets/img/team/team-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="#"><i className="bi bi-twitter"></i></a>
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span>Head of Marketing</span>
                  <p>
                    Strategist with deep knowledge in digital marketing, brand development, and customer engagement.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="/assets/img/team/team-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="#"><i className="bi bi-twitter"></i></a>
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Amanda Jepson</h4>
                  <span>Director of Renewable Energy</span>
                  <p>
                    Renewable energy specialist dedicated to implementing sustainable solutions for businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Team Section */}

      {/* Call-to-action Section */}
      <section id="cta" className="cta">
        <div className="container" data-aos="zoom-in">
          <div className="row">
            <div className="col-lg-9 text-center text-lg-start">
              <h3>Ready to Transform Your Business?</h3>
              <p>
                Partner with RichverseEcoTech to leverage cutting-edge technology and sustainable solutions for your business growth. Our team of experts is ready to help you navigate the digital landscape and achieve your goals.
              </p>
            </div>
            <div className="col-lg-3 cta-btn-container text-center">
              <Link href="/contact" className="cta-btn align-middle">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* End Call-to-action Section */}
    </main>
  );
};

export default HomePage;
