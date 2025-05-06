import React from 'react';
import { motion } from 'framer-motion';

interface HeroMobileProps {
  badge: string;
  title1: string;
  title2: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  bgClass?: string;
}

export const HeroMobile = ({
  badge,
  title1,
  title2,
  description,
  ctaLabel,
  ctaHref,
  bgClass = 'bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500'
}: HeroMobileProps) => {
  return (
    <div className={`relative h-[80vh] w-full flex items-center justify-center overflow-hidden ${bgClass} p-0 m-0`}>
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs - more, larger, with blue glow */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-blue-400/40 via-blue-300/30 to-blue-200/30 shadow-2xl shadow-blue-300/30 blur-md"
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(2px) drop-shadow(0 0 16px #60a5fa88)'
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [1, 1.25, 1],
              opacity: [0.35, 0.6, 0.35],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Particles - more, with subtle blue glow */}
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-blue-100/70 shadow-lg"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(0.5px) drop-shadow(0 0 6px #93c5fd)'
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: Math.random() * 2.5 + 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Gradient Wave - more blue and animated */}
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'linear-gradient(60deg, rgba(59,130,246,0.13) 0%, rgba(37,99,235,0.10) 100%)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-block px-4 py-1.5 mb-5 text-base font-semibold bg-blue-200 text-blue-800 rounded-full shadow"
        >
          {badge}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-extrabold mb-2 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-3xl sm:text-4xl drop-shadow-lg"
        >
          {title1}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="font-bold mb-4 tracking-tight text-gray-900 text-xl sm:text-2xl drop-shadow"
        >
          {title2}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-base sm:text-lg mb-8 leading-relaxed font-normal tracking-wide max-w-xs text-gray-700"
        >
          {description}
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          href={ctaHref}
          className="inline-flex items-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white font-extrabold text-lg sm:text-xl shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 relative overflow-hidden group"
        >
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 blur-lg z-0" />
          <span className="relative z-10 flex items-center">
          {ctaLabel}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
          </span>
        </motion.a>
      </div>
    </div>
  );
}; 