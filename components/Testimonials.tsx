import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Founder, Luxe Tech',
    content: 'ARYXNCREATES completely transformed our brand identity and automated our lead generation. We saw a 3x increase in qualified leads within the first month.',
    avatar: 'https://i.pravatar.cc/150?img=47'
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'CEO, ScaleFast SaaS',
    content: 'The level of premium design and AI integration they brought to our product launch was unmatched. Truly an agency that understands the future of digital business.',
    avatar: 'https://i.pravatar.cc/150?img=11'
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'Marketing Director, Vibe Media',
    content: 'Their AI video ads and content planning strategy have been a game changer for us. We now have a consistent, high-converting presence across all channels.',
    avatar: 'https://i.pravatar.cc/150?img=5'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-black transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aether-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
            Loved by <span className="gradient-text">Visionaries</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. See what our partners say about building the future with ARYXNCREATES.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-3xl relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex gap-1 mb-6 text-aether-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10" />
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
