import React from 'react'
import { motion } from 'framer-motion'
import { TechEcosystem } from './ui/TechEcosystem'

export function TechnologySection(): JSX.Element {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Our Technology Ecosystem
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              We leverage cutting-edge technologies to build robust, scalable, and innovative solutions. Our tech stack is carefully chosen to ensure optimal performance, security, and user experience.
            </p>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Modern Frontend Frameworks (React, Next.js)
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Robust Backend Solutions (Node.js, Python)
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Cloud Infrastructure & DevOps
              </li>
            </ul>
          </motion.div>

          {/* 3D Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[400px] md:h-[500px] w-full relative"
          >
            <TechEcosystem />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 