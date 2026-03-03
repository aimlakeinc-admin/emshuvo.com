"use client";

import { useEffect, useState } from "react";

const SIGNATURE = "Think in systems & strategic infrastructure.";

const TERMINAL_LINES = [
  "5+ years",
  "50+ deployments",
  "5+ orgs",
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (visibleLines >= TERMINAL_LINES.length) return;
    const t = setTimeout(() => setVisibleLines((n) => n + 1), 600);
    return () => clearTimeout(t);
  }, [visibleLines]);

  useEffect(() => {
    const id = setInterval(() => setShowCursor((prev) => !prev), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-24 pb-16 relative overflow-hidden bg-hacker-black"
    >
      {/* Subtle binary — low opacity, calm */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.06]">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute text-hacker-green font-mono text-xs animate-code-rain"
            style={{
              left: `${(i * 5) % 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${4 + (i % 3)}s`,
            }}
          >
            {i % 2 === 0 ? "0" : "1"}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 relative z-10 font-mono">
        <div className={`max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>

          <div className="mb-8 text-hacker-cyan/60 text-sm">
            root@evan:~$ ./boot
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-hacker-green mb-8 leading-tight">
            EVAN MAHMUD SHUVO
          </h1>

          <p className="text-hacker-green/90 text-lg md:text-xl mb-10 leading-relaxed border-l-2 border-hacker-green/40 pl-4 italic">
            {SIGNATURE}
          </p>

          <div className="bg-hacker-dark/50 border border-hacker-green/20 p-6 min-h-[100px]">
            <div className="text-hacker-green/80 leading-relaxed font-mono space-y-1">
              {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
                <p key={i}>
                  <span className="text-hacker-cyan/80">⟩</span> {line}
                </p>
              ))}
              {visibleLines < TERMINAL_LINES.length && (
                <p>
                  <span className="text-hacker-cyan/80">⟩</span>
                  <span className={`inline-block w-2 h-4 bg-hacker-green ml-1 align-middle ${showCursor ? "opacity-100" : "opacity-0"}`} />
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}