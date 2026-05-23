import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Code, BarChart, ChevronRight, ExternalLink, Zap, GitBranch, BarChart2, Brain, Users, Activity } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Home: React.FC = () => {
  const recentWork = [
    {
      title: 'Stox',
      category: 'Fintech • Trading Dashboard',
      image: './bot.png',
      link: 'https://tradingboot.netlify.app/'
    },
    {
      title: 'Smile',
      category: 'Medical • Patient Portal',
      image: './smile.png',
      link: 'https://smile-nine.vercel.app'
    },
    {
      title: 'Luxestate',
      category: 'Real Estate • 3D Tours',
      image: './luke.png',
      link: 'https://luxestate-tau.vercel.app'
    }
  ];

  return (
    <div className="w-full bg-gray-50 dark:bg-aether-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-50 dark:bg-aether-900 z-0 transition-colors duration-300" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/50 dark:bg-aether-purple/20 rounded-full blur-[128px] animate-pulse-slow mix-blend-multiply dark:mix-blend-normal" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200/50 dark:bg-aether-accent/10 rounded-full blur-[128px] animate-pulse-slow mix-blend-multiply dark:mix-blend-normal" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <motion.div variants={item} className="inline-block px-4 py-1.5 rounded-full border border-aether-purple/30 dark:border-aether-accent/30 bg-aether-purple/5 dark:bg-aether-accent/5 text-aether-purple dark:text-aether-accent text-sm font-medium uppercase tracking-wider mb-4">
              n8n Workflow Automation Experts
            </motion.div>
            
            <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight text-gray-900 dark:text-white">
              We Build Workflows That <br />
              <span className="gradient-text">Eliminate Manual Work.</span>
            </motion.h1>

            <motion.p variants={item} className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Transform your business operations with n8n-powered workflow automation and custom AI agent pipelines. We connect your entire software stack and scale your productivity.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/contact" className="px-8 py-4 bg-aether-900 dark:bg-white text-white dark:text-aether-900 font-bold rounded-full text-lg hover:opacity-90 dark:hover:bg-gray-200 transition-all transform hover:scale-105 shadow-xl">
                Get a Proposal
              </Link>
              <Link to="/portfolio" className="px-8 py-4 glass-panel text-gray-900 dark:text-white font-medium rounded-full text-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-all flex items-center gap-2 group">
                View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
        </motion.div>
      </section>

      {/* Featured Solutions / What we do */}
      <section className="py-24 bg-white dark:bg-black transition-colors duration-300 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">More Than Just Integrations.<br/>Operational ROI.</h2>
               <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                 We don't just connect tools. We audit your operations, map bottlenecks, and build automated systems that work silently in the background 24/7.
               </p>
               <div className="space-y-6">
                  {[
                    { title: 'Workflow Automation', desc: 'Connect HubSpot, Slack, Airtable, Notion, and 400+ apps.', icon: <GitBranch className="text-aether-purple dark:text-aether-accent" /> },
                    { title: 'AI Agent Pipelines', desc: 'Integrate GPT-4, Claude, and Gemini into your daily tasks.', icon: <Brain className="text-aether-accent dark:text-aether-purple" /> },
                    { title: 'Production Stability', desc: 'Workflows built with comprehensive error handling & retry logic.', icon: <Zap className="text-yellow-600 dark:text-aether-gold" /> },
                  ].map((feature, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-default">
                      <div className="mt-1 p-2 bg-gray-100 dark:bg-white/5 rounded-lg h-fit">{feature.icon}</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{feature.title}</h4>
                        <p className="text-gray-500 dark:text-gray-500 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
               </div>
             </div>
             <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200/30 to-purple-200/30 dark:from-aether-accent/20 dark:to-aether-purple/20 blur-3xl rounded-full" />
                <img 
                  src="./coders2.jpg" 
                  alt="Dashboard Preview" 
                  className="relative z-10 rounded-2xl border border-gray-200 dark:border-white/10 shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Mini Portfolio Preview */}
      <section className="py-24 bg-gray-50 dark:bg-aether-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex justify-between items-end mb-12">
             <div>
               <span className="text-aether-purple dark:text-aether-accent text-sm font-bold tracking-widest uppercase mb-2 block">Selected Work</span>
               <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">Recent Masterpieces</h2>
             </div>
             <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-gray-900 dark:text-white hover:text-aether-purple dark:hover:text-aether-accent transition-colors">
               View All Projects <ArrowRight className="w-4 h-4" />
             </Link>
           </div>

           {/* Featured Enterprise Card */}
           <Link to="/portfolio/antigravity-ops" className="group block mb-8">
             <div className="relative rounded-2xl overflow-hidden border transition-all duration-500 group-hover:scale-[1.01]"
               style={{
                 background: 'linear-gradient(135deg, rgba(10,10,15,0.97) 0%, rgba(19,13,31,0.97) 100%)',
                 border: '1px solid rgba(0,242,255,0.2)',
                 boxShadow: '0 0 40px rgba(0,242,255,0.06)',
               }}>
               <div className="absolute inset-0 opacity-30"
                 style={{ backgroundImage: `linear-gradient(rgba(0,242,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,242,255,0.05) 1px, transparent 1px)`, backgroundSize: '36px 36px' }} />
               <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px]" style={{ background: 'rgba(189,0,255,0.12)' }} />
               <div className="relative z-10 p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                 <div>
                   <div className="flex flex-wrap gap-2 mb-4">
                     <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-black" style={{ background: 'linear-gradient(to right, #00f2ff, #bd00ff)' }}>⭐ Featured Enterprise</span>
                     <span className="text-xs text-aether-accent border px-2.5 py-1 rounded-full" style={{ borderColor: 'rgba(0,242,255,0.3)', background: 'rgba(0,242,255,0.05)' }}>Case Study</span>
                   </div>
                   <h3 className="text-2xl md:text-3xl font-black text-white mb-3">Antigravity Ops <span className="gradient-text">Automation Platform</span></h3>
                   <p className="text-gray-400 text-sm mb-5 leading-relaxed">Enterprise AI workflow orchestration platform — 78% ops reduction, 2.3M+ workflows automated daily.</p>
                   <div className="flex flex-wrap gap-3 mb-5">
                     {[
                       { icon: <Zap className="w-3 h-3" />, label: 'AI Document Processing', color: '#00f2ff' },
                       { icon: <GitBranch className="w-3 h-3" />, label: 'Workflow Engine', color: '#bd00ff' },
                       { icon: <BarChart2 className="w-3 h-3" />, label: 'Live Analytics', color: '#51cf66' },
                     ].map((pill, pi) => (
                       <span key={pi} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                         style={{ background: `${pill.color}12`, border: `1px solid ${pill.color}35`, color: pill.color }}>
                         {pill.icon} {pill.label}
                       </span>
                     ))}
                   </div>
                   <span className="inline-flex items-center gap-2 text-sm font-bold text-black px-5 py-2.5 rounded-full group-hover:shadow-[0_0_20px_rgba(0,242,255,0.35)] transition-all"
                     style={{ background: 'linear-gradient(to right, #00f2ff, #bd00ff)' }}>
                     View Full Case Study <ChevronRight className="w-4 h-4" />
                   </span>
                 </div>
                 <div className="relative">
                   <div className="absolute inset-0 rounded-xl blur-xl opacity-20" style={{ background: 'linear-gradient(135deg, #00f2ff, #bd00ff)' }} />
                   <img src="./antigravity.png" alt="Antigravity Ops" className="relative z-10 w-full rounded-xl border group-hover:scale-[1.02] transition-transform duration-700" style={{ border: '1px solid rgba(0,242,255,0.15)' }} />
                 </div>
               </div>
             </div>
           </Link>

            {/* NeuroFlow AI Featured Card */}
            <Link to="/portfolio/neuroflow-ai" className="group block mb-8">
              <div className="relative rounded-2xl overflow-hidden border transition-all duration-500 group-hover:scale-[1.01]"
                style={{
                  background: 'linear-gradient(135deg, rgba(15,10,30,0.97) 0%, rgba(10,7,22,0.97) 100%)',
                  border: '1px solid rgba(124,58,237,0.2)',
                  boxShadow: '0 0 40px rgba(124,58,237,0.06)',
                }}>
                <div className="absolute inset-0 opacity-30"
                  style={{ backgroundImage: `linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)`, backgroundSize: '36px 36px' }} />
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px]" style={{ background: 'rgba(124,58,237,0.14)' }} />
                <div className="relative z-10 p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: 'linear-gradient(to right, #7c3aed, #06b6d4)' }}>🤖 AI-Native SaaS</span>
                      <span className="text-xs border px-2.5 py-1 rounded-full" style={{ borderColor: 'rgba(124,58,237,0.3)', background: 'rgba(124,58,237,0.05)', color: '#7c3aed' }}>Case Study</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3">NeuroFlow AI <span style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Operations Intelligence</span></h3>
                    <p className="text-gray-400 text-sm mb-5 leading-relaxed">Multi-agent AI platform — 65% overhead reduction, 94.7% auto-resolution, 12 AI agents running concurrently.</p>
                    <div className="flex flex-wrap gap-3 mb-5">
                      {[
                        { icon: <Brain className="w-3 h-3" />, label: 'AI Agent System', color: '#7c3aed' },
                        { icon: <Users className="w-3 h-3" />, label: 'Customer Ops', color: '#06b6d4' },
                        { icon: <Activity className="w-3 h-3" />, label: 'Live Analytics', color: '#10b981' },
                      ].map((pill, pi) => (
                        <span key={pi} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                          style={{ background: `${pill.color}12`, border: `1px solid ${pill.color}35`, color: pill.color }}>
                          {pill.icon} {pill.label}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-white px-5 py-2.5 rounded-full group-hover:shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all"
                      style={{ background: 'linear-gradient(to right, #7c3aed, #06b6d4)' }}>
                      View Full Case Study <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 rounded-xl blur-xl opacity-20" style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }} />
                    <img src="./neuroflow.png" alt="NeuroFlow AI" className="relative z-10 w-full rounded-xl border group-hover:scale-[1.02] transition-transform duration-700" style={{ border: '1px solid rgba(124,58,237,0.2)' }} />
                  </div>
                </div>
              </div>
            </Link>

            {/* HR Assistance AI Featured Card */}
            <Link to="/portfolio/hr-assistance-ai" className="group block mb-8">
              <div className="relative rounded-2xl overflow-hidden border transition-all duration-500 group-hover:scale-[1.01]"
                style={{
                  background: 'linear-gradient(135deg, rgba(10,24,20,0.97) 0%, rgba(5,15,12,0.97) 100%)',
                  border: '1px solid rgba(16,185,129,0.2)',
                  boxShadow: '0 0 40px rgba(16,185,129,0.06)',
                }}>
                <div className="absolute inset-0 opacity-30"
                  style={{ backgroundImage: `linear-gradient(rgba(16,185,129,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.06) 1px, transparent 1px)`, backgroundSize: '36px 36px' }} />
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px]" style={{ background: 'rgba(16,185,129,0.14)' }} />
                <div className="relative z-10 p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: 'linear-gradient(to right, #10b981, #06b6d4)' }}>👥 HR & Recruitment Automation</span>
                      <span className="text-xs border px-2.5 py-1 rounded-full" style={{ borderColor: 'rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.05)', color: '#10b981' }}>Case Study</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3">HR Assistance AI <span style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Workflow Platform</span></h3>
                    <p className="text-gray-400 text-sm mb-5 leading-relaxed">AI + n8n recruiting pipeline — 85% reduction in resume screening time, automated scheduling, custom dashboard.</p>
                    <div className="flex flex-wrap gap-3 mb-5">
                      {[
                        { icon: <Brain className="w-3 h-3" />, label: 'Gemini Resume Screening', color: '#10b981' },
                        { icon: <GitBranch className="w-3 h-3" />, label: 'n8n Auto-Scheduler', color: '#06b6d4' },
                        { icon: <Users className="w-3 h-3" />, label: 'Interactive Portal', color: '#6366f1' },
                      ].map((pill, pi) => (
                        <span key={pi} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                          style={{ background: `${pill.color}12`, border: `1px solid ${pill.color}35`, color: pill.color }}>
                          {pill.icon} {pill.label}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-white px-5 py-2.5 rounded-full group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all"
                      style={{ background: 'linear-gradient(to right, #10b981, #06b6d4)' }}>
                      View Full Case Study <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 rounded-xl blur-xl opacity-20" style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)' }} />
                    <img src="./hr-ai.png" alt="HR Assistance AI" className="relative z-10 w-full rounded-xl border group-hover:scale-[1.02] transition-transform duration-700" style={{ border: '1px solid rgba(16,185,129,0.2)' }} />
                  </div>
                </div>
              </div>
            </Link>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {recentWork.map((project, i) => (
               <a 
                 key={i} 
                 href={project.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group block"
               >
                 <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4 shadow-lg">
                   <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                      <span className="px-6 py-2 glass-panel rounded-full text-black dark:text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                        View Live <ExternalLink className="w-3 h-3" />
                      </span>
                   </div>
                   <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                   />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-aether-purple dark:group-hover:text-aether-accent transition-colors">{project.title}</h3>
                 <p className="text-gray-500 text-sm">{project.category}</p>
               </a>
             ))}
           </div>
           
           <div className="mt-8 text-center md:hidden">
              <Link to="/portfolio" className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium">View All Projects <ArrowRight className="w-4 h-4"/></Link>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-gray-900 dark:bg-aether-900">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black dark:from-black dark:to-aether-900" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Ready to Automate Your Business?</h2>
          <p className="text-xl text-gray-400 mb-10">Stop wasting hours on manual tasks. Let us build custom workflows that run on autopilot.</p>
          <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-aether-accent text-black font-bold text-lg rounded-full hover:bg-white transition-colors shadow-[0_0_30px_rgba(0,242,255,0.4)]">
            Start Your Automation <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};