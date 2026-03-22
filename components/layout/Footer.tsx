import Link from 'next/link';

import { type Locale } from '@/config/i18n';
import { type FooterContent } from '@/content/types';

import { Logo } from '../ui/Logo';

export function Footer({ content, lang }: { content: FooterContent; lang: Locale }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-soft bg-white py-7 sm:py-8">
      <div className="container-page grid gap-5 text-sm text-slate-500">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <Logo lang={lang} className="inline-flex w-[124px] sm:w-[136px]" />

          <div className="w-full max-w-sm text-left sm:w-auto sm:text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
              {content.actionTitle}
            </p>
            <p className="mt-1 text-sm text-slate-500">{content.actionText}</p>
            <Link
              href="#contact"
              className="mt-2 inline-flex font-semibold text-slate-700 transition hover:text-accent-strong"
            >
              {content.actionLabel}
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-slate-600">
          <Link href={`/${lang}/privacy`} className="transition hover:text-accent-strong">
            {content.privacyLabel}
          </Link>
          <Link href={`/${lang}/terms`} className="transition hover:text-accent-strong">
            {content.termsLabel}
          </Link>
          <Link href="mailto:contact@fieldvance.com" className="transition hover:text-accent-strong">
            contact@fieldvance.com
          </Link>
          <p className="text-slate-500">© {year} {content.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
