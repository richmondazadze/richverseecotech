import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, Megaphone, ShieldCheck, Leaf, CheckCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const mainServices = [
  {
    name: 'Web & Mobile App Development',
    headline: 'Build. Launch. Scale.',
    desc: 'Transform your ideas into high-impact digital products. We deliver robust, scalable, and beautiful web and mobile apps that drive business growth and delight users.',
    icon: <Code2 className="w-12 h-12 text-blue-600 group-hover:animate-bounce" />,
    to: '/services/web-development',
    features: [
      'Custom Web Apps',
      'Mobile Apps (iOS & Android)',
      'UI/UX Design',
      'API & Backend Systems',
      'Ongoing Support',
    ],
  },
  {
    name: 'Digital Marketing Suite',
    headline: 'Reach. Engage. Convert.',
    desc: "Accelerate your brand's growth with data-driven marketing. We help you attract, engage, and convert your ideal customers across every digital channel.",
    icon: <Megaphone className="w-12 h-12 text-orange-500 group-hover:animate-pulse" />,
    to: '/services/digital-marketing',
    features: [
      'SEO & SEM',
      'Social Media Campaigns',
      'Email Marketing',
      'Content Creation',
      'Marketing Automation',
    ],
  },
  {
    name: 'Cybersecurity Solutions',
    headline: 'Secure. Defend. Comply.',
    desc: 'Safeguard your business with enterprise-grade security. We protect your data, systems, and reputation with proactive, end-to-end cybersecurity services.',
    icon: <ShieldCheck className="w-12 h-12 text-purple-600 group-hover:animate-spin-slow" />,
    to: '/services/cybersecurity',
    features: [
      'Risk Assessments',
      'Penetration Testing',
      'Managed Security',
      'Compliance & Audits',
      'Employee Training',
    ],
  },
  {
    name: 'Renewable Energy Solutions',
    headline: 'Power. Sustain. Thrive.',
    desc: 'Lead the way to a greener future. We design and implement renewable energy systems that cut costs, reduce emissions, and power sustainable growth.',
    icon: <Leaf className="w-12 h-12 text-green-600 group-hover:animate-wiggle" />,
    to: '/services/renewable-energy',
    features: [
      'Solar & Wind Systems',
      'Hybrid Energy Solutions',
      'Sustainability Consulting',
      'Smart Inverter Installations',
      'Energy Audits',
    ],
  },
];

// Custom keyframes for unique icon animations
const customStyles = `
@keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
.animate-spin-slow { animation: spin-slow 2.5s linear infinite; }
@keyframes wiggle { 0%, 100% { transform: rotate(-6deg); } 50% { transform: rotate(6deg); } }
.animate-wiggle { animation: wiggle 1.2s ease-in-out infinite; }
`;

export default function ServicesPage() {
  return (
    <>
      <SEO 
        title="Services | RichverseEcoTech"
        description="Explore our full suite of services: web & mobile app development, digital marketing, cybersecurity, and renewable energy solutions."
        url="https://richverseecotech.com/services"
      />
      <main className="min-h-screen font-sans bg-white relative overflow-hidden pt-[80px] sm:pt-[80px]">
        <style>{customStyles}</style>
        {/* Animated Hero */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-400 text-center px-4 overflow-hidden flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-blue-900 mb-4 drop-shadow-lg leading-tight">Our Services</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-base sm:text-lg md:text-2xl text-blue-800 max-w-2xl mx-auto mb-8 font-light"
          >
            Discover how RichverseEcoTech empowers your business with world-class technology, marketing, security, and sustainability solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Link to="/contact" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 text-white font-bold text-lg shadow-xl hover:from-blue-700 hover:to-indigo-600 hover:scale-105 transition-all duration-300">
              Get Started Today
            </Link>
          </motion.div>
          {/* Subtle animated background shapes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.12, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute left-1/2 top-0 -translate-x-1/2 -z-10"
          >
            <svg width="420" height="180" viewBox="0 0 420 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="210" cy="90" rx="200" ry="80" fill="#3b82f6" />
            </svg>
          </motion.div>
        </section>
        {/* Main Services Grid */}
        <section className="py-16 bg-white relative">
          {/* Decorative blurred shapes */}
          <div className="absolute -top-16 -left-16 w-40 h-40 bg-blue-200 rounded-full blur-2xl opacity-20 z-0" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-100 rounded-full blur-2xl opacity-10 z-0" />
          <div className="container mx-auto px-2 sm:px-4 relative z-10">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.13 } },
              }}
            >
              {mainServices.map((service) => (
                <motion.div
                  key={service.name}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(59,130,246,0.10)', borderColor: '#2563eb' }}
                  className={
                    'group h-full bg-white border-2 border-blue-100 shadow-md rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 cursor-pointer min-h-[420px] relative overflow-hidden hover:border-blue-400'
                  }
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-3xl pointer-events-none group-hover:shadow-[0_0_32px_6px_rgba(37,99,235,0.08)] transition-all duration-300" />
                  <div className="mb-4 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-1 tracking-tight uppercase opacity-80">{service.name}</h3>
                  <div className="text-base font-semibold text-blue-800 mb-2">{service.headline}</div>
                  <p className="text-gray-700 text-sm mb-4 font-light">{service.desc}</p>
                  <ul className="text-sm text-blue-900/90 mb-4 space-y-2 text-left w-full max-w-xs mx-auto">
                    {service.features.map(f => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.to}
                    className="mt-auto inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-sm shadow hover:bg-blue-100 hover:text-blue-900 transition-all duration-300 group-hover:scale-105"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 text-white text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4"
          >
            Ready to transform your business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            Partner with RichverseEcoTech for innovative, sustainable, and secure digital solutions tailored to your needs.
          </motion.p>
          <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-white text-blue-700 font-bold text-lg shadow-xl hover:bg-blue-100 hover:text-blue-900 transition-all duration-300">
            Contact Us
          </Link>
        </section>
      </main>
    </>
  );
}
