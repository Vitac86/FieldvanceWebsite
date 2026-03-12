export type HeaderContent = {
  brand: string;
  nav: Array<{ label: string; href: string }>;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  visualLabel: string;
};

export type HowItWorksContent = {
  title: string;
  intro: string;
  steps: Array<{ label: string; title: string; text: string }>;
};

export type TrustStripContent = {
  points: string[];
};

export type CapabilitiesContent = {
  title: string;
  intro: string;
  items: Array<{ title: string; text: string }>;
};

export type ResultsContent = {
  title: string;
  intro: string;
  metrics: Array<{ label: string; value: string; note: string }>;
};

export type PricingContent = {
  title: string;
  intro: string;
  cardCta: string;
  plans: Array<{
    name: string;
    price: string;
    points: string[];
  }>;
  setupFeeNote: string;
  annualNote: string;
};

export type FinalCtaContent = {
  title: string;
  text: string;
  ctaLabel: string;
  href: string;
};

export type FooterContent = {
  contactCta: string;
  privacyLabel: string;
  termsLabel: string;
  copyright: string;
  cookieNotice: {
    text: string;
    acceptLabel: string;
  };
};

export type ContactSectionContent = {
  kicker: string;
  title: string;
  text: string;
  helper: string;
  fields: {
    name: { label: string; placeholder: string };
    phone: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    message: { label: string; placeholder: string };
  };
  validation: {
    nameRequired: string;
    phoneRequired: string;
    emailRequired: string;
    emailInvalid: string;
    messageRequired: string;
  };
  submit: {
    default: string;
    submitting: string;
    success: string;
  };
};

export type LandingContent = {
  header: HeaderContent;
  hero: HeroContent;
  trustStrip: TrustStripContent;
  howItWorks: HowItWorksContent;
  capabilities: CapabilitiesContent;
  results: ResultsContent;
  pricing: PricingContent;
  finalCta: FinalCtaContent;
  contact: ContactSectionContent;
  footer: FooterContent;
};
