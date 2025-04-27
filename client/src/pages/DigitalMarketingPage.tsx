import { useEffect } from 'react';
import { Link } from 'wouter';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQAccordion from '../components/FAQAccordion';
import ServiceBox from '../components/services/ServiceBox';

const DigitalMarketingPage = () => {
  useEffect(() => {
    // Initialize or refresh AOS
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  const faqItems = [
    {
      question: "What digital marketing services do you offer?",
      answer: "We offer a range of digital marketing services including marketing automations, SMS marketing, reporting and analytics, email marketing, and more."
    },
    {
      question: "How can digital marketing benefit my business?",
      answer: "Digital marketing can help increase your brand's visibility, attract more customers, generate leads, and drive sales."
    },
    {
      question: "How do I get started with digital marketing?",
      answer: "To get started with digital marketing, you can reach out to our team for a consultation. We'll assess your needs and create a tailored strategy to help you achieve your goals."
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "The time it takes to see results from digital marketing can vary depending on factors such as your industry, target audience, and the strategies used. However, with a well-executed digital marketing campaign, you can start to see results in as little as a few weeks."
    },
    {
      question: "How much does digital marketing cost?",
      answer: "The cost of digital marketing can vary depending on the scope of your campaign and the services required. We offer flexible pricing options to accommodate businesses of all sizes and budgets."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we provide ongoing support and maintenance for all our digital marketing services. We believe in building long-term relationships with our clients and ensuring their continued success."
    }
  ];

  return (
    <main id="main">
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Digital Marketing Suite' }
        ]}
      />

      {/* Hero Section */}
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                Digital Marketing Suite
              </h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                Elevate your brand's online presence with our
                <em>
                  <strong> comprehensive digital marketing solutions.</strong>
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
              <img src="/assets/img/dmarketing.png" className="img-fluid" alt="Digital Marketing" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="digital-marketing" className="digital-marketing">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title" data-aos="fade-up">Our Digital Marketing Services</h2>
            </div>
          </div>
          
          <div className="row gy-4 mt-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <ServiceBox
                title="Marketing Automations"
                description="Automate your marketing processes by implementing AI to save time and boost efficiency."
                icon="bi bi-gear-wide-connected"
                color="orange"
              />
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <ServiceBox
                title="SMS Marketing"
                description="Engage with your audience through personalized SMS campaigns."
                icon="bi bi-chat-left-text"
                color="orange"
              />
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <ServiceBox
                title="Reporting and Analytics"
                description="Gain valuable insights into your marketing performance with our robust reporting and analytics tools."
                icon="bi bi-graph-up"
                color="orange"
              />
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <ServiceBox
                title="Email Marketing"
                description="Connect with your audience through targeted email campaigns."
                icon="bi bi-envelope"
                color="orange"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="section-bg py-5 mt-5">
        <div className="container py-4" data-aos="fade-up">
          <div className="row mt-1">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <h2 className="text-center mb-5">
                Elevate your brand's online presence with our comprehensive digital marketing solutions. We'll help you reach your target audience and achieve your business goals.
              </h2>
            </div>
          </div>
          
          <div className="row mt-4">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <h3 className="section-title text-center mb-4">Why Choose Us for Digital Marketing?</h3>
              <div className="d-flex flex-column align-items-center" style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
                <div className="d-flex align-items-start mb-4" data-aos="fade-up" data-aos-delay="100">
                  <div className="icon-box me-3">
                    <i className="bi bi-check-circle-fill text-success fs-4"></i>
                  </div>
                  <div>
                    <h4 className="mb-1">Experienced team of digital marketing professionals</h4>
                    <p>Our team consists of experts with years of experience in various digital marketing disciplines.</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start mb-4" data-aos="fade-up" data-aos-delay="200">
                  <div className="icon-box me-3">
                    <i className="bi bi-check-circle-fill text-success fs-4"></i>
                  </div>
                  <div>
                    <h4 className="mb-1">Data-driven approach for optimal results</h4>
                    <p>We use analytics and data to inform our strategies and deliver measurable outcomes.</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="icon-box me-3">
                    <i className="bi bi-check-circle-fill text-success fs-4"></i>
                  </div>
                  <div>
                    <h4 className="mb-1">Customized strategies tailored to your business needs</h4>
                    <p>We develop personalized marketing plans that align with your specific goals and target audience.</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start mb-4" data-aos="fade-up" data-aos-delay="400">
                  <div className="icon-box me-3">
                    <i className="bi bi-check-circle-fill text-success fs-4"></i>
                  </div>
                  <div>
                    <h4 className="mb-1">Proven track record of success with diverse clients</h4>
                    <p>We've helped businesses across various industries achieve their marketing objectives.</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start" data-aos="fade-up" data-aos-delay="500">
                  <div className="icon-box me-3">
                    <i className="bi bi-check-circle-fill text-success fs-4"></i>
                  </div>
                  <div>
                    <h4 className="mb-1">Continuous monitoring and optimization</h4>
                    <p>We constantly evaluate and refine our strategies to ensure ongoing improvement and results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="our-process" className="py-5">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h3 className="section-title">Our Digital Marketing Process</h3>
            </div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="timeline">
                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                  <div className="timeline-number">1</div>
                  <div className="timeline-content">
                    <h4>Discovery and Analysis</h4>
                    <p>We begin by understanding your business, goals, target audience, and current marketing efforts. This helps us identify opportunities and challenges.</p>
                  </div>
                </div>
                
                <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
                  <div className="timeline-number">2</div>
                  <div className="timeline-content">
                    <h4>Strategy Development</h4>
                    <p>Based on our findings, we develop a customized digital marketing strategy aligned with your business objectives and budget.</p>
                  </div>
                </div>
                
                <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
                  <div className="timeline-number">3</div>
                  <div className="timeline-content">
                    <h4>Implementation and Execution</h4>
                    <p>Our team executes the strategy across various channels, creating compelling content and campaigns to engage your target audience.</p>
                  </div>
                </div>
                
                <div className="timeline-item" data-aos="fade-up" data-aos-delay="400">
                  <div className="timeline-number">4</div>
                  <div className="timeline-content">
                    <h4>Monitoring and Optimization</h4>
                    <p>We continuously monitor campaign performance and make data-driven adjustments to optimize results and ROI.</p>
                  </div>
                </div>
                
                <div className="timeline-item" data-aos="fade-up" data-aos-delay="500">
                  <div className="timeline-number">5</div>
                  <div className="timeline-content">
                    <h4>Performance Reporting and Analysis</h4>
                    <p>Regular reporting keeps you informed about campaign performance, insights, and recommendations for future improvement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="section-bg py-5">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h3 className="section-title">Client Success Stories</h3>
            </div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-graph-up text-primary fs-1 me-3"></i>
                        <h4 className="mb-0">Increased Website Traffic</h4>
                      </div>
                      <p>Increased website traffic by 150% in 6 months through SEO optimization and content marketing strategies.</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-envelope-check text-primary fs-1 me-3"></i>
                        <h4 className="mb-0">Lead Generation</h4>
                      </div>
                      <p>Generated over 150 qualified leads through targeted email campaigns and landing page optimization.</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-arrow-up-circle text-primary fs-1 me-3"></i>
                        <h4 className="mb-0">Conversion Rate Improvement</h4>
                      </div>
                      <p>Improved conversion rate by 20% with optimized landing pages and effective call-to-action strategies.</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="400">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-search text-primary fs-1 me-3"></i>
                        <h4 className="mb-0">SEO Rankings</h4>
                      </div>
                      <p>Achieved top rankings on search engine results pages (SERPs) for targeted keywords, increasing organic traffic.</p>
                    </div>
                  </div>
                </div>
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
            <p>Find answers to common questions about our digital marketing services.</p>
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
              <h3>Ready to Boost Your Digital Presence?</h3>
              <p>Contact us today to discuss how our digital marketing services can help your business grow online.</p>
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

export default DigitalMarketingPage;