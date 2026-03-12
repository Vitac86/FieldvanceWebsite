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
          <div className="accent-divider mt-2.5" aria-hidden />
          <h2 className="mt-2.5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
          {intro ? <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">{intro}</p> : null}
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </section>
  );
}
