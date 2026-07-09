const companies = [
  "Kilimo",
  "Baraka Labs",
  "Umoja",
  "Zawadi",
  "Tazama",
  "Pesa Group",
];

export default function LogoStrip() {
  return (
    <section className="border-y border-line bg-cream/50">
      <div className="mx-auto max-w-content px-5 py-10 md:px-8">
        <p className="mb-7 text-center text-xs font-medium uppercase tracking-widest text-ink-faint">
          Trusted by fast-moving teams around the world
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:gap-x-14">
          {companies.map((name) => (
            <span
              key={name}
              className="text-lg font-semibold tracking-tight text-ink-faint transition-colors hover:text-ink-light"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
