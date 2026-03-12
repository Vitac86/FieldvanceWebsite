import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { isSupportedLocale, locales, type Locale } from '@/config/i18n';
import { getConfiguredSiteUrl } from '@/config/site';
import { legalContentByLocale } from '@/content/legal';

type LangRouteParams = Promise<{ lang: string }>;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: LangRouteParams }): Promise<Metadata> {
  const { lang } = await params;

  if (!isSupportedLocale(lang)) {
    return {};
  }

  const siteUrl = getConfiguredSiteUrl();

  return {
    title: legalContentByLocale[lang].terms.title,
    alternates: {
      ...(siteUrl ? { canonical: `/${lang}/terms` } : {}),
      languages: {
        en: '/en/terms',
        es: '/es/terms',
        ru: '/ru/terms',
      },
    },
  };
}

export default async function TermsPage({ params }: { params: LangRouteParams }) {
  const { lang } = await params;

  if (!isSupportedLocale(lang)) {
    notFound();
  }

  const content = legalContentByLocale[lang as Locale].terms;

  return (
    <main className="section-space">
      <div className="container-page max-w-3xl space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight text-surface-dark sm:text-4xl">{content.title}</h1>
        <p className="text-slate-600">{content.intro}</p>
        <p className="text-sm text-slate-500">
          {content.lastUpdatedLabel}: {content.lastUpdatedValue}
        </p>

        <div className="space-y-4">
          {content.sections.map((section) => (
            <section key={section.heading} className="section-shell space-y-2">
              <h2 className="text-lg font-semibold text-slate-900">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-slate-600">
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="list-disc space-y-1 pl-5 text-slate-600">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <Link href={`/${lang}`} className="inline-flex font-semibold text-accent-strong transition hover:text-surface-dark">
          {content.backLabel}
        </Link>
      </div>
    </main>
  );
}
