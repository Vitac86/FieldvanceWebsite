import { type Locale } from '@/config/i18n';

export const siteConfig = {
  name: 'Fieldvance',
  shortName: 'Fieldvance',
  description:
    'Fieldvance is a mobile-first AI workflow layer for HVAC and plumbing service companies.',
};

type LocaleMeta = {
  title: string;
  description: string;
  ogMessage: string;
};

export const localeMetadata: Record<Locale, LocaleMeta> = {
  en: {
    title: 'AI Field Workflow for HVAC & Plumbing Teams',
    description:
      'Mobile-first AI workflows that help technicians arrive prepared, follow approved troubleshooting, and finish with validated service reports.',
    ogMessage: 'Standardize field execution on every service call',
  },
  es: {
    title: 'Flujo de campo con IA para HVAC y plomería',
    description:
      'Flujos móviles con IA para que técnicos lleguen preparados, sigan procedimientos aprobados y cierren reportes validados más rápido.',
    ogMessage: 'Estandariza la ejecución en cada servicio',
  },
  ru: {
    title: 'AI-воркфлоу выездных работ для HVAC и сантехники',
    description:
      'Мобильные AI-воркфлоу помогают техникам приезжать подготовленными, работать по утвержденным шагам и закрывать валидированные отчеты быстрее.',
    ogMessage: 'Стандартизируйте выездные работы на каждом вызове',
  },
};

const DEFAULT_SITE_URL = 'http://localhost:3000';

export function getSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL;

  if (!value) {
    return DEFAULT_SITE_URL;
  }

  try {
    return new URL(value).toString().replace(/\/$/, '');
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function getMetadataBase() {
  return new URL(getSiteUrl());
}
