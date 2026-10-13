import React, { useRef, useState } from 'react';
import { SITE_INFO, AI_EXAMPLES } from '../data/siteData';
import { IconRenderer } from './IconRenderer';

export const AiSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const example = AI_EXAMPLES[activeIndex];
  const whatsappHref = `https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent(
    `Hola FORVI, me interesa conversar sobre ${example.technology.toLowerCase()} para mi empresa.`,
  )}`;

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number;
    switch (event.key) {
      case 'ArrowRight':
        nextIndex = (index + 1) % AI_EXAMPLES.length;
        break;
      case 'ArrowLeft':
        nextIndex = (index - 1 + AI_EXAMPLES.length) % AI_EXAMPLES.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = AI_EXAMPLES.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section id="ia" aria-labelledby="ai-heading" className="relative overflow-hidden border-y border-white/10 bg-[#000A18] py-20 sm:py-28">
      <div className="section-shell">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <div>
            <p className="eyebrow mb-4">02 / Inteligencia artificial aplicada</p>
            <h2 id="ai-heading" className="max-w-2xl font-display text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Menos trabajo repetitivo.<br />
              <span className="text-[#00C2FF]">Más posibilidades.</span>
            </h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-slate-300">
            La IA empieza por una tarea concreta. Exploramos contigo dónde puede aportar valor y la conectamos con la forma en que trabaja tu empresa.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#071a32]">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-5 py-4 sm:px-8">
            <p className="text-sm font-medium text-white">Explora lo que podrías hacer</p>
            <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-slate-300">Ejemplos ilustrativos</span>
          </div>

          <div className="overflow-x-auto border-b border-white/10">
            <div role="tablist" aria-label="Ejemplos de inteligencia artificial" className="flex min-w-[780px] px-3 sm:px-5">
              {AI_EXAMPLES.map((item, index) => (
                <button
                  key={item.id}
                  ref={(element) => { tabRefs.current[index] = element; }}
                  id={`ai-tab-${item.id}`}
                  role="tab"
                  type="button"
                  aria-selected={activeIndex === index}
                  aria-controls="ai-example-panel"
                  tabIndex={activeIndex === index ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  className={`relative flex flex-1 items-center justify-center gap-2 border-b-2 px-3 py-5 text-xs font-medium transition-colors focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#00C2FF] sm:text-sm ${
                    activeIndex === index
                      ? 'border-[#00C2FF] text-[#00C2FF]'
                      : 'border-transparent text-slate-400 hover:bg-white/[0.03] hover:text-white'
                  }`}
                >
                  <span aria-hidden="true"><IconRenderer name={item.icon} className="h-4 w-4 shrink-0" /></span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div
            id="ai-example-panel"
            role="tabpanel"
            aria-labelledby={`ai-tab-${example.id}`}
            tabIndex={0}
            className="grid gap-8 p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#00C2FF] sm:p-8 lg:min-h-[470px] lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:p-10"
          >
            <div className="flex flex-col items-start">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.13em] text-[#00C2FF]">{example.technology}</p>
              <h3 className="max-w-sm font-display text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">{example.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">{example.description}</p>
              <p className="mb-7 mt-5 max-w-md border-l border-[#00C2FF]/40 pl-4 text-sm leading-6 text-slate-400">{example.benefit}</p>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="button-secondary mt-auto gap-3">
                Conversemos sobre este caso
                <span aria-hidden="true"><IconRenderer name="ArrowRight" className="h-4 w-4" /></span>
                <span className="sr-only"> por WhatsApp, abre en una nueva pestaña</span>
              </a>
            </div>

            <div className="space-y-3">
              <div className="rounded-xl border border-white/10 bg-[#000A18]/70 p-5">
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/20 text-[10px] text-slate-400" aria-hidden="true">1</span>
                  <p className="text-xs font-medium text-slate-400">{example.inputTitle}</p>
                </div>
                <p className="whitespace-pre-line text-sm leading-6 text-slate-200">{example.input}</p>
                {example.request && (
                  <div className="mt-4 border-t border-white/10 pt-3">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400">Consulta</span>
                    <p className="mt-1 text-sm font-medium text-white">{example.request}</p>
                  </div>
                )}
              </div>

              <div className="rounded-xl border border-[#00C2FF]/20 bg-[#00C2FF]/[0.035] p-5">
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#00C2FF]/30 text-[10px] text-[#00C2FF]" aria-hidden="true">2</span>
                  <p className="text-xs font-medium text-[#00C2FF]">{example.outputTitle}</p>
                </div>
                <dl className="space-y-3">
                  {example.output.map((item) => (
                    <div key={item.label} className="grid gap-1 sm:grid-cols-[130px_1fr] sm:gap-4">
                      <dt className="text-xs leading-5 text-slate-400">{item.label}</dt>
                      <dd className="text-sm leading-5 text-slate-200">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <p className="px-1 text-xs leading-5 text-slate-400">Contenido de muestra; no ejecuta un modelo de IA. Cada solución se valida con los datos y criterios de tu empresa.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="text-slate-400">Empezamos por un caso de uso, con alcance y criterios de evaluación claros.</p>
          <a href="#contacto" className="inline-flex min-h-11 shrink-0 items-center gap-2 font-medium text-white transition-colors hover:text-[#00C2FF]">
            Cuéntanos tu desafío
            <span aria-hidden="true"><IconRenderer name="ArrowRight" className="h-4 w-4" /></span>
          </a>
        </div>
      </div>
    </section>
  );
};
