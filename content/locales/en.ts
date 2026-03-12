import { type LandingContent } from '@/content/types';

export const enContent: LandingContent = {
  header: {
    brand: 'Fieldvance',
    nav: [
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Capabilities', href: '#capabilities' },
      { label: 'Results', href: '#results' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  hero: {
    eyebrow: 'AI workflow for field service teams',
    title: 'Mobile-first execution for HVAC and plumbing service calls',
    subtitle:
      'Fieldvance works with your current CRM/FSM to guide technicians, validate field evidence, and deliver fast, consistent service reports.',
    primaryCta: 'Book a demo',
    secondaryCta: 'See pricing',
    visualLabel: 'Product workflow preview placeholder',
  },
  howItWorks: {
    title: 'How it works',
    intro: 'A simple workflow layer that improves each service call from dispatch to reporting.',
    steps: [
      {
        label: 'Step 1',
        title: 'Prepare before dispatch',
        text: 'The technician receives an AI brief with customer context and the relevant work order details.',
      },
      {
        label: 'Step 2',
        title: 'Execute with guidance in the field',
        text: 'The mobile workflow supports troubleshooting using approved manuals, SOPs, and checklists.',
      },
      {
        label: 'Step 3',
        title: 'Validate, report, and sync',
        text: 'Evidence is structured and validated, a report is generated, and results sync back to CRM/FSM.',
      },
    ],
  },
  capabilities: {
    title: 'Key capabilities',
    intro: 'Built for real field conditions and auditable service operations.',
    items: [
      {
        title: 'Guided technician workflow',
        text: 'Step-by-step mobile flow for actions, measurements, photos, parts used, and voice notes.',
      },
      {
        title: 'RAG-based troubleshooting',
        text: 'Answers are grounded in approved manuals, SOPs, and internal checklists.',
      },
      {
        title: 'Validation engine',
        text: 'Checks required evidence and consistency before a job can be marked complete.',
      },
      {
        title: 'Supervisor visibility',
        text: 'Supervisors monitor quality through a web console while CRM/FSM stays the system of record.',
      },
    ],
  },
  results: {
    title: 'Results from early pilots',
    intro: 'Current tracked outcomes from pilots with Spanish HVAC and plumbing service companies.',
    metrics: [
      { label: 'Pilot companies in Spain', value: '3', note: 'Active pilot environments' },
      { label: 'Daily active technicians', value: '18', note: 'Using the mobile workflow' },
      { label: 'Tracked service calls', value: '~200', note: 'Field executions measured' },
      { label: 'Average report time', value: '~12m → ~2m', note: 'Generated and synced faster' },
      { label: 'Critical reporting errors', value: '~22% → ~9%', note: 'Lower error rate observed' },
    ],
  },
  pricing: {
    title: 'Pricing',
    intro: 'Simple per-technician pricing with a platform fee per customer.',
    cardCta: 'Talk to sales',
    plans: [
      {
        name: 'Starter',
        price: '€45 / technician / month + €250 / customer / month',
        points: ['For initial team rollout', 'Core workflow and reporting foundation'],
      },
      {
        name: 'Pro',
        price: '€63 / technician / month + €250 / customer / month',
        points: ['For scaling teams', 'Expanded operational support and controls'],
      },
      {
        name: 'Enterprise',
        price: '€99 / technician / month + €250 / customer / month',
        points: ['For complex operations', 'Custom rollout and implementation support'],
      },
    ],
    setupFeeNote: 'One-time setup fee: €4,000.',
    annualNote: 'Annual contracts are preferred.',
  },
  finalCta: {
    title: 'Standardize field execution without replacing your CRM/FSM',
    text: 'See how Fieldvance can fit your HVAC or plumbing operation and improve reporting quality from day one.',
    ctaLabel: 'Request a walkthrough',
    href: '#',
  },
  footer: {
    note: '© Fieldvance. AI workflow layer for HVAC and plumbing service companies in Spain.',
  },
};
