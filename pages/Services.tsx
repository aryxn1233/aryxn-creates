import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Code, Cpu, ShoppingBag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Monitor className="w-8 h-8 text-aether-purple dark:text-aether-accent" />,
    title: "Premium Web Design",
    desc: "Bespoke, cinematic websites designed to position you as the authority in your niche.",
    price: "Starts at $1k"
  },
  {
    icon: <Smartphone className="w-8 h-8 text-aether-accent dark:text-aether-purple" />,
    title: "UI/UX Design",
    desc: "User-centric interfaces for mobile apps and SaaS platforms that users love.",
    price: "Starts at $4k"
  },
  {
    icon: <Code className="w-8 h-8 text-yellow-600 dark:text-aether-gold" />,
    title: "Custom Development",
    desc: "React, Next.js, and Node.js solutions. Fast, scalable, and SEO-optimized code.",
    price: "Custom Quote"
  },
  {
    icon: <Cpu className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
    title: "AI Integration",
    desc: "Chatbots, automation, and personalized content engines powered by LLMs.",
    price: "Starts at $2k"
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-pink-500 dark:text-pink-400" />,
    title: "E-Commerce",
    desc: "High-conversion Shopify & Woocommerce stores tailored for maximum AOV.",
    price: "Starts at $6k"
  },
  {
    icon: <Search className="w-8 h-8 text-green-600 dark:text-green-400" />,
    title: "SEO & Performance",
    desc: "Technical SEO and speed optimization to rank higher and load faster.",
    price: "Retainer Based"
  }
];

export const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">Digital <span className="gradient-text">Dominance</span></h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We don't sell hours. We sell outcomes. Our suite of services is designed to handle every aspect of your digital growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
              className="glass-panel p-8 rounded-2xl bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group border border-gray-200 dark:border-white/5 hover:border-aether-purple/30 dark:hover:border-aether-accent/30 shadow-lg dark:shadow-none"
            >
              <div className="mb-6 bg-gray-100 dark:bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.desc}
              </p>
              <div className="flex items-center justify-between border-t border-gray-200 dark:border-white/10 pt-4">
                <span className="text-xs font-mono text-gray-500">{service.price}</span>
                <Link to="/contact" className="text-sm font-bold text-gray-900 dark:text-white hover:text-aether-purple dark:hover:text-aether-accent transition-colors">
                  Inquire &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry Solutions Section */}
        <div className="mt-32">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Solutions by Industry</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Medical', 'Real Estate', 'Restaurants', 'Legal'].map((ind) => (
                    <div key={ind} className="h-40 relative rounded-xl overflow-hidden group cursor-pointer shadow-md">
                        <img src={`https://picsum.photos/seed/${ind}/400/300`} className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" alt={ind} />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                            <span className="text-xl font-bold text-white">{ind}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};