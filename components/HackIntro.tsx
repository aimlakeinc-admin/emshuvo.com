"use client";

import { useEffect, useState } from "react";

const LINES: { text: string; delay: number; className?: string }[] = [
  { text: "> CONNECTION ESTABLISHED", delay: 400 },
  { text: "> SCANNING TARGET...", delay: 800 },
  { text: "", delay: 200 },
  { text: "⚠ WARNING: UNAUTHORIZED ACCESS DETECTED", delay: 600, className: "text-red-400 font-bold" },
  { text: "> TARGET LOCKED: [VISITOR]", delay: 700 },
  { text: "> IP TRACE: ***.***.***.xxx", delay: 500 },
  { text: "", delay: 300 },
  { text: "> BREACHING FIREWALL... [████████░░] 80%", delay: 900 },
  { text: "> BYPASSING ENCRYPTION...", delay: 700 },
  { text: "> EXTRACTING DATA STREAMS...", delay: 800 },
  { text: "", delay: 400 },
  { text: "> DECRYPTING PAYLOAD...", delay: 600 },
  { text: "> ACCESS GRANTED.", delay: 500, className: "text-green-400 font-bold" },
  { text: "", delay: 600 },
  { text: "> INITIALIZING PORTFOLIO INTERFACE...", delay: 800 },
  { text: "", delay: 400 },
  { text: "WELCOME TO EVAN MAHMUD SHUVO", delay: 500, className: "text-cyan-400 text-xl md:text-2xl font-bold" },
  { text: "Cloud Security · SysAdmin · Full-Stack · AI", delay: 400, className: "text-gray-400" },
  { text: "", delay: 300 },
  { text: "This was a showcase of Evan's expertise. Scroll to explore.", delay: 600, className: "text-purple-300/90 italic" },
  { text: "CREATIVITY · PRODUCTIVITY · ENGINEERING", delay: 400, className: "text-green-400/80 text-base md:text-sm tracking-widest" },
];

const FAKE_IPS = ["192.168.4.xxx", "10.0.2.xxx", "172.16.xxx.1"];

export default function HackIntro({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<"running" | "reveal" | "exit">("running");
  const [canSkip, setCanSkip] = useState(false);
  const [cursorBlink, setCursorBlink] = useState(true);

  useEffect(() => {
    if (currentIndex >= LINES.length) {
      setPhase("reveal");
      const t = setTimeout(() => setPhase("exit"), 2200);
      const t2 = setTimeout(onComplete, 2800);
      return () => {
        clearTimeout(t);
        clearTimeout(t2);
      };
    }

    const line = LINES[currentIndex];
    const resolvedText = line.text.includes("***") 
      ? line.text.replace("***.***.***.xxx", FAKE_IPS[Math.floor(Math.random() * FAKE_IPS.length)])
      : line.text;

    const timeout = setTimeout(() => {
      setVisibleLines((prev) => [...prev, resolvedText]);
      setCurrentIndex((i) => i + 1);
    }, line.delay);

    return () => clearTimeout(timeout);
  }, [currentIndex, onComplete]);

  useEffect(() => {
    const t = setTimeout(() => setCanSkip(true), 3500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setCursorBlink((b) => !b), 530);
    return () => clearInterval(id);
  }, []);

  const handleSkip = () => {
    setPhase("exit");
    setTimeout(onComplete, 400);
  };

  if (phase === "exit") {
    return (
      <div
        className="fixed inset-0 z-[9998] bg-black transition-opacity duration-500"
        style={{ opacity: 0, pointerEvents: "none" }}
        aria-hidden
      />
    );
  }

  return (
    <div
      className="fixed inset-0 z-[10000] flex flex-col bg-black text-green-400/95 overflow-hidden font-sans text-base md:text-sm md:text-base select-none"
      role="presentation"
      aria-label="Cybersecurity showcase intro"
    >
      {/* Scan lines overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] z-10"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
        }}
      />
      {/* Moving scan line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent animate-scan" style={{ animationDuration: "2.5s" }} />
      </div>
      {/* Flicker overlay */}
      <div className="absolute inset-0 pointer-events-none bg-black/20 z-10 animate-pulse opacity-30" style={{ animationDuration: "3s" }} />

      {/* Red alert glow */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none opacity-40 z-0"
        style={{
          background: "linear-gradient(180deg, rgba(220,38,38,0.15) 0%, transparent 100%)",
        }}
      />

      {/* Terminal content */}
      <div className="relative z-20 flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-12 py-12">
        <div className="max-w-2xl mx-auto w-full">
          {/* Header */}
          <div className="mb-6 flex items-center gap-2 text-red-400/80 text-sm md:text-xs uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            SECURE CONNECTION — ENCRYPTED
          </div>

          <div className="space-y-1 min-h-[320px]">
            {visibleLines.map((line, i) => {
              const config = LINES[i];
              const isWarning = config?.className?.includes("text-red");
              const isSuccess = config?.className?.includes("text-green");
              const isTitle = config?.className?.includes("text-2xl");
              const isSub = config?.className?.includes("text-gray");
              const isItalic = config?.className?.includes("italic");
              return (
                <div
                  key={i}
                  className={`animate-fade-in-up ${
                    isWarning ? "text-red-400 font-bold" : ""
                  } ${isSuccess ? "text-green-400 font-bold" : ""} ${
                    isTitle ? "text-cyan-400 text-xl md:text-2xl font-bold mt-4" : ""
                  } ${isSub ? "text-gray-400" : ""} ${isItalic ? "text-purple-300/90 italic" : ""}`}
                  style={{ animationDelay: "0.1s" }}
                >
                  {line || "\u00A0"}
                </div>
              );
            })}
            {phase === "running" && (
              <div className="flex items-center gap-1 pt-1">
                <span className="text-green-400">&gt;</span>
                <span className={`inline-block w-2 h-4 bg-green-400 ${cursorBlink ? "opacity-100" : "opacity-0"}`} />
              </div>
            )}
          </div>

          {phase === "reveal" && (
            <p className="text-cyan-400/90 text-center mt-6 animate-fade-in-up">
              Entering portfolio...
            </p>
          )}
        </div>
      </div>

      {/* Skip */}
      {canSkip && phase === "running" && (
        <div className="absolute bottom-6 left-0 right-0 flex justify-center z-30">
          <button
            type="button"
            onClick={handleSkip}
            className="px-6 py-2 rounded-lg border border-gray-600 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 text-base md:text-sm"
          >
            Skip intro →
          </button>
        </div>
      )}

      {/* Corner brackets */}
      <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-green-500/40 z-20" />
      <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-green-500/40 z-20" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-green-500/40 z-20" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-green-500/40 z-20" />
    </div>
  );
}
