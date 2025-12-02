import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import { SkillsScroll } from './SkillsScroll';

export function Hero() {
  return (
    <section className='relative min-h-screen flex flex-col justify-between pt-16 overflow-hidden bg-background border-b border-border'>
      <div className='container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center flex-1 py-12'>
        <div className='space-y-6'>
          <div className="inline-flex items-center px-3 py-1 border border-foreground/20 bg-transparent">
            <span className="text-sm font-mono uppercase tracking-wider">Software Engineering Student</span>
          </div>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground uppercase'>
            Hi, I'm <span className='bg-foreground text-background px-2'>Bahaa Najjar</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl font-mono">
            {`> A passionate software engineer building innovative solutions and exploring new technologies.`}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              variant="outline"
              className="rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-colors duration-0 uppercase font-bold tracking-widest"
              asChild
            >
              <a href="#projects">
                [ View My Work ]
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-none border-2 border-foreground/50 hover:border-foreground hover:bg-transparent transition-colors duration-0 uppercase font-bold tracking-widest"
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
                className="text-muted-foreground hover:text-foreground border border-transparent hover:border-foreground/20 p-2 transition-all duration-0"
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className='relative hidden lg:block'>
          <div className='relative bg-black border-2 border-white p-6 shadow-[8px_8px_0_0_rgba(255,255,255,0.2)]'>
            <div className='flex items-center mb-4 border-b border-white/20 pb-2 justify-between'>
              <div className="text-xs uppercase tracking-widest">Terminal</div>
              <div className='flex space-x-2'>
                <div className='w-3 h-3 border border-white'></div>
                <div className='w-3 h-3 border border-white'></div>
                <div className='w-3 h-3 bg-white border border-white'></div>
              </div>
            </div>
            <pre className='text-sm font-mono overflow-x-auto text-white'>
              <code className='text-foreground'>
                <span className='text-gray-500'>// portfolio.config.js</span>
                <br />
                <span className='text-white'>const</span> <span className='text-white font-bold'>softwareEngineer</span> = {'{'}
                <br />
                {'  '}<span className='text-white'>name:</span> <span className='text-gray-300'>'Bahaa Najjar'</span>,
                <br />
                {'  '}<span className='text-white'>education:</span> <span className='text-gray-300'>'KFUPM'</span>,
                <br />
                {'  '}<span className='text-white'>skills:</span> [
                <br />
                {'    '}<span className='text-gray-300'>'Python'</span>,
                <br />
                {'    '}<span className='text-gray-300'>'Flutter'</span>,
                <br />
                {'    '}<span className='text-gray-300'>'C#'</span>,
                <br />
                {'    '}<span className='text-gray-300'>'Next.js'</span>
                <br />
                {'  '}],
                <br />
                {'  '}<span className='text-white'>status:</span> <span className='text-white bg-gray-800 px-1'>'READY_TO_WORK'</span>
                <br />
                {'}'};
              </code>
            </pre>
          </div>
        </div>
      </div>
      {/* Full-width Skills Scroll Animation */}

      <div className='w-full mt-8 mb-0 border-t border-border'>
        <SkillsScroll />
      </div>
    </section>
  );
}
