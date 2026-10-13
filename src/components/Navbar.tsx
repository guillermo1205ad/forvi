import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, ArrowUpRight } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Inteligencia Artificial', href: '#ia' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Cómo trabajamos', href: '#metodologia' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#000A18]/85 backdrop-blur-md border-b border-forvi-blue-500/15 py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-forvi-blue-400 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo-symbol.png"
                alt="FORVI Isotipo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(2,122,241,0.5)]"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-extrabold tracking-wider text-white font-display group-hover:text-forvi-cyan-400 transition-colors">
                  FORVI
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-forvi-cyan-400 animate-pulse"></span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-tight text-slate-400 -mt-1 group-hover:text-slate-300 transition-colors">
                Software a tu medida.
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-forvi-blue-500 to-forvi-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={SITE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/25 hover:border-emerald-500/40 rounded-lg transition-all duration-200"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>WhatsApp Directo</span>
            </a>

            <a
              href="#contacto"
              className="group relative inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-forvi-blue-600 via-forvi-blue-500 to-forvi-cyan-500 hover:from-forvi-blue-500 hover:to-forvi-cyan-400 rounded-lg shadow-md shadow-forvi-blue-600/30 hover:shadow-forvi-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Cuéntanos tu proyecto</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="#contacto"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-forvi-blue-600 rounded-lg"
            >
              Cotizar
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-forvi-blue-400"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-[#000A18]/95 backdrop-blur-xl border-b border-forvi-blue-500/20 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-slate-200 hover:text-white hover:bg-forvi-blue-900/40 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={SITE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 rounded-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Conversar por WhatsApp (+56 9 3577 9373)</span>
              </a>

              <a
                href="#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-gradient-to-r from-forvi-blue-600 to-forvi-cyan-500 rounded-lg shadow-lg shadow-forvi-blue-600/30"
              >
                <span>Cuéntanos tu proyecto</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
