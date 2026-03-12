import { notFound } from 'next/navigation';

import { isSupportedLocale } from '@/config/i18n';

type LangRouteParams = Promise<{ lang: string }>;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: LangRouteParams;
}) {
  const { lang } = await params;

  if (!isSupportedLocale(lang)) {
    notFound();
  }

  return children;
}
