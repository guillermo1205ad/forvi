import React from 'react';
import { SITE_INFO, FOUNDER_CREDENTIALS } from '../data/siteData';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#000713] text-slate-300 border-t border-forvi-blue-500/20 pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-20 bg-forvi-blue-600/10 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo-symbol.png"
                alt="FORVI Logo"
                className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(2,122,241,0.5)]"
              />
              <div>
                <span className="text-2xl font-black text-white tracking-wider font-display">
                  FORVI
                </span>
                <span className="block text-xs text-forvi-cyan-400 font-medium -mt-1">
                  {SITE_INFO.slogan}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Empresa chilena especializada en desarrollo de software a medida e inteligencia artificial aplicada para empresas y pymes. Combinamos visión empresarial e ingeniería de software de alto nivel.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={SITE_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#00102b] hover:bg-pink-950/40 border border-slate-800 hover:border-pink-500/50 text-slate-400 hover:text-pink-400 flex items-center justify-center transition-colors"
                aria-label="Instagram de FORVI"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={SITE_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#00102b] hover:bg-blue-950/40 border border-slate-800 hover:border-blue-500/50 text-slate-400 hover:text-blue-400 flex items-center justify-center transition-colors"
                aria-label="Facebook de FORVI"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={FOUNDER_CREDENTIALS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#00102b] hover:bg-sky-950/40 border border-slate-800 hover:border-sky-500/50 text-slate-400 hover:text-sky-400 flex items-center justify-center transition-colors"
                aria-label="LinkedIn de Guillermo Peralta"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-forvi-cyan-400 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-forvi-cyan-400 transition-colors">Servicios</a></li>
              <li><a href="#ia" className="hover:text-forvi-cyan-400 transition-colors">Inteligencia Artificial</a></li>
              <li><a href="#nosotros" className="hover:text-forvi-cyan-400 transition-colors">Nosotros</a></li>
              <li><a href="#metodologia" className="hover:text-forvi-cyan-400 transition-colors">Cómo trabajamos</a></li>
              <li><a href="#contacto" className="hover:text-forvi-cyan-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Soluciones Principales
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#servicios" className="hover:text-slate-200 transition-colors">Sistemas de Gestión ERP/CRM</a></li>
              <li><a href="#servicios" className="hover:text-slate-200 transition-colors">Aplicaciones Web Cloud</a></li>
              <li><a href="#servicios" className="hover:text-slate-200 transition-colors">Automatización de Workflows</a></li>
              <li><a href="#ia" className="hover:text-slate-200 transition-colors">Sistemas RAG & Asistentes</a></li>
              <li><a href="#ia" className="hover:text-slate-200 transition-colors">OCR Inteligente para Facturas</a></li>
              <li><a href="#ia" className="hover:text-slate-200 transition-colors">Visión Artificial & Biometría</a></li>
            </ul>
          </div>

          {/* Official Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Contacto Oficial
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-forvi-cyan-400 shrink-0 mt-0.5" />
                <a href={`mailto:${SITE_INFO.email}`} className="hover:text-white transition-colors">
                  {SITE_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a href={SITE_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {SITE_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Santiago, Chile</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-400">
              <span className="font-semibold text-slate-300">Horario de atención:</span>
              <br />
              Lunes a Viernes 09:00 - 18:30 hrs.
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {SITE_INFO.name} ({SITE_INFO.legalName}). Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
