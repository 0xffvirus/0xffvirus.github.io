import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/70 backdrop-blur-md border-b border-border" : "bg-background/0 border-transparent"}`}>
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground uppercase hover:bg-foreground hover:text-background px-2 transition-colors">
          Bahaa<span className="font-normal">Najjar</span>_
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-foreground hover:underline decoration-2 underline-offset-4 uppercase tracking-widest"
            >
              {`[ ${item} ]`}
            </Link>
          ))}
          
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-none hover:bg-foreground hover:text-background transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}

          <Button
            variant="outline"
            size="sm"
            className="rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-colors uppercase font-bold"
            asChild
          >
            <a href="#contact" className="text-foreground">Get In Touch</a>
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-none hover:bg-foreground hover:text-background transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
          
          <Button variant="ghost" size="icon" className="rounded-none border border-foreground" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-6 w-6 text-foreground" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 md:hidden border-l-2 border-foreground">
          <div className="container flex flex-col h-full">
            <div className="flex items-center justify-between h-16 border-b border-border">
              <Link href="/" className="text-xl font-bold tracking-tight text-foreground uppercase">
                Bahaa<span className="">Najjar</span>
              </Link>
              <Button className='text-foreground rounded-none border border-foreground hover:bg-foreground hover:text-background' variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex flex-col items-center justify-center space-y-8 flex-1 text-foreground">
              <Link href="#about" className="text-2xl font-mono uppercase hover:bg-foreground hover:text-background px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {`> About`}
              </Link>
              <Link href="#projects" className="text-2xl font-mono uppercase hover:bg-foreground hover:text-background px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {`> Projects`}
              </Link>
              <Link href="#skills" className="text-2xl font-mono uppercase hover:bg-foreground hover:text-background px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {`> Skills`}
              </Link>
              <Link href="#contact" className="text-2xl font-mono uppercase hover:bg-foreground hover:text-background px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {`> Contact`}
              </Link>
              <Button className='text-foreground border-2 border-foreground rounded-none uppercase font-bold' variant="default" onClick={() => setIsMobileMenuOpen(false)} asChild>
                <a href="#contact">[ Get In Touch ]</a>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
