# 🐾 PawHaven — Veterinary Clinic Website Template

A premium, fully-responsive, **deploy-ready** landing page template for pet clinics & veterinary practices.
Built with **React 19 + Vite + TypeScript + Tailwind CSS v4 + Framer Motion**, with a **fully token-driven
light/dark theme** that you can re-skin in seconds using [tweakcn](https://tweakcn.com).

> Every colour, radius and font is a CSS variable — there are **no hard-coded colours anywhere** in the
> components. Drop a new theme into `src/index.css` and the entire site updates instantly.

---

## ✨ Features

- **13 polished sections** — Navbar, Hero, Stats, Services, About, Why-Choose-Us, Shop, Appointment
  booking, Vet Team, Testimonials, CTA, Contact (with live map), Footer.
- **Light & dark mode** — system-aware, persisted to `localStorage`, zero flash of unstyled theme.
- **tweakcn / shadcn token system** — semantic colours (`--primary`, `--background`, `--accent`, …) in
  `oklch`, ready to paste a new theme over.
- **Premium motion** — hand-built animated components inspired by ReactBits / Aceternity UI:
  - **SplitText** — characters fade + rise + de-blur into view (hero headline & every section title)
  - **ShinyText** — light streak sweeping across labels
  - **RotatingText** — cycling per-character word animation in the hero
  - **SideRays** — the real ReactBits WebGL light-rays shader (via OGL), themed to your palette
    and tuned per light/dark mode in the hero
  - **Particles** — on-theme canvas particle field that reacts to the cursor
  - Aurora gradient background, animated "laser" gradient text, cursor-following spotlight
    cards, seamless dual-direction marquee, scroll reveals & animated counters
- **Interactive bits** — product category filter + add-to-cart feedback, working booking & contact
  forms with success states, mobile menu, scroll-to-top.
- **Real imagery** — curated Unsplash photography via a tiny helper, swappable in one place.
- **Accessible & fast** — semantic HTML, keyboard-focusable controls, `prefers-reduced-motion`
  support, lazy-loaded images, ~124 kB gzipped JS.

---

## 🚀 Quick start

```bash
npm install      # install dependencies
npm run dev      # start the dev server  → http://localhost:5173
npm run build    # type-check + production build → /dist
npm run preview  # preview the production build
```

Requires **Node 18+** (developed on Node 26).

---

## 🎨 Theming with tweakcn (the important part)

All theme values live in **`src/index.css`** inside the `:root` (light) and `.dark` (dark) blocks.

1. Go to **[tweakcn.com](https://tweakcn.com)** and design a theme (or pick a preset).
2. Choose the **Tailwind v4** export.
3. Paste the generated `:root { … }` and `.dark { … }` blocks over the ones in `src/index.css`.

That's it — every component re-skins automatically because they only ever reference tokens like
`bg-primary`, `text-foreground`, `border-border`, `from-chart-3`, etc.

```css
/* src/index.css */
:root {
  --primary: oklch(0.58 0.1 195);     /* brand colour            */
  --accent:  oklch(0.94 0.045 60);    /* warm secondary accent   */
  --background: oklch(0.992 0.004 196);
  --radius: 0.85rem;                  /* global corner roundness */
  /* …full shadcn token set… */
}
.dark {
  --primary: oklch(0.72 0.12 190);
  /* …dark overrides… */
}
```

The Tailwind mapping in the `@theme inline { … }` block exposes these as utilities — you normally
won't need to touch it.

### Fonts
Swap the Google Fonts `<link>` in `index.html` and update `--font-sans` / `--font-display` in
`src/index.css`.

---

## 📝 Customising content

**All copy, services, products, team, testimonials and contact details live in one file:**

```
src/data/site.ts
```

Edit clinic name, phone, address, hours, the services grid, shop products, vets and reviews there —
no need to dig through components.

### Swapping images
Images use a helper that builds optimised Unsplash URLs:

```ts
import { unsplash } from "@/lib/utils";
unsplash("1583337130417-3346a1be7dee", 900, 900); // photo id, width, height
```

Replace the photo IDs in `src/data/site.ts` (and `hero.tsx` / `about.tsx`) with your own. To use
local images instead, drop files in `public/` and reference them as `/my-image.jpg`.

---

## 🗂️ Project structure

```
src/
├─ index.css                 # ★ Theme tokens (tweakcn) + utilities + keyframes
├─ main.tsx                  # App entry + ThemeProvider
├─ App.tsx                   # Section composition
├─ data/site.ts              # ★ All mock content lives here
├─ lib/utils.ts              # cn() + unsplash() helpers
└─ components/
   ├─ theme-provider.tsx     # light/dark context (localStorage + system)
   ├─ theme-toggle.tsx
   ├─ scroll-to-top.tsx
   ├─ ui/                    # Button, Badge, SectionHeading, form fields
   ├─ magic/                 # side-rays (ReactBits/OGL), SplitText, ShinyText, RotatingText,
   │                         # Particles, Aurora, Reveal, Marquee, CountUp, SpotlightCard
   └─ sections/              # Navbar, Hero, Stats, Services, About, WhyChoose,
                             # Shop, Appointment, Team, Testimonials, CTA,
                             # Contact, Footer
```

---

## ☁️ Deploy

This is a static SPA — deploy `/dist` anywhere.

**Vercel:** import the repo, framework preset **Vite**, build `npm run build`, output `dist`.
**Netlify:** build `npm run build`, publish directory `dist`.
**GitHub Pages / Cloudflare Pages / S3:** upload the contents of `dist`.

---

## 🔌 Wiring up the forms

The booking and contact forms are front-end only (they show a success state on submit). To make them
live, handle the submit in `src/components/sections/appointment.tsx` and `contact.tsx` — e.g. POST to
your API, [Formspree](https://formspree.io), [Resend](https://resend.com), or a serverless function.

---

## 🧪 Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Type-check (`tsc -b`) + production build |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Type-check only |
| `npm run ssr-check` | Smoke-test that every section renders without runtime errors |

---

## 📦 Tech stack

React 19 · Vite 6 · TypeScript 5 · Tailwind CSS v4 · Framer Motion 11 · OGL (WebGL) · lucide-react

> The hero light effect uses **ReactBits SideRays** (lightweight OGL/WebGL). The heavier
> **LaserFlow** effect (dark neon, needs `three`) can be swapped in on request.

## 📄 License & credits

Template free to use for client work and pitches. Photography from [Unsplash](https://unsplash.com)
(swap for your own/licensed imagery before going live). Icons by [Lucide](https://lucide.dev).
