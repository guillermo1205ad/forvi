import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AiSection } from './components/AiSection';
import { ProjectCalculator } from './components/ProjectCalculator';
import { AboutSection } from './components/AboutSection';
import { MethodologySection } from './components/MethodologySection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#000A18] text-slate-100 flex flex-col font-sans selection:bg-forvi-blue-500 selection:text-white">
      {/* Top sticky navigation */}
      <Navbar />

      {/* Main content body */}
      <main className="flex-grow">
        {/* Hero with interactive code & matrix visualizer */}
        <Hero />

        {/* Area A: Custom Software Development */}
        <ServicesSection />

        {/* Area B: Applied Artificial Intelligence */}
        <AiSection />

        {/* Interactive Scope Estimator */}
        <ProjectCalculator />

        {/* About FORVI & Professional backing */}
        <AboutSection />

        {/* 4-step progressive methodology */}
        <MethodologySection />

        {/* Contact form & direct channels */}
        <ContactSection />
      </main>

      {/* Floating 24/7 WhatsApp concierge button */}
      <FloatingWhatsApp />

      {/* Comprehensive corporate footer */}
      <Footer />
    </div>
  );
};

export default App;
