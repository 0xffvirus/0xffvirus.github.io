import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";
import rehypePrettyCode, { type Options as PrettyCodeOptions } from "rehype-pretty-code";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import type { Lang } from "@/i18n/strings";
import type { ArticleLocaleMeta, ArticleMeta } from "./article-format";

export type { ArticleMeta, ArticleLocaleMeta } from "./article-format";
export { formatArticleDate, pickArticleLocale } from "./article-format";

export type ArticleLocaleWithSource = ArticleLocaleMeta & {
  source: MDXRemoteSerializeResult;
};

export type ArticleWithContent = {
  slug: string;
  date: string;
  en: ArticleLocaleWithSource;
  ar: ArticleLocaleWithSource;
};

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");
const PUBLIC_IMG_DIR = path.join(process.cwd(), "public", "articles");
const IMAGE_EXTS = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"]);
const LANGS: Lang[] = ["en", "ar"];

type RawFile = {
  data: Record<string, unknown>;
  content: string;
};

function localeFilePath(slug: string, lang: Lang): string {
  return path.join(ARTICLES_DIR, slug, `index.${lang}.mdx`);
}

function legacyFilePath(slug: string): string {
  return path.join(ARTICLES_DIR, slug, "index.mdx");
}

function readIfExists(file: string): RawFile | null {
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return { data: data as Record<string, unknown>, content };
}

function readLocale(slug: string, lang: Lang): RawFile | null {
  return readIfExists(localeFilePath(slug, lang));
}

function readLegacy(slug: string): RawFile | null {
  return readIfExists(legacyFilePath(slug));
}

function toLocaleMeta(raw: RawFile, fallbackTitle: string): ArticleLocaleMeta {
  const { data, content } = raw;
  return {
    title: String(data.title ?? fallbackTitle),
    subtitle: data.subtitle ? String(data.subtitle) : undefined,
    tag: String(data.tag ?? ""),
    excerpt: String(data.excerpt ?? ""),
    readingTime: readingTime(content).text,
  };
}

function syncImages(slug: string) {
  const srcDir = path.join(ARTICLES_DIR, slug);
  const outDir = path.join(PUBLIC_IMG_DIR, slug);
  if (!fs.existsSync(srcDir)) return;
  fs.mkdirSync(outDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir)) {
    const ext = path.extname(entry).toLowerCase();
    if (!IMAGE_EXTS.has(ext)) continue;
    fs.copyFileSync(path.join(srcDir, entry), path.join(outDir, entry));
  }
}

function rewriteImagePaths(body: string, slug: string) {
  return body.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
    const trimmed = src.trim();
    if (/^(https?:)?\/\//.test(trimmed) || trimmed.startsWith("/")) return match;
    const cleaned = trimmed.replace(/^\.\//, "");
    return `![${alt}](/articles/${slug}/${cleaned})`;
  });
}

function pickPrimaryRaw(slug: string): { raw: RawFile; lang: Lang | "legacy" } | null {
  for (const lang of LANGS) {
    const raw = readLocale(slug, lang);
    if (raw) return { raw, lang };
  }
  const legacy = readLegacy(slug);
  if (legacy) return { raw: legacy, lang: "legacy" };
  return null;
}

function resolveRawPerLocale(slug: string): {
  date: string;
  per: Record<Lang, RawFile>;
} | null {
  const primary = pickPrimaryRaw(slug);
  if (!primary) return null;

  const per = {} as Record<Lang, RawFile>;
  for (const lang of LANGS) {
    per[lang] = readLocale(slug, lang) ?? primary.raw;
  }

  const date = String(primary.raw.data.date ?? "");
  return { date, per };
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .filter((d) => {
      const hasLocale = LANGS.some((lang) =>
        fs.existsSync(localeFilePath(d.name, lang)),
      );
      const hasLegacy = fs.existsSync(legacyFilePath(d.name));
      return hasLocale || hasLegacy;
    })
    .map((d) => d.name);
}

export function getAllArticles(): ArticleMeta[] {
  return getArticleSlugs()
    .map<ArticleMeta | null>((slug) => {
      const resolved = resolveRawPerLocale(slug);
      if (!resolved) return null;
      return {
        slug,
        date: resolved.date,
        en: toLocaleMeta(resolved.per.en, slug),
        ar: toLocaleMeta(resolved.per.ar, slug),
      };
    })
    .filter((a): a is ArticleMeta => a !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getArticleBySlug(slug: string): Promise<ArticleWithContent> {
  const resolved = resolveRawPerLocale(slug);
  if (!resolved) throw new Error(`Article not found: ${slug}`);

  syncImages(slug);

  const prettyCodeOptions: Partial<PrettyCodeOptions> = {
    theme: "github-dark-dimmed",
    keepBackground: false,
  };

  async function serializeLocale(raw: RawFile): Promise<ArticleLocaleWithSource> {
    const rewritten = rewriteImagePaths(raw.content, slug);
    const source = await serialize(rewritten, {
      mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
      },
      parseFrontmatter: false,
    });
    return { ...toLocaleMeta(raw, slug), source };
  }

  const [en, ar] = await Promise.all([
    serializeLocale(resolved.per.en),
    serializeLocale(resolved.per.ar),
  ]);

  return {
    slug,
    date: resolved.date,
    en,
    ar,
  };
}
