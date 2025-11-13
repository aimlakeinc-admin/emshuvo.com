"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#expertise", label: "Expertise" },
    { href: "#companies", label: "Companies" },
    { href: "#certifications", label: "Certifications" },
    { href: "#industries", label: "Industries" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4 px-4">
      <nav
        className={`relative mx-auto transition-all duration-700 ease-out ${
          isScrolled
            ? "w-full max-w-4xl h-20 px-8"
            : "w-auto h-16 px-6"
        } ${isMobileMenuOpen ? "overflow-visible" : ""}`}
        style={{
          transitionProperty: 'width, height, padding',
          willChange: 'width, height, padding',
        }}
      >
        {/* Modern Glass Background */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-700 ease-out ${
            isScrolled
              ? "backdrop-blur-xl border shadow-lg"
              : "backdrop-blur-lg border shadow-md"
          }`}
          style={{
            background: isScrolled
              ? "linear-gradient(135deg, rgba(5, 5, 15, 0.7) 0%, rgba(34, 211, 238, 0.1) 50%, rgba(168, 85, 247, 0.1) 100%)"
              : "linear-gradient(135deg, rgba(5, 5, 15, 0.6) 0%, rgba(34, 211, 238, 0.08) 50%, rgba(168, 85, 247, 0.08) 100%)",
            borderColor: isScrolled ? "rgba(34, 211, 238, 0.3)" : "rgba(34, 211, 238, 0.2)",
            boxShadow: isScrolled
              ? "0 8px 32px 0 rgba(34, 211, 238, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)"
              : "0 4px 16px 0 rgba(34, 211, 238, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
            transitionProperty: 'backdrop-filter, border-color, box-shadow, background',
            willChange: 'backdrop-filter, border-color, box-shadow, background',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 lg:px-6 py-2 text-gray-200 font-bold text-sm lg:text-base transition-all duration-300 group"
                  style={{ fontFamily: 'var(--font-pt-sans-narrow)', fontWeight: 700 }}
                >
                  {/* Hover effect background */}
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Text */}
                  <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300">
                    {link.label}
                  </span>
                  
                  {/* Bottom border on hover */}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full text-gray-200 hover:text-cyan-300 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <>
              {/* Backdrop overlay */}
              <div 
                className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[55]"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Mobile Menu */}
              <div className="md:hidden fixed top-20 left-4 right-4 rounded-2xl backdrop-blur-xl border shadow-2xl py-4 px-4 z-[60] animate-fade-in-up"
                style={{
                  background: "linear-gradient(135deg, rgba(5, 5, 15, 0.95) 0%, rgba(34, 211, 238, 0.15) 50%, rgba(168, 85, 247, 0.15) 100%)",
                  borderColor: "rgba(34, 211, 238, 0.4)",
                }}
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-3 px-4 text-gray-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-300 hover:via-purple-300 hover:to-pink-300 font-bold transition-all rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:via-purple-500/10 hover:to-pink-500/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </>
          )}
      </nav>
    </header>
  );
}

