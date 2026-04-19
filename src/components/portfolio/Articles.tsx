"use client";

import Link from "next/link";
import { ArticleList } from "@/components/articles/ArticleList";
import { useI18n } from "@/contexts/LanguageContext";
import type { ArticleMeta } from "@/lib/article-format";

type Props = {
  articles: ArticleMeta[];
};

export function Articles({ articles }: Props) {
  const { t } = useI18n();
  return (
    <>
      <ArticleList
        articles={articles}
        heading={t.articles.sectionLabel}
        emptyMessage={t.articles.empty}
      />
      {articles.length > 0 ? (
        <div className="container py-8 border-b border-[#1a1a1a]">
          <Link
            href="/articles"
            className="text-[#666] text-[11px] uppercase tracking-[0.1em] font-sans hover:text-white transition-colors duration-200"
          >
            {t.articles.viewAll}
          </Link>
        </div>
      ) : null}
    </>
  );
}
