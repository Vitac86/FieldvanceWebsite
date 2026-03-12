'use client';

import { type FormEvent, type HTMLInputTypeAttribute, useId, useState } from 'react';

import { submitContactForm, type ContactSubmissionPayload } from '@/lib/submit-contact-form';
import { type ContactSectionContent } from '@/content/types';

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection({ content }: { content: ContactSectionContent }) {
  const [formValues, setFormValues] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');
  const statusId = useId();

  const handleFieldChange = (field: keyof ContactFormState, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    if (submitState !== 'idle') {
      setSubmitState('idle');
    }
    setErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }

      const nextErrors = { ...prev };
      delete nextErrors[field];
      return nextErrors;
    });
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof ContactFormState, string>> = {};

    if (!formValues.name.trim()) {
      nextErrors.name = content.validation.nameRequired;
    }

    if (!formValues.email.trim()) {
      nextErrors.email = content.validation.emailRequired;
    } else if (!emailRegex.test(formValues.email.trim())) {
      nextErrors.email = content.validation.emailInvalid;
    }

    if (!formValues.phone.trim()) {
      nextErrors.phone = content.validation.phoneRequired;
    }

    if (!formValues.message.trim()) {
      nextErrors.message = content.validation.messageRequired;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setSubmitState('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitState('idle');

    const payload: ContactSubmissionPayload = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      phone: formValues.phone.trim(),
      message: formValues.message.trim(),
      submittedAt: new Date().toISOString(),
    };

    try {
      await submitContactForm(payload);
      setSubmitState('success');
      setFormValues({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    } catch {
      setSubmitState('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-space pb-8 pt-0 sm:pb-10">
      <div className="container-page">
        <div className="grid gap-5 rounded-xl border border-border-soft bg-white p-6 shadow-[0_2px_8px_rgba(15,23,42,0.06)] sm:p-7 lg:grid-cols-[1fr_1.12fr] lg:gap-7">
          <div>
            <p className="section-kicker">{content.kicker}</p>
            <div className="accent-divider mt-2" aria-hidden />
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{content.title}</h2>
            <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">{content.text}</p>
            <p className="mt-2.5 text-xs text-slate-500">{content.helper}</p>
          </div>

          <div>
            <form className="space-y-3" onSubmit={handleSubmit} noValidate aria-describedby={statusId}>
              <div className="grid gap-3 sm:grid-cols-2">
                <Field
                  id="contact-name"
                  label={content.fields.name.label}
                  placeholder={content.fields.name.placeholder}
                  value={formValues.name}
                  error={errors.name}
                  onChange={(value) => handleFieldChange('name', value)}
                  autoComplete="name"
                />
                <Field
                  id="contact-phone"
                  label={content.fields.phone.label}
                  placeholder={content.fields.phone.placeholder}
                  value={formValues.phone}
                  error={errors.phone}
                  onChange={(value) => handleFieldChange('phone', value)}
                  autoComplete="tel"
                />
              </div>

              <Field
                id="contact-email"
                type="email"
                label={content.fields.email.label}
                placeholder={content.fields.email.placeholder}
                value={formValues.email}
                error={errors.email}
                onChange={(value) => handleFieldChange('email', value)}
                autoComplete="email"
              />

              <Field
                id="contact-message"
                label={content.fields.message.label}
                placeholder={content.fields.message.placeholder}
                value={formValues.message}
                error={errors.message}
                onChange={(value) => handleFieldChange('message', value)}
                multiline
              />

              <button
                type="submit"
                className="mt-2 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-accent-primary px-5 py-2.5 text-sm font-semibold text-surface-dark transition-all duration-150 hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-80"
                disabled={isSubmitting}
              >
                {isSubmitting ? content.submit.submitting : content.submit.default}
              </button>

              <p
                id={statusId}
                className={`min-h-5 text-sm ${submitState === 'error' ? 'text-rose-600' : 'text-slate-700'}`}
                aria-live="polite"
              >
                {submitState === 'success' ? content.submit.success : ''}
                {submitState === 'error' ? content.submit.error : ''}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  placeholder,
  value,
  error,
  onChange,
  type = 'text',
  multiline = false,
  autoComplete,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: HTMLInputTypeAttribute;
  multiline?: boolean;
  autoComplete?: string;
}) {
  const inputClassName = `mt-1.5 w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-shadow focus:ring-2 focus:ring-accent-primary/40 ${
    error ? 'border-rose-400' : 'border-border-soft'
  }`;

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-slate-800">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          rows={4}
          className={inputClassName}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          autoComplete={autoComplete}
          required
        />
      ) : (
        <input
          id={id}
          type={type}
          className={inputClassName}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          autoComplete={autoComplete}
          required
        />
      )}
      <p id={`${id}-error`} className="mt-1 min-h-5 text-xs text-rose-600">
        {error ?? ''}
      </p>
    </div>
  );
}
