import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import { SkillsScroll } from './SkillsScroll';

export function Hero() {
  return (
    <section className='relative min-h-screen flex flex-col justify-between pt-16 overflow-hidden bg-background'>
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.08),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(149,76,233,0.15),transparent_50%)]'></div>
      <div className='container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center flex-1'>
        <div className='space-y-6'>
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-transparent hover:border-primary/40 hover:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all duration-300">
            <span className="text-primary">Software Engineering Student</span>
          </div>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground'>
            Hi, I'm <span className='text-primary'>Bahaa Najjar</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
            A passionate software engineer building innovative solutions and exploring new technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              variant="outline"
              className="bg-primary border-primary/30 hover:border-primary hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
              asChild
            >
              <a href="#projects" className='text-white'>
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:border-primary hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
              asChild
            >
              <a href="#contact" className="text-foreground">Contact Me</a>
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-4">
            {[
              { href: "https://github.com/0xffvirus", Icon: Github, label: "GitHub" },
              { href: "https://twitter.com/ceobahaa", Icon: Twitter, label: "Twitter" }
            ].map(({ href, Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all duration-300"
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className='relative hidden lg:block'>
          <div className='absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-600/40 to-purple-600/30 opacity-75 blur'></div>
          <div className='relative bg-background rounded-2xl p-6 shadow-xl'>
            <div className='flex items-center mb-4'>
              <div className='flex space-x-2'>
                <div className='h-3 w-3 rounded-full bg-red-500'></div>
                <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
                <div className='h-3 w-3 rounded-full bg-green-500'></div>
              </div>
            </div>
            <pre className='text-sm font-mono'>
              <code className='text-foreground'>
                <span className='text-blue-400'>const</span> <span className='text-green-400'>developer</span> = {'{'}
                <br />
                {'  '}name: <span className='text-orange-300'>'Bahaa Najjar'</span>,
                <br />
                {'  '}education: <span className='text-orange-300'>'KFUPM'</span>,
                <br />
                {'  '}skills: [<span className='text-orange-300'>'Python'</span>, <span className='text-orange-300'>'Flutter'</span>, <span className='text-orange-300'>'C#'</span>, <span className='text-orange-300'>'Next.js'</span>, ...],
                <br />
                {'  '}projects: [<span className='text-orange-300'>'Warp Game'</span>, <span className='text-orange-300'>'Expenser App'</span>, <span className='text-orange-300'>'...'</span>],
                <br />

                {'}'};
              </code>
            </pre>
          </div>
        </div>
      </div>
      {/* Full-width Skills Scroll Animation */}

      <div className='w-full mt-8 mb-0'>

        <SkillsScroll />

      </div>
    </section>
  );
}