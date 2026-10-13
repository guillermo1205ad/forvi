import { useState } from 'react';
import { ProjectInquiry } from './lib/projectInquiry';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AiSection } from './components/AiSection';
import { ProjectCalculator } from './components/ProjectCalculator';
import { AboutSection } from './components/AboutSection';
import { MethodologySection } from './components/MethodologySection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const [inquiry, setInquiry] = useState<ProjectInquiry | null>(null);
  return (
    <>
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <ServicesSection />
        <AiSection />
        <MethodologySection />
        <AboutSection />
        <ProjectCalculator onContact={setInquiry} />
        <FaqSection />
        <ContactSection inquiry={inquiry} />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
