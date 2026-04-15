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
