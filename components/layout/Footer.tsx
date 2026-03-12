import { type FooterContent } from '@/content/types';

export function Footer({ content }: { content: FooterContent }) {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="container-page grid gap-2.5 text-sm text-slate-500 sm:grid-cols-[1fr_auto] sm:items-center">
        <p>{content.note}</p>
        <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Legal & contact details to be confirmed</p>
      </div>
    </footer>
  );
}
