import Link from 'next/link';
import { notFound } from 'next/navigation';

import { isSupportedLocale, type Locale } from '@/config/i18n';

const termsContent: Record<Locale, { title: string; intro: string; body: string; backLabel: string }> = {
  en: {
    title: 'Terms',
    intro: 'This page will contain the official usage terms for Fieldvance.',
    body: 'Detailed terms are currently being prepared. For current commercial and usage terms, please contact us via the form on the homepage.',
    backLabel: 'Back to homepage',
  },
  es: {
    title: 'Términos',
    intro: 'Esta página contendrá los términos oficiales de uso de Fieldvance.',
    body: 'Los términos detallados están en preparación. Para condiciones comerciales y de uso vigentes, contáctanos desde el formulario de la página principal.',
    backLabel: 'Volver al inicio',
  },
  ru: {
    title: 'Условия использования',
    intro: 'На этой странице будут размещены официальные условия использования Fieldvance.',
    body: 'Подробные условия сейчас готовятся. Для актуальных коммерческих условий и условий использования свяжитесь с нами через форму на главной странице.',
    backLabel: 'Вернуться на главную',
  },
};

type LangRouteParams = Promise<{ lang: string }>;

export default async function TermsPage({ params }: { params: LangRouteParams }) {
  const { lang } = await params;

  if (!isSupportedLocale(lang)) {
    notFound();
  }

  const content = termsContent[lang];

  return (
    <main className="section-space">
      <div className="container-page max-w-3xl space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight text-surface-dark sm:text-4xl">{content.title}</h1>
        <p className="text-slate-600">{content.intro}</p>
        <div className="section-shell">
          <p className="text-slate-600">{content.body}</p>
        </div>
        <Link href={`/${lang}`} className="inline-flex font-semibold text-accent-strong transition hover:text-surface-dark">
          {content.backLabel}
        </Link>
      </div>
    </main>
  );
}
