"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const LAYERS = [
  { href: "#home", label: "Home", slug: "home" },
  { href: "#about", label: "About", slug: "about" },
  { href: "#principles", label: "Principles", slug: "principles" },
  { href: "#expertise", label: "Expertise", slug: "expertise" },
  { href: "#leadership", label: "Leadership", slug: "leadership" },
  { href: "#certifications", label: "Skills", slug: "certifications" },
  { href: "#companies", label: "Ventures", slug: "companies" },
  { href: "#industries", label: "Industries", slug: "industries" },
  { href: "#legacy", label: "Legacy", slug: "legacy" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlug, setCurrentSlug] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          const scrollY = window.scrollY + 140;
          for (let i = LAYERS.length - 1; i >= 0; i--) {
            const el = document.getElementById(LAYERS[i].href.slice(1));
            if (el && el.offsetTop <= scrollY) {
              setCurrentSlug(LAYERS[i].slug);
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
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-nav py-3 shadow-2xl shadow-black/40" : "bg-transparent py-6"
        }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Brand */}
        <Link href="#home" className="group flex items-center gap-2">
          <div className="flex flex-col leading-none">
            <span className="text-lg md:text-base font-bold text-white tracking-tight">Mr. Evan</span>
            <span className="text-[10px] text-zinc-400 font-medium mt-0.5">Cloud · AI · Systems</span>
          </div>
        </Link>

        {/* Desktop Nav pill */}
        <nav className="hidden xl:flex items-center gap-0.5 glass rounded-full px-2 py-1.5 border border-white/5">
          {LAYERS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-3.5 py-1.5 text-sm md:text-xs font-semibold rounded-full transition-all duration-300 ${currentSlug === link.slug
                ? "text-white"
                : "text-zinc-300 hover:text-white"
                }`}
            >
              {currentSlug === link.slug && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-full bg-white/10"
                  transition={{ type: "spring", stiffness: 380, damping: 36 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right: CTA + burger */}
        <div className="flex items-center gap-3">
          <Link
            href="https://aimlake.com/contact-us"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-primary text-sm md:text-xs px-5 py-2.5"
          >
            Connect
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="xl:hidden w-10 h-10 rounded-full glass border border-white/8 flex flex-col items-center justify-center gap-1.5 hover:border-white/20 transition-colors"
            aria-label="Menu"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5 bg-white origin-center"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block h-0.5 w-5 bg-white"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5 bg-white origin-center"
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden overflow-hidden glass-nav border-t border-white/5"
          >
            <div className="section-container py-6 flex flex-col gap-1">
              {LAYERS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl text-base md:text-sm font-medium transition-colors ${currentSlug === link.slug
                      ? "bg-white/10 text-white"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="https://aimlake.com/contact-us"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary mt-4 text-base md:text-sm"
              >
                Connect
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
