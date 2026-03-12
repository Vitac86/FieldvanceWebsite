import { type HowItWorksContent } from '@/content/types';

import { SectionShell } from './SectionShell';

export function HowItWorksSection({ content }: { content: HowItWorksContent }) {
  return (
    <SectionShell id="how-it-works" title={content.title} intro={content.intro}>
      <ol className="grid gap-4 sm:grid-cols-3">
        {content.steps.map((step) => (
          <li key={step.label} className="rounded-lg border border-slate-200 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{step.label}</p>
            <h3 className="mt-2 text-base font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{step.text}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
