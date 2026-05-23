import React from 'react';
import { Zap, Target, Cpu, GitMerge } from 'lucide-react';

export const About: React.FC = () => {
  const reasons = [
    {
      icon: <GitMerge className="w-6 h-6 text-aether-purple dark:text-aether-accent" />,
      title: "n8n Specialists",
      description: "We don't dabble in n8n — we live in it. From complex multi-step pipelines to custom node development, we've built hundreds of production workflows."
    },
    {
      icon: <Target className="w-6 h-6 text-aether-accent dark:text-aether-purple" />,
      title: "Outcome-Focused",
      description: "We don't measure success by workflows shipped — we measure it by hours saved, errors eliminated, and revenue unlocked. Every automation has a clear ROI."
    },
    {
      icon: <Cpu className="w-6 h-6 text-yellow-600 dark:text-aether-gold" />,
      title: "AI-Native Automation",
      description: "We build AI agents and LLM-powered pipelines natively in n8n — integrating GPT-4, Claude, and Gemini into your operations without black-box complexity."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
      title: "Full-Stack Capability",
      description: "Need a custom webhook? An API wrapper? A dashboard to monitor your automation? We build the supporting infrastructure your workflows need to thrive."
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-12 text-gray-900 dark:text-white">Who We Are</h1>
            <div className="prose prose-invert prose-lg max-w-none mb-20">
                <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    We're a team of <span className="text-aether-purple dark:text-aether-accent">n8n automation experts, AI engineers, and workflow architects</span> obsessed with eliminating manual work.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                    We've spent years inside the automation stack — building n8n workflows, integrating LLM agents, and connecting business tools into unified operational systems for companies across healthcare, finance, SaaS, and e-commerce.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                    Our projects don't just automate tasks — they transform operations. From simple Slack-to-CRM triggers to full multi-agent AI pipelines handling thousands of daily operations, we build automation that scales.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                     <img src="./coders1.jpg" className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500 shadow-lg" alt="Automation Engineering" />
                     <img src="./coders2.jpg" className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500 shadow-lg" alt="Workflow Architecture" />
                </div>

                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">Our Philosophy</h3>
                <p className="text-gray-600 dark:text-gray-400">
                    Automation done right should be invisible — it should just work. We combine deep n8n expertise with careful system design to build workflows that handle errors gracefully, scale without breaking, and evolve with your business. We don't just build automations. We build reliable operational infrastructure.
                </p>
            </div>

            {/* Why Choose Section */}
            <div className="border-t border-gray-200 dark:border-white/10 pt-20">
                <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">Why Choose <span className="text-aether-purple dark:text-aether-accent">Our Team</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reasons.map((reason, idx) => (
                        <div key={idx} className="p-8 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-aether-purple/30 dark:hover:border-aether-accent/30 transition-colors group">
                            <div className="mb-4 p-3 bg-gray-100 dark:bg-white/5 w-fit rounded-lg group-hover:scale-110 transition-transform">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{reason.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};