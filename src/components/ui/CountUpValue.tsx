import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUpLib from 'react-countup';
import { motion, useAnimation } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  color?: string;
  enableScrollSpeedVariation?: boolean;
  tooltip?: string;
  highlightOnHover?: boolean;
}

export function CountUpValue({ 
  end, 
  duration = 2, 
  suffix = '', 
  prefix = '',
  size = '4xl',
  color = 'text-blue-600',
  enableScrollSpeedVariation = true,
  tooltip,
  highlightOnHover = false,
}: CountUpProps) {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true
  });
  
  const controls = useAnimation();

  // Calculate duration based on scroll speed if enabled
  const calculateDuration = () => {
    if (!enableScrollSpeedVariation || !entry) return duration;
    
    const scrollSpeed = Math.abs(window.scrollY - (entry.boundingClientRect.top + window.scrollY)) / duration;
    return Math.max(1, Math.min(duration, (scrollSpeed / 500) * duration));
  };

  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.8
      }
    }
  };

  const numberVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.5,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        mass: 0.8
      }
    },
    hover: {
      scale: highlightOnHover ? 1.05 : 1,
      color: highlightOnHover ? "#1d4ed8" : undefined,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  // Floating particles effect
  const particles = Array.from({ length: 3 }).map((_, i) => ({
    initialX: Math.random() * 40 - 20,
    initialY: Math.random() * 40 - 20,
    duration: 2 + Math.random() * 2,
    delay: i * 0.2
  }));

  const content = (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative group"
    >
      {/* Floating particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-blue-400/30"
          initial={{ 
            x: particle.initialX,
            y: particle.initialY,
            opacity: 0,
            scale: 0
          }}
          animate={{ 
            x: [particle.initialX, particle.initialX + 10, particle.initialX],
            y: [particle.initialY, particle.initialY - 20, particle.initialY],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Glowing background effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 rounded-xl"
        animate={{
          backgroundPosition: ["200% 50%", "-200% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Main number display */}
      <motion.div
        ref={ref}
        variants={numberVariants}
        whileHover="hover"
        className={`relative z-10 font-bold ${size ? `text-${size}` : ''} ${color} inline-block`}
      >
        {inView ? (
          <>
            {prefix}
            <CountUpLib
              end={end}
              duration={calculateDuration()}
              separator=","
              suffix={suffix}
              decimal="."
              decimals={end % 1 !== 0 ? 2 : 0}
              enableScrollSpy
              scrollSpyDelay={100}
            />
          </>
        ) : (
          `${prefix}0${suffix}`
        )}
      </motion.div>

      {/* Subtle highlight effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );

  return tooltip ? (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {content}
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : content;
} 