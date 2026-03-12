import { Button } from '@/components/ui/Button';
import { type HeroContent } from '@/content/types';

export function HeroSection({ content }: { content: HeroContent }) {
  return (
    <section className="section-space pb-10 sm:pb-12">
      <div className="container-page grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <div>
          <p className="section-kicker">{content.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-600 sm:text-lg">{content.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#final-cta">{content.primaryCta}</Button>
            <Button href="#pricing" variant="secondary">
              {content.secondaryCta}
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="rounded-xl bg-slate-900 p-4 text-slate-100">
            <div className="mb-4 flex items-center justify-between text-xs text-slate-300">
              <span>Dispatch context</span>
              <span className="rounded-full bg-cyan-500/20 px-2 py-1 text-cyan-300">Live workflow</span>
            </div>
            <div className="space-y-3">
              <div className="rounded-lg bg-slate-800 p-3">
                <p className="text-xs uppercase tracking-wide text-slate-400">Job brief</p>
                <p className="mt-1 text-sm">Customer history, equipment notes, and required checklist loaded.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-slate-800 p-3">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Guided steps</p>
                  <div className="mt-2 h-2 rounded bg-slate-600" />
                  <div className="mt-2 h-2 w-4/5 rounded bg-slate-600" />
                </div>
                <div className="rounded-lg bg-slate-800 p-3">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Validation</p>
                  <p className="mt-1 text-sm text-cyan-300">Evidence complete</p>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-500">{content.visualLabel}</p>
        </div>
      </div>
    </section>
  );
}
