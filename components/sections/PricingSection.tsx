import { Button } from '@/components/ui/Button';
import { type PricingContent } from '@/content/types';

import { SectionShell } from './SectionShell';

export function PricingSection({ content }: { content: PricingContent }) {
  return (
    <SectionShell id="pricing" title={content.title} intro={content.intro}>
      <div className="grid gap-5 lg:grid-cols-3 lg:items-stretch">
        {content.plans.map((plan, index) => {
          const featured = index === 1;

          return (
            <article
              key={plan.name}
              className={`relative flex flex-col p-7 ${
                featured
                  ? 'rounded-lg border-2 border-accent-primary bg-surface-dark text-white shadow-[0_12px_28px_rgba(11,22,47,0.32)] lg:-mt-2 lg:mb-2'
                  : 'card-base'
              }`}
            >
              {featured ? (
                <p className="absolute -top-3 right-5 rounded-full bg-accent-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-surface-dark">
                  Featured
                </p>
              ) : null}
              <p className={`text-lg font-bold ${featured ? 'text-white' : 'text-slate-900'}`}>{plan.name}</p>
              <p className={`mt-3 text-sm ${featured ? 'text-slate-100' : 'text-slate-700'}`}>{plan.price}</p>
              <ul className={`mt-6 grow space-y-2.5 text-sm ${featured ? 'text-slate-200' : 'text-slate-700'}`}>
                {plan.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span
                      className={`mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full ${
                        featured ? 'bg-accent-primary/20 text-accent-primary' : 'bg-accent-soft text-accent-strong'
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href="#final-cta" variant={featured ? 'primary' : 'secondary'}>
                  {content.cardCta}
                </Button>
              </div>
            </article>
          );
        })}
      </div>
      <div className="mt-7 rounded-lg border border-border-soft bg-accent-soft p-5 text-sm text-slate-700">
        <p>{content.setupFeeNote}</p>
        <p className="mt-1">{content.annualNote}</p>
      </div>
    </SectionShell>
  );
}
