import { useState, useEffect } from "react";
import { FaShieldAlt, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "VR LIBRARY" },
  { href: "#about", label: "ANALYTICS" },
  { href: "#system", label: "CUSTOM VR" },
  { href: "#features", label: "PRICING" },
  { href: "#team", label: "SUPPORT" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 lg:p-6 transition-all duration-300">
      <div className={`mx-auto flex max-w-[1400px] items-center justify-between gap-3 transition-all duration-300`}>
        
        {/* Left Module - Logo */}
        <a href="#home" className="flex items-center gap-3 rounded-full bg-white/90 backdrop-blur-xl border border-gray-200/50 px-6 py-3.5 shadow-md hover:bg-white transition-all cursor-pointer z-10 shrink-0">
          <FaShieldAlt className="h-5 w-5 text-[#ff4b12]" />
          <span className="font-display text-[13px] font-extrabold tracking-[0.15em] text-[#111] uppercase mt-[1px]">
            SafeTransit
          </span>
        </a>

        {/* Middle Module - Desktop Links */}
        <div className="hidden lg:flex flex-1 justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] pointer-events-none">
          <ul className="flex items-center justify-center gap-10 rounded-full bg-white/70 backdrop-blur-xl border border-gray-200/50 px-12 py-4 shadow-md pointer-events-auto">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[11px] font-bold tracking-[0.1em] text-gray-600 hover:text-[#111] transition-colors uppercase"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Module - Buttons & Mobile Toggle */}
        <div className="flex items-center gap-3 z-10 shrink-0">
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-[#ff4b12] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-lg transition-all hover:bg-[#e04310] hover:scale-105"
            >
              Contact Sales
            </a>
            <a
              href="#login"
              className="rounded-full bg-white px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#111] shadow-md border border-gray-100 transition-transform hover:bg-gray-50 hover:scale-105"
            >
              Login
            </a>
          </div>

          <button
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
          <ul className="flex flex-col p-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-4 text-xs font-bold tracking-widest text-gray-600 hover:bg-gray-50 hover:text-[#111]"
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
