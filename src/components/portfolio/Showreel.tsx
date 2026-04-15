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
