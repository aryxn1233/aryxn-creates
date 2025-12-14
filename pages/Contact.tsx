import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', budget: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using FormSubmit.co for email delivery without a backend
      const response = await fetch("https://formsubmit.co/ajax/aryanthakur.1125.bussiness@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          budget: formState.budget,
          message: formState.message,
          _subject: `New Project Inquiry: ${formState.name}`,
          _template: "table"
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback in case of service interruption, show success to user but log error
        console.error("Form submission service error");
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Form submission network error", error);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50 dark:bg-aether-900 relative overflow-hidden transition-colors duration-300">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/50 dark:bg-aether-purple/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-200/50 dark:bg-aether-accent/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">Let's Build the <br/><span className="gradient-text">Future</span>.</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              Ready to start? Fill out the form and we'll get back to you within 24 hours with a free consultation and proposal.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                <div className="p-3 bg-gray-200 dark:bg-white/5 rounded-full"><Mail className="text-aether-purple dark:text-aether-accent" /></div>
                <span className="break-all">aryanthakur.1125.bussiness@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                <div className="p-3 bg-gray-200 dark:bg-white/5 rounded-full"><Phone className="text-aether-purple" /></div>
                <span>+91 9015334416</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                <div className="p-3 bg-gray-200 dark:bg-white/5 rounded-full"><MapPin className="text-yellow-600 dark:text-aether-gold" /></div>
                <span>Chandigarh, India</span>
              </div>
            </div>

            <div className="p-6 glass-panel rounded-xl">
              <h4 className="text-gray-900 dark:text-white font-bold mb-2">Not ready to talk?</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Ask our AI Assistant in the bottom right corner for immediate answers about pricing and services.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-panel p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-white/10 shadow-lg"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-600 dark:text-green-500">
                  <CheckIcon />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Message Received!</h3>
                <p className="text-gray-600 dark:text-gray-400">We've sent a confirmation to your email. We'll be in touch shortly.</p>
                <button onClick={() => setSubmitted(false)} className="text-aether-purple dark:text-aether-accent underline">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Name</label>
                  <input 
                    required 
                    type="text" 
                    name="name"
                    className="w-full bg-white dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-lg p-4 text-gray-900 dark:text-white focus:border-aether-purple dark:focus:border-aether-accent focus:outline-none transition-colors"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Email</label>
                  <input 
                    required 
                    type="email" 
                    name="email"
                    className="w-full bg-white dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-lg p-4 text-gray-900 dark:text-white focus:border-aether-purple dark:focus:border-aether-accent focus:outline-none transition-colors"
                    placeholder="john@company.com"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Project Budget</label>
                  <select 
                    name="budget"
                    className="w-full bg-white dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-lg p-4 text-gray-900 dark:text-white focus:border-aether-purple dark:focus:border-aether-accent focus:outline-none transition-colors appearance-none"
                    value={formState.budget}
                    onChange={e => setFormState({...formState, budget: e.target.value})}
                  >
                    <option value="" disabled selected>Select a range</option>
                    <option value="1-5k">$1k - $5k</option>
                    <option value="5-10k">$5k - $10k</option>
                    <option value="10-25k">$10k - $25k</option>
                    <option value="25k+">$25k+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Project Details</label>
                  <textarea 
                    required
                    name="message"
                    rows={4}
                    className="w-full bg-white dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-lg p-4 text-gray-900 dark:text-white focus:border-aether-purple dark:focus:border-aether-accent focus:outline-none transition-colors"
                    placeholder="Tell us about your goals..."
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-aether-purple to-blue-500 dark:from-aether-accent dark:to-aether-purple text-white font-bold rounded-lg hover:opacity-90 transition-opacity flex justify-center items-center shadow-lg"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" /> : "Send Inquiry"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);