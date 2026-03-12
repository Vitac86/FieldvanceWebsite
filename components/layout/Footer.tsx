import { type Locale } from '@/config/i18n';
import { type FooterContent } from '@/content/types';

import { Logo } from '../ui/Logo';

export function Footer({ content, lang }: { content: FooterContent; lang: Locale }) {
  return (
    <footer className="border-t border-border-soft bg-white py-8">
      <div className="container-page grid gap-4 text-sm text-slate-500 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="space-y-2">
          <Logo lang={lang} className="inline-flex w-[124px] sm:w-[136px]" />
          <p>{content.note}</p>
        </div>
      </div>
    </footer>
  );
}
