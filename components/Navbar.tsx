"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { ChevronDown, Close, Menu } from "./icons";

const links = [
  { label: "Product", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Docs", href: "#docs" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "border-b border-line bg-white/80 backdrop-blur-md"
          : "border-b border-transparent bg-white/0"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-5 md:px-8">
        <div className="flex items-center gap-8">
          <a href="#top" aria-label="Shiriki home">
            <Logo />
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink-light transition-colors hover:bg-[rgba(55,53,47,0.06)] hover:text-ink"
                >
                  {link.label}
                  <ChevronDown width={14} height={14} className="opacity-60" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a href="#" className="btn-ghost">
            Log in
          </a>
          <a href="#cta" className="btn-primary">
            Get Shiriki free
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="btn-ghost md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-white px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-[15px] font-medium text-ink hover:bg-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2">
            <a href="#" className="btn-outline w-full">
              Log in
            </a>
            <a href="#cta" className="btn-primary w-full">
              Get Shiriki free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
