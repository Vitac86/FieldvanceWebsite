export type HeaderContent = {
  brand: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
};

export type HowItWorksContent = {
  title: string;
  steps: Array<{ label: string; text: string }>;
};

export type CapabilitiesContent = {
  title: string;
  items: string[];
};

export type ResultsContent = {
  title: string;
  metrics: Array<{ label: string; value: string }>;
};

export type PricingContent = {
  title: string;
  cardCta: string;
  plans: Array<{
    name: string;
    price: string;
    points: string[];
  }>;
  setupFeeNote: string;
};

export type FinalCtaContent = {
  title: string;
  text: string;
  ctaLabel: string;
  href: string;
};

export type FooterContent = {
  note: string;
};

export type LandingContent = {
  header: HeaderContent;
  hero: HeroContent;
  howItWorks: HowItWorksContent;
  capabilities: CapabilitiesContent;
  results: ResultsContent;
  pricing: PricingContent;
  finalCta: FinalCtaContent;
  footer: FooterContent;
};
