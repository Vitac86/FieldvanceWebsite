export function SectionShell({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section-space">
      <div className="container-page">
        <div className="section-shell">
          <p className="section-kicker">{id.replaceAll('-', ' ')}</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
          {intro ? <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">{intro}</p> : null}
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </section>
  );
}
