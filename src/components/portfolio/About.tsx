import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Briefcase } from "lucide-react";

export function About() {
  return (
    <section id='about' className='py-20 bg-background border-t border-border'>
      <div className='container'>
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-foreground uppercase">About Me</h2>
          <div className="w-16 h-1 bg-foreground mb-6"></div>
          <p className="text-muted-foreground max-w-2xl font-mono">
            {`> I'm a Software Engineering student at KFUPM with a passion for building innovative solutions and exploring new technologies.`}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <Card className='bg-card border-2 border-border hover:border-foreground transition-all duration-0 rounded-none'>
            <CardContent className='p-6'>
              <div className="w-12 h-12 flex items-center justify-center mb-4 border border-foreground">
                <GraduationCap className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase">Education</h3>
              <p className="text-muted-foreground font-mono text-sm">
                Currently pursuing a degree in Software Engineering at King Fahd University of Petroleum and Minerals (KFUPM).
              </p>
            </CardContent>
          </Card>

          <Card className='bg-card border-2 border-border hover:border-foreground transition-all duration-0 rounded-none'>
            <CardContent className='p-6'>
              <div className="w-12 h-12 flex items-center justify-center mb-4 border border-foreground">
                <Code className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase">Technical Skills</h3>
              <p className="text-muted-foreground font-mono text-sm">
                Proficient in multiple programming languages and frameworks including Python, Java, C#, C++, Next.js, and Flutter.
              </p>
            </CardContent>
          </Card>

          <Card className='bg-card border-2 border-border hover:border-foreground transition-all duration-0 rounded-none'>
            <CardContent className='p-6'>
              <div className="w-12 h-12 flex items-center justify-center mb-4 border border-foreground">
                <Briefcase className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase">Experience</h3>
              <p className="text-muted-foreground font-mono text-sm">
                Worked on various projects including Warp Game, Blockchain systems, and Expenser app, gaining hands-on experience in different technologies.
              </p>
            </CardContent>
          </Card>
        </div>


      </div>
    </section>
  );
}
