import type { ReactNode } from "react";
import { Check } from "./icons";

type Feature = {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  visual: ReactNode;
  reverse?: boolean;
};

const features: Feature[] = [
  {
    eyebrow: "Docs & Notes",
    title: "One editor for everything your team writes.",
    body: "Type “/” for anything — headings, to-dos, tables, code, embeds. Every doc is a flexible canvas that adapts to how your team thinks.",
    points: [
      "Slash commands & drag-and-drop blocks",
      "Nested pages that scale with your team",
      "Markdown in, beautiful pages out",
    ],
    visual: <DocsVisual />,
  },
  {
    eyebrow: "Tasks & Projects",
    title: "Turn ideas into shipped work.",
    body: "Manage projects the way you want — as a table, a board, a timeline, or a calendar. Same data, every view, always in sync.",
    points: [
      "Kanban boards, tables & timelines",
      "Assignees, due dates & priorities",
      "Filters and sorts that stick",
    ],
    visual: <TasksVisual />,
    reverse: true,
  },
  {
    eyebrow: "Collaboration",
    title: "Built for teams that share.",
    body: "Shiriki means “share.” See who’s here, comment inline, and co-edit in real time. Knowledge stops living in silos and starts belonging to everyone.",
    points: [
      "Real-time cursors & presence",
      "Inline comments and mentions",
      "Granular permissions per page",
    ],
    visual: <CollabVisual />,
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-notion-blue">
          Everything, connected
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Replace a dozen tools with one workspace
        </h2>
        <p className="mt-4 text-lg leading-8 text-ink-light">
          Docs, tasks, and knowledge that talk to each other — so your team
          spends less time switching tabs and more time creating.
        </p>
      </div>

      <div className="flex flex-col gap-20 md:gap-28">
        {features.map((f) => (
          <div
            key={f.title}
            className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
              f.reverse ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-ink-faint">
                {f.eyebrow}
              </p>
              <h3 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {f.title}
              </h3>
              <p className="mt-4 text-lg leading-8 text-ink-light">{f.body}</p>
              <ul className="mt-6 flex flex-col gap-3">
                {f.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[15px] text-ink">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-notion-green/10 text-notion-green">
                      <Check width={13} height={13} strokeWidth={2.5} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>{f.visual}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Mini visuals (pure CSS) ---------- */

function VisualFrame({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-line bg-cream/50 p-4 shadow-card sm:p-6">
      <div className="rounded-xl border border-line bg-white p-5">{children}</div>
    </div>
  );
}

function DocsVisual() {
  return (
    <VisualFrame>
      <div className="text-3xl">📝</div>
      <div className="mt-3 h-5 w-3/5 rounded bg-ink/85" />
      <div className="mt-4 space-y-2.5">
        <div className="h-3 w-full rounded bg-ink/10" />
        <div className="h-3 w-11/12 rounded bg-ink/10" />
        <div className="h-3 w-4/5 rounded bg-ink/10" />
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-md bg-cream px-3 py-2 text-sm text-ink-light">
        <span className="font-mono text-notion-purple">/</span> Type to insert a
        block…
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {["Heading", "To-do", "Table", "Code", "Image"].map((t) => (
          <span
            key={t}
            className="rounded-md border border-line px-2.5 py-1 text-xs text-ink-light"
          >
            {t}
          </span>
        ))}
      </div>
    </VisualFrame>
  );
}

function TasksVisual() {
  const cols = [
    { title: "To do", tone: "bg-ink-faint", items: ["Design review", "Write specs"] },
    { title: "In progress", tone: "bg-notion-orange", items: ["Auth flow"] },
    { title: "Done", tone: "bg-notion-green", items: ["Landing page", "Onboarding"] },
  ];
  return (
    <VisualFrame>
      <div className="grid grid-cols-3 gap-3">
        {cols.map((c) => (
          <div key={c.title}>
            <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-ink-light">
              <span className={`h-2 w-2 rounded-full ${c.tone}`} />
              {c.title}
            </div>
            <div className="flex flex-col gap-2">
              {c.items.map((it) => (
                <div
                  key={it}
                  className="rounded-lg border border-line bg-white p-2.5 shadow-sm"
                >
                  <div className="text-[11px] font-medium text-ink">{it}</div>
                  <div className="mt-2 h-1.5 w-2/3 rounded bg-ink/10" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}

function CollabVisual() {
  return (
    <VisualFrame>
      <div className="relative">
        <div className="space-y-2.5">
          <div className="h-3 w-4/5 rounded bg-ink/10" />
          <div className="h-3 w-full rounded bg-ink/10" />
          <div className="h-3 w-2/3 rounded bg-notion-blue/20" />
        </div>

        {/* Floating cursors */}
        <span className="absolute -right-1 top-2 flex items-center gap-1">
          <span className="h-3 w-3 rotate-12 rounded-sm bg-notion-purple" />
          <span className="rounded bg-notion-purple px-1.5 py-0.5 text-[10px] font-medium text-white">
            Amina
          </span>
        </span>
        <span className="absolute bottom-0 left-10 flex items-center gap-1">
          <span className="h-3 w-3 rotate-12 rounded-sm bg-notion-red" />
          <span className="rounded bg-notion-red px-1.5 py-0.5 text-[10px] font-medium text-white">
            Kai
          </span>
        </span>
      </div>

      <div className="mt-6 rounded-lg border border-line bg-cream/60 p-3">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-notion-green text-[10px] font-semibold text-white">
            N
          </span>
          <span className="text-xs font-medium text-ink">Noa</span>
          <span className="text-[11px] text-ink-faint">commented</span>
        </div>
        <p className="mt-1.5 text-xs text-ink-light">
          Love this direction 🎉 Let&apos;s ship it this week!
        </p>
      </div>
    </VisualFrame>
  );
}
