import { ArrowRight } from "./icons";

export default function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-content px-5 pb-24 md:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center md:px-12 md:py-24">
        {/* soft glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/5 blur-3xl"
        />

        <div className="relative">
          <div className="mb-5 text-4xl">🚀</div>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Bring your team together on Shiriki
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-8 text-white/70">
            Start free today. Invite your team, create your first page, and feel
            the difference of a truly connected workspace.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-[15px] font-semibold text-ink transition-transform duration-150 hover:bg-white/90 active:scale-[0.98]"
            >
              Get Shiriki free
              <ArrowRight width={16} height={16} />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
            >
              Talk to sales
            </a>
          </div>

          <p className="mt-4 text-xs text-white/50">
            Free forever for individuals · Upgrade any time
          </p>
        </div>
      </div>
    </section>
  );
}
