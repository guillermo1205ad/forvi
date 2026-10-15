export interface ContactSubmissionPayload {
  subject: string;
  from_name: string;
  name: string;
  email: string;
  data_type: string;
  desired_deadline: string;
  message: string;
  recipient: string;
}

interface SubmissionOptions {
  fetch?: typeof globalThis.fetch;
  signal?: AbortSignal;
}

/** Resolves only when the provider explicitly accepts the submission. */
export async function submitContact(
  payload: ContactSubmissionPayload,
  options: SubmissionOptions = {},
): Promise<void> {
  options.signal?.throwIfAborted();
  const request = options.fetch ?? globalThis.fetch;
  const response = await request('https://api.web3forms.com/submit', {
    method: 'POST',
    signal: options.signal,
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      ...payload,
      access_key: 'b1424eb0-0588-46cb-8b5e-4bb59a860714',
    }),
  });

  if (!response.ok) throw new Error(`Submission rejected (HTTP ${response.status})`);
  const result: unknown = await response.json();
  if (typeof result !== 'object' || result === null || !('success' in result) || result.success !== true) {
    throw new Error('Submission not confirmed');
  }
}
