"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "00_HOME" },
    { href: "#about", label: "01_ABOUT" },
    { href: "#expertise", label: "02_EXPERTISE" },
    { href: "#companies", label: "03_COMPANIES" },
    { href: "#certifications", label: "04_CERTS" },
    { href: "#industries", label: "05_INDUSTRIES" },
    { href: "#contact", label: "06_CONTACT" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center font-mono border-b transition-all duration-300 ${isScrolled ? "bg-hacker-black/90 border-hacker-green/50 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,255,65,0.15)] py-2" : "bg-transparent border-transparent py-4"}`}>
      <div className="w-full max-w-6xl px-4 flex justify-between items-center">
        {/* Terminal 'OS' Name or Host */}
        <div className="text-hacker-cyan font-bold text-lg hidden md:block">
          root@emshuvo:~#
        </div>

        <nav className="flex-1 flex justify-end md:justify-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-2 py-1 text-hacker-green font-bold text-sm lg:text-base hover:bg-hacker-green hover:text-hacker-black transition-colors duration-200 border border-transparent hover:border-hacker-green"
              >
                [{link.label}]
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-hacker-green border border-hacker-green hover:bg-hacker-green hover:text-hacker-black transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? "[X] CLOSE" : "[=] MENU"}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-full left-0 right-0 bg-hacker-black border-b border-hacker-green p-4 z-50">
          <div className="flex flex-col space-y-2">
            <div className="text-hacker-cyan font-bold text-sm mb-4 border-b border-hacker-green/30 pb-2">
              root@emshuvo:~# ls -la /nav/
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 px-4 text-hacker-green hover:bg-hacker-green hover:text-hacker-black font-bold transition-colors border border-transparent hover:border-hacker-green"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ./{link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

