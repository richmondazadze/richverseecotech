"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "../../lib/utils";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

// You can replace the SVG below with a Lottie animation or another SVG as needed
const TechStartupSVG = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[420px]">
    <rect x="40" y="60" width="320" height="180" rx="24" fill="#e0e7ff" />
    <rect x="70" y="90" width="100" height="20" rx="6" fill="#6366f1" />
    <rect x="70" y="120" width="60" height="16" rx="5" fill="#a5b4fc" />
    <rect x="70" y="150" width="80" height="16" rx="5" fill="#818cf8" />
    <rect x="230" y="90" width="100" height="20" rx="6" fill="#38bdf8" />
    <rect x="230" y="120" width="60" height="16" rx="5" fill="#bae6fd" />
    <rect x="230" y="150" width="80" height="16" rx="5" fill="#0ea5e9" />
    <circle cx="200" cy="200" r="28" fill="#6366f1" />
    <path d="M200 180v40" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    <path d="M180 200h40" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    <rect x="120" y="200" width="40" height="12" rx="6" fill="#818cf8" />
    <rect x="240" y="200" width="40" height="12" rx="6" fill="#38bdf8" />
    <ellipse cx="200" cy="260" rx="120" ry="12" fill="#e0e7ff" />
  </svg>
);

function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
    description,
    ctaLabel,
    ctaHref,
    bgClass = "bg-[#030303]",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
    description?: string;
    ctaLabel?: string;
    ctaHref?: string;
    bgClass?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    // Animated services for the description
    const services = [
      "software development",
      "digital marketing",
      "cybersecurity",
      "renewable energy"
    ];
    const [serviceIndex, setServiceIndex] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setServiceIndex((prev) => (prev + 1) % services.length);
      }, 2000);
      return () => clearInterval(interval);
    }, []);

    return (
        <div className={cn("relative h-screen w-full flex items-center justify-center overflow-hidden bg-white p-0 m-0")}>
            {/* Parallax/scrolling shapes for subtle effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <ElegantShape
                    delay={0.3}
                    width={500}
                    height={120}
                    rotate={10}
                    gradient="from-blue-200/[0.18]"
                    className="left-[-10%] top-[10%]"
                />
                <ElegantShape
                    delay={0.5}
                    width={350}
                    height={80}
                    rotate={-12}
                    gradient="from-indigo-200/[0.15]"
                    className="right-[-8%] top-[60%]"
                />
                <ElegantShape
                    delay={0.4}
                    width={200}
                    height={60}
                    rotate={-8}
                    gradient="from-blue-300/[0.13]"
                    className="left-[8%] bottom-[8%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-8 xl:px-16 2xl:px-24 flex flex-col md:flex-row items-center justify-center h-full">
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-start text-center md:text-left max-w-2xl mx-auto md:mx-0 h-full pt-4 md:pt-8">
                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1
                            className="font-extrabold mb-3 md:mb-5 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-400"
                            style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}
                        >
                            {title1}
                        </h1>
                        <h2
                            className="font-semibold mb-4 md:mb-6 tracking-tight text-black"
                            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2.2rem)' }}
                        >
                          {title2.includes('sustainable')
                            ? <>
                                {title2.split('sustainable')[0]}
                                <span className="text-blue-700 font-bold">sustainable</span>
                                {title2.split('sustainable')[1]}
                              </>
                            : title2}
                        </h2>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {description && (
                          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed font-light tracking-wide max-w-lg px-2 md:px-0">
                            
                              {description.split("services")[0]}
                            <span
                              className="
                                inline-block whitespace-nowrap
                                min-w-[140px] sm:min-w-[180px] md:min-w-[300px] lg:min-w-[420px] xl:min-w-[520px]
                                px-2 md:px-4
                                text-blue-700 font-extrabold tracking-wider uppercase align-middle
                                text-base sm:text-lg md:text-2xl lg:text-4xl
                                my-4 md:my-6
                              "
                              style={{ fontFamily: 'Orbitron, Montserrat, Poppins, sans-serif' }}
                            >
                              <AnimatePresence mode="wait" initial={false}>
                                <motion.span
                                  key={services[serviceIndex]}
                                  initial={{ y: 32, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  exit={{ y: -32, opacity: 0 }}
                                  transition={{ duration: 0.7, ease: [0.42, 0.0, 0.58, 1] }}
                                  className="block"
                                >
                                  {services[serviceIndex]}
                                </motion.span>
                              </AnimatePresence>
                            </span>
                          </p>
                        )}
                        {ctaLabel && ctaHref && (
                          <a
                            href={ctaHref}
                            className="group inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 text-white font-extrabold text-lg md:text-xl shadow-xl hover:from-blue-700 hover:to-indigo-600 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300/40 border-0"
                            style={{ boxShadow: '0 4px 32px 0 rgba(59,130,246,0.25), 0 1.5px 8px 0 rgba(99,102,241,0.10)' }}
                            aria-label={ctaLabel}
                          >
                            {ctaLabel}
                            <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                          </a>
                        )}
                    </motion.div>
                </div>
                {/* Right-aligned tech startup SVG animation for large screens */}
                <div className="hidden md:flex w-1/2 h-full items-center justify-end relative">
                  <div className="w-full flex flex-col items-end justify-center gap-8 animate-fade-in">
                    {/* Tech Aesthetic Animation: Circuit Pattern SVG */}
                    <motion.svg
                      initial={{ opacity: 0, y: -60, scale: 1.1, rotate: -14 }}
                      animate={{
                        opacity: 0.45,
                        y: [0, 18, 0, -18, 0],
                        scale: [1.1, 1.18, 1.1, 1.05, 1.1],
                        rotate: -14
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        opacity: { duration: 1.2 }
                      }}
                      width="700" height="200" viewBox="0 0 700 200" fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute -top-32 right-0 z-20 pointer-events-none select-none"
                      style={{ filter: 'blur(0.5px)' }}
                    >
                      <g stroke="#2563eb" strokeWidth="2.5" opacity="0.85">
                        <rect x="30" y="50" width="640" height="100" rx="38" fill="none" />
                        <path d="M80 100h120M200 100v-40M200 100v40M620 100h-120M500 100v-40M500 100v40" />
                        <circle cx="200" cy="60" r="8" fill="#38bdf8" />
                        <circle cx="200" cy="140" r="8" fill="#38bdf8" />
                        <circle cx="500" cy="60" r="8" fill="#38bdf8" />
                        <circle cx="500" cy="140" r="8" fill="#38bdf8" />
                        <rect x="330" y="80" width="40" height="40" rx="12" fill="#a5b4fc" />
                        <path d="M350 80v-30M350 120v30" />
                      </g>
                    </motion.svg>
                    <TechStartupSVG />
                    {/* Extra animation for visual interest */}
                    <ElegantShape
                      delay={0.5}
                      width={180}
                      height={60}
                      rotate={-10}
                      gradient="from-blue-400/[0.18]"
                      className="relative right-4 -top-20"
                    />
                  </div>
                </div>
            </div>
        </div>
    );
}

export { HeroGeometric }; 