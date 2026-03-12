import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

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
import { siteConfig } from '@/config/site';
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

  const content = getLandingContent(lang);

  return {
    title: content.hero.title,
    description: content.hero.subtitle,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: '/en',
        es: '/es',
        ru: '/ru',
      },
    },
    openGraph: {
      type: 'website',
      title: content.hero.title,
      description: content.hero.subtitle,
      url: `${siteConfig.url}/${lang}`,
      siteName: siteConfig.name,
      locale: localeForOg[lang],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.hero.title,
      description: content.hero.subtitle,
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
    </div>
  );
}
