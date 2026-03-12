import Link from 'next/link';

import { type Locale } from '@/config/i18n';
import { type HeaderContent } from '@/content/types';

import { LanguageSwitcher } from './LanguageSwitcher';

type HeaderProps = {
  lang: Locale;
  content: HeaderContent;
};

export function Header({ lang, content }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-slate-50/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <p className="text-base font-extrabold tracking-tight text-slate-900">{content.brand}</p>
        <nav aria-label="Section navigation" className="hidden items-center gap-6 md:flex">
          {content.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>
        <LanguageSwitcher currentLocale={lang} />
      </div>
    </header>
  );
}
