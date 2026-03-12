import Link from 'next/link';

import { type Locale } from '@/config/i18n';
import { type HeaderContent } from '@/content/types';

import { LanguageSwitcher } from './LanguageSwitcher';
import { Logo } from '../ui/Logo';

type HeaderProps = {
  lang: Locale;
  content: HeaderContent;
};

export function Header({ lang, content }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border-soft/90 bg-slate-50/90 backdrop-blur-md">
      <div className="container-page flex h-[80px] items-center justify-between gap-5 sm:h-[84px]">
        <Logo lang={lang} className="inline-flex w-[146px] sm:w-[164px]" priority />
        <nav aria-label="Section navigation" className="hidden items-center gap-7 md:flex">
          {content.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.95rem] font-semibold text-slate-600 transition hover:text-accent-strong"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <LanguageSwitcher currentLocale={lang} />
      </div>
    </header>
  );
}
