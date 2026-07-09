type Slice = {
  label: string;
  value: number;
  color: string; // hex for the bar
  note: string;
};

const slices: Slice[] = [
  {
    label: "Community Distribution",
    value: 65,
    color: "#0F7B6C",
    note: "100% free — earned by real humans through engagement. No sale, no VCs.",
  },
  {
    label: "Liquidity",
    value: 15,
    color: "#2383E2",
    note: "Locked to guarantee deep, healthy trading and price stability.",
  },
  {
    label: "Ecosystem & Treasury",
    value: 10,
    color: "#6940A5",
    note: "Community-governed reserve fueling utility, grants, and growth.",
  },
  {
    label: "Marketing & Partnerships",
    value: 6,
    color: "#D9730D",
    note: "Expanding the tribe and forging strategic alliances.",
  },
  {
    label: "Core Contributors",
    value: 4,
    color: "#9B9A97",
    note: "Vested over time — the builders are aligned with the long game.",
  },
];

export default function Tokenomics() {
  return (
    <section
      id="tokenomics"
      className="mx-auto max-w-content px-5 py-12 md:px-8 md:py-16"
    >
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-notion-green">
          $SHIRI · Total supply 1,000,000,000
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Tokenomics built for the tribe
        </h2>
        <p className="mt-4 text-lg leading-8 text-ink-light">
          The absolute majority of the network belongs to the community from day
          one — not to insiders waiting to dump on you.
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        {/* Stacked distribution bar */}
        <div className="mb-8 flex h-4 w-full overflow-hidden rounded-full">
          {slices.map((s) => (
            <div
              key={s.label}
              style={{ width: `${s.value}%`, backgroundColor: s.color }}
              title={`${s.label} — ${s.value}%`}
            />
          ))}
        </div>

        {/* Legend cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {slices.map((s) => (
            <div key={s.label} className="block-card flex gap-4">
              <span
                className="mt-1 h-3 w-3 shrink-0 rounded-full"
                style={{ backgroundColor: s.color }}
              />
              <div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-[15px] font-semibold text-ink">
                    {s.label}
                  </h3>
                  <span className="text-sm font-bold text-ink-light">
                    {s.value}%
                  </span>
                </div>
                <p className="mt-1 text-sm leading-6 text-ink-light">{s.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
