export type ContactSubmissionPayload = {
  name: string;
  phone: string;
  email: string;
  message: string;
  submittedAt: string;
};

export async function submitContactFormPlaceholder(payload: ContactSubmissionPayload) {
  // Non-production submission flow.
  // TODO: Replace this placeholder with a real backend or email provider integration.
  // Suggested implementation point: create an API route that validates input and forwards the payload to your CRM/helpdesk.
  console.info('[contact-form] placeholder submission received', payload);

  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });

  return { ok: true };
}
