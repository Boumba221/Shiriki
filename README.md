# Shiriki — Landing Page

A **Notion-style** landing page for **Shiriki / $SHIRI** — a decentralized, culture-first, community-owned crypto protocol. Built with **Next.js**, **TypeScript**, and **Tailwind CSS**. No backend — a fully static marketing site.

## Design

Pure Notion aesthetic, with a full **light & dark mode**:

- Warm off-white / deep dark surfaces, ink text, hairline borders
- Inter typeface, tight tracking, lots of whitespace
- "Block" cards and emoji accents
- Semantic palette driven by CSS variables (channel-based RGB) so every color flips cleanly between light and dark

## Features

- 🌙 **Dark / light mode** toggle (sun/moon) with `localStorage` persistence, system-preference default, and a no-flash inline script
- 🌐 **Language switcher** — 15 languages shown in their native script (i18n-ready, display only for now)
- 📱 Fully responsive, mobile burger menu

## Getting started

> Requires **Node.js 18.17+** (LTS recommended).

```bash
npm install     # install dependencies
npm run dev     # start dev server at http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # lint
```

## Project structure

```
app/
  layout.tsx          # root layout, fonts, metadata, no-flash theme script
  page.tsx            # assembles all sections
  globals.css         # Tailwind + light/dark CSS variables + base styles
components/
  Navbar.tsx          # sticky nav, theme toggle, language switcher, mobile menu
  Hero.tsx            # headline + CTA
  FeatureGrid.tsx     # "What is Shiriki?" + benefit cards
  Tokenomics.tsx      # $SHIRI distribution
  Roadmap.tsx         # phased roadmap timeline
  Faq.tsx             # accordion FAQ
  Testimonial.tsx     # quote + stats
  CTA.tsx             # dark call-to-action banner
  Footer.tsx          # footer links
  ThemeToggle.tsx     # dark/light toggle button
  Logo.tsx, icons.tsx
tailwind.config.ts    # semantic color tokens (CSS-variable driven) + dark mode
```

## Notes

- All action links (`Get $SHIRI free`, footer, etc.) are placeholders (`#`) since there's no backend yet.
- The language switcher updates the UI selection only — real translation (i18n) is not wired yet.
- Everything is responsive and works down to mobile.
