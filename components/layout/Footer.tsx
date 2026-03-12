import Link from 'next/link';

import { type Locale } from '@/config/i18n';
import { type FooterContent } from '@/content/types';

import { Logo } from '../ui/Logo';

export function Footer({ content, lang }: { content: FooterContent; lang: Locale }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-soft bg-white py-8 sm:py-10">
      <div className="container-page grid gap-6 text-sm text-slate-500">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Logo lang={lang} className="inline-flex w-[124px] sm:w-[136px]" />
          <Link
            href="#contact"
            className="font-semibold text-slate-600 transition hover:text-accent-strong"
          >
            {content.contactCta}
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-slate-600">
          <Link href={`/${lang}/privacy`} className="transition hover:text-accent-strong">
            {content.privacyLabel}
          </Link>
          <Link href={`/${lang}/terms`} className="transition hover:text-accent-strong">
            {content.termsLabel}
          </Link>
          <p className="text-slate-500">© {year} {content.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
