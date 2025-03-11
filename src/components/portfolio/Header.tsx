import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground hover:text-primary hover:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all duration-300">
          Bahaa<span className="text-primary">Najjar</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-foreground hover:text-primary hover:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all duration-300"
            >
              {item}
            </Link>
          ))}
          <Button
            variant="outline"
            size="sm"
            className=" hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
            asChild
          >
            <a href="#contact" className="text-foreground">Get In Touch</a>
          </Button>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 md:hidden">
          <div className="container flex flex-col h-full">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-xl font-bold tracking-tight">
                Bahaa<span className="text-primary">Najjar</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex flex-col items-center justify-center space-y-8 flex-1">
              <Link href="#about" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="#projects" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                Projects
              </Link>
              <Link href="#skills" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                Skills
              </Link>
              <Link href="#contact" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
              <Button variant="default" onClick={() => setIsMobileMenuOpen(false)} asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}