import { type LandingContent } from '@/content/types';

export const enContent: LandingContent = {
  header: {
    brand: 'Fieldvance',
  },
  hero: {
    eyebrow: 'Placeholder Eyebrow',
    title: 'Placeholder hero statement for field workflow value',
    subtitle: 'Placeholder subtitle describing the one-page value proposition.',
    primaryCta: 'Placeholder CTA',
    secondaryCta: 'See pricing',
  },
  howItWorks: {
    title: 'How it works',
    steps: [
      { label: 'Step 1', text: 'Placeholder step for dispatch context.' },
      { label: 'Step 2', text: 'Placeholder step for guided execution.' },
      { label: 'Step 3', text: 'Placeholder step for reporting and sync.' },
    ],
  },
  capabilities: {
    title: 'Key capabilities',
    items: [
      'Placeholder capability item',
      'Placeholder capability item',
      'Placeholder capability item',
      'Placeholder capability item',
    ],
  },
  results: {
    title: 'Results',
    metrics: [
      { label: 'Placeholder metric', value: '—' },
      { label: 'Placeholder metric', value: '—' },
      { label: 'Placeholder metric', value: '—' },
      { label: 'Placeholder metric', value: '—' },
    ],
  },
  pricing: {
    title: 'Pricing',
    cardCta: 'Contact sales',
    plans: [
      { name: 'Starter', price: 'Placeholder pricing format', points: ['Placeholder point'] },
      { name: 'Pro', price: 'Placeholder pricing format', points: ['Placeholder point'] },
      {
        name: 'Enterprise',
        price: 'Placeholder pricing format',
        points: ['Placeholder point'],
      },
    ],
    setupFeeNote: 'Placeholder setup fee note',
  },
  finalCta: {
    title: 'Placeholder final CTA heading',
    text: 'Placeholder final CTA support text.',
    ctaLabel: 'Placeholder CTA label',
    href: '#',
  },
  footer: {
    note: '© Fieldvance — Placeholder legal/footer line.',
  },
};
