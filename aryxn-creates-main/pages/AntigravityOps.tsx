import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowLeft, ExternalLink, Zap, FileText, GitBranch, BarChart2,
  Shield, CheckCircle, AlertTriangle, RefreshCw, Clock, Globe,
  Database, Cpu, Code, Activity, ChevronRight, Users, TrendingUp,
  Lock, Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { OpsWorkflowVisual } from '../components/OpsWorkflowVisual';
import { OpsDashboardMockup } from '../components/OpsDashboardMockup';

// Animated counter hook
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// Animated counter component
const Counter: React.FC<{ value: number; suffix?: string; prefix?: string; duration?: number }> = ({
  value, suffix = '', prefix = '', duration = 2000
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useCounter(value, duration, isInView);
  return <div ref={ref}>{prefix}{count.toLocaleString()}{suffix}</div>;
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } }
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } }
};

const tabs = [
  { id: 'ai-doc', label: 'AI Document Processing', icon: <FileText className="w-4 h-4" /> },
  { id: 'workflow', label: 'Workflow Engine', icon: <GitBranch className="w-4 h-4" /> },
  { id: 'dashboard', label: 'Enterprise Dashboard', icon: <BarChart2 className="w-4 h-4" /> },
  { id: 'monitoring', label: 'Monitoring & Audit', icon: <Shield className="w-4 h-4" /> },
];

const techStack = [
  { name: 'Next.js', color: '#fff', desc: 'App Framework' },
  { name: 'React', color: '#61dafb', desc: 'UI Library' },
  { name: 'TypeScript', color: '#3178c6', desc: 'Type Safety' },
  { name: 'Tailwind', color: '#06b6d4', desc: 'Styling' },
  { name: 'Framer', color: '#ff0055', desc: 'Animations' },
  { name: 'Node.js', color: '#51cf66', desc: 'Runtime' },
  { name: 'PostgreSQL', color: '#336791', desc: 'Database' },
  { name: 'n8n', color: '#ea4b71', desc: 'Orchestration' },
  { name: 'OpenAI', color: '#00a67e', desc: 'AI Engine' },
  { name: 'Recharts', color: '#bd00ff', desc: 'Analytics' },
  { name: 'Redis', color: '#ff4136', desc: 'Queue/Cache' },
  { name: 'Docker', color: '#00f2ff', desc: 'Containers' },
];

const impactMetrics = [
  { value: 78, suffix: '%', label: 'Reduction in Manual Operations', icon: <TrendingUp className="w-6 h-6" />, color: '#00f2ff' },
  { value: 2300000, suffix: '', label: 'Workflows Automated', icon: <GitBranch className="w-6 h-6" />, color: '#bd00ff' },
  { value: 99, suffix: '.97%', label: 'Platform Uptime SLA', icon: <Activity className="w-6 h-6" />, color: '#51cf66', isSpecial: true },
  { value: 62, suffix: '%', label: 'Reduction in Data Entry Errors', icon: <CheckCircle className="w-6 h-6" />, color: '#ffd700' },
  { value: 14, suffix: 'x', label: 'Faster Document Processing', icon: <Zap className="w-6 h-6" />, color: '#ff6b6b' },
  { value: 180, suffix: 'M+', label: 'Enterprise Records Processed', icon: <Database className="w-6 h-6" />, color: '#00f2ff' },
];

const architectureLayers = [
  { label: 'Client Layer', sublabel: 'React • Next.js • Mobile', color: '#00f2ff', width: '60%' },
  { label: 'API Gateway', sublabel: 'Auth • Rate Limiting • Load Balancer', color: '#bd00ff', width: '70%' },
  { label: 'AI Engine', sublabel: 'OCR • NLP • Confidence Scoring', color: '#ffd700', width: '80%' },
  { label: 'Workflow Orchestrator', sublabel: 'n8n • Queue • Retry Engine', color: '#ff6b6b', width: '90%' },
  { label: 'Data Layer', sublabel: 'PostgreSQL • Redis • S3', color: '#51cf66', width: '100%' },
];

export const AntigravityOps: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai-doc');

  return (
    <div className="bg-aether-900 min-h-screen text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
        {/* Animated grid background */}
        <div className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,242,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,242,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
        {/* Glow blobs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-[140px] animate-pulse-slow"
          style={{ background: 'rgba(189,0,255,0.15)' }} />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-[140px] animate-pulse-slow"
          style={{ background: 'rgba(0,242,255,0.1)', animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Back nav */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-aether-accent transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-5xl">
            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
              style={{ borderColor: 'rgba(0,242,255,0.3)', background: 'rgba(0,242,255,0.05)' }}>
              <span className="w-2 h-2 rounded-full bg-aether-accent animate-pulse" />
              <span className="text-aether-accent text-xs font-bold tracking-widest uppercase">Enterprise SaaS • Case Study</span>
            </motion.div>

            {/* Title */}
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tighter mb-6">
              <span className="text-white">Antigravity</span>{' '}
              <span className="gradient-text">Ops</span>
              <br />
              <span className="text-white text-4xl md:text-5xl lg:text-6xl font-medium text-gray-400">Automation Platform</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-400 max-w-3xl mb-12 leading-relaxed">
              An AI-powered enterprise workflow orchestration platform that automates manual operations,
              document processing, and data entry at massive scale — built for companies handling
              millions of transactions daily.
            </motion.p>

            {/* Key stat badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
              {[
                { label: '78% ops reduction', color: '#00f2ff' },
                { label: '2.3M workflows/day', color: '#bd00ff' },
                { label: '99.97% uptime', color: '#51cf66' },
                { label: '14x faster processing', color: '#ffd700' },
              ].map((badge, i) => (
                <div key={i} className="px-4 py-2 rounded-lg text-sm font-semibold"
                  style={{ background: `${badge.color}15`, border: `1px solid ${badge.color}40`, color: badge.color }}>
                  {badge.label}
                </div>
              ))}
            </motion.div>

            {/* Tags */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {['Enterprise SaaS', 'AI/ML', 'Workflow Automation', 'Document Processing', 'Operations Intelligence'].map(tag => (
                <span key={tag} className="text-xs text-gray-500 border border-white/10 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent" />
        </motion.div>
      </section>

      {/* ── PROJECT OVERVIEW ── */}
      <section className="py-28 relative" style={{ background: 'rgba(13,13,22,0.95)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Problem */}
            <motion.div
              variants={stagger} initial="hidden"
              whileInView="show" viewport={{ once: true, margin: '-80px' }}
            >
              <motion.span variants={fadeUp} className="text-aether-accent text-xs font-bold tracking-widest uppercase mb-4 block">
                The Challenge
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
                Enterprise operations buried in manual, error-prone workflows.
              </motion.h2>
              <motion.div variants={stagger} className="space-y-5">
                {[
                  { icon: <AlertTriangle className="w-5 h-5 text-yellow-400" />, text: 'Thousands of documents processed manually every day — slow, costly, error-prone.' },
                  { icon: <Clock className="w-5 h-5 text-red-400" />, text: 'Multi-step approval chains taking days instead of seconds.' },
                  { icon: <Users className="w-5 h-5 text-blue-400" />, text: 'Siloed teams with no unified operations intelligence platform.' },
                  { icon: <Lock className="w-5 h-5 text-purple-400" />, text: 'No audit trail, no compliance visibility, no real-time monitoring.' },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex gap-4 items-start p-4 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Stats */}
            <motion.div
              variants={stagger} initial="hidden"
              whileInView="show" viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-2 gap-5"
            >
              {[
                { value: 78, suffix: '%', label: 'Manual ops eliminated', color: '#00f2ff' },
                { value: 2300000, suffix: '+', label: 'Workflows automated', color: '#bd00ff' },
                { value: 99, suffix: '.97%', label: 'Platform uptime', color: '#51cf66', special: true },
                { value: 62, suffix: '%', label: 'Error rate reduced', color: '#ffd700' },
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="p-6 rounded-2xl text-center"
                  style={{ background: 'rgba(19,19,31,0.9)', border: `1px solid ${stat.color}25` }}>
                  <div className="text-3xl md:text-4xl font-black mb-2" style={{ color: stat.color }}>
                    {stat.special
                      ? <span>99<span style={{ fontSize: '0.6em' }}>.97%</span></span>
                      : <Counter value={stat.value} suffix={stat.suffix} duration={2200} />
                    }
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PLATFORM ARCHITECTURE ── */}
      <section className="py-28" style={{ background: '#080810' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-aether-accent text-xs font-bold tracking-widest uppercase mb-4 block">
              System Architecture
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white">
              Built for <span className="gradient-text">Planetary Scale</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mt-4 max-w-2xl mx-auto">
              A five-layer architecture handling millions of concurrent operations with intelligent load balancing, fault tolerance, and real-time observability.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-4">
            {architectureLayers.map((layer, i) => (
              <motion.div key={i} variants={fadeUp}
                className="relative flex items-center gap-6 p-5 rounded-xl overflow-hidden"
                style={{ background: 'rgba(19,19,31,0.8)', border: `1px solid ${layer.color}20` }}>
                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 h-0.5" style={{ width: layer.width, background: `linear-gradient(to right, ${layer.color}, transparent)` }} />
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{ background: `${layer.color}20`, color: layer.color, border: `1px solid ${layer.color}40` }}>
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-white text-sm mb-1">{layer.label}</div>
                  <div className="text-xs text-gray-500">{layer.sublabel}</div>
                </div>
                <Layers className="w-4 h-4 flex-shrink-0" style={{ color: layer.color, opacity: 0.6 }} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURE SHOWCASE ── */}
      <section className="py-28" style={{ background: 'rgba(13,13,22,0.95)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-12">
            <motion.span variants={fadeUp} className="text-aether-accent text-xs font-bold tracking-widest uppercase mb-4 block">
              Core Modules
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white">
              Four Pillars of <span className="gradient-text">Intelligent Automation</span>
            </motion.h2>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-black font-bold'
                    : 'text-gray-400 border border-white/10 hover:border-white/20 hover:text-white'
                }`}
                style={activeTab === tab.id ? { background: 'linear-gradient(to right, #00f2ff, #bd00ff)' } : {}}>
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div key={activeTab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>

            {activeTab === 'ai-doc' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">AI Document Processing Pipeline</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    Upload PDFs, invoices, healthcare forms, or scanned reports. The AI engine extracts structured fields
                    in under 2 seconds using a multi-model OCR + NLP pipeline with confidence scoring.
                  </p>
                  <div className="space-y-4">
                    {[
                      { step: '01', label: 'Document Ingestion', desc: 'PDF / Image upload via API or drag-drop', color: '#00f2ff' },
                      { step: '02', label: 'OCR + AI Extraction', desc: 'Multi-model pipeline extracts structured fields', color: '#bd00ff' },
                      { step: '03', label: 'Confidence Scoring', desc: 'Each field scored 0–100%; low-confidence flagged', color: '#ffd700' },
                      { step: '04', label: 'Validation & Output', desc: 'Schema validation → push to downstream systems', color: '#51cf66' },
                    ].map(s => (
                      <div key={s.step} className="flex items-start gap-4 p-4 rounded-xl"
                        style={{ background: 'rgba(19,19,31,0.7)', border: `1px solid ${s.color}20` }}>
                        <span className="text-xs font-black font-mono flex-shrink-0 mt-0.5" style={{ color: s.color }}>{s.step}</span>
                        <div>
                          <div className="text-sm font-bold text-white mb-1">{s.label}</div>
                          <div className="text-xs text-gray-500">{s.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Visual: Document card with confidence bars */}
                <div className="rounded-2xl p-6"
                  style={{ background: 'rgba(10,10,15,0.95)', border: '1px solid rgba(0,242,255,0.15)', boxShadow: '0 0 40px rgba(0,242,255,0.06)' }}>
                  <div className="flex items-center gap-3 mb-6 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <FileText className="w-5 h-5 text-aether-accent" />
                    <span className="text-sm font-bold text-white">Invoice_Healthcare_2024.pdf</span>
                    <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(81,207,102,0.15)', color: '#51cf66' }}>Processed</span>
                  </div>
                  {[
                    { field: 'Patient Name', value: 'Sarah Mitchell', confidence: 99 },
                    { field: 'Invoice ID', value: 'INV-2024-8847', confidence: 100 },
                    { field: 'Total Amount', value: '$4,820.00', confidence: 97 },
                    { field: 'Date of Service', value: '2024-11-14', confidence: 95 },
                    { field: 'Provider NPI', value: '1234567890', confidence: 63 },
                    { field: 'Diagnosis Code', value: 'J18.9', confidence: 88 },
                  ].map((f, i) => (
                    <div key={i} className="mb-4">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs text-gray-500">{f.field}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-white">{f.value}</span>
                          <span className="text-xs font-bold" style={{ color: f.confidence >= 90 ? '#51cf66' : f.confidence >= 70 ? '#ffd700' : '#ff6b6b' }}>
                            {f.confidence}%
                          </span>
                        </div>
                      </div>
                      <div className="h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                        <motion.div
                          initial={{ width: 0 }} whileInView={{ width: `${f.confidence}%` }}
                          viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 }}
                          className="h-full rounded-full"
                          style={{ background: f.confidence >= 90 ? '#51cf66' : f.confidence >= 70 ? '#ffd700' : '#ff6b6b' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'workflow' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Visual Workflow Automation Engine</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    Build multi-step automation chains with conditional logic, retry mechanisms, human approval steps,
                    and API integrations using a visual node-based editor — no code required.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <GitBranch className="w-5 h-5" />, label: 'Conditional Logic', color: '#00f2ff' },
                      { icon: <RefreshCw className="w-5 h-5" />, label: 'Auto Retry', color: '#bd00ff' },
                      { icon: <Users className="w-5 h-5" />, label: 'Human Approval', color: '#ffd700' },
                      { icon: <Globe className="w-5 h-5" />, label: 'API Integrations', color: '#51cf66' },
                      { icon: <AlertTriangle className="w-5 h-5" />, label: 'Error Handling', color: '#ff6b6b' },
                      { icon: <Clock className="w-5 h-5" />, label: 'Scheduled Triggers', color: '#00f2ff' },
                    ].map((f, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl"
                        style={{ background: 'rgba(19,19,31,0.7)', border: `1px solid ${f.color}20` }}>
                        <div style={{ color: f.color }}>{f.icon}</div>
                        <span className="text-sm text-gray-300 font-medium">{f.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden"
                  style={{ background: 'rgba(10,10,15,0.95)', border: '1px solid rgba(255,255,255,0.08)', padding: '20px' }}>
                  <div className="text-xs text-gray-600 mb-4 font-mono">WORKFLOW EXECUTION PIPELINE</div>
                  <OpsWorkflowVisual />
                  <div className="flex items-center gap-4 mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-xs text-gray-500">7 nodes active</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-aether-accent animate-pulse" />
                      <span className="text-xs text-gray-500">Live execution</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'dashboard' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Enterprise Operations Dashboard</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    A unified command center giving operations leaders complete visibility into workflow performance,
                    system health, processing queues, and team activity — all in real time.
                  </p>
                  <div className="space-y-4">
                    {[
                      { label: 'Analytics Overview', desc: 'Total workflows, success rates, failure trends', icon: <BarChart2 className="w-4 h-4" /> },
                      { label: 'Queue Monitoring', desc: 'Live depth, processing throughput, bottlenecks', icon: <Activity className="w-4 h-4" /> },
                      { label: 'System Health', desc: 'CPU, memory, API latency, service status', icon: <Cpu className="w-4 h-4" /> },
                      { label: 'Activity Feed', desc: 'Real-time log of all workflow events', icon: <Clock className="w-4 h-4" /> },
                    ].map((f, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-xl"
                        style={{ background: 'rgba(19,19,31,0.7)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div className="p-2 rounded-lg flex-shrink-0" style={{ background: 'rgba(0,242,255,0.1)', color: '#00f2ff' }}>
                          {f.icon}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white mb-1">{f.label}</div>
                          <div className="text-xs text-gray-500">{f.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <OpsDashboardMockup />
                </div>
              </div>
            )}

            {activeTab === 'monitoring' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Monitoring, Audit & Error Tracking</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    Full-spectrum observability with immutable audit logs, smart error recovery,
                    compliance-ready exports, and proactive alerting across all workflow stages.
                  </p>
                  <div className="space-y-4">
                    {[
                      { icon: <Shield className="w-5 h-5 text-aether-accent" />, label: 'Immutable Audit Logs', desc: 'Tamper-proof event trail for every workflow action' },
                      { icon: <RefreshCw className="w-5 h-5 text-purple-400" />, label: 'Smart Retry Engine', desc: 'Exponential backoff with dead-letter queue management' },
                      { icon: <AlertTriangle className="w-5 h-5 text-yellow-400" />, label: 'Proactive Alerting', desc: 'Slack, email, PagerDuty — configurable escalation paths' },
                      { icon: <Database className="w-5 h-5 text-green-400" />, label: 'Compliance Exports', desc: 'SOC2, HIPAA-ready audit exports in JSON/CSV/PDF' },
                    ].map((f, i) => (
                      <div key={i} className="flex items-start gap-4 p-5 rounded-xl"
                        style={{ background: 'rgba(19,19,31,0.7)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div className="flex-shrink-0 mt-0.5">{f.icon}</div>
                        <div>
                          <div className="text-sm font-bold text-white mb-1">{f.label}</div>
                          <div className="text-xs text-gray-500">{f.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Error timeline visual */}
                <div className="rounded-2xl p-6" style={{ background: 'rgba(10,10,15,0.95)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-bold text-white">Workflow History Timeline</span>
                    <span className="text-xs text-aether-accent">Last 24h</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { type: 'success', msg: 'Batch "AP_Invoice_Nov" — 1,240 docs processed', time: '2m ago', duration: '4.2s avg' },
                      { type: 'warning', msg: 'Retry #3 — "HR_Form_Onboarding_Batch_22"', time: '18m ago', duration: '8.1s' },
                      { type: 'success', msg: '"Claims_Processing_V2" — 890 claims approved', time: '1h ago', duration: '2.8s avg' },
                      { type: 'error', msg: 'Timeout — "ERP_Sync_Delta_7" — escalated', time: '3h ago', duration: '30s+' },
                      { type: 'success', msg: '"Healthcare_Forms_Q4" — 4,200 records ingested', time: '6h ago', duration: '1.9s avg' },
                    ].map((ev, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)' }}>
                        <div className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: ev.type === 'success' ? '#51cf66' : ev.type === 'warning' ? '#ffd700' : '#ff6b6b' }} />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-gray-300 leading-relaxed truncate">{ev.msg}</div>
                          <div className="flex gap-3 mt-1">
                            <span className="text-xs text-gray-600">{ev.time}</span>
                            <span className="text-xs text-gray-600">⏱ {ev.duration}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── DASHBOARD PREVIEW ── */}
      <section className="py-28" style={{ background: '#08080f' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-aether-accent text-xs font-bold tracking-widest uppercase mb-4 block">
              Live Platform Preview
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white">
              The <span className="gradient-text">Command Center</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mt-4 max-w-xl mx-auto">
              Real-time enterprise dashboard with live metric updates, workflow monitoring, and system health observability.
            </motion.p>
          </motion.div>
          <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="max-w-4xl mx-auto">
            <OpsDashboardMockup />
          </motion.div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-28" style={{ background: 'rgba(13,13,22,0.95)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-aether-accent text-xs font-bold tracking-widest uppercase mb-4 block">
              Engineering Stack
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white">
              Built with <span className="gradient-text">Best-in-Class</span> Technology
            </motion.h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, i) => (
              <motion.div key={i} variants={fadeUp}
                className="flex flex-col items-center justify-center p-5 rounded-xl text-center group cursor-default transition-all duration-300 hover:scale-105"
                style={{ background: 'rgba(19,19,31,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
                whileHover={{ borderColor: `${tech.color}40`, background: `${tech.color}08` }}>
                <div className="w-10 h-10 rounded-lg mb-3 flex items-center justify-center text-lg font-black"
                  style={{ background: `${tech.color}18`, color: tech.color, border: `1px solid ${tech.color}30` }}>
                  {tech.name.slice(0, 2)}
                </div>
                <div className="text-white text-xs font-bold mb-0.5">{tech.name}</div>
                <div className="text-gray-600 text-xs">{tech.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BUSINESS IMPACT ── */}
      <section className="py-28 relative overflow-hidden" style={{ background: '#080810' }}>
        <div className="absolute inset-0"
          style={{ backgroundImage: `linear-gradient(rgba(0,242,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,242,255,0.03) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 left-0 w-full h-full"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(189,0,255,0.08) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-20">
            <motion.span variants={fadeUp} className="text-aether-accent text-xs font-bold tracking-widest uppercase mb-4 block">
              Measured Results
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white">
              Business <span className="gradient-text">Impact</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Quantifiable outcomes delivered to enterprise clients across healthcare, finance, and logistics sectors.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {impactMetrics.map((m, i) => (
              <motion.div key={i} variants={fadeUp}
                className="p-8 rounded-2xl text-center group"
                style={{ background: 'rgba(19,19,31,0.8)', border: `1px solid ${m.color}20` }}
                whileHover={{ borderColor: `${m.color}50`, scale: 1.02 }}>
                <div className="inline-flex p-3 rounded-xl mb-5" style={{ background: `${m.color}15`, color: m.color }}>
                  {m.icon}
                </div>
                <div className="text-4xl font-black mb-2" style={{ color: m.color }}>
                  {m.isSpecial
                    ? '99.97%'
                    : <Counter value={m.value} suffix={m.suffix} duration={2500} />
                  }
                </div>
                <p className="text-gray-400 text-sm">{m.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center p-10 rounded-2xl"
            style={{ background: 'rgba(19,19,31,0.7)', border: '1px solid rgba(0,242,255,0.15)' }}>
            <div className="text-aether-accent text-4xl mb-6 font-serif">"</div>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Antigravity Ops transformed our entire back-office operations. What used to take our team 3 weeks
              now completes in under 4 hours. The AI document processing alone saved us $2.4M in annual labor costs.
              It's genuinely the most impactful enterprise software we've deployed in a decade.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                style={{ background: 'linear-gradient(135deg, #00f2ff, #bd00ff)' }}>
                DK
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-sm">David Kim</div>
                <div className="text-gray-500 text-xs">VP of Operations, NovaCare Health Systems</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(13,13,22,0.98)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-aether-purple/5 to-aether-accent/5" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Ready to Automate Your<br />
              <span className="gradient-text">Enterprise Operations?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Let's build an AI-powered automation platform that scales with your business and eliminates manual operations bottlenecks.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-lg rounded-full text-black transition-all hover:scale-105"
                style={{ background: 'linear-gradient(to right, #00f2ff, #bd00ff)', boxShadow: '0 0 40px rgba(0,242,255,0.3)' }}>
                Start Your Project <ChevronRight className="w-5 h-5" />
              </Link>
              <Link to="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-medium text-lg rounded-full text-white border border-white/10 hover:border-white/30 transition-all">
                View More Work <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
