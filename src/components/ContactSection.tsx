import React, { useEffect, useRef, useState } from 'react';
import { Mail, MessageSquare, Instagram, Facebook, Linkedin, Send, CheckCircle2, AlertCircle, MapPin, ArrowRight } from 'lucide-react';
import { SITE_INFO, CONTACT_PROJECT_OPTIONS as PROJECT_OPTIONS, CONTACT_BUDGET_OPTIONS as BUDGET_OPTIONS } from '../data/siteData';
import { submitContact } from '../lib/contactSubmission';
import { mergeProjectInquiry, ProjectInquiry } from '../lib/projectInquiry';

const INITIAL_FORM = {
  nombre: '',
  empresa: '',
  correo: '',
  telefono: '',
  tipoProyecto: 'software',
  mensaje: '',
  presupuesto: 'flexible',
  _gotcha: '',
};

type RequiredField = 'nombre' | 'correo' | 'mensaje';
type FormErrors = Partial<Record<RequiredField, string>>;

const fieldClass = 'w-full rounded-xl border border-white/15 bg-[#000A18] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-[#027AF1] focus:outline-none focus:ring-2 focus:ring-[#027AF1]/30 disabled:opacity-60';
const labelClass = 'mb-2 block text-sm font-medium text-slate-200';

export const ContactSection: React.FC<{ inquiry: ProjectInquiry | null }> = ({ inquiry }) => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [fieldErrors, setFieldErrors] = useState<FormErrors>({});
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const inFlight = useRef(false);
  const requestRef = useRef<AbortController | null>(null);

  const previousSummary = useRef('');
  useEffect(() => {
    if (!inquiry || inFlight.current) return;
    const projectTypes: Record<string, string> = { erp: 'erp', web: 'software', ai: 'ia', auto: 'automatizacion' };
    const scales: Record<string, string> = { mvp: 'mvp', full: 'medio', enterprise: 'corporativo' };
    const priorSummary = previousSummary.current;
    setFormData(previous => ({
      ...previous,
      tipoProyecto: projectTypes[inquiry.projectType] ?? 'otro',
      presupuesto: scales[inquiry.projectScale] ?? 'flexible',
      mensaje: mergeProjectInquiry(previous.mensaje, inquiry.summary, priorSummary),
    }));
    previousSummary.current = inquiry.summary;
    setStatus('idle');
    setFieldErrors({});
    setErrorMessage('');
  }, [inquiry]);

  useEffect(() => () => requestRef.current?.abort(), []);
  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    if (name in fieldErrors) setFieldErrors((previous) => ({ ...previous, [name]: undefined }));
  };

  const projectLabel = PROJECT_OPTIONS.find((option) => option.value === formData.tipoProyecto)?.label;
  const budgetLabel = BUDGET_OPTIONS.find((option) => option.value === formData.presupuesto)?.label;
  const contactSummary = [
    'Hola FORVI, me gustaría conversar sobre un proyecto.',
    formData.nombre.trim() && `Nombre: ${formData.nombre.trim()}`,
    formData.empresa.trim() && `Empresa: ${formData.empresa.trim()}`,
    formData.correo.trim() && `Correo: ${formData.correo.trim()}`,
    formData.telefono.trim() && `Teléfono: ${formData.telefono.trim()}`,
    `Me interesa: ${projectLabel}`,
    `Etapa de inversión: ${budgetLabel}`,
    formData.mensaje.trim() && `Necesidad: ${formData.mensaje.trim()}`,
  ].filter(Boolean).join('\n');
  const whatsappUrl = `https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent(contactSummary)}`;
  const mailUrl = `mailto:${SITE_INFO.email}?subject=${encodeURIComponent('Consulta de proyecto — FORVI')}&body=${encodeURIComponent(contactSummary)}`;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inFlight.current || formData._gotcha) return;

    const errors: FormErrors = {};
    if (!formData.nombre.trim()) errors.nombre = 'Escribe tu nombre.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo.trim())) errors.correo = 'Escribe un correo válido para que podamos responderte.';
    if (!formData.mensaje.trim()) errors.mensaje = 'Cuéntanos qué necesitas resolver.';
    setFieldErrors(errors);
    setErrorMessage('');

    const firstInvalidField = (['nombre', 'correo', 'mensaje'] as const).find((field) => errors[field]);
    if (firstInvalidField) {
      setStatus('error');
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalidField}"]`)?.focus();
      return;
    }

    inFlight.current = true;
    setStatus('submitting');
    const controller = new AbortController();
    requestRef.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 15000);

    try {
      await submitContact({
        subject: `Nueva consulta FORVI — ${formData.nombre.trim()}`,
        from_name: formData.nombre.trim(),
        name: formData.nombre.trim(),
        email: formData.correo.trim(),
        phone: formData.telefono.trim(),
        company: formData.empresa.trim(),
        service: projectLabel,
        budget: budgetLabel,
        message: formData.mensaje.trim(),
        recipient: SITE_INFO.email,
      }, { signal: controller.signal });
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage(controller.signal.aborted
        ? 'El servicio tardó demasiado en responder y no pudimos confirmar el envío. Conservamos tu mensaje: puedes reintentar o enviarlo por un canal directo.'
        : 'No pudimos confirmar el envío. Tu mensaje sigue aquí: reintenta o compártelo por WhatsApp o correo.');
    } finally {
      window.clearTimeout(timeout);
      inFlight.current = false;
      requestRef.current = null;
    }
  };

  return (
    <section id="contacto" aria-labelledby="contact-heading" className="relative border-t border-white/10 bg-[#000A18] py-20 sm:py-28">
      <div className="section-shell">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-4">Hablemos de tu proyecto</p>
          <h2 id="contact-heading" className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            El próximo paso empieza<br className="hidden sm:block" /> con una conversación.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            Cuéntanos qué está frenando a tu negocio y qué te gustaría mejorar. Te ayudamos a definir por dónde empezar.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="space-y-7">
            <div className="rounded-2xl border border-white/10 bg-[#071a32] p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white">¿Prefieres hablar directamente?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">Elige el canal que te resulte más cómodo.</p>
              <div className="mt-6 space-y-3">
                <a href={SITE_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="group flex min-h-20 items-center gap-4 rounded-xl border border-white/10 bg-[#000A18]/50 p-4 transition-colors hover:border-[#027AF1]/60">
                  <MessageSquare aria-hidden="true" className="h-5 w-5 shrink-0 text-[#59aeff]" />
                  <span className="min-w-0 flex-1"><span className="block text-xs text-slate-400">WhatsApp</span><span className="mt-1 block text-sm font-semibold text-white">{SITE_INFO.phoneDisplay}</span></span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>
                <a href={`mailto:${SITE_INFO.email}`} className="group flex min-h-20 items-center gap-4 rounded-xl border border-white/10 bg-[#000A18]/50 p-4 transition-colors hover:border-[#027AF1]/60">
                  <Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-[#59aeff]" />
                  <span className="min-w-0 flex-1"><span className="block text-xs text-slate-400">Correo electrónico</span><span className="mt-1 block break-all text-sm font-semibold text-white">{SITE_INFO.email}</span></span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <p className="mt-6 flex items-center gap-2 text-sm text-slate-400"><MapPin aria-hidden="true" className="h-4 w-4 shrink-0" />{SITE_INFO.location} · Trabajo remoto</p>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                <a href={SITE_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-xs text-slate-300 transition-colors hover:bg-white/5 hover:text-white"><Instagram aria-hidden="true" className="h-4 w-4" />Instagram</a>
                <a href={SITE_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-xs text-slate-300 transition-colors hover:bg-white/5 hover:text-white"><Facebook aria-hidden="true" className="h-4 w-4" />Facebook</a>
                <a href={SITE_INFO.socials.linkedinFounder} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Guillermo Peralta" className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-xs text-slate-300 transition-colors hover:bg-white/5 hover:text-white"><Linkedin aria-hidden="true" className="h-4 w-4" />LinkedIn</a>
              </div>
            </div>
            <div className="px-1">
              <h3 className="text-sm font-semibold text-white">No necesitas tener todo definido.</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">Un proceso que te quita tiempo, una herramienta que ya no alcanza o una idea por explorar son un buen punto de partida.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#071a32] p-6 sm:p-8">
            {status === 'success' ? (
              <div ref={successRef} tabIndex={-1} role="status" className="py-10 text-center focus:outline-none">
                <CheckCircle2 aria-hidden="true" className="mx-auto h-12 w-12 text-[#59aeff]" />
                <h3 className="mt-5 text-2xl font-semibold text-white">Tu consulta fue enviada.</h3>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-300">Gracias, {formData.nombre}. El servicio confirmó el envío. Dejaste <span className="break-all text-white">{formData.correo}</span> como correo de contacto.</p>
                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="button-primary"><MessageSquare aria-hidden="true" className="h-4 w-4" />Abrir WhatsApp</a>
                  <button type="button" className="button-secondary" onClick={() => { setStatus('idle'); setFormData(INITIAL_FORM); previousSummary.current = ''; setFieldErrors({}); setErrorMessage(''); }}>Enviar otra consulta</button>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate aria-busy={status === 'submitting'}>
                <h3 className="text-xl font-semibold text-white">¿Qué necesitas resolver?</h3>
                <p id="contact-form-note" className="mt-2 text-xs leading-relaxed text-slate-400">Los campos con * son obligatorios. Los demás nos ayudan a entender tu contexto.</p>
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="contact-website">Deja este campo vacío</label>
                  <input id="contact-website" type="text" name="_gotcha" value={formData._gotcha} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                </div>

                {errorMessage && (
                  <div role="alert" className="mt-5 rounded-xl border border-red-400/30 bg-red-950/30 p-4">
                    <div className="flex items-start gap-2 text-sm leading-relaxed text-red-200"><AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" /><p>{errorMessage}</p></div>
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-white">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 underline underline-offset-4"><MessageSquare aria-hidden="true" className="h-4 w-4" />Enviar por WhatsApp</a>
                      <a href={mailUrl} className="inline-flex min-h-11 items-center gap-2 underline underline-offset-4"><Mail aria-hidden="true" className="h-4 w-4" />Enviar por correo</a>
                    </div>
                  </div>
                )}

                <fieldset disabled={status === 'submitting'} aria-describedby="contact-form-note" className="mt-6 min-w-0 space-y-5">
                  <legend className="sr-only">Datos de tu consulta</legend>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className={labelClass}>Tu nombre <span aria-hidden="true">*</span></label>
                      <input id="contact-name" name="nombre" autoComplete="name" required maxLength={120} value={formData.nombre} onChange={handleChange} placeholder="Nombre y apellido" aria-invalid={Boolean(fieldErrors.nombre)} aria-describedby={fieldErrors.nombre ? 'contact-name-error' : undefined} className={fieldClass} />
                      {fieldErrors.nombre && <p id="contact-name-error" role="alert" className="mt-2 text-xs text-red-300">{fieldErrors.nombre}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-company" className={labelClass}>Empresa</label>
                      <input id="contact-company" name="empresa" autoComplete="organization" maxLength={180} value={formData.empresa} onChange={handleChange} placeholder="Nombre de tu empresa" className={fieldClass} />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className={labelClass}>Correo electrónico <span aria-hidden="true">*</span></label>
                      <input id="contact-email" type="email" name="correo" autoComplete="email" required maxLength={254} value={formData.correo} onChange={handleChange} placeholder="tu@empresa.cl" aria-invalid={Boolean(fieldErrors.correo)} aria-describedby={fieldErrors.correo ? 'contact-email-error' : undefined} className={fieldClass} />
                      {fieldErrors.correo && <p id="contact-email-error" role="alert" className="mt-2 text-xs text-red-300">{fieldErrors.correo}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className={labelClass}>Teléfono / WhatsApp</label>
                      <input id="contact-phone" type="tel" name="telefono" autoComplete="tel" maxLength={40} value={formData.telefono} onChange={handleChange} placeholder="+56 9 1234 5678" className={fieldClass} />
                    </div>
                    <div>
                      <label htmlFor="contact-service" className={labelClass}>Me interesa</label>
                      <select id="contact-service" name="tipoProyecto" value={formData.tipoProyecto} onChange={handleChange} className={fieldClass}>{PROJECT_OPTIONS.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select>
                    </div>
                    <div>
                      <label htmlFor="contact-budget" className={labelClass}>Inversión prevista</label>
                      <select id="contact-budget" name="presupuesto" value={formData.presupuesto} onChange={handleChange} className={fieldClass}>{BUDGET_OPTIONS.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className={labelClass}>Cuéntanos tu idea o desafío <span aria-hidden="true">*</span></label>
                    <textarea id="contact-message" name="mensaje" required rows={4} maxLength={5000} value={formData.mensaje} onChange={handleChange} placeholder="Por ejemplo: llevamos el inventario en Excel y necesitamos conectarlo con nuestras ventas." aria-invalid={Boolean(fieldErrors.mensaje)} aria-describedby={fieldErrors.mensaje ? 'contact-message-error' : undefined} className={`${fieldClass} min-h-32 resize-y`} />
                    {fieldErrors.mensaje && <p id="contact-message-error" role="alert" className="mt-2 text-xs text-red-300">{fieldErrors.mensaje}</p>}
                  </div>
                  <button type="submit" disabled={status === 'submitting'} className="button-primary w-full disabled:cursor-wait disabled:opacity-60">
                    {status === 'submitting' ? <><span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />Enviando consulta…</> : <>Conversemos sobre mi proyecto<Send aria-hidden="true" className="h-4 w-4" /></>}
                  </button>
                </fieldset>
                <p aria-live="polite" className="sr-only">{status === 'submitting' ? 'Enviando tu consulta. Espera la confirmación.' : ''}</p>
                <p className="mt-4 text-xs leading-relaxed text-slate-400">Usaremos tus datos para responder esta consulta. El envío se procesa mediante Web3Forms. También puedes contactarnos directamente por correo o WhatsApp.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
