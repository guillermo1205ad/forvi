import React, { useState } from 'react';
import { ArrowRight, Code, Sparkles, CheckCircle2, Terminal, Shield, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'erp' | 'ai' | 'automation'>('erp');

  const previews = {
    erp: {
      badge: 'SISTEMA DE GESTIÓN A MEDIDA',
      title: 'Plataforma Operativa Centralizada',
      terminal: 'forvi-stack --client="Mi Pyme" --modules="Ventas,Stock,Facturación,Cobranza"',
      status: 'Operativo en tiempo real',
      stats: [
        { label: 'Tiempo en tareas operativas', value: '-72%' },
        { label: 'Visibilidad de stock', value: '100%' },
        { label: 'Costo por licencias externas', value: '$0 / mes' },
      ],
      codeSnippet: `// Arquitectura a medida para tu flujo específico
interface OperacionNegocio {
  cliente: "Pyme Local";
  sincronizacion: "Inmediata";
  controlStock: "Alertas automáticas";
  facturacion: "Integración directa SII";
}
export const forviERP = deployCustomCore(OperacionNegocio);`,
    },
    ai: {
      badge: 'INTELIGENCIA ARTIFICIAL APLICADA',
      title: 'RAG & Extracción Inteligente de Documentos',
      terminal: 'forvi-ai --extract="Facturas_PDF,Contratos" --engine="Vision+LLM" --private',
      status: 'Procesando 85 docs/minuto',
      stats: [
        { label: 'Extracción sin errores', value: '99.4%' },
        { label: 'Respuestas al instante', value: '< 1.2s' },
        { label: 'Privacidad de datos', value: '100% Local/Seguro' },
      ],
      codeSnippet: `// Asistente privado entrenado con tu base de conocimiento
const respuestaSegura = await forviRAG.consultar({
  pregunta: "¿Cuál es la política de garantía para clientes?",
  contextoPrivado: true, // Datos nunca salen de tu control
  ceroAlucinacion: true
});`,
    },
    automation: {
      badge: 'AUTOMATIZACIÓN DE FLUJOS',
      title: 'Sincronización Multicanal & WhatsApp',
      terminal: 'forvi-sync --channels="WhatsApp,Email,Sheets,BBDD" --trigger="NuevoPedido"',
      status: 'Flujos 24/7 sin fallos',
      stats: [
        { label: 'Velocidad de cotización', value: '30 seg' },
        { label: 'Digitación manual', value: '0 horas' },
        { label: 'Retención de prospectos', value: '+45%' },
      ],
      codeSnippet: `// Disparador de eventos en tiempo real
onNuevoContacto(async (lead) => {
  await notificarPorWhatsApp(lead.telefono, "Cotización generada");
  await actualizarCRM(lead);
  await alertarEquipoComercial(lead.montoEstimado);
});`,
    },
  };

  const currentPreview = previews[activeTab];

  return (
    <section id="inicio" className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden bg-[#000A18]">
      {/* Background visual elements */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      
      {/* Subtle glowing ambient spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-forvi-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-forvi-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-forvi-blue-700/15 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forvi-blue-950/80 border border-forvi-blue-500/30 text-forvi-cyan-300 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm shadow-forvi-blue-500/20">
              <span className="w-2 h-2 rounded-full bg-forvi-cyan-400 animate-pulse" />
              <span>Ingeniería de Software & IA en Chile</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 font-display">
              Software a tu medida.{' '}
              <span className="block mt-1 bg-gradient-to-r from-forvi-cyan-300 via-forvi-blue-400 to-white bg-clip-text text-transparent">
                Inteligencia para tu negocio.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed font-normal">
              Desarrollamos soluciones tecnológicas personalizadas para empresas y pymes en Chile: desde aplicaciones sencillas y eficientes hasta sistemas avanzados de inteligencia artificial adaptados a tu presupuesto y forma real de trabajar.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-gradient-to-r from-forvi-blue-600 via-forvi-blue-500 to-forvi-cyan-500 hover:from-forvi-blue-500 hover:to-forvi-cyan-400 rounded-xl shadow-lg shadow-forvi-blue-600/35 hover:shadow-forvi-blue-500/50 transition-all duration-300 hover:-translate-y-0.5 focus:ring-2 focus:ring-forvi-cyan-400"
              >
                <span>Cuéntanos tu proyecto</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-semibold text-slate-200 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/80 hover:border-forvi-blue-500/40 rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Explorar servicios</span>
              </a>
            </div>

            {/* Fast Value Proposition Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-forvi-cyan-400 shrink-0" />
                <span>Negocio + Tecnología</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-forvi-cyan-400 shrink-0" />
                <span>Especial para Pymes</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-forvi-cyan-400 shrink-0" />
                <span>Sin costos ocultos</span>
              </div>
            </div>

          </div>

          {/* Interactive Interactive Tech Showcase */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-forvi-blue-500/30 via-forvi-blue-900/20 to-transparent shadow-2xl shadow-black/80">
              
              <div className="relative rounded-xl bg-[#00122e]/95 border border-forvi-blue-500/25 overflow-hidden backdrop-blur-xl">
                
                {/* Visualizer Header */}
                <div className="px-4 py-3 bg-[#000d24] border-b border-forvi-blue-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-forvi-cyan-400" />
                      forvi-engine // core.ts
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Live</span>
                  </div>
                </div>

                {/* Tab selector */}
                <div className="flex border-b border-forvi-blue-500/15 bg-[#00102b] p-1 gap-1">
                  <button
                    onClick={() => setActiveTab('erp')}
                    className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'erp'
                        ? 'bg-forvi-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>Software Medida</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('ai')}
                    className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'ai'
                        ? 'bg-forvi-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-forvi-cyan-300" />
                    <span>IA Aplicada</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('automation')}
                    className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'automation'
                        ? 'bg-forvi-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Automatización</span>
                  </button>
                </div>

                {/* Tab content view */}
                <div className="p-5 space-y-4">
                  <div>
                    <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-forvi-cyan-400 bg-forvi-blue-950/80 px-2 py-0.5 rounded border border-forvi-blue-500/30 mb-1.5">
                      {currentPreview.badge}
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {currentPreview.title}
                    </h3>
                  </div>

                  {/* Terminal CLI command */}
                  <div className="bg-[#000814] rounded-lg p-2.5 font-mono text-xs text-slate-300 border border-slate-800 flex items-center gap-2">
                    <span className="text-forvi-cyan-400">$</span>
                    <span className="truncate">{currentPreview.terminal}</span>
                  </div>

                  {/* Code Block */}
                  <div className="bg-[#000713] rounded-lg p-3.5 font-mono text-xs text-cyan-200/90 border border-forvi-blue-900/50 overflow-x-auto">
                    <pre className="text-[11px] leading-relaxed text-slate-300">
                      <code>{currentPreview.codeSnippet}</code>
                    </pre>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-forvi-blue-900/40">
                    {currentPreview.stats.map((stat, i) => (
                      <div key={i} className="bg-forvi-blue-950/40 rounded-lg p-2 border border-forvi-blue-500/10 text-center">
                        <div className="text-sm font-extrabold text-forvi-cyan-300">
                          {stat.value}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Direct interactive action */}
                  <div className="pt-1 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <Shield className="w-3.5 h-3.5" />
                      {currentPreview.status}
                    </span>
                    <a
                      href="#contacto"
                      className="text-forvi-cyan-400 hover:text-white font-medium inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Cotizar solución similar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
