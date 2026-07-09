type Phase = {
  tag: string;
  title: string;
  status: "done" | "active" | "upcoming";
  points: string[];
};

const phases: Phase[] = [
  {
    tag: "Phase 1",
    title: "Genesis",
    status: "done",
    points: [
      "$SHIRI protocol launch & smart-contract audit",
      "Sybil-defense engine live at entry",
      "Free community distribution opens",
    ],
  },
  {
    tag: "Phase 2",
    title: "The Awakening",
    status: "active",
    points: [
      "Proof-of-Engagement rewards go live",
      "Governance portal & first community votes",
      "Tribe expansion campaigns worldwide",
    ],
  },
  {
    tag: "Phase 3",
    title: "Real Utility",
    status: "upcoming",
    points: [
      "Native real-world utility unlocks with network scale",
      "Strategic partnerships & integrations",
      "Scarcity flywheel tightens emissions",
    ],
  },
  {
    tag: "Phase 4",
    title: "Full Sovereignty",
    status: "upcoming",
    points: [
      "Complete transition to community-run DAO",
      "Cross-chain expansion",
      "Self-sustaining, predator-proof economy",
    ],
  },
];

const statusStyles: Record<
  Phase["status"],
  { label: string; badge: string; dot: string }
> = {
  done: {
    label: "Completed",
    badge: "bg-notion-green/10 text-notion-green",
    dot: "bg-notion-green",
  },
  active: {
    label: "In progress",
    badge: "bg-notion-orange/10 text-notion-orange",
    dot: "bg-notion-orange",
  },
  upcoming: {
    label: "Upcoming",
    badge: "bg-ink/5 text-ink-light",
    dot: "bg-ink-faint",
  },
};

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="border-t border-line bg-cream/40"
    >
      <div className="mx-auto max-w-content px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-notion-purple">
            The journey
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Roadmap
          </h2>
          <p className="mt-4 text-lg leading-8 text-ink-light">
            From a pure cultural token to a fully sovereign, community-owned
            economy — the protocol evolves as the tribe grows.
          </p>
        </div>

        <ol className="relative mx-auto max-w-3xl border-l border-line pl-6 sm:pl-8">
          {phases.map((p) => {
            const s = statusStyles[p.status];
            return (
              <li key={p.tag} className="relative pb-10 last:pb-0">
                <span
                  className={`absolute -left-[31px] top-1 grid h-4 w-4 place-items-center rounded-full ring-4 ring-cream/40 sm:-left-[39px] ${s.dot}`}
                />
                <div className="block-card">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-widest text-ink-faint">
                      {p.tag}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${s.badge}`}
                    >
                      {s.label}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <ul className="mt-3 flex flex-col gap-2">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2.5 text-[15px] text-ink-light"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-faint" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
