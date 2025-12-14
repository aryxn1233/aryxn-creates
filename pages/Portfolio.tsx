import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Smile',
    category: 'Medical',
    image: './smile.png',
    description: 'A patient-first digital portal for a leading dental surgery.',
    tags: ['UI/UX', 'Booking System', 'React'],
    liveUrl: 'https://smile-nine.vercel.app'
  },
  {
    id: '2',
    title: 'Luxestate',
    category: 'Real Estate',
    image: './luke.png',
    description: 'Luxury property showcase with virtual tour integration.',
    tags: ['Web Design', '3D Tours', 'Lead Gen'],
    liveUrl: 'https://luxestate-tau.vercel.app'
  },
  {
    id: '3',
    title: 'Aura Fitness',
    category: 'Fitness',
    image: './aura.png',
    description: 'High-energy membership site for a boutique gym brand.',
    tags: ['Membership', 'E-commerce', 'Video'],
    liveUrl: 'https://aura-fittness.vercel.app'
  },
  {
    id: '4',
    title: 'Resto',
    category: 'Restaurant',
    image: './resto.png',
    description: 'Immersive menu experience with table reservation engine.',
    tags: ['Reservations', 'Menu Design', 'Photography'],
    liveUrl: 'https://resto-delta-six.vercel.app'
  },
  {
    id: '5',
    title: 'Ink and Soul',
    category: 'Tattoo',
    image: './ink.png',
    description: 'Dark, edgy portfolio for an award-winning tattoo artist.',
    tags: ['Portfolio', 'Gallery', 'Booking'],
    liveUrl: 'https://ink-and-soul.vercel.app'
  },
  {
    id: '6',
    title: 'Stox',
    category: 'Tech',
    image: './bot.png',
    description: 'Real-time trading analytics dashboard with live market data.',
    tags: ['SaaS', 'Dashboard', 'Data Viz'],
    liveUrl: 'https://tradingboot.netlify.app/dashboard'
  },
];

const categories = ['All', 'Medical', 'Real Estate', 'Fitness', 'Restaurant', 'Tech', 'Tattoo'];

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50 dark:bg-aether-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">Our <span className="gradient-text">Masterpieces</span></h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Explore a curated selection of our finest digital experiences. Each project represents a unique problem solved through design and technology.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                  ? 'bg-aether-900 dark:bg-white text-white dark:text-black scale-105' 
                  : 'bg-gray-200 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-white/10 hover:text-black dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={project.id}
              className="group cursor-pointer"
            >
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5 border border-gray-200 dark:border-white/5 shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
                    <span className="text-aether-accent font-bold mb-2 flex items-center gap-2">
                      View Live Site <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-aether-purple dark:group-hover:text-aether-accent transition-colors">{project.title}</h3>
                    <span className="text-xs font-mono text-gray-500 border border-gray-300 dark:border-white/10 px-2 py-1 rounded uppercase">{project.category}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs text-gray-500">#{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};