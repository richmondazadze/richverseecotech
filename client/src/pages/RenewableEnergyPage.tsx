import { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import ServiceBox from '../components/services/ServiceBox';
import FAQAccordion from '../components/FAQAccordion';

const RenewableEnergyPage = () => {
  useEffect(() => {
    // Initialize or refresh AOS animations
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  const faqItems = [
    {
      question: "What renewable energy solutions do you offer?",
      answer: "We offer solar energy systems, wind turbines, biomass energy solutions, and hybrid renewable energy projects tailored to meet your energy needs sustainably."
    },
    {
      question: "How can renewable energy benefit my business?",
      answer: "Renewable energy can reduce your dependence on fossil fuels, lower energy costs, enhance your sustainability credentials, and contribute to a cleaner environment."
    },
    {
      question: "What is the typical return on investment for solar panels?",
      answer: "The ROI for solar panels typically ranges from 7-12 years depending on your location, energy consumption, and available incentives. Many clients see savings on their electricity bills immediately."
    },
    {
      question: "Do you provide maintenance services for installed systems?",
      answer: "Yes, we offer comprehensive maintenance packages for all renewable energy systems we install. Our team conducts regular inspections, cleaning, and performance optimizations to ensure maximum efficiency."
    },
    {
      question: "Are there government incentives available for renewable energy installations?",
      answer: "Yes, many regions offer tax credits, rebates, grants, and other incentives for renewable energy installations. Our team can help identify which incentives are available for your specific project and location."
    }
  ];

  return (
    <main id="main">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Renewable Energy Solutions' }
        ]}
      />

      {/* Hero Section */}
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="50">
              <img src="/assets/img/renergy.png" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                Renewable Energy Solutions
              </h1>
              <h2 data-aos="fade-up" data-aos-delay="150">
                Empowering a sustainable future with renewable energy solutions. Harness the potential of clean energy sources
                <em>
                  <strong>to drive efficiency and environmental conservation.</strong>
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

      {/* Renewable Energy Section */}
      <section id="renergy" className="renergy">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Our Renewable Energy Services</h2>
            </div>
            <section id="services" className="services">
              <div className="container" data-aos="fade-up">
                <div className="row gy-4">
                  <div className="col-lg-3 col-md-3" data-aos="fade-up" data-aos-delay="200">
                    <ServiceBox
                      title="Solar Energy Systems"
                      description="Implement solar energy solutions to harness sunlight for sustainable power generation."
                      icon="bi bi-cloud-sun"
                      color="green"
                    />
                  </div>

                  <div className="col-lg-3 col-md-3" data-aos="fade-up" data-aos-delay="200">
                    <ServiceBox
                      title="Wind Energy Solutions"
                      description="Harness the power of wind to generate clean and renewable electricity."
                      icon="bi bi-wind"
                      color="green"
                    />
                  </div>

                  <div className="col-lg-3 col-md-3" data-aos="fade-up" data-aos-delay="200">
                    <ServiceBox
                      title="Biomass Energy Solutions"
                      description="Explore biomass energy options to convert organic waste into renewable energy sources."
                      icon="bi bi-recycle"
                      color="green"
                    />
                  </div>

                  <div className="col-lg-3 col-md-3" data-aos="fade-up" data-aos-delay="200">
                    <ServiceBox
                      title="Inverter Installation"
                      description="Efficiently install inverters to convert renewable energy into usable electricity."
                      icon="bi bi-lightning"
                      color="green"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Additional Mini-Sections */}
            <div className="row mt-4">
              <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
                <h2 className="text-center">
                  Embrace sustainability with our renewable energy solutions. We harness nature's power to provide clean, reliable energy while reducing your carbon footprint
                </h2>
              </div>
            </div>
            <div className="container">
              <div className="row mt-5">
                <div className="col-lg-12 text-center" data-aos="fade-up" data-aos-delay="200">
                  <h1 className="section-title">Why Choose Us for Renewable Energy Solutions?</h1>
                  <ul className="list-unstyled d-flex flex-column align-items-center">
                    <div className="d-flex align-items-center justify-content-center" style={{ width: '100%', textAlign: 'left' }}><br />
                    ✔️ Dedicated to sustainability and reducing carbon footprint<br /><br />
                    ✔️ Expertise in designing and implementing renewable energy systems<br /><br />
                    ✔️ Tailored solutions to meet specific energy needs and budget requirements<br /><br />
                    ✔️ Commitment to quality, reliability, and long-term performance<br /><br />
                    ✔️ Comprehensive support from planning to installation and maintenance
                    </div>
                  </ul>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-lg-12 text-center" data-aos="fade-up" data-aos-delay="300">
                  <h1 className="section-title">Our Renewable Energy Process</h1>
                  <p className="text-muted">
                    <div className="d-flex align-items-center justify-content-center" style={{ width: '100%', textAlign: 'left' }}>
                      1. Initial Consultation and Assessment<br /><br />
                      2. System Design and Engineering<br /><br />
                      3. Installation and Testing<br /><br />
                      4. Commissioning and Integration<br /><br />
                      5. Ongoing Monitoring and Maintenance
                    </div>
                  </p>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-lg-12 text-center" data-aos="fade-up" data-aos-delay="400">
                  <h1 className="section-title">Client Success Stories</h1>
                  <p className="text-muted">
                    <div className="d-flex align-items-center justify-content-center" style={{ width: '100%', textAlign: 'left' }}>
                      - Installed solar energy system, reducing electricity costs by 40% annually<br /><br />
                      - Implemented wind turbine project, providing clean energy to local communities<br /><br />
                      - Integrated biomass energy solution, achieving carbon neutrality goals<br /><br />
                      - Executed hybrid renewable energy project, ensuring uninterrupted power supply
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
            <p>Find answers to common questions<br /> about our renewable energy services.</p>
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

export default RenewableEnergyPage;
