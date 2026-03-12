'use client';

import Link from 'next/link';

import { defaultLocale } from '@/config/i18n';

export default function GlobalError({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <main className="section-space">
          <div className="container-page max-w-2xl rounded-xl border border-border-soft bg-white p-8 text-center shadow-[0_2px_8px_rgba(15,23,42,0.06)] sm:p-10">
            <p className="section-kicker">Error</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Something went wrong</h1>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Please refresh the page or return to the main landing page.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={reset}
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border-soft px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
              >
                Try again
              </button>
              <Link
                href={`/${defaultLocale}`}
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent-primary px-5 py-2.5 text-sm font-semibold text-surface-dark transition-all duration-150 hover:bg-accent-strong"
              >
                Back to landing page
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
