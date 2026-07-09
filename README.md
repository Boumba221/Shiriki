# Shiriki — Landing Page

A **Notion-style** landing page for **Shiriki** (Swahili for _"share / participate"_) — a connected workspace for teams. Built with **Next.js**, **TypeScript**, and **Tailwind CSS**. No backend — this is a fully static marketing site.

## Design

Pure Notion aesthetic:

- Warm off-white sections (`#F7F6F3`), ink text (`#37352F`), hairline borders
- Inter typeface, tight tracking, lots of whitespace
- "Block" cards, emoji accents, and a slash-command feel
- A pure HTML/CSS recreation of the Notion editor as the hero mockup (no images)

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
  layout.tsx        # root layout, fonts, metadata
  page.tsx          # assembles all sections
  globals.css       # Tailwind + Notion base styles
components/
  Navbar.tsx        # sticky nav with mobile menu
  Hero.tsx          # headline + CTA + product mockup
  AppMockup.tsx     # pure-CSS Notion editor recreation
  LogoStrip.tsx     # "trusted by" logos
  Features.tsx      # alternating feature blocks
  FeatureGrid.tsx   # building-blocks grid
  Testimonial.tsx   # quote + stats
  CTA.tsx           # dark call-to-action banner
  Footer.tsx        # footer links
  Logo.tsx, icons.tsx
tailwind.config.ts  # Notion color palette & tokens
```

## Notes

- All links (`Log in`, `Get Shiriki free`, footer, etc.) are placeholders (`#`) since there's no backend yet.
- Everything is responsive and works down to mobile.
