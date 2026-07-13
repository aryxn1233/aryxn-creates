import React from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, 
  Brain, 
  Zap, 
  BarChart2, 
  Users,
  Megaphone,
  Smartphone,
  Search,
  PenTool,
  ChevronRight,
  LayoutTemplate,
  TerminalSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { title: 'AI Marketing', desc: 'Data-driven campaigns powered by machine learning to maximize ROI and lower acquisition costs.', icon: <BarChart2 className="w-8 h-8" /> },
  { title: 'Social Media Management', desc: 'Engaging content and community growth across all platforms to build loyal audiences.', icon: <Users className="w-8 h-8" /> },
  { title: 'AI Video Ads', desc: 'High-converting video creative generated and optimized by AI for platforms like TikTok and Meta.', icon: <Megaphone className="w-8 h-8" /> },
  { title: 'Web Development', desc: 'Premium, fast, and scalable websites built with modern stacks (Next.js, React).', icon: <TerminalSquare className="w-8 h-8" /> },
  { title: 'Mobile Apps', desc: 'Native and cross-platform mobile experiences for iOS and Android built for retention.', icon: <Smartphone className="w-8 h-8" /> },
  { title: 'Brand Identity & Strategy', desc: 'Complete visual systems, from logos to typography and voice, designed to stand out.', icon: <PenTool className="w-8 h-8" /> },
  { title: 'SEO & Performance', desc: 'Technical and content-driven search engine optimization to dominate organic search.', icon: <Search className="w-8 h-8" /> },
  { title: 'AI Automation', desc: 'Custom workflows to eliminate manual tasks and scale your business operations.', icon: <Zap className="w-8 h-8" /> },
  { title: 'SaaS Development', desc: 'End-to-end development of scalable SaaS products and complex web applications.', icon: <GitBranch className="w-8 h-8" /> },
  { title: 'AI Chatbots & Agents', desc: 'Intelligent conversational agents trained on your data to handle sales and support 24/7.', icon: <Brain className="w-8 h-8" /> },
  { title: 'UI/UX Design', desc: 'Intuitive, stunning user interfaces designed to maximize conversion and user delight.', icon: <LayoutTemplate className="w-8 h-8" /> },
];

export const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight"
          >
            Our <span className="text-aether-accent">Expertise</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            We don't just build websites; we build ecosystems. From AI-driven marketing campaigns to custom software, we cover the entire digital landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              key={idx}
              className="glass-panel p-8 rounded-3xl bg-white dark:bg-aether-900/20 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 group border border-gray-200 dark:border-white/5 hover:border-aether-accent/50 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-aether-accent/5 rounded-full blur-3xl group-hover:bg-aether-accent/20 transition-all"></div>
              
              <div className="mb-6 text-aether-accent bg-aether-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="mt-24 rounded-3xl p-12 text-center relative overflow-hidden bg-gray-900 dark:bg-[#0a0a0a] border border-gray-800 dark:border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aether-accent/10 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Need a Custom Solution?</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
              Every brand is unique. Let's hop on a call to discuss your specific challenges and how our ecosystem of services can drive your growth.
            </p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-black bg-aether-accent hover:bg-white transition-colors shadow-[0_0_30px_rgba(0,255,102,0.3)]">
              Book a Discovery Call <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};