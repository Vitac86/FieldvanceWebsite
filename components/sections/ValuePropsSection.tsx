import { type CapabilitiesContent } from '@/content/types';

import { SectionShell } from './SectionShell';

export function ValuePropsSection({ content }: { content: CapabilitiesContent }) {
  return (
    <SectionShell id="capabilities" title={content.title} intro={content.intro}>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {content.items.map((item) => (
          <li key={item.title} className="card-base">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-cyan-600" aria-hidden />
            <h3 className="mt-4 text-lg font-bold tracking-tight text-slate-900">{item.title}</h3>
            <p className="mt-2.5 text-sm leading-6 text-slate-600">{item.text}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
