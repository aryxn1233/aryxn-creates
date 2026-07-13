import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronRight, 
  ExternalLink, 
  Zap, 
  GitBranch, 
  BarChart2, 
  Brain, 
  Users, 
  Activity,
  Megaphone,
  Smartphone,
  Search,
  PenTool,
  CheckCircle2
} from 'lucide-react';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
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
      title: 'By Sugamjit Kaur',
      category: 'Fashion • Brand Portfolio',
      image: './sugam.png',
      link: 'https://bysugamjitkaur.vercel.app'
    },
    {
      title: 'Beauty From Ashes',
      category: 'Tattoo • Gallery Showcase',
      image: './beautyashes.png',
      link: 'https://beautyfromashes.vercel.app'
    }
  ];

  const services = [
    { title: 'AI Marketing', desc: 'Data-driven campaigns powered by machine learning to maximize ROI.', icon: <BarChart2 /> },
    { title: 'Social Media Management', desc: 'Engaging content and community growth across all platforms.', icon: <Users /> },
    { title: 'AI Video Ads', desc: 'High-converting video creative generated and optimized by AI.', icon: <Megaphone /> },
    { title: 'Web Development', desc: 'Premium, fast, and scalable websites built with modern stacks.', icon: <GitBranch /> },
    { title: 'Mobile Apps', desc: 'Native and cross-platform mobile experiences for iOS and Android.', icon: <Smartphone /> },
    { title: 'Brand Identity', desc: 'Complete visual systems, from logos to typography and voice.', icon: <PenTool /> },
    { title: 'SEO', desc: 'Technical and content-driven search engine optimization.', icon: <Search /> },
    { title: 'AI Automation', desc: 'Custom workflows to eliminate manual tasks and scale operations.', icon: <Zap /> },
  ];

  return (
    <div className="w-full bg-gray-50 dark:bg-black transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-50 dark:bg-black z-0 transition-colors duration-300" />
        
        {/* Banner blended into background */}
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 flex justify-center items-center pointer-events-none">
           <img src="/banner.png" alt="ARYXNCREATES Banner" className="w-full h-full object-cover blur-sm mix-blend-screen" />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-black"></div>
        </div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aether-accent/20 rounded-full blur-[128px] animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aether-purple/20 rounded-full blur-[128px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
            <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-aether-accent/30 bg-aether-accent/5 text-aether-accent text-sm font-medium uppercase tracking-wider mb-4">
              Premium AI-Powered Agency
            </motion.div>
            
            <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight text-gray-900 dark:text-white">
              Imagine Your Brand. <br />
              <span className="text-aether-accent">We Build Everything Else.</span>
            </motion.h1>

            <motion.p variants={item} className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              From AI-powered marketing to websites, apps, content, branding, automation, and high-converting video ads—we become your complete digital growth partner.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/contact" className="px-8 py-4 bg-aether-accent text-black font-bold rounded-full text-lg hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,255,102,0.3)]">
                Book a Discovery Call
              </Link>
              <Link to="/portfolio" className="px-8 py-4 glass-panel text-gray-900 dark:text-white font-medium rounded-full text-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-all flex items-center gap-2 group">
                View Our Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white dark:bg-black border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">Why Partner With Us</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">We deliver excellence at the intersection of creativity and AI.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {[
                 'AI-first workflows', 'Faster turnaround', 'Creative excellence', 'Data-driven decisions', 
                 'Scalable systems', 'Transparent communication', 'Dedicated support', 'End-to-end execution'
               ].map((feature, i) => (
                 <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-aether-900/30 border border-gray-200 dark:border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-aether-accent shrink-0" />
                    <span className="font-medium text-gray-900 dark:text-gray-200">{feature}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50 dark:bg-black transition-colors duration-300 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Our Complete <span className="text-aether-accent">Ecosystem</span></h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We handle every aspect of your brand's digital presence so you can focus on the vision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {services.map((service, idx) => (
               <div key={idx} className="group p-8 rounded-3xl bg-white dark:bg-aether-900/20 border border-gray-200 dark:border-white/5 hover:border-aether-accent/50 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-aether-accent/5 rounded-full blur-3xl group-hover:bg-aether-accent/20 transition-all"></div>
                 <div className="text-aether-accent mb-6 bg-aether-accent/10 p-3 rounded-2xl w-fit">{service.icon}</div>
                 <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h4>
                 <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{service.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Selected Work Preview */}
      <section className="py-24 bg-white dark:bg-[#050505] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex justify-between items-end mb-12">
             <div>
               <span className="text-aether-accent text-sm font-bold tracking-widest uppercase mb-2 block">Selected Work</span>
               <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">Recent Masterpieces</h2>
             </div>
             <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-gray-900 dark:text-white hover:text-aether-accent transition-colors">
               View All Projects <ArrowRight className="w-4 h-4" />
             </Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {recentWork.map((project, i) => (
               <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="group block">
                 <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5 shadow-lg border border-gray-200 dark:border-white/5">
                   <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                      <span className="px-6 py-2 glass-panel rounded-full text-black dark:text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                        View Live <ExternalLink className="w-4 h-4" />
                      </span>
                   </div>
                   <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-aether-accent transition-colors">{project.title}</h3>
                 <p className="text-gray-500 text-sm mt-1">{project.category}</p>
               </a>
             ))}
           </div>
           
           <div className="mt-8 text-center md:hidden">
              <Link to="/portfolio" className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium">View All Projects <ArrowRight className="w-4 h-4"/></Link>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-gray-900 dark:bg-[#0a0a0a] border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black dark:from-[#0a0a0a] dark:to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aether-accent/10 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">Ready to Build Something Extraordinary?</h2>
          <p className="text-xl text-gray-400 mb-10">We become your dedicated growth partner to scale your brand with premium design and AI technology.</p>
          <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-aether-accent text-black font-bold text-lg rounded-full hover:bg-white transition-colors shadow-[0_0_40px_rgba(0,255,102,0.4)]">
            Start Your Project <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};