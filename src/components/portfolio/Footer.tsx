import Link from "next/link";
import { Github, Twitter, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='bg-background py-12 border-t-2 border-border'>
      <div className='container'>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold tracking-tight text-foreground uppercase hover:bg-foreground hover:text-background px-2 transition-colors">
              Bahaa<span className="font-normal">Najjar</span>
            </Link>
            <p className="text-muted-foreground mt-2 max-w-md font-mono text-sm">
              {`> Software Engineering Student at KFUPM.`}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/0xffvirus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground border border-transparent hover:border-foreground p-1 transition-all duration-0"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://twitter.com/ceobahaa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground border border-transparent hover:border-foreground p-1 transition-all duration-0"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
             
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              © {currentYear} Bahaa Najjar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
