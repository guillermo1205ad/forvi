import {
  WORKFLOW_STEPS,
  METHODOLOGY_NAMES as names,
  METHODOLOGY_DESCRIPTIONS as descriptions,
  METHODOLOGY_DELIVERABLES as deliverables,
} from '../data/siteData';
import { IconRenderer } from './IconRenderer';

export function MethodologySection() {
  return (
    <section
      id="metodologia"
      aria-labelledby="method-title"
      className="section-spacing"
    >
      <div className="section-shell">
        <div className="section-heading mb-0">
          <div>
            <p className="eyebrow">03 / CÓMO TRABAJAMOS</p>
            <h2 id="method-title">
              Un proceso claro.
              <br />
              <span className="text-slate-400">De la idea a la operación.</span>
            </h2>
          </div>
          <p>
            Sabes qué estamos construyendo, por qué y cuál es el siguiente paso.
            Participas en las decisiones que importan.
          </p>
        </div>

        <ol className="process-grid">
          {WORKFLOW_STEPS.map((step, index) => (
            <li key={step.step} className="process-step">
              <div className="flex items-start justify-between">
                <span className="process-number">{step.step}</span>
                <IconRenderer
                  name={step.iconName}
                  className="h-5 w-5 text-slate-500"
                />
              </div>
              <h3 className="text-xl font-semibold tracking-tight">
                {names[index]}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {descriptions[index]}
              </p>
              <p className="mt-5 flex items-start gap-2 text-xs leading-5 text-slate-300">
                <IconRenderer
                  name="Check"
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-forvi-cyan-300"
                />
                {deliverables[index]}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400">
          Primero, una conversación.{' '}
          <a
            className="ml-1 inline-flex items-center gap-2 font-medium text-forvi-cyan-300 hover:text-white"
            href="#contacto"
          >
            Cuéntanos qué tienes en mente{' '}
            <IconRenderer name="ArrowUpRight" className="h-4 w-4" />
          </a>
        </p>
      </div>
    </section>
  );
}
