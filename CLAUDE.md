# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # Next.js dev server (http://localhost:3000)
npm run build   # Static export — writes to ./out (see next.config.mjs: output: "export")
npm run start   # Serve the production build
npm run lint    # next lint (eslint-config-next + prettier)
```

There is no test runner configured. `ecosystem.config.js` defines a PM2 `nextjs` app that runs `npm run dev` — only relevant when running under PM2.

## Deployment

The canonical deploy target is **GitHub Pages**, via `.github/workflows/nextjs.yml` on push to `main`. The workflow runs `next build` and uploads `./out`. Because of this:

- `next.config.mjs` sets `output: "export"` — **no server runtime exists in production**. API routes under `src/pages/api/` (e.g. `hello.ts`) are not reachable on the deployed site; anything dynamic must be client-side.
- `images.remotePatterns` is permissive but static export disables Next's image optimizer, so `<Image>` effectively serves originals.
- `vercel.json` is present but secondary — treat GitHub Pages as the source of truth for routing/headers behavior in production.

## Architecture

### Framework layout
Next.js 14 **Pages Router** (not App Router), TypeScript strict mode, path alias `@/*` → `./src/*`. The repo's `package.json` name (`softgen-firebase-starter`) is inherited from a starter template — Firebase/Stripe/react-three-fiber deps are present but **not wired into any current page**. Don't assume they're load-bearing before grepping for actual usage.

### Pages (three disconnected surfaces)
- `src/pages/index.tsx` — the portfolio site (Bahaa Najjar). Composes section components from `src/components/portfolio/*`: `Header`, `Hero`, `Marquee`, `Projects`, `Articles`, `ExperienceStrip`, `Footer`, plus a global `CursorLight` overlay. `Showreel` exists but is currently commented out.
- `src/pages/tipIndex.tsx` — mounts `@/components/ui/Tiptap.tsx`, a minimal custom editor (Document + Paragraph + Text + Code, with `immediatelyRender: false` to avoid SSR hydration issues).
- `src/pages/simple.tsx` — mounts `SimpleEditor` from `src/components/tiptap-templates/simple/`, the shadcn-style TipTap starter.

`_app.tsx` loads Inter (→ `--font-sans`) and Playfair Display (→ `--font-serif`) via `next/font/google`, then wraps `<Component />` in a `<main>` that applies both variable class names plus `font-sans`. There is **no `next-themes` provider and no theme toggle** — the site is dark-only, driven by the hex values in `src/styles/globals.css`.

### Content source
Portfolio copy (hero text, projects, articles, experience entries, etc.) lives in `src/data/portfolio.json`. Section components import from there rather than holding strings inline — editing portfolio content typically means editing that JSON, not the TSX.

### Component organization
- `src/components/ui/` — shadcn/ui components (style: `new-york`, base color: `zinc`, see `components.json`). Use the shadcn CLI conventions when adding new ones; aliases are already configured.
- `src/components/portfolio/` — the actual portfolio sections. This is where portfolio feature work happens.
- `src/components/tiptap-*` (extension, icons, node, templates, ui, ui-primitive) — the TipTap "simple editor" template scaffolding. These are self-contained; they consume hooks from `src/hooks/use-*` (e.g. `use-tiptap-editor`, `use-cursor-visibility`, `use-menu-navigation`) and utilities from `src/lib/tiptap-utils.ts`. Treat this subsystem as a vendored package — edits here should stay within its own conventions rather than bleeding into portfolio code.

### Styling
- Tailwind (`tailwind.config.ts`) wires theme tokens directly to CSS variables (`background: 'var(--background)'`, etc.). Colors are stored as **flat hex values** in `src/styles/globals.css` — not HSL tuples, so use `var(--token)` **not** `hsl(var(--token))`. `--radius` is `0px` (sharp corners are intentional).
- Fonts: `font-sans` → Inter (`--font-sans`), `font-serif` → Playfair Display (`--font-serif`). The previous "Courier New everywhere" rule no longer applies; the editorial sans/serif pairing is deliberate.
- `src/styles/_variables.css` and `_keyframe-animations.css` are consumed by the TipTap templates. They were migrated from SCSS to plain CSS, but `sass` remains a devDependency for any `.scss` imports inside the vendored TipTap code.

### Hooks & lib
- `src/hooks/` mixes shadcn hooks (`use-mobile`, `use-toast`) with TipTap-specific hooks (`use-tiptap-editor`, `use-cursor-visibility`, etc.). When adding a portfolio hook, don't colocate it with the TipTap ones — name it distinctly.
- `src/lib/utils.ts` holds the shadcn `cn()` helper; `src/lib/tiptap-utils.ts` is TipTap-only.
