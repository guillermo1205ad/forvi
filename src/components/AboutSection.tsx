import { FOUNDER_CREDENTIALS } from '../data/siteData';
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
          <p className="eyebrow">04 / QUIÉN ESTÁ DETRÁS</p>
          <h2
            id="about-title"
            className="mt-5 text-3xl font-semibold leading-[1.18] tracking-[-.045em] sm:text-4xl lg:text-[44px]"
          >
            Conectar preguntas,
            <br />
            <span className="text-forvi-blue-300">métodos y contexto.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-7 text-slate-300">
            {FOUNDER_CREDENTIALS.summary}
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
              <p className="text-sm font-medium text-white">Acompañamiento personal</p>
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

        <div className="rounded-2xl border border-white/10 bg-[#071a32]/60 p-6 sm:p-8">
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
              <span className="text-sm font-semibold tracking-[.18em] text-white">FORVI</span>
            </div>
            <a
              href={FOUNDER_CREDENTIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver trayectoria de Guillermo Peralta en LinkedIn (abre en una nueva pestaña)"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/15 text-slate-300 transition-colors hover:border-forvi-blue-400 hover:text-white"
            >
              <IconRenderer name="Linkedin" className="h-4 w-4" />
            </a>
          </div>

          <h3 className="text-2xl font-semibold tracking-tight text-white">
            {FOUNDER_CREDENTIALS.name}
          </h3>
          <p className="mt-2 text-sm leading-6 text-forvi-blue-300">
            {FOUNDER_CREDENTIALS.role}
          </p>

          <p className="mt-7 text-[10px] font-medium uppercase tracking-[.16em] text-slate-400">
            Formación y especialización
          </p>
          <ul className="mt-4 space-y-3">
            {FOUNDER_CREDENTIALS.credentials.map(credential => (
              <li
                key={credential}
                className="flex items-start gap-3 text-xs leading-6 text-slate-300"
              >
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-forvi-blue-400" />
                {credential}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
