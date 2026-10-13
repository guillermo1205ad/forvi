import { useState } from 'react';
import { HERO_EXAMPLES as examples } from '../data/siteData';
import { IconRenderer } from './IconRenderer';

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
              <span className="h-1.5 w-1.5 rounded-full bg-forvi-cyan-400" />{' '}
              SOFTWARE & IA · HECHO EN CHILE
            </p>
            <h1 id="hero-title">
              Software a tu medida.
              <br />
              <span className="hero-accent">Inteligencia para tu negocio.</span>
            </h1>
            <p className="hero-description">
              Ordena tu operación, conecta tus sistemas y automatiza tareas con software e inteligencia
              artificial diseñados para tu empresa.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contacto" className="button-primary">
                Conversemos sobre tu proyecto <IconRenderer name="ArrowUpRight" />
              </a>
              <a href="#servicios" className="button-secondary">
                Explorar soluciones <IconRenderer name="ArrowDown" className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-5 flex items-center gap-2 text-xs leading-relaxed text-slate-400">
              <IconRenderer name="Check" className="h-4 w-4 shrink-0 text-forvi-cyan-300" />{' '}
              Para empresas y pymes. Empecemos por lo que necesitas resolver.
            </p>
          </div>
          <div className="hero-visual">
            <div className="workspace-window">
              <div className="workspace-topbar">
                <span className="flex items-center gap-2">
                  <img src="/logo-symbol.png" alt="" width="16" height="19" /> FORVI{' '}
                  <span className="text-slate-500">/</span> Tu próximo sistema
                </span>
                <span className="demo-label">EJEMPLO</span>
              </div>
              <div
                className="workspace-tabs"
                role="group"
                aria-label="Explorar soluciones de ejemplo"
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
              <div
                id="hero-example"
                className="workspace-content"
                aria-live="polite"
                aria-atomic="true"
              >
                <div className="mb-7">
                  <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {example.title}
                  </h2>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{example.subtitle}</p>
                </div>
                <div className="flow-source">
                  <span className="flow-icon">
                    <IconRenderer name={example.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white">{example.source}</p>
                    <p className="mt-1 text-xs text-slate-400">{example.sourceDetail}</p>
                  </div>
                  <span className="ml-auto text-[10px] font-mono text-slate-500">01</span>
                </div>
                <div className="flow-connector" aria-hidden="true">
                  <span />
                </div>
                <div className="flow-engine">
                  <img
                    src="/logo-symbol.png"
                    alt=""
                    width="45"
                    height="52"
                    className="h-14 w-12 object-contain"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{example.core}</p>
                    <p className="mt-1.5 text-[11px] text-blue-200/75">{example.detail}</p>
                  </div>
                  <IconRenderer
                    name="Sparkles"
                    className="ml-auto h-4 w-4 shrink-0 text-forvi-cyan-300"
                  />
                </div>
                <div className="flow-connector" aria-hidden="true">
                  <span />
                </div>
                <div className="flow-output">
                  {example.outputs.map(output => (
                    <div key={output} className="flex items-center gap-2.5">
                      <IconRenderer
                        name="Check"
                        className="h-3.5 w-3.5 shrink-0 text-forvi-cyan-300"
                      />
                      <span>{output}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="workspace-bottom">
                <span className="flex items-center gap-1.5">
                  <IconRenderer name="GitFork" className="h-3.5 w-3.5" />{' '}
                  Diseñado alrededor de tu negocio
                </span>
                <span aria-hidden="true">↗</span>
              </div>
            </div>
            <div className="visual-caption">
              <span className="h-px w-7 bg-forvi-cyan-400/50" />{' '}
              Una idea de lo que podemos construir contigo.
            </div>
          </div>
        </div>
        <div className="hero-principles">
          <div>
            <span className="principle-index">01 /</span>
            <span>Tu negocio primero</span>
            <span className="principle-detail">Entendemos antes de desarrollar</span>
          </div>
          <div>
            <span className="principle-index">02 /</span>
            <span>Alcance claro</span>
            <span className="principle-detail">Prioridades, etapas y entregables</span>
          </div>
          <div>
            <span className="principle-index">03 /</span>
            <span>Tecnología con propósito</span>
            <span className="principle-detail">Soluciones para tu operación real</span>
          </div>
        </div>
      </div>
    </section>
  );
}
