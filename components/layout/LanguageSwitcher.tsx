import Link from 'next/link';

import { locales, type Locale } from '@/config/i18n';

type LanguageSwitcherProps = {
  currentLocale: Locale;
};

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  return (
    <div
      className="flex items-center gap-1 rounded-lg border border-border-soft p-1.5 text-sm"
      aria-label="Language switcher"
    >
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}`}
          className={
            locale === currentLocale
              ? 'rounded-md px-2.5 py-1.5 font-semibold bg-accent-primary text-surface-dark'
              : 'rounded-md px-2.5 py-1.5 font-medium text-slate-600 hover:bg-accent-soft hover:text-accent-strong'
          }
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
