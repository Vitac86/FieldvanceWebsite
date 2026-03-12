import { type ResultsContent } from '@/content/types';

import { SectionShell } from './SectionShell';

export function ResultsSection({ content }: { content: ResultsContent }) {
  const [headlineMetric, ...otherMetrics] = content.metrics;

  return (
    <SectionShell id="results" title={content.title} intro={content.intro}>
      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="rounded-xl border border-slate-200 bg-slate-900 p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300">{headlineMetric.label}</p>
          <p className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">{headlineMetric.value}</p>
          <p className="mt-3 max-w-lg text-sm text-slate-300">{headlineMetric.note}</p>
        </article>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {otherMetrics.map((metric) => (
            <article key={metric.label} className="card-base">
              <p className="text-2xl font-extrabold text-slate-900">{metric.value}</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">{metric.label}</p>
              <p className="mt-1 text-xs text-slate-500">{metric.note}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
