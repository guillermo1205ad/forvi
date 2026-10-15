/// <reference types="vite/client" />
import React, { useEffect, useRef, useState } from 'react';
import {
  Mail,
  MessageSquare,
  Instagram,
  Facebook,
  ArrowRight,
} from 'lucide-react';
import { SITE_INFO } from '../data/siteData';
import { submitContact } from '../lib/contactSubmission';
import {
  CONTACT_DATA_OPTIONS,
  INITIAL_CONTACT_INQUIRY,
  createContactWhatsAppLink,
  prepareContactInquiry,
  validateContactInquiry,
  type ContactFieldErrors,
} from '../lib/contactInquiry';

const fieldClass = 'w-full rounded-xl border border-white/15 bg-[#000A18] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-[#027AF1] focus:outline-none focus:ring-2 focus:ring-[#027AF1]/30 disabled:opacity-60';
const labelClass = 'mb-2 block text-sm font-medium text-slate-200';

export function ContactSection() {
  const [formData, setFormData] = useState(INITIAL_CONTACT_INQUIRY);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const inFlight = useRef(false);
  const requestRef = useRef<AbortController | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  useEffect(() => () => {
    requestRef.current?.abort();
    requestRef.current = null;
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(previous => ({ ...previous, [name]: value }));
    if (name in fieldErrors) {
      setFieldErrors(previous => ({ ...previous, [name]: undefined }));
    }
  };

  const whatsappUrl = createContactWhatsAppLink(SITE_INFO.phoneRaw);
  const inquiry = prepareContactInquiry(formData);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inFlight.current || formData._gotcha) return;

    const errors = validateContactInquiry(formData);
    setFieldErrors(errors);
    setErrorMessage('');

    const firstInvalidField = (['nombre', 'correo', 'objetivo'] as const).find(field => errors[field]);
    if (firstInvalidField) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalidField}"]`)?.focus();
      return;
    }

    inFlight.current = true;
    setStatus('submitting');
    const controller = new AbortController();
    requestRef.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    timeoutRef.current = timeout;

    try {
      await submitContact(inquiry, { signal: controller.signal });
      controller.signal.throwIfAborted();
      if (requestRef.current === controller) setStatus('success');
    } catch (error) {
      if (import.meta.env.DEV) console.error('Contact submission failed', error);
      if (requestRef.current !== controller) return;
      setStatus('error');
      setErrorMessage(controller.signal.aborted
        ? 'El envío tardó demasiado y no pudimos confirmarlo. Conservamos tus datos para que puedas reintentar.'
        : 'No pudimos confirmar el envío. Tus datos siguen en el formulario: puedes revisarlos y reintentar.');
    } finally {
      window.clearTimeout(timeout);
      if (timeoutRef.current === timeout) timeoutRef.current = null;
      if (requestRef.current === controller) requestRef.current = null;
      inFlight.current = false;
    }
  };

  const resetForm = () => {
    setFormData(INITIAL_CONTACT_INQUIRY);
    setFieldErrors({});
    setErrorMessage('');
    setStatus('idle');
    window.requestAnimationFrame(() => {
      formRef.current?.querySelector<HTMLInputElement>('[name="nombre"]')?.focus();
    });
  };

  return (
    <section
      id="contacto"
      aria-labelledby="contact-heading"
      className="section-spacing relative border-t border-white/10 bg-[#000A18]"
    >
      <div className="section-shell">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-4">Hablemos de tu investigación</p>
          <h2
            id="contact-heading"
            className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Cotiza tu análisis.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            Cuéntanos qué buscas comprender, con qué fuentes cuentas y cuál es tu plazo deseado.
            Revisaremos tu caso para definir una propuesta personalizada.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="space-y-7">
            <div className="rounded-2xl border border-white/10 bg-[#071a32] p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white">¿Prefieres conversar directamente?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Escríbenos por el canal que te resulte más cómodo.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-20 items-center gap-4 rounded-xl border border-white/10 bg-[#000A18]/50 p-4 transition-colors hover:border-[#027AF1]/60"
                >
                  <MessageSquare aria-hidden="true" className="h-5 w-5 shrink-0 text-[#59aeff]" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-slate-400">Cotizar por WhatsApp</span>
                    <span className="mt-1 block text-sm font-semibold text-white">
                      {SITE_INFO.phoneDisplay}
                    </span>
                  </span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="group flex min-h-20 items-center gap-4 rounded-xl border border-white/10 bg-[#000A18]/50 p-4 transition-colors hover:border-[#027AF1]/60"
                >
                  <Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-[#59aeff]" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-slate-400">Correo electrónico</span>
                    <span className="mt-1 block break-all text-sm font-semibold text-white">
                      {SITE_INFO.email}
                    </span>
                  </span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                <a
                  href={SITE_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-xs text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <Instagram aria-hidden="true" className="h-4 w-4" />
                  Instagram
                </a>
                <a
                  href={SITE_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-xs text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <Facebook aria-hidden="true" className="h-4 w-4" />
                  Facebook
                </a>
              </div>
            </div>
            <div className="px-1">
              <h3 className="text-sm font-semibold text-white">No necesitas tener todo definido.</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Puedes empezar con tu pregunta de investigación y una descripción general de tus
                fuentes. Acordamos el alcance, los entregables, el precio y el plazo antes de comenzar.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#071a32] p-6 sm:p-8">
            {status === 'success' ? (
              <div>
                <h3
                  ref={successRef}
                  tabIndex={-1}
                  className="text-2xl font-semibold text-white focus:outline-none"
                >
                  Tu consulta fue enviada.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Gracias, {inquiry.name}. Te responderemos a{' '}
                  <span className="break-all text-white">{inquiry.email}</span>{' '}
                  para conversar sobre tu análisis.
                </p>
                <dl className="mt-6 space-y-5 rounded-xl border border-white/10 bg-[#000A18]/50 p-5 text-sm">
                  <div>
                    <dt className="text-xs text-slate-400">Nombre</dt>
                    <dd className="mt-1 break-words text-white">{inquiry.name}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-400">Correo de contacto</dt>
                    <dd className="mt-1 break-all text-white">{inquiry.email}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-400">Objetivo del proyecto</dt>
                    <dd className="mt-1 whitespace-pre-wrap break-words leading-relaxed text-white">
                      {inquiry.message}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-400">Tipo de datos</dt>
                    <dd className="mt-1 text-white">{inquiry.data_type}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-400">Plazo deseado</dt>
                    <dd className="mt-1 break-words text-white">{inquiry.desired_deadline}</dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-col gap-3">
                  <button type="button" className="button-secondary" onClick={resetForm}>
                    Enviar otra consulta
                  </button>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm text-[#59aeff] underline underline-offset-4"
                >
                  <MessageSquare aria-hidden="true" className="h-4 w-4" />
                  Continuar por WhatsApp
                </a>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate aria-busy={status === 'submitting'}>
                <h3 className="text-xl font-semibold text-white">Envíanos tu consulta</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Completa estos datos para enviar tu consulta directamente a FORVI desde esta página.
                </p>
                <p id="contact-form-note" className="mt-2 text-xs leading-relaxed text-slate-400">
                  Los campos con * son obligatorios. Si aún no conoces el tipo de datos o el plazo,
                  puedes dejarlo por definir.
                </p>
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="contact-website">Deja este campo vacío</label>
                  <input
                    id="contact-website"
                    type="text"
                    name="_gotcha"
                    value={formData._gotcha}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {errorMessage && (
                  <div role="alert" className="mt-5 rounded-xl border border-red-400/30 bg-red-950/30 p-4">
                    <p className="text-sm leading-relaxed text-red-200">{errorMessage}</p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm text-white underline underline-offset-4"
                    >
                      <MessageSquare aria-hidden="true" className="h-4 w-4" />
                      Conversar por WhatsApp
                    </a>
                  </div>
                )}

                <fieldset
                  disabled={status === 'submitting'}
                  aria-describedby="contact-form-note"
                  className="mt-6 min-w-0 space-y-5"
                >
                  <legend className="sr-only">Datos de tu consulta</legend>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className={labelClass}>
                        Tu nombre <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="nombre"
                        autoComplete="name"
                        required
                        maxLength={120}
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Nombre y apellido"
                        aria-invalid={Boolean(fieldErrors.nombre)}
                        aria-describedby={fieldErrors.nombre ? 'contact-name-error' : undefined}
                        className={fieldClass}
                      />
                      {fieldErrors.nombre && (
                        <p id="contact-name-error" role="alert" className="mt-2 text-xs text-red-300">
                          {fieldErrors.nombre}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className={labelClass}>
                        Correo electrónico <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="correo"
                        autoComplete="email"
                        required
                        maxLength={254}
                        value={formData.correo}
                        onChange={handleChange}
                        placeholder="tu@correo.cl"
                        aria-invalid={Boolean(fieldErrors.correo)}
                        aria-describedby={fieldErrors.correo ? 'contact-email-error' : undefined}
                        className={fieldClass}
                      />
                      {fieldErrors.correo && (
                        <p id="contact-email-error" role="alert" className="mt-2 text-xs text-red-300">
                          {fieldErrors.correo}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-objective" className={labelClass}>
                      Objetivo del proyecto <span aria-hidden="true">*</span>
                    </label>
                    <p id="contact-sensitive-note" className="mb-3 text-xs leading-relaxed text-slate-300">
                      Describe tu proyecto sin adjuntar archivos ni incluir información identificable
                      de participantes, pacientes o terceros. No envíes datos sensibles en esta consulta.
                    </p>
                    <textarea
                      id="contact-objective"
                      name="objetivo"
                      required
                      rows={4}
                      maxLength={2000}
                      value={formData.objetivo}
                      onChange={handleChange}
                      placeholder="Por ejemplo: quiero comparar las respuestas de una encuesta entre grupos y comprender qué métodos son adecuados."
                      aria-invalid={Boolean(fieldErrors.objetivo)}
                      aria-describedby={`contact-sensitive-note${fieldErrors.objetivo ? ' contact-objective-error' : ''}`}
                      className={`${fieldClass} min-h-32 resize-y`}
                    />
                    {fieldErrors.objetivo && (
                      <p id="contact-objective-error" role="alert" className="mt-2 text-xs text-red-300">
                        {fieldErrors.objetivo}
                      </p>
                    )}
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-data-type" className={labelClass}>Tipo de datos</label>
                      <select
                        id="contact-data-type"
                        name="tipoDatos"
                        value={formData.tipoDatos}
                        onChange={handleChange}
                        className={fieldClass}
                      >
                        {CONTACT_DATA_OPTIONS.map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-deadline" className={labelClass}>Plazo deseado</label>
                      <input
                        id="contact-deadline"
                        name="plazo"
                        maxLength={120}
                        value={formData.plazo}
                        onChange={handleChange}
                        placeholder="Fecha aproximada o por definir"
                        aria-describedby="contact-deadline-note"
                        className={fieldClass}
                      />
                      <p id="contact-deadline-note" className="mt-2 text-xs leading-relaxed text-slate-400">
                        El plazo final se acuerda según el alcance y la viabilidad del proyecto.
                      </p>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="button-primary w-full disabled:cursor-wait disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Enviando consulta…
                      </>
                    ) : (
                      <>
                        {status === 'error' ? 'Reintentar envío' : 'Enviar consulta'}
                        <ArrowRight aria-hidden="true" className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </fieldset>
                <p aria-live="polite" className="sr-only">
                  {status === 'submitting' ? 'Enviando tu consulta. Espera la confirmación.' : ''}
                </p>
                <p className="mt-4 text-xs leading-relaxed text-slate-400">
                  Usaremos la información que nos envíes para responder tu consulta. También puedes
                  escribirnos directamente por WhatsApp.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
