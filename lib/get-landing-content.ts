import { defaultLocale, type Locale } from '@/config/i18n';
import { contentByLocale } from '@/content';

export function getLandingContent(locale: string) {
  const safeLocale = (locale in contentByLocale ? locale : defaultLocale) as Locale;
  return contentByLocale[safeLocale];
}
