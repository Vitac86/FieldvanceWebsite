import Link from 'next/link';
import { notFound } from 'next/navigation';

import { isSupportedLocale, type Locale } from '@/config/i18n';

const privacyContent: Record<Locale, { title: string; intro: string; body: string; backLabel: string }> = {
  en: {
    title: 'Privacy Policy',
    intro: 'This page outlines how privacy information will be handled for Fieldvance.',
    body: 'Detailed privacy terms are being finalized. For now, use the contact form to request current privacy information.',
    backLabel: 'Back to homepage',
  },
  es: {
    title: 'Política de privacidad',
    intro: 'Esta página describe cómo se tratará la información de privacidad de Fieldvance.',
    body: 'Los términos de privacidad detallados están en preparación. Por ahora, utiliza el formulario de contacto para solicitar la información vigente.',
    backLabel: 'Volver al inicio',
  },
  ru: {
    title: 'Политика конфиденциальности',
    intro: 'На этой странице будет описано, как Fieldvance обрабатывает данные о конфиденциальности.',
    body: 'Подробные условия конфиденциальности находятся в подготовке. Пока вы можете запросить актуальную информацию через форму контакта.',
    backLabel: 'Вернуться на главную',
  },
};

type LangRouteParams = Promise<{ lang: string }>;

export default async function PrivacyPage({ params }: { params: LangRouteParams }) {
  const { lang } = await params;

  if (!isSupportedLocale(lang)) {
    notFound();
  }

  const content = privacyContent[lang];

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
