# Portfolio Redesign — Editorial Studio, Refined & Structured

## Overview

Complete visual identity overhaul of Bahaa Najjar's portfolio site (0xffvirus.github.io). Moving from an ASCII/terminal aesthetic to a premium editorial studio direction — dark-only, serif headlines, generous whitespace, minimal sections. The goal is a confident, refined portfolio that looks like a creative agency site rather than a student template.

**Tech stack**: Next.js 14 + Tailwind CSS + Framer Motion (already installed). No new dependencies needed.

## Design Direction

**Inspiration**: Seventy Studios (editorial structure, centered layout, showreel block, client showcases, subtle borders).

**Personality**: Elegant, confident, minimal. Every element earns its place. No filler sections, no gimmicky effects.

## Typography

| Role | Font | Style | Size (desktop) | Notes |
|------|------|-------|-----------------|-------|
| Hero tagline | Georgia / Playfair Display | Italic | 48-64px | Centered, serif, single statement |
| Section labels | Inter / system sans-serif | Uppercase, letter-spacing 0.2em | 11-12px | Small caps feel |
| Project titles | Georgia / Playfair Display | Italic | 28-36px | Left-aligned within project cards |
| Body text | Inter / system sans-serif | Normal | 14-16px | Color: #777 (WCAG AA) |
| Nav / buttons | Inter / system sans-serif | Uppercase, letter-spacing 0.1-0.15em | 11-12px | Structural text |
| Marquee | Inter / system sans-serif | Uppercase, letter-spacing 0.2em | 12-14px | Color: #333, scrolling |

**Font loading**: Use `next/font/google` in `src/pages/_app.tsx` to load Inter (sans) and Playfair Display (serif). Apply font CSS variables to `<main>` or `<body>`:
```tsx
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })
```
Then reference `--font-sans` and `--font-serif` in `tailwind.config.ts` font families. Fall back to Georgia for serif, system-ui for sans.

**Monospace is removed entirely** from the design. No more Courier New.

## Color Palette

Dark-only. No light mode, no theme toggle.

**CSS variable format**: Switch from the current `hsl(var(--...))` wrapper pattern to direct hex values. Update `tailwind.config.ts` color references accordingly — remove the `hsl()` wrappers and reference variables directly (e.g., `var(--background)` instead of `hsl(var(--background))`).

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#050505` | Page background |
| `--foreground` | `#ffffff` | Primary text, headings |
| `--text-secondary` | `#777777` | Body text, descriptions (WCAG AA compliant ~4.8:1 contrast) |
| `--text-muted` | `#333333` | Marquee text, very subtle labels |
| `--border` | `#1a1a1a` | Section dividers, card borders |
| `--border-hover` | `#333333` | Border on hover states |
| `--card` | `#0a0a0a` | Card/showreel backgrounds |
| `--primary` | `#ffffff` | Buttons, interactive elements |
| `--primary-foreground` | `#050505` | Text on primary bg |
| `--secondary` | `#1a1a1a` | Secondary backgrounds |
| `--secondary-foreground` | `#ffffff` | Text on secondary bg |
| `--muted` | `#111111` | Muted backgrounds |
| `--muted-foreground` | `#777777` | Muted text |
| `--accent` | `#ffffff` | Accent = primary (grayscale) |
| `--accent-foreground` | `#050505` | Text on accent bg |
| `--destructive` | `#ff0000` | Error states (kept) |
| `--ring` | `#333333` | Focus ring color |
| `--input` | `#1a1a1a` | Input borders |

This provides a complete token set so shadcn/ui components (if ever used) render correctly with the new palette. No accent colors beyond grayscale.

**Remove light mode variables entirely** from globals.css. Only the dark palette exists.

## Layout & Spacing

- **Container**: `max-w-5xl` (~1024px), centered, `px-6 md:px-8`
- **Section padding**: `py-24 md:py-32` (96-128px vertical)
- **Section dividers**: `border-b border-[#1a1a1a]` between every section
- **Border radius**: 0px everywhere (kept from current design — works well here)

## Sections

### 1. Header

Fixed/sticky navigation bar.

```
[Bahaa Najjar]                    [Projects]  [About]  [ Get in touch ]
```

- **Logo**: "Bahaa Najjar" — sans-serif, uppercase, letter-spacing 0.15em, white
- **Nav links**: "Projects", "About" — sans-serif, uppercase, 10-11px, color #666, hover #fff
- **CTA**: "Get in touch" — 1px border #333, padding 6px 16px, uppercase, hover border #fff
- **Scroll behavior**: Transparent at top, `backdrop-blur-md bg-black/50` on scroll
- **Border**: `border-b border-[#1a1a1a]` always visible
- **Mobile**: Logo left, hamburger icon right. Full-screen overlay menu with centered vertical nav links. Menu animates: fade in background (200ms), then links slide up staggered (100ms each, 0.4s ease-out). Close reverses.

### 2. Hero

Centered, typographic hero. No code blocks, no terminal aesthetic.

```
            SOFTWARE ENGINEER & GAME DEVELOPER          ← label

            Building things                              ← serif italic, large
            that matter.

            [ VIEW MY WORK ]                             ← outline button
```

- **Label**: Sans-serif, uppercase, letter-spacing 0.25em, color #777, 11px
- **Tagline**: Serif italic, 48-64px, white, line-height 1.15, max-width ~600px, centered
- **CTA**: Outline button — 1px border #333, uppercase sans-serif, letter-spacing 0.15em, hover border #fff
- **Spacing**: `pt-32 pb-20` (hero breathes, but flows into showreel)
- **Scroll link**: CTA scrolls to projects section

### 3. Showreel Block

Full-width dark container below hero. Placeholder for video/demo content.

- **Container**: Full container width, `bg-[#0a0a0a]`, `border border-[#1a1a1a]`
- **Height**: `aspect-video` or fixed ~400px on desktop
- **Center content**: Play button icon (circle with triangle) + "SHOWREEL" label below
- **Play button**: 48px circle, 1px border #333, centered triangle icon
- **Future**: Can embed a YouTube/Vimeo iframe or self-hosted video
- **For now**: Static placeholder that looks intentional

### 4. Marquee

Scrolling text ticker between showreel and projects.

```
SOFTWARE ENGINEER • GAME DEVELOPER • AVAILABLE FOR WORK • SOFTWARE ENGINEER • ...
```

- **Text**: Sans-serif, uppercase, letter-spacing 0.2em, color #333, 12-14px
- **Animation**: CSS `translateX` infinite loop, ~30s duration, `linear`
- **Borders**: `border-y border-[#1a1a1a]`, `py-3`
- **Content duplicated 3x** for seamless loop (same technique as current SkillsScroll)
- **Hover**: Pause animation on hover (optional, subtle)

### 5. Projects

Each project as a full-width card. Show 3-4 best projects, not all 5.

**Recommended projects to keep** (strongest portfolio pieces):
1. Last Trial (Steam-published game — strongest piece)
2. Unis Market (full-stack web platform)
3. Islamic Adkar App (mobile, published)

**Per-project layout:**

```
Last Trial                              GDScript • Godot • Steam
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                    PROJECT IMAGE                        │
│                   (grayscale → color on hover)          │
│                                                         │
└─────────────────────────────────────────────────────────┘
A 2D roguelike game published on Steam.
```

- **Title row**: Serif italic title (28-36px, white) left, tech stack labels (sans, uppercase, 10px, #555) right
- **Image**: Full-width, `aspect-video`, `border border-[#1a1a1a]`, grayscale by default, color on hover (500ms transition)
- **Description**: Sans-serif, 14px, color #777, max-width ~500px, margin-top 12px
- **Each project separated by**: `border-b border-[#1a1a1a]`, `py-16 md:py-20`
- **Link**: Entire card is clickable, arrow icon (↗) appears on hover next to title
- **"View All" link**: After last project, small "View all projects →" link to GitHub profile

### 6. Experience Strip

Compact, not a full section. Two current roles side by side.

```
CURRENTLY                                CO-FOUNDER
Software Developer @ BestCircle          ByteVectors Studio
```

- **Layout**: Flex row, `justify-between`, two columns
- **Label**: Sans-serif, uppercase, letter-spacing 0.15em, 9px, color #777
- **Role text**: Sans-serif, 14px, white
- **Borders**: `border-y border-[#1a1a1a]`, `py-6`
- **No descriptions or dates** — just title + company. Minimal.

### 7. Footer

Compact footer with contact and social links.

```
CEO@bahaanajjar.com                     GitHub  Twitter  CV
                    © 2026 Bahaa Najjar
```

- **Layout**: Flex row top, centered copyright below
- **Email**: Sans-serif, 13px, color #666, hover #fff
- **Social links**: Sans-serif, uppercase, 10px, color #777, hover #fff
- **Copyright**: Sans-serif, 11px, color #333, centered, margin-top 16px
- **Spacing**: `py-12`, `border-t border-[#1a1a1a]`

## Animations

All using Framer Motion (already installed, currently unused).

| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Hero label | Fade in + slide up 20px | Page load, 0.2s delay | 0.6s ease-out |
| Hero tagline | Fade in + slide up 20px | Page load, 0.4s delay | 0.6s ease-out |
| Hero CTA | Fade in + slide up 20px | Page load, 0.6s delay | 0.6s ease-out |
| Showreel block | Fade in | Scroll into view | 0.8s ease-out |
| Marquee | CSS translateX loop | Always running | 30s linear |
| Each project card | Fade in + slide up 30px | Scroll into view | 0.6s ease-out |
| Experience strip | Fade in | Scroll into view | 0.6s ease-out |
| Nav links / buttons | Opacity + border-color transition | Hover | 200ms |
| Project images | Grayscale → color | Hover | 500ms |

**Scroll animations**: Use Framer Motion `whileInView` with `viewport={{ once: true, amount: 0.2 }}` so elements animate once when 20% visible.

## Cursor Effect

Keep the existing `CursorLight` component (mix-blend-difference white circle). It works beautifully with the dark editorial aesthetic. No changes needed.

## Mobile Responsive

- **Header**: Logo + hamburger. Menu overlay with centered vertical links.
- **Hero**: Tagline scales to 32-40px. Remains centered.
- **Showreel**: Maintains aspect-video ratio, scales down.
- **Marquee**: Same, just less visible text in viewport at once.
- **Projects**: Stack vertically. Title and tech stack stack (no side-by-side on small screens).
- **Experience strip**: Stack vertically instead of side-by-side.
- **Footer**: Stack vertically, centered.
- **Cursor light**: Hidden on mobile (already implemented with `lg:block hidden`).

## Files to Modify

| File | Action |
|------|--------|
| `src/styles/globals.css` | Replace CSS variables with new palette, remove light mode vars, update base styles, remove monospace font |
| `tailwind.config.ts` | Update font families (serif + sans), keep radius 0px |
| `src/pages/index.tsx` | Restructure sections, remove About/SkillsScroll/Contact imports |
| `src/components/portfolio/Header.tsx` | Complete rewrite — new nav structure, remove theme toggle |
| `src/components/portfolio/Hero.tsx` | Complete rewrite — centered serif tagline, remove terminal block |
| `src/components/portfolio/Projects.tsx` | Complete rewrite — large-format cards, fewer projects |
| `src/components/portfolio/Footer.tsx` | Rewrite — compact, email + socials |
| `src/components/portfolio/CursorLight.tsx` | Keep as-is |

**New files:**

| File | Purpose |
|------|---------|
| `src/components/portfolio/Showreel.tsx` | Showreel/video placeholder block |
| `src/components/portfolio/Marquee.tsx` | Scrolling text ticker |
| `src/components/portfolio/ExperienceStrip.tsx` | Compact experience display |

**Files to delete:**

| File | Reason |
|------|--------|
| `src/components/portfolio/About.tsx` | Section removed |
| `src/components/portfolio/SkillsScroll.tsx` | Section removed |
| `src/components/portfolio/Contact.tsx` | Section removed |
| `src/components/portfolio/Experience.tsx` | Replaced by ExperienceStrip |

## Theme Provider Removal

Remove `next-themes` usage:
- Remove `ThemeProvider` wrapper from `src/pages/_app.tsx`
- Remove `useTheme` import from Header
- Hardcode `className="dark"` on `<html>` element in `_document.tsx` (or just style everything directly since there's only one theme)
- `next-themes` package can stay in package.json (no harm), but is no longer imported

## SEO Updates

Update `<Head>` in `index.tsx`:
- Title: "Bahaa Najjar — Software Engineer & Game Developer"
- Description: Updated to match new identity (no more "student" framing)
- Keywords: Updated to reflect portfolio focus

## Dependency Cleanup

- Remove `devicons-react` from package.json (only used in deleted SkillsScroll)
- `next-themes` can remain (no harm) but all imports removed

## What Stays Unchanged

- Next.js 14 framework, static export, Vercel deployment
- shadcn/ui component library (unused components stay, tokens now mapped to new palette)
- Project data (titles, descriptions, links, images) — just displayed differently
- CursorLight component
- All config files except tailwind.config.ts, globals.css, _app.tsx, _document.tsx
