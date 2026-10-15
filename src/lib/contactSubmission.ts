export interface ContactSubmissionPayload {
  subject: string;
  from_name: string;
  name: string;
  email: string;
  data_type: string;
  desired_deadline: string;
  message: string;
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
      // Public form key; its verified recipient is configured in Web3Forms.
      access_key: '81898967-6c56-4b66-9173-be44a6c26802',
      botcheck: false,
    }),
  });

  // The provider can return an HTML challenge instead of its JSON API response.
  // Neither a successful HTTP status nor a redirect alone confirms delivery.
  if (!response.ok) throw new Error(`Submission rejected (HTTP ${response.status})`);
  const result: unknown = await response.json();
  if (typeof result !== 'object' || result === null || !('success' in result) || result.success !== true) {
    throw new Error('Submission not confirmed');
  }
}
