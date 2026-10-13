import test from 'node:test';
import assert from 'node:assert/strict';
import { mergeProjectInquiry } from '../src/lib/projectInquiry.ts';

test('an empty message receives the project summary', () => {
  assert.equal(mergeProjectInquiry('', 'Sistema de gestión', ''), 'Sistema de gestión');
});
test('an existing message is preserved when adding the summary', () => {
  assert.equal(mergeProjectInquiry('Necesito ordenar ventas.', 'Sistema de gestión', ''), 'Necesito ordenar ventas.\n\nSistema de gestión');
});
test('changing the estimate replaces its previous summary, preserving user additions', () => {
  assert.equal(mergeProjectInquiry('Mi idea\n\nAnterior\nUna nota', 'Nuevo', 'Anterior'), 'Mi idea\n\nNuevo\nUna nota');
});
test('clicking the same project twice does not duplicate the summary', () => {
  assert.equal(mergeProjectInquiry('Mi idea\n\nProyecto', 'Proyecto', 'Proyecto'), 'Mi idea\n\nProyecto');
});
test('a manually edited summary is retained', () => {
  assert.equal(mergeProjectInquiry('Resumen editado', 'Nuevo', 'Anterior'), 'Resumen editado\n\nNuevo');
});
