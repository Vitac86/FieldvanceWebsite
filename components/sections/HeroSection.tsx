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
              <span>Work order #2487</span>
              <span className="accent-chip">Workflow active</span>
            </div>
            <div className="space-y-2.5 text-[0.8rem] leading-5 sm:text-sm">
              <div className="rounded-lg bg-surface-dark-soft p-2.5 sm:p-3">
                <p className="text-xs uppercase tracking-wide text-slate-400">Dispatch context</p>
                <p className="mt-1">Rooftop no-cool repeat call · Unit RTU-3 · Access code and prior notes loaded.</p>
              </div>

              <div className="rounded-lg bg-surface-dark-soft p-2.5 sm:p-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Guided steps</p>
                  <p className="text-xs text-slate-400">3/4 complete</p>
                </div>
                <div className="mt-2 space-y-1.5">
                  <div className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5">
                    <span>1. Confirm power and thermostat</span>
                    <span className="text-accent-primary">Done</span>
                  </div>
                  <div className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5">
                    <span>2. Inspect condenser and coils</span>
                    <span className="text-accent-primary">Done</span>
                  </div>
                  <div className="flex items-center justify-between rounded-md bg-white/10 px-2 py-1.5">
                    <span>3. Capture refrigerant readings</span>
                    <span className="text-amber-300">In progress</span>
                  </div>
                </div>
              </div>

              <div className="grid gap-2.5 sm:grid-cols-2">
                <div className="rounded-lg bg-surface-dark-soft p-2.5 sm:p-3">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Validation</p>
                  <ul className="mt-1 space-y-1 text-slate-200">
                    <li>• 3 photos attached</li>
                    <li>• Suction / discharge logged</li>
                    <li>• Part used: 40/5 capacitor</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-surface-dark-soft p-2.5 sm:p-3">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Service report</p>
                  <p className="mt-1 text-slate-200">Summary drafted from technician inputs.</p>
                  <p className="mt-2 text-sm text-accent-primary">Ready to sync to CRM/FSM</p>
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
