import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowLeft, ExternalLink, Brain, GitMerge, Users, BarChart2,
  Zap, Shield, CheckCircle, Clock, ChevronRight, TrendingUp,
  MessageSquare, Settings, Layers, Activity, Database,
  Lock, Globe, RefreshCw, AlertCircle, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { NeuroFlowAgentVisual } from '../components/NeuroFlowAgentVisual';
import { NeuroFlowDashboard } from '../components/NeuroFlowDashboard';

// ─── Animation helpers ───────────────────────────────────────────────────────
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!start) return;
    let st: number | null = null;
    const step = (ts: number) => {
      if (!st) st = ts;
      const p = Math.min((ts - st) / duration, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(e * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const Counter: React.FC<{ value: number; suffix?: string; prefix?: string; duration?: number }> = ({
  value, suffix = '', prefix = '', duration = 2000
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useCounter(value, duration, inView);
  return <div ref={ref}>{prefix}{count.toLocaleString()}{suffix}</div>;
};

const V = {
  stagger: { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } },
  up: { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } },
  in: { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } },
};

// Brand colours
const C = { violet: '#7c3aed', indigo: '#6366f1', cyan: '#06b6d4', emerald: '#10b981', amber: '#f59e0b', pink: '#ec4899' };

// ─── Data ────────────────────────────────────────────────────────────────────
const tabs = [
  { id: 'workflow', label: 'AI Workflow Intelligence', icon: <Brain className="w-4 h-4" /> },
  { id: 'customer', label: 'Customer Operations', icon: <Users className="w-4 h-4" /> },
  { id: 'agents', label: 'AI Agent System', icon: <Zap className="w-4 h-4" /> },
  { id: 'builder', label: 'Workflow Builder', icon: <GitMerge className="w-4 h-4" /> },
];

const techStack = [
  { name: 'Next.js', color: '#fff', desc: 'App Framework' },
  { name: 'React', color: '#61dafb', desc: 'UI Library' },
  { name: 'TypeScript', color: '#3178c6', desc: 'Type Safety' },
  { name: 'Tailwind', color: '#06b6d4', desc: 'Styling' },
  { name: 'Framer', color: '#ff0055', desc: 'Motion' },
  { name: 'Node.js', color: '#51cf66', desc: 'Runtime' },
  { name: 'PostgreSQL', color: '#336791', desc: 'Database' },
  { name: 'Prisma', color: '#5a67d8', desc: 'ORM' },
  { name: 'Redis', color: '#ff4136', desc: 'Cache/Queue' },
  { name: 'WebSockets', color: '#7c3aed', desc: 'Real-time' },
  { name: 'OpenAI', color: '#10b981', desc: 'AI Engine' },
  { name: 'Recharts', color: '#ec4899', desc: 'Analytics' },
];

const impactMetrics = [
  { value: 65, suffix: '%', label: 'Reduction in Operational Overhead', icon: <TrendingUp className="w-6 h-6" />, color: C.violet },
  { value: 94, suffix: '.7%', label: 'Ticket Resolution Rate via AI', icon: <CheckCircle className="w-6 h-6" />, color: C.emerald, special: true },
  { value: 3200, suffix: '+', label: 'Onboarding Flows Automated Monthly', icon: <Users className="w-6 h-6" />, color: C.cyan },
  { value: 83, suffix: '%', label: 'Faster Customer Response Time', icon: <Clock className="w-6 h-6" />, color: C.amber },
  { value: 12, suffix: ' AI Agents', label: 'Running Concurrently Per Deployment', icon: <Brain className="w-6 h-6" />, color: C.pink },
  { value: 4800, suffix: '+', label: 'Enterprise Workflows Processed Daily', icon: <Activity className="w-6 h-6" />, color: C.indigo },
];

const architectureLayers = [
  { label: 'AI Intelligence Layer', sublabel: 'GPT-4o • Claude • Custom Fine-tuned Models', color: C.violet, width: '55%' },
  { label: 'Agent Orchestration', sublabel: 'Multi-agent routing • Human-in-the-loop • Context memory', color: C.indigo, width: '67%' },
  { label: 'Workflow Engine', sublabel: 'Trigger system • Conditional branching • Scheduling', color: C.cyan, width: '78%' },
  { label: 'Real-time Layer', sublabel: 'WebSockets • Redis pub/sub • Event streaming', color: C.emerald, width: '88%' },
  { label: 'Data & Persistence', sublabel: 'PostgreSQL • Prisma ORM • Redis Cache • S3', color: C.amber, width: '100%' },
];

// ─── Component ───────────────────────────────────────────────────────────────
export const NeuroFlowAI: React.FC = () => {
  const [activeTab, setActiveTab] = useState('workflow');

  return (
    <div className="bg-aether-900 min-h-screen text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
        {/* Grid */}
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: `linear-gradient(rgba(124,58,237,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.05) 1px, transparent 1px)`,
          backgroundSize: '52px 52px',
        }} />
        {/* Glow blobs */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none animate-pulse-slow"
          style={{ background: 'rgba(124,58,237,0.15)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"
          style={{ background: 'rgba(6,182,212,0.1)', animationDelay: '2.5s' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Back nav */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div variants={V.stagger} initial="hidden" animate="show">
              <motion.div variants={V.up} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
                style={{ borderColor: 'rgba(124,58,237,0.4)', background: 'rgba(124,58,237,0.08)' }}>
                <Brain className="w-3.5 h-3.5" style={{ color: C.violet }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: C.violet }}>AI SaaS Platform • Case Study</span>
              </motion.div>

              <motion.h1 variants={V.up} className="text-5xl md:text-7xl font-black leading-none tracking-tighter mb-6">
                <span className="text-white">Neuro</span>
                <span style={{ background: `linear-gradient(135deg, ${C.violet}, ${C.cyan})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Flow</span>
                <br />
                <span className="text-gray-400 text-3xl md:text-4xl font-medium">AI Operations Intelligence</span>
              </motion.h1>

              <motion.p variants={V.up} className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
                An AI-native workflow orchestration platform that automates customer operations, support routing, and
                enterprise workflows using multi-agent AI systems — built for high-growth SaaS companies.
              </motion.p>

              {/* Stat badges */}
              <motion.div variants={V.up} className="flex flex-wrap gap-3 mb-10">
                {[
                  { label: '65% ops overhead reduced', color: C.violet },
                  { label: '94.7% auto-resolution rate', color: C.emerald },
                  { label: '12 concurrent AI agents', color: C.cyan },
                  { label: '83% faster responses', color: C.amber },
                ].map((b, i) => (
                  <div key={i} className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                    style={{ background: `${b.color}15`, border: `1px solid ${b.color}40`, color: b.color }}>
                    {b.label}
                  </div>
                ))}
              </motion.div>

              <motion.div variants={V.up} className="flex flex-wrap gap-3">
                {['AI Agents', 'Workflow Automation', 'Customer Ops', 'Enterprise SaaS'].map(tag => (
                  <span key={tag} className="text-xs text-gray-500 border border-white/10 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Agent visual */}
            <motion.div variants={V.in} initial="hidden" animate="show" transition={{ delay: 0.3 }}>
              <NeuroFlowAgentVisual />
              <div className="flex items-center justify-center gap-6 mt-4">
                {[
                  { color: C.violet, label: 'Core AI' }, { color: C.cyan, label: 'Agents' },
                  { color: C.emerald, label: 'Outputs' }, { color: C.amber, label: 'Monitor' },
                ].map((l, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ background: l.color }} />
                    <span className="text-xs text-gray-500">{l.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent" />
        </motion.div>
      </section>

      {/* ══ PROJECT OVERVIEW ══════════════════════════════════════════════════ */}
      <section className="py-28" style={{ background: 'rgba(10,7,20,0.98)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={V.stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
              <motion.span variants={V.up} className="text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: C.violet }}>The Problem</motion.span>
              <motion.h2 variants={V.up} className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Operations teams drowning in<br />repetitive, manual processes.
              </motion.h2>
              {[
                { icon: <AlertCircle className="w-5 h-5 text-red-400" />, text: 'Support teams spending 70% of time on ticket triage and routing — zero AI assistance.' },
                { icon: <Clock className="w-5 h-5 text-amber-400" />, text: 'Customer onboarding taking days due to manual touchpoints and sequential approval chains.' },
                { icon: <MessageSquare className="w-5 h-5 text-blue-400" />, text: 'No unified visibility into workflow status, SLA health, or team performance metrics.' },
                { icon: <Lock className="w-5 h-5 text-purple-400" />, text: 'AI tools existing in silos — no orchestration layer connecting intelligence to operations.' },
              ].map((item, i) => (
                <motion.div key={i} variants={V.up} className="flex gap-4 items-start p-4 rounded-xl mb-3"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={V.stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-2 gap-5">
              {[
                { value: 65, suffix: '%', label: 'Overhead reduced', color: C.violet },
                { value: 4800, suffix: '+', label: 'Workflows/day', color: C.cyan },
                { value: 83, suffix: '%', label: 'Faster responses', color: C.emerald },
                { value: 3200, suffix: '+', label: 'Onboardings/mo', color: C.amber },
              ].map((s, i) => (
                <motion.div key={i} variants={V.up}
                  className="p-6 rounded-2xl text-center"
                  style={{ background: 'rgba(15,10,30,0.9)', border: `1px solid ${s.color}25` }}>
                  <div className="text-3xl md:text-4xl font-black mb-2" style={{ color: s.color }}>
                    <Counter value={s.value} suffix={s.suffix} duration={2200} />
                  </div>
                  <p className="text-gray-500 text-xs">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ PLATFORM ARCHITECTURE ═════════════════════════════════════════════ */}
      <section className="py-28" style={{ background: '#080612' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={V.stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="text-center mb-16">
            <motion.span variants={V.up} className="text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: C.violet }}>System Architecture</motion.span>
            <motion.h2 variants={V.up} className="text-3xl md:text-5xl font-bold text-white">
              Designed for <span style={{ background: `linear-gradient(135deg, ${C.violet}, ${C.cyan})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Intelligent Scale</span>
            </motion.h2>
            <motion.p variants={V.up} className="text-gray-500 mt-4 max-w-2xl mx-auto">
              A multi-layer AI-native architecture combining real-time agent orchestration, persistent context memory, and enterprise-grade workflow execution.
            </motion.p>
          </motion.div>

          <motion.div variants={V.stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-3xl mx-auto space-y-4">
            {architectureLayers.map((layer, i) => (
              <motion.div key={i} variants={V.up}
                className="relative flex items-center gap-6 p-5 rounded-xl overflow-hidden"
                style={{ background: 'rgba(15,10,30,0.9)', border: `1px solid ${layer.color}20` }}>
                <div className="absolute bottom-0 left-0 h-0.5" style={{ width: layer.width, background: `linear-gradient(to right, ${layer.color}, transparent)` }} />
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{ background: `${layer.color}18`, color: layer.color, border: `1px solid ${layer.color}40` }}>
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-white text-sm mb-1">{layer.label}</div>
                  <div className="text-xs text-gray-500">{layer.sublabel}</div>
                </div>
                <Layers className="w-4 h-4 flex-shrink-0 opacity-40" style={{ color: layer.color }} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ FEATURE SHOWCASE ══════════════════════════════════════════════════ */}
      <section className="py-28" style={{ background: 'rgba(10,7,20,0.98)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={V.stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="text-center mb-12">
            <motion.span variants={V.up} className="text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: C.violet }}>Core Modules</motion.span>
            <motion.h2 variants={V.up} className="text-3xl md:text-5xl font-bold text-white">
              Six Pillars of <span style={{ background: `linear-gradient(135deg, ${C.violet}, ${C.cyan})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI Operations</span>
            </motion.h2>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                style={activeTab === tab.id
                  ? { background: `linear-gradient(135deg, ${C.violet}, ${C.cyan})`, color: 'white' }
                  : { border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }
                }>
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div key={activeTab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>

            {activeTab === 'workflow' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">AI Workflow Intelligence Engine</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    The platform continuously analyzes operational patterns and proactively suggests workflow optimizations, auto-routing rules, and priority adjustments — no manual configuration required.
                  </p>
                  {[
                    { step: '01', label: 'Pattern Recognition', desc: 'AI identifies repetitive workflows and bottleneck patterns across operations', color: C.violet },
                    { step: '02', label: 'Smart Routing Logic', desc: 'Automated task assignment based on agent skills, capacity, and SLA urgency', color: C.indigo },
                    { step: '03', label: 'AI Summaries', desc: 'Auto-generated operational summaries, ticket context, and priority explanations', color: C.cyan },
                    { step: '04', label: 'Workflow Optimization', desc: 'Continuous improvement loop — AI learns from resolution outcomes', color: C.emerald },
                  ].map(s => (
                    <div key={s.step} className="flex items-start gap-4 p-4 rounded-xl mb-3"
                      style={{ background: 'rgba(15,10,30,0.8)', border: `1px solid ${s.color}20` }}>
                      <span className="text-xs font-black font-mono flex-shrink-0 mt-0.5" style={{ color: s.color }}>{s.step}</span>
                      <div>
                        <div className="text-sm font-bold text-white mb-1">{s.label}</div>
                        <div className="text-xs text-gray-500">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Intelligence metrics visual */}
                <div className="rounded-2xl p-6" style={{ background: 'rgba(15,10,30,0.95)', border: `1px solid ${C.violet}25` }}>
                  <div className="flex items-center gap-2 mb-6 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <Brain className="w-4 h-4" style={{ color: C.violet }} />
                    <span className="text-sm font-bold text-white">AI Intelligence Dashboard</span>
                    <span className="ml-auto text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: 'rgba(16,185,129,0.1)', color: C.emerald }}>● Live</span>
                  </div>
                  {[
                    { metric: 'Workflow Suggestions Generated', value: '1,247 today', pct: 88, color: C.violet },
                    { metric: 'Auto-Applied Optimizations', value: '934 accepted', pct: 75, color: C.indigo },
                    { metric: 'Smart Priority Adjustments', value: '2,103 tasks', pct: 91, color: C.cyan },
                    { metric: 'AI Summary Accuracy', value: '96.4%', pct: 96, color: C.emerald },
                    { metric: 'Decision Tree Coverage', value: '84 workflows', pct: 84, color: C.amber },
                  ].map((f, i) => (
                    <div key={i} className="mb-5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-500">{f.metric}</span>
                        <span className="text-xs font-bold" style={{ color: f.color }}>{f.value}</span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <motion.div initial={{ width: 0 }} whileInView={{ width: `${f.pct}%` }}
                          viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.1 }}
                          className="h-full rounded-full" style={{ background: f.color, boxShadow: `0 0 8px ${f.color}80` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'customer' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Customer Operations Automation</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    End-to-end automation for customer onboarding, support ticket handling, SLA monitoring,
                    and escalation management — with AI-generated responses and intelligent classification.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <Users className="w-5 h-5" />, label: 'Automated Onboarding', color: C.violet },
                      { icon: <MessageSquare className="w-5 h-5" />, label: 'Ticket Classification', color: C.cyan },
                      { icon: <AlertCircle className="w-5 h-5" />, label: 'Smart Escalation', color: C.amber },
                      { icon: <CheckCircle className="w-5 h-5" />, label: 'Auto-Response Draft', color: C.emerald },
                      { icon: <Activity className="w-5 h-5" />, label: 'Activity Tracking', color: C.pink },
                      { icon: <Clock className="w-5 h-5" />, label: 'SLA Monitoring', color: C.indigo },
                    ].map((f, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl"
                        style={{ background: 'rgba(15,10,30,0.8)', border: `1px solid ${f.color}20` }}>
                        <div style={{ color: f.color }}>{f.icon}</div>
                        <span className="text-sm text-gray-300 font-medium">{f.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ticket flow visual */}
                <div className="rounded-2xl p-6" style={{ background: 'rgba(15,10,30,0.95)', border: `1px solid ${C.cyan}20` }}>
                  <div className="text-sm font-bold text-white mb-5">Ticket Lifecycle — AI Pipeline</div>
                  {[
                    { stage: 'Intake', detail: '#T-5841 received via email', status: 'done', color: C.emerald },
                    { stage: 'AI Classification', detail: 'Billing Issue • Priority: High • Sentiment: Frustrated', status: 'done', color: C.violet },
                    { stage: 'Smart Routing', detail: '→ Assigned to Billing Tier 2 (0.3s)', status: 'done', color: C.cyan },
                    { stage: 'AI Response Draft', detail: '"Hi Sarah, I can see your invoice from Nov..." (92% confidence)', status: 'done', color: C.indigo },
                    { stage: 'Human Review', detail: 'Agent reviewed — approved with 1 edit', status: 'active', color: C.amber },
                    { stage: 'Resolution', detail: 'Awaiting agent send confirmation', status: 'pending', color: C.pink },
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-3 mb-4">
                      <div className="flex flex-col items-center flex-shrink-0" style={{ marginTop: '2px' }}>
                        <div className="w-3 h-3 rounded-full flex-shrink-0"
                          style={{ background: s.status === 'done' ? s.color : s.status === 'active' ? s.color : 'rgba(255,255,255,0.1)', boxShadow: s.status === 'active' ? `0 0 8px ${s.color}` : 'none' }} />
                        {i < 5 && <div className="w-px flex-1 mt-1" style={{ height: '20px', background: i < 4 ? `${s.color}40` : 'rgba(255,255,255,0.06)' }} />}
                      </div>
                      <div className="pb-2">
                        <div className="text-xs font-bold text-white mb-1">{s.stage}</div>
                        <div className="text-xs text-gray-500">{s.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'agents' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Multi-Agent AI System</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    A fleet of specialized AI agents working in parallel — each with persistent context memory,
                    tool access, and human-in-the-loop approval gates for high-stakes decisions.
                  </p>
                  {[
                    { name: 'NeuroCore Orchestrator', role: 'Master router — distributes tasks across the agent fleet', color: C.violet },
                    { name: 'Routing Agent', role: 'Classifies, prioritizes, and assigns all incoming work', color: C.indigo },
                    { name: 'Onboarding Copilot', role: 'Drives customer onboarding sequences autonomously', color: C.cyan },
                    { name: 'Support AI', role: 'Drafts responses, handles FAQs, escalates edge cases', color: C.emerald },
                    { name: 'SLA Watchdog', role: 'Monitors breach risk and triggers proactive escalations', color: C.amber },
                    { name: 'Ops Optimizer', role: 'Analyzes performance data and surfaces improvements', color: C.pink },
                  ].map((a, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl mb-3"
                      style={{ background: 'rgba(15,10,30,0.8)', border: `1px solid ${a.color}25` }}>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-lg"
                        style={{ background: `${a.color}15`, border: `1px solid ${a.color}40` }}>
                        🤖
                      </div>
                      <div>
                        <div className="text-sm font-bold mb-1" style={{ color: a.color }}>{a.name}</div>
                        <div className="text-xs text-gray-500">{a.role}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="mb-4 text-xs font-mono text-gray-600 text-center">LIVE AGENT NETWORK</div>
                  <NeuroFlowAgentVisual />
                </div>
              </div>
            )}

            {activeTab === 'builder' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Visual Workflow Builder</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    A drag-and-drop automation builder enabling operations teams to create complex,
                    multi-step workflows with conditional logic, API integrations, and AI-powered actions — no engineering required.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <GitMerge className="w-5 h-5" />, label: 'Drag & Drop Builder', color: C.violet },
                      { icon: <Zap className="w-5 h-5" />, label: 'Trigger-Action Flows', color: C.cyan },
                      { icon: <Globe className="w-5 h-5" />, label: 'API Integrations', color: C.emerald },
                      { icon: <Database className="w-5 h-5" />, label: 'DB Integrations', color: C.amber },
                      { icon: <RefreshCw className="w-5 h-5" />, label: 'Webhook System', color: C.pink },
                      { icon: <Clock className="w-5 h-5" />, label: 'Scheduled Automation', color: C.indigo },
                    ].map((f, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl"
                        style={{ background: 'rgba(15,10,30,0.8)', border: `1px solid ${f.color}20` }}>
                        <div style={{ color: f.color }}>{f.icon}</div>
                        <span className="text-sm text-gray-300 font-medium">{f.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Workflow builder visual */}
                <div className="rounded-2xl p-6" style={{ background: 'rgba(15,10,30,0.95)', border: `1px solid ${C.violet}20` }}>
                  <div className="text-sm font-bold text-white mb-5">Sample: Enterprise Onboarding Flow</div>
                  {[
                    { trigger: '▶ Trigger', label: 'New customer signup detected', color: C.violet },
                    { trigger: '🤖 AI', label: 'Generate personalized welcome sequence', color: C.indigo },
                    { trigger: '📧 Action', label: 'Send onboarding email (template #4)', color: C.cyan },
                    { trigger: '⏱ Wait', label: 'Wait 24h — check activity ping', color: C.amber },
                    { trigger: '⟁ Branch', label: 'IF opened: send feature guide | ELSE: reminder', color: C.pink },
                    { trigger: '👤 Human', label: 'CSM review required if Day 3 inactive', color: C.emerald },
                    { trigger: '✓ Complete', label: 'Mark onboarded — sync to CRM', color: C.emerald },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-4 mb-3">
                      <div className="w-16 text-xs font-bold text-right flex-shrink-0" style={{ color: s.color }}>{s.trigger}</div>
                      <div className="w-px h-8 flex-shrink-0" style={{ background: `${s.color}40` }} />
                      <div className="flex-1 p-2.5 rounded-lg text-xs text-gray-300"
                        style={{ background: `${s.color}08`, border: `1px solid ${s.color}20` }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ══ DASHBOARD PREVIEW ═════════════════════════════════════════════════ */}
      <section className="py-28" style={{ background: '#080612' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={V.stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="text-center mb-16">
            <motion.span variants={V.up} className="text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: C.violet }}>Live Platform Preview</motion.span>
            <motion.h2 variants={V.up} className="text-3xl md:text-5xl font-bold text-white">
              The Operations <span style={{ background: `linear-gradient(135deg, ${C.violet}, ${C.cyan})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Intelligence Hub</span>
            </motion.h2>
            <motion.p variants={V.up} className="text-gray-500 mt-4 max-w-xl mx-auto">
              Real-time monitoring of AI agents, workflow performance, SLA health, and team productivity — all in one command center.
            </motion.p>
          </motion.div>
          <motion.div variants={V.in} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-5xl mx-auto">
            <NeuroFlowDashboard />
          </motion.div>
        </div>
      </section>

      {/* ══ TECH STACK ════════════════════════════════════════════════════════ */}
      <section className="py-28" style={{ background: 'rgba(10,7,20,0.98)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={V.stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="text-center mb-16">
            <motion.span variants={V.up} className="text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: C.violet }}>Engineering Stack</motion.span>
            <motion.h2 variants={V.up} className="text-3xl md:text-5xl font-bold text-white">
              Built on <span style={{ background: `linear-gradient(135deg, ${C.violet}, ${C.cyan})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Modern Infrastructure</span>
            </motion.h2>
          </motion.div>
          <motion.div variants={V.stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, i) => (
              <motion.div key={i} variants={V.up}
                className="flex flex-col items-center p-5 rounded-xl text-center cursor-default transition-all duration-300 hover:scale-105"
                style={{ background: 'rgba(15,10,30,0.8)', border: '1px solid rgba(255,255,255,0.05)' }}
                whileHover={{ borderColor: `${tech.color}40`, background: `${tech.color}06` }}>
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

      {/* ══ BUSINESS IMPACT ═══════════════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" style={{ background: '#080612' }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)`,
          backgroundSize: '44px 44px'
        }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={V.stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="text-center mb-20">
            <motion.span variants={V.up} className="text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: C.violet }}>Measured Results</motion.span>
            <motion.h2 variants={V.up} className="text-3xl md:text-5xl font-bold text-white">
              Enterprise <span style={{ background: `linear-gradient(135deg, ${C.violet}, ${C.cyan})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Business Impact</span>
            </motion.h2>
          </motion.div>

          <motion.div variants={V.stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {impactMetrics.map((m, i) => (
              <motion.div key={i} variants={V.up}
                className="p-8 rounded-2xl text-center group"
                style={{ background: 'rgba(15,10,30,0.85)', border: `1px solid ${m.color}20` }}
                whileHover={{ borderColor: `${m.color}50`, scale: 1.02 }}>
                <div className="inline-flex p-3 rounded-xl mb-5" style={{ background: `${m.color}15`, color: m.color }}>{m.icon}</div>
                <div className="text-4xl font-black mb-2" style={{ color: m.color }}>
                  {m.special
                    ? '94.7%'
                    : <Counter value={m.value} suffix={m.suffix} duration={2500} />
                  }
                </div>
                <p className="text-gray-400 text-sm">{m.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial */}
          <motion.div variants={V.up} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center p-10 rounded-2xl"
            style={{ background: 'rgba(15,10,30,0.7)', border: `1px solid ${C.violet}25` }}>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" style={{ color: C.amber }} />)}
            </div>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              NeuroFlow AI completely changed how our operations team works. The AI agents handle 94% of tier-1 support
              autonomously. Our response time dropped from 4 hours to under 8 minutes. The workflow builder let us
              automate complex onboarding sequences that used to take our CSM team days of manual coordination.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                style={{ background: `linear-gradient(135deg, ${C.violet}, ${C.cyan})` }}>
                PK
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-sm">Priya Krishnan</div>
                <div className="text-gray-500 text-xs">Head of Customer Operations, ScaleOps SaaS</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,7,20,0.98)' }}>
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 0%, ${C.violet}15 0%, transparent 60%)` }} />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div variants={V.stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={V.up} className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Ready to Build an<br />
              <span style={{ background: `linear-gradient(135deg, ${C.violet}, ${C.cyan})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI-Powered Operation?</span>
            </motion.h2>
            <motion.p variants={V.up} className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Let's design and build an AI operations platform that automates your workflows, delights your customers, and scales with your business.
            </motion.p>
            <motion.div variants={V.up} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-lg rounded-full text-white transition-all hover:scale-105"
                style={{ background: `linear-gradient(135deg, ${C.violet}, ${C.cyan})`, boxShadow: `0 0 40px ${C.violet}50` }}>
                Start Your AI Project <ChevronRight className="w-5 h-5" />
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
