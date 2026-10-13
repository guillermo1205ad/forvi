import { useState } from 'react';
import {
  SOFTWARE_SERVICES,
  SITE_INFO,
  SERVICE_LABELS as labels,
  SERVICE_PROBLEMS as problems,
  SERVICE_OUTCOMES as outcomes,
} from '../data/siteData';
import { IconRenderer } from './IconRenderer';

export function ServicesSection() {
  const [selected, setSelected] = useState(0);
  const service = SOFTWARE_SERVICES[selected];
  const url = `https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent(
    `Hola FORVI, me interesa conversar sobre ${labels[selected].toLowerCase()} para mi empresa.`,
  )}`;

  return (
    <section id="servicios" className="section-spacing" aria-labelledby="services-title">
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SOLUCIONES A TU MEDIDA</p>
            <h2 id="services-title">
              Tu próximo paso.
              <br />
              <span className="text-slate-400">Con la tecnología correcta.</span>
            </h2>
          </div>
          <p>
            Cada empresa trabaja distinto. Partimos de tu problema para construir una solución que
            tenga sentido para tu negocio.
          </p>
        </div>
        <div className="solutions-layout">
          <div className="solution-options" role="group" aria-label="Seleccionar una solución">
            {SOFTWARE_SERVICES.map((item, index) => (
              <button
                type="button"
                key={item.id}
                onClick={() => setSelected(index)}
                aria-pressed={selected === index}
                aria-controls="solution-detail"
                className="solution-option"
              >
                <span className="font-mono text-xs text-slate-500">0{index + 1}</span>
                <span className="flex-1 text-left">{labels[index]}</span>
                <IconRenderer name="ArrowUpRight" className="h-5 w-5" />
              </button>
            ))}
          </div>
          <div
            id="solution-detail"
            className="solution-detail"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="solution-icon">
                <IconRenderer name={service.iconName} className="h-7 w-7" />
              </span>
              <span className="font-mono text-xs text-slate-500">SOFTWARE / 0{selected + 1}</span>
            </div>
            <p className="mb-3 text-sm text-forvi-cyan-300">{problems[selected]}</p>
            <h3 className="max-w-lg text-2xl font-semibold leading-snug tracking-tight sm:text-[28px]">
              {outcomes[selected]}
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
              {service.fullDesc}
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {service.capabilities.map(capability => (
                <li
                  key={capability}
                  className="flex items-start gap-2 text-xs leading-6 text-slate-300"
                >
                  <IconRenderer
                    name="Check"
                    className="mt-1 h-4 w-4 shrink-0 text-forvi-cyan-400"
                  />
                  {capability}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-link">
                Conversemos sobre esta solución{' '}
                <IconRenderer name="ArrowUpRight" className="h-4 w-4" />
              </a>
              <span className="text-xs text-slate-500">Diseñada contigo.</span>
            </div>
          </div>
        </div>
        <a
          href="#diagnostico"
          className="mt-7 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[.02] px-6 py-5 text-sm text-slate-300 hover:border-forvi-blue-400/40 transition-colors"
        >
          <span>
            ¿Todavía no sabes por dónde empezar?{' '}
            <strong className="font-semibold text-white">Definamos juntos el primer paso.</strong>
          </span>
          <span className="flex items-center gap-2 text-forvi-cyan-300">
            Dimensionar mi proyecto <IconRenderer name="ArrowRight" className="h-4 w-4" />
          </span>
        </a>
      </div>
    </section>
  );
}
