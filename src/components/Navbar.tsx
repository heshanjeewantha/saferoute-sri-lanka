import { useState, useEffect } from "react";
import { Menu, X, Shield, Sun, Moon } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#objectives", label: "Objectives" },
  { href: "#system", label: "System" },
  { href: "#features", label: "Features" },
  { href: "#results", label: "Results" },
  { href: "#team", label: "Team" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/90 backdrop-blur-lg shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 sm:py-4">
        <a href="#home" className="flex items-center gap-2">
          <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-accent" />
          <span className="font-display text-base font-bold sm:text-lg md:text-xl">
            <span className={scrolled ? "text-primary" : "text-primary-foreground"}>Safe</span>
            <span className={scrolled ? "text-accent" : "text-accent"}>Transit</span>
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary ${
                  scrolled ? "text-foreground" : "text-primary-foreground/80"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            className={`rounded-full p-2 transition-all hover:scale-110 ${
              scrolled
                ? "bg-secondary text-foreground hover:bg-primary/10"
                : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
            }`}
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Mobile toggle */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="bg-card/95 backdrop-blur-lg border-b border-border lg:hidden animate-fade-in">
          <ul className="container mx-auto flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;