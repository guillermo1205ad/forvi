import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../data/siteData';
import { IconRenderer } from './IconRenderer';
import { GitBranch, CheckCircle2, ArrowRight, ShieldCheck, Clock, FileCheck } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const activeStep = WORKFLOW_STEPS[selectedStep];

  return (
    <section id="metodologia" className="relative py-24 bg-[#000A18] overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-forvi-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forvi-blue-950/80 border border-forvi-blue-500/30 text-forvi-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Metodología de Trabajo // 4 Etapas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-6">
            Cómo transformamos una idea en{' '}
            <span className="bg-gradient-to-r from-forvi-cyan-300 via-forvi-blue-400 to-white bg-clip-text text-transparent">
              software operativo
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Nuestro proceso de cuatro etapas elimina la incertidumbre y te da control absoluto sobre el avance, el presupuesto y los resultados de tu proyecto.
          </p>
        </div>

        {/* 4 Steps Interactive Navigation Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {WORKFLOW_STEPS.map((step, idx) => {
            const isActive = selectedStep === idx;

            return (
              <button
                key={step.step}
                onClick={() => setSelectedStep(idx)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? 'bg-gradient-to-br from-[#00173d] to-[#00102e] border-forvi-cyan-400/60 shadow-xl shadow-forvi-blue-900/40 scale-[1.02]'
                    : 'bg-[#001332]/60 hover:bg-[#00173d]/80 border-forvi-blue-500/20 hover:border-forvi-blue-500/40'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-forvi-blue-500 to-forvi-cyan-400" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span className={`text-2xl font-black font-mono ${isActive ? 'text-forvi-cyan-400' : 'text-slate-500'}`}>
                    {step.step}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isActive ? 'bg-forvi-blue-600/30 text-forvi-cyan-300' : 'bg-white/5 text-slate-400'
                  }`}>
                    <IconRenderer name={step.iconName} className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className={`text-sm sm:text-base font-bold line-clamp-1 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                    {step.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Showcase Card */}
        <div className="rounded-2xl bg-gradient-to-br from-[#001332] via-[#000e26] to-[#000814] border border-forvi-blue-500/30 p-7 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black font-mono text-forvi-cyan-400">
                  {activeStep.step}
                </span>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                    Etapa del proceso
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {activeStep.title}
                  </h3>
                </div>
              </div>

              <div className="text-sm font-semibold text-forvi-cyan-300 bg-forvi-blue-950/60 px-3 py-1.5 rounded-lg border border-forvi-blue-500/20 inline-block">
                {activeStep.subtitle}
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeStep.description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3 flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-emerald-400" />
                  <span>Entregables garantizados de esta etapa:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStep.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-[#000a1c] border border-slate-800 text-xs text-slate-200 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stage Visual Sidebar */}
            <div className="lg:col-span-5 bg-[#000a1c] rounded-2xl border border-forvi-blue-500/20 p-6 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-mono text-forvi-cyan-400 uppercase tracking-wider block mb-2">
                  Garantía de Metodología
                </span>
                <h4 className="text-lg font-bold text-white mb-3">
                  Transparencia y Entregas Continuas
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  En ningún momento esperamos meses para mostrarte una sorpresa. Trabajamos con sprints cortos y entornos de prueba reales para que veas el avance de tu software semana a semana.
                </p>

                <div className="space-y-3 pt-3 border-t border-slate-800 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-forvi-cyan-400 shrink-0" />
                    <span>Fechas de entrega pactadas con hitos claros</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-forvi-cyan-400 shrink-0" />
                    <span>Garantía técnica posdespliegue incluida</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  ¿Quieres iniciar hoy?
                </span>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-forvi-blue-600 hover:bg-forvi-blue-500 rounded-lg transition-colors"
                >
                  <span>Agendar reunión</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
