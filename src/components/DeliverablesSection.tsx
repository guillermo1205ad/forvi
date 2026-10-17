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
  { id: 'tabla', shortLabel: 'Tabla ANOVA', label: 'Tabla ANOVA (APA 7)', icon: 'ChartColumn' },
  { id: 'grafico', shortLabel: 'Boxplot', label: 'Boxplot analítico', icon: 'BarChart3' },
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
  const [anovaView, setAnovaView] = useState<'grupos' | 'fuentes'>('grupos');

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
              <span>Resultados para entender.</span>
              <span className="block mt-1 text-forvi-blue-300 sm:mt-1.5">Y para seguir investigando.</span>
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

              {/* Tab 1: Tabla ANOVA APA 7 */}
              {activePreview === 'tabla' && (
                <div className="solution-detail-body rounded-xl border border-white/10 bg-[#000a18]/60 p-4 text-xs">
                  {/* Sub-selector for ANOVA view */}
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                    <p className="font-medium text-slate-200 text-[11px] italic">
                      {anovaView === 'grupos'
                        ? 'Tabla 1. Estadísticos descriptivos, ANOVA de un factor y Post-Hoc de Tukey'
                        : 'Tabla 1b. Resumen de descomposición de varianza ANOVA (SC / gl / MC)'}
                    </p>
                    <div className="inline-flex rounded-lg bg-white/5 p-0.5 border border-white/10 text-[10px]">
                      <button
                        type="button"
                        onClick={() => setAnovaView('grupos')}
                        className={`rounded-md px-2 py-1 font-medium transition-all ${
                          anovaView === 'grupos'
                            ? 'bg-forvi-blue-600 text-white shadow-sm'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Medias & Post-Hoc
                      </button>
                      <button
                        type="button"
                        onClick={() => setAnovaView('fuentes')}
                        className={`rounded-md px-2 py-1 font-medium transition-all ${
                          anovaView === 'fuentes'
                            ? 'bg-forvi-blue-600 text-white shadow-sm'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Descomposición ANOVA
                      </button>
                    </div>
                  </div>

                  {anovaView === 'grupos' ? (
                    <div className="overflow-x-auto pb-1">
                      <table className="w-full min-w-[560px] text-left font-mono text-[10px] text-slate-300 whitespace-nowrap">
                        <thead>
                          <tr className="border-b-2 border-white/30 text-white">
                            <th className="py-1.5 px-2 font-sans">Variable / Dimensión</th>
                            <th className="py-1.5 px-2 text-center">Control (n=45)<br /><span className="text-[9px] font-normal text-slate-400">M (DE)</span></th>
                            <th className="py-1.5 px-2 text-center">Tradicional (n=48)<br /><span className="text-[9px] font-normal text-slate-400">M (DE)</span></th>
                            <th className="py-1.5 px-2 text-center">Activo (n=47)<br /><span className="text-[9px] font-normal text-slate-400">M (DE)</span></th>
                            <th className="py-1.5 px-2 text-right">F(2, 137)</th>
                            <th className="py-1.5 px-2 text-right">p</th>
                            <th className="py-1.5 px-2 text-right">η²p</th>
                            <th className="py-1.5 px-2 text-center">Post-Hoc (Tukey)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          <tr>
                            <td className="py-2 px-2 font-sans font-medium text-white">Rendimiento analítico</td>
                            <td className="py-2 px-2 text-center">3.12 (0.64)</td>
                            <td className="py-2 px-2 text-center">3.85 (0.58)</td>
                            <td className="py-2 px-2 text-center text-forvi-cyan-300 font-semibold">4.52 (0.52)</td>
                            <td className="py-2 px-2 text-right">31.45</td>
                            <td className="py-2 px-2 text-right text-forvi-cyan-300 font-semibold">&lt; .001</td>
                            <td className="py-2 px-2 text-right">.315</td>
                            <td className="py-2 px-2 text-center text-slate-300">Activo &gt; Trad. &gt; Ctrl</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-2 font-sans font-medium text-white">Pensamiento crítico</td>
                            <td className="py-2 px-2 text-center">3.38 (0.70)</td>
                            <td className="py-2 px-2 text-center">3.74 (0.62)</td>
                            <td className="py-2 px-2 text-center text-forvi-cyan-300 font-semibold">4.26 (0.48)</td>
                            <td className="py-2 px-2 text-right">16.28</td>
                            <td className="py-2 px-2 text-right text-forvi-cyan-300 font-semibold">&lt; .001</td>
                            <td className="py-2 px-2 text-right">.192</td>
                            <td className="py-2 px-2 text-center text-slate-300">Activo &gt; Trad., Ctrl</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-2 font-sans font-medium text-white">Autonomía metodológica</td>
                            <td className="py-2 px-2 text-center">2.96 (0.68)</td>
                            <td className="py-2 px-2 text-center">3.55 (0.66)</td>
                            <td className="py-2 px-2 text-center text-forvi-cyan-300 font-semibold">4.41 (0.51)</td>
                            <td className="py-2 px-2 text-right">37.92</td>
                            <td className="py-2 px-2 text-right text-forvi-cyan-300 font-semibold">&lt; .001</td>
                            <td className="py-2 px-2 text-right">.356</td>
                            <td className="py-2 px-2 text-center text-slate-300">Activo &gt; Trad. &gt; Ctrl</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="overflow-x-auto pb-1">
                      <table className="w-full min-w-[460px] text-left font-mono text-[10px] text-slate-300 whitespace-nowrap">
                        <thead>
                          <tr className="border-b-2 border-white/30 text-white">
                            <th className="py-1.5 px-2 font-sans">Fuente de variación</th>
                            <th className="py-1.5 px-2 text-right">SC (SS)</th>
                            <th className="py-1.5 px-2 text-right">gl (df)</th>
                            <th className="py-1.5 px-2 text-right">MC (MS)</th>
                            <th className="py-1.5 px-2 text-right">F</th>
                            <th className="py-1.5 px-2 text-right">p</th>
                            <th className="py-1.5 px-2 text-right">η²p</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          <tr>
                            <td className="py-2 px-2 font-sans font-medium text-white">Entre grupos (Metodología)</td>
                            <td className="py-2 px-2 text-right">42.84</td>
                            <td className="py-2 px-2 text-right">2</td>
                            <td className="py-2 px-2 text-right">21.42</td>
                            <td className="py-2 px-2 text-right font-semibold text-forvi-cyan-300">31.45</td>
                            <td className="py-2 px-2 text-right font-semibold text-forvi-cyan-300">&lt; .001</td>
                            <td className="py-2 px-2 text-right">.315</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-2 font-sans text-slate-300">Intra grupos (Error residual)</td>
                            <td className="py-2 px-2 text-right">93.30</td>
                            <td className="py-2 px-2 text-right">137</td>
                            <td className="py-2 px-2 text-right">0.68</td>
                            <td className="py-2 px-2 text-right text-slate-500">—</td>
                            <td className="py-2 px-2 text-right text-slate-500">—</td>
                            <td className="py-2 px-2 text-right text-slate-500">—</td>
                          </tr>
                          <tr className="font-semibold text-white">
                            <td className="py-2 px-2 font-sans">Total</td>
                            <td className="py-2 px-2 text-right">136.14</td>
                            <td className="py-2 px-2 text-right">139</td>
                            <td className="py-2 px-2 text-right text-slate-500">—</td>
                            <td className="py-2 px-2 text-right text-slate-500">—</td>
                            <td className="py-2 px-2 text-right text-slate-500">—</td>
                            <td className="py-2 px-2 text-right text-slate-500">—</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  <p className="mt-2.5 text-[9px] text-slate-400 border-t border-white/10 pt-1.5 italic">
                    Nota. M = Media; DE = Desviación estándar; SC = Suma de cuadrados; gl = Grados de libertad; MC = Cuadrado medio; η²p = Eta cuadrado parcial (tamaño del efecto grande &gt; .14). Supuestos de homocedasticidad verificados (Levene, p = .311). Formato estricto según normas APA (7.ª edición).
                  </p>
                </div>
              )}

              {/* Tab 2: Gráfico Boxplot analítico */}
              {activePreview === 'grafico' && (
                <div className="solution-detail-body rounded-xl border border-white/10 bg-[#000a18]/60 p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 text-[11px] mb-2.5">
                    <span className="font-medium text-slate-200">
                      Figura 1. Diagrama de caja y bigotes (Boxplot) por condición
                    </span>
                    <span className="text-[10px] text-forvi-cyan-300 font-mono self-start sm:self-auto">
                      ANOVA F(2, 137) = 31.45 (p &lt; .001)
                    </span>
                  </div>

                  {/* SVG Boxplot */}
                  <div className="rounded-lg bg-[#000a18]/80 p-2 border border-white/5">
                    <svg
                      viewBox="0 0 440 210"
                      className="w-full h-auto"
                      role="img"
                      aria-label="Diagrama de cajas y bigotes comparando Grupo Control, Tradicional y Activo"
                    >
                      {/* Gridlines & Y-Axis */}
                      <g opacity="0.6">
                        <line x1="45" y1="30" x2="420" y2="30" stroke="#334155" strokeDasharray="3 3" />
                        <text x="35" y="33" textAnchor="end" fill="#94a3b8" className="font-mono text-[9px]">5.0</text>
                        <line x1="45" y1="65" x2="420" y2="65" stroke="#334155" strokeDasharray="3 3" />
                        <text x="35" y="68" textAnchor="end" fill="#94a3b8" className="font-mono text-[9px]">4.0</text>
                        <line x1="45" y1="100" x2="420" y2="100" stroke="#334155" strokeDasharray="3 3" />
                        <text x="35" y="103" textAnchor="end" fill="#94a3b8" className="font-mono text-[9px]">3.0</text>
                        <line x1="45" y1="135" x2="420" y2="135" stroke="#334155" strokeDasharray="3 3" />
                        <text x="35" y="138" textAnchor="end" fill="#94a3b8" className="font-mono text-[9px]">2.0</text>
                        <line x1="45" y1="170" x2="420" y2="170" stroke="#334155" strokeDasharray="3 3" />
                        <text x="35" y="173" textAnchor="end" fill="#94a3b8" className="font-mono text-[9px]">1.0</text>
                      </g>

                      {/* Boxplot 1: Control (c) */}
                      <g>
                        {/* Whiskers */}
                        <line x1="105" y1="61.5" x2="135" y2="61.5" stroke="#94a3b8" strokeWidth="1.5" />
                        <line x1="120" y1="61.5" x2="120" y2="80.75" stroke="#94a3b8" strokeWidth="1.5" />
                        <line x1="120" y1="110.5" x2="120" y2="135" stroke="#94a3b8" strokeWidth="1.5" />
                        <line x1="105" y1="135" x2="135" y2="135" stroke="#94a3b8" strokeWidth="1.5" />
                        {/* Box (Q1 - Q3) */}
                        <rect x="95" y="80.75" width="50" height="29.75" rx="3" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
                        {/* Median line (Q2) */}
                        <line x1="95" y1="96.5" x2="145" y2="96.5" stroke="#cbd5e1" strokeWidth="2.5" />
                        {/* Mean mark (diamond) */}
                        <polygon points="120,92.5 123.5,96 120,99.5 116.5,96" fill="#f8fafc" />
                        {/* Tukey Letter */}
                        <text x="120" y="52" textAnchor="middle" fill="#94a3b8" className="font-mono text-[10px] font-bold">c</text>
                        {/* Labels */}
                        <text x="120" y="188" textAnchor="middle" fill="#cbd5e1" className="font-sans text-[10px] font-medium">Control</text>
                        <text x="120" y="199" textAnchor="middle" fill="#64748b" className="font-mono text-[8.5px]">n=45</text>
                      </g>

                      {/* Boxplot 2: Tradicional (b) */}
                      <g>
                        {/* Whiskers */}
                        <line x1="215" y1="40.5" x2="245" y2="40.5" stroke="#60a5fa" strokeWidth="1.5" />
                        <line x1="230" y1="40.5" x2="230" y2="56.25" stroke="#60a5fa" strokeWidth="1.5" />
                        <line x1="230" y1="84.25" x2="230" y2="114" stroke="#60a5fa" strokeWidth="1.5" />
                        <line x1="215" y1="114" x2="245" y2="114" stroke="#60a5fa" strokeWidth="1.5" />
                        {/* Box (Q1 - Q3) */}
                        <rect x="205" y="56.25" width="50" height="28" rx="3" fill="#0f3460" stroke="#3b82f6" strokeWidth="1.5" />
                        {/* Median line (Q2) */}
                        <line x1="205" y1="72" x2="255" y2="72" stroke="#93c5fd" strokeWidth="2.5" />
                        {/* Mean mark (diamond) */}
                        <polygon points="230,67 233.5,70.5 230,74 226.5,70.5" fill="#ffffff" />
                        {/* Tukey Letter */}
                        <text x="230" y="32" textAnchor="middle" fill="#93c5fd" className="font-mono text-[10px] font-bold">b</text>
                        {/* Labels */}
                        <text x="230" y="188" textAnchor="middle" fill="#cbd5e1" className="font-sans text-[10px] font-medium">Tradicional</text>
                        <text x="230" y="199" textAnchor="middle" fill="#64748b" className="font-mono text-[8.5px]">n=48</text>
                      </g>

                      {/* Boxplot 3: Activo (a) */}
                      <g>
                        {/* Whiskers */}
                        <line x1="325" y1="30" x2="355" y2="30" stroke="#00c2ff" strokeWidth="1.5" />
                        <line x1="340" y1="30" x2="340" y2="35.25" stroke="#00c2ff" strokeWidth="1.5" />
                        <line x1="340" y1="58" x2="340" y2="86" stroke="#00c2ff" strokeWidth="1.5" />
                        <line x1="325" y1="86" x2="355" y2="86" stroke="#00c2ff" strokeWidth="1.5" />
                        {/* Box (Q1 - Q3) */}
                        <rect x="315" y="35.25" width="50" height="22.75" rx="3" fill="#034675" stroke="#00c2ff" strokeWidth="1.5" />
                        {/* Median line (Q2) */}
                        <line x1="315" y1="44" x2="365" y2="44" stroke="#ffffff" strokeWidth="2.5" />
                        {/* Mean mark (diamond) */}
                        <polygon points="340,43.5 343.5,47 340,50.5 336.5,47" fill="#facc15" />
                        {/* Tukey Letter */}
                        <text x="340" y="20" textAnchor="middle" fill="#00c2ff" className="font-mono text-[11px] font-bold">a*</text>
                        {/* Labels */}
                        <text x="340" y="188" textAnchor="middle" fill="#00c2ff" className="font-sans text-[10px] font-semibold">Activo</text>
                        <text x="340" y="199" textAnchor="middle" fill="#38bdf8" className="font-mono text-[8.5px]">n=47</text>
                      </g>

                      {/* Legend */}
                      <g className="font-sans text-[8px]" fill="#94a3b8">
                        <line x1="375" y1="95" x2="385" y2="95" stroke="#ffffff" strokeWidth="2" />
                        <text x="390" y="98">Mediana</text>
                        <polygon points="380,108 383,111 380,114 377,111" fill="#facc15" />
                        <text x="390" y="113">Media (◆)</text>
                      </g>
                    </svg>
                  </div>

                  {/* Summary Metric Strip */}
                  <div className="mt-3 grid grid-cols-3 gap-2 border-t border-white/10 pt-2.5 text-center font-mono text-[9px]">
                    <div className="rounded-lg bg-white/[.02] p-1.5 border border-white/5">
                      <span className="text-slate-400 block font-sans text-[10px]">Control (c)</span>
                      <span className="text-white font-semibold">Md: 3.10</span> · <span className="text-slate-300">M: 3.12</span>
                      <span className="text-[8.5px] text-slate-400 block mt-0.5">IQR: 2.70 - 3.55</span>
                    </div>
                    <div className="rounded-lg bg-white/[.02] p-1.5 border border-white/5">
                      <span className="text-slate-300 block font-sans text-[10px]">Tradicional (b)</span>
                      <span className="text-white font-semibold">Md: 3.80</span> · <span className="text-slate-300">M: 3.85</span>
                      <span className="text-[8.5px] text-slate-400 block mt-0.5">IQR: 3.45 - 4.25</span>
                    </div>
                    <div className="rounded-lg bg-forvi-blue-950/40 p-1.5 border border-forvi-blue-400/30">
                      <span className="text-forvi-cyan-300 block font-sans text-[10px] font-semibold">Activo (a) ★</span>
                      <span className="text-white font-semibold">Md: 4.60</span> · <span className="text-forvi-cyan-300 font-semibold">M: 4.52</span>
                      <span className="text-[8.5px] text-forvi-cyan-400/80 block mt-0.5">IQR: 4.20 - 4.85</span>
                    </div>
                  </div>

                  <p className="mt-3 text-[9px] text-slate-400 border-t border-white/10 pt-1.5">
                    Diagrama de caja y bigotes (Boxplot) con distribución empírica, rango intercuartílico (IQR), mediana, media y letras de contrastes múltiples Tukey HSD a 300 DPI (formato vectorial SVG/PDF).
                  </p>
                </div>
              )}

              {/* Tab 3: Informe interpretativo */}
              {activePreview === 'informe' && (
                <div className="solution-detail-body rounded-xl border border-white/10 bg-[#000a18]/60 p-4 text-xs space-y-2.5">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-forvi-cyan-300">
                    <IconRenderer name="FileSearch" className="h-3.5 w-3.5" />
                    <span>Extracto de redacción interpretativa (Normas APA 7)</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-300">
                    «Se aplicó un Análisis de Varianza (ANOVA) de un factor independiente para contrastar el efecto de la condición instruccional sobre el rendimiento analítico. Previamente se confirmaron los supuestos de normalidad (Shapiro-Wilk, p &gt; .05) y homogeneidad de varianzas mediante la prueba de Levene, F(2, 137) = 1.18, p = .311. El modelo ANOVA evidenció diferencias estadísticamente significativas con un tamaño del efecto grande, F(2, 137) = 31.45, p &lt; .001, η²p = .315. Las comparaciones post-hoc de Tukey HSD mostraron que el grupo de Metodología Activa (M = 4.52, DE = 0.52) superó tanto al grupo Tradicional (M = 3.85, DE = 0.58, p = .002) como al Grupo Control (M = 3.12, DE = 0.64, p &lt; .001).»
                  </p>
                  <div className="rounded-lg bg-forvi-blue-950/40 border border-forvi-blue-400/20 p-2.5 text-[10px] text-slate-300">
                    <strong className="text-forvi-cyan-300">Entregable metodológico completo:</strong> Incluye verificación de supuestos, tamaño del efecto (η²p / d de Cohen), contrastes múltiples corregidos y script reproducible en R / SPSS / Jamovi.
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
