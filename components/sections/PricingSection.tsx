import { Button } from '@/components/ui/Button';
import { type PricingContent } from '@/content/types';

import { SectionShell } from './SectionShell';

export function PricingSection({ content }: { content: PricingContent }) {
  return (
    <SectionShell id="pricing" title={content.title} intro={content.intro}>
      <div className="grid gap-4 lg:grid-cols-3">
        {content.plans.map((plan, index) => {
          const featured = index === 1;

          return (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-xl p-6 ${
                featured ? 'border-2 border-cyan-500 bg-slate-900 text-white shadow-lg shadow-slate-900/10' : 'card-base'
              }`}
            >
              {featured ? (
                <p className="absolute -top-3 right-5 rounded-full bg-cyan-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Featured
                </p>
              ) : null}
              <p className={`text-lg font-bold ${featured ? 'text-white' : 'text-slate-900'}`}>{plan.name}</p>
              <p className={`mt-3 text-sm ${featured ? 'text-slate-200' : 'text-slate-700'}`}>{plan.price}</p>
              <ul className={`mt-5 grow space-y-2 text-sm ${featured ? 'text-slate-200' : 'text-slate-700'}`}>
                {plan.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className={`mt-1 h-1.5 w-1.5 rounded-full ${featured ? 'bg-cyan-300' : 'bg-cyan-600'}`} />
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
      <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
        <p>{content.setupFeeNote}</p>
        <p className="mt-1">{content.annualNote}</p>
      </div>
    </SectionShell>
  );
}
