import type { ComponentType, SVGProps } from "react";
import { Bolt, Check, Database, Shield, Sparkles, Users } from "./icons";

type Card = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
  color: string;
};

const cards: Card[] = [
  {
    icon: Shield,
    title: "100% VC-Proof",
    body: "Tired of predatory funds dumping on retail investors hours after launch? With 65% of the total supply locked for the community, the playing field is finally leveled. No one can manipulate the market or pull the rug from underneath the tribe. Your early support is fully protected.",
    color: "text-notion-blue bg-notion-blue/10",
  },
  {
    icon: Bolt,
    title: "Proof-of-Engagement",
    body: "Every time you back the tribe, the protocol backs you. Spreading the word, driving engagement, and helping new members automatically generates structural rewards in $SHIRI. The more value you bring to the collective, the stronger your position becomes.",
    color: "text-notion-orange bg-notion-orange/10",
  },
  {
    icon: Database,
    title: "The Scarcity Flywheel",
    body: "Distributing the majority of tokens to the public does not mean flooding the market. The distribution mechanics are engineered to tighten token emission and increase scarcity dynamically as the network grows. Your early allocation gains native structural importance over time.",
    color: "text-notion-purple bg-notion-purple/10",
  },
  {
    icon: Users,
    title: "Collective Governance",
    body: "There are no hidden boards of directors or shady foundations making decisions behind closed doors. Holding $SHIRI gives you direct voting power over the network's future. You steer the utility, validate the next milestones, and dictate resource allocation. This is your tribe.",
    color: "text-notion-green bg-notion-green/10",
  },
  {
    icon: Sparkles,
    title: "No Bots. Just Brains",
    body: "To ensure the 65% supply goes strictly to real community members, Shiriki deploys a ruthless sybil-defense engine at entry. We don't fund automated server farms; we reward human hearts. Your effort creates the value.",
    color: "text-notion-pink bg-notion-pink/10",
  },
  {
    icon: Check,
    title: "Zero Capital At Risk",
    body: "You don't need to put your hard-earned savings on the line to participate. By completely removing the financial barrier, Shiriki allows you to join the ecosystem with total peace of mind.",
    color: "text-notion-yellow bg-notion-yellow/10",
  },
];

export default function FeatureGrid() {
  return (
    <section id="about" className="border-t border-line bg-cream/40">
      <div className="mx-auto max-w-content px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            What is Shiriki?
          </h2>
          <p className="mt-4 text-lg leading-8 text-ink-light">
            Shiriki is a decentralized, culture-first hybrid protocol born out
            of a simple truth: crypto needs to belong to real people again.
            Stripped of complex financial jargon, $SHIRI begins its journey as a
            pure cultural token with no initial intrinsic value—engineered to
            spark a massive global movement. As our tribe expands, the protocol
            evolves, unlocking native real-world utility dictated solely by the
            scale of our network. The community isn&apos;t here to become exit
            liquidity for centralized entities; the community is the economic
            engine.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {cards.map(({ icon: Icon, title, body, color }) => (
            <div key={title} className="block-card group">
              <span
                className={`mb-4 inline-grid h-10 w-10 place-items-center rounded-lg ${color}`}
              >
                <Icon width={20} height={20} />
              </span>
              <h3 className="text-[15px] font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-ink-light">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
