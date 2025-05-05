import React, { ReactNode } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
  color?: string; // e.g. 'blue', 'green', 'orange'
  id?: string;
}

/**
 * FAQAccordion Component
 *
 * A modern, animated accordion for FAQ sections using framer-motion.
 * Supports rich content (lists, links, formatting) in answers.
 *
 * Props:
 * - items: Array<{ question: string; answer: React.ReactNode }>
 *   The FAQ items to display. Answers can be any ReactNode for rich content.
 * - color?: string
 *   Optional color theme (e.g., 'blue', 'green', 'orange'). Defaults to 'blue'.
 * - id?: string
 *   Optional id for the accordion container (for deep linking or accessibility).
 *
 * Usage:
 * <FAQAccordion items={[{ question: 'Q?', answer: <>A <a href='/'>link</a></> }]} color="blue" />
 */
const FAQAccordion = ({ items, color = 'blue', id }: FAQAccordionProps) => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-4" id={id}>
      {items.map((item, index) => (
        <div
          className={`rounded-lg border border-${color}-100 p-4 bg-white/90 shadow-sm`}
          key={index}
        >
          <button
            className={`w-full flex items-center justify-between font-semibold cursor-pointer text-${color}-700 focus:outline-none`}
            onClick={() => setOpen(open === index ? null : index)}
            aria-expanded={open === index}
            type="button"
          >
            <span>{item.question}</span>
            <motion.span
              initial={false}
              animate={{ rotate: open === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 ml-2" />
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === index && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-2 text-gray-700 text-base leading-relaxed">{item.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
