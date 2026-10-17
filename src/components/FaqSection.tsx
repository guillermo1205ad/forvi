import { FAQ_ITEMS } from '../data/siteData';
import { IconRenderer } from './IconRenderer';

export function FaqSection() {
  return (
    <section
      id="preguntas"
      className="section-spacing border-t border-white/10"
      aria-labelledby="faq-title"
    >
      <div className="section-shell grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">PREGUNTAS FRECUENTES</p>
          <h2
            id="faq-title"
            className="mt-5 text-3xl font-semibold leading-[1.3] tracking-[-0.02em] sm:text-4xl sm:leading-[1.28]"
          >
            <span>Antes de empezar,</span>
            <span className="block mt-1 text-slate-400 sm:mt-1.5">conversemos las dudas.</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-400">
            Desde los tipos de datos hasta la explicación de resultados. Estas respuestas te
            ayudarán a preparar una primera consulta sobre tu investigación.
          </p>
          <a href="#contacto" className="text-link mt-6">
            Hablemos de tu proyecto
            <IconRenderer name="ArrowUpRight" className="h-4 w-4" />
          </a>
        </div>
        <div className="border-t border-white/10">
          {FAQ_ITEMS.map(item => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
