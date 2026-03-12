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

const LOCAL_HOSTNAMES = new Set(['localhost', '127.0.0.1', '::1']);

function normalizeSiteUrl(value?: string | null) {
  if (!value) {
    return null;
  }

  try {
    const parsed = new URL(value);

    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return null;
    }

    if (LOCAL_HOSTNAMES.has(parsed.hostname.toLowerCase())) {
      return null;
    }

    return parsed.toString().replace(/\/$/, '');
  } catch {
    return null;
  }
}

export function getConfiguredSiteUrl() {
  return normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL);
}

export function hasConfiguredSiteUrl() {
  return Boolean(getConfiguredSiteUrl());
}

export function getMetadataBase() {
  const siteUrl = getConfiguredSiteUrl();

  return siteUrl ? new URL(siteUrl) : undefined;
}
