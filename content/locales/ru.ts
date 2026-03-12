import { type LandingContent } from '@/content/types';

export const ruContent: LandingContent = {
  header: {
    brand: 'Fieldvance',
  },
  hero: {
    eyebrow: 'Заполнитель',
    title: 'Заполнитель для главного заголовка',
    subtitle: 'Заполнитель для подзаголовка.',
    primaryCta: 'Заполнитель CTA',
    secondaryCta: 'Смотреть цены',
  },
  howItWorks: {
    title: 'Как это работает',
    steps: [
      { label: 'Шаг 1', text: 'Текст-заполнитель шага.' },
      { label: 'Шаг 2', text: 'Текст-заполнитель шага.' },
      { label: 'Шаг 3', text: 'Текст-заполнитель шага.' },
    ],
  },
  capabilities: {
    title: 'Ключевые возможности',
    items: ['Заполнитель', 'Заполнитель', 'Заполнитель', 'Заполнитель'],
  },
  results: {
    title: 'Результаты',
    metrics: [
      { label: 'Метрика-заполнитель', value: '—' },
      { label: 'Метрика-заполнитель', value: '—' },
      { label: 'Метрика-заполнитель', value: '—' },
      { label: 'Метрика-заполнитель', value: '—' },
    ],
  },
  pricing: {
    title: 'Тарифы',
    cardCta: 'Связаться с продажами',
    plans: [
      { name: 'Starter', price: 'Формат цены-заполнитель', points: ['Заполнитель'] },
      { name: 'Pro', price: 'Формат цены-заполнитель', points: ['Заполнитель'] },
      { name: 'Enterprise', price: 'Формат цены-заполнитель', points: ['Заполнитель'] },
    ],
    setupFeeNote: 'Заполнитель заметки о внедрении',
  },
  finalCta: {
    title: 'Финальный заголовок-заполнитель',
    text: 'Финальный текст-заполнитель.',
    ctaLabel: 'Финальный CTA-заполнитель',
    href: '#',
  },
  footer: {
    note: '© Fieldvance — Юридическая строка-заполнитель.',
  },
};
