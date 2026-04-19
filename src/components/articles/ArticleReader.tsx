"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote";
import { motion } from "framer-motion";
import type { ArticleWithContent } from "@/lib/articles";
import { formatArticleDate } from "@/lib/article-format";
import { useI18n } from "@/contexts/LanguageContext";
import { mdxComponents } from "./mdx-components";

type Props = {
  article: ArticleWithContent;
};

export function ArticleReader({ article }: Props) {
  const { t, lang, isRTL } = useI18n();
  const BackIcon = isRTL ? ArrowRight : ArrowLeft;
  const locale = lang === "ar" ? article.ar : article.en;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-16 md:py-24"
    >
      <div className="mx-auto max-w-[680px] px-6">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-[#666] text-[11px] uppercase tracking-[0.25em] font-sans hover:text-white transition-colors duration-200 mb-12"
        >
          <BackIcon className="w-3.5 h-3.5" />
          {t.articles.back}
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif italic text-white leading-[1.15]">
            {locale.title}
          </h1>
          {locale.subtitle ? (
            <p className="mt-5 text-xl md:text-2xl font-serif text-[#999] leading-snug">
              {locale.subtitle}
            </p>
          ) : null}
          <div className="flex flex-wrap gap-3 mt-8 text-[#666] text-[11px] uppercase tracking-[0.25em] font-sans">
            {article.date ? <span>{formatArticleDate(article.date, lang)}</span> : null}
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
        </header>

        <div className="article-body border-t border-[#1a1a1a] pt-10">
          <MDXRemote {...locale.source} components={mdxComponents} />
        </div>
      </div>
    </motion.article>
  );
}
