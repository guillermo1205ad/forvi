import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { DeliverablesSection } from './components/DeliverablesSection';
import { AboutSection } from './components/AboutSection';
import { MethodologySection } from './components/MethodologySection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <ServicesSection />
        <DeliverablesSection />
        <MethodologySection />
        <AboutSection />
        <FaqSection />
        <div id="calculadora" className="legacy-anchor" aria-hidden="true" />
        <div id="diagnostico" className="legacy-anchor" aria-hidden="true" />
        <ContactSection />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
