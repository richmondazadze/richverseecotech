import { useEffect } from 'react';
import { Link } from 'wouter';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQAccordion from '../components/FAQAccordion';
import ServiceBox from '../components/services/ServiceBox';

const CybersecurityPage = () => {
  useEffect(() => {
    // Initialize or refresh AOS
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  const faqItems = [
    {
      question: "What cybersecurity services do you offer?",
      answer: "We offer a comprehensive range of cybersecurity services including security assessments, penetration testing, managed security services, security awareness training, and incident response planning."
    },
    {
      question: "How do I know if my business needs cybersecurity services?",
      answer: "All businesses, regardless of size or industry, need cybersecurity measures. If your business uses computers, stores customer data, or operates online, you're at risk of cyber threats and would benefit from our services."
    },
    {
      question: "How often should we conduct security assessments?",
      answer: "We recommend conducting comprehensive security assessments at least annually, with more frequent targeted assessments when you make significant changes to your IT infrastructure or when new threats emerge."
    },
    {
      question: "What happens during a security incident?",
      answer: "Our incident response team will work quickly to identify the breach, contain it, eliminate the threat, recover affected systems, and help you implement measures to prevent future incidents. We also assist with any necessary compliance reporting."
    },
    {
      question: "How can employee training help improve our security?",
      answer: "Many security breaches occur due to human error. Our security awareness training teaches employees to recognize phishing attempts, use strong passwords, handle sensitive data properly, and follow best practices to prevent security incidents."
    },
    {
      question: "Do you offer compliance assistance for regulations like GDPR or HIPAA?",
      answer: "Yes, we provide comprehensive compliance assistance for various regulatory frameworks including GDPR, HIPAA, PCI DSS, and others, helping your business meet all necessary security requirements."
    }
  ];

  return (
    <main id="main">
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Cybersecurity Solutions' }
        ]}
      />

      {/* Hero Section */}
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                Cybersecurity Solutions
              </h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                Protect your business with our
                <em>
                  <strong> comprehensive cybersecurity solutions.</strong>
                </em>
              </h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div className="text-center text-lg-start">
                  <Link href="/contact"
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Get Started</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src="/assets/img/cybersecurity.png" className="img-fluid" alt="Cybersecurity" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="cybersecurity-services" className="cybersecurity-services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title" data-aos="fade-up">Our Cybersecurity Services</h2>
              <p className="section-description" data-aos="fade-up" data-aos-delay="100">
                Comprehensive security solutions to protect your business from evolving cyber threats
              </p>
            </div>
          </div>
          
          <div className="row gy-4 mt-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <ServiceBox
                title="Security Assessment"
                description="Comprehensive evaluation of your IT infrastructure to identify vulnerabilities and security gaps."
                icon="bi bi-shield-check"
                color="blue"
              />
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <ServiceBox
                title="Penetration Testing"
                description="Simulated cyber attacks to identify and fix security weaknesses before they can be exploited."
                icon="bi bi-bug"
                color="blue"
              />
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <ServiceBox
                title="Managed Security"
                description="24/7 monitoring and management of your security infrastructure to detect and respond to threats in real-time."
                icon="bi bi-display"
                color="blue"
              />
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <ServiceBox
                title="Security Training"
                description="Comprehensive training programs to educate your employees about cybersecurity best practices."
                icon="bi bi-person-badge"
                color="blue"
              />
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <ServiceBox
                title="Incident Response"
                description="Rapid response to security incidents to minimize damage and restore normal operations quickly."
                icon="bi bi-exclamation-triangle"
                color="blue"
              />
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <ServiceBox
                title="Compliance Assistance"
                description="Expert guidance to help your business meet regulatory requirements and industry standards."
                icon="bi bi-file-earmark-check"
                color="blue"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Features Section */}
      <section id="features" className="features section-bg py-5 mt-5">
        <div className="container" data-aos="fade-up">
          <header className="section-header text-center mb-5">
            <h2>Advanced Protection</h2>
            <p>Cutting-edge security features for comprehensive protection</p>
          </header>

          <div className="row">
            <div className="col-lg-6 mt-4" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-box d-flex align-items-center">
                <i className="bi bi-check"></i>
                <h3>Network Security</h3>
              </div>
              <p className="ms-4 ps-2">Protection for your network infrastructure against unauthorized access and attacks.</p>
            </div>

            <div className="col-lg-6 mt-4" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-box d-flex align-items-center">
                <i className="bi bi-check"></i>
                <h3>Endpoint Security</h3>
              </div>
              <p className="ms-4 ps-2">Comprehensive protection for all devices connected to your network.</p>
            </div>

            <div className="col-lg-6 mt-4" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-box d-flex align-items-center">
                <i className="bi bi-check"></i>
                <h3>Cloud Security</h3>
              </div>
              <p className="ms-4 ps-2">Secure your cloud-based applications, data, and infrastructure.</p>
            </div>

            <div className="col-lg-6 mt-4" data-aos="fade-up" data-aos-delay="400">
              <div className="feature-box d-flex align-items-center">
                <i className="bi bi-check"></i>
                <h3>Data Protection</h3>
              </div>
              <p className="ms-4 ps-2">Safeguard your sensitive data from theft, loss, or unauthorized access.</p>
            </div>

            <div className="col-lg-6 mt-4" data-aos="fade-up" data-aos-delay="500">
              <div className="feature-box d-flex align-items-center">
                <i className="bi bi-check"></i>
                <h3>Identity Management</h3>
              </div>
              <p className="ms-4 ps-2">Control access to your systems and data with robust authentication methods.</p>
            </div>

            <div className="col-lg-6 mt-4" data-aos="fade-up" data-aos-delay="600">
              <div className="feature-box d-flex align-items-center">
                <i className="bi bi-check"></i>
                <h3>Threat Intelligence</h3>
              </div>
              <p className="ms-4 ps-2">Stay ahead of emerging threats with real-time intelligence and proactive protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="why-choose-us py-5">
        <div className="container" data-aos="fade-up">
          <header className="section-header text-center mb-5">
            <h2>Why Choose Us</h2>
            <p>Industry-leading expertise and comprehensive security solutions</p>
          </header>

          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card">
                <div className="card-body">
                  <div className="card-icon">
                    <i className="bi bi-people"></i>
                  </div>
                  <h5 className="card-title">Expert Team</h5>
                  <p className="card-text">Our security professionals have extensive experience and industry certifications.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card">
                <div className="card-body">
                  <div className="card-icon">
                    <i className="bi bi-gear"></i>
                  </div>
                  <h5 className="card-title">Advanced Technology</h5>
                  <p className="card-text">We utilize cutting-edge security technologies to provide the best protection.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card">
                <div className="card-body">
                  <div className="card-icon">
                    <i className="bi bi-puzzle"></i>
                  </div>
                  <h5 className="card-title">Tailored Solutions</h5>
                  <p className="card-text">We develop customized security strategies based on your unique needs.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="400">
              <div className="card">
                <div className="card-body">
                  <div className="card-icon">
                    <i className="bi bi-clock-history"></i>
                  </div>
                  <h5 className="card-title">24/7 Support</h5>
                  <p className="card-text">Round-the-clock monitoring and support to address security issues promptly.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="500">
              <div className="card">
                <div className="card-body">
                  <div className="card-icon">
                    <i className="bi bi-bar-chart"></i>
                  </div>
                  <h5 className="card-title">Proven Results</h5>
                  <p className="card-text">Track record of successfully protecting businesses across various industries.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="600">
              <div className="card">
                <div className="card-body">
                  <div className="card-icon">
                    <i className="bi bi-check2-circle"></i>
                  </div>
                  <h5 className="card-title">Compliance Expertise</h5>
                  <p className="card-text">Help you meet regulatory requirements and industry standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="stats section-bg py-5">
        <div className="container" data-aos="fade-up">
          <header className="section-header text-center mb-5">
            <h2>Security Statistics</h2>
            <p>The growing importance of cybersecurity in today's digital landscape</p>
          </header>

          <div className="row text-center">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="stat-box">
                <h2>60%</h2>
                <p>Of small businesses close within 6 months of a cyber attack</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="stat-box">
                <h2>300%</h2>
                <p>Increase in cyberattacks since 2020</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="stat-box">
                <h2>$4.24M</h2>
                <p>Average cost of a data breach in 2023</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-box">
                <h2>95%</h2>
                <p>Of breaches are caused by human error</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="container" data-aos="fade-up">
          <header className="section-header text-center mb-5">
            <h2>F.A.Q</h2>
            <p>Frequently Asked Questions About Cybersecurity</p>
          </header>

          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <FAQAccordion items={faqItems} id="faqList" />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="cta" className="cta">
        <div className="container" data-aos="zoom-in">
          <div className="row">
            <div className="col-lg-9 text-center text-lg-start">
              <h3>Ready to Secure Your Business?</h3>
              <p>Contact us today for a free security assessment and consultation.</p>
            </div>
            <div className="col-lg-3 cta-btn-container text-center">
              <Link href="/contact" className="cta-btn align-middle">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CybersecurityPage;