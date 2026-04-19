import type { Lang } from "@/i18n/strings";

export type ArticleLocaleMeta = {
  title: string;
  subtitle?: string;
  tag: string;
  excerpt: string;
  readingTime: string;
};

export type ArticleMeta = {
  slug: string;
  date: string;
  en: ArticleLocaleMeta;
  ar: ArticleLocaleMeta;
};

export function formatArticleDate(iso: string, lang: Lang = "en"): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const locale = lang === "ar" ? "ar" : "en-US";
  return d.toLocaleDateString(locale, { month: "short", year: "numeric" });
}

export function pickArticleLocale<T extends { en: unknown; ar: unknown }>(
  article: T,
  lang: Lang,
): T["en"] {
  return (lang === "ar" ? article.ar : article.en) as T["en"];
}
