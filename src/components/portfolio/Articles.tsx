"use client";

import { motion } from "framer-motion";

export function Articles() {
  return (
    <motion.section
      id="articles"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-b border-[#1a1a1a] py-24 md:py-32"
    >
      <div className="container text-center">
        <span className="text-[#777] text-[11px] uppercase tracking-[0.25em] font-sans block mb-4">
          Articles
        </span>
        <h2 className="text-2xl md:text-3xl font-serif italic text-white">
          Coming soon.
        </h2>
        <p className="text-[#777] text-sm font-sans mt-4 max-w-md mx-auto leading-relaxed">
          I'm working on writing about software engineering, game development, and things I learn along the way.
        </p>
      </div>
    </motion.section>
  );
}
