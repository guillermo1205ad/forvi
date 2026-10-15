import type { ContactSubmissionPayload } from './contactSubmission';

export const CONTACT_DATA_OPTIONS = [
  { value: 'por-definir', label: 'Por definir' },
  { value: 'encuestas', label: 'Encuestas' },
  { value: 'bases-de-datos', label: 'Bases de datos' },
  { value: 'documentos-texto', label: 'Documentos o texto' },
  { value: 'imagenes', label: 'Imágenes' },
  { value: 'audio', label: 'Audio' },
  { value: 'varias-fuentes', label: 'Varias fuentes o tipos de datos' },
];

export const INITIAL_CONTACT_INQUIRY = {
  nombre: '',
  correo: '',
  objetivo: '',
  tipoDatos: 'por-definir',
  plazo: '',
  _gotcha: '',
};

export type ContactInquiry = typeof INITIAL_CONTACT_INQUIRY;
export type ContactFieldErrors = Partial<Record<'nombre' | 'correo' | 'objetivo', string>>;

export function validateContactInquiry(inquiry: ContactInquiry): ContactFieldErrors {
  const errors: ContactFieldErrors = {};
  if (!inquiry.nombre.trim()) errors.nombre = 'Escribe tu nombre.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.correo.trim())) {
    errors.correo = 'Escribe un correo válido para que podamos responderte.';
  }
  if (!inquiry.objetivo.trim()) errors.objetivo = 'Cuéntanos cuál es el objetivo de tu proyecto.';
  return errors;
}

export function prepareContactInquiry(
  inquiry: ContactInquiry,
): ContactSubmissionPayload {
  const name = inquiry.nombre.trim();
  return {
    subject: `Solicitud de cotización de análisis — ${name}`,
    from_name: name,
    name,
    email: inquiry.correo.trim(),
    message: inquiry.objetivo.trim(),
    data_type: CONTACT_DATA_OPTIONS.find(option => option.value === inquiry.tipoDatos)?.label ?? 'Por definir',
    desired_deadline: inquiry.plazo.trim() || 'Por definir',
  };
}

export function createContactWhatsAppLink(phone: string) {
  const whatsappMessage = 'Hola FORVI, me gustaría cotizar el análisis de datos de mi proyecto de investigación.';
  return `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;
}
