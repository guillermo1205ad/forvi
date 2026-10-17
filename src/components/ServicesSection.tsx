import { useEffect, useState } from 'react';
import { SITE_INFO } from '../data/siteData';
import { IconRenderer } from './IconRenderer';

const RESEARCH_SERVICES = [
  {
    id: 'estadistico',
    title: 'Análisis estadístico',
    icon: 'ChartColumn',
    question: '¿Qué muestran tus datos?',
    headline: 'De los números a una interpretación fundamentada.',
    description:
      'Analizamos encuestas y bases de datos para describir fenómenos, comparar grupos y explorar relaciones. Elegimos las técnicas según tus objetivos, la calidad de los datos y los supuestos de cada método.',
    capabilities: [
      'Estadísticos descriptivos y exploración de datos',
      'Comparación de grupos y asociaciones',
      'Modelos de regresión',
      'Técnicas multivariadas, cuando corresponda',
    ],
    note: 'Los métodos se definen después de evaluar tus datos.',
  },
  {
    id: 'cualitativo',
    title: 'Análisis cualitativo',
    icon: 'FileSearch',
    question: '¿Qué significados aparecen en tus fuentes?',
    headline: 'Comprende patrones, experiencias y discursos.',
    description:
      'Trabajamos con entrevistas, respuestas abiertas, documentos y otras fuentes textuales. Organizamos e interpretamos el material de acuerdo con tus preguntas de investigación y tu enfoque metodológico.',
    capabilities: [
      'Codificación del material',
      'Construcción y revisión de categorías',
      'Análisis temático',
      'Análisis del discurso según el enfoque',
    ],
    note: 'La interpretación considera el contexto de las fuentes.',
  },
  {
    id: 'multimodal',
    title: 'Análisis multimodal',
    icon: 'Sparkles',
    question: '¿Tu investigación combina distintas fuentes?',
    headline: 'Conecta texto, imágenes y audio con un propósito.',
    description:
      'Evaluamos cómo procesar y relacionar fuentes de distintos formatos mediante técnicas apropiadas de inteligencia artificial y revisión experta. La viabilidad depende del material disponible y de la pregunta que buscas responder.',
    capabilities: [
      'Procesamiento y organización de texto',
      'Análisis de imágenes según el objetivo',
      'Transcripción y procesamiento de audio',
      'Integración de fuentes con revisión experta',
    ],
    note: 'La IA apoya el análisis y requiere evaluación y revisión.',
  },
  {
    id: 'metodologico',
    title: 'Acompañamiento metodológico',
    icon: 'Compass',
    question: '¿Cómo alinear tu pregunta con el análisis?',
    headline: 'Un método coherente con lo que necesitas investigar.',
    description:
      'Revisamos la relación entre preguntas, objetivos, datos y métodos. Te acompañamos en la interpretación de los resultados y en la comprensión de sus alcances y limitaciones.',
    capabilities: [
      'Coherencia entre preguntas y objetivos',
      'Pertinencia de los datos y las fuentes',
      'Selección y explicación de los métodos',
      'Interpretación de resultados y limitaciones',
    ],
    note: 'Un acompañamiento definido para la etapa de tu proyecto.',
  },
];

export function ServicesSection() {
  const [selected, setSelected] = useState(() =>
    typeof window !== 'undefined' && window.location.hash === '#ia' ? 2 : 0,
  );
  const service = RESEARCH_SERVICES[selected];
  const url = `https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent(
    `Hola FORVI, quisiera cotizar un ${service.title.toLowerCase()} para mi proyecto de investigación.`,
  )}`;

  useEffect(() => {
    const selectMultimodal = () => {
      if (window.location.hash === '#ia') setSelected(2);
    };
    window.addEventListener('hashchange', selectMultimodal);
    return () => window.removeEventListener('hashchange', selectMultimodal);
  }, []);

  return (
    <section id="servicios" className="section-spacing" aria-labelledby="services-title">
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / ANÁLISIS PARA TU INVESTIGACIÓN</p>
            <h2 id="services-title">
              Cada pregunta merece
              <br />
              <span className="text-slate-400">el análisis adecuado.</span>
            </h2>
          </div>
          <p>
            Encuestas, bases de datos, documentos, texto, imágenes o audio. Partimos de tus
            objetivos y evaluamos qué métodos son pertinentes para tu proyecto.
          </p>
        </div>

        <div className="solutions-layout">
          <div className="solution-options" role="group" aria-label="Explorar servicios de análisis">
            {RESEARCH_SERVICES.map((item, index) => (
              <button
                id={item.id === 'multimodal' ? 'ia' : undefined}
                type="button"
                key={item.id}
                onClick={() => setSelected(index)}
                aria-pressed={selected === index}
                aria-controls="solution-detail"
                className="solution-option scroll-mt-28"
              >
                <span className="font-mono text-xs text-slate-400">0{index + 1}</span>
                <span className="flex-1 text-left">{item.title}</span>
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
            <div key={service.id} className="solution-detail-body">
              <div className="mb-8 flex items-center justify-between">
                <span className="solution-icon">
                  <IconRenderer name={service.icon} className="h-7 w-7" />
                </span>
                <span className="font-mono text-xs text-slate-400">ANÁLISIS / 0{selected + 1}</span>
              </div>
              <p className="mb-3 text-sm text-forvi-cyan-300">{service.question}</p>
              <h3 className="max-w-lg text-2xl font-semibold leading-snug tracking-tight sm:text-[28px]">
                {service.headline}
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                {service.description}
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {service.capabilities.map(capability => (
                  <li
                    key={capability}
                    className="capability-item flex items-start gap-2 text-xs leading-6 text-slate-300"
                  >
                    <IconRenderer name="Check" className="mt-1 h-4 w-4 shrink-0 text-forvi-cyan-400" />
                    {capability}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-6 text-slate-400">{service.note}</p>
              <div className="mt-6 border-t border-white/10 pt-6">
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-link">
                  Cotiza este análisis por WhatsApp
                  <IconRenderer name="ArrowUpRight" className="h-4 w-4" />
                  <span className="sr-only"> (abre en una nueva pestaña)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#contacto"
          className="mt-7 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[.02] px-4 sm:px-6 py-4 sm:py-5 text-sm text-slate-300 transition-colors hover:border-forvi-blue-400/40"
        >
          <span>
            ¿No sabes qué análisis necesitas?{' '}
            <strong className="font-semibold text-white">Cuéntanos qué buscas responder.</strong>
          </span>
          <span className="flex items-center gap-2 text-forvi-cyan-300">
            Evaluemos tu proyecto <IconRenderer name="ArrowRight" className="h-4 w-4" />
          </span>
        </a>
      </div>
    </section>
  );
}
