import Logo from "./Logo";

const columns: { title: string; links: string[] }[] = [
  {
    title: "Product",
    links: ["Docs", "Tasks", "Databases", "Templates", "What's new"],
  },
  {
    title: "Solutions",
    links: ["For teams", "For startups", "For personal", "Wikis", "Projects"],
  },
  {
    title: "Resources",
    links: ["Help center", "Community", "Guides", "API", "Status"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Privacy", "Terms"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream/50">
      <div className="mx-auto max-w-content px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-6 text-ink-light">
              The connected workspace where teams come together to write, plan,
              and share.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-sm font-semibold text-ink">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-ink-light transition-colors hover:text-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} Shiriki. Made for teams that share.
          </p>
          <div className="flex items-center gap-5 text-xs text-ink-faint">
            <a href="#" className="transition-colors hover:text-ink">
              Twitter
            </a>
            <a href="#" className="transition-colors hover:text-ink">
              LinkedIn
            </a>
            <a href="#" className="transition-colors hover:text-ink">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
