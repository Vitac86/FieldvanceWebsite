import { type LandingContent } from '@/content/types';

export const esContent: LandingContent = {
  header: {
    brand: 'Fieldvance',
  },
  hero: {
    eyebrow: 'Marcador de posición',
    title: 'Título principal de marcador de posición',
    subtitle: 'Subtítulo de marcador de posición.',
    primaryCta: 'CTA de marcador',
    secondaryCta: 'Ver precios',
  },
  howItWorks: {
    title: 'Cómo funciona',
    steps: [
      { label: 'Paso 1', text: 'Paso de marcador de posición.' },
      { label: 'Paso 2', text: 'Paso de marcador de posición.' },
      { label: 'Paso 3', text: 'Paso de marcador de posición.' },
    ],
  },
  capabilities: {
    title: 'Capacidades clave',
    items: ['Marcador de posición', 'Marcador de posición', 'Marcador de posición', 'Marcador de posición'],
  },
  results: {
    title: 'Resultados',
    metrics: [
      { label: 'Métrica de marcador', value: '—' },
      { label: 'Métrica de marcador', value: '—' },
      { label: 'Métrica de marcador', value: '—' },
      { label: 'Métrica de marcador', value: '—' },
    ],
  },
  pricing: {
    title: 'Precios',
    cardCta: 'Contactar ventas',
    plans: [
      { name: 'Starter', price: 'Formato de precio de marcador', points: ['Marcador'] },
      { name: 'Pro', price: 'Formato de precio de marcador', points: ['Marcador'] },
      { name: 'Enterprise', price: 'Formato de precio de marcador', points: ['Marcador'] },
    ],
    setupFeeNote: 'Nota de tarifa de implementación de marcador',
  },
  finalCta: {
    title: 'Título final de marcador',
    text: 'Texto final de marcador.',
    ctaLabel: 'CTA final de marcador',
    href: '#',
  },
  footer: {
    note: '© Fieldvance — Pie legal de marcador.',
  },
};
