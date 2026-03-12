import { type ResultsContent } from '@/content/types';

import { SectionShell } from './SectionShell';

export function ResultsSection({ content }: { content: ResultsContent }) {
  const [headlineMetric, ...otherMetrics] = content.metrics;

  return (
    <SectionShell id="results" title={content.title} intro={content.intro} shellClassName="lg:p-6" bodyClassName="lg:mt-4">
      <div className="grid gap-3.5 lg:grid-cols-12 lg:gap-4">
        <article className="rounded-lg border border-slate-800 bg-surface-dark p-5 text-white shadow-[0_4px_14px_rgba(15,23,42,0.12)] lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-primary">{headlineMetric.label}</p>
          <p className="mt-2 text-4xl font-black tracking-tight sm:text-[2.85rem]">{headlineMetric.value}</p>
          <p className="mt-2 text-sm text-slate-300">{headlineMetric.note}</p>
        </article>

        <div className="grid gap-3.5 sm:grid-cols-2 lg:col-span-7 lg:gap-4">
          {otherMetrics.map((metric) => (
            <article key={metric.label} className="card-base px-5 py-4">
              <div className="mb-2 h-0.5 w-10 rounded-full bg-accent-soft-strong" aria-hidden />
              <p className="text-3xl font-extrabold tracking-tight text-accent-strong">{metric.value}</p>
              <p className="mt-1.5 text-sm font-semibold text-slate-800">{metric.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{metric.note}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
