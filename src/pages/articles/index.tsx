import type { GetStaticProps } from "next";
import Head from "next/head";
import { Header } from "@/components/portfolio/Header";
import { Footer } from "@/components/portfolio/Footer";
import { ArticleList } from "@/components/articles/ArticleList";
import { useI18n } from "@/contexts/LanguageContext";
import { getAllArticles, type ArticleMeta } from "@/lib/articles";

type Props = {
  articles: ArticleMeta[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: { articles: getAllArticles() } };
};

export default function ArticlesIndexPage({ articles }: Props) {
  const { t } = useI18n();
  return (
    <>
      <Head>
        <title>{t.articles.metaPageTitle}</title>
        <meta name="description" content={t.articles.metaDescription} />
      </Head>
      <Header />
      <div className="pt-16">
        <section className="border-b border-[#1a1a1a] py-20 md:py-28">
          <div className="container">
            <span className="text-[#777] text-[11px] uppercase tracking-[0.25em] font-sans block mb-6">
              {t.articles.writingHeading}
            </span>
            <h1 className="hero-tagline text-4xl md:text-6xl font-serif italic text-white leading-[1.05] max-w-3xl">
              {t.articles.writingTagline}
            </h1>
          </div>
        </section>
        <ArticleList articles={articles} emptyMessage={t.articles.empty} />
      </div>
      <Footer />
    </>
  );
}
