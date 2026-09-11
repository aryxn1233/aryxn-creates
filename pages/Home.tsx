import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink,
  Layers,
  Compass,
  Zap,
  TrendingUp,
  Cpu,
  Eye,
  ShieldCheck
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export const Home: React.FC = () => {
  const selectedProjects = [
    {
      title: 'Antigravity Ops',
      category: 'Brand · Web Architecture · Automation',
      desc: 'Enterprise workflow orchestration platform automating thousands of operations.',
      image: './antigravity.png',
      link: '/portfolio/antigravity-ops'
    },
    {
      title: 'By Sugamjit Kaur',
      category: 'Fashion · Brand Portfolio · E-Commerce',
      desc: 'Editorial lookbook and digital brand showcase for high-fashion studio.',
      image: './sugam.png',
      link: 'https://bysugamjitkaur.vercel.app'
    },
    {
      title: 'Beauty From Ashes',
      category: 'Tattoo · Art Direction · Web Experience',
      desc: 'High-contrast portfolio showcase for bespoke tattoo brand & gallery.',
      image: './beautyashes.png',
      link: 'https://beautyfromashes.vercel.app'
    },
    {
      title: 'NeuroFlow AI',
      category: 'AI SaaS · Product Design · Systems',
      desc: 'AI-native workflow intelligence platform with multi-agent orchestration.',
      image: './neuroflow.png',
      link: '/portfolio/neuroflow-ai'
    }
  ];

  const servicePillars = [
    {
      num: '01',
      name: 'BRAND',
      tagline: 'Identity & Strategy',
      items: ['Brand Strategy', 'Visual Identity Systems', 'Positioning & Messaging', 'Creative Direction']
    },
    {
      num: '02',
      name: 'DIGITAL',
      tagline: 'Design & Development',
      items: ['Custom Website Design', 'Full-Stack Web Development', 'High-Converting Landing Pages', 'Digital Experiences']
    },
    {
      num: '03',
      name: 'CONTENT',
      tagline: 'Production & Creative',
      items: ['AI-Powered Creative', 'Social Media Direction', 'Campaign Production', 'Short & Long Form Media']
    },
    {
      num: '04',
      name: 'GROWTH',
      tagline: 'Marketing & Performance',
      items: ['Growth Strategy', 'Performance Campaigns', 'Social Audience Scale', 'Conversion Rate Optimization']
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'DISCOVER',
      desc: 'Deeply understand your brand, target audience, and business growth objectives.'
    },
    {
      num: '02',
      title: 'DEFINE',
      desc: 'Architect the overarching strategy, brand positioning, and technical direction.'
    },
    {
      num: '03',
      title: 'CREATE',
      desc: 'Design, develop, and produce the assets, digital platforms, and campaigns.'
    },
    {
      num: '04',
      title: 'LAUNCH',
      desc: 'Deploy to market, measure performance, and optimize for long-term compound growth.'
    }
  ];

  const whyPillars = [
    {
      title: 'HUMAN TASTE.',
      desc: 'AI cannot replace taste, empathy, or strategic intuition. Our creative direction remains strictly human.'
    },
    {
      title: 'AI LEVERAGE.',
      desc: 'We leverage cutting-edge AI systems to speed up production and data synthesis by 10x.'
    },
    {
      title: 'STRATEGIC THINKING.',
      desc: 'Every headline, layout, and campaign is designed with a clear business outcome in mind.'
    },
    {
      title: 'TECHNICAL EXECUTION.',
      desc: 'From custom React architectures to complex API integrations, we build for scale and speed.'
    }
  ];

  return (
    <div className="w-full bg-[#161719] text-[#F5F5F5] selection:bg-[#A8F000] selection:text-[#161719]">
      
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[92vh] flex items-center pt-32 pb-24 border-b border-white/10 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 editorial-grid opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            animate="show" 
            className="max-w-5xl space-y-8"
          >
            {/* Category Tag */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-[#1F2023] text-xs font-mono tracking-widest text-[#A8F000] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#A8F000] animate-pulse" />
              Creative Growth Agency
            </motion.div>
            
            {/* Main Editorial Headline */}
            <motion.h1 variants={fadeInUp} className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-[0.95] text-[#F5F5F5] uppercase">
              WE BUILD <br />
              <span className="text-[#A8F000]">BRANDS</span> <br />
              THAT MOVE.
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p variants={fadeInUp} className="text-lg sm:text-xl md:text-2xl text-[#9A9B9E] max-w-2xl font-light leading-relaxed pt-2">
              ARYXN CREATES is a creative growth agency combining strategy, design, AI and technology to build brands that look exceptional — and grow.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#A8F000] text-[#161719] font-bold text-sm tracking-wider uppercase rounded-full hover:bg-white transition-all transform hover:scale-[1.02] shadow-[0_0_30px_rgba(168,240,0,0.25)]"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/portfolio" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1F2023] border border-white/10 text-[#F5F5F5] font-semibold text-sm tracking-wider uppercase rounded-full hover:border-[#A8F000] transition-all"
              >
                <span>VIEW OUR WORK</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── BRAND POSITIONING STATEMENT ── */}
      <section className="py-24 md:py-32 bg-[#121315] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            <div className="lg:col-span-4">
              <span className="text-xs font-mono text-[#A8F000] tracking-widest uppercase block mb-3">POSITIONING</span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#F5F5F5] uppercase tracking-tight">
                OUR PHILOSOPHY
              </h3>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-4xl md:text-6xl font-extrabold text-[#F5F5F5] tracking-tight leading-tight uppercase">
                AI IS OUR ADVANTAGE. <br />
                <span className="text-[#A8F000]">CREATIVITY IS OUR FOUNDATION.</span>
              </h2>
              <p className="text-lg md:text-xl text-[#9A9B9E] font-light leading-relaxed">
                We are <strong className="text-[#F5F5F5] font-semibold">NOT</strong> an agency that exists because of AI. We are a creative agency that knows how to use AI better than traditional agencies.
              </p>
              <p className="text-base text-[#9A9B9E] font-light leading-relaxed">
                Technology gives us leverage and speed, but human judgment, art direction, and strategic taste ensure that your brand looks distinct, authentic, and high-end.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES SECTION: WHAT WE CREATE ── */}
      <section className="py-28 md:py-36 bg-[#161719] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-xs font-mono text-[#A8F000] tracking-widest uppercase block mb-2">SERVICES</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-[#F5F5F5] tracking-tight uppercase">
                WHAT WE CREATE
              </h2>
            </div>
            <p className="text-[#9A9B9E] max-w-md text-sm leading-relaxed">
              Four focused agency pillars engineered to turn ambitious ideas into dominant market brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicePillars.map((pillar, idx) => (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-[#1F2023] border border-white/10 rounded-2xl p-8 md:p-10 hover:border-[#A8F000]/50 transition-all group"
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="text-3xl font-mono text-[#A8F000] font-bold">{pillar.num}</span>
                  <span className="text-xs font-mono text-[#9A9B9E] tracking-widest uppercase">{pillar.tagline}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-[#F5F5F5] mb-6 group-hover:text-[#A8F000] transition-colors">
                  {pillar.name}
                </h3>

                <ul className="space-y-3 border-t border-white/5 pt-6">
                  {pillar.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-3 text-sm text-[#9A9B9E] font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A8F000]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#A8F000] hover:text-white uppercase transition-colors"
            >
              <span>EXPLORE ALL SERVICES & CAPABILITIES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK / PORTFOLIO ── */}
      <section className="py-28 md:py-36 bg-[#121315] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-xs font-mono text-[#A8F000] tracking-widest uppercase block mb-2">CASE STUDIES</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-[#F5F5F5] tracking-tight uppercase">
                SELECTED WORK
              </h2>
            </div>
            <Link 
              to="/portfolio" 
              className="hidden md:inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#F5F5F5] hover:text-[#A8F000] uppercase transition-colors"
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {selectedProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                {project.link.startsWith('/') ? (
                  <Link to={project.link} className="block space-y-4">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#1F2023] border border-white/10">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#161719]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-5 py-2.5 bg-[#A8F000] text-[#161719] text-xs font-mono font-bold tracking-wider uppercase rounded-full flex items-center gap-2">
                          VIEW CASE STUDY <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#A8F000] tracking-widest uppercase block mb-1">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-[#F5F5F5] group-hover:text-[#A8F000] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#9A9B9E] font-light mt-1">
                        {project.desc}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block space-y-4">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#1F2023] border border-white/10">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#161719]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-5 py-2.5 bg-[#A8F000] text-[#161719] text-xs font-mono font-bold tracking-wider uppercase rounded-full flex items-center gap-2">
                          VISIT LIVE SITE <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#A8F000] tracking-widest uppercase block mb-1">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-[#F5F5F5] group-hover:text-[#A8F000] transition-colors flex items-center gap-2">
                        {project.title} <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                      </h3>
                      <p className="text-sm text-[#9A9B9E] font-light mt-1">
                        {project.desc}
                      </p>
                    </div>
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#A8F000] uppercase"
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY ARYXN CREATES ── */}
      <section className="py-28 md:py-36 bg-[#161719] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono text-[#A8F000] tracking-widest uppercase block mb-2">AGENCY DIFFERENTIATOR</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#F5F5F5] tracking-tight uppercase">
              WHY ARYXN?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#1F2023] border border-white/10 rounded-2xl p-8 space-y-4"
              >
                <div className="w-3 h-3 rounded-full bg-[#A8F000]" />
                <h3 className="text-xl font-extrabold text-[#F5F5F5] tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#9A9B9E] font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-28 md:py-36 bg-[#121315] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-xs font-mono text-[#A8F000] tracking-widest uppercase block mb-2">METHODOLOGY</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-[#F5F5F5] tracking-tight uppercase">
                OUR PROCESS
              </h2>
            </div>
            <Link 
              to="/process" 
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#9A9B9E] hover:text-[#A8F000] uppercase transition-colors"
            >
              <span>FULL BLUEPRINT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div 
                key={step.num}
                className="bg-[#1F2023] border border-white/10 rounded-2xl p-8 space-y-4 relative"
              >
                <span className="text-4xl font-mono text-[#A8F000] font-bold block">
                  {step.num}
                </span>
                <h3 className="text-xl font-bold text-[#F5F5F5] tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-[#9A9B9E] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET: HUMAN AGENCY ── */}
      <section className="py-28 md:py-36 bg-[#161719] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono text-[#A8F000] tracking-widest uppercase block">ABOUT ARYXN CREATES</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F5] uppercase tracking-tight leading-tight">
                WE'RE BUILDING THE KIND OF AGENCY WE WANTED TO WORK WITH.
              </h2>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#A8F000] mt-2 shrink-0" />
                  <p className="text-base text-[#9A9B9E] font-light">
                    <strong className="text-[#F5F5F5] font-semibold">Small enough</strong> to care about the fine details of every project.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#A8F000] mt-2 shrink-0" />
                  <p className="text-base text-[#9A9B9E] font-light">
                    <strong className="text-[#F5F5F5] font-semibold">Smart enough</strong> to use the latest AI and technical automation stack.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#A8F000] mt-2 shrink-0" />
                  <p className="text-base text-[#9A9B9E] font-light">
                    <strong className="text-[#F5F5F5] font-semibold">Ambitious enough</strong> to build creative work people remember.
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <Link 
                  to="/about" 
                  className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#A8F000] hover:text-white uppercase transition-colors"
                >
                  <span>READ OUR STORY</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <img 
                src="./coders1.jpg" 
                alt="ARYXN CREATES Studio" 
                className="rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 w-full h-64 object-cover" 
              />
              <img 
                src="./coders2.jpg" 
                alt="Creative Engineering" 
                className="rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 w-full h-64 object-cover mt-8" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA SECTION ── */}
      <section className="py-32 md:py-44 bg-[#121315] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <span className="text-xs font-mono text-[#A8F000] tracking-widest uppercase">LET'S COLLABORATE</span>
          
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#F5F5F5] tracking-tight uppercase leading-none">
            READY TO BUILD <br />
            <span className="text-[#A8F000]">SOMETHING BETTER?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-[#9A9B9E] font-light max-w-xl mx-auto">
            Tell us what you're building. We'll take it from there.
          </p>
          
          <div className="pt-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#A8F000] text-[#161719] font-bold text-sm tracking-wider uppercase rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(168,240,0,0.3)]"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
