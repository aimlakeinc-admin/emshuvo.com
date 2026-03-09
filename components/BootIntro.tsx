"use client";

import { useEffect, useState } from "react";

const BOOT_LINES: { text: string; delay: number; className?: string }[] = [
  { text: "> boot --profile evan", delay: 600 },
  { text: "", delay: 300 },
  { text: "Initializing vision...", delay: 500 },
  { text: "Loading mission...", delay: 500 },
  { text: "Mounting principles...", delay: 500 },
  { text: "Mapping consciousness...", delay: 500 },
  { text: "Spooling legacy...", delay: 500 },
  { text: "", delay: 400 },
  { text: "[ OK ] All layers mounted.", delay: 400, className: "text-blue-400 font-semibold" },
  { text: "", delay: 500 },
  { text: "Consciousness online.", delay: 600, className: "text-blue-300 font-bold" },
  { text: "Scroll to navigate layers.", delay: 400, className: "text-zinc-300 text-base md:text-sm" },
];

export default function BootIntro({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<"running" | "reveal" | "exit">("running");
  const [canSkip, setCanSkip] = useState(false);
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    if (currentIndex >= BOOT_LINES.length) {
      setPhase("reveal");
      const t = setTimeout(() => setPhase("exit"), 1800);
      const t2 = setTimeout(onComplete, 2400);
      return () => {
        clearTimeout(t);
        clearTimeout(t2);
      };
    }
    const line = BOOT_LINES[currentIndex];
    const timeout = setTimeout(() => {
      setVisibleLines((prev) => [...prev, line.text]);
      setCurrentIndex((i) => i + 1);
    }, line.delay);
    return () => clearTimeout(timeout);
  }, [currentIndex, onComplete]);

  useEffect(() => {
    const t = setTimeout(() => setCanSkip(true), 2500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setCursorOn((c) => !c), 520);
    return () => clearInterval(id);
  }, []);

  const handleSkip = () => {
    setPhase("exit");
    setTimeout(onComplete, 350);
  };

  if (phase === "exit") {
    return (
      <div
        className="fixed inset-0 z-[10000] bg-zinc-950 transition-opacity duration-500"
        style={{ opacity: 0, pointerEvents: "none" }}
        aria-hidden
      />
    );
  }

  return (
    <div className="fixed inset-0 z-[10000] flex flex-col bg-zinc-950 text-blue-400 font-sans text-base md:text-sm md:text-base overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.1) 2px, rgba(0,255,65,0.1) 4px)",
        }}
      />
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 py-12">
        <div className="max-w-xl mx-auto w-full">
          {visibleLines.map((line, i) => {
            const config = BOOT_LINES[i];
            return (
              <div
                key={i}
                className={`${config?.className ?? ""}`}
              >
                {line || "\u00A0"}
              </div>
            );
          })}
          {phase === "running" && (
            <div className="flex items-center gap-1 pt-1">
              <span className="text-blue-300">&gt;</span>
              <span className={`inline-block w-2.5 h-4 bg-hacker-green ${cursorOn ? "opacity-100" : "opacity-0"}`} />
            </div>
          )}
        </div>
      </div>
      {canSkip && phase === "running" && (
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
          <button
            type="button"
            onClick={handleSkip}
            className="px-4 py-2 text-zinc-300 hover:text-blue-400 text-sm md:text-xs border border-white/10 hover:border-white/10 transition-all"
          >
            skip boot
          </button>
        </div>
      )}
      <div className="absolute top-4 left-4 w-10 h-10 border-l border-t border-white/10" />
      <div className="absolute top-4 right-4 w-10 h-10 border-r border-t border-white/10" />
      <div className="absolute bottom-4 left-4 w-10 h-10 border-l border-b border-white/10" />
      <div className="absolute bottom-4 right-4 w-10 h-10 border-r border-b border-white/10" />
    </div>
  );
}
