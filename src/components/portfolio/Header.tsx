"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/contexts/LanguageContext";

export function Header() {
  const { t, lang, toggle, social } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.projects, href: "/#projects" },
    { label: t.nav.articles, href: "/articles" },
  ];

  const langAria = t.lang.switchTo;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 border-b border-[#1a1a1a] ${isScrolled ? "bg-[#050505]/80 backdrop-blur-md" : "bg-transparent"
          }`}
      >
      <div className="container flex items-center justify-between h-16">
        <Link
          href="/"
          aria-label={t.nav.home}
          className="flex items-center gap-3 hover:opacity-70 transition-opacity duration-200"
        >
          <Image
            src="/HorizentalLogoNoEnglishWHITE.png"
            alt=""
            width={187}
            height={58}
            priority
            className="h-7 w-auto"
          />
          <span aria-hidden="true" className="h-6 w-px bg-[#333]" />
          <span className="text-white text-[13px] uppercase tracking-[0.15em] font-sans">
            {t.brand.name}
          </span>
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
          <button
            type="button"
            onClick={toggle}
            aria-label={langAria}
            title={langAria}
            className="text-[#666] border border-[#333] p-2 hover:text-white hover:border-white transition-colors duration-200"
          >
            <Languages className="w-4 h-4" />
            <span className="sr-only">{langAria}</span>
          </button>
          <a
            href={`mailto:${social.email}`}
            className="text-white text-[11px] uppercase tracking-[0.1em] font-sans border border-[#333] px-4 py-1.5 hover:border-white transition-colors duration-200"
          >
            {t.nav.getInTouch}
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggle}
            aria-label={langAria}
            title={langAria}
            className="text-[#666] border border-[#333] p-1.5 hover:text-white hover:border-white transition-colors duration-200"
          >
            <Languages className="w-4 h-4" />
            <span className="sr-only">{langAria}</span>
          </button>
          <button
            className="text-white p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label={t.nav.openMenu}
          >
            <Menu className="w-5 h-5" />
            <span className="sr-only">{t.nav.openMenu}</span>
          </button>
        </div>
      </div>
      </header>

      {/* Mobile menu overlay — rendered outside <header> so the header's
          backdrop-filter doesn't create a containing block that traps the
          `fixed inset-0` overlay inside the 64px-tall header box. */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#050505] z-[60] md:hidden"
          >
            <div className="container flex flex-col h-full">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-3">
                  <Image
                    src="/HorizentalLogoNoEnglishWHITE.png"
                    alt=""
                    width={187}
                    height={58}
                    className="h-7 w-auto"
                  />
                  <span aria-hidden="true" className="h-6 w-px bg-[#333]" />
                  <span className="text-white text-[13px] uppercase tracking-[0.15em] font-sans">
                    {t.brand.name}
                  </span>
                </div>
                <button
                  className="text-white p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label={t.nav.closeMenu}
                >
                  <X className="w-5 h-5" />
                  <span className="sr-only">{t.nav.closeMenu}</span>
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
                    href={`mailto:${social.email}`}
                    className="text-white text-lg uppercase tracking-[0.1em] font-sans border border-[#333] px-6 py-2 hover:border-white transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.nav.getInTouch}
                  </a>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
