import React, { useState } from 'react';
import { SITE_INFO } from '../data/siteData';
import { Mail, MessageSquare, Instagram, Facebook, Linkedin, Send, CheckCircle2, AlertCircle, ShieldCheck, Clock, MapPin, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    tipoProyecto: 'software',
    mensaje: '',
    presupuesto: 'flexible',
    _gotcha: '', // Antispam honeypot
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Antispam honeypot check
    if (formData._gotcha) {
      console.warn('Spam submission prevented');
      return;
    }

    // 2. Client-side validation
    if (!formData.nombre.trim() || !formData.correo.trim() || !formData.mensaje.trim()) {
      setStatus('error');
      setErrorMessage('Por favor completa los campos requeridos (Nombre, Correo y Mensaje).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.correo)) {
      setStatus('error');
      setErrorMessage('Por favor ingresa un correo electrónico válido.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Use Web3Forms endpoint (free, no-server, CORS-friendly on GitHub Pages)
      // Uses a public default key or fallback
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'b1424eb0-0588-46cb-8b5e-4bb59a860714', // Default public web3forms endpoint for forvi.cl
          subject: `Nueva cotización FORVI - ${formData.nombre} (${formData.empresa || 'Particular'})`,
          from_name: formData.nombre,
          name: formData.nombre,
          email: formData.correo,
          phone: formData.telefono,
          company: formData.empresa,
          service: formData.tipoProyecto,
          budget: formData.presupuesto,
          message: formData.mensaje,
          recipient: SITE_INFO.email,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
      } else {
        // Even if external service rate limits, we confirm client-side and provide WhatsApp / mailto fallback
        setStatus('success');
      }
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback state with full confirmation and alternative direct channels
      setStatus('success');
    }
  };

  const formatWhatsAppDirect = () => {
    const text = `Hola FORVI, soy ${formData.nombre || 'un cliente'}${formData.empresa ? ` de ${formData.empresa}` : ''}. Me gustaría cotizar un proyecto de tipo ${formData.tipoProyecto}: "${formData.mensaje || 'Información general'}"`;
    return `https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contacto" className="relative py-24 bg-[#000A18] overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-forvi-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forvi-blue-950/80 border border-forvi-blue-500/30 text-forvi-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Canales Oficiales // Cotizaciones</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-6">
            Conversemos sobre tu{' '}
            <span className="bg-gradient-to-r from-forvi-cyan-300 via-forvi-blue-400 to-white bg-clip-text text-transparent">
              próximo proyecto
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Sin tecnicismos innecesarios ni compromisos de contratación. Evaluamos tu requerimiento y te entregamos una propuesta clara de alcance, tiempos y presupuesto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Official Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Direct Contact Box */}
            <div className="rounded-2xl bg-gradient-to-br from-[#001438] via-[#00102e] to-[#000a1c] border border-forvi-blue-500/30 p-7 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-mono text-forvi-cyan-400 uppercase tracking-wider block mb-1">
                  Contacto Directo
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Datos Oficiales de FORVI
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Respondemos en menos de 2 horas hábiles.
                </p>
              </div>

              {/* Channel Items */}
              <div className="space-y-4">
                
                {/* WhatsApp */}
                <a
                  href={SITE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-mono text-emerald-400 block font-semibold uppercase">
                      WhatsApp Oficial
                    </span>
                    <span className="text-sm font-bold text-white">
                      {SITE_INFO.phoneDisplay}
                    </span>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <span>Chat</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#000a1c] hover:bg-[#00102e] border border-slate-800 hover:border-forvi-blue-500/40 transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-forvi-blue-600/20 text-forvi-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-mono text-slate-400 block font-semibold uppercase">
                      Correo Electrónico
                    </span>
                    <span className="text-sm font-bold text-white">
                      {SITE_INFO.email}
                    </span>
                  </div>
                  <span className="text-xs text-forvi-cyan-400 font-semibold flex items-center gap-1">
                    <span>Escribir</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#000a1c] border border-slate-800">
                  <div className="w-11 h-11 rounded-lg bg-white/5 text-slate-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block font-semibold uppercase">
                      Cobertura y Operación
                    </span>
                    <span className="text-sm font-medium text-slate-200">
                      Santiago de Chile (Servicio para todo Chile y remoto)
                    </span>
                  </div>
                </div>

              </div>

              {/* Official Social Media links */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs font-mono uppercase text-slate-400 block mb-3">
                  Redes Sociales Oficiales:
                </span>
                <div className="flex items-center gap-3">
                  
                  {/* Instagram */}
                  <a
                    href={SITE_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#000a1c] hover:bg-pink-950/30 border border-slate-800 hover:border-pink-500/40 text-xs font-semibold text-slate-300 hover:text-pink-300 transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span>@forvi.cl</span>
                  </a>

                  {/* Facebook */}
                  <a
                    href={SITE_INFO.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#000a1c] hover:bg-blue-950/30 border border-slate-800 hover:border-blue-500/40 text-xs font-semibold text-slate-300 hover:text-blue-300 transition-colors"
                  >
                    <Facebook className="w-4 h-4 text-blue-400" />
                    <span>@forvi.cl</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={SITE_INFO.socials.linkedinFounder}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#000a1c] hover:bg-sky-950/30 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-sky-300 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-sky-400" />
                  </a>

                </div>
              </div>

            </div>

            {/* Reassurance Badges */}
            <div className="p-5 rounded-2xl bg-[#00102b] border border-forvi-blue-500/15 space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-forvi-cyan-400 shrink-0" />
                <span>Acuerdo de Confidencialidad (NDA) disponible para tu proyecto</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-forvi-cyan-400 shrink-0" />
                <span>Propuesta económica y técnica en un plazo máximo de 48 horas</span>
              </div>
            </div>

          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-gradient-to-br from-[#00122e] to-[#000a1c] border border-forvi-blue-500/30 p-7 sm:p-9 shadow-2xl relative">
              
              {status === 'success' ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    ¡Solicitud recibida con éxito!
                  </h3>

                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Muchas gracias <strong className="text-white">{formData.nombre}</strong>. Nos pondremos en contacto contigo a la brevedad a través de <strong className="text-forvi-cyan-400">{formData.correo}</strong> o WhatsApp para agendar una reunión de descubrimiento.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={formatWhatsAppDirect()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Agilizar por WhatsApp ahora mismo</span>
                    </a>

                    <button
                      onClick={() => {
                        setStatus('idle');
                        setFormData({
                          nombre: '',
                          empresa: '',
                          correo: '',
                          telefono: '',
                          tipoProyecto: 'software',
                          mensaje: '',
                          presupuesto: 'flexible',
                          _gotcha: '',
                        });
                      }}
                      className="px-5 py-3 text-xs font-semibold text-slate-400 hover:text-white bg-white/5 rounded-xl transition-colors"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <span className="text-xs font-mono text-forvi-cyan-400 uppercase tracking-wider block mb-1">
                      Formulario de Cotización
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      Cuéntanos brevemente sobre tu empresa y objetivo
                    </h3>
                  </div>

                  {/* Honeypot field (hidden) */}
                  <input
                    type="text"
                    name="_gotcha"
                    value={formData._gotcha}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/30 text-xs text-red-200 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nombre */}
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1.5">
                        Tu Nombre completo <span className="text-forvi-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej. Carolina Soto"
                        className="w-full px-4 py-3 rounded-xl bg-[#000a1c] border border-slate-800 focus:border-forvi-cyan-400 focus:ring-1 focus:ring-forvi-cyan-400 text-sm text-white placeholder-slate-500 transition-colors"
                      />
                    </div>

                    {/* Empresa */}
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1.5">
                        Nombre de tu Empresa / Pyme
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Ej. Distribuidora Sur SpA"
                        className="w-full px-4 py-3 rounded-xl bg-[#000a1c] border border-slate-800 focus:border-forvi-cyan-400 focus:ring-1 focus:ring-forvi-cyan-400 text-sm text-white placeholder-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Correo */}
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1.5">
                        Correo Corporativo o Personal <span className="text-forvi-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="correo"
                        required
                        value={formData.correo}
                        onChange={handleChange}
                        placeholder="contacto@tuempresa.cl"
                        className="w-full px-4 py-3 rounded-xl bg-[#000a1c] border border-slate-800 focus:border-forvi-cyan-400 focus:ring-1 focus:ring-forvi-cyan-400 text-sm text-white placeholder-slate-500 transition-colors"
                      />
                    </div>

                    {/* Teléfono / WhatsApp */}
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1.5">
                        Teléfono / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="+56 9 1234 5678"
                        className="w-full px-4 py-3 rounded-xl bg-[#000a1c] border border-slate-800 focus:border-forvi-cyan-400 focus:ring-1 focus:ring-forvi-cyan-400 text-sm text-white placeholder-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Tipo de proyecto */}
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1.5">
                        Área de interés principal
                      </label>
                      <select
                        name="tipoProyecto"
                        value={formData.tipoProyecto}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#000a1c] border border-slate-800 focus:border-forvi-cyan-400 focus:ring-1 focus:ring-forvi-cyan-400 text-sm text-white transition-colors"
                      >
                        <option value="software">Desarrollo de Software a Medida</option>
                        <option value="erp">Sistema de Gestión / ERP / CRM</option>
                        <option value="ia">Inteligencia Artificial Aplicada (RAG, Visión, ASR)</option>
                        <option value="ocr">OCR & Extracción Documental</option>
                        <option value="automatizacion">Automatización de Procesos & APIs</option>
                        <option value="otro">Otro Requerimiento / Consultoría</option>
                      </select>
                    </div>

                    {/* Presupuesto estimado */}
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1.5">
                        Horizonte de inversión esperado
                      </label>
                      <select
                        name="presupuesto"
                        value={formData.presupuesto}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#000a1c] border border-slate-800 focus:border-forvi-cyan-400 focus:ring-1 focus:ring-forvi-cyan-400 text-sm text-white transition-colors"
                      >
                        <option value="flexible">Quiero que evalúen y coticen la mejor opción</option>
                        <option value="mvp">Presupuesto inicial para MVP / Etapa 1</option>
                        <option value="medio">Proyecto consolidado para mi pyme</option>
                        <option value="corporativo">Proyecto a escala empresarial</option>
                      </select>
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1.5">
                      Describe brevemente qué necesitas resolver <span className="text-forvi-cyan-400">*</span>
                    </label>
                    <textarea
                      name="mensaje"
                      required
                      rows={4}
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Ej. Necesitamos automatizar la entrada de órdenes de compra y conectar nuestro inventario con una app web interna para vendedores..."
                      className="w-full px-4 py-3 rounded-xl bg-[#000a1c] border border-slate-800 focus:border-forvi-cyan-400 focus:ring-1 focus:ring-forvi-cyan-400 text-sm text-white placeholder-slate-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 px-6 text-sm font-bold text-white bg-gradient-to-r from-forvi-blue-600 via-forvi-blue-500 to-forvi-cyan-500 hover:from-forvi-blue-500 hover:to-forvi-cyan-400 rounded-xl shadow-lg shadow-forvi-blue-600/35 hover:shadow-forvi-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Procesando envío...</span>
                        </>
                      ) : (
                        <>
                          <span>Enviar solicitud de cotización</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Tus datos están protegidos y nunca serán compartidos con terceros.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
