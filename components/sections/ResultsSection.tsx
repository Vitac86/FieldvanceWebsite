import { type ResultsContent } from '@/content/types';

import { SectionShell } from './SectionShell';

export function ResultsSection({ content }: { content: ResultsContent }) {
  return (
    <SectionShell id="results" title={content.title}>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {content.metrics.map((metric) => (
          <article key={metric.label} className="rounded-lg border border-slate-200 p-4">
            <p className="text-2xl font-semibold text-slate-900">{metric.value}</p>
            <p className="mt-2 text-sm text-slate-600">{metric.label}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
