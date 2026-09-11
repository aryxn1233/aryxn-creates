import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121315] border-t border-white/10 pt-20 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-block">
              <img src="/logo.png" alt="ARYXN CREATES" className="h-12 object-contain" />
            </Link>
            <p className="text-[#A8F000] text-xs font-mono tracking-widest uppercase">
              ONE TEAM. ONE VISION. ONE DIRECTION.
            </p>
            <p className="text-[#9A9B9E] text-sm leading-relaxed max-w-md">
              ARYXN CREATES is an independent creative growth agency combining strategy, design, AI and technology to build brands that look exceptional — and grow.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono text-[#F5F5F5] tracking-widest uppercase mb-4">NAVIGATION</h4>
            <ul className="space-y-3 text-sm text-[#9A9B9E]">
              <li><Link to="/portfolio" className="hover:text-[#A8F000] transition-colors">Selected Work</Link></li>
              <li><Link to="/services" className="hover:text-[#A8F000] transition-colors">Services & Expertise</Link></li>
              <li><Link to="/process" className="hover:text-[#A8F000] transition-colors">Process & Strategy</Link></li>
              <li><Link to="/about" className="hover:text-[#A8F000] transition-colors">About the Agency</Link></li>
              <li><Link to="/contact" className="hover:text-[#A8F000] transition-colors">Start a Project</Link></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono text-[#F5F5F5] tracking-widest uppercase mb-4">CONNECT WITH US</h4>
            <div className="space-y-3 text-sm text-[#9A9B9E]">
              <a 
                href="mailto:aryanthakur.1125.bussiness@gmail.com" 
                className="flex items-center gap-2 hover:text-[#A8F000] transition-colors break-all"
              >
                <Mail className="w-4 h-4 shrink-0 text-[#A8F000]" />
                <span>aryanthakur.1125.bussiness@gmail.com</span>
              </a>
              <p className="text-xs text-[#9A9B9E] pt-2">Based in Chandigarh, India • Serving Clients Globally</p>
            </div>

            <div className="flex gap-3 pt-4">
              <a 
                href="https://www.instagram.com/aryxn.creates?stkn=amdxZXhqd2ZieGJu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-[#1F2023] rounded-full border border-white/10 hover:border-[#A8F000] text-[#F5F5F5] hover:text-[#A8F000] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/aryxnsays220" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-[#1F2023] rounded-full border border-white/10 hover:border-[#A8F000] text-[#F5F5F5] hover:text-[#A8F000] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://x.com/Aryxnsays" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-[#1F2023] rounded-full border border-white/10 hover:border-[#A8F000] text-[#F5F5F5] hover:text-[#A8F000] transition-all"
                aria-label="Twitter/X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#9A9B9E]">
          <p>© {new Date().getFullYear()} ARYXN CREATES. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-[#F5F5F5] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#F5F5F5] transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
