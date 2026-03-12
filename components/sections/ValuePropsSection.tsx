import { type CapabilitiesContent } from '@/content/types';

import { SectionShell } from './SectionShell';

export function ValuePropsSection({ content }: { content: CapabilitiesContent }) {
  return (
    <SectionShell id="capabilities" title={content.title}>
      <ul className="grid gap-3 sm:grid-cols-2">
        {content.items.map((item) => (
          <li key={item} className="rounded-lg border border-slate-200 p-4 text-sm text-slate-700">
            {item}
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
