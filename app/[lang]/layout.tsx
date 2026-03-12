import { notFound } from 'next/navigation';

import { isSupportedLocale } from '@/config/i18n';

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!isSupportedLocale(params.lang)) {
    notFound();
  }

  return children;
}
