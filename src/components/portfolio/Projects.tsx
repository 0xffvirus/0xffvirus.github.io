import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from 'next/link'


export function Projects() {
  const projects = [
    {
      title: "Warp Game",
      description: "An immersive gaming experience with advanced graphics and physics simulation.",
      tags: ["GDScript", "Godot Engine", "Game Development"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800&h=500",
      code: "https://warp-nine.vercel.app/"
    },
    {
      title: "Islamic Adkar App",
      description: "Continuously alarming for your prayers and duas | نساعدك في تذكيرك للصلاة والادعية",
      tags: ["Flutter", "Geolocation", "Mobile Development", "API Integration"],
      image: "https://i.postimg.cc/L68C5XzM/image.png",
      code: "https://github.com/0xffvirus/islamicadkar"
    },
    {
      title: "Expenser App",
      description: "App Created to help you Count your cash without counting it from the beginning again and again.",
      tags: ["Flutter", "Local Database", "Mobile Development"],
      image: "https://i.postimg.cc/C5mcJTpt/image.png",
      code: "https://github.com/0xffvirus/expenser"
    },
    {
      title: "CS2 Cheat Menu",
      description: "A cheat menu for the game Counter-Strike 2",
      tags: ["C#", "Reverse Engineering", "Game Hacking"],
      image: "https://i.postimg.cc/3wvbhc24/image.png",
      code: "https://github.com/0xffvirus/CS2_Menu"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background border-t border-border/10">
      <div className='container'>
        <div className='flex flex-col items-center text-center mb-12'>
          <h2 className='text-3xl font-bold tracking-tight mb-4 text-foreground'>Featured Projects</h2>
          <div className="w-16 h-1 bg-primary mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">
            Here are some of the projects I've worked on, showcasing my skills and experience in different technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-primary/10 hover:border-primary/30 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="bg-transparent border border-primary/30 text-primary hover:border-primary hover:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href={project.code} target="_blank" className='w-full'>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/30 hover:border-primary hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"

                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="https://github.com/0xffvirus" target="_blank">
            <Button
              variant="outline"
              size="lg"
              className="text-foreground border-primary/30 hover:border-primary hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
            >
              View All Projects
              <Github className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

    </section>
  );
}