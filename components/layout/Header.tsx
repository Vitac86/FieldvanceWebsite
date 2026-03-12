import { type Locale } from '@/config/i18n';
import { type HeaderContent } from '@/content/types';

import { LanguageSwitcher } from './LanguageSwitcher';

type HeaderProps = {
  lang: Locale;
  content: HeaderContent;
};

export function Header({ lang, content }: HeaderProps) {
  return (
    <header className="border-b border-slate-200">
      <div className="container-page flex h-16 items-center justify-between">
        <p className="text-sm font-semibold tracking-wide text-slate-900">{content.brand}</p>
        <LanguageSwitcher currentLocale={lang} />
      </div>
    </header>
  );
}
