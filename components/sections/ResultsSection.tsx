import { type ResultsContent } from '@/content/types';

import { SectionShell } from './SectionShell';

export function ResultsSection({ content }: { content: ResultsContent }) {
  const [headlineMetric, ...otherMetrics] = content.metrics;

  return (
    <SectionShell id="results" title={content.title} intro={content.intro}>
      <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-lg border border-slate-200 bg-slate-900 p-7 text-white shadow-[0_4px_14px_rgba(15,23,42,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300">{headlineMetric.label}</p>
          <p className="mt-3 text-4xl font-black tracking-tight sm:text-[3.2rem]">{headlineMetric.value}</p>
          <p className="mt-3 max-w-lg text-sm text-slate-300">{headlineMetric.note}</p>
        </article>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {otherMetrics.map((metric) => (
            <article key={metric.label} className="card-base">
              <p className="text-3xl font-extrabold tracking-tight text-slate-900">{metric.value}</p>
              <p className="mt-1.5 text-sm font-semibold text-slate-800">{metric.label}</p>
              <p className="mt-1 text-xs text-slate-500">{metric.note}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
