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
    { label: "Articles", href: "#articles" },
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
