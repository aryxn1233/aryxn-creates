import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Code, BarChart, ChevronRight, ExternalLink } from 'lucide-react';

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
              Premium Web Design Agency
            </motion.div>
            
            <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight text-gray-900 dark:text-white">
              We Build Websites That <br />
              <span className="gradient-text">Feel Like Experiences.</span>
            </motion.h1>

            <motion.p variants={item} className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Transform your brand with a cinematic, high-conversion digital presence. 
              We blend elite design with sales psychology.
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
               <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">More Than Just Code.<br/>Business Solutions.</h2>
               <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                 We don't just push pixels. We analyze your industry, identify your bottlenecks, and build digital platforms that solve real business problems.
               </p>
               <div className="space-y-6">
                  {[
                    { title: 'Brand Authority', desc: 'Position yourself as the market leader with premium aesthetics.', icon: <Monitor className="text-aether-purple dark:text-aether-accent" /> },
                    { title: 'High Conversion', desc: 'Sales funnels integrated directly into your design.', icon: <BarChart className="text-aether-accent dark:text-aether-purple" /> },
                    { title: 'Scalable Tech', desc: 'Built on React & Next.js for speed and SEO dominance.', icon: <Code className="text-yellow-600 dark:text-aether-gold" /> },
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Ready to Dominate Your Industry?</h2>
          <p className="text-xl text-gray-400 mb-10">Stop losing customers to outdated design. Let's build a platform that converts.</p>
          <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-aether-accent text-black font-bold text-lg rounded-full hover:bg-white transition-colors shadow-[0_0_30px_rgba(0,242,255,0.4)]">
            Start Your Project <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};