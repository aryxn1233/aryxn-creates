import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Discovery & Audit",
    desc: "We start by mapping your existing workflows, tools, and pain points. We document every manual process and identify the highest-impact automation opportunities."
  },
  {
    num: "02",
    title: "Automation Blueprint",
    desc: "We design the n8n workflow architecture — mapping triggers, actions, conditions, and data flows before touching a single node. You approve the blueprint before we build."
  },
  {
    num: "03",
    title: "Workflow Build",
    desc: "We build your automation in n8n with proper error handling, retry logic, and monitoring. Complex AI pipelines are integrated with GPT-4, Claude, or Gemini where needed."
  },
  {
    num: "04",
    title: "Testing & QA",
    desc: "Every workflow is stress-tested with real data. We simulate edge cases, API failures, and unexpected inputs to ensure your automation never silently breaks."
  },
  {
    num: "05",
    title: "Deployment & Handoff",
    desc: "We deploy to your environment, document every workflow, and train your team. You own the automation — we provide ongoing support to iterate and expand."
  }
];

export const Process: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Our <span className="text-aether-purple dark:text-aether-accent">Process</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A battle-tested 5-step approach to building automations that actually work — from discovery to deployment.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-aether-purple dark:via-aether-accent to-transparent opacity-30 md:-translate-x-1/2" />

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
                 <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white dark:bg-black border-4 border-aether-purple dark:border-aether-accent z-10 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-aether-purple dark:bg-white rounded-full" />
                 </div>

                 <div className="flex-1 pl-16 md:pl-0 md:text-right" style={{ textAlign: idx % 2 === 0 ? 'left' : undefined }}>
                   {idx % 2 !== 0 && (
                      <div className="md:pr-12 md:text-right">
                        <span className="text-6xl font-bold text-gray-200 dark:text-white/5 absolute -top-10 right-1/2 translate-x-1/2 select-none">{step.num}</span>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 relative">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                      </div>
                   )}
                   {idx % 2 === 0 && <div className="hidden md:block" />}
                 </div>

                 <div className="flex-1 pl-16 md:pl-0">
                    {idx % 2 === 0 && (
                      <div className="md:pl-12">
                        <span className="text-6xl font-bold text-gray-200 dark:text-white/5 absolute -top-10 left-12 select-none md:left-auto md:right-1/2 md:translate-x-1/2">{step.num}</span>
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