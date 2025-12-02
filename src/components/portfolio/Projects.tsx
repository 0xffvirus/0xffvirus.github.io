import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from 'next/link'


export function Projects() {
  const projects = [
    {
      title: "Last Trial",
      description: "An immersive gaming experience with advanced graphics and physics simulation.",
      tags: ["GDScript", "Godot Engine", "Game Development"],
      public_published: true,
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3927360/5e9f2a9f34e163454ee6a7108a23d5f7292bd6ed/ss_5e9f2a9f34e163454ee6a7108a23d5f7292bd6ed.1920x1080.jpg?t=1764249806",
      code: "https://store.steampowered.com/app/3927360/Last_Trial/"
    },
    {
      title: "Unis Market",
      description: "A platform for buying and selling products on the university campus.",
      tags: ["React", "Tailwind CSS", "shadcn/ui", "Supabase", "TypeScript"],
      public_published: true,

      image: "https://i.ibb.co/8gbwhjpH/image.png",
      code: "https://unismarket.com"
    },
    {
      title: "Islamic Adkar App",
      description: "Continuously alarming for your prayers and duas | نساعدك في تذكيرك للصلاة والادعية",
      tags: ["Flutter", "Geolocation", "Mobile Development", "API Integration"],
      public_published: false,
      image: "https://i.postimg.cc/L68C5XzM/image.png",
      code: "https://github.com/0xffvirus/islamicadkar"
    },
    {
      title: "Expenser App",
      description: "App Created to help you Count your cash without counting it from the beginning again and again.",
      tags: ["Flutter", "Local Database", "Mobile Development"],
      public_published: false,
      image: "https://i.postimg.cc/C5mcJTpt/image.png",
      code: "https://github.com/0xffvirus/expenser"
    },
    {
      title: "CS2 Cheat Menu",
      description: "A cheat menu for the game Counter-Strike 2",
      tags: ["C#", "Reverse Engineering", "Game Hacking"],
      public_published: false,
      image: "https://i.postimg.cc/3wvbhc24/image.png",
      code: "https://github.com/0xffvirus/CS2_Menu"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background border-t border-border">
      <div className='container'>
        <div className='flex flex-col items-center text-center mb-12'>
          <h2 className='text-3xl font-bold tracking-tight mb-4 text-foreground uppercase'>Featured Projects</h2>
          <div className="w-16 h-1 bg-foreground mb-6"></div>
          <p className="text-muted-foreground max-w-2xl font-mono">
            {`> Here are some of the projects I've worked on, showcasing my skills and experience in different technologies.`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-2 border-border hover:border-foreground transition-colors duration-0 flex flex-col rounded-none">
              <div className="relative h-48 overflow-hidden border-b-2 border-border">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>{`[ ${project.title} ] ${project.public_published ? <span className="text-green-500">Public</span> : <span className="text-red-500">Private</span>}`}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="bg-transparent border border-foreground/50 text-foreground hover:bg-foreground hover:text-background transition-colors duration-0"
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
                    className="w-full border-2 border-foreground/30 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-0 uppercase font-bold"

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
              className="text-foreground border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-0 uppercase font-bold"
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
