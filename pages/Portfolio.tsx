import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, ChevronRight, Zap, GitBranch, BarChart2, Brain, Users, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'By Sugamjit Kaur',
    category: 'Fashion',
    image: './sugam.png',
    description: 'Bespoke fashion portfolio showcase and lookbook experience.',
    tags: ['Fashion', 'Brand Portfolio', 'Web Design'],
    liveUrl: 'https://bysugamjitkaur.vercel.app'
  },
  {
    id: '2',
    title: 'Beauty From Ashes',
    category: 'Tattoo',
    image: './beautyashes.png',
    description: 'High-contrast digital showcase for an elite tattoo artist studio.',
    tags: ['Tattoo', 'Gallery', 'Art Direction'],
    liveUrl: 'https://beautyfromashes.vercel.app'
  },
  {
    id: '3',
    title: 'Smile',
    category: 'Medical',
    image: './smile.png',
    description: 'Patient-first digital portal for a modern dental practice.',
    tags: ['Healthcare', 'Booking Engine', 'React'],
    liveUrl: 'https://smile-nine.vercel.app'
  },
  {
    id: '4',
    title: 'Luxestate',
    category: 'Real Estate',
    image: './luke.png',
    description: 'High-end architectural real estate showcase.',
    tags: ['Real Estate', '3D Tours', 'Web Experience'],
    liveUrl: 'https://luxestate-tau.vercel.app'
  },
  {
    id: '5',
    title: 'Aura Fitness',
    category: 'Fitness',
    image: './aura.png',
    description: 'High-energy brand portal for a boutique fitness studio.',
    tags: ['Membership', 'Brand System', 'E-Commerce'],
    liveUrl: 'https://aura-fittness.vercel.app'
  },
  {
    id: '6',
    title: 'Resto',
    category: 'Restaurant',
    image: './resto.png',
    description: 'Immersive menu & dining experience platform.',
    tags: ['Hospitality', 'Menu Design', 'Reservations'],
    liveUrl: 'https://resto-delta-six.vercel.app'
  },
  {
    id: '7',
    title: 'Ink and Soul',
    category: 'Tattoo',
    image: './ink.png',
    description: 'Edgy artist portfolio showcase.',
    tags: ['Tattoo', 'Gallery', 'Portfolio'],
    liveUrl: 'https://ink-and-soul.vercel.app'
  },
  {
    id: '8',
    title: 'Stox',
    category: 'Tech',
    image: './bot.png',
    description: 'Real-time analytics dashboard interface.',
    tags: ['SaaS', 'Analytics', 'Dashboard'],
    liveUrl: 'https://tradingboot.netlify.app/dashboard'
  },
];

const categories = ['All', 'Enterprise', 'Fashion', 'Tattoo', 'Medical', 'Real Estate', 'Fitness', 'Restaurant', 'Tech'];

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' || filter === 'Enterprise'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#161719] text-[#F5F5F5] selection:bg-[#A8F000] selection:text-[#161719]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <span className="text-xs font-mono text-[#A8F000] tracking-widest uppercase block mb-2">CASE STUDIES</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#F5F5F5] uppercase tracking-tight mb-6">
            SELECTED WORK
          </h1>
          <p className="text-[#9A9B9E] text-lg font-light leading-relaxed">
            A curated showcase of digital experiences, brand identity systems, automated workflows, and high-performance digital platforms built by ARYXN CREATES.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-3 mb-16 border-b border-white/10 pb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
                filter === cat
                  ? 'bg-[#A8F000] text-[#161719] font-bold'
                  : 'bg-[#1F2023] text-[#9A9B9E] hover:text-[#F5F5F5] border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FEATURED CASE STUDY: ANTIGRAVITY OPS */}
        {(filter === 'All' || filter === 'Enterprise') && (
          <div className="mb-16">
            <Link to="/portfolio/antigravity-ops" className="group block">
              <div className="bg-[#1F2023] border border-white/10 rounded-2xl p-8 md:p-12 hover:border-[#A8F000]/50 transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex gap-3">
                      <span className="px-3 py-1 bg-[#A8F000] text-[#161719] text-[10px] font-mono font-bold uppercase tracking-wider rounded-full">
                        FEATURED CASE STUDY
                      </span>
                      <span className="px-3 py-1 bg-[#161719] text-[#9A9B9E] text-[10px] font-mono uppercase tracking-wider rounded-full border border-white/10">
                        ENTERPRISE AUTOMATION
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F5F5] uppercase tracking-tight leading-tight group-hover:text-[#A8F000] transition-colors">
                      ANTIGRAVITY OPS PLATFORM
                    </h2>

                    <p className="text-[#9A9B9E] text-base font-light leading-relaxed">
                      Enterprise-grade AI workflow orchestration platform built to streamline complex multi-step operations and system integrations.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {['Next.js', 'React', 'Node.js', 'n8n', 'PostgreSQL'].map(tag => (
                        <span key={tag} className="text-xs font-mono text-[#9A9B9E] px-3 py-1 bg-[#161719] rounded-md border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A8F000] font-bold tracking-wider uppercase pt-2">
                      <span>READ FULL CASE STUDY</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="aspect-[16/10] overflow-hidden rounded-xl bg-[#161719] border border-white/10">
                      <img 
                        src="./antigravity.png" 
                        alt="Antigravity Ops" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* NEUROFLOW AI CASE STUDY */}
        {(filter === 'All' || filter === 'Enterprise') && (
          <div className="mb-16">
            <Link to="/portfolio/neuroflow-ai" className="group block">
              <div className="bg-[#1F2023] border border-white/10 rounded-2xl p-8 md:p-12 hover:border-[#A8F000]/50 transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex gap-3">
                      <span className="px-3 py-1 bg-[#A8F000] text-[#161719] text-[10px] font-mono font-bold uppercase tracking-wider rounded-full">
                        FEATURED SYSTEM
                      </span>
                      <span className="px-3 py-1 bg-[#161719] text-[#9A9B9E] text-[10px] font-mono uppercase tracking-wider rounded-full border border-white/10">
                        AI SAAS PLATFORM
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F5F5] uppercase tracking-tight leading-tight group-hover:text-[#A8F000] transition-colors">
                      NEUROFLOW AI INTELLIGENCE
                    </h2>

                    <p className="text-[#9A9B9E] text-base font-light leading-relaxed">
                      AI-native workflow orchestration platform with multi-agent intelligence and automated operation workflows.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {['Next.js', 'React', 'OpenAI', 'Prisma', 'Redis'].map(tag => (
                        <span key={tag} className="text-xs font-mono text-[#9A9B9E] px-3 py-1 bg-[#161719] rounded-md border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A8F000] font-bold tracking-wider uppercase pt-2">
                      <span>READ FULL CASE STUDY</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="aspect-[16/10] overflow-hidden rounded-xl bg-[#161719] border border-white/10">
                      <img 
                        src="./neuroflow.png" 
                        alt="NeuroFlow AI" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* HR ASSISTANCE AI CASE STUDY */}
        {(filter === 'All' || filter === 'Enterprise') && (
          <div className="mb-16">
            <Link to="/portfolio/hr-assistance-ai" className="group block">
              <div className="bg-[#1F2023] border border-white/10 rounded-2xl p-8 md:p-12 hover:border-[#A8F000]/50 transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex gap-3">
                      <span className="px-3 py-1 bg-[#A8F000] text-[#161719] text-[10px] font-mono font-bold uppercase tracking-wider rounded-full">
                        AUTOMATION PLATFORM
                      </span>
                      <span className="px-3 py-1 bg-[#161719] text-[#9A9B9E] text-[10px] font-mono uppercase tracking-wider rounded-full border border-white/10">
                        RECRUITMENT TECH
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F5F5] uppercase tracking-tight leading-tight group-hover:text-[#A8F000] transition-colors">
                      HR ASSISTANCE AI
                    </h2>

                    <p className="text-[#9A9B9E] text-base font-light leading-relaxed">
                      Automated candidate screening, interview scheduling, and evaluation pipeline powered by Gemini & n8n.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {['NestJS', 'React', 'Gemini AI', 'n8n'].map(tag => (
                        <span key={tag} className="text-xs font-mono text-[#9A9B9E] px-3 py-1 bg-[#161719] rounded-md border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A8F000] font-bold tracking-wider uppercase pt-2">
                      <span>READ FULL CASE STUDY</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="aspect-[16/10] overflow-hidden rounded-xl bg-[#161719] border border-white/10">
                      <img 
                        src="./hr-ai.png" 
                        alt="HR Assistance AI" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* REGULAR PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              className="group cursor-pointer"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full space-y-4"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#1F2023] border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#161719]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-[#A8F000] text-[#161719] text-xs font-mono font-bold tracking-wider uppercase rounded-full flex items-center gap-2">
                      VISIT SITE <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#A8F000] tracking-widest uppercase block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#F5F5F5] group-hover:text-[#A8F000] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ExternalLink className="w-4 h-4 text-[#9A9B9E] opacity-50 group-hover:opacity-100" />
                  </h3>
                  <p className="text-xs text-[#9A9B9E] font-light mt-1">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap pt-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono text-[#9A9B9E] px-2 py-0.5 bg-[#1F2023] rounded border border-white/5">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};