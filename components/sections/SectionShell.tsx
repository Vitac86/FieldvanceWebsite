export function SectionShell({
  id,
  title,
  intro,
  sectionClassName,
  shellClassName,
  bodyClassName,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  sectionClassName?: string;
  shellClassName?: string;
  bodyClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`section-space ${sectionClassName ?? ''}`}>
      <div className="container-page">
        <div className={`section-shell ${shellClassName ?? ''}`}>
          <p className="section-kicker">{id.replaceAll('-', ' ')}</p>
          <div className="accent-divider mt-2" aria-hidden />
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
          {intro ? <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">{intro}</p> : null}
          <div className={`mt-5 ${bodyClassName ?? ''}`}>{children}</div>
        </div>
      </div>
    </section>
  );
}
