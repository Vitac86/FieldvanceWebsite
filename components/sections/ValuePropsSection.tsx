import { type CapabilitiesContent } from '@/content/types';

import { SectionShell } from './SectionShell';

export function ValuePropsSection({ content }: { content: CapabilitiesContent }) {
  return (
    <SectionShell
      id="capabilities"
      title={content.title}
      intro={content.intro}
      shellClassName="lg:p-6"
      bodyClassName="lg:mt-4"
    >
      <ul className="grid gap-3.5 sm:grid-cols-2 lg:gap-4">
        {content.items.map((item) => (
          <li key={item.title} className="card-base border-t-2 border-t-accent-soft-strong p-5">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent-soft" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-accent-primary" />
            </span>
            <h3 className="mt-2.5 text-lg font-bold tracking-tight text-slate-900">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-6 text-slate-600">{item.text}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
