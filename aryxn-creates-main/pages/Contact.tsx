import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', budget: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
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
    <div className="pt-32 pb-24 min-h-screen bg-[#161719] text-[#F5F5F5] selection:bg-[#A8F000] selection:text-[#161719]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Copy & Info */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-mono text-[#A8F000] tracking-widest uppercase block mb-2">START A PROJECT</span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-[#F5F5F5] uppercase tracking-tight leading-[1.05]">
                LET'S BUILD <br />
                <span className="text-[#A8F000]">TOGETHER.</span>
              </h1>
            </div>

            <p className="text-[#9A9B9E] text-lg font-light leading-relaxed">
              Tell us about your brand, project scope, or business goals. We review every inquiry personally and respond within 24 hours.
            </p>

            <div className="space-y-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-4 text-[#F5F5F5]">
                <div className="p-3 bg-[#1F2023] rounded-full border border-white/10 text-[#A8F000]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#9A9B9E] block uppercase">Direct Email</span>
                  <a href="mailto:aryanthakur.1125.bussiness@gmail.com" className="text-sm font-medium hover:text-[#A8F000] transition-colors break-all">
                    aryanthakur.1125.bussiness@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[#F5F5F5]">
                <div className="p-3 bg-[#1F2023] rounded-full border border-white/10 text-[#A8F000]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#9A9B9E] block uppercase">Direct Phone</span>
                  <a href="tel:+919015334416" className="text-sm font-medium hover:text-[#A8F000] transition-colors">
                    +91 9015334416
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[#F5F5F5]">
                <div className="p-3 bg-[#1F2023] rounded-full border border-white/10 text-[#A8F000]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#9A9B9E] block uppercase">Headquarters</span>
                  <span className="text-sm font-medium">Chandigarh, India • Worldwide Operations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#1F2023] border border-white/10 rounded-2xl p-8 md:p-10">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#A8F000]/10 rounded-full flex items-center justify-center text-[#A8F000] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#F5F5F5] uppercase tracking-tight">MESSAGE RECEIVED</h3>
                  <p className="text-sm text-[#9A9B9E]">Thank you for reaching out. We will review your project details and get back to you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="text-xs font-mono text-[#A8F000] underline uppercase">
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono text-[#9A9B9E] uppercase mb-2">YOUR NAME</label>
                    <input 
                      required 
                      type="text" 
                      name="name"
                      className="w-full bg-[#161719] border border-white/10 rounded-xl p-4 text-[#F5F5F5] placeholder-[#9A9B9E] focus:border-[#A8F000]/60 focus:outline-none transition-colors text-sm"
                      placeholder="e.g. Sarah Jenkins"
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#9A9B9E] uppercase mb-2">YOUR EMAIL</label>
                    <input 
                      required 
                      type="email" 
                      name="email"
                      className="w-full bg-[#161719] border border-white/10 rounded-xl p-4 text-[#F5F5F5] placeholder-[#9A9B9E] focus:border-[#A8F000]/60 focus:outline-none transition-colors text-sm"
                      placeholder="e.g. sarah@brand.com"
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#9A9B9E] uppercase mb-2">ESTIMATED PROJECT BUDGET</label>
                    <select 
                      name="budget"
                      className="w-full bg-[#161719] border border-white/10 rounded-xl p-4 text-[#F5F5F5] focus:border-[#A8F000]/60 focus:outline-none transition-colors text-sm appearance-none"
                      value={formState.budget}
                      onChange={e => setFormState({...formState, budget: e.target.value})}
                    >
                      <option value="" disabled>Select Budget Scope</option>
                      <option value="2.5k-5k">$2,500 – $5,000</option>
                      <option value="5k-15k">$5,000 – $15,000</option>
                      <option value="15k-30k">$15,000 – $30,000</option>
                      <option value="30k+">$30,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#9A9B9E] uppercase mb-2">PROJECT OVERVIEW & GOALS</label>
                    <textarea 
                      required
                      name="message"
                      rows={5}
                      className="w-full bg-[#161719] border border-white/10 rounded-xl p-4 text-[#F5F5F5] placeholder-[#9A9B9E] focus:border-[#A8F000]/60 focus:outline-none transition-colors text-sm"
                      placeholder="Describe your brand, key requirements, timelines..."
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#A8F000] text-[#161719] font-bold text-xs tracking-wider uppercase rounded-xl hover:bg-white transition-all flex justify-center items-center shadow-[0_0_20px_rgba(168,240,0,0.2)] disabled:opacity-50"
                  >
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "START A PROJECT →"}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};