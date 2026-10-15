import { IconRenderer } from './IconRenderer';

const ANALYSIS_DELIVERABLES = [
  {
    title: 'Informe técnico de análisis',
    description: 'Los métodos aplicados, las decisiones tomadas y los resultados del trabajo.',
    icon: 'FileSearch',
  },
  {
    title: 'Tablas y gráficos',
    description: 'Presentaciones de los resultados cuando correspondan al tipo de análisis.',
    icon: 'ChartColumn',
  },
  {
    title: 'Interpretación de resultados',
    description: 'Una lectura de los hallazgos en relación con los objetivos de tu investigación.',
    icon: 'MessageSquare',
  },
  {
    title: 'Supuestos y limitaciones',
    description: 'Qué condiciones se consideraron y hasta dónde permiten concluir los datos.',
    icon: 'Compass',
  },
  {
    title: 'Sesión explicativa',
    description: 'Un espacio para revisar el análisis, resolver dudas y comprender los resultados.',
    icon: 'Layers',
  },
];

export function DeliverablesSection() {
  return (
    <section
      id="entregables"
      aria-labelledby="deliverables-title"
      className="section-spacing border-y border-white/10 bg-[#031020]"
    >
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / QUÉ RECIBES</p>
            <h2 id="deliverables-title">
              Resultados para entender.
              <br />
              <span className="text-forvi-blue-300">Y para seguir investigando.</span>
            </h2>
          </div>
          <p>
            El análisis viene acompañado de su explicación. Definimos contigo qué necesitas
            recibir y cómo presentarlo de forma útil para tu proyecto.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div className="flex flex-col items-start rounded-2xl border border-forvi-blue-400/20 bg-[#071a32] p-6 sm:p-8">
            <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-forvi-cyan-300">
              <IconRenderer name="FileSearch" className="h-6 w-6" />
            </span>
            <h3 className="text-xl font-semibold tracking-tight text-white">
              Un alcance definido para tu investigación.
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Cada propuesta especifica sus entregables y alcance. No todos los proyectos
              incluyen todas las técnicas ni requieren los mismos productos.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Evaluamos primero los objetivos y las fuentes para acordar qué trabajo tiene
              sentido realizar.
            </p>
            <a href="#contacto" className="text-link mt-8">
              Cuéntanos qué necesitas
              <IconRenderer name="ArrowUpRight" className="h-4 w-4" />
            </a>
          </div>

          <ul className="divide-y divide-white/10 border-y border-white/10">
            {ANALYSIS_DELIVERABLES.map((item, index) => (
              <li key={item.title} className="flex items-start gap-4 py-5 sm:gap-5">
                <span className="mt-1 font-mono text-[11px] text-forvi-cyan-300" aria-hidden="true">
                  0{index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                </div>
                <IconRenderer name={item.icon} className="mt-1 h-5 w-5 shrink-0 text-slate-400" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
