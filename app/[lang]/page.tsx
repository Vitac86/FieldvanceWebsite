import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { CtaSection } from '@/components/sections/CtaSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { ResultsSection } from '@/components/sections/ResultsSection';
import { ValuePropsSection } from '@/components/sections/ValuePropsSection';
import { locales, type Locale, isSupportedLocale } from '@/config/i18n';
import { getLandingContent } from '@/lib/get-landing-content';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = params.lang;

  if (!isSupportedLocale(lang)) {
    return {};
  }

  const content = getLandingContent(lang);

  return {
    title: content.hero.title,
    description: content.hero.subtitle,
    alternates: {
      canonical: `/${lang}`,
    },
  };
}

export default function LandingPage({ params }: { params: { lang: string } }) {
  if (!isSupportedLocale(params.lang)) {
    notFound();
  }

  const lang = params.lang as Locale;
  const content = getLandingContent(lang);

  return (
    <div className="min-h-screen">
      <Header lang={lang} content={content.header} />
      <main>
        <HeroSection content={content.hero} />
        <HowItWorksSection content={content.howItWorks} />
        <ValuePropsSection content={content.capabilities} />
        <ResultsSection content={content.results} />
        <PricingSection content={content.pricing} />
        <CtaSection content={content.finalCta} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
}
