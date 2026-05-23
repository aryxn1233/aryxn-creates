import React from 'react';
import { motion } from 'framer-motion';
import { GitMerge, Brain, Zap, RefreshCw, Webhook, Database, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <GitMerge className="w-8 h-8" style={{ color: '#7c3aed' }} />,
    title: "n8n Workflow Automation",
    desc: "Custom n8n workflows that connect your tools, automate repetitive tasks, and free your team to focus on high-value work.",
    price: "Starts at $800"
  },
  {
    icon: <Brain className="w-8 h-8" style={{ color: '#06b6d4' }} />,
    title: "AI Agent Pipelines",
    desc: "Multi-step AI agent workflows using GPT-4, Claude, and Gemini — integrated into your existing business processes.",
    price: "Starts at $1.5k"
  },
  {
    icon: <Zap className="w-8 h-8" style={{ color: '#f59e0b' }} />,
    title: "Business Process Automation",
    desc: "Map, optimize, and automate your critical business workflows — from lead nurturing to invoice processing to HR pipelines.",
    price: "Starts at $1.2k"
  },
  {
    icon: <RefreshCw className="w-8 h-8" style={{ color: '#10b981' }} />,
    title: "CRM & Tool Integration",
    desc: "Connect HubSpot, Notion, Airtable, Slack, and 400+ apps into unified automated workflows without writing a line of code.",
    price: "Starts at $600"
  },
  {
    icon: <Webhook className="w-8 h-8" style={{ color: '#ec4899' }} />,
    title: "Webhook & API Automation",
    desc: "Real-time automation triggered by webhooks, API events, and database changes — connecting your entire software stack.",
    price: "Custom Quote"
  },
  {
    icon: <Database className="w-8 h-8" style={{ color: '#6366f1' }} />,
    title: "Data Pipeline Automation",
    desc: "Automated data extraction, transformation, and loading (ETL) pipelines — keeping your dashboards and reports up to date.",
    price: "Retainer Based"
  }
];

const industries = ['Healthcare', 'Real Estate', 'E-commerce', 'Legal', 'Finance', 'SaaS', 'Agencies', 'HR & Recruitment'];

export const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
            Automation <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We build n8n-powered automation systems and AI workflows that eliminate manual work, connect your tools, and scale your operations — without writing custom code.
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

        {/* Industries */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">Industries We Automate</h2>
          <p className="text-gray-500 dark:text-gray-400 text-center mb-12 max-w-xl mx-auto">
            We've built automation workflows for businesses across every industry — wherever there's repetitive work, we eliminate it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind) => (
              <div key={ind} className="px-6 py-3 rounded-full border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium hover:border-aether-purple dark:hover:border-aether-accent hover:text-aether-purple dark:hover:text-aether-accent transition-colors cursor-default">
                {ind}
              </div>
            ))}
          </div>
        </div>

        {/* n8n callout */}
        <div className="mt-24 rounded-3xl p-12 text-center" style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(6,182,212,0.1))', border: '1px solid rgba(124,58,237,0.2)' }}>
          <div className="text-5xl mb-4">⚡</div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">n8n Certified Experts</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            We specialize in n8n — the most powerful open-source workflow automation platform. From simple 2-step automations to complex multi-agent AI pipelines with hundreds of nodes, we've built it all.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}>
            Discuss Your Automation <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};