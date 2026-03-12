import { type ResultsContent } from '@/content/types';

import { SectionShell } from './SectionShell';

export function ResultsSection({ content }: { content: ResultsContent }) {
  const [headlineMetric, ...otherMetrics] = content.metrics;

  return (
    <SectionShell id="results" title={content.title} intro={content.intro}>
      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-lg border border-slate-800 bg-surface-dark p-6 text-white shadow-[0_4px_14px_rgba(15,23,42,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-primary">{headlineMetric.label}</p>
          <p className="mt-2.5 text-4xl font-black tracking-tight sm:text-[3.2rem]">{headlineMetric.value}</p>
          <p className="mt-2.5 max-w-lg text-sm text-slate-300">{headlineMetric.note}</p>
        </article>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {otherMetrics.map((metric) => (
            <article key={metric.label} className="card-base">
              <div className="mb-1.5 h-0.5 w-10 rounded-full bg-accent-soft-strong" aria-hidden />
              <p className="text-3xl font-extrabold tracking-tight text-slate-900">
                <span className="text-accent-strong">{metric.value}</span>
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-800">{metric.label}</p>
              <p className="mt-1 text-xs text-slate-500">{metric.note}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
