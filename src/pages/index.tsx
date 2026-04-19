import type { GetStaticProps } from "next";
import Head from "next/head";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { Projects } from "@/components/portfolio/Projects";
import { Articles } from "@/components/portfolio/Articles";
import { ExperienceStrip } from "@/components/portfolio/ExperienceStrip";
import { Footer } from "@/components/portfolio/Footer";
import { CursorLight } from "@/components/portfolio/CursorLight";
import { useI18n } from "@/contexts/LanguageContext";
import { getAllArticles, type ArticleMeta } from "@/lib/articles";

type Props = {
  articles: ArticleMeta[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: { articles: getAllArticles().slice(0, 5) } };
};

export default function Home({ articles }: Props) {
  const { t, content } = useI18n();
  const pageTitle = `${t.brand.name} — ${content.hero.label}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={`${pageTitle}. ${content.hero.tagline}`} />
        <meta
          name="keywords"
          content="Bahaa Najjar, Software Engineer, Game Developer, Portfolio, Next.js, Flutter, Godot"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CursorLight />
      <Header />

      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Articles articles={articles} />
        <ExperienceStrip />
      </main>

      <Footer />
    </>
  );
}
