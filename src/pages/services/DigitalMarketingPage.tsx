import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Megaphone, TrendingUp, Mail, Users, BarChart2, Repeat, ThumbsUp, ChevronDown, ChevronUp, Palette, Rocket, ShieldCheck } from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import SEO from '../../components/SEO';

const subServices = [
  { title: 'SEO & SEM', desc: 'Boost your visibility and rank higher on search engines.', icon: <TrendingUp className="w-8 h-8 text-orange-500 mb-2" /> },
  { title: 'Social Media Marketing', desc: 'Engage your audience across all major platforms.', icon: <Users className="w-8 h-8 text-pink-500 mb-2" /> },
  { title: 'Email Campaigns', desc: 'Convert leads with targeted, automated email marketing.', icon: <Mail className="w-8 h-8 text-blue-500 mb-2" /> },
  { title: 'Content Creation', desc: 'Compelling blogs, videos, and graphics that drive action.', icon: <Palette className="w-8 h-8 text-indigo-500 mb-2" /> },
  { title: 'Marketing Automation', desc: 'Streamline and scale your campaigns with smart automation.', icon: <Repeat className="w-8 h-8 text-green-500 mb-2" /> },
];

const values = [
  { icon: <BarChart2 className="w-7 h-7 text-orange-500" />, title: 'Data-Driven', desc: 'We use analytics to maximize ROI and inform every decision.' },
  { icon: <ThumbsUp className="w-7 h-7 text-pink-500" />, title: 'Creative Campaigns', desc: 'Stand out with bold, memorable marketing.' },
  { icon: <Rocket className="w-7 h-7 text-blue-500" />, title: 'Omnichannel Reach', desc: 'Connect with your audience everywhere they are.' },
  { icon: <ShieldCheck className="w-7 h-7 text-green-500" />, title: 'Brand Safety', desc: 'Your reputation is protected at every step.' },
];

const process = [
  { step: 'Strategy', icon: <BarChart2 className="w-6 h-6 text-white" />, desc: 'We analyze your market and craft a custom marketing plan.' },
  { step: 'Campaigns', icon: <Megaphone className="w-6 h-6 text-white" />, desc: 'We launch creative, targeted campaigns across all channels.' },
  { step: 'Optimization', icon: <TrendingUp className="w-6 h-6 text-white" />, desc: 'We monitor, test, and refine for maximum impact.' },
  { step: 'Reporting', icon: <BarChart2 className="w-6 h-6 text-white" />, desc: 'Transparent analytics and insights keep you in the loop.' },
  { step: 'Growth', icon: <Rocket className="w-6 h-6 text-white" />, desc: 'We scale what works to accelerate your business growth.' },
];

const faqs = [
  {
    question: 'Which platforms do you support?',
    answer: (
      <>
        We manage campaigns on all major platforms:
        <ul className="list-disc list-inside mt-2 text-orange-700">
          <li>Google</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
          <li>And more</li>
        </ul>
      </>
    ),
  },
  {
    question: 'How do you measure success?',
    answer: (
      <>
        We track KPIs like traffic, conversions, and ROI, and provide regular reports. <br />
        <a href="/contact" className="text-orange-600 underline hover:text-orange-800">Request a sample report</a>.
      </>
    ),
  },
  {
    question: 'Can you create content for us?',
    answer: 'Yes! Our team produces blogs, videos, graphics, and more.',
  },
  {
    question: 'Is there a minimum contract?',
    answer: 'We offer flexible plans to fit your needs and budget.',
  },
];

export default function DigitalMarketingPage() {
  const navigate = useNavigate();

  return (
    <>
      <SEO 
        title="Digital Marketing Services | RichverseEcoTech"
        description="Strategic digital marketing services to boost your online presence and reach. SEO, SEM, social media, and more for business growth."
        url="https://richverseecotech.com/services/digital-marketing"
      />
      <main className="min-h-screen font-sans bg-white relative overflow-hidden pt-[80px] sm:pt-[80px]">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-orange-100 via-orange-200 to-yellow-100 text-center px-4 flex flex-col items-center justify-center relative overflow-hidden">
          {/* Floating Elements */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-orange-500/10 rounded-full"
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
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-500/20 blur-xl"
            />
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Megaphone className="w-16 h-16 text-orange-500 mb-4 drop-shadow-lg" />
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-orange-900 mb-4 drop-shadow-lg leading-tight">
              Digital Marketing Services
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.2 }} 
              className="text-base sm:text-lg md:text-2xl text-orange-800 max-w-2xl mx-auto mb-8 font-light"
            >
              Elevate your brand's digital presence. Our data-driven strategies and creative campaigns help you reach, engage, and convert your target audience.
            </motion.p>
            <button
              onClick={() => navigate('/contact')}
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 via-pink-400 to-yellow-400 text-white font-bold text-lg shadow-xl hover:from-orange-600 hover:via-pink-500 hover:to-yellow-500 hover:scale-105 transition-all duration-300 z-10 relative"
            >
              Get Started
            </button>
          </motion.div>
        </section>
        {/* Signature Offerings */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-orange-900 mb-4">Our Expertise</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore our core digital marketing services.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
              {subServices.map((s, i) => (
                <motion.div 
                  key={s.title} 
                  initial={{ opacity: 0, y: 40 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.7, delay: i * 0.1 }} 
                  whileHover={{ scale: 1.05 }} 
                  className="bg-orange-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center"
                >
                  {s.icon}
                  <h3 className="text-xl font-bold text-orange-900 mb-2">{s.title}</h3>
                  <p className="text-gray-700 text-base">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Why Choose Us */}
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-orange-900 mb-4">Why Choose Us?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We blend creativity, data, and technology for marketing that works.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <motion.div key={v.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: i * 0.1 }} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center">
                  {v.icon}
                  <h3 className="text-lg font-bold text-orange-900 mt-2 mb-1">{v.title}</h3>
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
              <h2 className="text-3xl font-bold text-orange-900 mb-4">Our Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From strategy to growth, we're with you every step.</p>
            </div>
            <ol className="flex flex-col md:flex-row items-center justify-center gap-8">
              {process.map((step, idx) => (
                <motion.li key={step.step} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: idx * 0.1 }} className="flex flex-col items-center text-center max-w-xs">
                  <span className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xl mb-2">
                    {step.icon}
                  </span>
                  <span className="font-semibold text-orange-900 mt-1 mb-1">{step.step}</span>
                  <span className="text-gray-700 text-sm font-light">{step.desc}</span>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>
        {/* FAQ */}
        <section className="py-16 bg-white/90 backdrop-blur-xl">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: 'spring', duration: 0.8, delay: 0.1 }} viewport={{ once: true }} className="container mx-auto px-4 max-w-2xl rounded-2xl border border-orange-100/60 shadow-orange-100/30 shadow-lg p-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-orange-900 mb-4 drop-shadow">Frequently Asked Questions</h2>
            </div>
            <FAQAccordion items={faqs} color="orange" />
          </motion.div>
        </section>
        {/* CTA Footer */}
        <section className="py-12 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-center px-4">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">Ready to grow your business?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg mb-8 max-w-2xl mx-auto">Let's take your marketing to the next level. Get in touch for a free strategy session.</motion.p>
          <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-white text-orange-500 font-bold text-lg shadow-xl hover:bg-orange-50 transition-all duration-300">Contact Us</Link>
        </section>
      </main>
    </>
  );
} 