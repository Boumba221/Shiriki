const stats = [
  { value: "40+", label: "hours saved / team / month" },
  { value: "12", label: "tools replaced on average" },
  { value: "99.9%", label: "uptime, always in sync" },
];

export default function Testimonial() {
  return (
    <section className="mx-auto max-w-content px-5 py-12 md:px-8 md:py-16">
      <figure className="mx-auto max-w-3xl text-center">
        <div className="mb-6 text-4xl">💬</div>
        <blockquote className="text-balance text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
          &ldquo;Shiriki became our team&apos;s brain overnight. Docs, tasks,
          and decisions finally live in one place — and everyone actually
          contributes now.&rdquo;
        </blockquote>
        <figcaption className="mt-6 flex items-center justify-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-notion-purple text-sm font-semibold text-white">
            AM
          </span>
          <div className="text-left">
            <div className="text-sm font-semibold text-ink">Amina Mwangi</div>
            <div className="text-sm text-ink-light">Head of Product, Umoja</div>
          </div>
        </figcaption>
      </figure>

      <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl font-bold tracking-tight text-ink">
              {s.value}
            </div>
            <div className="mt-1 text-sm text-ink-light">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
