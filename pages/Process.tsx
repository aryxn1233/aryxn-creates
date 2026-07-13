import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We start by deeply understanding your brand, your goals, and your pain points. We audit your current digital footprint and identify massive opportunities for growth."
  },
  {
    num: "02",
    title: "Strategy",
    desc: "We craft a tailored masterplan. Whether it's a new brand identity, an AI-powered SaaS product, or a comprehensive content marketing calendar, everything is mapped out."
  },
  {
    num: "03",
    title: "Creation",
    desc: "Our creative and engineering teams get to work. We design stunning UIs, write intelligent code, produce high-converting video ads, and set up your automation pipelines."
  },
  {
    num: "04",
    title: "Launch",
    desc: "We rigorously test everything. Once approved, we execute a coordinated launch across all channels, ensuring maximum impact, flawless performance, and zero downtime."
  },
  {
    num: "05",
    title: "Scale",
    desc: "Launch is just the beginning. We transition into continuous optimization—using data analytics, SEO, and AI to scale your traffic, conversions, and operational efficiency."
  }
];

export const Process: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight"
          >
            The <span className="text-aether-accent">Blueprint</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            A battle-tested 5-step approach to building premium brands and automated systems that dominate the digital space.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-aether-accent to-transparent opacity-30 md:-translate-x-1/2" />

          <div className="space-y-20">
            {steps.map((step, idx) => (
               <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                key={idx}
                className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                 {/* Center Dot */}
                 <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white dark:bg-black border-4 border-aether-accent z-10 -translate-x-1/2 flex items-center justify-center shadow-[0_0_15px_rgba(0,255,102,0.5)]">
                    <div className="w-2 h-2 bg-aether-accent rounded-full" />
                 </div>

                 <div className="flex-1 pl-16 md:pl-0 md:text-right" style={{ textAlign: idx % 2 === 0 ? 'left' : undefined }}>
                   {idx % 2 !== 0 && (
                      <div className="md:pr-12 md:text-right">
                        <span className="text-6xl font-bold text-gray-200 dark:text-white/5 absolute -top-10 right-1/2 translate-x-1/2 select-none font-sans">{step.num}</span>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 relative">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                      </div>
                   )}
                   {idx % 2 === 0 && <div className="hidden md:block" />}
                 </div>

                 <div className="flex-1 pl-16 md:pl-0">
                    {idx % 2 === 0 && (
                      <div className="md:pl-12">
                        <span className="text-6xl font-bold text-gray-200 dark:text-white/5 absolute -top-10 left-12 select-none md:left-auto md:right-1/2 md:translate-x-1/2 font-sans">{step.num}</span>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 relative">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                      </div>
                    )}
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};