import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black py-16 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
             <Link to="/" className="text-3xl tracking-tighter flex items-end gap-1">
               <span className="text-aether-purple dark:text-aether-accent font-bold font-sans">aryxn</span>
               <span className="text-yellow-600 dark:text-aether-gold font-script text-3xl -mb-1 transform -rotate-2">creates</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed">
              n8n automation experts building AI-powered workflows that eliminate manual work and scale your operations.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-500">
              <li><Link to="/portfolio" className="hover:text-aether-purple dark:hover:text-aether-accent transition-colors">Work</Link></li>
              <li><Link to="/services" className="hover:text-aether-purple dark:hover:text-aether-accent transition-colors">Services</Link></li>
              <li><Link to="/process" className="hover:text-aether-purple dark:hover:text-aether-accent transition-colors">Process</Link></li>
              <li><Link to="/about" className="hover:text-aether-purple dark:hover:text-aether-accent transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Services</h4>
             <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-500">
              <li>n8n Workflows</li>
              <li>AI Agent Pipelines</li>
              <li>CRM Integrations</li>
              <li>Data Automation</li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-gray-900 dark:text-white mb-6">Connect</h4>
             <div className="flex gap-4">
                <a href="https://x.com/Aryxnsays" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-white/5 rounded-full hover:bg-aether-purple dark:hover:bg-aether-accent hover:text-white dark:hover:text-black transition-all shadow-sm">
                  <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-black" />
                </a>
                <a href="https://www.linkedin.com/in/aryxnsays220" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-white/5 rounded-full hover:bg-aether-purple dark:hover:bg-aether-accent hover:text-white dark:hover:text-black transition-all shadow-sm">
                  <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-black" />
                </a>
                <a href="#" className="p-2 bg-white dark:bg-white/5 rounded-full hover:bg-aether-purple dark:hover:bg-aether-accent hover:text-white dark:hover:text-black transition-all shadow-sm">
                  <Instagram className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-black" />
                </a>
             </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2025 Aryxn Creates. n8n Automation Experts.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-gray-900 dark:hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-900 dark:hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};