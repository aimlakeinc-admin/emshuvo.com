"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const LAYERS = [
  { href: "#home", label: "memory", slug: "home" },
  { href: "#about", label: "identity", slug: "about" },
  { href: "#principles", label: "principles", slug: "principles" },
  { href: "#expertise", label: "capability", slug: "expertise" },
  { href: "#leadership", label: "leadership", slug: "leadership" },
  { href: "#certifications", label: "stack", slug: "certifications" },
  { href: "#companies", label: "ventures", slug: "companies" },
  { href: "#industries", label: "industries", slug: "industries" },
  { href: "#legacy", label: "legacy", slug: "legacy" },
];

function useTorontoTime() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    const format = () => {
      const now = new Date();
      const toronto = new Date(now.toLocaleString("en-US", { timeZone: "America/Toronto" }));
      setTime(toronto.toLocaleTimeString("en-CA", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }));
      setDate(toronto.toLocaleDateString("en-CA", { weekday: "short", month: "short", day: "numeric" }));
    };
    format();
    const id = setInterval(format, 1000);
    return () => clearInterval(id);
  }, []);
  return { time, date };
}

function useUptime() {
  const [uptime, setUptime] = useState("0:00:00");
  useEffect(() => {
    const start = Date.now();
    const tick = () => {
      const s = Math.floor((Date.now() - start) / 1000);
      const h = Math.floor(s / 3600);
      const m = Math.floor((s % 3600) / 60);
      const sec = s % 60;
      setUptime(`${h}:${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return uptime;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLayer, setCurrentLayer] = useState("memory");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { time, date } = useTorontoTime();
  const uptime = useUptime();

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
      className={`fixed top-0 left-0 right-0 z-50 font-mono border-b transition-all duration-300 ${
        isScrolled ? "bg-hacker-black/95 border-hacker-green/30 backdrop-blur-sm py-2" : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4 md:gap-8 text-xs text-hacker-green/80">
          <span className="hidden sm:inline">accessing: {currentLayer}</span>
          <span className="hidden md:inline text-hacker-cyan/70">{date} {time}</span>
          <span className="hidden lg:inline text-hacker-green/50">uptime: {uptime}</span>
        </div>

        <nav className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {LAYERS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 py-1 text-xs font-medium transition-colors ${
                  currentLayer === link.slug ? "text-hacker-cyan" : "text-hacker-green/70 hover:text-hacker-green"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden p-2 text-hacker-green border border-hacker-green/40 hover:border-hacker-green text-xs"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle layers"
          >
            {isMobileMenuOpen ? "×" : "≡"}
          </button>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-hacker-black border-b border-hacker-green/30 py-4 px-4 z-50">
          <div className="text-hacker-cyan/70 text-xs mb-3">layers</div>
          <div className="flex flex-col gap-1">
            {LAYERS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 px-2 text-hacker-green hover:text-hacker-cyan text-sm border-l-2 border-transparent hover:border-hacker-green pl-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
