import React, { useEffect } from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const infoCards = [
  {
    icon: <MapPin className="w-8 h-8 text-blue-500 drop-shadow" />, title: 'Address',
    content: (
      <>
        Austin, United States<br />Accra, Ghana
      </>
    )
  },
  {
    icon: <Phone className="w-8 h-8 text-blue-500 drop-shadow" />, title: 'Call Us',
    content: (
      <>
        +1 512 650 9818<br />+233 5416 20190
      </>
    )
  },
  {
    icon: <Mail className="w-8 h-8 text-blue-500 drop-shadow" />, title: 'Email Us',
    content: (
      <>
        richverseecotech@gmail.com
      </>
    )
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-500 drop-shadow" />, title: 'Working Hours',
    content: (
      <>
        Monday - Friday<br />8:00AM - 05:00PM (ET)
      </>
    )
  },
];

const contactFaqs = [
  {
    question: 'How quickly do you respond to inquiries?',
    answer: 'We aim to respond to all messages within 1 business day.',
  },
  {
    question: 'What information should I include in my message?',
    answer: (
      <>
        Please include:
        <ul className="list-disc list-inside mt-2 text-blue-700">
          <li>Your name and company</li>
          <li>Contact details</li>
          <li>A brief description of your inquiry or project</li>
        </ul>
      </>
    ),
  },
  {
    question: 'Can I schedule a call or meeting?',
    answer: (
      <>
        Absolutely! <a href="/contact" className="text-blue-600 underline hover:text-blue-800">Contact us</a> to arrange a call or meeting at your convenience.
      </>
    ),
  },
  {
    question: 'Where are your offices located?',
    answer: 'Austin, United States and Accra, Ghana.',
  },
];

const ContactPage = () => {
  // Add animated particles to the background
  useEffect(() => {
    const canvas = document.getElementById('contact-bg-canvas') as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = Array.from({ length: 24 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 1.5 + Math.random() * 2.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      o: 0.15 + Math.random() * 0.2
    }));
    let running = true;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(37,99,235,${p.o})`;
        ctx.shadowColor = '#60a5fa';
        ctx.shadowBlur = 12;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > window.innerWidth) p.dx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.dy *= -1;
      }
      if (running) requestAnimationFrame(draw);
    }
    draw();
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    return () => { running = false; };
  }, []);

  return (
    <>
      <SEO 
        title="Contact RichverseEcoTech"
        description="Get in touch with RichverseEcoTech for innovative, sustainable, and secure digital solutions. We're here to help your business grow."
        url="https://richverseecotech.com/contact"
      />
      <main className="min-h-screen font-sans bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden pt-[80px] sm:pt-[60px]">
        {/* Animated Background Canvas */}
        <canvas id="contact-bg-canvas" className="fixed inset-0 w-full h-full pointer-events-none z-0" />
        {/* Animated Gradient Blobs */}
        <motion.div initial={{ opacity: 0, scale: 0.8, y: -40 }} animate={{ opacity: 0.7, scale: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.1, type: 'spring' }} className="absolute top-0 left-[-100px] w-72 h-72 bg-gradient-to-br from-blue-400 via-blue-300 to-cyan-200 rounded-full blur-2xl z-0" />
        <motion.div initial={{ opacity: 0, scale: 0.7, y: 40 }} animate={{ opacity: 0.5, scale: 1, y: 0 }} transition={{ duration: 1.3, delay: 0.3, type: 'spring' }} className="absolute bottom-16 right-[-120px] w-96 h-96 bg-gradient-to-br from-blue-200 via-blue-400 to-blue-600 rounded-full blur-2xl z-0" />
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-14 pb-10 flex flex-col items-center text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.7, y: -30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: 'spring', duration: 0.8 }} className="flex items-center justify-center mb-4">
            <span className="relative">
              <Mail className="w-16 h-16 text-primary drop-shadow-lg animate-bounce-slow z-10" />
              <span className="absolute -inset-2 rounded-full bg-blue-400/30 blur-xl animate-pulse z-0" />
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', duration: 0.9, delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold text-primary mb-2 drop-shadow-xl">Let's Connect</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', duration: 0.9, delay: 0.2 }} className="text-lg md:text-xl text-blue-800/80 max-w-2xl mx-auto mb-2 font-medium">We'd love to hear from you.</motion.p>
          <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', duration: 0.9, delay: 0.3 }} className="text-lg md:text-xl text-blue-900/90 font-semibold">Reach out for partnerships, support, or just to say hello!</motion.span>
        </section>
        {/* Info Cards & Contact Form Side by Side */}
        <section className="container mx-auto px-4 pb-16 relative z-10">
          <div className="flex flex-col lg:flex-row gap-10 items-stretch w-full">
            {/* Info Cards */}
            <motion.div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.13 } } }}>
              {infoCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  variants={{ hidden: { opacity: 0, y: 40, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1 } }}
                  transition={{ type: 'spring', duration: 0.7, delay: i * 0.1 }}
                  className="bg-white/70 backdrop-blur-xl rounded-2xl border border-primary/10 shadow-lg p-6 flex flex-col gap-2 items-start hover:shadow-2xl hover:scale-[1.025] transition-all duration-300 group relative overflow-hidden"
                >
                  <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', duration: 0.7, delay: 0.1 * i }} className="mb-2">
                    {card.icon}
                  </motion.div>
                  <motion.h3 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', duration: 0.7, delay: 0.15 * i }} className="font-bold text-lg text-primary mb-1">{card.title}</motion.h3>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', duration: 0.7, delay: 0.2 * i }} className="text-blue-900/90 text-base leading-relaxed font-medium">{card.content}</motion.div>
                  {/* Glassmorphism shine */}
                  <span className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-200/40 to-white/0 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-300" />
                </motion.div>
              ))}
            </motion.div>
            {/* Contact Form */}
            <motion.div className="flex-1 flex items-stretch" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ type: 'spring', duration: 0.9, delay: 0.4 }}>
              <div className="bg-white/80 backdrop-blur-2xl rounded-2xl border border-primary/10 shadow-xl p-8 w-full flex flex-col justify-center relative overflow-hidden">
                {/* Glass shine */}
                <span className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-200/40 to-white/0 rounded-full blur-2xl opacity-60" />
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="py-16 bg-white/90 backdrop-blur-xl">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: 'spring', duration: 0.8, delay: 0.1 }} viewport={{ once: true }} className="container mx-auto px-4 max-w-2xl rounded-2xl border border-blue-100/60 shadow-blue-100/30 shadow-lg p-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 drop-shadow">Frequently Asked Questions</h2>
            </div>
            <FAQAccordion items={contactFaqs} color="blue" />
          </motion.div>
        </section>
        {/* Add space before footer */}
        <div className="h-12 md:h-20" />
      </main>
    </>
  );
};

export default ContactPage;
