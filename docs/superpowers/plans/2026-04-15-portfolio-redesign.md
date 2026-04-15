# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Overhaul the portfolio site from ASCII/terminal aesthetic to an Editorial Studio direction — dark-only, serif headlines, centered layout, premium feel.

**Architecture:** Complete rewrite of 4 components, creation of 3 new ones, deletion of 4 old ones. Foundation changes (CSS vars, fonts, Tailwind config) land first, then components top-to-bottom as they appear on the page. Single-page scroll architecture stays the same.

**Tech Stack:** Next.js 14, Tailwind CSS, Framer Motion, Playfair Display + Inter (Google Fonts via next/font)

**Spec:** `docs/superpowers/specs/2026-04-15-portfolio-redesign-design.md`

---

## Chunk 1: Foundation (Config, Styles, Fonts)

### Task 1: Update globals.css — new color palette, dark-only, remove monospace

**Files:**
- Modify: `src/styles/globals.css`

- [ ] **Step 1: Replace globals.css with new dark-only palette and base styles**

Replace the entire file with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #050505;
  --foreground: #ffffff;
  --card: #0a0a0a;
  --card-foreground: #ffffff;
  --popover: #0a0a0a;
  --popover-foreground: #ffffff;
  --primary: #ffffff;
  --primary-foreground: #050505;
  --secondary: #1a1a1a;
  --secondary-foreground: #ffffff;
  --muted: #111111;
  --muted-foreground: #777777;
  --accent: #ffffff;
  --accent-foreground: #050505;
  --destructive: #ff0000;
  --destructive-foreground: #ffffff;
  --border: #1a1a1a;
  --input: #1a1a1a;
  --ring: #333333;
  --text-secondary: #777777;
  --text-muted: #333333;
  --border-hover: #333333;
  --radius: 0px;
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

@layer components {
  .container {
    @apply mx-auto px-6 md:px-8 max-w-5xl w-full;
  }
}
```

Key changes: removed light mode `:root`, removed `.dark` class block (colors are now the only palette), removed `@media (prefers-color-scheme: dark)`, removed monospace `font-family`, removed `h1-h6` uppercase/monospace rule, removed `ascii-border` and `ascii-panel` utilities, narrowed container from `max-w-7xl` to `max-w-5xl`.

- [ ] **Step 2: Verify the file saved correctly**

Run: `head -40 src/styles/globals.css`

- [ ] **Step 3: Commit**

```bash
git add src/styles/globals.css
git commit -m "feat: replace CSS variables with dark-only editorial palette"
```

---

### Task 2: Update tailwind.config.ts — fonts, colors from hex vars

**Files:**
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Replace tailwind.config.ts with new config**

Replace the entire file with:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
```

Key changes: removed `darkMode: ["class"]` (not needed — single palette), replaced `hsl(var(--...))` with `var(--...)`, replaced monospace font families with CSS variable-based Inter/Playfair, removed sidebar/chart color tokens, removed accordion keyframes.

- [ ] **Step 2: Commit**

```bash
git add tailwind.config.ts
git commit -m "feat: update tailwind config with hex vars and new font families"
```

---

### Task 3: Update _app.tsx — load fonts, remove ThemeProvider

**Files:**
- Modify: `src/pages/_app.tsx`

- [ ] **Step 1: Replace _app.tsx with font loading and no ThemeProvider**

```tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${playfair.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
```

Key changes: removed `ThemeProvider` import and wrapper, added `next/font/google` imports for Inter and Playfair Display, applied font CSS variables via className.

- [ ] **Step 2: Commit**

```bash
git add src/pages/_app.tsx
git commit -m "feat: load Inter + Playfair Display fonts, remove ThemeProvider"
```

---

### Task 4: Update _document.tsx — hardcode dark class

**Files:**
- Modify: `src/pages/_document.tsx`

- [ ] **Step 1: Add dark class to html element**

```tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/_document.tsx
git commit -m "feat: hardcode dark class on html element"
```

---

### Task 5: Verify foundation builds

- [ ] **Step 1: Run the dev build to check for errors**

Run: `cd /home/bahaa/Documents/0xffvirus.github.io && npx next build 2>&1 | tail -20`

If there are CSS/config errors, fix them before proceeding. The site will look broken visually (components still use old classes) but it should compile.

---

## Chunk 2: Page Shell & New Components

### Task 6: Delete removed components

**Files:**
- Delete: `src/components/portfolio/About.tsx`
- Delete: `src/components/portfolio/SkillsScroll.tsx`
- Delete: `src/components/portfolio/Contact.tsx`
- Delete: `src/components/portfolio/Experience.tsx`

- [ ] **Step 1: Delete the 4 removed component files**

```bash
rm src/components/portfolio/About.tsx
rm src/components/portfolio/SkillsScroll.tsx
rm src/components/portfolio/Contact.tsx
rm src/components/portfolio/Experience.tsx
```

- [ ] **Step 2: Commit**

```bash
git add -u src/components/portfolio/
git commit -m "feat: remove About, SkillsScroll, Contact, Experience components"
```

---

### Task 7: Rewrite index.tsx — new page structure and SEO

**Files:**
- Modify: `src/pages/index.tsx`

- [ ] **Step 1: Replace index.tsx with new section structure**

```tsx
import Head from "next/head";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { Showreel } from "@/components/portfolio/Showreel";
import { Marquee } from "@/components/portfolio/Marquee";
import { Projects } from "@/components/portfolio/Projects";
import { ExperienceStrip } from "@/components/portfolio/ExperienceStrip";
import { Footer } from "@/components/portfolio/Footer";
import { CursorLight } from "@/components/portfolio/CursorLight";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bahaa Najjar — Software Engineer & Game Developer</title>
        <meta
          name="description"
          content="Portfolio of Bahaa Najjar — Software Engineer & Game Developer. Building digital experiences with code."
        />
        <meta
          name="keywords"
          content="Bahaa Najjar, Software Engineer, Game Developer, Portfolio, Next.js, Flutter, Godot"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CursorLight />
      <Header />

      <main>
        <Hero />
        <Showreel />
        <Marquee />
        <Projects />
        <ExperienceStrip />
      </main>

      <Footer />
    </>
  );
}
```

Key changes: removed `className="dark"` from main (handled by html element now), removed About/SkillsScroll/Contact/Experience imports, added Showreel/Marquee/ExperienceStrip imports, updated SEO meta tags.

- [ ] **Step 2: Commit**

```bash
git add src/pages/index.tsx
git commit -m "feat: restructure page with new editorial section order and SEO"
```

---

### Task 8: Create Showreel component

**Files:**
- Create: `src/components/portfolio/Showreel.tsx`

- [ ] **Step 1: Create Showreel.tsx**

```tsx
"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function Showreel() {
  return (
    <section className="border-b border-[#1a1a1a]">
      <div className="container py-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-video bg-[#0a0a0a] border border-[#1a1a1a] flex items-center justify-center"
        >
          <div className="text-center">
            <div className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center mx-auto mb-3 hover:border-white transition-colors duration-200 cursor-pointer">
              <Play className="w-4 h-4 text-white ml-0.5" />
            </div>
            <span className="text-[#333] text-[11px] uppercase tracking-[0.15em] font-sans">
              Showreel
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/portfolio/Showreel.tsx
git commit -m "feat: add Showreel placeholder component"
```

---

### Task 9: Create Marquee component

**Files:**
- Create: `src/components/portfolio/Marquee.tsx`

- [ ] **Step 1: Create Marquee.tsx**

```tsx
export function Marquee() {
  const items = [
    "Software Engineer",
    "Game Developer",
    "Available for Work",
  ];

  const repeatedItems = [...items, ...items, ...items];
  const content = repeatedItems.join(" • ");

  return (
    <section className="border-b border-[#1a1a1a] py-3 overflow-hidden">
      <div className="relative">
        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
          <span className="text-[#333] text-xs uppercase tracking-[0.2em] font-sans px-4">
            {content}
          </span>
          <span className="text-[#333] text-xs uppercase tracking-[0.2em] font-sans px-4">
            {content}
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/portfolio/Marquee.tsx
git commit -m "feat: add scrolling Marquee ticker component"
```

---

### Task 10: Create ExperienceStrip component

**Files:**
- Create: `src/components/portfolio/ExperienceStrip.tsx`

- [ ] **Step 1: Create ExperienceStrip.tsx**

```tsx
"use client";

import { motion } from "framer-motion";

export function ExperienceStrip() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-b border-[#1a1a1a] py-6"
    >
      <div className="container flex flex-col md:flex-row md:justify-between gap-6">
        <div>
          <span className="text-[#777] text-[9px] uppercase tracking-[0.15em] font-sans block">
            Currently
          </span>
          <span className="text-white text-sm font-sans mt-1 block">
            Software Developer @ BestCircle
          </span>
        </div>
        <div className="md:text-right">
          <span className="text-[#777] text-[9px] uppercase tracking-[0.15em] font-sans block">
            Co-founder
          </span>
          <span className="text-white text-sm font-sans mt-1 block">
            ByteVectors Studio
          </span>
        </div>
      </div>
    </motion.section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/portfolio/ExperienceStrip.tsx
git commit -m "feat: add compact ExperienceStrip component"
```

---

## Chunk 3: Rewrite Existing Components

### Task 11: Rewrite Header.tsx

**Files:**
- Modify: `src/components/portfolio/Header.tsx`

- [ ] **Step 1: Replace Header.tsx with editorial version**

```tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#experience" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b border-[#1a1a1a] ${
        isScrolled ? "bg-[#050505]/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-white text-[13px] uppercase tracking-[0.15em] font-sans hover:opacity-70 transition-opacity duration-200"
        >
          Bahaa Najjar
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#666] text-[11px] uppercase tracking-[0.1em] font-sans hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:CEO@bahaanajjar.com"
            className="text-white text-[11px] uppercase tracking-[0.1em] font-sans border border-[#333] px-4 py-1.5 hover:border-white transition-colors duration-200"
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-5 h-5" />
          <span className="sr-only">Open menu</span>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#050505] z-50 md:hidden"
          >
            <div className="container flex flex-col h-full">
              <div className="flex items-center justify-between h-16">
                <span className="text-white text-[13px] uppercase tracking-[0.15em] font-sans">
                  Bahaa Najjar
                </span>
                <button
                  className="text-white p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="w-5 h-5" />
                  <span className="sr-only">Close menu</span>
                </button>
              </div>
              <nav className="flex flex-col items-center justify-center flex-1 gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 * (i + 1),
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      href={link.href}
                      className="text-white text-2xl uppercase tracking-[0.1em] font-sans hover:opacity-70 transition-opacity duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 * (navLinks.length + 1),
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  <a
                    href="mailto:CEO@bahaanajjar.com"
                    className="text-white text-lg uppercase tracking-[0.1em] font-sans border border-[#333] px-6 py-2 hover:border-white transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get in touch
                  </a>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/portfolio/Header.tsx
git commit -m "feat: rewrite Header with editorial nav, remove theme toggle"
```

---

### Task 12: Rewrite Hero.tsx

**Files:**
- Modify: `src/components/portfolio/Hero.tsx`

- [ ] **Step 1: Replace Hero.tsx with centered editorial hero**

```tsx
"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="pt-32 pb-20 border-b border-[#1a1a1a]">
      <div className="container flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="text-[#777] text-[11px] uppercase tracking-[0.25em] font-sans mb-6"
        >
          Software Engineer & Game Developer
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white leading-[1.15] max-w-[600px]"
        >
          Building things that matter.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="mt-8"
        >
          <a
            href="#projects"
            className="text-white text-[11px] uppercase tracking-[0.15em] font-sans border border-[#333] px-6 py-3 hover:border-white transition-colors duration-200 inline-block"
          >
            View my work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/portfolio/Hero.tsx
git commit -m "feat: rewrite Hero with centered serif tagline, remove terminal block"
```

---

### Task 13: Rewrite Projects.tsx

**Files:**
- Modify: `src/components/portfolio/Projects.tsx`

- [ ] **Step 1: Replace Projects.tsx with large-format editorial cards**

```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Last Trial",
    description: "An immersive 2D roguelike game published on Steam, built with Godot Engine.",
    tags: ["GDScript", "Godot", "Steam"],
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3927360/5e9f2a9f34e163454ee6a7108a23d5f7292bd6ed/ss_5e9f2a9f34e163454ee6a7108a23d5f7292bd6ed.1920x1080.jpg?t=1764249806",
    url: "https://store.steampowered.com/app/3927360/Last_Trial/",
  },
  {
    title: "Unis Market",
    description: "A platform for buying and selling products on the university campus.",
    tags: ["React", "Tailwind", "Supabase"],
    image: "https://i.ibb.co/8gbwhjpH/image.png",
    url: "https://unismarket.com",
  },
  {
    title: "Islamic Adkar App",
    description:
      "Continuously alarming for your prayers and duas. Built with Flutter for mobile.",
    tags: ["Flutter", "Mobile", "API"],
    image: "https://i.postimg.cc/L68C5XzM/image.png",
    url: "https://github.com/0xffvirus/islamicadkar",
  },
];

export function Projects() {
  return (
    <section id="projects">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="border-b border-[#1a1a1a] py-16 md:py-20"
        >
          <div className="container">
            {/* Title row */}
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-6">
              <h3 className="text-2xl md:text-3xl font-serif italic text-white flex items-center gap-3 group">
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 text-[#333] group-hover:text-white transition-colors duration-200" />
                </Link>
              </h3>
              <div className="flex gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[#777] text-[10px] uppercase tracking-[0.1em] font-sans"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Image */}
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative aspect-video border border-[#1a1a1a] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </Link>

            {/* Description */}
            <p className="text-[#777] text-sm font-sans mt-4 max-w-lg leading-relaxed">
              {project.description}
            </p>
          </div>
        </motion.div>
      ))}

      {/* View all link */}
      <div className="container py-8 border-b border-[#1a1a1a]">
        <Link
          href="https://github.com/0xffvirus"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#666] text-[11px] uppercase tracking-[0.1em] font-sans hover:text-white transition-colors duration-200"
        >
          View all projects →
        </Link>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/portfolio/Projects.tsx
git commit -m "feat: rewrite Projects with large-format editorial cards"
```

---

### Task 14: Rewrite Footer.tsx

**Files:**
- Modify: `src/components/portfolio/Footer.tsx`

- [ ] **Step 1: Replace Footer.tsx with minimal editorial footer**

```tsx
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1a1a1a] py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <a
            href="mailto:CEO@bahaanajjar.com"
            className="text-[#666] text-[13px] font-sans hover:text-white transition-colors duration-200"
          >
            CEO@bahaanajjar.com
          </a>

          <div className="flex gap-6">
            <Link
              href="https://github.com/0xffvirus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#777] text-[10px] uppercase tracking-[0.1em] font-sans hover:text-white transition-colors duration-200"
            >
              GitHub
            </Link>
            <Link
              href="https://twitter.com/ceobahaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#777] text-[10px] uppercase tracking-[0.1em] font-sans hover:text-white transition-colors duration-200"
            >
              Twitter
            </Link>
            <Link
              href="https://drive.google.com/your-cv-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#777] text-[10px] uppercase tracking-[0.1em] font-sans hover:text-white transition-colors duration-200"
            >
              CV
            </Link>
          </div>
        </div>

        <p className="text-[#333] text-[11px] font-sans text-center mt-8">
          © {currentYear} Bahaa Najjar
        </p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/portfolio/Footer.tsx
git commit -m "feat: rewrite Footer with minimal editorial style"
```

---

## Chunk 4: Cleanup & Verify

### Task 15: Remove devicons-react dependency

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Uninstall devicons-react**

```bash
npm uninstall devicons-react
```

- [ ] **Step 2: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: remove devicons-react (no longer used)"
```

---

### Task 16: Build and verify

- [ ] **Step 1: Run a full build**

```bash
cd /home/bahaa/Documents/0xffvirus.github.io && npx next build
```

Expected: Build succeeds with no errors. Warnings about unused packages are fine.

- [ ] **Step 2: Run dev server and visually verify**

```bash
npx next dev
```

Open http://localhost:3000 and verify:
- Dark background (#050505)
- Serif italic hero tagline (Playfair Display)
- Sans-serif nav/body text (Inter)
- Showreel placeholder block
- Marquee scrolling
- 3 projects with large images
- Experience strip
- Minimal footer
- Cursor light effect still works
- Mobile responsive (test at 375px width)

- [ ] **Step 3: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix: final adjustments from visual review"
```
