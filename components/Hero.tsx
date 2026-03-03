"use client";

import { useEffect, useState } from "react";

const FULL_TEXT = "Evan architects systems that outlive trends. Secure, scalable, AI-powered. Toronto.";
const SIGNATURE = "Security is not a feature. It's a foundation.";
const QUOTE = "Think in systems & strategic infrastructure.";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 40;
    let timeoutId: NodeJS.Timeout;
    let cursorInterval: NodeJS.Timeout;

    const typeText = () => {
      if (currentIndex < FULL_TEXT.length) {
        setDisplayedText(FULL_TEXT.substring(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeText, typingSpeed);
      } else {
        cursorInterval = setInterval(() => setShowCursor((prev) => !prev), 530);
      }
    };
    const startDelay = setTimeout(typeText, 800);
    return () => {
      clearTimeout(startDelay);
      clearTimeout(timeoutId);
      if (cursorInterval) clearInterval(cursorInterval);
    };
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

          <p className="text-hacker-green/90 text-lg md:text-xl mb-6 leading-relaxed border-l-2 border-hacker-green/40 pl-4 italic">
            {SIGNATURE}
          </p>
          <p className="text-hacker-cyan/80 text-base md:text-lg mb-6 pl-4">
            <span className="text-hacker-green/60">Evan:</span> &ldquo;{QUOTE}&rdquo;
          </p>

          <div className="bg-hacker-dark/50 border border-hacker-green/20 p-6 mb-10 min-h-[100px]">
            <p className="text-hacker-green/80 leading-relaxed">
              <span className="text-hacker-cyan/80">⟩</span>{" "}
              <span className="inline-block">
                {displayedText}
                <span className={`inline-block w-2 h-4 bg-hacker-green ml-0.5 align-middle ${showCursor ? "opacity-100" : "opacity-0"}`} />
              </span>
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="py-4 border border-hacker-green/20 text-hacker-green/70 text-sm">
              <div className="font-bold text-hacker-cyan/90 text-2xl">5+</div>
              <div className="mt-1">years</div>
            </div>
            <div className="py-4 border border-hacker-green/20 text-hacker-green/70 text-sm">
              <div className="font-bold text-hacker-cyan/90 text-2xl">50+</div>
              <div className="mt-1">deployments</div>
            </div>
            <div className="py-4 border border-hacker-green/20 text-hacker-green/70 text-sm">
              <div className="font-bold text-hacker-cyan/90 text-2xl">5+</div>
              <div className="mt-1">orgs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}