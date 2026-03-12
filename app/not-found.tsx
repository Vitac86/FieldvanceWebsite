import Link from 'next/link';

import { defaultLocale } from '@/config/i18n';

export default function NotFound() {
  return (
    <main className="section-space">
      <div className="container-page max-w-2xl rounded-xl border border-border-soft bg-white p-8 text-center shadow-[0_2px_8px_rgba(15,23,42,0.06)] sm:p-10">
        <p className="section-kicker">404</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Page not found</h1>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">
          The page you requested does not exist or may have moved.
        </p>
        <Link
          href={`/${defaultLocale}`}
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-accent-primary px-5 py-2.5 text-sm font-semibold text-surface-dark transition-all duration-150 hover:bg-accent-strong"
        >
          Back to landing page
        </Link>
      </div>
    </main>
  );
}
