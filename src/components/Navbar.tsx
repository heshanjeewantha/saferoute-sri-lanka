import { useState, useEffect, useRef, useCallback } from "react";
import { FaShieldAlt, FaBars, FaTimes } from "react-icons/fa";
import SearchBar from "./SearchBar";

const navLinks = [
  { href: "#home",       label: "Home"      },
  { href: "#domain",     label: "Domain"    },
  { href: "#milestones", label: "Milestones"},
  { href: "#documents",  label: "Documents" },
  { href: "#slides",     label: "Slides"    },
  { href: "#team",       label: "About Us"  },
  { href: "#contact",    label: "Contact Us"},
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ctrl+K / Cmd+K shortcut to focus search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        const input = document.getElementById("global-search-input") as HTMLInputElement | null;
        input?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 lg:p-5 transition-all duration-300">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-3 transition-all duration-300">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 rounded-full bg-white/90 backdrop-blur-xl border border-gray-200/50 px-5 py-3 shadow-md hover:bg-white transition-all cursor-pointer z-10 shrink-0"
        >
          <FaShieldAlt className="h-5 w-5 text-[#ff4b12]" />
          <span className="font-display text-[13px] font-extrabold tracking-[0.12em] text-[#111] uppercase">
            safeTransit
          </span>
        </a>

        {/* Desktop nav links — centered */}
        <div className="hidden lg:flex flex-1 justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] pointer-events-none">
          <ul className="flex items-center justify-center gap-7 rounded-full bg-white/80 backdrop-blur-xl border border-gray-200/50 px-10 py-4 shadow-md pointer-events-auto">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[11px] font-bold tracking-[0.08em] text-gray-600 hover:text-[#ff4b12] transition-colors uppercase whitespace-nowrap"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Search + Contact CTA + mobile toggle */}
        <div className="flex items-center gap-3 z-10 shrink-0">
          {/* Desktop search bar */}
          <div className="hidden lg:block">
            <SearchBar />
          </div>

          {/* <a
            href="#contact"
            className="hidden sm:inline-flex rounded-full bg-[#ff4b12] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.08em] text-white shadow-lg transition-all hover:bg-[#e04310] hover:scale-105"
          >
            Contact Us
          </a> */}
          <button
            id="navbar-mobile-toggle"
            aria-label="Toggle menu"
            className="lg:hidden rounded-full bg-white/90 backdrop-blur-xl border border-gray-200/50 p-3.5 shadow-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes className="h-4 w-4 text-[#111]" /> : <FaBars className="h-4 w-4 text-[#111]" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mx-auto mt-4 max-w-6xl overflow-hidden rounded-[2rem] bg-white/95 backdrop-blur-3xl shadow-xl lg:hidden border border-gray-100">
          {/* Mobile search */}
          <div className="px-4 pt-4 pb-2">
            <SearchBar onClose={() => setIsOpen(false)} />
          </div>
          <ul className="flex flex-col p-4 pt-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center rounded-xl px-4 py-3.5 text-[12px] font-bold tracking-widest text-gray-600 hover:bg-orange-50 hover:text-[#ff4b12] transition-colors uppercase"
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
