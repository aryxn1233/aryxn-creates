import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "BRAND IDENTITY & WEB",
    price: "$2,500",
    desc: "For startups and businesses launching or repositioning their visual identity and digital web presence.",
    features: [
      "Brand Positioning & Strategy",
      "Visual Identity System & Logo Kit",
      "Custom React/Next.js Website",
      "Mobile & SEO Optimization",
      "Copywriting & Content Guidance",
      "Launch Support & Training"
    ]
  },
  {
    name: "GROWTH ECOSYSTEM",
    price: "$6,500",
    highlight: true,
    desc: "End-to-end agency partnership combining strategy, design, content engine, and performance growth.",
    features: [
      "Complete Brand Strategy & Identity",
      "Custom Full-Stack Web Platform",
      "AI-Powered Creative Asset Production",
      "Social Growth & Audience Strategy",
      "Performance Campaign Assets",
      "CRO & Conversion Funnel Design",
      "Dedicated Creative Strategist",
      "Ongoing Monthly Support"
    ]
  },
  {
    name: "ENTERPRISE & SYSTEMS",
    price: "Custom",
    desc: "Full-scale custom agency engagement for enterprise brands requiring advanced tech, AI & automation.",
    features: [
      "Custom Enterprise Software & SaaS",
      "AI & n8n Automation Infrastructure",
      "Multi-Agent AI Systems",
      "Global Campaign Art Direction",
      "Dedicated Engineering Team",
      "Custom SLA & Priority Support",
      "Full IP Ownership & Docs"
    ]
  }
];

export const Pricing: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#161719] text-[#F5F5F5] selection:bg-[#A8F000] selection:text-[#161719]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20 max-w-3xl">
          <span className="text-xs font-mono text-[#A8F000] tracking-widest uppercase block mb-2">ENGAGEMENT PACKAGES</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#F5F5F5] uppercase tracking-tight mb-6">
            TRANSPARENT AGENCY PRICING
          </h1>
          <p className="text-[#9A9B9E] text-lg font-light leading-relaxed">
            Straightforward outcome-based pricing. No hidden hourly fees — transparent scope and deliverables built for high-growth brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-2xl p-8 md:p-10 border flex flex-col justify-between ${
                plan.highlight
                  ? 'bg-[#1F2023] border-[#A8F000] shadow-[0_0_40px_rgba(168,240,0,0.15)]'
                  : 'bg-[#1F2023] border-white/10'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#A8F000] text-[#161719] font-mono font-bold text-[10px] uppercase tracking-widest rounded-full">
                  MOST REQUESTED
                </div>
              )}

              <div>
                <h3 className="text-xl font-extrabold text-[#F5F5F5] uppercase tracking-tight mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-extrabold text-[#F5F5F5]">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-[#9A9B9E] text-xs font-mono"> / scope</span>}
                </div>
                <p className="text-[#9A9B9E] text-xs font-light leading-relaxed mb-8">{plan.desc}</p>

                <div className="border-t border-white/5 pt-6 mb-8">
                  <span className="text-[10px] font-mono text-[#A8F000] tracking-widest uppercase block mb-4">WHAT'S INCLUDED</span>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-xs text-[#F5F5F5] font-light">
                        <Check className="w-3.5 h-3.5 text-[#A8F000] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                to="/contact"
                className={`w-full text-center py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                  plan.highlight
                    ? 'bg-[#A8F000] text-[#161719] hover:bg-white'
                    : 'bg-[#161719] text-[#F5F5F5] border border-white/10 hover:border-[#A8F000] hover:text-[#A8F000]'
                }`}
              >
                <span>GET STARTED</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[#9A9B9E] text-xs font-mono uppercase tracking-widest mt-16">
          All engagements begin with an initial strategy call and detailed project scoping. <Link to="/contact" className="text-[#A8F000] underline">Contact us for custom retainers.</Link>
        </p>

      </div>
    </div>
  );
};