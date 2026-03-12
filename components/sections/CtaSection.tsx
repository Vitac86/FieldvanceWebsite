import { Button } from '@/components/ui/Button';
import { type FinalCtaContent } from '@/content/types';

export function CtaSection({ content }: { content: FinalCtaContent }) {
  return (
    <section id="final-cta" className="section-space pt-10 sm:pt-12">
      <div className="container-page">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 sm:p-10">
          <p className="section-kicker text-cyan-300">Final CTA</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{content.title}</h2>
          <p className="mt-4 max-w-2xl text-slate-300">{content.text}</p>
          <div className="mt-7">
            <Button href={content.href}>{content.ctaLabel}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
