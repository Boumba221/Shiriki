"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { Check, ChevronDown, Close, Languages, Menu } from "./icons";

const links = [
  { label: "About", href: "#about" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
];

const languages = [
  { id: "en", label: "English" },
  { id: "fr", label: "Français" },
  { id: "de", label: "Deutsch" },
  { id: "es", label: "Español" },
  { id: "it", label: "Italiano" },
  { id: "pt", label: "Português" },
  { id: "tr", label: "Türkçe" },
  { id: "ru", label: "Русский" },
  { id: "uk", label: "Українська" },
  { id: "ar", label: "العربية" },
  { id: "ja", label: "日本語" },
  { id: "ko", label: "한국어" },
  { id: "vi", label: "Tiếng Việt" },
  { id: "id", label: "Bahasa Indonesia" },
  { id: "zh-Hans", label: "简体中文" },
];

function LanguageSwitcher({ full = false }: { full?: boolean }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(languages[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className={`relative ${full ? "w-full" : ""}`} ref={ref}>
      <button
        type="button"
        aria-label="Change language"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`btn-ghost ${full ? "w-full justify-between border border-line" : ""}`}
      >
        <span className="flex items-center gap-2">
          <Languages width={17} height={17} className="opacity-70" />
          <span>{current.label}</span>
        </span>
        <ChevronDown
          width={14}
          height={14}
          className={`opacity-60 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className={`z-50 max-h-80 overflow-y-auto rounded-xl border border-line bg-surface p-1.5 shadow-float ${
            full ? "mt-2 w-full" : "absolute right-0 mt-2 w-52"
          }`}
        >
          {languages.map((lang) => {
            const active = lang.id === current.id;
            return (
              <button
                key={lang.id}
                type="button"
                onClick={() => {
                  setCurrent(lang);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-cream ${
                  active ? "font-medium text-ink" : "text-ink-light"
                }`}
              >
                <span>{lang.label}</span>
                {active && (
                  <Check width={15} height={15} className="text-notion-blue" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

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
          ? "border-b border-line bg-page/80 backdrop-blur-md"
          : "border-b border-transparent bg-page/0"
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
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink-light transition-colors hover:bg-ink/[0.06] hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden items-center gap-1.5 md:flex">
          <ThemeToggle />
          <LanguageSwitcher />
          <a href="#cta" className="btn-primary">
            Get $SHIRI free
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
        <div className="border-t border-line bg-page px-5 pb-6 pt-2 md:hidden">
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
            <ThemeToggle full />
            <LanguageSwitcher full />
            <a href="#cta" className="btn-primary w-full">
              Get $SHIRI free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
