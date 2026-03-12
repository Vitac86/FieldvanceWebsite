import { type HowItWorksContent } from '@/content/types';

import { SectionShell } from './SectionShell';

export function HowItWorksSection({ content }: { content: HowItWorksContent }) {
  return (
    <SectionShell id="how-it-works" title={content.title} intro={content.intro}>
      <ol className="grid gap-3.5 md:grid-cols-3 lg:gap-4">
        {content.steps.map((step) => (
          <li key={step.label} className="card-base relative overflow-hidden p-5">
            <span className="absolute left-0 top-0 h-1 w-16 rounded-r-full bg-accent-primary" aria-hidden />
            <p className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-strong">
              {step.label}
            </p>
            <h3 className="mt-2.5 text-lg font-bold tracking-tight text-slate-900">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-6 text-slate-600">{step.text}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
