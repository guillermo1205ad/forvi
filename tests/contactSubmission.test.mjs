import assert from 'node:assert/strict';
import { mock, test } from 'node:test';
import { submitContact } from '../src/lib/contactSubmission.ts';

const payload = {
  subject: 'Consulta de prueba local',
  from_name: 'Prueba local',
  name: 'Prueba local',
  email: 'test@example.invalid',
  phone: '',
  company: 'Prueba',
  service: 'Software a medida',
  budget: 'Por definir',
  message: 'Este mensaje nunca se envía a la red.',
  recipient: 'recipient@example.invalid',
};

test('accepts an explicit provider confirmation and sends the contact details', async () => {
  const request = mock.fn(async () => Response.json({ success: true }));
  await submitContact(payload, { fetch: request });
  assert.equal(request.mock.callCount(), 1);
  const [url, init] = request.mock.calls[0].arguments;
  assert.equal(url, 'https://api.web3forms.com/submit');
  assert.equal(init.method, 'POST');
  assert.equal(init.headers['Content-Type'], 'application/json');
  const { access_key, ...sentPayload } = JSON.parse(init.body);
  assert.ok(access_key);
  assert.deepEqual(sentPayload, payload);
});

test('rejects HTTP 503 even when the response body claims success', async () => {
  await assert.rejects(
    submitContact(payload, { fetch: async () => Response.json({ success: true }, { status: 503 }) }),
    /HTTP 503/,
  );
});

test('rejects a provider failure with HTTP 200', async () => {
  await assert.rejects(
    submitContact(payload, { fetch: async () => Response.json({ success: false }) }),
    /Submission not confirmed/,
  );
});

test('requires the boolean true, rather than a truthy or missing success value', async (context) => {
  for (const body of [{ success: 'true' }, { success: 1 }, {}, null, []]) {
    await context.test(JSON.stringify(body), async () => {
      await assert.rejects(
        submitContact(payload, { fetch: async () => Response.json(body) }),
        /Submission not confirmed/,
      );
    });
  }
});

test('does not treat an invalid JSON response as a confirmed submission', async () => {
  await assert.rejects(
    submitContact(payload, { fetch: async () => new Response('<html>Service unavailable</html>') }),
    SyntaxError,
  );
});

test('propagates network failures so the form can offer its recovery channels', async () => {
  const networkError = new TypeError('Failed to fetch');
  await assert.rejects(
    submitContact(payload, { fetch: async () => { throw networkError; } }),
    (error) => error === networkError,
  );
});

test('passes cancellation to the request and rejects an aborted submission', async () => {
  const controller = new AbortController();
  const request = mock.fn((_url, { signal }) => new Promise((_resolve, reject) => {
    signal.addEventListener('abort', () => reject(signal.reason), { once: true });
  }));
  const submission = submitContact(payload, { fetch: request, signal: controller.signal });
  controller.abort();
  await assert.rejects(submission, { name: 'AbortError' });
  assert.equal(request.mock.calls[0].arguments[1].signal, controller.signal);
});

test('does not start a request when its signal is already aborted', async () => {
  const controller = new AbortController();
  controller.abort();
  const request = mock.fn();
  await assert.rejects(submitContact(payload, { fetch: request, signal: controller.signal }), { name: 'AbortError' });
  assert.equal(request.mock.callCount(), 0);
});
