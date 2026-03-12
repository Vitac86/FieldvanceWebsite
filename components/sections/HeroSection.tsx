import { Button } from '@/components/ui/Button';
import { type HeroContent } from '@/content/types';

export function HeroSection({ content }: { content: HeroContent }) {
  return (
    <section className="section-space">
      <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-brand-600">{content.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{content.title}</h1>
          <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">{content.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#final-cta">{content.primaryCta}</Button>
            <Button href="#pricing" variant="secondary">
              {content.secondaryCta}
            </Button>
          </div>
        </div>
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 sm:p-8">
          <div className="space-y-3">
            <div className="h-3 w-24 rounded bg-slate-200" />
            <div className="h-3 w-4/5 rounded bg-slate-200" />
            <div className="h-3 w-3/5 rounded bg-slate-200" />
            <div className="h-24 rounded bg-white border border-slate-200" />
          </div>
          <p className="mt-4 text-xs text-slate-500">{content.visualLabel}</p>
        </div>
      </div>
    </section>
  );
}
