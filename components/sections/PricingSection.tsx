import { Button } from '@/components/ui/Button';
import { type PricingContent } from '@/content/types';

import { SectionShell } from './SectionShell';

export function PricingSection({ content }: { content: PricingContent }) {
  return (
    <SectionShell id="pricing" title={content.title}>
      <div className="grid gap-4 lg:grid-cols-3">
        {content.plans.map((plan) => (
          <article key={plan.name} className="rounded-lg border border-slate-200 p-5">
            <p className="text-lg font-semibold text-slate-900">{plan.name}</p>
            <p className="mt-2 text-sm text-slate-600">{plan.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {plan.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
            <div className="mt-5">
              <Button href="#final-cta" variant="secondary">
                {content.cardCta}
              </Button>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-600">{content.setupFeeNote}</p>
    </SectionShell>
  );
}
