import React, { useState } from 'react';
import { Calculator, MessageSquare, Check, ArrowRight } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export const ProjectCalculator: React.FC = () => {
  const [projectType, setProjectType] = useState<string>('erp');
  const [projectScale, setProjectScale] = useState<string>('mvp');
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>(['whatsapp']);

  const typeOptions = [
    { id: 'erp', label: 'Sistema de Gestión / ERP a Medida', desc: 'Ventas, inventario, clientes y operaciones internas' },
    { id: 'web', label: 'Plataforma Web / SaaS para Clientes', desc: 'Portales de autogestión y aplicaciones cloud' },
    { id: 'ai', label: 'Solución de Inteligencia Artificial', desc: 'RAG, OCR de facturas, visión o transcripción' },
    { id: 'auto', label: 'Automatización & Conexión de APIs', desc: 'Sincronización de flujos y eliminación de tareas manuales' },
  ];

  const scaleOptions = [
    { id: 'mvp', label: 'Fase Inicial (MVP Ágil)', timeframe: '2 a 4 semanas', focus: 'Funcionalidades críticas con mínima inversión' },
    { id: 'full', label: 'Sistema Completo Operativo', timeframe: '4 a 8 semanas', focus: 'Automatización integral y módulos avanzados' },
    { id: 'enterprise', label: 'Ecosistema Escalable Multi-área', timeframe: '8 a 12 semanas', focus: 'Múltiples sucursales, alta concurrencia e integraciones' },
  ];

  const integrationOptions = [
    { id: 'whatsapp', label: 'WhatsApp Notificaciones' },
    { id: 'sii', label: 'Facturación / SII Chile' },
    { id: 'payments', label: 'Pasarelas de Pago' },
    { id: 'excel', label: 'Migración desde Excel / BBDD' },
    { id: 'security', label: 'Roles y Permisos Avanzados' },
  ];

  const toggleIntegration = (id: string) => {
    setSelectedIntegrations((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedTypeObj = typeOptions.find((t) => t.id === projectType);
  const selectedScaleObj = scaleOptions.find((s) => s.id === projectScale);

  // Generate customized WhatsApp query
  const waMessage = `Hola FORVI, utilicé su estimador de proyectos: me interesa un ${selectedTypeObj?.label} con alcance ${selectedScaleObj?.label} (estimado en ${selectedScaleObj?.timeframe}) e integraciones (${selectedIntegrations.join(', ')}). Me gustaría cotizarlo formalmente.`;
  const encodedWaUrl = `https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent(waMessage)}`;

  return (
    <section className="relative py-20 bg-[#000d24] border-t border-b border-forvi-blue-500/15 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forvi-blue-950/80 border border-forvi-blue-500/30 text-forvi-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Herramienta Interactiva // Diagnóstico Rápido</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-display mb-3">
            Dimensiona tu proyecto en 30 segundos
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Selecciona el alcance aproximado de tu requerimiento para obtener una estimación de tiempos y arquitectura recomendada sin compromiso.
          </p>
        </div>

        {/* Interactive Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Project Type */}
            <div className="bg-[#00102e] rounded-2xl p-5 border border-forvi-blue-500/20">
              <label className="text-xs font-mono uppercase text-slate-400 block mb-3 font-semibold">
                1. ¿Qué tipo de solución necesitas principalmente?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {typeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setProjectType(opt.id)}
                    className={`p-3.5 rounded-xl text-left transition-all border ${
                      projectType === opt.id
                        ? 'bg-forvi-blue-600/30 border-forvi-cyan-400 text-white shadow-md'
                        : 'bg-[#000a1c] border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">{opt.label}</div>
                    <div className="text-[11px] text-slate-400 mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scale & Stage */}
            <div className="bg-[#00102e] rounded-2xl p-5 border border-forvi-blue-500/20">
              <label className="text-xs font-mono uppercase text-slate-400 block mb-3 font-semibold">
                2. ¿En qué escala visualizas la primera versión?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {scaleOptions.map((scale) => (
                  <button
                    key={scale.id}
                    onClick={() => setProjectScale(scale.id)}
                    className={`p-3.5 rounded-xl text-left transition-all border flex flex-col justify-between ${
                      projectScale === scale.id
                        ? 'bg-forvi-blue-600/30 border-forvi-cyan-400 text-white shadow-md'
                        : 'bg-[#000a1c] border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold mb-1">{scale.label}</div>
                      <div className="text-[10px] text-slate-400 leading-tight">{scale.focus}</div>
                    </div>
                    <div className="mt-2 text-[10px] font-mono text-forvi-cyan-400 font-semibold">
                      ⏱ {scale.timeframe}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Integrations */}
            <div className="bg-[#00102e] rounded-2xl p-5 border border-forvi-blue-500/20">
              <label className="text-xs font-mono uppercase text-slate-400 block mb-3 font-semibold">
                3. Integraciones sugeridas (opcional):
              </label>
              <div className="flex flex-wrap gap-2">
                {integrationOptions.map((intg) => {
                  const isSelected = selectedIntegrations.includes(intg.id);
                  return (
                    <button
                      key={intg.id}
                      onClick={() => toggleIntegration(intg.id)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 border ${
                        isSelected
                          ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300 font-semibold'
                          : 'bg-[#000a1c] border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {isSelected ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <span className="w-3.5 h-3.5 rounded-full border border-slate-600" />}
                      <span>{intg.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#00173d] via-[#00122e] to-[#000a1c] rounded-2xl p-6 sm:p-7 border border-forvi-cyan-400/40 shadow-2xl space-y-6">
            <div>
              <span className="text-[11px] font-mono uppercase text-forvi-cyan-400 tracking-wider block mb-1">
                Estimación de Alcance
              </span>
              <h3 className="text-xl font-bold text-white">
                {selectedTypeObj?.label}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {selectedScaleObj?.focus}
              </p>
            </div>

            <div className="space-y-3 py-4 border-t border-b border-forvi-blue-500/20 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Tiempo de desarrollo estimado:</span>
                <span className="font-bold text-white font-mono bg-forvi-blue-950 px-2 py-0.5 rounded border border-forvi-blue-500/30">
                  {selectedScaleObj?.timeframe}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Modalidad de pago:</span>
                <span className="text-emerald-400 font-semibold">Por hitos entregados (cero ataduras)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Propiedad del código:</span>
                <span className="text-white font-semibold">100% de tu empresa</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Garantía posdespliegue:</span>
                <span className="text-white font-semibold">Incluida</span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={encodedWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 rounded-xl shadow-lg shadow-emerald-700/30 transition-all text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Consultar por WhatsApp con este estimado</span>
              </a>

              <a
                href="#contacto"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors text-center"
              >
                <span>Completar formulario web detallado</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="text-[11px] text-slate-400 text-center">
              Sin compromisos de contratación. Presupuesto formal cerrado tras reunión de descubrimiento.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
