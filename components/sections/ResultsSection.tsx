import { type ResultsContent } from '@/content/types';

import { SectionShell } from './SectionShell';

export function ResultsSection({ content }: { content: ResultsContent }) {
  return (
    <SectionShell id="results" title={content.title} intro={content.intro}>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {content.metrics.map((metric) => (
          <article key={metric.label} className="rounded-lg border border-slate-200 p-4">
            <p className="text-2xl font-semibold text-slate-900">{metric.value}</p>
            <p className="mt-2 text-sm font-medium text-slate-800">{metric.label}</p>
            <p className="mt-1 text-xs text-slate-500">{metric.note}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
