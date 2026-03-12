import { type FooterContent } from '@/content/types';

export function Footer({ content }: { content: FooterContent }) {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="container-page text-sm text-slate-500">{content.note}</div>
    </footer>
  );
}
