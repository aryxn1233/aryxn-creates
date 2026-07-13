import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What exactly does ARYXNCREATES do?",
    answer: "We are a full-service AI-powered creative and marketing agency. We build everything from high-converting websites and SaaS platforms to brand identities, AI video ads, and automated workflows. You imagine the brand; we execute the entire digital presence."
  },
  {
    question: "How does AI fit into your services?",
    answer: "We use advanced AI tools to accelerate our workflow, enhance creativity, and build smarter systems for our clients. Whether it's training an AI agent to handle your customer support or using AI to rapidly prototype designs, we integrate the best of human creativity with machine efficiency."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary by project scope. A brand identity and website launch usually takes 4-6 weeks, while complex SaaS applications or custom AI automation systems may take 8-12 weeks. We move fast without sacrificing premium quality."
  },
  {
    question: "Do you offer ongoing support or marketing after launch?",
    answer: "Yes. Our goal is to be your long-term growth partner. We offer monthly retainers for Social Media Management, Performance Marketing, SEO, and ongoing technical maintenance."
  },
  {
    question: "What is the pricing structure?",
    answer: "We offer project-based pricing for discrete builds (like a website or app) and value-based retainers for ongoing growth and marketing services. Every project starts with a Discovery Call to accurately scope your needs and provide a custom proposal."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
            Common <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Everything you need to know about partnering with us.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden bg-gray-50 dark:bg-aether-900/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-gray-900 dark:text-white text-lg pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-aether-accent transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
