import { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import ServiceBox from '../components/services/ServiceBox';
import FAQAccordion from '../components/FAQAccordion';

const SoftwareDevPage = () => {
  useEffect(() => {
    // Initialize or refresh AOS animations
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
      question: "How long does it take to develop a mobile application?",
      answer: "The development timeline varies based on the complexity and features of the app. Simple apps can take 2-3 months, while complex applications may require 6+ months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after the development is complete?",
      answer: "Yes, we offer comprehensive post-launch support and maintenance packages. Our team ensures your application remains updated, secure, and optimized for performance."
    },
    {
      question: "What technologies do you use for web development?",
      answer: "We work with a variety of modern technologies including React, Angular, Vue.js for frontend development, and Node.js, Python, PHP, and Java for backend development. We choose the best technology stack based on your specific project requirements."
    }
  ];

  return (
    <main id="main">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Web and Mobile App Devlopment' }
        ]}
      />

      {/* Hero Section */}
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="50">
              <img src="/assets/img/softwaredev.png" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                Web and Mobile App Devlopment
              </h1>
              <h2 data-aos="fade-up" data-aos-delay="150">
                Crafting digital solutions for your success. From dynamic websites to engaging mobile apps, we specialize in services
                <em>
                  <strong> that captivates your audience and drives results.</strong>
                </em>
              </h2>
              <div data-aos="fade-up" data-aos-delay="500">
                <div className="text-center text-lg-start">
                  <a
                    href="/contact"
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Get Started</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}

      {/* Software Development Section */}
      <section id="software-dev" className="software-dev">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Our Web and Mobile App Development Services</h2>
            </div>
            <section id="services" className="services">
              <div className="container" data-aos="fade-up">
                <div className="row gy-4">
                  <div className="col-lg-3 col-md-3" data-aos="fade-up" data-aos-delay="200">
                    <ServiceBox
                      title="Web Development"
                      description="Build responsive and user-friendly websites tailored to your business needs."
                      icon="bi bi-code-slash"
                      color="blue"
                    />
                  </div>

                  <div className="col-lg-3 col-md-3" data-aos="fade-up" data-aos-delay="200">
                    <ServiceBox
                      title="Mobile App Development"
                      description="Create engaging and intuitive mobile applications for iOS and Android platforms."
                      icon="bi bi-phone"
                      color="blue"
                    />
                  </div>

                  <div className="col-lg-3 col-md-3" data-aos="fade-up" data-aos-delay="200">
                    <ServiceBox
                      title="Custom Software Solutions"
                      description="Develop scalable and robust software solutions to streamline your business operations."
                      icon="bi bi-laptop"
                      color="blue"
                    />
                  </div>

                  <div className="col-lg-3 col-md-3" data-aos="fade-up" data-aos-delay="200">
                    <ServiceBox
                      title="Cloud Integration"
                      description="Integrate cloud services to enhance collaboration and accessibility of your applications."
                      icon="bi bi-cloud-check"
                      color="blue"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Additional Mini-Sections */}
            <div className="row mt-4">
              <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
                <h2 className="text-center">
                  Whether you need a website, mobile app, or custom software solution, our experienced team is here to turn your ideas into reality.
                </h2>
              </div>
            </div>
            <div className="container">
              <div className="row mt-5">
                <div className="col-lg-12 text-center" data-aos="fade-up" data-aos-delay="200">
                  <h1 className="section-title">Why Choose Us for Web and Mobile App Development?</h1>
                  <ul className="list-unstyled d-flex flex-column align-items-center">
                    <div className="d-flex align-items-center justify-content-center" style={{ width: '100%', textAlign: 'left' }}>
                      ✔️ Experienced developers with expertise in various programming languages and frameworks<br /><br />
                      ✔️ User-centric approach to design and development<br /><br />
                      ✔️ Agile methodology for efficient project management and quick iterations<br /><br />
                      ✔️ Quality assurance processes to ensure bug-free and reliable solutions<br /><br />
                      ✔️ Post-launch support and maintenance services for ongoing success
                    </div>
                  </ul>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-lg-12 text-center" data-aos="fade-up" data-aos-delay="300">
                  <h1 className="section-title">Our Development Process</h1>
                  <p className="text-muted">
                    <div className="d-flex align-items-center justify-content-center" style={{ width: '100%', textAlign: 'left' }}>
                      1. Requirement Gathering and Analysis<br /><br />
                      2. Design and Prototyping<br /><br />
                      3. Development and Testing<br /><br />
                      4. Deployment and Launch<br /><br />
                      5. Maintenance and Support
                    </div>
                  </p>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-lg-12 text-center" data-aos="fade-up" data-aos-delay="400">
                  <h1 className="section-title">Client Success Stories</h1>
                  <p className="text-muted">
                    <div className="d-flex align-items-center justify-content-center" style={{ width: '100%', textAlign: 'left' }}>
                      - Launched a responsive e-commerce platform, increasing sales by 200%<br /><br />
                      - Developed a mobile app with over 1 million downloads on app stores<br /><br />
                      - Created a custom CRM system, improving sales team efficiency by 30%<br /><br />
                      - Integrated cloud solutions, reducing infrastructure costs by 50%
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Additional Mini-Sections */}

      {/* F.A.Q Section */}
      <section id="faq" className="faq">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>F.A.Q</h2>
            <p>Find answers to common questions<br /> about our web and mobile app development services.</p>
          </header>

          <div className="row">
            <div className="col-lg-6">
              {/* F.A.Q List 1*/}
              <FAQAccordion items={faqItems.slice(0, 3)} id="faqlist1" />
            </div>
            <div className="col-lg-6">
              {/* F.A.Q List 2*/}
              <FAQAccordion items={faqItems.slice(3)} id="faqlist2" />
            </div>
          </div>
        </div>
      </section>
      {/* End F.A.Q Section */}
    </main>
  );
};

export default SoftwareDevPage;
