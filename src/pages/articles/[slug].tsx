import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Header } from "@/components/portfolio/Header";
import { Footer } from "@/components/portfolio/Footer";
import { ArticleReader } from "@/components/articles/ArticleReader";
import { useI18n } from "@/contexts/LanguageContext";
import {
  getArticleBySlug,
  getArticleSlugs,
  type ArticleWithContent,
} from "@/lib/articles";

type Props = {
  article: ArticleWithContent;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getArticleSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug;
  if (typeof slug !== "string") return { notFound: true };
  const article = await getArticleBySlug(slug);
  return { props: { article } };
};

export default function ArticlePage({ article }: Props) {
  const { t, lang } = useI18n();
  const locale = lang === "ar" ? article.ar : article.en;
  const description = locale.excerpt || locale.subtitle || "";
  return (
    <>
      <Head>
        <title>{`${locale.title} — ${t.brand.name}`}</title>
        {description ? <meta name="description" content={description} /> : null}
      </Head>
      <Header />
      <div className="pt-16">
        <ArticleReader article={article} />
      </div>
      <Footer />
    </>
  );
}
