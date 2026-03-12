import { NextResponse } from 'next/server';

import { type ContactSubmissionPayload, validateContactPayload } from '@/lib/contact-form';

export async function POST(request: Request) {
  let payload: ContactSubmissionPayload;

  try {
    payload = (await request.json()) as ContactSubmissionPayload;
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const errors = validateContactPayload(payload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: 'validation_failed', fields: errors }, { status: 400 });
  }

  // Local-first submission flow.
  // TODO: Replace this with a real provider integration (CRM/helpdesk/email) when credentials are available.
  // Keep this endpoint as the single integration point for future backend wiring.

  return NextResponse.json({ ok: true }, { status: 200 });
}
