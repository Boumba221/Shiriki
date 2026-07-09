import type { ComponentType, SVGProps } from "react";
import { Bolt, Database, Doc, Globe, Lock, Sparkles, Tasks, Users } from "./icons";

type Card = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
  color: string;
};

const cards: Card[] = [
  {
    icon: Doc,
    title: "Flexible docs",
    body: "Pages that hold anything — text, tables, media, and embeds.",
    color: "text-notion-blue bg-notion-blue/10",
  },
  {
    icon: Database,
    title: "Powerful databases",
    body: "Turn any list into a filterable, sortable, connected database.",
    color: "text-notion-purple bg-notion-purple/10",
  },
  {
    icon: Tasks,
    title: "Project views",
    body: "Board, table, timeline, calendar — switch instantly, same data.",
    color: "text-notion-orange bg-notion-orange/10",
  },
  {
    icon: Users,
    title: "Real-time co-editing",
    body: "See presence, cursors, and comments update live as you work.",
    color: "text-notion-green bg-notion-green/10",
  },
  {
    icon: Sparkles,
    title: "Templates gallery",
    body: "Start in seconds with templates for wikis, roadmaps, and notes.",
    color: "text-notion-pink bg-notion-pink/10",
  },
  {
    icon: Bolt,
    title: "Blazing fast",
    body: "Keyboard-first, offline-ready, and quick from the first keystroke.",
    color: "text-notion-yellow bg-notion-yellow/10",
  },
  {
    icon: Lock,
    title: "Secure by design",
    body: "Granular permissions, SSO, and encryption keep work private.",
    color: "text-ink bg-ink/5",
  },
  {
    icon: Globe,
    title: "Publish to the web",
    body: "Turn any page into a public site or shareable link in one click.",
    color: "text-notion-red bg-notion-red/10",
  },
];

export default function FeatureGrid() {
  return (
    <section id="solutions" className="border-t border-line bg-cream/40">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            One tool, endless building blocks
          </h2>
          <p className="mt-4 text-lg leading-8 text-ink-light">
            Mix and match to design the workspace your team actually wants.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
