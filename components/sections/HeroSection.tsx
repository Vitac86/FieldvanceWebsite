import { Button } from '@/components/ui/Button';
import { type HeroContent } from '@/content/types';

export function HeroSection({ content }: { content: HeroContent }) {
  return (
    <section className="section-space pb-14 pt-14 sm:pb-16 sm:pt-16">
      <div className="container-page grid gap-10 lg:grid-cols-[1.07fr_0.93fr] lg:items-center lg:gap-12">
        <div>
          <p className="section-kicker">{content.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-[2.6rem] font-extrabold tracking-[-0.03em] text-slate-900 sm:text-[3.25rem] lg:text-[3.9rem]">
            {content.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{content.subtitle}</p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <Button href="#final-cta">{content.primaryCta}</Button>
            <Button href="#pricing" variant="secondary">
              {content.secondaryCta}
            </Button>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_3px_12px_rgba(15,23,42,0.06)] sm:p-7">
          <div className="rounded-lg bg-slate-900 p-5 text-slate-100">
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
