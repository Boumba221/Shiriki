import { Check } from "./icons";

/**
 * A pure HTML/CSS recreation of a Notion-style editor window.
 * No images — everything is rendered with markup so it stays crisp.
 */
export default function AppMockup() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-line bg-white shadow-float">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-line bg-cream-soft px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-notion-red/70" />
        <span className="h-3 w-3 rounded-full bg-notion-yellow/70" />
        <span className="h-3 w-3 rounded-full bg-notion-green/70" />
        <div className="ml-3 hidden h-6 flex-1 items-center rounded-md bg-white px-3 text-xs text-ink-faint sm:flex">
          shiriki.app / team / product-roadmap
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <aside className="hidden flex-col gap-1 border-r border-line bg-cream/70 p-3 sm:flex">
          <div className="flex items-center gap-2 rounded-md px-2 py-1.5">
            <span className="grid h-5 w-5 place-items-center rounded bg-ink text-[11px] font-bold text-white">
              S
            </span>
            <span className="text-sm font-medium text-ink">Shiriki Team</span>
          </div>

          <SidebarItem emoji="🔍" label="Search" muted />
          <SidebarItem emoji="🏠" label="Home" muted />
          <SidebarItem emoji="📥" label="Inbox" muted />

          <p className="px-2 pb-1 pt-4 text-[11px] font-semibold uppercase tracking-wide text-ink-faint">
            Workspace
          </p>
          <SidebarItem emoji="🚀" label="Product Roadmap" active />
          <SidebarItem emoji="📓" label="Team Wiki" />
          <SidebarItem emoji="🎯" label="OKRs & Goals" />
          <SidebarItem emoji="🗓️" label="Meeting Notes" />
          <SidebarItem emoji="🎨" label="Design Docs" />
        </aside>

        {/* Editor */}
        <div className="p-6 sm:p-8">
          <div className="mb-1 text-5xl">🚀</div>
          <h3 className="mb-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Product Roadmap
          </h3>

          <p className="mb-5 max-w-prose text-[15px] leading-7 text-ink-light">
            Everything the team is shipping this quarter — one shared source of
            truth so nobody works in the dark.
          </p>

          {/* Checklist */}
          <div className="mb-6 flex flex-col gap-2.5">
            <CheckRow done label="Ship the new collaborative editor" />
            <CheckRow done label="Launch real-time comments" />
            <CheckRow label="Public roadmap & changelog" />
            <CheckRow label="Mobile offline mode" />
          </div>

          {/* Inline database */}
          <div className="overflow-hidden rounded-lg border border-line">
            <div className="flex items-center gap-2 border-b border-line bg-cream/60 px-4 py-2 text-xs font-medium text-ink-light">
              <span className="rounded bg-white px-2 py-0.5 shadow-sm">
                🗂️ Table
              </span>
              <span className="text-ink-faint">·</span>
              <span className="text-ink-faint">Board</span>
              <span className="text-ink-faint">·</span>
              <span className="text-ink-faint">Calendar</span>
            </div>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-line text-xs text-ink-faint">
                  <th className="px-4 py-2 font-medium">Feature</th>
                  <th className="px-4 py-2 font-medium">Owner</th>
                  <th className="hidden px-4 py-2 font-medium sm:table-cell">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="text-ink">
                <Row feature="Slash commands" owner="Amina" status="Shipped" color="green" />
                <Row feature="Realtime cursors" owner="Kai" status="In progress" color="orange" />
                <Row feature="Templates gallery" owner="Noa" status="Planned" color="blue" />
              </tbody>
            </table>
          </div>

          {/* Presence avatars */}
          <div className="mt-5 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["#EB5757", "#2383E2", "#0F7B6C", "#6940A5"].map((c, i) => (
                <span
                  key={i}
                  className="grid h-7 w-7 place-items-center rounded-full border-2 border-white text-[11px] font-semibold text-white"
                  style={{ backgroundColor: c }}
                >
                  {["A", "K", "N", "L"][i]}
                </span>
              ))}
            </div>
            <span className="text-xs text-ink-light">
              <span className="mr-1 inline-block h-2 w-2 rounded-full bg-notion-green align-middle" />
              4 people editing now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({
  emoji,
  label,
  active,
  muted,
}: {
  emoji: string;
  label: string;
  active?: boolean;
  muted?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-sm ${
        active
          ? "bg-[rgba(55,53,47,0.08)] font-medium text-ink"
          : muted
            ? "text-ink-faint"
            : "text-ink-light"
      }`}
    >
      <span className="text-[13px]">{emoji}</span>
      <span className="truncate">{label}</span>
    </div>
  );
}

function CheckRow({ label, done }: { label: string; done?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className={`grid h-4 w-4 place-items-center rounded border ${
          done
            ? "border-notion-blue bg-notion-blue text-white"
            : "border-ink-faint/50"
        }`}
      >
        {done && <Check width={11} height={11} strokeWidth={3} />}
      </span>
      <span
        className={`text-[15px] ${
          done ? "text-ink-faint line-through" : "text-ink"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function Row({
  feature,
  owner,
  status,
  color,
}: {
  feature: string;
  owner: string;
  status: string;
  color: "green" | "orange" | "blue";
}) {
  const tone = {
    green: "bg-notion-green/10 text-notion-green",
    orange: "bg-notion-orange/10 text-notion-orange",
    blue: "bg-notion-blue/10 text-notion-blue",
  }[color];

  return (
    <tr className="border-b border-line last:border-0">
      <td className="px-4 py-2.5">{feature}</td>
      <td className="px-4 py-2.5 text-ink-light">{owner}</td>
      <td className="hidden px-4 py-2.5 sm:table-cell">
        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${tone}`}>
          {status}
        </span>
      </td>
    </tr>
  );
}
