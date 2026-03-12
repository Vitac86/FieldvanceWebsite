import { type TrustStripContent } from '@/content/types';

export function TrustStrip({ content }: { content: TrustStripContent }) {
  return (
    <section className="pb-6 sm:pb-8">
      <div className="container-page">
        <div className="trust-strip">
          {content.points.map((point) => (
            <p key={point} className="trust-strip-item">
              {point}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
