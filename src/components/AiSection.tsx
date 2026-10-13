import React, { useState } from 'react';
import { AI_SERVICES } from '../data/siteData';
import { IconRenderer } from './IconRenderer';
import { Brain, CheckCircle2, ArrowRight, ShieldCheck, Cpu, Terminal } from 'lucide-react';

export const AiSection: React.FC = () => {
  const [activeSimulation, setActiveSimulation] = useState<string>('rag-asistentes');

  // Real-world practical scenarios (explained as possible enterprise applications)
  const simulationScenarios: Record<string, {
    title: string;
    sub: string;
    inputLabel: string;
    inputSample: string;
    outputLabel: string;
    outputData: { label: string; value: string; highlight?: boolean }[];
    impact: string;
  }> = {
    'rag-asistentes': {
      title: 'Asistente Corporativo con RAG Privado',
      sub: 'Ejemplo de aplicación real posible en atención al cliente o soporte interno',
      inputLabel: 'Pregunta del cliente o colaborador:',
      inputSample: '"¿Cuáles son las condiciones de crédito a 60 días para un cliente nuevo de ferretería en Concepción?"',
      outputLabel: 'Respuesta generada en 0.8s basada exclusivamente en tu manual de crédito oficial:',
      outputData: [
        { label: 'Condición comercial', value: 'Aprobación sujeta a informe Dicom < 100 UF + 2 órdenes previas al contado.' },
        { label: 'Documento fuente', value: 'Manual de Políticas Comerciales 2026, sección 4.2 (Pág. 18)' },
        { label: 'Garantía requerida', value: 'Pagaré firmado ante notario.' },
        { label: 'Nivel de confianza', value: '100% (Verificado sin alucinación)', highlight: true },
      ],
      impact: 'Atención 24/7 sin comprometer políticas de la empresa ni inventar precios.',
    },
    'ocr-documental': {
      title: 'OCR Inteligente para Facturas & Guías',
      sub: 'Ejemplo de aplicación real posible en administración y finanzas',
      inputLabel: 'Documento recibido (PDF escaneado o foto con baja iluminación):',
      inputSample: 'Factura_Electronica_Proveedor_77894120.pdf (Imagen rotada con 14 líneas de productos y descuentos)',
      outputLabel: 'Datos estructurados extraídos automáticamente en JSON/Excel:',
      outputData: [
        { label: 'RUT Emisor', value: '77.894.120-K (Validado con algoritmo módulo 11)' },
        { label: 'Monto Total', value: '$4.890.350 CLP (Desglose neto e IVA cuadrado)' },
        { label: 'Ítems detectados', value: '14 productos mapeados automáticamente con código interno' },
        { label: 'Estado contable', value: 'Listo para precargar en sistema ERP', highlight: true },
      ],
      impact: 'Ahorro de hasta 40 horas al mes de digitación manual y cero discrepancias de IVA.',
    },
    'vision-facial': {
      title: 'Visión Artificial para Inspección o Control',
      sub: 'Ejemplo de aplicación real posible en plantas, bodegas o accesos',
      inputLabel: 'Flujo de cámara de seguridad o sensor de línea:',
      inputSample: 'Transmisión RTSP 1080p en zona de carga y empaque',
      outputLabel: 'Detección en tiempo real (30 cuadros por segundo):',
      outputData: [
        { label: 'Identificación EPP', value: 'Casco detectado (99%), Chaleco reflectante detectado (98%)' },
        { label: 'Anomalías en producto', value: '0 defectos en sellado de cajas' },
        { label: 'Registro horario', value: 'Conteo automático de bultos despachados: 124 unidades' },
        { label: 'Alerta generada', value: 'Ninguna (Operación en norma)', highlight: true },
      ],
      impact: 'Seguridad laboral estricta y trazabilidad visual sin depender de revisión humana continua.',
    },
    'asr-transcripcion': {
      title: 'Transcripción y Minuta Automática de Audio',
      sub: 'Ejemplo de aplicación real posible en reuniones comerciales o mesa de ayuda',
      inputLabel: 'Audio de llamada o reunión de coordinación:',
      inputSample: 'Grabacion_Reunion_Comercial_45min.m4a (Múltiples participantes hablando en español)',
      outputLabel: 'Minuta ejecutiva procesada en 25 segundos:',
      outputData: [
        { label: 'Resumen ejecutivo', value: 'Acuerdo de entrega de propuesta preliminar el viernes 17.' },
        { label: 'Tareas asignadas', value: 'Juan: Enviar catálogo actualizado. Pedro: Validar presupuesto.' },
        { label: 'Puntos críticos', value: 'Cliente requiere soporte durante fines de semana.' },
        { label: 'Transcripción completa', value: 'Indexada y buscable por palabras clave', highlight: true },
      ],
      impact: 'Los acuerdos de las reuniones no se olvidan y los compromisos quedan documentados.',
    },
    'nlp-analisis': {
      title: 'NLP para Análisis de Contratos & Correos',
      sub: 'Ejemplo de aplicación real posible en gestión legal o atención a reclamos',
      inputLabel: 'Documento o mensaje extenso:',
      inputSample: 'Borrador de Contrato de Prestación de Servicios de 28 páginas',
      outputLabel: 'Extracción semántica y detección de riesgos:',
      outputData: [
        { label: 'Cláusulas de exclusividad', value: 'Detectada en cláusula 8 (Restricción territorial por 2 años)' },
        { label: 'Penalizaciones por retraso', value: '0.5% por día con tope máximo del 15%' },
        { label: 'Jurisdicción pactada', value: 'Tribunales Ordinarios de Santiago' },
        { label: 'Nivel de riesgo preliminar', value: 'Medio (Revisión sugerida en cláusula 8)', highlight: true },
      ],
      impact: 'Revisión preliminar de documentos legales en segundos antes de la firma definitiva.',
    },
    'grafos-conocimiento': {
      title: 'Grafos de Conocimiento & Relaciones Complejas',
      sub: 'Ejemplo de aplicación real posible en auditoría o inteligencia comercial',
      inputLabel: 'Bases de datos heterogéneas:',
      inputSample: 'Facturas de compras + Registros societarios + Historial de despachos',
      outputLabel: 'Mapeo de interconexiones no evidentes:',
      outputData: [
        { label: 'Entidades vinculadas', value: '3 empresas proveedoras comparten mismo representante legal' },
        { label: 'Concentración de compra', value: 'El 68% del insumo crítico depende de un único holding' },
        { label: 'Oportunidad comercial', value: 'Venta cruzada identificada entre 45 clientes del segmento B2B' },
        { label: 'Representación visual', value: 'Grafo interactivo navegable por nodos', highlight: true },
      ],
      impact: 'Descubre patrones estratégicos que no se ven en tablas de Excel planas.',
    },
  };

  const currentSim = simulationScenarios[activeSimulation] || simulationScenarios['rag-asistentes'];

  return (
    <section id="ia" className="relative py-24 bg-[#000A18] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-forvi-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-forvi-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forvi-blue-950/80 border border-forvi-cyan-400/30 text-forvi-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm shadow-forvi-cyan-500/20">
            <Brain className="w-3.5 h-3.5 text-forvi-cyan-400 animate-pulse" />
            <span>Área 02 // Inteligencia Artificial Aplicada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-6">
            Inteligencia artificial que{' '}
            <span className="bg-gradient-to-r from-forvi-cyan-300 via-forvi-blue-400 to-white bg-clip-text text-transparent">
              resuelve problemas de negocio
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            No implementamos IA como simple adorno de marketing. Desarrollamos modelos y arquitecturas prácticas orientadas a resolver tareas críticas, reducir costos operativos y acelerar decisiones en empresas de todos los tamaños.
          </p>
        </div>

        {/* Interactive Capability Simulator */}
        <div className="mb-20">
          <div className="text-xs font-mono uppercase text-slate-400 mb-3 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2">
            <Terminal className="w-4 h-4 text-forvi-cyan-400" />
            <span>Explora ejemplos de aplicaciones empresariales posibles:</span>
          </div>

          {/* Interactive technology pills */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center sm:justify-start">
            {AI_SERVICES.map((serv) => (
              <button
                key={serv.id}
                onClick={() => setActiveSimulation(serv.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 flex items-center gap-2 ${
                  activeSimulation === serv.id
                    ? 'bg-gradient-to-r from-forvi-blue-600 to-forvi-cyan-500 text-white shadow-lg shadow-forvi-blue-500/30 scale-105'
                    : 'bg-[#001332] text-slate-300 hover:text-white hover:bg-[#001c4a] border border-forvi-blue-500/20'
                }`}
              >
                <IconRenderer name={serv.iconName} className="w-4 h-4 shrink-0" />
                <span>{serv.title.split('&')[0]}</span>
              </button>
            ))}
          </div>

          {/* Simulator Display Card */}
          <div className="rounded-2xl bg-gradient-to-br from-[#001438] via-[#000e26] to-[#000814] border border-forvi-cyan-400/30 p-6 sm:p-8 shadow-2xl shadow-black/80">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-forvi-blue-500/20 mb-6">
              <div>
                <span className="text-xs font-mono text-forvi-cyan-400 uppercase tracking-wider block mb-1">
                  Escenario de uso práctico
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {currentSim.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  {currentSim.sub}
                </p>
              </div>

              <div className="bg-forvi-blue-950/90 border border-forvi-cyan-400/30 rounded-xl px-4 py-2.5 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-forvi-cyan-400 shrink-0" />
                <div className="text-xs">
                  <span className="text-slate-300 block font-medium">Impacto en el negocio:</span>
                  <span className="text-white font-semibold">{currentSim.impact}</span>
                </div>
              </div>
            </div>

            {/* Input vs Output comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Input block */}
              <div className="rounded-xl bg-[#000a1c] border border-slate-800 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      Entrada del sistema
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">Dato en bruto</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-300 mb-2">
                    {currentSim.inputLabel}
                  </div>
                  <div className="bg-[#000612] rounded-lg p-3.5 text-xs text-slate-300 font-mono border border-slate-900 leading-relaxed">
                    {currentSim.inputSample}
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 mt-4 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-forvi-cyan-400" />
                  <span>Procesado mediante modelos adaptados a la infraestructura de tu empresa</span>
                </div>
              </div>

              {/* Output block */}
              <div className="rounded-xl bg-[#00102e] border border-forvi-cyan-500/30 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Resultado inteligente generado
                    </span>
                    <span className="text-[11px] text-emerald-400 font-mono">Estructurado & Útil</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mb-3">
                    {currentSim.outputLabel}
                  </div>

                  <div className="space-y-2.5">
                    {currentSim.outputData.map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-2.5 rounded-lg text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-1 ${
                          item.highlight
                            ? 'bg-emerald-950/40 border border-emerald-500/30 text-emerald-300'
                            : 'bg-[#000a1c] border border-slate-800 text-slate-200'
                        }`}
                      >
                        <span className="font-semibold text-slate-400 text-[11px] uppercase tracking-wide">
                          {item.label}:
                        </span>
                        <span className="font-medium text-right sm:max-w-[65%]">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-forvi-blue-900/40 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Adaptable a cualquier escala o volumen
                  </span>
                  <a
                    href="#contacto"
                    className="text-xs font-bold text-forvi-cyan-300 hover:text-white inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Cotizar este caso</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* AI Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group rounded-2xl bg-[#001332]/70 hover:bg-[#00173d] border border-forvi-blue-500/20 hover:border-forvi-cyan-400/40 p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-forvi-blue-600/20 border border-forvi-blue-500/30 text-forvi-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconRenderer name={service.iconName} className="w-6 h-6 text-forvi-cyan-400" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                    Capacidad 0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-forvi-cyan-300 transition-colors font-display">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                <div className="bg-[#000a1c] rounded-xl p-3 border border-slate-800 mb-4 text-xs">
                  <span className="text-slate-400 block font-semibold mb-0.5">Aplicación empresarial típica:</span>
                  <p className="text-slate-200">{service.capabilities[0]}</p>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
                  {service.techTags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-forvi-blue-950 text-forvi-cyan-300 border border-forvi-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
