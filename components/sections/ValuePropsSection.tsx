import { type CapabilitiesContent } from '@/content/types';

import { SectionShell } from './SectionShell';

export function ValuePropsSection({ content }: { content: CapabilitiesContent }) {
  return (
    <SectionShell id="capabilities" title={content.title} intro={content.intro}>
      <ul className="grid gap-3 sm:grid-cols-2">
        {content.items.map((item) => (
          <li key={item.title} className="rounded-lg border border-slate-200 p-4">
            <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{item.text}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
