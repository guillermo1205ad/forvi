import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  CONTACT_DATA_OPTIONS,
  INITIAL_CONTACT_INQUIRY,
  createContactWhatsAppLink,
  prepareContactInquiry,
  validateContactInquiry,
} from '../src/lib/contactInquiry.ts';

const inquiry = {
  ...INITIAL_CONTACT_INQUIRY,
  nombre: '  Consulta de prueba  ',
  correo: '  test@example.invalid  ',
  objetivo: '  Comparar respuestas de una encuesta.  ',
};

test('requires the visitor name, a valid email and the project objective', () => {
  const errors = validateContactInquiry(INITIAL_CONTACT_INQUIRY);
  assert.deepEqual(Object.keys(errors), ['nombre', 'correo', 'objetivo']);
  assert.ok(validateContactInquiry({ ...inquiry, correo: 'invalido@' }).correo);
  assert.ok(validateContactInquiry({ ...inquiry, objetivo: '  \n ' }).objetivo);
});

test('accepts an inquiry without committing to a data type or deadline', () => {
  assert.deepEqual(validateContactInquiry(inquiry), {});
  const payload = prepareContactInquiry(inquiry);
  assert.equal(payload.name, 'Consulta de prueba');
  assert.equal(payload.email, 'test@example.invalid');
  assert.equal(payload.message, 'Comparar respuestas de una encuesta.');
  assert.equal(payload.data_type, 'Por definir');
  assert.equal(payload.desired_deadline, 'Por definir');
  assert.equal('recipient' in payload, false);
  assert.equal('_gotcha' in payload, false);
});

test('includes each supported data type and the requested deadline in the submission', () => {
  for (const option of CONTACT_DATA_OPTIONS) {
    const payload = prepareContactInquiry({
      ...inquiry,
      tipoDatos: option.value,
      plazo: '  Fecha por acordar con mi equipo  ',
    });
    assert.equal(payload.data_type, option.label);
    assert.equal(payload.desired_deadline, 'Fecha por acordar con mi equipo');
  }
});

test('preserves the objective and special characters in the direct submission', () => {
  const form = { ...inquiry, objetivo: 'Texto & audio: ¿qué cambia?\nAnálisis + interpretación.' };
  const payload = prepareContactInquiry(form);
  assert.equal(payload.message, form.objetivo);
});

test('WhatsApp starts with a brief quotation request without copying the freeform inquiry', () => {
  const whatsappUrl = createContactWhatsAppLink('56935779373');
  const parsed = new URL(whatsappUrl);
  const message = parsed.searchParams.get('text');
  assert.equal(parsed.origin, 'https://wa.me');
  assert.equal(parsed.pathname, '/56935779373');
  assert.match(message, /cotizar el análisis de datos/);
  assert.ok(message.length < 150);
  assert.ok(!message.includes(inquiry.objetivo.trim()));
  assert.ok(!message.includes(inquiry.correo.trim()));
});
