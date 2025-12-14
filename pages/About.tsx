import React from 'react';
import { Zap, Target, Cpu, PenTool } from 'lucide-react';

export const About: React.FC = () => {
  const reasons = [
    {
      icon: <Zap className="w-6 h-6 text-aether-purple dark:text-aether-accent" />,
      title: "Design Meets Performance",
      description: "We don't sacrifice speed for beauty. Our sites score green on Core Web Vitals while looking cinematic."
    },
    {
      icon: <Target className="w-6 h-6 text-aether-accent dark:text-aether-purple" />,
      title: "Conversion Psychology",
      description: "Every pixel is placed with intent. We use behavioral psychology to guide your visitors towards the 'Buy' button."
    },
    {
      icon: <Cpu className="w-6 h-6 text-yellow-600 dark:text-aether-gold" />,
      title: "Future-Proof Tech",
      description: "Built on the modern stack (React, Next.js), ensuring your platform is scalable, secure, and ready for tomorrow."
    },
    {
      icon: <PenTool className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
      title: "Bespoke Identity",
      description: "No templates, ever. Your brand is unique, and your digital presence should be designed from a blank canvas."
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-12 text-gray-900 dark:text-white">Who We Are</h1>
            <div className="prose prose-invert prose-lg max-w-none mb-20">
                <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    Aryxn Creates is a collective of visionary designers, engineers, and strategists. 
                    We believe the web is not just an information repository, but a canvas for 
                    <span className="text-aether-purple dark:text-aether-accent"> immersive storytelling.</span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                     <img src="./coders1.jpg" className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500 shadow-lg" alt="Agency Team" />
                     <img src="./coders2.jpg" className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500 shadow-lg" alt="Creative Process" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">Our Philosophy</h3>
                <p className="text-gray-600 dark:text-gray-400">
                    We combine data-driven strategy with high-end aesthetics. Many agencies can make things look good. 
                    Many can make things work. We do both, ensuring your digital presence is not only beautiful but 
                    a powerful engine for business growth.
                </p>
            </div>

            {/* Why Choose Section */}
            <div className="border-t border-gray-200 dark:border-white/10 pt-20">
                <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">Why Choose <span className="text-aether-purple dark:text-aether-accent">Aryxn Creates</span></h2>
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