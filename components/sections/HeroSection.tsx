import { Button } from '@/components/ui/Button';
import { type HeroContent } from '@/content/types';

export function HeroSection({ content }: { content: HeroContent }) {
  return (
    <section className="section-space pb-10 pt-12 sm:pb-12 sm:pt-14">
      <div className="container-page grid gap-8 lg:grid-cols-[1.07fr_0.93fr] lg:items-center lg:gap-10">
        <div>
          <p className="section-kicker">{content.eyebrow}</p>
          <div className="accent-divider mt-2.5" aria-hidden />
          <h1 className="mt-4 max-w-4xl text-[2.6rem] font-extrabold tracking-[-0.03em] text-slate-900 sm:text-[3.25rem] lg:text-[3.9rem]">
            {content.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{content.subtitle}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="#final-cta">{content.primaryCta}</Button>
            <Button href="#pricing" variant="secondary">
              {content.secondaryCta}
            </Button>
          </div>
        </div>

        <div className="rounded-xl border border-border-soft bg-white p-5 shadow-[0_3px_12px_rgba(15,23,42,0.06)] sm:p-6">
          <div className="rounded-lg bg-surface-dark p-4 text-slate-100 sm:p-5">
            <div className="mb-3.5 flex items-center justify-between text-xs text-slate-300">
              <span>Dispatch context</span>
              <span className="accent-chip">Live workflow</span>
            </div>
            <div className="space-y-2.5">
              <div className="rounded-lg bg-surface-dark-soft p-2.5 sm:p-3">
                <p className="text-xs uppercase tracking-wide text-slate-400">Job brief</p>
                <p className="mt-1 text-sm">Customer history, equipment notes, and required checklist loaded.</p>
              </div>
              <div className="grid gap-2.5 sm:grid-cols-2">
                <div className="rounded-lg bg-surface-dark-soft p-2.5 sm:p-3">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Guided steps</p>
                  <div className="mt-2 h-2 rounded bg-accent-primary/35" />
                  <div className="mt-2 h-2 w-4/5 rounded bg-accent-primary/45" />
                </div>
                <div className="rounded-lg bg-surface-dark-soft p-2.5 sm:p-3">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Validation</p>
                  <p className="mt-1 text-sm text-accent-primary">Evidence complete</p>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">{content.visualLabel}</p>
        </div>
      </div>
    </section>
  );
}
