import { FAQ_ITEMS } from '../data/siteData';

export function FaqSection() {
  return (
    <section
      id="preguntas"
      className="section-spacing border-t border-white/10"
      aria-labelledby="faq-title"
    >
      <div className="section-shell grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">ANTES DE EMPEZAR</p>
          <h2
            id="faq-title"
            className="mt-5 text-3xl font-semibold leading-tight tracking-[-.04em] sm:text-4xl"
          >
            Buenas preguntas.
            <br />
            <span className="text-slate-400">Respuestas claras.</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-400">
            Cada proyecto es distinto. Estas son algunas de las cosas que podemos definir juntos.
          </p>
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
