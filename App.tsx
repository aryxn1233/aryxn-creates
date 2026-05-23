import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AISalesAssistant } from './components/AISalesAssistant';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Services } from './pages/Services';
import { Pricing } from './pages/Pricing';
import { Process } from './pages/Process';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { AntigravityOps } from './pages/AntigravityOps';
import { NeuroFlowAI } from './pages/NeuroFlowAI';
import { HRAssistanceAI } from './pages/HRAssistanceAI';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-aether-900 min-h-screen text-white font-sans selection:bg-aether-accent selection:text-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/process" element={<Process />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio/antigravity-ops" element={<AntigravityOps />} />
            <Route path="/portfolio/neuroflow-ai" element={<NeuroFlowAI />} />
            <Route path="/portfolio/hr-assistance-ai" element={<HRAssistanceAI />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AISalesAssistant />
      </div>
    </HashRouter>
  );
};

export default App;