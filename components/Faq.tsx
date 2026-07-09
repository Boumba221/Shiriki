import { ChevronDown } from "./icons";

const faqs: { q: string; a: string }[] = [
  {
    q: "Do I need to pay or invest anything to join?",
    a: "No. Shiriki removes the financial barrier entirely. 65% of the total supply is distributed for free to real community members — you participate with zero capital at risk.",
  },
  {
    q: "How are the free tokens actually distributed?",
    a: "Through Proof-of-Engagement. By spreading the word, driving engagement, creating memes, and helping new members, you automatically earn structural rewards in $SHIRI. Your energy is the asset.",
  },
  {
    q: "What stops bots and sybil farms from draining the supply?",
    a: "A ruthless sybil-defense engine runs at entry to ensure the community allocation goes strictly to real humans. We don't fund automated server farms — we reward human hearts.",
  },
  {
    q: "Why does $SHIRI start with no intrinsic value?",
    a: "$SHIRI begins as a pure cultural token, engineered to spark a global movement first. As the network grows, the protocol unlocks native real-world utility dictated solely by the scale of the tribe.",
  },
  {
    q: "How is this different from a normal VC-backed launch?",
    a: "There are no predatory funds waiting to dump on retail. With the majority of supply locked for the community, no insider can manipulate the market or pull the rug. The community is the economic engine — never exit liquidity.",
  },
  {
    q: "Do holders really get a say in governance?",
    a: "Yes. Holding $SHIRI gives you direct voting power over the network's future — you steer the utility, validate milestones, and dictate resource allocation. No hidden boards, no shady foundations.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-content px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-notion-blue">
          Questions
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-lg leading-8 text-ink-light">
          Everything you need to know before you join the tribe.
        </p>
      </div>

      <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
        {faqs.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
              <span className="text-[17px] font-medium text-ink">{item.q}</span>
              <ChevronDown
                width={20}
                height={20}
                className="shrink-0 text-ink-faint transition-transform duration-200 group-open:rotate-180"
              />
            </summary>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-ink-light">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
