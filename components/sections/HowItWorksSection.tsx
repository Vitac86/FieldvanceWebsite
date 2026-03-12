import { type HowItWorksContent } from '@/content/types';

import { SectionShell } from './SectionShell';

export function HowItWorksSection({ content }: { content: HowItWorksContent }) {
  return (
    <SectionShell id="how-it-works" title={content.title} intro={content.intro}>
      <ol className="grid gap-5 md:grid-cols-3">
        {content.steps.map((step) => (
          <li key={step.label} className="card-base">
            <p className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              {step.label}
            </p>
            <h3 className="mt-4 text-lg font-bold tracking-tight text-slate-900">{step.title}</h3>
            <p className="mt-2.5 text-sm leading-6 text-slate-600">{step.text}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
