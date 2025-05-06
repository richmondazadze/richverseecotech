import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import FAQAccordion from '../components/FAQAccordion';
import { Section } from "../components/ui/Section";
import { CountUpValue } from "../components/ui/CountUpValue";
import SEO from '../components/SEO';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

interface TimelineEvent {
  year: string;
  event: string;
}

interface ImpactStatProps {
  value: number | string;
  label: string;
  sublabel: string;
  delay?: number;
}

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const team: TeamMember[] = [
  {
    name: "Richmond Azadze",
    role: "Founder & Chief Executive Officer",
    bio: "Guiding RichverseEcoTech's mission to accelerate sustainable growth through advanced digital innovation, while shaping a smarter, greener future.",
    avatar: "https://source.boringavatars.com/beam/120/Richmond?colors=2563eb,3b82f6,60a5fa,93c5fd,bfdbfe"
  },
  {
    name: "Raphael Asomani",
    role: "Chief Technology Officer",
    bio: "Driving the development of eco-driven platforms by integrating scalable cloud solutions, AI technologies, and sustainable tech architectures.",
    avatar: "https://source.boringavatars.com/beam/120/Raphael?colors=2563eb,3b82f6,60a5fa,93c5fd,bfdbfe"
  },
  {
    name: "Bernard Blay",
    role: "Head of Cybersecurity",
    bio: "Ensuring the security, privacy, and resilience of all digital ecosystems built by RichverseEcoTech, protecting innovation while empowering sustainable digital trust.",
    avatar: "https://source.boringavatars.com/beam/120/Bernard?colors=2563eb,3b82f6,60a5fa,93c5fd,bfdbfe"
  },
  {
    name: "Emmanuel Donkor",
    role: "Head of Business Development",
    bio: "Expanding strategic alliances, building lasting partnerships, and unlocking new growth opportunities to deliver RichverseEcoTech's impact to businesses globally.",
    avatar: "https://source.boringavatars.com/beam/120/Emmanuel?colors=2563eb,3b82f6,60a5fa,93c5fd,bfdbfe"
  }
];

const timeline: TimelineEvent[] = [
  { year: "2018", event: "RichverseEcoTech founded with a vision for sustainable digital innovation." },
  { year: "2019", event: "Launched our first AI-powered analytics platform." },
  { year: "応20", event: "Expanded services to include cybersecurity and renewable energy solutions." },
  { year: "2021", event: "Recognized as a top tech innovator in Africa." },
  { year: "2022", event: "Helped 100+ businesses achieve digital transformation." },
  { year: "2023", event: "Awarded for excellence in sustainable technology solutions." },
];

const ImpactStat: React.FC<ImpactStatProps> = ({ value, label, sublabel, delay = 0 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = typeof value === 'number' ? value : parseInt(value.toString().replace(/\D/g, ''));
    if (start === end) return;
    
    let incrementTime = 20;
    let current = start;
    const increment = Math.ceil(end / 50);
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div 
      whileHover={{ scale: 1.04 }} 
      className="bg-blue-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center animate-fade-in-up"
    >
      <span className="text-4xl font-extrabold text-blue-700 mb-2">
        {typeof value === 'string' && value.includes('+') ? `${count}+` : count}
      </span>
      <span className="text-lg text-blue-900 font-semibold mb-1">{label}</span>
      <span className="text-gray-600 text-sm">{sublabel}</span>
    </motion.div>
  );
};

const aboutFaqs: FAQItem[] = [
  {
    question: 'What makes RichverseEcoTech unique?',
    answer: (
      <>
        Our unique blend of innovation and sustainability sets us apart. We focus on:
        <ul className="list-disc list-inside mt-2 text-blue-700">
          <li>Eco-friendly digital solutions</li>
          <li>Cutting-edge technology</li>
          <li>Client-centric approach</li>
        </ul>
      </>
    ),
  },
  {
    question: 'How can I partner with RichverseEcoTech?',
    answer: (
      <>
        We welcome partnerships! <Link to="/contact" className="text-blue-600 underline hover:text-blue-800">Contact us</Link> to discuss collaboration opportunities.
      </>
    ),
  },
  {
    question: 'Where are you located?',
    answer: 'We have offices in Austin, United States and Accra, Ghana, serving clients globally.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including tech, finance, healthcare, and more.',
  },
];

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="About RichverseEcoTech"
        description="Learn about RichverseEcoTech's mission, vision, values, and leadership team. Discover how we drive sustainable digital innovation."
        url="https://richverseecotech.com/about"
      />
      <h1 className="sr-only">About RichverseEcoTech</h1>
      <main className="min-h-screen font-sans bg-white relative overflow-hidden pt-[80px] sm:pt-[60px]">
        {/* Hero Section */}
        <section className="relative py-12 md:py-24 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-400 flex flex-col items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-blue-900 mb-4 drop-shadow-lg leading-tight"
          >
            About RichverseEcoTech
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-base sm:text-lg md:text-2xl text-blue-800 max-w-2xl mx-auto mb-8 font-light"
          >
            We combine innovation and sustainability to transform the digital world. Empowering businesses for a sustainable future.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mt-4"
          >
            <Link to="/contact" className="px-6 py-2 md:px-8 md:py-3 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 text-white font-bold text-base md:text-lg shadow-xl hover:from-blue-700 hover:to-indigo-600 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300/40 border-0">
              Get in Touch
            </Link>
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col md:flex-row gap-8 w-full"
            >
              {/* Mission Card */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="flex-1 bg-blue-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-blue-500 animate-fade-in-up"
              >
                <div className="mb-4">
                  <svg className="w-10 h-10 text-blue-500 mx-auto" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Our Mission</h3>
                <p className="text-lg text-gray-700">To empower organizations with innovative, sustainable, and secure digital solutions that drive growth and positive impact.</p>
              </motion.div>
              {/* Vision Card */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="flex-1 bg-blue-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-indigo-500 animate-fade-in-up"
              >
                <div className="mb-4">
                  <svg className="w-10 h-10 text-indigo-500 mx-auto" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Our Vision</h3>
                <p className="text-lg text-gray-700">To be a global leader in technology, setting the standard for excellence in digital transformation and eco-friendly innovation.</p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-md mx-auto flex items-center justify-center"
            >
              {/* Animated SVG: Growing Plant with Digital Leaves */}
              <svg width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                <circle cx="130" cy="130" r="120" fill="#e0f2fe" />
                <g>
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    d="M130 200 Q130 150 130 100"
                    stroke="#2563eb"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <motion.ellipse
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    cx="130" cy="90" rx="22" ry="12" fill="#38bdf8" />
                  <motion.ellipse
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7, delay: 1 }}
                    cx="110" cy="120" rx="12" ry="7" fill="#22d3ee" />
                  <motion.ellipse
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7, delay: 1.2 }}
                    cx="150" cy="120" rx="12" ry="7" fill="#22d3ee" />
                  <motion.circle
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7, delay: 1.4 }}
                    cx="130" cy="70" r="6" fill="#2563eb" />
                </g>
                {/* Digital sparkles */}
                <motion.circle initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} cx="160" cy="60" r="3" fill="#fbbf24" />
                <motion.circle initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} cx="100" cy="60" r="2.5" fill="#fbbf24" />
                <motion.circle initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }} cx="130" cy="40" r="2" fill="#fbbf24" />
              </svg>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <Section variant="muted" color="blue">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">OUR VALUES</span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-4 mb-6">
              Guiding Principles for Digital Success
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Technological Ingenuity */}
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <img 
                  src="/assets/img/values/tech-ingenuity.svg" 
                  alt="Technological Ingenuity" 
                  loading="lazy"
                  className="w-48 h-48 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                Technological Ingenuity
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                We innovate with technology, driving solutions that break barriers and redefine possibilities.
              </p>
            </motion.div>

            {/* Digital Leadership */}
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <img 
                  src="/assets/img/values/digital-leadership.svg" 
                  alt="Digital Leadership" 
                  loading="lazy"
                  className="w-48 h-48 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                Digital Leadership
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                We lead the way in digital excellence, guiding businesses to success in the ever-evolving digital landscape.
              </p>
            </motion.div>

            {/* Client-Centric Innovation */}
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <img 
                  src="/assets/img/values/client-centric.svg" 
                  alt="Client-Centric Innovation" 
                  loading="lazy"
                  className="w-48 h-48 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                Client-Centric Innovation
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                We prioritize our clients, crafting bespoke solutions that exceed expectations and drive results.
              </p>
            </motion.div>
          </div>
        </Section>

        {/* Impact & Partnerships Section */}
        <Section variant="default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm block mb-2">Our Impact</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Impact & Partnerships</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We measure our success by the positive impact we create and the strong partnerships we build worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.4
              }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 via-blue-50/50 to-white backdrop-blur-sm rounded-2xl p-8 shadow-lg transition-all duration-300 relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-blue-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-center relative z-10">
                <CountUpValue 
                  end={100} 
                  suffix="+" 
                  color="text-blue-600"
                  size="4xl"
                  enableScrollSpeedVariation
                  highlightOnHover
                  tooltip="Over 100 businesses have transformed their digital presence with us"
                />
                <h3 className="text-xl font-semibold text-blue-900 mb-2 mt-1 group-hover:text-blue-700 transition-colors">
                  Businesses Transformed
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                  Empowering organizations with digital innovation
                </p>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileHover={{ opacity: 1, height: "auto" }}
                  className="mt-4 overflow-hidden"
                >
                  <div className="text-blue-600 text-xs font-medium">
                    Click to learn more about our success stories
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.4,
                delay: 0.1
              }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 via-blue-50/50 to-white backdrop-blur-sm rounded-2xl p-8 shadow-lg transition-all duration-300 relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-blue-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-center relative z-10">
                <CountUpValue 
                  end={15} 
                  color="text-blue-600"
                  size="4xl"
                  enableScrollSpeedVariation
                  highlightOnHover
                  tooltip="Serving clients across 15 countries worldwide"
                />
                <h3 className="text-xl font-semibold text-blue-900 mb-2 mt-1 group-hover:text-blue-700 transition-colors">
                  Countries Reached
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                  Delivering solutions across the globe
                </p>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileHover={{ opacity: 1, height: "auto" }}
                  className="mt-4 overflow-hidden"
                >
                  <div className="text-blue-600 text-xs font-medium">
                    View our global presence
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.4,
                delay: 0.2
              }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 via-blue-50/50 to-white backdrop-blur-sm rounded-2xl p-8 shadow-lg transition-all duration-300 relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-blue-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-center relative z-10">
                <CountUpValue 
                  end={30} 
                  color="text-blue-600"
                  size="4xl"
                  enableScrollSpeedVariation
                  highlightOnHover
                  tooltip="Recognized with 30 industry awards for excellence"
                />
                <h3 className="text-xl font-semibold text-blue-900 mb-2 mt-1 group-hover:text-blue-700 transition-colors">
                  Awards & Recognitions
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                  Honored for excellence in tech & sustainability
                </p>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileHover={{ opacity: 1, height: "auto" }}
                  className="mt-4 overflow-hidden"
                >
                  <div className="text-blue-600 text-xs font-medium">
                    See our achievements
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.4,
                delay: 0.3
              }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 via-blue-50/50 to-white backdrop-blur-sm rounded-2xl p-8 shadow-lg transition-all duration-300 relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-blue-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-center relative z-10">
                <CountUpValue 
                  end={50000} 
                  color="text-blue-600"
                  size="4xl"
                  duration={2.5}
                  enableScrollSpeedVariation
                  highlightOnHover
                  tooltip="Making a difference in the lives of over 50,000 end users"
                />
                <h3 className="text-xl font-semibold text-blue-900 mb-2 mt-1 group-hover:text-blue-700 transition-colors">
                  End Users Impacted
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                  Driving real change for people & planet
                </p>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileHover={{ opacity: 1, height: "auto" }}
                  className="mt-4 overflow-hidden"
                >
                  <div className="text-blue-600 text-xs font-medium">
                    Discover our impact stories
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Partnership Showcase */}
        <Section variant="default" className="overflow-hidden bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-blue-50/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm block mb-2">Strategic Partners</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Global Technology Partners</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Collaborating with industry leaders to drive innovation and sustainable solutions.
            </p>
          </motion.div>

          {/* Decorative top border */}
          <div className="w-full flex justify-center mb-8">
            <div className="w-full max-w-4xl relative">
              <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-8 h-8">
                <div className="w-full h-full rounded-full bg-white border-2 border-blue-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Infinite Scroll Partnership Track */}
          <div className="relative w-full py-12">
            {/* Enhanced Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-[200px] bg-gradient-to-r from-white via-transparent to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-[200px] bg-gradient-to-l from-white via-transparent to-transparent z-10" />

            {/* Main Track */}
            <div className="flex overflow-hidden relative">
              <motion.div
                animate={{
                  x: ["0%", "-50%"]
                }}
                transition={{
                  x: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
                className="flex gap-16 whitespace-nowrap"
              >
                {/* First set of partner cards */}
                <div className="flex gap-16">
                  {[
                    {
                      name: "AWS",
                      logo: "/assets/partnership/aws.svg",
                      type: "Cloud Infrastructure",
                      description: "Leading cloud computing platform"
                    },
                    {
                      name: "Google Cloud",
                      logo: "/assets/partnership/google-cloud.svg",
                      type: "AI & Cloud Solutions",
                      description: "AI-powered cloud infrastructure"
                    },
                    {
                      name: "Microsoft Azure",
                      logo: "/assets/partnership/azure.svg",
                      type: "Enterprise Cloud",
                      description: "Enterprise cloud solutions"
                    },
                    {
                      name: "Stripe",
                      logo: "/assets/partnership/stripe.svg",
                      type: "Payment Solutions",
                      description: "Global payment processing platform"
                    },
                    {
                      name: "Paystack",
                      logo: "/assets/partnership/paystack.svg",
                      type: "Payment Gateway",
                      description: "African payment solutions provider"
                    },
                    {
                      name: "Supabase",
                      logo: "/assets/partnership/supabase.svg",
                      type: "Database Solutions",
                      description: "Open-source database platform"
                    },
                    {
                      name: "OpenAI",
                      logo: "/assets/partnership/openai.svg",
                      type: "AI Technology",
                      description: "Advanced AI solution provider"
                    },
                    {
                      name: "Vercel",
                      logo: "/assets/partnership/vercel.svg",
                      type: "Deployment Platform",
                      description: "Modern deployment platform"
                    }
                  ].map((partner, index) => (
                    <motion.div
                      key={`original-${index}`}
                      whileHover={{ 
                        scale: 1.02,
                        y: -5,
                        transition: {
                          duration: 0.2,
                          ease: "easeOut"
                        }
                      }}
                      className="relative group"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="w-80 bg-gradient-to-br from-white/80 via-white/70 to-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg transition-all duration-300 border border-white/40 relative overflow-hidden"
                      >
                        {/* Content remains the same */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-100/0 via-purple-100/10 to-blue-100/0"
                          animate={{
                            backgroundPosition: ["200% 50%", "-200% 50%"],
                          }}
                          transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                        <div className="relative flex flex-col items-center space-y-4">
                          <motion.div 
                            className="h-16 flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <img 
                              src={partner.logo} 
                              alt={partner.name + ' logo'} 
                              loading="lazy"
                              className="h-12 w-auto object-contain drop-shadow-lg"
                            />
                          </motion.div>
                          <div className="text-center w-full">
                            <motion.h3
                              className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 mb-1.5"
                              whileHover={{ scale: 1.02 }}
                            >
                              {partner.name}
                            </motion.h3>
                            <motion.p
                              className="text-blue-600 font-medium mb-2 tracking-wide text-sm"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              {partner.type}
                            </motion.p>
                            <motion.div
                              className="relative overflow-hidden"
                              whileHover={{ scale: 1.01 }}
                            >
                              <p className="text-gray-600 text-sm leading-relaxed max-w-[280px] mx-auto line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                {partner.description}
                              </p>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Duplicate set of partner cards for seamless loop */}
                <div className="flex gap-16">
                  {[
                    {
                      name: "AWS",
                      logo: "/assets/partnership/aws.svg",
                      type: "Cloud Infrastructure",
                      description: "Leading cloud computing platform"
                    },
                    {
                      name: "Google Cloud",
                      logo: "/assets/partnership/google-cloud.svg",
                      type: "AI & Cloud Solutions",
                      description: "AI-powered cloud infrastructure"
                    },
                    {
                      name: "Microsoft Azure",
                      logo: "/assets/partnership/azure.svg",
                      type: "Enterprise Cloud",
                      description: "Enterprise cloud solutions"
                    },
                    {
                      name: "Stripe",
                      logo: "/assets/partnership/stripe.svg",
                      type: "Payment Solutions",
                      description: "Global payment processing platform"
                    },
                    {
                      name: "Paystack",
                      logo: "/assets/partnership/paystack.svg",
                      type: "Payment Gateway",
                      description: "African payment solutions provider"
                    },
                    {
                      name: "Supabase",
                      logo: "/assets/partnership/supabase.svg",
                      type: "Database Solutions",
                      description: "Open-source database platform"
                    },
                    {
                      name: "OpenAI",
                      logo: "/assets/partnership/openai.svg",
                      type: "AI Technology",
                      description: "Advanced AI solution provider"
                    },
                    {
                      name: "Vercel",
                      logo: "/assets/partnership/vercel.svg",
                      type: "Deployment Platform",
                      description: "Modern deployment platform"
                    }
                  ].map((partner, index) => (
                    <motion.div
                      key={`duplicate-${index}`}
                      whileHover={{ 
                        scale: 1.02,
                        y: -5,
                        transition: {
                          duration: 0.2,
                          ease: "easeOut"
                        }
                      }}
                      className="relative group"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="w-80 bg-gradient-to-br from-white/80 via-white/70 to-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg transition-all duration-300 border border-white/40 relative overflow-hidden"
                      >
                        {/* Content remains the same */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-100/0 via-purple-100/10 to-blue-100/0"
                          animate={{
                            backgroundPosition: ["200% 50%", "-200% 50%"],
                          }}
                          transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                        <div className="relative flex flex-col items-center space-y-4">
                          <motion.div 
                            className="h-16 flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <img 
                              src={partner.logo} 
                              alt={partner.name + ' logo'} 
                              loading="lazy"
                              className="h-12 w-auto object-contain drop-shadow-lg"
                            />
                          </motion.div>
                          <div className="text-center w-full">
                            <motion.h3
                              className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 mb-1.5"
                              whileHover={{ scale: 1.02 }}
                            >
                              {partner.name}
                            </motion.h3>
                            <motion.p
                              className="text-blue-600 font-medium mb-2 tracking-wide text-sm"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              {partner.type}
                            </motion.p>
                            <motion.div
                              className="relative overflow-hidden"
                              whileHover={{ scale: 1.01 }}
                            >
                              <p className="text-gray-600 text-sm leading-relaxed max-w-[280px] mx-auto line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                {partner.description}
                              </p>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative bottom border */}
          <div className="w-full flex justify-center mt-8">
            <div className="w-full max-w-4xl relative">
              <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-8 h-8">
                <div className="w-full h-full rounded-full bg-white border-2 border-blue-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                </div>
              </div>
            </div>
          </div>

        </Section>

        {/* Team Section */}
        <section className="py-12 sm:py-20 relative overflow-hidden">
          {/* Background with subtle gradient animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/50 to-blue-50/80">
            <motion.div
              className="absolute inset-0 opacity-40"
              animate={{
                background: [
                  "radial-gradient(circle at 0% 0%, #60a5fa22 0%, transparent 50%)",
                  "radial-gradient(circle at 100% 100%, #60a5fa22 0%, transparent 50%)",
                  "radial-gradient(circle at 0% 0%, #60a5fa22 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm block mb-3">Our Leadership</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">Meet Our Team</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Passionate professionals driving innovation and excellence in technology and sustainability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {team.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="relative group h-full"
                >
                  <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden h-full">
                    {/* Animated border gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative p-6 sm:p-8 bg-white m-[2px] rounded-2xl h-full flex flex-col items-center">
                      {/* Avatar with glow effect */}
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-white">
                          <img 
                            src={member.avatar} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=2563eb&color=fff&size=200`;
                            }}
                          />
                        </div>
                      </div>

                      {/* Content with hover effects */}
                      <div className="flex flex-col items-center flex-grow">
                        <motion.h3 
                          className="text-lg sm:text-xl font-bold text-blue-900 mb-1 relative text-center"
                        >
                          {member.name}
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                        </motion.h3>

                        <p className="text-blue-600 font-medium mb-4 text-sm tracking-wide text-center">
                          {member.role}
                        </p>

                        <p className="text-gray-600 text-sm text-center leading-relaxed mb-6">
                          {member.bio}
                        </p>

                        {/* Social Links - Only show for CEO */}
                        {member.name === "Richmond Azadze" && (
                          <div className="mt-auto flex gap-4">
                            <a
                              href="https://www.linkedin.com/in/richmond-azadze/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                              </svg>
                            </a>
                            <a
                              href="https://x.com/__richhimself?s=21"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                              </svg>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white/90 backdrop-blur-xl">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: 'spring', duration: 0.8, delay: 0.1 }} viewport={{ once: true }} className="container mx-auto px-4 max-w-2xl rounded-2xl border border-blue-100/60 shadow-blue-100/30 shadow-lg p-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 drop-shadow">Frequently Asked Questions</h2>
            </div>
            <FAQAccordion items={aboutFaqs} color="blue" />
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 text-white text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-extrabold mb-4"
          >
            Ready to transform your business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg mb-8"
          >
            Partner with RichverseEcoTech for innovative, sustainable, and secure digital solutions.
          </motion.p>
          <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-white text-blue-700 font-bold text-lg shadow-xl hover:bg-blue-100 hover:text-blue-900 transition-all duration-300">
            Contact Us
          </Link>
        </section>
      </main>
    </>
  );
};

export default AboutPage; 