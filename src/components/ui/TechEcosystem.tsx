import React from 'react';
import { motion } from 'framer-motion';

export default function TechEcosystem() {
  return (
    <div className="w-full flex justify-center items-center p-0 m-0 bg-transparent">
      <motion.img
        src="/textures/planet.png"
        alt="RichverseEcoTech Globe"
        className="z-[0] block w-full max-w-[70vw] aspect-square object-cover rounded-full md:max-w-[500px] lg:max-w-[400px] xl:max-w-[500px]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
      />
    </div>
  );
}