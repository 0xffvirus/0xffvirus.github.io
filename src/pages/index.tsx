import Head from "next/head";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { Showreel } from "@/components/portfolio/Showreel";
import { Marquee } from "@/components/portfolio/Marquee";
import { Projects } from "@/components/portfolio/Projects";
import { ExperienceStrip } from "@/components/portfolio/ExperienceStrip";
import { Footer } from "@/components/portfolio/Footer";
import { CursorLight } from "@/components/portfolio/CursorLight";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bahaa Najjar — Software Engineer & Game Developer</title>
        <meta
          name="description"
          content="Portfolio of Bahaa Najjar — Software Engineer & Game Developer. Building digital experiences with code."
        />
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
        <Showreel />
        <Marquee />
        <Projects />
        <ExperienceStrip />
      </main>

      <Footer />
    </>
  );
}
