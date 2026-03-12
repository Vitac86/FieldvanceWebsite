export type ContactSubmissionPayload = {
  name: string;
  phone: string;
  email: string;
  message: string;
  submittedAt: string;
};

export type ContactFieldErrors = Partial<Record<'name' | 'phone' | 'email' | 'message', string>>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(payload: ContactSubmissionPayload): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  if (!payload.name.trim()) {
    errors.name = 'required';
  }

  if (!payload.phone.trim()) {
    errors.phone = 'required';
  }

  if (!payload.email.trim()) {
    errors.email = 'required';
  } else if (!emailRegex.test(payload.email.trim())) {
    errors.email = 'invalid';
  }

  if (!payload.message.trim()) {
    errors.message = 'required';
  }

  return errors;
}
