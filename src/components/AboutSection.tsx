import React from 'react';
import { FOUNDER_CREDENTIALS, VALUE_PROPOSITIONS } from '../data/siteData';
import { Award, GraduationCap, ArrowUpRight, Compass, CheckCircle2, Building2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="relative py-24 bg-[#000d24] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-forvi-blue-700/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forvi-blue-950/80 border border-forvi-blue-500/30 text-forvi-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Sobre FORVI // Identidad & Visión</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-6">
            El puente entre la{' '}
            <span className="bg-gradient-to-r from-forvi-cyan-300 via-forvi-blue-400 to-white bg-clip-text text-transparent">
              visión de negocios
            </span>{' '}
            y la ingeniería de software
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            FORVI nació para resolver un problema recurrente en el mercado chileno: el software genérico es rígido y costoso, mientras que el desarrollo tradicional a menudo desconoce la realidad financiera y operativa de las empresas.
          </p>
        </div>

        {/* Corporate Philosophy Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Story Box */}
          <div className="lg:col-span-7 rounded-2xl bg-gradient-to-br from-[#001438] via-[#00102e] to-[#000a1c] border border-forvi-blue-500/25 p-7 sm:p-9 flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-forvi-cyan-400 tracking-wider mb-3">
                <Compass className="w-4 h-4" />
                <span>Nuestra Filosofía</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Comprender tu negocio es el primer paso antes de escribir código
              </h3>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <p>
                  En <strong className="text-white">FORVI</strong> sabemos que una solución tecnológica solo tiene éxito cuando genera impacto en la última línea: aumentando ventas, recortando horas de trabajo manual o brindando control total sobre las operaciones.
                </p>
                <p>
                  No imponemos tecnologías de moda ni sobrecargamos a nuestros clientes con costos innecesarios. Diseñamos con un balance exacto entre sencillez operativa, estabilidad técnica y rentabilidad.
                </p>
                <p>
                  Creemos firmemente que las pymes merecen el mismo nivel de sofisticación y excelencia tecnológica que las grandes corporaciones, pero con presupuestos sensatos, plazos realistas y un trato directo de persona a persona.
                </p>
              </div>
            </div>

            {/* 3 Pillars in Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-forvi-blue-900/50">
              <div className="p-3 rounded-xl bg-[#000a1c] border border-slate-800">
                <div className="text-forvi-cyan-400 font-bold text-sm mb-1">01. Escucha Activa</div>
                <div className="text-[11px] text-slate-400">Entendemos tus procesos reales antes de proponer cualquier solución.</div>
              </div>
              <div className="p-3 rounded-xl bg-[#000a1c] border border-slate-800">
                <div className="text-forvi-cyan-400 font-bold text-sm mb-1">02. Código Limpio</div>
                <div className="text-[11px] text-slate-400">Software modular, seguro, mantenible y propiedad 100% tuya.</div>
              </div>
              <div className="p-3 rounded-xl bg-[#000a1c] border border-slate-800">
                <div className="text-forvi-cyan-400 font-bold text-sm mb-1">03. Cero Humo</div>
                <div className="text-[11px] text-slate-400">Tecnología que funciona desde el día uno y genera rentabilidad.</div>
              </div>
            </div>
          </div>

          {/* Strategic Professional Backing (Guillermo Peralta) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#001332] border border-forvi-blue-500/30 p-7 sm:p-9 flex flex-col justify-between shadow-xl relative overflow-hidden">
            
            {/* Subtle brand watermark */}
            <div className="absolute -right-6 -bottom-6 w-44 h-44 opacity-5 pointer-events-none">
              <img src="/logo-symbol.png" alt="" className="w-full h-full object-contain" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forvi-blue-950 text-forvi-cyan-300 text-xs font-semibold uppercase tracking-wider border border-forvi-blue-500/30">
                  <Award className="w-3.5 h-3.5" />
                  <span>Respaldo Profesional</span>
                </div>

                <a
                  href={FOUNDER_CREDENTIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                  aria-label="Perfil de LinkedIn de Guillermo Peralta"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <h4 className="text-xl font-bold text-white mb-1">
                {FOUNDER_CREDENTIALS.name}
              </h4>
              <p className="text-xs font-medium text-forvi-cyan-400 mb-4 font-mono">
                {FOUNDER_CREDENTIALS.role}
              </p>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                FORVI cuenta con la dirección y respaldo profesional de Guillermo Peralta, quien combina una sólida formación en gestión de empresas y emprendimiento con investigación doctoral de frontera en inteligencia artificial.
              </p>

              {/* Verified Credential Badges */}
              <div className="space-y-2.5">
                {FOUNDER_CREDENTIALS.credentials.map((cred, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#000a1c] border border-forvi-blue-900/40 text-xs text-slate-200"
                  >
                    <GraduationCap className="w-4 h-4 text-forvi-cyan-400 shrink-0 mt-0.5" />
                    <span className="font-medium">{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Value Note */}
            <div className="mt-6 pt-5 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>FORVI SpA · Santiago de Chile</span>
              <a
                href={FOUNDER_CREDENTIALS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-forvi-cyan-400 hover:text-white font-semibold inline-flex items-center gap-1 transition-colors"
              >
                <span>Ver trayectoria completa</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

        {/* 4 Value Propositions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PROPOSITIONS.map((prop, index) => (
            <div
              key={index}
              className="rounded-xl bg-[#00102b] border border-forvi-blue-500/15 p-6 hover:border-forvi-cyan-400/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-forvi-blue-600/20 border border-forvi-blue-500/30 text-forvi-cyan-400 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5 text-forvi-cyan-400" />
              </div>

              <h4 className="text-base font-bold text-white mb-2">
                {prop.title}
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed">
                {prop.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
