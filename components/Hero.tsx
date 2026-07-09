import { ArrowRight } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 canvas-dots" aria-hidden />

      <div className="relative mx-auto max-w-content px-5 pb-12 pt-14 md:px-8 md:pb-16 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <a
            href="#features"
            className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink-light shadow-sm transition-colors hover:bg-cream"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-notion-green" />
            New — Real-time collaborative editing is here
            <ArrowRight width={13} height={13} />
          </a>

          <h1 className="animate-fade-up text-balance text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Most crypto projects are rigged by institutional insiders.
            <br className="hidden sm:block" /> Shiriki flips the script.
          </h1>

          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-ink-light">
            By hardcoding 65% of all $SHIRI tokens for a 100% free community
            distribution, we eliminate predatory VCs, insider manipulation, and
            unfair launches. Here, the absolute majority of the network belongs
            entirely to the humans who give it power—with zero financial risk
            and zero barriers to entry.
          </p>

          <div className="animate-fade-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#cta" className="btn-primary px-5 py-2.5 text-[15px]">
              Get $SHIRI free
              <ArrowRight width={16} height={16} />
            </a>
            <a href="#features" className="btn-outline px-5 py-2.5 text-[15px]">
              Take a tour
            </a>
          </div>

          <p className="animate-fade-up mt-4 text-xs text-ink-faint">
            Free for personal use · No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
