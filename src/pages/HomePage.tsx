import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { HeroGeometric } from '../components/ui/shape-landing-hero';
import { TestimonialsSection } from "../components/ui/testimonials-section";
import ScrollToTopButton from '../components/ScrollToTopButton';
import { motion } from 'framer-motion';
import TechEcosystem from '../components/ui/TechEcosystem';
import SEO from '../components/SEO';
import { HeroMobile } from '../components/ui/HeroMobile';

// Memoized Card for Guiding Principles
interface PrincipleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}
const PrincipleCard = React.memo(function PrincipleCard({ icon, title, description, className }: PrincipleCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={className}
    >
      {icon}
      <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">{title}</h3>
      <p className="text-gray-600 text-center leading-relaxed">{description}</p>
    </motion.div>
  );
});

// Memoized Card for Services
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: React.ReactNode;
  className?: string;
}
const ServiceCard = React.memo(function ServiceCard({ icon, title, description, link, className }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={className}
    >
      <div className="text-center">
        {icon}
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        {link}
      </div>
    </motion.div>
  );
});

const HomePage = () => {
  return (
    <>
      <SEO 
        title="RichverseEcoTech"
        description="Transform your business with RichverseEcoTech's innovative solutions. We offer cutting-edge web development, digital marketing, cybersecurity, and renewable energy services."
        keywords="sustainable technology, eco-friendly digital solutions, web development, digital marketing, cybersecurity, renewable energy, business transformation"
      />
      {/* <Navbar /> */}
      <main className="min-h-screen pt-12 lg:pt-24"> {/* pt-24 to offset fixed navbar */}
      {/* Hero Section */}
        <div className="md:block hidden">
          <HeroGeometric
            badge="RichverseEcoTech"
            title1="Innovation Meets Sustainability"
            title2="Advanced Solutions for Tomorrow's Challenges"
            description="Discover how our innovative solutions empower your business to thrive in the digital age."
            ctaLabel="Get Started"
            ctaHref="/contact"
            bgClass="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-400"
          />
        </div>
        <div className="md:hidden block">
          <HeroMobile
            badge="Welcome to RichverseEcoTech"
            title1="Innovation Meets Sustainability"
            title2="Advanced Solutions for Tomorrow's Challenges"
            description="Transform your business with our eco-friendly technology solutions. We combine innovation with sustainability to create a better digital future."
            ctaLabel="Get Started"
            ctaHref="/contact"
          />
        </div>

        {/* Guiding Principles Section */}
        <section className="py-16 bg-gradient-to-br from-white via-blue-50/50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-blue-600 font-semibold tracking-wider uppercase text-sm"
              >
                INNOVATION & SUSTAINABILITY
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-blue-900 mt-4 mb-6"
              >
                Our Commitment to Excellence
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              >
                Discover how we blend cutting-edge technology with sustainable practices to create lasting impact.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  key: 'sustainable',
                  icon: (
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-200 rounded-full blur-lg opacity-20"></div>
                        <img src="/assets/img/values/sustainable-innovation.svg" alt="Sustainable Innovation" className="w-48 h-48 object-contain relative z-10" />
                      </div>
                    </div>
                  ),
                  title: 'Sustainable Innovation',
                  description: `We create solutions that not only solve today's challenges but also protect tomorrow's resources, ensuring a positive environmental impact.`,
                  className: "bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                },
                {
                  key: 'future-ready',
                  icon: (
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-200 rounded-full blur-lg opacity-20"></div>
                        <img src="/assets/img/values/future-ready.svg" alt="Future-Ready Solutions" className="w-48 h-48 object-contain relative z-10" />
                      </div>
                    </div>
                  ),
                  title: 'Future-Ready Solutions',
                  description: 'Our technologies adapt and scale with your growth, incorporating AI and sustainable practices for long-term success.',
                  className: "bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                },
                {
                  key: 'global-impact',
                  icon: (
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-200 rounded-full blur-lg opacity-20"></div>
                        <img src="/assets/img/values/global-impact.svg" alt="Global Impact" className="w-48 h-48 object-contain relative z-10" />
                      </div>
                    </div>
                  ),
                  title: 'Global Impact',
                  description: `We're committed to creating positive change worldwide through eco-friendly digital solutions and responsible innovation.`,
                  className: "bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                }
              ].map(card => (
                <PrincipleCard key={card.key} icon={card.icon} title={card.title} description={card.description} className={card.className} />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                backgroundSize: '100% 100%',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full bg-blue-200"
                style={{
                  width: Math.random() * 4 + 2,
                  height: Math.random() * 4 + 2,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-blue-600 font-semibold tracking-wider uppercase text-sm"
              >
                OUR SERVICES
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-blue-900 mt-4 mb-6"
              >
                Comprehensive Solutions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              >
                Discover our range of innovative services designed to transform your business
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  key: 'web-dev',
                  icon: (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  ),
                  title: 'Web Development',
                  description: 'Custom web solutions that drive growth and enhance user experience.',
                  link: (
                    <div className="text-center">
                      <Link to="/services/web-development" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200">
                        Learn More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  ),
                  className: "group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                },
                {
                  key: 'digital-marketing',
                  icon: (
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  ),
                  title: 'Digital Marketing',
                  description: 'Strategic marketing solutions to boost your online presence and reach.',
                  link: (
                    <div className="text-center">
                      <Link to="/services/digital-marketing" className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-800 transition-colors duration-200">
                        Learn More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  ),
                  className: "group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                },
                {
                  key: 'cybersecurity',
                  icon: (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  ),
                  title: 'Cybersecurity',
                  description: 'Robust security solutions to protect your digital assets.',
                  link: (
                    <div className="text-center">
                      <Link to="/services/cybersecurity" className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-200">
                        Learn More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  ),
                  className: "group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                },
                {
                  key: 'renewable-energy',
                  icon: (
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  ),
                  title: 'Renewable Energy',
                  description: 'Sustainable energy solutions for a greener future.',
                  link: (
                    <div className="text-center">
                      <Link to="/services/renewable-energy" className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-800 transition-colors duration-200">
                        Learn More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  ),
                  className: "group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                }
              ].map(card => (
                <ServiceCard key={card.key} icon={card.icon} title={card.title} description={card.description} link={card.link} className={card.className} />
              ))}
            </div>
          </div>
        </section>

        {/* Technology Ecosystem Section */}
        <section className="py-16 relative overflow-hidden bg-gradient-to-b from-white to-blue-50/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                Powered by Cutting-Edge Tech
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Our technology ecosystem integrates the latest innovations to deliver powerful, scalable solutions
              </p>
            </div>

            <div className="relative mb-12">
              <TechEcosystem />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Cloud Infrastructure</h3>
                  <p className="text-sm text-gray-600 mt-2">AWS, Azure, GCP</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Development</h3>
                  <p className="text-sm text-gray-600 mt-2">React, Node.js, Python</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Analytics</h3>
                  <p className="text-sm text-gray-600 mt-2">Big Data, AI/ML, BI</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Security</h3>
                  <p className="text-sm text-gray-600 mt-2">Cybersecurity, DevSecOps</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-xl" />
        </div>
      </section>

        {/* Testimonials Section */}
        <TestimonialsSection
          title="What Our Clients Say"
          description="See how businesses are thriving with RichverseEcoTech's unique blend of innovation and sustainability."
          testimonials={[
            {
              author: {
                name: "Olivia Chen",
                handle: "@olivia_chen",
                avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=150&h=150&fit=crop&crop=face"
              },
              text: "RichverseEcoTech's eco-driven approach gave us a competitive edge. Their solutions are truly next-level."
            },
            {
              author: {
                name: "Michel Smith",
                handle: "@michelsmith",
                avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face"
              },
              text: "We saw measurable growth and improved efficiency after partnering with RichverseEcoTech."
            },
            {
              author: {
                name: "Priya Singh",
                handle: "@priyasingh",
                avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face"
              },
              text: "The team's creativity and commitment to our vision made all the difference."
            },
            {
              author: {
                name: "Aisha Bello",
                handle: "@aishabello",
                avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
              },
              text: "From strategy to execution, RichverseEcoTech delivered results beyond our expectations."
            }
          ]}
        />
    </main>
      {/* Scroll to Top Button */}
      <ScrollToTopButton />
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
