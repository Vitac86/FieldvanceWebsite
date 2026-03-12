import { type ContactSubmissionPayload, validateContactPayload } from '@/lib/contact-form';

export { type ContactSubmissionPayload };

export type SubmitContactFormResult = {
  ok: true;
};

export async function submitContactForm(payload: ContactSubmissionPayload): Promise<SubmitContactFormResult> {
  const localValidationErrors = validateContactPayload(payload);

  if (Object.keys(localValidationErrors).length > 0) {
    throw new Error('validation_failed');
  }

  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('submission_failed');
  }

  return { ok: true };
}
