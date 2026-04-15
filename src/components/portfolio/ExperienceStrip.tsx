"use client";

import { motion } from "framer-motion";
import data from "@/data/portfolio.json";

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
        {data.experience.map((exp, i) => (
          <div key={i} className={i > 0 ? "md:text-right" : ""}>
            <span className="text-[#777] text-[9px] uppercase tracking-[0.15em] font-sans block">
              {exp.label}
            </span>
            <span className="text-white text-sm font-sans mt-1 block">
              {exp.role}
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
