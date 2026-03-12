import Link from 'next/link';

import { locales, type Locale } from '@/config/i18n';

type LanguageSwitcherProps = {
  currentLocale: Locale;
};

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-1 rounded-md border border-border-soft p-1 text-xs sm:text-sm" aria-label="Language switcher">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}`}
          className={
            locale === currentLocale
              ? 'rounded px-2 py-1 bg-accent-primary text-surface-dark'
              : 'rounded px-2 py-1 text-slate-600 hover:bg-accent-soft hover:text-accent-strong'
          }
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
