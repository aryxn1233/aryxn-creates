import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const agencyValues = [
    {
      title: 'HUMAN JUDGMENT & TASTE',
      description: 'AI speeds up research and execution, but human taste, empathy, and creative direction drive great work. We never delegate taste to machines.'
    },
    {
      title: 'TECHNICAL LEVERAGE',
      description: 'We live on the leading edge of modern frameworks, AI workflows, and automation infrastructure. Speed and quality are not mutually exclusive.'
    },
    {
      title: 'BUSINESS ROI & OUTCOMES',
      description: 'Pretty designs that do not convert are useless. We measure success by brand equity, audience engagement, and revenue outcomes.'
    },
    {
      title: 'TRANSPARENT PARTNERSHIP',
      description: 'No bloated agency pitch decks or middle-management bloat. You work directly with senior creative strategists and full-stack builders.'
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#161719] text-[#F5F5F5] selection:bg-[#A8F000] selection:text-[#161719]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 max-w-4xl space-y-6">
          <span className="text-xs font-mono text-[#A8F000] tracking-widest uppercase block">ABOUT THE AGENCY • ONE TEAM. ONE VISION. ONE DIRECTION.</span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F5F5F5] uppercase tracking-tight leading-[1.05]">
            WE'RE BUILDING THE KIND OF AGENCY WE WANTED TO WORK WITH.
          </h1>
          <p className="text-[#9A9B9E] text-lg font-light leading-relaxed max-w-2xl pt-2">
            ARYXN CREATES was founded to bridge the gap between traditional high-end branding studios and modern technical growth teams.
          </p>
        </div>

        {/* 3 Core Pillars Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-[#1F2023] border border-white/10 rounded-2xl p-8 space-y-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A8F000] block" />
            <h3 className="text-xl font-extrabold text-[#F5F5F5] tracking-tight">SMALL ENOUGH</h3>
            <p className="text-sm text-[#9A9B9E] font-light leading-relaxed">
              Small enough to care deeply about every pixel, headline, and campaign detail.
            </p>
          </div>

          <div className="bg-[#1F2023] border border-white/10 rounded-2xl p-8 space-y-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A8F000] block" />
            <h3 className="text-xl font-extrabold text-[#F5F5F5] tracking-tight">SMART ENOUGH</h3>
            <p className="text-sm text-[#9A9B9E] font-light leading-relaxed">
              Smart enough to leverage modern AI tools, automation engines, and scalable code.
            </p>
          </div>

          <div className="bg-[#1F2023] border border-white/10 rounded-2xl p-8 space-y-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A8F000] block" />
            <h3 className="text-xl font-extrabold text-[#F5F5F5] tracking-tight">AMBITIOUS ENOUGH</h3>
            <p className="text-sm text-[#9A9B9E] font-light leading-relaxed">
              Ambitious enough to build iconic, long-lasting brand work people remember.
            </p>
          </div>
        </div>

        {/* Authentic Studio Photography Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 items-center">
          <div className="space-y-6">
            <span className="text-xs font-mono text-[#A8F000] tracking-widest uppercase block">OUR STUDIO & TEAM</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#F5F5F5] uppercase tracking-tight">
              STRATEGY, DESIGN, AND CODE UNDER ONE ROOF.
            </h2>
            <p className="text-base text-[#9A9B9E] font-light leading-relaxed">
              We operate as a nimble, focused studio based out of Chandigarh, India, serving clients across North America, Europe, and Asia.
            </p>
            <p className="text-base text-[#9A9B9E] font-light leading-relaxed">
              Whether launching a new enterprise SaaS brand or positioning a luxury business, we bring creative direction, technical rigor, and growth strategy together seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img 
              src="./coders1.jpg" 
              alt="ARYXN CREATES Studio Engineering" 
              className="rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 w-full h-72 object-cover" 
            />
            <img 
              src="./coders2.jpg" 
              alt="ARYXN CREATES Creative Direction" 
              className="rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 w-full h-72 object-cover mt-8" 
            />
          </div>
        </div>

        {/* Agency Values */}
        <div className="mb-24">
          <div className="mb-12">
            <span className="text-xs font-mono text-[#A8F000] tracking-widest uppercase block mb-2">FOUNDATIONAL PRINCIPLES</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F5F5] uppercase tracking-tight">
              OUR VALUES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agencyValues.map((val, idx) => (
              <div key={idx} className="bg-[#1F2023] border border-white/10 rounded-2xl p-8 space-y-3">
                <span className="text-xs font-mono text-[#A8F000] font-bold">0{idx + 1}</span>
                <h3 className="text-xl font-bold text-[#F5F5F5] tracking-tight">{val.title}</h3>
                <p className="text-sm text-[#9A9B9E] font-light leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#121315] border border-white/10 rounded-2xl p-12 text-center space-y-6">
          <span className="text-xs font-mono text-[#A8F000] tracking-widest uppercase">WORK WITH US</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F5F5] uppercase tracking-tight">
            READY TO TALK WITH OUR CREATIVE TEAM?
          </h2>
          <p className="text-[#9A9B9E] text-base font-light max-w-xl mx-auto">
            Reach out directly for a project consultation or to discuss custom agency retainers.
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