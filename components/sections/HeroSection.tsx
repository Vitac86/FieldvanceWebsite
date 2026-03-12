import { Button } from '@/components/ui/Button';
import { type HeroContent } from '@/content/types';

export function HeroSection({ content }: { content: HeroContent }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <p className="text-sm font-medium uppercase tracking-wide text-brand-600">{content.eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {content.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">{content.subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#final-cta">{content.primaryCta}</Button>
          <Button href="#pricing" variant="secondary">
            {content.secondaryCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
