import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Starter",
    price: "$800",
    desc: "Perfect for solopreneurs and small teams who need their first automation win.",
    features: [
      "Up to 3 n8n Workflows",
      "Tool Integration (up to 5 apps)",
      "Trigger + Action Setup",
      "Basic Error Handling",
      "1 Revision Round",
      "Workflow Documentation"
    ]
  },
  {
    name: "Growth",
    price: "$2,500",
    highlight: true,
    desc: "For scaling teams ready to automate their core business processes end-to-end.",
    features: [
      "Up to 10 n8n Workflows",
      "AI Agent Integration (GPT-4 / Gemini)",
      "CRM + Tool Ecosystem Connect",
      "Advanced Error Handling & Retry Logic",
      "Webhook & API Automation",
      "3 Revision Rounds",
      "30-Day Post-Launch Support",
      "Workflow Documentation & Training"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Full-scale automation infrastructure for operations-heavy companies.",
    features: [
      "Unlimited Workflows",
      "Multi-Agent AI Pipelines",
      "Custom n8n Node Development",
      "Database & Data Pipeline Automation",
      "Real-time Monitoring & Alerts",
      "Dedicated Automation Engineer",
      "SLA-Backed Support",
      "Full Architecture Documentation"
    ]
  }
];

export const Pricing: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50 dark:bg-aether-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Transparent <span className="text-aether-purple dark:text-aether-accent">Automation Pricing</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Straightforward pricing for n8n automation builds. No hourly billing — you pay for outcomes and workflows delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-2xl p-8 border shadow-lg ${
                plan.highlight
                  ? 'bg-white dark:bg-gradient-to-b dark:from-aether-800 dark:to-black border-aether-purple dark:border-aether-accent shadow-aether-purple/20 dark:shadow-[0_0_30px_rgba(0,242,255,0.15)]'
                  : 'bg-white dark:bg-black/40 border-gray-200 dark:border-white/10'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-aether-purple dark:bg-aether-accent text-white dark:text-black font-bold text-xs rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" /> Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-500 text-sm"> / project</span>}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-8">{plan.desc}</p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <Check className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-aether-purple dark:text-aether-accent' : 'text-gray-400 dark:text-gray-600'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`w-full block text-center py-3 rounded-xl font-bold transition-all ${
                  plan.highlight
                  ? 'bg-aether-purple dark:bg-aether-accent text-white dark:text-black hover:opacity-90'
                  : 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white dark:hover:text-black'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-12">
          All plans include a discovery call, requirements audit, and workflow testing before delivery. Need something custom? <Link to="/contact" className="text-aether-purple dark:text-aether-accent font-medium">Let's talk.</Link>
        </p>
      </div>
    </div>
  );
};