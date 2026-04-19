"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowUpLeft } from "lucide-react";
import type { ArticleMeta } from "@/lib/article-format";
import { formatArticleDate, pickArticleLocale } from "@/lib/article-format";
import { useI18n } from "@/contexts/LanguageContext";

type Props = {
  articles: ArticleMeta[];
  heading?: string;
  emptyMessage?: string;
};

export function ArticleList({ articles, heading, emptyMessage }: Props) {
  const { lang, isRTL } = useI18n();
  const CornerIcon = isRTL ? ArrowUpLeft : ArrowUpRight;

  return (
    <motion.section
      id="articles"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-b border-[#1a1a1a] py-16 md:py-20"
    >
      {heading ? (
        <div className="container mb-10 md:mb-14">
          <span className="text-[#777] text-[11px] uppercase tracking-[0.25em] font-sans block">
            {heading}
          </span>
        </div>
      ) : null}

      {articles.length === 0 ? (
        <div className="container">
          <p className="text-[#777] text-sm font-sans max-w-md leading-relaxed">
            {emptyMessage ?? ""}
          </p>
        </div>
      ) : (
        <ul className="border-t border-[#1a1a1a]">
          {articles.map((article) => {
            const locale = pickArticleLocale(article, lang);
            return (
              <li key={article.slug} className="border-b border-[#1a1a1a]">
                <Link
                  href={`/articles/${article.slug}`}
                  className="group block py-8 md:py-10 transition-colors duration-200"
                >
                  <div className="container">
                    <div className="flex items-start justify-between gap-6">
                      <div className="min-w-0 flex-1">
                        <h3 className="text-2xl md:text-3xl font-serif italic text-white group-hover:text-[#ccc] transition-colors duration-200">
                          {locale.title}
                        </h3>
                        {locale.subtitle ? (
                          <p className="text-[#777] text-base md:text-sm font-sans mt-3 max-w-xl leading-relaxed">
                            {locale.subtitle}
                          </p>
                        ) : null}
                        {locale.excerpt && !locale.subtitle ? (
                          <p className="text-[#777] text-base md:text-sm font-sans mt-3 max-w-xl leading-relaxed">
                            {locale.excerpt}
                          </p>
                        ) : null}
                        <div className="flex flex-wrap gap-3 mt-5 text-[#666] text-[11px] uppercase tracking-[0.2em] font-sans">
                          {article.date ? (
                            <span>{formatArticleDate(article.date, lang)}</span>
                          ) : null}
                          {locale.readingTime ? (
                            <>
                              <span className="text-[#333]">·</span>
                              <span>{locale.readingTime}</span>
                            </>
                          ) : null}
                          {locale.tag ? (
                            <>
                              <span className="text-[#333]">·</span>
                              <span>{locale.tag}</span>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <CornerIcon className="w-5 h-5 text-[#222] group-hover:text-white transition-colors duration-200 mt-2 shrink-0" />
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </motion.section>
  );
}
