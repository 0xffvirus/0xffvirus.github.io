"use client";

import { motion } from "framer-motion";
import data from "@/data/portfolio.json";

export function Hero() {
  const { label, tagline, cta } = data.hero;

  return (
    <section className="pt-32 pb-20 border-b border-[#1a1a1a]">
      <div className="container flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="text-[#777] text-[11px] uppercase tracking-[0.25em] font-sans mb-6"
        >
          {label}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white leading-[1.15] max-w-[600px]"
        >
          {tagline}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="mt-8"
        >
          <a
            href={cta.href}
            className="text-white text-[11px] uppercase tracking-[0.15em] font-sans border border-[#333] px-6 py-3 hover:border-white transition-colors duration-200 inline-block"
          >
            {cta.text}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
