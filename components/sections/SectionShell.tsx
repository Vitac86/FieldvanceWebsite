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
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
        {intro ? <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">{intro}</p> : null}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
