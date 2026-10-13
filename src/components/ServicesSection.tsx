import React, { useState } from 'react';
import { SOFTWARE_SERVICES } from '../data/siteData';
import { IconRenderer } from './IconRenderer';
import { ArrowRight, CheckCircle2, AlertCircle, Sparkles, Layers, ChevronDown, ChevronUp } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(SOFTWARE_SERVICES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="servicios" className="relative py-24 bg-[#000d24] overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-forvi-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forvi-blue-950/80 border border-forvi-blue-500/30 text-forvi-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Área 01 // Soluciones Digitales</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-6">
            Desarrollo de Software{' '}
            <span className="bg-gradient-to-r from-forvi-cyan-400 via-forvi-blue-400 to-white bg-clip-text text-transparent">
              a tu medida
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Creamos software que se ajusta a la forma exacta en que opera tu empresa, resolviendo cuellos de botella reales sin obligarte a cambiar tus procesos ni a pagar suscripciones mensuales excesivas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {SOFTWARE_SERVICES.map((service, index) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className={`relative rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                  isExpanded
                    ? 'bg-[#00173d] border-2 border-forvi-cyan-400/50 shadow-xl shadow-forvi-blue-950/80 scale-[1.01]'
                    : 'bg-[#001332]/90 hover:bg-[#00173d] border border-forvi-blue-500/20 hover:border-forvi-cyan-400/40 shadow-lg'
                }`}
              >
                {/* Top card content */}
                <div className="p-6 sm:p-7">
                  
                  {/* Icon & Category indicator */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 p-3 rounded-xl bg-gradient-to-br from-forvi-blue-600/30 to-forvi-cyan-400/10 border border-forvi-blue-500/30 text-forvi-cyan-400 flex items-center justify-center">
                      <IconRenderer name={service.iconName} className="w-6 h-6 text-forvi-cyan-400" />
                    </div>

                    <span className="text-xs font-mono font-medium text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short description */}
                  <h3 className="text-xl font-bold text-white mb-2.5 font-display group-hover:text-forvi-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Benefit Callout */}
                  <div className="bg-[#000d24] rounded-xl p-3.5 border border-emerald-500/20 mb-5">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div className="text-xs text-slate-200">
                        <strong className="text-emerald-400 font-semibold block mb-0.5">Beneficio directo:</strong>
                        {service.businessBenefit}
                      </div>
                    </div>
                  </div>

                  {/* Collapsible / Expandable details */}
                  {isExpanded && (
                    <div className="space-y-4 pt-2 border-t border-slate-800 animate-in fade-in duration-300">
                      
                      {/* Problem solved */}
                      <div className="text-xs text-slate-300 bg-red-950/20 border border-red-500/20 rounded-lg p-3">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-red-300">Problema que resuelve:</span>{' '}
                            {service.typicalProblem}
                          </div>
                        </div>
                      </div>

                      {/* Capabilities list */}
                      <div>
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">
                          Capacidades clave:
                        </div>
                        <ul className="space-y-1.5">
                          {service.capabilities.map((cap, i) => (
                            <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-forvi-cyan-400 shrink-0 mt-1.5" />
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {service.techTags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-forvi-blue-950/80 text-forvi-cyan-300 border border-forvi-blue-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  )}

                </div>

                {/* Card footer toggle */}
                <div className="px-6 py-4 bg-[#000d24]/60 border-t border-forvi-blue-500/10 rounded-b-2xl flex items-center justify-between">
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="text-xs font-semibold text-forvi-cyan-400 hover:text-white flex items-center gap-1.5 transition-colors focus:outline-none"
                  >
                    <span>{isExpanded ? 'Ver menos detalles' : 'Ver capacidades completas'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  <a
                    href="#contacto"
                    className="text-xs font-medium text-slate-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Cotizar</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Adaptability Banner */}
        <div className="relative rounded-2xl p-8 bg-gradient-to-r from-forvi-navy-900 via-forvi-blue-900/40 to-forvi-navy-900 border border-forvi-blue-500/30 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-forvi-cyan-400 uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Flexibilidad y Escala Adaptativa</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                ¿Tu proyecto es pequeño o necesitas un sistema integral?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                En FORVI desarrollamos soluciones para todas las etapas empresariales. Iniciamos desde MVPs o automatizaciones sencillas hasta sistemas robustos de alta complejidad, adaptándonos con transparencia a tus recursos y presupuesto.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <a
                href="#contacto"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-gradient-to-r from-forvi-blue-600 to-forvi-cyan-500 hover:from-forvi-blue-500 hover:to-forvi-cyan-400 rounded-xl shadow-lg shadow-forvi-blue-600/30 transition-all text-center"
              >
                <span>Evaluar mi proyecto sin costo</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#metodologia"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors text-center"
              >
                <span>Conocer nuestra metodología</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
