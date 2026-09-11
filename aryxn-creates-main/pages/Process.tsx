import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "DISCOVER",
    subtitle: "Understanding & Audit",
    desc: "We start by deeply understanding your brand, competitive space, target audience, and business growth objectives. We audit your existing visual presence and identify core growth opportunities."
  },
  {
    num: "02",
    title: "DEFINE",
    subtitle: "Strategy & Positioning",
    desc: "We architect the strategy, creative positioning, and technical direction. Every key metric, asset requirement, and design principle is mapped out into a concrete execution plan."
  },
  {
    num: "03",
    title: "CREATE",
    subtitle: "Design & Production",
    desc: "Our creative direction and engineering teams execute the build. We craft visual identity systems, code modern digital platforms, produce media assets, and build automation pipelines."
  },
  {
    num: "04",
    title: "LAUNCH",
    subtitle: "Deployment & Growth",
    desc: "We rigorously test and deploy the work into production. Post-launch, we analyze real-world performance, optimize conversion flows, and transition into compound scaling."
  }
];

export const Process: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#161719] text-[#F5F5F5] selection:bg-[#A8F000] selection:text-[#161719]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <span className="text-xs font-mono text-[#A8F000] tracking-widest uppercase block mb-2">AGENCY BLUEPRINT</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#F5F5F5] uppercase tracking-tight mb-6">
            OUR PROCESS
          </h1>
          <p className="text-[#9A9B9E] text-lg font-light leading-relaxed">
            A disciplined 4-stage methodology designed to eliminate noise, clarify brand positioning, and build digital assets that drive measurable business outcomes.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#1F2023] border border-white/10 rounded-2xl p-8 md:p-12 hover:border-[#A8F000]/40 transition-all"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3">
                  <span className="text-5xl md:text-6xl font-mono text-[#A8F000] font-extrabold block">
                    {step.num}
                  </span>
                  <span className="text-xs font-mono text-[#9A9B9E] tracking-widest uppercase mt-2 block">
                    {step.subtitle}
                  </span>
                </div>

                <div className="md:col-span-9 space-y-4">
                  <h2 className="text-3xl font-extrabold text-[#F5F5F5] uppercase tracking-tight">
                    {step.title}
                  </h2>
                  <p className="text-base text-[#9A9B9E] font-light leading-relaxed max-w-3xl">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-28 bg-[#121315] border border-white/10 rounded-2xl p-12 text-center space-y-6">
          <span className="text-xs font-mono text-[#A8F000] tracking-widest uppercase">GET STARTED</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F5F5] uppercase tracking-tight">
            READY TO EXECUTE WITH DISCIPLINE?
          </h2>
          <p className="text-[#9A9B9E] text-base font-light max-w-xl mx-auto">
            Book a discovery consultation to talk through your brand, roadmap, and timelines.
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