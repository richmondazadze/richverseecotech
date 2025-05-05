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
  bgClass = 'bg-gradient-to-br from-blue-100 via-blue-200 to-blue-400'
}: HeroMobileProps) => {
  return (
    <div className={`relative h-[70vh] w-full flex items-center justify-center overflow-hidden ${bgClass} p-0 m-0`}>
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-blue-300/30 to-indigo-300/30 backdrop-blur-sm"
            style={{
              width: Math.random() * 60 + 30,
              height: Math.random() * 60 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-white/40"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Gradient Wave */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(45deg, transparent 25%, rgba(59, 130, 246, 0.3) 50%, transparent 75%)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 5,
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
          className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-blue-100 text-blue-800 rounded-full"
        >
          {badge}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-extrabold mb-2 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-400 text-2xl sm:text-3xl"
        >
          {title1}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="font-semibold mb-3 tracking-tight text-black text-lg sm:text-xl"
        >
          {title2}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-sm sm:text-base mb-6 leading-relaxed font-light tracking-wide max-w-md"
        >
          {description}
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          href={ctaHref}
          className="inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-600 transition-all duration-300"
        >
          {ctaLabel}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </motion.a>
      </div>
    </div>
  );
}; 