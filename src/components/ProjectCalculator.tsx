import React, { useState } from 'react';
import { MessageSquare, Check, ArrowRight } from 'lucide-react';
import { SITE_INFO, CALCULATOR_TYPE_OPTIONS as TYPE_OPTIONS, CALCULATOR_SCALE_OPTIONS as SCALE_OPTIONS, CALCULATOR_INTEGRATION_OPTIONS as INTEGRATION_OPTIONS } from '../data/siteData';
import { ProjectInquiry } from '../lib/projectInquiry';

export const ProjectCalculator: React.FC<{ onContact: (inquiry: ProjectInquiry) => void }> = ({ onContact }) => {
  const [projectType, setProjectType] = useState('erp');
  const [projectScale, setProjectScale] = useState('mvp');
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>(['whatsapp']);
  const selectedType = TYPE_OPTIONS.find((option) => option.id === projectType)!;
  const selectedScale = SCALE_OPTIONS.find((option) => option.id === projectScale)!;
  const integrations = INTEGRATION_OPTIONS.filter((option) => selectedIntegrations.includes(option.id));

  const toggleIntegration = (id: string) => {
    setSelectedIntegrations((previous) => previous.includes(id) ? previous.filter((item) => item !== id) : [...previous, id]);
  };

  const waMessage = [
    'Hola FORVI, armé este resumen de mi proyecto:',
    `Solución: ${selectedType.label}.`,
    `Alcance: ${selectedScale.label}.`,
    `Integraciones: ${integrations.length ? integrations.map((option) => option.label).join(', ') : 'Por definir'}.`,
    `Referencia inicial del sitio: ${selectedScale.timeframe}, sujeta a evaluación.`,
    'Me gustaría conversar para validar el alcance, el plazo y el presupuesto.',
  ].join('\n');
  const whatsappUrl = `https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent(waMessage)}`;
  const optionStyle = (selected: boolean) => `rounded-xl border p-4 text-left transition-colors ${selected ? 'border-[#027AF1] bg-[#027AF1]/10 text-white' : 'border-white/10 bg-[#000A18]/40 text-slate-300 hover:border-white/30 hover:bg-white/5'}`;

  return (
    <section id="calculadora" aria-labelledby="calculator-heading" className="border-t border-white/10 bg-[#001020] py-20 sm:py-28">
      <div id="diagnostico" className="section-shell scroll-mt-28">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-4">Dale forma a tu idea</p>
          <h2 id="calculator-heading" className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">Tu proyecto, un poco más claro.</h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">Tres decisiones para ordenar lo que necesitas. Obtén una referencia inicial y comparte el resumen con nosotros.</p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-8">
          <div className="space-y-6">
            <fieldset className="min-w-0 rounded-2xl border border-white/10 bg-[#071a32] p-5 sm:p-6">
              <legend className="sr-only">1. ¿Qué necesitas resolver?</legend>
              <div aria-hidden="true" className="mb-5 flex items-center gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#027AF1]/40 text-xs font-medium text-[#59aeff]">01</span><h3 className="text-base font-semibold text-white">¿Qué necesitas resolver?</h3></div>
              <div className="grid gap-3 sm:grid-cols-2">
                {TYPE_OPTIONS.map((option) => (
                  <button type="button" key={option.id} aria-pressed={projectType === option.id} onClick={() => setProjectType(option.id)} className={optionStyle(projectType === option.id)}>
                    <span className="flex items-center justify-between gap-2 text-sm font-semibold">{option.label}<Check aria-hidden="true" className={`h-4 w-4 shrink-0 text-[#59aeff] ${projectType === option.id ? 'visible' : 'invisible'}`} /></span>
                    <span className="mt-2 block text-xs leading-relaxed text-slate-400">{option.desc}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="min-w-0 rounded-2xl border border-white/10 bg-[#071a32] p-5 sm:p-6">
              <legend className="sr-only">2. ¿Por dónde quieres empezar?</legend>
              <div aria-hidden="true" className="mb-5 flex items-center gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#027AF1]/40 text-xs font-medium text-[#59aeff]">02</span><h3 className="text-base font-semibold text-white">¿Por dónde quieres empezar?</h3></div>
              <div className="grid gap-3 sm:grid-cols-3">
                {SCALE_OPTIONS.map((option) => (
                  <button type="button" key={option.id} aria-pressed={projectScale === option.id} onClick={() => setProjectScale(option.id)} className={optionStyle(projectScale === option.id)}>
                    <span className="flex items-center justify-between gap-2 text-sm font-semibold">{option.label}<Check aria-hidden="true" className={`h-4 w-4 shrink-0 text-[#59aeff] ${projectScale === option.id ? 'visible' : 'invisible'}`} /></span>
                    <span className="mt-2 block text-xs leading-relaxed text-slate-400">{option.focus}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="min-w-0 rounded-2xl border border-white/10 bg-[#071a32] p-5 sm:p-6">
              <legend className="sr-only">3. ¿Qué necesitas conectar? Selección múltiple, opcional.</legend>
              <div aria-hidden="true" className="mb-5 flex items-start gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#027AF1]/40 text-xs font-medium text-[#59aeff]">03</span><div><h3 className="text-base font-semibold text-white">¿Qué necesitas conectar?</h3><p className="mt-1 text-xs text-slate-400">Puedes elegir varias opciones o dejarlo para después.</p></div></div>
              <div className="flex flex-wrap gap-2">
                {INTEGRATION_OPTIONS.map((option) => {
                  const selected = selectedIntegrations.includes(option.id);
                  return <button type="button" key={option.id} aria-pressed={selected} onClick={() => toggleIntegration(option.id)} className={`inline-flex min-h-11 items-center gap-2 rounded-lg border px-3 py-2 text-left text-xs font-medium transition-colors ${selected ? 'border-[#027AF1]/70 bg-[#027AF1]/10 text-white' : 'border-white/10 bg-[#000A18]/40 text-slate-400 hover:border-white/30 hover:text-white'}`}><span aria-hidden="true" className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${selected ? 'border-[#027AF1] bg-[#027AF1]' : 'border-slate-500'}`}>{selected && <Check className="h-3 w-3 text-white" />}</span>{option.label}</button>;
                })}
              </div>
            </fieldset>
          </div>

          <aside aria-label="Resumen de tu proyecto" className="rounded-2xl border border-[#027AF1]/35 bg-[#071a32] p-6 sm:p-8 lg:sticky lg:top-28">
            <div aria-live="polite" aria-atomic="true">
              <p className="eyebrow mb-4">Tu punto de partida</p>
              <h3 className="text-2xl font-semibold tracking-tight text-white">{selectedType.label}</h3>
              <p className="mt-2 text-sm text-slate-400">{selectedScale.label} · {selectedScale.focus}</p>
              <div className="my-6 rounded-xl border border-white/10 bg-[#000A18]/60 p-5">
                <p className="text-xs text-slate-400">Plazo de referencia según el alcance</p>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-white">{selectedScale.timeframe}</p>
                <p className="mt-2 text-xs text-[#59aeff]">Orientación inicial, sujeta a evaluación.</p>
              </div>
              <div className="min-h-24">
                <p className="text-xs font-medium text-slate-300">Integraciones y necesidades adicionales</p>
                {integrations.length ? <ul className="mt-3 space-y-2">{integrations.map((option) => <li key={option.id} className="flex items-center gap-2 text-sm text-slate-400"><Check aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[#59aeff]" />{option.label}</li>)}</ul> : <p className="mt-3 text-sm text-slate-400">Lo definimos durante la conversación.</p>}
              </div>
            </div>
            <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-relaxed text-slate-400">Esta referencia no es una cotización. La complejidad, tus datos y las integraciones pueden cambiar el plazo. El alcance y presupuesto se definen después de revisar tu caso.</p>
            <div className="mt-6 space-y-3">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="button-primary w-full text-center"><MessageSquare aria-hidden="true" className="h-4 w-4 shrink-0" />Conversar sobre este proyecto</a>
              <a href="#contacto" onClick={() => onContact({ projectType, projectScale, summary: waMessage })} className="button-secondary w-full text-center">Prefiero escribir mi consulta<ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" /></a>
            </div>
            <p className="mt-4 text-center text-xs text-slate-500">WhatsApp se abrirá con el resumen. Tú decides cuándo enviarlo.</p>
          </aside>
        </div>
      </div>
    </section>
  );
};
