import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ArrowRight } from 'lucide-react';

const pillars = [
  {
    num: '01',
    title: 'BRAND',
    subtitle: 'Strategy & Identity',
    description: 'We build foundational brand systems that define your position, command authority, and separate you from competitors.',
    deliverables: [
      'Brand Strategy & Positioning',
      'Visual Identity Systems',
      'Logo Systems & Typography',
      'Brand Guidelines & Asset Kits',
      'Brand Messaging & Voice'
    ]
  },
  {
    num: '02',
    title: 'DIGITAL',
    subtitle: 'Design & Engineering',
    description: 'High-performance web applications and digital interfaces built with React, Next.js, and modern editorial aesthetics.',
    deliverables: [
      'Custom Website Design',
      'Full-Stack Web Development',
      'High-Converting Landing Pages',
      'Interactive Digital Experiences',
      'Performance & Mobile Optimization'
    ]
  },
  {
    num: '03',
    title: 'CONTENT',
    subtitle: 'Creative & Production',
    description: 'AI-assisted media production and campaign direction designed to generate attention and engage high-intent audiences.',
    deliverables: [
      'AI-Powered Creative Direction',
      'Social Media Campaign Asset Kits',
      'High-Converting Video Ads',
      'Short & Long Form Media',
      'Creative Performance Audits'
    ]
  },
  {
    num: '04',
    title: 'GROWTH',
    subtitle: 'Marketing & Performance',
    description: 'Data-driven marketing strategies and conversion systems built to scale customer acquisition and enterprise growth.',
    deliverables: [
      'Performance Marketing Strategy',
      'Social Growth & Audience Acquisition',
      'Conversion Rate Optimization (CRO)',
      'Search Engine Optimization (SEO)',
      'Marketing Automation Pipelines'
    ]
  }
];

export const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#161719] text-[#F5F5F5] selection:bg-[#A8F000] selection:text-[#161719]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <span className="text-xs font-mono text-[#A8F000] tracking-widest uppercase block mb-2">AGENCY CAPABILITIES</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#F5F5F5] uppercase tracking-tight mb-6">
            WHAT WE CREATE
          </h1>
          <p className="text-[#9A9B9E] text-lg font-light leading-relaxed">
            Four core growth pillars engineered for high-growth companies. We combine strategic art direction with deep technical leverage.
          </p>
        </div>

        {/* Pillars Detailed Grid */}
        <div className="space-y-16">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#1F2023] border border-white/10 rounded-2xl p-8 md:p-12 hover:border-[#A8F000]/40 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 space-y-4">
                  <span className="text-4xl font-mono text-[#A8F000] font-bold block">{pillar.num}</span>
                  <h2 className="text-3xl font-extrabold text-[#F5F5F5] uppercase tracking-tight">
                    {pillar.title}
                  </h2>
                  <p className="text-xs font-mono text-[#9A9B9E] tracking-widest uppercase">
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm text-[#9A9B9E] font-light leading-relaxed pt-2">
                    {pillar.description}
                  </p>
                </div>

                <div className="lg:col-span-8 bg-[#161719] rounded-xl p-8 border border-white/5 space-y-4">
                  <h4 className="text-xs font-mono text-[#A8F000] tracking-widest uppercase mb-4">DELIVERABLES & EXECUTIONS</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {pillar.deliverables.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#A8F000] shrink-0" />
                        <span className="text-sm text-[#F5F5F5] font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="mt-28 bg-[#121315] border border-white/10 rounded-2xl p-12 text-center space-y-6">
          <span className="text-xs font-mono text-[#A8F000] tracking-widest uppercase">CUSTOM ENGAGEMENT</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F5F5] uppercase tracking-tight">
            NEED A TAILORED AGENCY ENGAGEMENT?
          </h2>
          <p className="text-[#9A9B9E] text-base font-light max-w-xl mx-auto">
            Every business has unique growth levers. Schedule a direct strategy call to discuss your exact project goals.
          </p>
          <div className="pt-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#A8F000] text-[#161719] font-bold text-xs tracking-wider uppercase rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(168,240,0,0.25)]"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};