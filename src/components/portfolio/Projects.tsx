"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/contexts/LanguageContext";

export function Projects() {
  const { content, social, t } = useI18n();
  const { projects } = content;
  return (
    <section id="projects" className="border-b border-[#1a1a1a]">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 md:gap-y-20">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
              className="group"
            >
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-[4/3] border border-[#1a1a1a] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </Link>

              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="text-xl md:text-2xl font-serif italic text-white">
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 text-[#333] group-hover:text-white transition-colors duration-200" />
                  </Link>
                </h3>
                <div className="flex gap-3 shrink-0">
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

              <p className="text-[#777] text-sm font-sans mt-3 leading-relaxed">
                {project.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="container py-8 border-t border-[#1a1a1a]">
        <Link
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#666] text-[11px] uppercase tracking-[0.1em] font-sans hover:text-white transition-colors duration-200"
        >
          {t.projects.viewAll}
        </Link>
      </div>
    </section>
  );
}
