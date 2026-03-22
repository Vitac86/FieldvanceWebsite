'use client';

import { usePathname, useRouter } from 'next/navigation';

import { locales, type Locale } from '@/config/i18n';

type LanguageSwitcherProps = {
  currentLocale: Locale;
};

const localeLabels: Record<Locale, string> = {
  en: 'EN / English',
  es: 'ES / Español',
  ru: 'RU / Русский',
};

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (nextLocale: Locale) => {
    const segments = pathname.split('/');

    if (segments.length > 1 && locales.includes(segments[1] as Locale)) {
      segments[1] = nextLocale;
    } else {
      segments.splice(1, 0, nextLocale);
    }

    router.push(segments.join('/') || `/${nextLocale}`);
  };

  return (
    <label
      className="relative flex items-center rounded-lg border border-border-soft bg-white/80 text-sm text-slate-700 shadow-sm"
      aria-label="Language switcher"
    >
      <select
        value={currentLocale}
        onChange={(event) => handleChange(event.target.value as Locale)}
        className="min-h-10 appearance-none rounded-lg bg-transparent py-2 pl-3 pr-9 font-medium outline-none transition hover:text-accent-strong"
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {localeLabels[locale]}
          </option>
        ))}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        className="pointer-events-none absolute right-3 h-4 w-4 text-slate-500"
      >
        <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </label>
  );
}
