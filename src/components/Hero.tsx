import { useState } from 'react';
import { HERO_EXAMPLES as examples, SITE_INFO } from '../data/siteData';
import { IconRenderer } from './IconRenderer';
import { ResearchFlowMotion } from './ResearchFlowMotion';
import './research-motion.css';

export function Hero() {
  const [selected, setSelected] = useState(0);
  const example = examples[selected];

  return (
    <section id="inicio" aria-labelledby="hero-title" className="hero-section">
      <div className="hero-glow" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow mb-7">
              <span className="live-status-dot mr-1.5" aria-hidden="true" />
              ANÁLISIS DE DATOS · INVESTIGACIÓN
            </p>
            <h1 id="hero-title">
              <span>Transformamos datos</span>
              <span className="hero-accent block mt-1 sm:mt-1.5">en conocimiento</span>
            </h1>
            <p className="hero-description">
              {SITE_INFO.heroSubheadline}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contacto" className="button-primary">
                Cotiza tu análisis <IconRenderer name="ArrowUpRight" />
              </a>
              <a href={SITE_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                Conversemos sobre tu proyecto <IconRenderer name="ArrowUpRight" className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-5 flex items-center gap-2 text-xs leading-relaxed text-slate-400">
              <IconRenderer name="Check" className="h-4 w-4 shrink-0 text-forvi-cyan-300" />{' '}
              Para tesistas de pregrado y posgrado, investigadores y equipos.
            </p>
          </div>
          <div className="hero-visual">
            <div className="workspace-window">
              <div className="workspace-topbar">
                <span className="flex items-center gap-2">
                  <img src="/logo-symbol.png" alt="" width="16" height="19" /> FORVI{' '}
                  <span className="text-slate-500">/</span> Tu investigación
                </span>
                <span className="demo-label">EJEMPLO</span>
              </div>
              <div
                className="workspace-tabs"
                role="group"
                aria-label="Explorar recorridos de análisis ilustrativos"
              >
                {examples.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={selected === index}
                    aria-controls="hero-example"
                    onClick={() => setSelected(index)}
                  >
                    <IconRenderer name={item.icon} className="h-4 w-4" />
                    {item.label}
                  </button>
                ))}
              </div>
              <div id="hero-example" className="workspace-content">
                <div className="mb-5" aria-live="polite" aria-atomic="true">
                  <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {example.title}
                  </h2>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{example.subtitle}</p>
                </div>
                <ResearchFlowMotion key={example.id} example={example} />
              </div>
            </div>
            <div className="visual-caption">
              <span className="h-px w-7 bg-forvi-cyan-400/50" />{' '}
              Cada propuesta define sus técnicas y entregables.
            </div>
          </div>
        </div>
        <div className="hero-principles">
          <div>
            <span className="principle-index">01 /</span>
            <span>Tu pregunta primero</span>
            <span className="principle-detail">Objetivos y fuentes antes de analizar</span>
          </div>
          <div>
            <span className="principle-index">02 /</span>
            <span>Alcance claro</span>
            <span className="principle-detail">Precio, plazo y entregables acordados</span>
          </div>
          <div>
            <span className="principle-index">03 /</span>
            <span>Resultados con contexto</span>
            <span className="principle-detail">Interpretación y sesión explicativa</span>
          </div>
        </div>
      </div>
    </section>
  );
}
