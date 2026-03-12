import { Button } from '@/components/ui/Button';
import { type FinalCtaContent } from '@/content/types';

export function CtaSection({ content }: { content: FinalCtaContent }) {
  return (
    <section id="final-cta" className="py-16 sm:py-20">
      <div className="container-page rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{content.title}</h2>
        <p className="mt-3 max-w-2xl text-slate-600">{content.text}</p>
        <div className="mt-6">
          <Button href={content.href}>{content.ctaLabel}</Button>
        </div>
      </div>
    </section>
  );
}
