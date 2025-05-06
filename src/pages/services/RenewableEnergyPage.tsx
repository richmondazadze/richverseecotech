import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, Sun, Wind, Plug, Users, BarChart2, Repeat, ThumbsUp, ChevronDown, ChevronUp, Rocket, Wrench, Lightbulb, ShieldCheck } from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import SEO from '../../components/SEO';

const subServices = [
  { title: 'Solar Energy Systems', desc: 'Harness the sun with custom solar installations.', icon: <Sun className="w-8 h-8 text-yellow-500 mb-2" /> },
  { title: 'Wind Energy Solutions', desc: 'Tap into wind power for sustainable electricity.', icon: <Wind className="w-8 h-8 text-green-500 mb-2" /> },
  { title: 'Hybrid Systems', desc: 'Combine solar, wind, and more for maximum efficiency.', icon: <Plug className="w-8 h-8 text-lime-500 mb-2" /> },
  { title: 'Inverter Installation', desc: 'Smart, reliable inverters for energy management.', icon: <Wrench className="w-8 h-8 text-blue-500 mb-2" /> },
  { title: 'Sustainability Consulting', desc: 'Expert advice for greener operations and savings.', icon: <Lightbulb className="w-8 h-8 text-amber-500 mb-2" /> },
];

const values = [
  { icon: <Leaf className="w-7 h-7 text-green-600" />, title: 'Eco-Driven', desc: "We're passionate about sustainability and the planet." },
  { icon: <BarChart2 className="w-7 h-7 text-yellow-500" />, title: 'Proven ROI', desc: 'Our solutions save you money and add long-term value.' },
  { icon: <Repeat className="w-7 h-7 text-lime-500" />, title: 'Seamless Integration', desc: 'We design systems that work with your existing infrastructure.' },
  { icon: <ShieldCheck className="w-7 h-7 text-blue-500" />, title: 'Reliable Support', desc: "We're with you from consultation to ongoing maintenance." },
];

const process = [
  { step: 'Consultation', icon: <Users className="w-6 h-6 text-white" />, desc: 'We assess your needs and site for the best solution.' },
  { step: 'Design', icon: <Lightbulb className="w-6 h-6 text-white" />, desc: 'Our engineers create a custom, efficient system.' },
  { step: 'Installation', icon: <Wrench className="w-6 h-6 text-white" />, desc: 'Certified teams install and test your new system.' },
  { step: 'Optimization', icon: <BarChart2 className="w-6 h-6 text-white" />, desc: 'We fine-tune for maximum performance and savings.' },
  { step: 'Support', icon: <ShieldCheck className="w-6 h-6 text-white" />, desc: 'Ongoing monitoring, maintenance, and upgrades.' },
];

const faqs = [
  {
    question: 'What types of properties do you serve?',
    answer: (
      <>
        We work with:
        <ul className="list-disc list-inside mt-2 text-green-700">
          <li>Homes</li>
          <li>Businesses</li>
          <li>Communities of all sizes</li>
        </ul>
      </>
    ),
  },
  {
    question: 'How long does installation take?',
    answer: 'Most projects are completed in 2–8 weeks, depending on scope.',
  },
  {
    question: 'Do you offer financing?',
    answer: (
      <>
        Yes, we have flexible financing and leasing options. <br />
        <a href="/contact" className="text-green-600 underline hover:text-green-800">Learn more about financing</a>.
      </>
    ),
  },
  {
    question: 'What about maintenance?',
    answer: 'We provide ongoing support and maintenance for all systems.',
  },
];

export default function RenewableEnergyPage() {
  const navigate = useNavigate();
  console.log('Current path:', location.pathname);
  console.log('Header location:', location.pathname);

  return (
    <>
      <SEO 
        title="Renewable Energy Services | RichverseEcoTech"
        description="Sustainable renewable energy solutions for your business. Solar, wind, hybrid systems, and consulting for a greener future."
        url="https://richverseecotech.com/services/renewable-energy"
      />
      <main className="min-h-screen font-sans bg-white relative overflow-hidden pt-[80px] sm:pt-[80px]">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-yellow-100 via-lime-100 to-green-100 text-center px-4 flex flex-col items-center justify-center relative overflow-hidden">
          {/* Floating Elements */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-green-500/10 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center relative z-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-green-500/20 to-lime-500/20 blur-xl"
            />
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Leaf className="w-16 h-16 text-green-600 mb-4 animate-bounce" />
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-green-900 mb-4 drop-shadow-lg leading-tight">Renewable Energy Solutions</h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-base sm:text-lg md:text-2xl text-green-800 max-w-2xl mx-auto mb-8 font-light">Power your future with clean, sustainable energy systems designed for you.</motion.p>
            <button
              onClick={() => navigate('/contact')}
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-green-600 via-lime-500 to-yellow-500 text-white font-bold text-lg shadow-xl hover:from-green-700 hover:to-yellow-600 hover:scale-105 transition-all duration-300 z-10 relative"
            >
              Get Started
            </button>
          </motion.div>
        </section>
        {/* Signature Offerings */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-900 mb-4">Our Expertise</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore our core renewable energy services.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
              {subServices.map((s, i) => (
                <motion.div key={s.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: i * 0.1 }} whileHover={{ scale: 1.05 }} className="bg-lime-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
                  {s.icon}
                  <h3 className="text-xl font-bold text-green-900 mb-2">{s.title}</h3>
                  <p className="text-gray-700 text-base">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Why Choose Us */}
        <section className="py-16 bg-lime-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-900 mb-4">Why Choose Us?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We make clean energy simple, affordable, and reliable.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <motion.div key={v.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: i * 0.1 }} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center">
                  {v.icon}
                  <h3 className="text-lg font-bold text-green-900 mt-2 mb-1">{v.title}</h3>
                  <p className="text-gray-700 text-sm">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Process Timeline */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-900 mb-4">Our Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From consultation to support, we're with you every step.</p>
            </div>
            <ol className="flex flex-col md:flex-row items-center justify-center gap-8">
              {process.map((step, idx) => (
                <motion.li key={step.step} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: idx * 0.1 }} className="flex flex-col items-center text-center max-w-xs">
                  <span className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-xl mb-2">
                    {step.icon}
                  </span>
                  <span className="font-semibold text-green-900 mt-1 mb-1">{step.step}</span>
                  <span className="text-gray-700 text-sm font-light">{step.desc}</span>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>
        {/* FAQ */}
        <section className="py-16 bg-white/90 backdrop-blur-xl">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: 'spring', duration: 0.8, delay: 0.1 }} viewport={{ once: true }} className="container mx-auto px-4 max-w-2xl rounded-2xl border border-green-100/60 shadow-green-100/30 shadow-lg p-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-green-900 mb-4 drop-shadow">Frequently Asked Questions</h2>
            </div>
            <FAQAccordion items={faqs} color="green" />
          </motion.div>
        </section>
        {/* CTA Footer */}
        <section className="py-12 bg-gradient-to-r from-green-600 via-lime-500 to-yellow-500 text-white text-center px-4">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">Ready to power your future?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg mb-8 max-w-2xl mx-auto">Let's make your energy clean, reliable, and affordable. Contact RichverseEcoTech for a free consultation.</motion.p>
          <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-white text-green-700 font-bold text-lg shadow-xl hover:bg-green-100 hover:text-green-900 transition-all duration-300">Contact Us</Link>
        </section>
      </main>
    </>
  );
} 