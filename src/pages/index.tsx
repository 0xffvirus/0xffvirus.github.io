import Head from 'next/head'
import { Header } from '@/components/portfolio/Header'
import { Hero } from '@/components/portfolio/Hero'
import { About } from '@/components/portfolio/About'
import { Projects } from '@/components/portfolio/Projects'
import { Contact } from '@/components/portfolio/Contact'
import { Footer } from '@/components/portfolio/Footer'
import { Experience } from '@/components/portfolio/Experience'
import { CursorLight } from '@/components/portfolio/CursorLight'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bahaa Najjar | Software Engineer</title>
        <meta name='description' content='Portfolio of Bahaa Najjar - Software Engineering Student at KFUPM' />
        <meta name='keywords' content='Bahaa Najjar, Software Engineer, KFUPM, Portfolio, Developer, Programming' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      
      <CursorLight />
      <Header />
      
      <main className="dark">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </>
  )
}