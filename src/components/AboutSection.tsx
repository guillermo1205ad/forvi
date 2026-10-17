import { ABOUT_FORVI } from '../data/siteData';
import { IconRenderer } from './IconRenderer';

export function AboutSection() {
  return (
    <section
      id="nosotros"
      aria-labelledby="about-title"
      className="section-spacing border-y border-white/10 bg-[#031020]"
    >
      <div className="section-shell about-panel">
        <div>
          <p className="eyebrow">{ABOUT_FORVI.eyebrow}</p>
          <h2
            id="about-title"
            className="mt-5 text-3xl font-semibold leading-[1.18] tracking-[-.045em] sm:text-4xl lg:text-[44px]"
          >
            Conectar preguntas,
            <br />
            <span className="text-forvi-blue-300">métodos y contexto.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-7 text-slate-300">
            {ABOUT_FORVI.summary}
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            El acompañamiento combina una mirada metodológica con la comprensión del contexto
            empresarial y de los objetivos de cada investigación. La elección del análisis
            parte de la pregunta y de las fuentes disponibles.
          </p>

          <div className="mt-8 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-white">Criterio metodológico</p>
              <p className="mt-2 text-xs leading-6 text-slate-400">
                Métodos pertinentes y limitaciones explícitas.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Acompañamiento técnico</p>
              <p className="mt-2 text-xs leading-6 text-slate-400">
                Un espacio para comprender y discutir tus resultados.
              </p>
            </div>
          </div>

          <p className="mt-7 text-sm leading-7 text-slate-400">
            Prestamos colaboración técnica transparente. El cliente conserva la responsabilidad
            sobre su investigación y debe respetar las reglas de su institución.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#071a32]/60 p-4 sm:p-6 lg:p-8">
          <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <img
                src="/logo-symbol.png"
                alt=""
                loading="lazy"
                width="36"
                height="42"
                className="h-11 w-9 object-contain"
              />
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-semibold tracking-[.18em] text-white">FORVI</span>
                <span className="font-mono text-[10px] text-forvi-cyan-400">SpA</span>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-forvi-blue-400/30 bg-forvi-blue-950/70 px-3 py-1 text-[11px] font-medium text-forvi-cyan-300">
              <span className="live-status-dot mr-0.5" aria-hidden="true" />
              Consultoría técnica
            </span>
          </div>

          <h3 className="text-2xl font-semibold tracking-tight text-white">
            {ABOUT_FORVI.name}
          </h3>
          <p className="mt-2 text-sm leading-6 text-forvi-blue-300">
            {ABOUT_FORVI.role}
          </p>
          <p className="mt-3 text-xs leading-6 text-slate-300">
            {ABOUT_FORVI.tagline}
          </p>

          <p className="mt-7 text-[10px] font-medium uppercase tracking-[.16em] text-slate-400">
            Principios y compromisos de trabajo
          </p>
          <ul className="mt-4 space-y-3">
            {ABOUT_FORVI.commitments.map(commitment => (
              <li
                key={commitment}
                className="commitment-item flex items-start gap-3 text-xs leading-6 text-slate-300"
              >
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-forvi-blue-400" />
                {commitment}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-xs text-slate-400">
            <span>Santiago, Chile</span>
            <a
              href="#contacto"
              className="inline-flex items-center gap-1.5 font-medium text-forvi-cyan-300 transition-colors hover:text-white"
            >
              <span>Consultar proyecto</span>
              <IconRenderer name="ArrowRight" className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

