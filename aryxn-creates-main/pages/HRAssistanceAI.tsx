import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowLeft, ExternalLink, Brain, Users, BarChart2, Video,
  FileText, Star, Zap, Clock, ChevronRight, CheckCircle,
  TrendingUp, Award, Activity, MessageSquare, Target, Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

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

const C = { blue: '#3b82f6', indigo: '#6366f1', emerald: '#10b981', amber: '#f59e0b', violet: '#7c3aed', pink: '#ec4899' };

// ─── Data ────────────────────────────────────────────────────────────────────
const techStack = [
  { name: 'Next.js', color: '#fff', desc: 'App Framework' },
  { name: 'React', color: '#61dafb', desc: 'UI Library' },
  { name: 'NestJS', color: '#e0234e', desc: 'Backend' },
  { name: 'PostgreSQL', color: '#336791', desc: 'Database' },
  { name: 'Gemini AI', color: '#4285f4', desc: 'AI Engine' },
  { name: 'D-ID', color: '#10b981', desc: 'AI Avatars' },
  { name: 'Tailwind', color: '#06b6d4', desc: 'Styling' },
  { name: 'Framer', color: '#ff0055', desc: 'Motion' },
  { name: 'Clerk', color: '#6c47ff', desc: 'Auth' },
  { name: 'Zustand', color: '#f59e0b', desc: 'State' },
  { name: 'Three.js', color: '#ffffff', desc: '3D / Viz' },
  { name: 'Recharts', color: '#ec4899', desc: 'Analytics' },
];

const impactMetrics = [
  { value: 94, suffix: '%', label: 'Reduction in interview scheduling overhead', icon: <Clock className="w-6 h-6" />, color: C.blue },
  { value: 87, suffix: '.4%', label: 'Average AI candidate scoring accuracy', icon: <Target className="w-6 h-6" />, color: C.emerald, special: '87.4%' },
  { value: 2847, suffix: '+', label: 'Candidates screened through AI interviews', icon: <Users className="w-6 h-6" />, color: C.indigo },
  { value: 73, suffix: '%', label: 'Faster hiring cycle vs. traditional process', icon: <TrendingUp className="w-6 h-6" />, color: C.amber },
  { value: 100, suffix: '%', label: 'Bias-free objective scoring via AI evaluation', icon: <Award className="w-6 h-6" />, color: C.violet },
  { value: 3, suffix: '× ROI', label: 'Return on investment for enterprise clients', icon: <BarChart2 className="w-6 h-6" />, color: C.pink, special: '3×' },
];

const features = [
  {
    icon: <Video className="w-6 h-6" />,
    title: 'AI Video Interviews',
    desc: 'Lifelike AI avatar interviewers powered by D-ID + Gemini conduct real-time adaptive video interviews — adjusting question difficulty based on candidate responses.',
    color: C.blue,
    points: ['Dynamic AI avatars with facial expressions', 'Adaptive questioning engine', 'Real-time NLP evaluation', 'Automatic difficulty calibration'],
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: 'Intelligent Recruiter Dashboard',
    desc: 'Real-time monitoring of live AI interviews with automated scoring across technical skills, communication, and confidence — with Gemini-generated hiring reports.',
    color: C.emerald,
    points: ['Live interview monitoring', 'Multi-dimension scoring', 'Auto-generated feedback reports', 'Hiring recommendation engine'],
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Automated Talent Sourcing',
    desc: 'Resume parsing and intelligent ranking system that automatically scores, ranks, and matches candidates to job requirements — eliminating manual screening.',
    color: C.indigo,
    points: ['PDF resume parsing', 'Skills extraction & scoring', 'Smart candidate ranking', 'Job-candidate matching AI'],
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Job Management System',
    desc: 'Complete workflow for creating, managing, and tracking job postings with AI-powered candidate pipeline and automated status updates.',
    color: C.amber,
    points: ['Multi-stage hiring pipeline', 'AI-powered job matching', 'Automated status notifications', 'Analytics per job posting'],
  },
];

// ─── Component ───────────────────────────────────────────────────────────────
export const HRAssistanceAI: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="bg-aether-900 min-h-screen text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)`,
          backgroundSize: '52px 52px',
        }} />
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none"
          style={{ background: 'rgba(59,130,246,0.12)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[120px] pointer-events-none"
          style={{ background: 'rgba(16,185,129,0.08)' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={V.stagger} initial="hidden" animate="show">
              <motion.div variants={V.up} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
                style={{ borderColor: 'rgba(59,130,246,0.4)', background: 'rgba(59,130,246,0.08)' }}>
                <Brain className="w-3.5 h-3.5" style={{ color: C.blue }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: C.blue }}>AI HRtech Platform • Case Study</span>
              </motion.div>

              <motion.h1 variants={V.up} className="text-5xl md:text-7xl font-black leading-none tracking-tighter mb-6">
                <span className="text-white">HR</span>
                <span style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.emerald})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Assistance</span>
                <br />
                <span className="text-gray-400 text-3xl md:text-4xl font-medium">AI-Powered Intelligent Recruitment</span>
              </motion.h1>

              <motion.p variants={V.up} className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
                An advanced AI-driven hiring platform featuring real-time AI video interviews with lifelike avatars, 
                automated talent assessment, and intelligent recruiter dashboards — bridging candidates and companies with cutting-edge technology.
              </motion.p>

              <motion.div variants={V.up} className="flex flex-wrap gap-3 mb-10">
                {[
                  { label: '94% scheduling time saved', color: C.blue },
                  { label: '2,847+ AI interviews conducted', color: C.emerald },
                  { label: '73% faster hiring cycle', color: C.indigo },
                  { label: 'D-ID + Gemini AI powered', color: C.amber },
                ].map((b, i) => (
                  <div key={i} className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                    style={{ background: `${b.color}15`, border: `1px solid ${b.color}40`, color: b.color }}>
                    {b.label}
                  </div>
                ))}
              </motion.div>

              <motion.div variants={V.up} className="flex flex-wrap gap-3">
                <a href="https://hr-assistance-ai.vercel.app/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white transition-all hover:scale-105"
                  style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.emerald})`, boxShadow: `0 0 30px ${C.blue}40` }}>
                  View Live Project <ExternalLink className="w-4 h-4" />
                </a>
                {['n8n Automation', 'AI Recruitment', 'HRtech', 'Full-Stack'].map(tag => (
                  <span key={tag} className="text-xs text-gray-500 border border-white/10 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Dashboard Preview */}
            <motion.div variants={V.in} initial="hidden" animate="show" transition={{ delay: 0.3 }} className="relative">
              <div className="absolute inset-0 rounded-2xl blur-2xl opacity-25"
                style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.emerald})` }} />
              <img src="./hr-ai.png" alt="HR Assistance AI Dashboard"
                className="relative z-10 w-full rounded-2xl"
                style={{ border: '1px solid rgba(59,130,246,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }} />
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{ background: 'rgba(10,10,20,0.9)', border: '1px solid rgba(16,185,129,0.4)', color: C.emerald }}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AI Interview Live
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent" />
        </motion.div>
      </section>

      {/* ══ OVERVIEW ══════════════════════════════════════════════════════════ */}
      <section className="py-28" style={{ background: 'rgba(10,7,20,0.98)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={V.stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
              <motion.span variants={V.up} className="text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: C.blue }}>The Problem</motion.span>
              <motion.h2 variants={V.up} className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Traditional hiring is<br />broken, slow, and biased.
              </motion.h2>
              {[
                { icon: <Clock className="w-5 h-5 text-red-400" />, text: 'HR teams spend 40+ hours per hire on scheduling, screening, and initial interviews — before a real conversation begins.' },
                { icon: <Users className="w-5 h-5 text-amber-400" />, text: 'Human bias in resume screening eliminates qualified candidates before they ever get a chance to speak.' },
                { icon: <MessageSquare className="w-5 h-5 text-blue-400" />, text: 'Phone screens lack consistency — every interviewer asks different questions, making fair comparison impossible.' },
                { icon: <Activity className="w-5 h-5 text-purple-400" />, text: 'No unified data layer connecting applicant tracking, assessment scores, and hiring decisions.' },
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
                { value: 94, suffix: '%', label: 'Time Saved', color: C.blue },
                { value: 2847, suffix: '+', label: 'AI Interviews', color: C.emerald },
                { value: 73, suffix: '%', label: 'Faster Hiring', color: C.indigo },
                { value: 87, suffix: '%', label: 'Score Accuracy', color: C.amber },
              ].map((s, i) => (
                <motion.div key={i} variants={V.up} className="p-6 rounded-2xl text-center"
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

      {/* ══ FEATURE SHOWCASE ══════════════════════════════════════════════════ */}
      <section className="py-28" style={{ background: '#080612' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={V.stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="text-center mb-16">
            <motion.span variants={V.up} className="text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: C.blue }}>Core Modules</motion.span>
            <motion.h2 variants={V.up} className="text-3xl md:text-5xl font-bold text-white">
              Built to <span style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.emerald})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Reinvent Hiring</span>
            </motion.h2>
          </motion.div>

          {/* Feature tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {features.map((f, i) => (
              <button key={i} onClick={() => setActiveFeature(i)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                style={activeFeature === i
                  ? { background: `linear-gradient(135deg, ${f.color}, ${C.emerald})`, color: 'white' }
                  : { border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
                {f.icon} {f.title}
              </button>
            ))}
          </div>

          <motion.div key={activeFeature} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-flex p-3 rounded-xl mb-6"
                  style={{ background: `${features[activeFeature].color}15`, color: features[activeFeature].color }}>
                  {features[activeFeature].icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{features[activeFeature].title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">{features[activeFeature].desc}</p>
                <div className="space-y-3">
                  {features[activeFeature].points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: features[activeFeature].color }} />
                      <span className="text-sm text-gray-300">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature visual */}
              <div className="rounded-2xl p-6" style={{ background: 'rgba(15,10,30,0.95)', border: `1px solid ${features[activeFeature].color}20` }}>
                {activeFeature === 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-5">
                      <Video className="w-4 h-4" style={{ color: C.blue }} />
                      <span className="text-sm font-bold text-white">Live AI Interview</span>
                      <span className="ml-auto flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: 'rgba(16,185,129,0.1)', color: C.emerald }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Recording
                      </span>
                    </div>
                    {/* Simulated interview UI */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="aspect-video rounded-xl flex flex-col items-center justify-center"
                        style={{ background: `linear-gradient(135deg, #1e1b4b, #1e3a5f)`, border: '1px solid rgba(59,130,246,0.3)' }}>
                        <div className="w-12 h-12 rounded-full mb-2" style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.emerald})` }} />
                        <span className="text-xs text-blue-300">AI Interviewer</span>
                      </div>
                      <div className="aspect-video rounded-xl flex flex-col items-center justify-center"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <div className="w-12 h-12 rounded-full mb-2 bg-gray-700" />
                        <span className="text-xs text-gray-500">Candidate</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg mb-3" style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)' }}>
                      <p className="text-xs text-blue-300 mb-1 font-mono">AI Question:</p>
                      <p className="text-xs text-gray-300">"Walk me through a time when you had to manage competing priorities under a tight deadline..."</p>
                    </div>
                    <div className="flex gap-3">
                      {[{ l: 'Communication', v: 88, c: C.blue }, { l: 'Confidence', v: 74, c: C.emerald }, { l: 'Technical', v: 91, c: C.amber }].map(m => (
                        <div key={m.l} className="flex-1">
                          <div className="text-xs text-gray-500 mb-1">{m.l}</div>
                          <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
                            <motion.div initial={{ width: 0 }} animate={{ width: `${m.v}%` }} transition={{ duration: 1 }}
                              className="h-full rounded-full" style={{ background: m.c }} />
                          </div>
                          <div className="text-xs font-bold mt-1" style={{ color: m.c }}>{m.v}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {activeFeature === 1 && (
                  <div>
                    <div className="text-sm font-bold text-white mb-5">Recruiter Dashboard</div>
                    {[
                      { name: 'Sarah Chen', role: 'Frontend Dev', score: 94, status: 'Recommended', color: C.emerald },
                      { name: 'Marcus Lee', role: 'Backend Eng', score: 81, status: 'Review', color: C.amber },
                      { name: 'Priya Patel', role: 'Full-Stack', score: 88, status: 'Recommended', color: C.emerald },
                      { name: 'Alex Turner', role: 'DevOps', score: 67, status: 'Declined', color: '#ef4444' },
                    ].map((c, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl mb-2"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{ background: `${C.blue}20`, color: C.blue }}>{c.name[0]}</div>
                        <div className="flex-1">
                          <div className="text-xs font-bold text-white">{c.name}</div>
                          <div className="text-xs text-gray-500">{c.role}</div>
                        </div>
                        <div className="text-sm font-black" style={{ color: c.color }}>{c.score}</div>
                        <div className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ background: `${c.color}15`, color: c.color }}>{c.status}</div>
                      </div>
                    ))}
                  </div>
                )}
                {activeFeature === 2 && (
                  <div>
                    <div className="text-sm font-bold text-white mb-5">Resume Parser Output</div>
                    <div className="p-4 rounded-xl mb-4" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}>
                      <div className="text-xs text-gray-400 mb-2 font-mono">📄 sarah_chen_resume.pdf — parsed in 1.2s</div>
                      {[{ label: 'React', level: 95 }, { label: 'TypeScript', level: 88 }, { label: 'Node.js', level: 76 }, { label: 'PostgreSQL', level: 71 }].map(s => (
                        <div key={s.label} className="flex items-center gap-3 mb-2">
                          <span className="text-xs text-gray-400 w-20">{s.label}</span>
                          <div className="flex-1 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
                            <motion.div initial={{ width: 0 }} animate={{ width: `${s.level}%` }} transition={{ duration: 1 }}
                              className="h-full rounded-full" style={{ background: C.indigo }} />
                          </div>
                          <span className="text-xs font-bold" style={{ color: C.indigo }}>{s.level}%</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-center text-gray-500">Match score for Senior Frontend role:</div>
                    <div className="text-3xl font-black text-center mt-1" style={{ color: C.emerald }}>94.2%</div>
                  </div>
                )}
                {activeFeature === 3 && (
                  <div>
                    <div className="text-sm font-bold text-white mb-5">Job Pipeline</div>
                    {['Application Review', 'AI Pre-Screen', 'AI Video Interview', 'Technical Assessment', 'Final Decision'].map((stage, i) => (
                      <div key={i} className="flex items-center gap-3 mb-3">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                          style={{ background: i < 3 ? `${C.blue}20` : 'rgba(255,255,255,0.05)', color: i < 3 ? C.blue : 'rgba(255,255,255,0.3)', border: `1px solid ${i < 3 ? C.blue + '40' : 'rgba(255,255,255,0.1)'}` }}>
                          {i < 3 ? '✓' : i + 1}
                        </div>
                        <span className="text-xs" style={{ color: i < 3 ? 'white' : 'rgba(255,255,255,0.35)' }}>{stage}</span>
                        <span className="ml-auto text-xs" style={{ color: i < 3 ? C.emerald : 'rgba(255,255,255,0.2)' }}>
                          {i < 3 ? `${[24, 12, 8][i]} candidates` : '—'}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ TECH STACK ════════════════════════════════════════════════════════ */}
      <section className="py-28" style={{ background: 'rgba(10,7,20,0.98)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={V.stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="text-center mb-16">
            <motion.span variants={V.up} className="text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: C.blue }}>Engineering Stack</motion.span>
            <motion.h2 variants={V.up} className="text-3xl md:text-5xl font-bold text-white">
              Powered by <span style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.emerald})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Modern AI Infrastructure</span>
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

      {/* ══ IMPACT ════════════════════════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" style={{ background: '#080612' }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)`,
          backgroundSize: '44px 44px'
        }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.06) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={V.stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="text-center mb-20">
            <motion.span variants={V.up} className="text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: C.blue }}>Measured Results</motion.span>
            <motion.h2 variants={V.up} className="text-3xl md:text-5xl font-bold text-white">
              Real <span style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.emerald})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Hiring Impact</span>
            </motion.h2>
          </motion.div>

          <motion.div variants={V.stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {impactMetrics.map((m, i) => (
              <motion.div key={i} variants={V.up} className="p-8 rounded-2xl text-center group"
                style={{ background: 'rgba(15,10,30,0.85)', border: `1px solid ${m.color}20` }}
                whileHover={{ borderColor: `${m.color}50`, scale: 1.02 }}>
                <div className="inline-flex p-3 rounded-xl mb-5" style={{ background: `${m.color}15`, color: m.color }}>{m.icon}</div>
                <div className="text-4xl font-black mb-2" style={{ color: m.color }}>
                  {m.special ? m.special : <Counter value={m.value} suffix={m.suffix} duration={2500} />}
                </div>
                <p className="text-gray-400 text-sm">{m.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial */}
          <motion.div variants={V.up} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center p-10 rounded-2xl"
            style={{ background: 'rgba(15,10,30,0.7)', border: `1px solid ${C.blue}25` }}>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" style={{ color: C.amber }} />)}
            </div>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              HR-Assistance-AI completely transformed our hiring pipeline. We used to spend 3 weeks screening 200 candidates 
              — now the AI conducts initial video interviews overnight and presents us with a ranked shortlist with detailed 
              competency reports. Our time-to-hire dropped from 47 days to 12.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.emerald})` }}>
                RT
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-sm">Rachel Torres</div>
                <div className="text-gray-500 text-xs">Head of Talent Acquisition, TechScale Inc.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,7,20,0.98)' }}>
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 0%, ${C.blue}12 0%, transparent 60%)` }} />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div variants={V.stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={V.up} className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Want an AI-powered<br />
              <span style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.emerald})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>automation built for you?</span>
            </motion.h2>
            <motion.p variants={V.up} className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              We build n8n workflows, AI automations, and intelligent SaaS tools that eliminate manual work and scale your operations.
            </motion.p>
            <motion.div variants={V.up} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-lg rounded-full text-white transition-all hover:scale-105"
                style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.emerald})`, boxShadow: `0 0 40px ${C.blue}40` }}>
                Start Your Project <ChevronRight className="w-5 h-5" />
              </Link>
              <a href="https://hr-assistance-ai.vercel.app/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-medium text-lg rounded-full text-white border border-white/10 hover:border-white/30 transition-all">
                View Live Site <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
