"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const LAYERS = [
  { href: "#home", label: "Home", slug: "home" },
  { href: "#about", label: "Identity", slug: "about" },
  { href: "#principles", label: "Principles", slug: "principles" },
  { href: "#expertise", label: "Capability", slug: "expertise" },
  { href: "#leadership", label: "Leadership", slug: "leadership" },
  { href: "#certifications", label: "Stack", slug: "certifications" },
  { href: "#companies", label: "Ventures", slug: "companies" },
  { href: "#industries", label: "Industries", slug: "industries" },
  { href: "#legacy", label: "Legacy", slug: "legacy" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLayer, setCurrentLayer] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          const sections = LAYERS.map((l) => ({ slug: l.slug, id: l.href.slice(1) }));
          const scrollY = window.scrollY + 120;
          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i].id);
            if (el && el.offsetTop <= scrollY) {
              setCurrentLayer(sections[i].slug);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
        ? "glass-nav py-3 border-b border-white/5 shadow-lg shadow-black/20"
        : "bg-transparent py-6 border-transparent"
        }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        {/* Logo / Brand */}
        <Link
          href="#home"
          className="group flex flex-col items-start gap-1"
        >
          <span className="text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
            Evan M. Shuvo
          </span>
          <span className="text-xs font-medium tracking-wide text-zinc-500 hidden sm:block uppercase"> {"// System Architect"}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/50 p-1 rounded-full border border-white/5 backdrop-blur-md">
          {LAYERS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${currentLayer === link.slug
                ? "text-white bg-white/10 shadow-sm"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Call to Action & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="mailto:emshuvo@aimlake.com"
            className="hidden md:flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-colors duration-300 shadow-md shadow-blue-500/20"
          >
            Connect
          </Link>
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-zinc-900 border border-white/10 hover:bg-zinc-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[1px]' : '-translate-y-1'}`} />
            <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[1px] absolute' : 'translate-y-1'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-in-out glass-nav border-t border-white/5 ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="flex flex-col py-4 px-6 space-y-2">
          {LAYERS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 text-sm font-medium rounded-xl transition-colors ${currentLayer === link.slug
                ? "bg-white/10 text-white"
                : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="mailto:emshuvo@aimlake.com"
            className="block px-4 py-3 mt-4 text-sm font-semibold text-center text-white bg-blue-600 rounded-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Connect
          </Link>
        </div>
      </div>
    </header>
  );
}
