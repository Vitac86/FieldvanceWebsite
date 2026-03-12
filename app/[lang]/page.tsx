import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { CookieNotice } from '@/components/layout/CookieNotice';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ContactSection } from '@/components/sections/ContactSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { ResultsSection } from '@/components/sections/ResultsSection';
import { ValuePropsSection } from '@/components/sections/ValuePropsSection';
import { locales, type Locale, isSupportedLocale } from '@/config/i18n';
import { getConfiguredSiteUrl, localeMetadata, siteConfig } from '@/config/site';
import { getLandingContent } from '@/lib/get-landing-content';

const localeForOg: Record<Locale, string> = {
  en: 'en_US',
  es: 'es_ES',
  ru: 'ru_RU',
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

type LangRouteParams = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: LangRouteParams }): Promise<Metadata> {
  const { lang } = await params;

  if (!isSupportedLocale(lang)) {
    return {};
  }

  const metadata = localeMetadata[lang];
  const siteUrl = getConfiguredSiteUrl();
  const ogImage = `/${lang}/opengraph-image`;

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      ...(siteUrl ? { canonical: `/${lang}` } : {}),
      languages: {
        en: '/en',
        es: '/es',
        ru: '/ru',
      },
    },
    openGraph: {
      type: 'website',
      title: metadata.title,
      description: metadata.description,
      ...(siteUrl ? { url: `${siteUrl}/${lang}` } : {}),
      siteName: siteConfig.name,
      locale: localeForOg[lang],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} product preview`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [ogImage],
    },
  };
}

export default async function LandingPage({ params }: { params: LangRouteParams }) {
  const { lang } = await params;

  if (!isSupportedLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const content = getLandingContent(locale);

  return (
    <div className="min-h-screen">
      <Header lang={locale} content={content.header} />
      <main>
        <HeroSection content={content.hero} />
        <TrustStrip content={content.trustStrip} />
        <HowItWorksSection content={content.howItWorks} />
        <ValuePropsSection content={content.capabilities} />
        <ResultsSection content={content.results} />
        <PricingSection content={content.pricing} />
        <CtaSection content={content.finalCta} />
        <ContactSection content={content.contact} />
      </main>
      <Footer content={content.footer} lang={locale} />
      <CookieNotice content={content.footer} lang={locale} />
    </div>
  );
}
