import { type Locale } from '@/config/i18n';
import { enContent } from '@/content/locales/en';
import { esContent } from '@/content/locales/es';
import { ruContent } from '@/content/locales/ru';
import { type LandingContent } from '@/content/types';

export const contentByLocale: Record<Locale, LandingContent> = {
  en: enContent,
  es: esContent,
  ru: ruContent,
};
