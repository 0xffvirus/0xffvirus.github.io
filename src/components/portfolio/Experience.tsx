import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: 'BestCircle Co.',
      role: 'Software Developer (Intern)',
      period: 'Feb 2025 – present',
      description: 'Worked on an AI Project Manager Assistant. Made the website using NextJS, Tailwindcss.',
      skills: ['Next.js', 'Tailwind CSS', 'AI Integration'],
    },
    {
      company: 'ByteVectors Studio',
      role: 'Co-Founder, CTO',
      period: 'Nov 2024 - present',
      description: 'In process of making a game called Warp using Godot Engine.',
      skills: ['Godot Engine', 'Game Development', 'Project Management'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background border-t border-border">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-foreground uppercase">Experience</h2>
          <div className="w-16 h-1 bg-foreground mb-6"></div>
          <p className="text-muted-foreground max-w-2xl font-mono">
            {`> My professional journey and projects that have shaped my career.`}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative space-y-8">
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-border border-r border-dashed border-foreground/50"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20">
                <div className="absolute left-[29px] top-3 w-4 h-4 border-2 border-foreground bg-background"></div>
                <Card className="bg-card border-2 border-border hover:border-foreground transition-all duration-0 rounded-none">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold uppercase">{exp.company}</h3>
                        <p className="text-foreground font-mono text-sm">{`> ${exp.role}`}</p>
                      </div>
                      <div className="flex items-center text-muted-foreground mt-2 md:mt-0 font-mono text-xs">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 font-mono text-sm">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="bg-transparent border border-foreground/50 text-foreground hover:bg-foreground hover:text-background transition-colors duration-0"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
