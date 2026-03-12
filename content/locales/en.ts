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
    eyebrow: 'For HVAC and plumbing service teams',
    title: 'Standardize field execution on every service call',
    subtitle:
      'Fieldvance adds a mobile AI workflow to your existing CRM/FSM so technicians arrive prepared, follow approved troubleshooting steps, and finish with validated reports.',
    primaryCta: 'Book a demo',
    secondaryCta: 'View pricing',
    visualLabel: 'Product workflow preview',
  },
  howItWorks: {
    title: 'How it works',
    intro: 'One workflow from dispatch context to synced report.',
    steps: [
      {
        label: 'Step 1',
        title: 'Prepare before arrival',
        text: 'Before dispatch, technicians get an AI brief with customer and work-order context from your CRM/FSM.',
      },
      {
        label: 'Step 2',
        title: 'Execute with guided troubleshooting',
        text: 'On site, the mobile workflow guides actions and diagnosis using approved manuals, SOPs, and checklists.',
      },
      {
        label: 'Step 3',
        title: 'Validate and close faster',
        text: 'Field evidence is checked for completeness, a service report is generated, and results sync back to your CRM/FSM.',
      },
    ],
  },
  capabilities: {
    title: 'Key capabilities',
    intro: 'Built for audit-ready operations in real field conditions.',
    items: [
      {
        title: 'Mobile technician workflow',
        text: 'Capture actions, measurements, photos, parts used, and short voice notes in one guided flow.',
      },
      {
        title: 'Knowledge-grounded troubleshooting',
        text: 'RAG responses are grounded in your approved manuals, SOPs, and checklists.',
      },
      {
        title: 'Validation before completion',
        text: 'Required evidence and consistency checks help prevent incomplete or inconsistent job closure.',
      },
      {
        title: 'Supervisor control and visibility',
        text: 'Supervisors review execution quality in a web console while CRM/FSM remains your system of record.',
      },
    ],
  },
  results: {
    title: 'Early results',
    intro: 'Measured outcomes from the first live Fieldvance deployments.',
    metrics: [
      { label: 'Early traction', value: '3 companies', note: 'Running live Fieldvance workflows' },
      { label: 'Daily active technicians', value: '18', note: 'Using the mobile workflow each day' },
      { label: 'Tracked service calls', value: '~200', note: 'Calls executed and measured in Fieldvance' },
      { label: 'Average report time', value: '~12m → ~2m', note: 'Faster report generation and sync' },
      { label: 'Critical reporting errors', value: '~22% → ~9%', note: 'Lower critical error rate in reports' },
    ],
  },
  pricing: {
    title: 'Pricing',
    intro: 'Per-technician pricing plus a platform fee per customer.',
    cardCta: 'Talk to sales',
    plans: [
      {
        name: 'Starter',
        price: '€45 / technician / month + €250 / customer / month',
        points: ['For initial rollout', 'Core guided workflow and reporting'],
      },
      {
        name: 'Pro',
        price: '€63 / technician / month + €250 / customer / month',
        points: ['For growing operations', 'More control for quality and execution'],
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
    title: 'Improve field quality without replacing your CRM/FSM',
    text: 'See how Fieldvance can standardize execution, reporting, and supervisor oversight across your service operation.',
    ctaLabel: 'Request a walkthrough',
    href: '#contact',
  },
  contact: {
    kicker: 'Contact',
    title: 'Request a demo or ask a question',
    text: 'Tell us a bit about your operation and we will follow up to schedule a walkthrough.',
    helper: 'All fields are required.',
    fields: {
      name: { label: 'Name', placeholder: 'Your full name' },
      phone: { label: 'Phone', placeholder: 'Your phone number' },
      email: { label: 'Email', placeholder: 'you@company.com' },
      message: { label: 'Message', placeholder: 'What would you like to improve in your field operation?' },
    },
    validation: {
      nameRequired: 'Please enter your name.',
      phoneRequired: 'Please enter your phone number.',
      emailRequired: 'Please enter your email address.',
      emailInvalid: 'Please enter a valid email address.',
      messageRequired: 'Please enter your message.',
    },
    submit: {
      default: 'Send request',
      submitting: 'Sending...',
      success: 'Thanks. Your request has been captured. We will follow up soon.',
    },
  },
  footer: {
    note: '© Fieldvance. AI workflow layer for HVAC and plumbing service companies.',
  },
};
