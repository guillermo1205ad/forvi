import { useState } from 'react';
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

const PREVIEW_TABS = [
  { id: 'tabla', shortLabel: 'Tabla APA', label: 'Tabla (APA 7)', icon: 'ChartColumn' },
  { id: 'grafico', shortLabel: 'Gráfico', label: 'Gráfico analítico', icon: 'BarChart3' },
  { id: 'informe', shortLabel: 'Informe', label: 'Informe técnico', icon: 'FileSearch' },
] as const;

const TECHNICAL_STANDARDS = [
  'R / RStudio',
  'Python (pandas/statsmodels)',
  'SPSS Statistics',
  'Jamovi / JASP',
  'Stata',
  'NVivo / MAXQDA',
  'Normas APA 7ma ed.',
  'Vancouver',
  'Acuerdo confidencial (NDA)',
];

export function DeliverablesSection() {
  const [activePreview, setActivePreview] = useState<'tabla' | 'grafico' | 'informe'>('tabla');

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

        <div className="grid gap-8 lg:grid-cols-[.95fr_1.05fr] lg:gap-14">
          {/* Interactive Deliverable Sample Viewer */}
          <div className="flex flex-col justify-between rounded-2xl border border-forvi-blue-400/25 bg-[#071a32]/80 p-4 sm:p-7 shadow-xl">
            <div>
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="live-status-dot" aria-hidden="true" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-forvi-cyan-300">
                    Visor de muestra interactivo
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">Ejemplo de entregable</span>
              </div>

              {/* Tabs */}
              <div className="mb-5 grid grid-cols-3 gap-1.5 rounded-lg bg-[#000a18]/70 p-1 border border-white/10" role="tablist">
                {PREVIEW_TABS.map(tab => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activePreview === tab.id}
                    onClick={() => setActivePreview(tab.id)}
                    className={`flex items-center justify-center gap-1.5 rounded-md px-1.5 sm:px-2 py-2 text-[10.5px] sm:text-[11px] font-medium transition-all ${
                      activePreview === tab.id
                        ? 'bg-forvi-blue-600/30 text-forvi-cyan-300 border border-forvi-blue-400/40 shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-white/[.04]'
                    }`}
                  >
                    <IconRenderer name={tab.icon} className="h-3.5 w-3.5 shrink-0" />
                    <span className="sm:hidden">{tab.shortLabel}</span>
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab 1: Tabla APA 7 */}
              {activePreview === 'tabla' && (
                <div className="solution-detail-body rounded-xl border border-white/10 bg-[#000a18]/60 p-4 text-xs">
                  <p className="font-medium text-slate-200 text-[11px] mb-2.5 italic">
                    Tabla 1. Estadísticos descriptivos y prueba t para muestras independientes
                  </p>
                  <div className="overflow-x-auto pb-1">
                    <table className="w-full min-w-[420px] text-left font-mono text-[10px] text-slate-300 whitespace-nowrap">
                      <thead>
                        <tr className="border-b-2 border-white/30 text-white">
                          <th className="py-1.5 px-2">Dimensión</th>
                          <th className="py-1.5 px-2 text-center">M (DE) Grupo A</th>
                          <th className="py-1.5 px-2 text-center">M (DE) Grupo B</th>
                          <th className="py-1.5 px-2 text-right">t(118)</th>
                          <th className="py-1.5 px-2 text-right">p</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="py-2 px-2 font-sans">Motivación intrínseca</td>
                          <td className="py-2 px-2 text-center">4.32 (0.58)</td>
                          <td className="py-2 px-2 text-center">3.41 (0.72)</td>
                          <td className="py-2 px-2 text-right">7.62</td>
                          <td className="py-2 px-2 text-right text-forvi-cyan-300 font-semibold">&lt; .001</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-sans">Compromiso conductual</td>
                          <td className="py-2 px-2 text-center">3.88 (0.64)</td>
                          <td className="py-2 px-2 text-center">3.52 (0.69)</td>
                          <td className="py-2 px-2 text-right">2.98</td>
                          <td className="py-2 px-2 text-right text-forvi-cyan-300 font-semibold">.003</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-sans">Autoeficacia percibida</td>
                          <td className="py-2 px-2 text-center">4.15 (0.51)</td>
                          <td className="py-2 px-2 text-center">3.60 (0.66)</td>
                          <td className="py-2 px-2 text-right">5.14</td>
                          <td className="py-2 px-2 text-right text-forvi-cyan-300 font-semibold">&lt; .001</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-2.5 text-[9px] text-slate-400 border-t border-white/10 pt-1.5 italic">
                    Nota. M = Media; DE = Desviación estándar. p ajustados según supuestos de homogeneidad. Formato estricto según normas APA 7.
                  </p>
                </div>
              )}

              {/* Tab 2: Gráfico analítico */}
              {activePreview === 'grafico' && (
                <div className="solution-detail-body rounded-xl border border-white/10 bg-[#000a18]/60 p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 text-[11px] mb-3">
                    <span className="font-medium text-slate-200">Figura 1. Efecto estimado e Intervalos de Confianza (IC 95%)</span>
                    <span className="text-[10px] text-forvi-cyan-300 font-mono self-start sm:self-auto">Significativo (p &lt; .001)</span>
                  </div>
                  <div className="space-y-3 font-mono text-[10px]">
                    <div>
                      <div className="flex justify-between text-slate-400 mb-1">
                        <span>Grupo Experimental</span>
                        <span className="text-white">+0.85 [IC 95%: 0.62, 1.08]</span>
                      </div>
                      <div className="relative h-4 rounded bg-white/5 flex items-center px-1">
                        <div className="h-2 rounded bg-forvi-cyan-400" style={{ width: '78%' }} />
                        <div className="absolute right-[22%] h-3 w-0.5 bg-white" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-slate-400 mb-1">
                        <span>Grupo de Control</span>
                        <span className="text-slate-300">+0.22 [IC 95%: 0.05, 0.39]</span>
                      </div>
                      <div className="relative h-4 rounded bg-white/5 flex items-center px-1">
                        <div className="h-2 rounded bg-forvi-blue-500/60" style={{ width: '35%' }} />
                        <div className="absolute right-[65%] h-3 w-0.5 bg-slate-400" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-[9px] text-slate-400 border-t border-white/10 pt-1.5">
                    Gráficos generados en alta resolución (SVG/PNG a 300 DPI) listos para integrar directamente en tu tesis o artículo.
                  </p>
                </div>
              )}

              {/* Tab 3: Informe interpretativo */}
              {activePreview === 'informe' && (
                <div className="solution-detail-body rounded-xl border border-white/10 bg-[#000a18]/60 p-4 text-xs space-y-2.5">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-forvi-cyan-300">
                    <IconRenderer name="FileSearch" className="h-3.5 w-3.5" />
                    <span>Extracto de redacción interpretativa</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-300">
                    «Se verificaron los supuestos de normalidad (Shapiro-Wilk, p &gt; .05) y homocedasticidad (Levene, p = .312). La prueba reveló diferencias estadísticamente significativas con un tamaño de efecto elevado (d = 1.24), lo cual respalda la hipótesis planteada...»
                  </p>
                  <div className="rounded-lg bg-forvi-blue-950/40 border border-forvi-blue-400/20 p-2.5 text-[10px] text-slate-300">
                    <strong className="text-forvi-cyan-300">Supuestos y límites documentados:</strong> Los hallazgos se interpretan en estricta relación con la muestra y el contexto analizado.
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-[11px] text-slate-400">¿Requieres este formato?</span>
              <a href="#contacto" className="text-link text-xs">
                Cotizar entregables
                <IconRenderer name="ArrowUpRight" className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Deliverables List */}
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {ANALYSIS_DELIVERABLES.map((item, index) => (
              <li key={item.title} className="deliverable-item flex items-start gap-4 py-5 sm:gap-5">
                <span className="deliverable-num mt-1 font-mono text-[11px] text-forvi-cyan-300" aria-hidden="true">
                  0{index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                </div>
                <IconRenderer name={item.icon} className="deliverable-icon mt-1 h-5 w-5 shrink-0 text-slate-400" />
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Standards & Compatibility Pills */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[.02] p-4 sm:p-6 lg:p-7">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-3">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-forvi-cyan-400" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                Entornos, herramientas y estándares metodológicos
              </h3>
            </div>
            <span className="font-mono text-[10px] text-slate-400">100% auditable y reproducible</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {TECHNICAL_STANDARDS.map(item => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#000a18]/70 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-forvi-blue-400/50 hover:text-white"
              >
                <IconRenderer name="Check" className="h-3.5 w-3.5 text-forvi-cyan-300" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
