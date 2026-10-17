import { IconRenderer } from './IconRenderer';

const ANALYSIS_PROCESS = [
  {
    step: '01',
    title: 'Revisamos',
    description:
      'Conversamos sobre tus objetivos y fuentes. Evaluamos la calidad, la pertinencia y la viabilidad del material disponible.',
    deliverable: 'Contexto y necesidades de análisis',
    icon: 'FileSearch',
  },
  {
    step: '02',
    title: 'Acordamos',
    description:
      'Definimos el alcance, los entregables, el precio y el plazo de acuerdo con las características de tu proyecto.',
    deliverable: 'Propuesta personalizada',
    icon: 'Compass',
  },
  {
    step: '03',
    title: 'Analizamos',
    description:
      'Aplicamos los métodos acordados y documentamos las decisiones, los supuestos y las limitaciones del análisis.',
    deliverable: 'Análisis según el alcance definido',
    icon: 'ChartColumn',
  },
  {
    step: '04',
    title: 'Explicamos',
    description:
      'Entregamos los resultados y los revisamos contigo para que comprendas su interpretación y puedas resolver tus dudas.',
    deliverable: 'Entrega y sesión explicativa',
    icon: 'MessageSquare',
  },
];

export function MethodologySection() {
  return (
    <section id="metodologia" aria-labelledby="method-title" className="section-spacing">
      <div className="section-shell">
        <div className="section-heading mb-0">
          <div>
            <p className="eyebrow">03 / CÓMO TRABAJAMOS</p>
            <h2 id="method-title">
              <span>Un proceso claro.</span>
              <span className="block mt-1 text-slate-400 sm:mt-1.5">De la pregunta al resultado.</span>
            </h2>
          </div>
          <p>
            Sabes qué vamos a analizar, cómo lo abordaremos y qué recibirás. El alcance se
            acuerda antes de iniciar el trabajo.
          </p>
        </div>

        <ol className="process-grid">
          {ANALYSIS_PROCESS.map(item => (
            <li key={item.step} className="process-step">
              <div className="flex items-start justify-between">
                <span className="process-number">{item.step}</span>
                <IconRenderer name={item.icon} className="h-5 w-5 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
              <p className="mt-5 flex items-start gap-2 text-xs leading-5 text-slate-300">
                <IconRenderer name="Check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-forvi-cyan-300" />
                {item.deliverable}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-5 rounded-xl border border-white/10 bg-white/[.02] p-6 sm:grid-cols-[.65fr_1.35fr] sm:gap-10">
          <h3 className="text-sm font-medium text-white">Ajustes con un alcance claro</h3>
          <p className="text-sm leading-7 text-slate-400">
            Incluimos una ronda de ajustes dentro del alcance acordado. La incorporación de
            nuevos datos u objetivos requiere reevaluar el alcance, el precio y el plazo.
          </p>
        </div>
      </div>
    </section>
  );
}
