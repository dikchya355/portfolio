# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for "Dikchya" — Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind CSS v4. Content comes from the owner's CV (`cv.docx`); project preview images are still placeholders.

## Commands

Requires Node 24 (`.nvmrc`; `package.json` enforces `>=24 <25`).

```bash
npm run dev     # dev server
npm run build   # production build (also type-checks)
npm run lint    # eslint (flat config, eslint-config-next)
```

There is no test suite.

## Architecture

- **Routes** (`app/`): `/` (scroll-driven landing), `/work`, `/about`, `/contact`. Each route's markup **and** content (project lists, copy, tools, etc.) lives directly in its own `page.tsx` — there are no section components or shared content files. `components/` is only for genuinely reusable pieces (`ExpandableNavbar`, `SiteFooter`, `SocialLinks`). Every page uses the same `bg-background text-white` `<main>` shell; cards/placeholders use `bg-surface`. Both colors are `@theme` tokens in `globals.css`.
- **Home page** (`app/page.tsx`) is a client component. It renders `app/loading.tsx` as a timed splash overlay (fades at 1.2s, unmounts at 1.7s) — not just as the Next.js Suspense fallback — and derives all landing opacities/offsets from the motion hook.
- **Scroll motion** (`hooks/usePortfolioMotion.ts`): a rAF loop lerps a smoothed scroll position toward `window.scrollY` and exports `landingScrollDistance` / `landingExitDistance` and outputs `progress` (0→1 over `landingScrollDistance`) and `exitProgress` (0→1 over the following `landingExitDistance`). It writes the parallax transform directly to `gridRef` to avoid re-renders. The landing panel is fixed-position; the home page adds a spacer `div` of height `landingScrollDistance + 100svh`, so the next section starts entering exactly when the panel finishes expanding and slides up while the exit fade runs. The hook already eases the scroll value (frame-rate independent), so don't put CSS `transition`s on scroll-driven properties (panel height/transform/opacity, content lift, cover opacity) — stacking them on the easing makes the landing lag behind the page.
- **File naming**: files under `components/` use camelCase names starting with a lowercase letter (e.g. `siteFooter.tsx`); the exported components stay PascalCase.
- **Content rules**: the email address is intentionally never rendered on the site. The contact page form builds a `mailto:` link from it on submit (the address lives only in `app/contact/page.tsx`); social links are `socialProfiles` in `components/ui/socialLinks.tsx`. Keep copy plain and first-person — the owner rejected polished, generic-sounding "AI" phrasing.
- **Styling**: Tailwind v4 via `@import "tailwindcss"` and `@theme inline` in `app/globals.css` (no `tailwind.config`). Don't add element-level rules like `a { color: … }` to `globals.css`: unlayered CSS beats Tailwind utilities (and Turbopack dev output drops a hand-written `@layer base` wrapper), so such rules silently override `text-*` classes. Tailwind's preflight already handles the resets. Non-utility styles — loading spinner, ambient background/grid/vignette, hero word animations, and a `prefers-reduced-motion` block — live as plain CSS classes in `globals.css`. Components otherwise use inline Tailwind, including arbitrary values and class arrays joined with `.join(" ")`.
- **Visual language**: Geist for body text, Bricolage Grotesque (`font-display`, usually `font-semibold tracking-tight`) for headings, neutral whites on `#09060f`, and a single accent color (`text-accent` / `bg-accent`, the hero word yellow `#f7ed4d`) defined in `@theme`. Avoid reintroducing multi-color neon accents, glows, or letter-spaced uppercase eyebrow labels — the site was deliberately moved away from that look.
- `SiteFooter` is rendered once in `app/layout.tsx`, after every page's `<main>`; it is `relative z-10` with its own background so it sits above the home page's fixed landing layers.
- Import alias `@/*` maps to the repo root.
