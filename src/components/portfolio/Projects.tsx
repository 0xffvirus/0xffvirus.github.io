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
      code: "https://github.com/0xffvirus/"
    },
    {
      title: "Islamic Adkar App",
      description: "Continuously alarming for your prayers and duas | نساعدك في تذكيرك للصلاة والادعية",
      tags: ["Flutter", "Geolocation", "Mobile Development", "API Integration"],
      image: "https://private-user-images.githubusercontent.com/104843039/410034677-97872d7b-ceb4-4c51-a79a-bc4cb90aa683.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE3MjI4OTMsIm5iZiI6MTc0MTcyMjU5MywicGF0aCI6Ii8xMDQ4NDMwMzkvNDEwMDM0Njc3LTk3ODcyZDdiLWNlYjQtNGM1MS1hNzlhLWJjNGNiOTBhYTY4My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxMVQxOTQ5NTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lYzI3OTZiMGYxMzIyYmFiMGNlZDRmOWRkZDU0ZTM2YjEwNjZmNzZhNzgyNjc1MTZjNDYwZTA4YWYwMjJlOWM3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.sEGDx16quN5JStWDtGgL6tyZnUfyjtAwH92W1suCTwA",
      code: "https://github.com/0xffvirus/islamicadkar"
    },
    {
      title: "Expenser App",
      description: "App Created to help you Count your cash without counting it from the beginning again and again.",
      tags: ["Flutter", "Local Database", "Mobile Development"],
      image: "https://private-user-images.githubusercontent.com/104843039/410035563-572f2ded-8061-41e9-a3c5-651a31ec31ef.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE3MjI4NTcsIm5iZiI6MTc0MTcyMjU1NywicGF0aCI6Ii8xMDQ4NDMwMzkvNDEwMDM1NTYzLTU3MmYyZGVkLTgwNjEtNDFlOS1hM2M1LTY1MWEzMWVjMzFlZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxMVQxOTQ5MTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03NDc0ODI3NzViNzYzNzJmYmIyYmVlYzllY2ZhZjYwNzgyMjE2MjVlNGJiMzMwNjkyNmRhN2VkNTBhMGYxNzgzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.VXxp5YR88hBrh0EEgx-i3YqyAeGPLHEVxM4KzC4uN0I",
      code: "https://github.com/0xffvirus/expenser"
    },
    {
      title: "CS2 Cheat Menu",
      description: "A cheat menu for the game Counter-Strike 2",
      tags: ["C#", "Reverse Engineering", "Game Hacking"],
      image: "https://private-user-images.githubusercontent.com/104843039/410342047-361f4326-f5b1-4f4c-a249-f187ebc56b0a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE3MjI5OTAsIm5iZiI6MTc0MTcyMjY5MCwicGF0aCI6Ii8xMDQ4NDMwMzkvNDEwMzQyMDQ3LTM2MWY0MzI2LWY1YjEtNGY0Yy1hMjQ5LWYxODdlYmM1NmIwYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxMVQxOTUxMzBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mMmEwNTU3ZDVmY2U2YWVjMzdlMGViZTM3NjIwMDdjNmVmMWUzYjM3N2UwN2Q3NWVmNDYyZjJlMTg2Yzc3ODExJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.HuO_0zsqZU7GBbmWeaqNYd0jS6pQUg4XaTZI24cm-lI",
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
                <Link href={project.code} target="_blank" className='w-full'>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/30 hover:border-primary hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"

                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
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