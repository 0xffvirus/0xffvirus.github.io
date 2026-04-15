"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import data from "@/data/portfolio.json";

export function Projects() {
  const { projects } = data;
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
          href={data.social.github}
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
