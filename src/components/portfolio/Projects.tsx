import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Warp Game",
      description: "An immersive gaming experience with advanced graphics and physics simulation.",
      tags: ["GDScript", "Godot Engine", "Game Development"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800&h=500",
    },
    {
      title: "Blockchain System",
      description: "A secure and efficient blockchain implementation for transparent transactions.",
      tags: ["Go", "Cryptography", "Distributed Systems"],
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=800&h=500",
    },
    {
      title: "Expenser App",
      description: "A comprehensive expense tracking application with intuitive UI and advanced analytics.",
      tags: ["Flutter", "Firebase", "Mobile Development"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800&h=500",
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
            <Card key={index} className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 flex flex-col">
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
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-primary/30 hover:border-primary hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="text-foreground border-primary/30 hover:border-primary hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
          >
            View All Projects
            <Github className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}