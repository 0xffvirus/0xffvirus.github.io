import Link from "next/link";
import { Github, Twitter, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='bg-background py-12 border-t border-border/10'>
      <div className='container'>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold tracking-tight text-white">
              Bahaa<span className="text-primary">Najjar</span>
            </Link>
            <p className="text-muted-foreground mt-2 max-w-md">
              Software Engineering Student at KFUPM, passionate about building innovative solutions.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/0xffvirus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://twitter.com/ceobahaa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a 
                href="https://instagram.com/1zsb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Bahaa Najjar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}