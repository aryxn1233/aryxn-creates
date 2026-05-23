import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Zap, BarChart2, GitBranch, ChevronRight, Brain, Users, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
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

const categories = ['All', 'Enterprise', 'Medical', 'Real Estate', 'Fitness', 'Restaurant', 'Tech', 'Tattoo'];

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' || filter === 'Enterprise'
    ? filter === 'Enterprise'
      ? [] // featured card handles Enterprise, show nothing extra
      : projects
    : projects.filter(p => p.category === filter);

  const showFeatured = filter === 'All' || filter === 'Enterprise';

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50 dark:bg-aether-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Our <span className="gradient-text">Masterpieces</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Explore a curated selection of our automated workflow systems, custom AI agent integrations, and enterprise operation dashboards. We build robust systems that run on autopilot.
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
                  ? cat === 'Enterprise'
                    ? 'text-black scale-105'
                    : 'bg-aether-900 dark:bg-white text-white dark:text-black scale-105'
                  : 'bg-gray-200 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-white/10 hover:text-black dark:hover:text-white'
              }`}
              style={filter === cat && cat === 'Enterprise'
                ? { background: 'linear-gradient(to right, #00f2ff, #bd00ff)' }
                : {}
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── FEATURED ENTERPRISE CARDS ── */}
        {showFeatured && (
          <>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <Link to="/portfolio/antigravity-ops" className="group block">
              <div
                className="relative rounded-3xl overflow-hidden border transition-all duration-500 group-hover:scale-[1.01]"
                style={{
                  background: 'linear-gradient(135deg, rgba(10,10,15,0.97) 0%, rgba(19,13,31,0.97) 100%)',
                  border: '1px solid rgba(0,242,255,0.2)',
                  boxShadow: '0 0 60px rgba(0,242,255,0.06), 0 32px 80px rgba(0,0,0,0.4)',
                }}
              >
                {/* Animated grid */}
                <div className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,242,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,242,255,0.05) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                  }}
                />
                {/* Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
                  style={{ background: 'rgba(189,0,255,0.12)' }} />
                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
                  style={{ background: 'rgba(0,242,255,0.08)' }} />

                <div className="relative z-10 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  {/* Left content */}
                  <div>
                    {/* Badges */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-black"
                        style={{ background: 'linear-gradient(to right, #00f2ff, #bd00ff)' }}>
                        ⭐ Featured Enterprise Project
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium text-aether-accent border"
                        style={{ borderColor: 'rgba(0,242,255,0.3)', background: 'rgba(0,242,255,0.05)' }}>
                        AI • Automation • SaaS
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                      Antigravity Ops<br />
                      <span className="gradient-text">Automation Platform</span>
                    </h2>

                    <p className="text-gray-400 text-base leading-relaxed mb-8">
                      Enterprise-grade AI workflow orchestration platform handling 2.3M+ daily operations.
                      Reduced manual processing by 78% for Fortune 500 clients across healthcare, finance, and logistics.
                    </p>

                    {/* Mini metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {[
                        { value: '78%', label: 'Ops Reduced', color: '#00f2ff' },
                        { value: '2.3M', label: 'Workflows/day', color: '#bd00ff' },
                        { value: '99.97%', label: 'Uptime SLA', color: '#51cf66' },
                      ].map((s, i) => (
                        <div key={i} className="text-center p-3 rounded-xl"
                          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div className="text-lg font-black" style={{ color: s.color }}>{s.value}</div>
                          <div className="text-xs text-gray-600 mt-1">{s.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {['Next.js', 'React', 'Node.js', 'AI/OCR', 'n8n', 'PostgreSQL'].map(tag => (
                        <span key={tag} className="text-xs text-gray-500 border border-white/10 px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-black transition-all group-hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]"
                      style={{ background: 'linear-gradient(to right, #00f2ff, #bd00ff)' }}>
                      View Full Case Study <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Right: Dashboard preview image */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl blur-2xl opacity-30"
                      style={{ background: 'linear-gradient(135deg, #00f2ff, #bd00ff)' }} />
                    <img
                      src="./antigravity.png"
                      alt="Antigravity Ops Dashboard"
                      className="relative z-10 w-full rounded-2xl border transition-transform duration-700 group-hover:scale-[1.02]"
                      style={{ border: '1px solid rgba(0,242,255,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
                    />
                    {/* Live indicator overlay */}
                    <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                      style={{ background: 'rgba(10,10,15,0.9)', border: '1px solid rgba(81,207,102,0.4)', color: '#51cf66' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Live Platform
                    </div>

                    {/* Feature pills floating */}
                    <div className="absolute -bottom-4 -left-4 z-20 flex flex-col gap-2">
                      {[
                        { icon: <Zap className="w-3 h-3" />, label: 'AI Processing', color: '#00f2ff' },
                        { icon: <GitBranch className="w-3 h-3" />, label: 'Workflow Engine', color: '#bd00ff' },
                        { icon: <BarChart2 className="w-3 h-3" />, label: 'Live Analytics', color: '#51cf66' },
                      ].map((pill, i) => (
                        <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white"
                          style={{ background: 'rgba(10,10,15,0.95)', border: `1px solid ${pill.color}40`, color: pill.color, boxShadow: `0 4px 16px rgba(0,0,0,0.4)` }}>
                          {pill.icon} {pill.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom strip */}
                <div className="relative z-10 px-8 md:px-12 py-4 flex items-center justify-between"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.3)' }}>
                  <div className="flex items-center gap-6">
                    <span className="text-xs text-gray-600">Full case study available</span>
                    <span className="text-xs text-gray-600">•</span>
                    <span className="text-xs text-gray-600">Enterprise SaaS</span>
                    <span className="text-xs text-gray-600">•</span>
                    <span className="text-xs text-gray-600">2024 — 2025</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-aether-accent text-xs font-bold group-hover:gap-2.5 transition-all">
                    Explore <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ── NEUROFLOW AI FEATURED CARD ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <Link to="/portfolio/neuroflow-ai" className="group block">
              <div
                className="relative rounded-3xl overflow-hidden border transition-all duration-500 group-hover:scale-[1.01]"
                style={{
                  background: 'linear-gradient(135deg, rgba(15,10,30,0.97) 0%, rgba(10,7,22,0.97) 100%)',
                  border: '1px solid rgba(124,58,237,0.2)',
                  boxShadow: '0 0 60px rgba(124,58,237,0.06), 0 32px 80px rgba(0,0,0,0.4)',
                }}
              >
                {/* Animated grid */}
                <div className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage: `linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                  }}
                />
                {/* Glow blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
                  style={{ background: 'rgba(124,58,237,0.14)' }} />
                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
                  style={{ background: 'rgba(6,182,212,0.07)' }} />

                <div className="relative z-10 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  {/* Left content */}
                  <div>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white"
                        style={{ background: 'linear-gradient(to right, #7c3aed, #06b6d4)' }}>
                        🤖 AI-Native SaaS Platform
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium border"
                        style={{ borderColor: 'rgba(124,58,237,0.35)', background: 'rgba(124,58,237,0.08)', color: '#7c3aed' }}>
                        AI Ops • Workflow Intelligence
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                      NeuroFlow AI<br />
                      <span style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Operations Intelligence
                      </span>
                    </h2>

                    <p className="text-gray-400 text-base leading-relaxed mb-8">
                      AI-native workflow orchestration platform with multi-agent systems, automated customer operations,
                      and enterprise workflow intelligence — built for high-growth SaaS teams.
                    </p>

                    {/* Mini metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {[
                        { value: '65%', label: 'Overhead Reduced', color: '#7c3aed' },
                        { value: '94.7%', label: 'AI Resolution', color: '#10b981' },
                        { value: '83%', label: 'Faster Response', color: '#06b6d4' },
                      ].map((s, i) => (
                        <div key={i} className="text-center p-3 rounded-xl"
                          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div className="text-lg font-black" style={{ color: s.color }}>{s.value}</div>
                          <div className="text-xs text-gray-600 mt-1">{s.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {['Next.js', 'React', 'Node.js', 'OpenAI', 'Prisma', 'Redis', 'WebSockets'].map(tag => (
                        <span key={tag} className="text-xs text-gray-500 border border-white/10 px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white transition-all group-hover:shadow-[0_0_30px_rgba(124,58,237,0.4)]"
                      style={{ background: 'linear-gradient(to right, #7c3aed, #06b6d4)' }}>
                      View Full Case Study <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Right: Dashboard preview image */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl blur-2xl opacity-25"
                      style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }} />
                    <img
                      src="./neuroflow.png"
                      alt="NeuroFlow AI Dashboard"
                      className="relative z-10 w-full rounded-2xl border transition-transform duration-700 group-hover:scale-[1.02]"
                      style={{ border: '1px solid rgba(124,58,237,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
                    />
                    {/* Live indicator */}
                    <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                      style={{ background: 'rgba(15,10,30,0.9)', border: '1px solid rgba(16,185,129,0.4)', color: '#10b981' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      12 Agents Active
                    </div>

                    {/* Feature pills */}
                    <div className="absolute -bottom-4 -left-4 z-20 flex flex-col gap-2">
                      {[
                        { icon: <Brain className="w-3 h-3" />, label: 'AI Agent Orchestration', color: '#7c3aed' },
                        { icon: <Users className="w-3 h-3" />, label: 'Customer Ops Automation', color: '#06b6d4' },
                        { icon: <Activity className="w-3 h-3" />, label: 'Real-time Intelligence', color: '#10b981' },
                      ].map((pill, i) => (
                        <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                          style={{ background: 'rgba(15,10,30,0.95)', border: `1px solid ${pill.color}40`, color: pill.color, boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}>
                          {pill.icon} {pill.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom strip */}
                <div className="relative z-10 px-8 md:px-12 py-4 flex items-center justify-between"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.3)' }}>
                  <div className="flex items-center gap-6">
                    <span className="text-xs text-gray-600">Full case study available</span>
                    <span className="text-xs text-gray-600">•</span>
                    <span className="text-xs text-gray-600">AI SaaS Platform</span>
                    <span className="text-xs text-gray-600">•</span>
                    <span className="text-xs text-gray-600">2025</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold group-hover:gap-2.5 transition-all" style={{ color: '#7c3aed' }}>
                    Explore <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ── HR ASSISTANCE AI FEATURED CARD ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <Link to="/portfolio/hr-assistance-ai" className="group block">
              <div
                className="relative rounded-3xl overflow-hidden border transition-all duration-500 group-hover:scale-[1.01]"
                style={{
                  background: 'linear-gradient(135deg, rgba(10,24,20,0.97) 0%, rgba(5,15,12,0.97) 100%)',
                  border: '1px solid rgba(16,185,129,0.2)',
                  boxShadow: '0 0 60px rgba(16,185,129,0.06), 0 32px 80px rgba(0,0,0,0.4)',
                }}
              >
                {/* Animated grid */}
                <div className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage: `linear-gradient(rgba(16,185,129,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.06) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                  }}
                />
                {/* Glow blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
                  style={{ background: 'rgba(16,185,129,0.14)' }} />
                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
                  style={{ background: 'rgba(6,182,212,0.07)' }} />

                <div className="relative z-10 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  {/* Left content */}
                  <div>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white"
                        style={{ background: 'linear-gradient(to right, #10b981, #06b6d4)' }}>
                        👥 HR & Recruitment Automation
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium border"
                        style={{ borderColor: 'rgba(16,185,129,0.35)', background: 'rgba(16,185,129,0.08)', color: '#10b981' }}>
                        AI Recruitment • n8n Flows
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                      HR Assistance AI<br />
                      <span style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Workflow Platform
                      </span>
                    </h2>

                    <p className="text-gray-400 text-base leading-relaxed mb-8">
                      AI-native recruitment automation platform leveraging n8n, Gemini, and NestJS to screen resumes, auto-schedule interviews, and analyze candidates.
                    </p>

                    {/* Mini metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {[
                        { value: '85%', label: 'Screening Time Saved', color: '#10b981' },
                        { value: '0', label: 'Manual Scheduling', color: '#06b6d4' },
                        { value: '98%', label: 'Candidate Sat', color: '#6366f1' },
                      ].map((s, i) => (
                        <div key={i} className="text-center p-3 rounded-xl"
                          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div className="text-lg font-black" style={{ color: s.color }}>{s.value}</div>
                          <div className="text-xs text-gray-600 mt-1">{s.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {['NestJS', 'React', 'Gemini AI', 'n8n', 'D-ID', 'PostgreSQL'].map(tag => (
                        <span key={tag} className="text-xs text-gray-500 border border-white/10 px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white transition-all group-hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                      style={{ background: 'linear-gradient(to right, #10b981, #06b6d4)' }}>
                      View Full Case Study <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Right: Dashboard preview image */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl blur-2xl opacity-25"
                      style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)' }} />
                    <img
                      src="./hr-ai.png"
                      alt="HR Assistance AI Dashboard"
                      className="relative z-10 w-full rounded-2xl border transition-transform duration-700 group-hover:scale-[1.02]"
                      style={{ border: '1px solid rgba(16,185,129,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
                    />
                    {/* Live indicator */}
                    <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                      style={{ background: 'rgba(10,24,20,0.9)', border: '1px solid rgba(16,185,129,0.4)', color: '#10b981' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      n8n Powered
                    </div>

                    {/* Feature pills */}
                    <div className="absolute -bottom-4 -left-4 z-20 flex flex-col gap-2">
                      {[
                        { icon: <Brain className="w-3 h-3" />, label: 'Gemini Resume Screening', color: '#10b981' },
                        { icon: <GitBranch className="w-3 h-3" />, label: 'n8n Auto-Scheduler', color: '#06b6d4' },
                        { icon: <Users className="w-3 h-3" />, label: 'Interactive Dashboard', color: '#6366f1' },
                      ].map((pill, i) => (
                        <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                          style={{ background: 'rgba(10,24,20,0.95)', border: `1px solid ${pill.color}40`, color: pill.color, boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}>
                          {pill.icon} {pill.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom strip */}
                <div className="relative z-10 px-8 md:px-12 py-4 flex items-center justify-between"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.3)' }}>
                  <div className="flex items-center gap-6">
                    <span className="text-xs text-gray-600">Full case study available</span>
                    <span className="text-xs text-gray-600">•</span>
                    <span className="text-xs text-gray-600">Enterprise AI Recruitment</span>
                    <span className="text-xs text-gray-600">•</span>
                    <span className="text-xs text-gray-600">2026</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold group-hover:gap-2.5 transition-all" style={{ color: '#10b981' }}>
                    Explore <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
          </>
        )}

        {/* ── REGULAR PROJECT GRID ── */}
        {filter !== 'Enterprise' && (
          <motion.div
            layout
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                layout
                variants={fadeUp}
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
        )}

        {/* Empty state for Enterprise filter */}
        {filter === 'Enterprise' && (
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-center text-gray-600 dark:text-gray-500 mt-8 text-sm"
          >
            See the full case study above ↑
          </motion.p>
        )}
      </div>
    </div>
  );
};