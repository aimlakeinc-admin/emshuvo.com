"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col items-center justify-center font-sans">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 65, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          animation: "gridMove 20s linear infinite",
        }}
      />

      <div className="relative z-10 text-center px-4">
        {/* ASCII-style header */}
        <pre className="text-zinc-300 text-xs md:text-sm mb-6 tracking-widest whitespace-pre">
          {`╔═══════════════════════════════════════════════╗
║  INITIALIZING_MASTERPIECE  ·  EMSHUVO  ║
╚═══════════════════════════════════════════════╝`}
        </pre>

        <h1 className="text-2xl md:text-4xl font-bold text-blue-400 mb-6">
          Welcome to Evan&apos;s Heaven
        </h1>
        <p className="text-zinc-300 text-sm mb-8">Ha ha ha</p>

        {/* Progress bar */}
        <div className="w-64 md:w-96 mx-auto mb-3">
          <div className="h-1.5 bg-zinc-900 border border-white/10 rounded overflow-hidden">
            <div
              className="h-full bg-hacker-green transition-all duration-300 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </div>
          </div>
        </div>
        <p className="text-blue-300 font-bold text-sm">{progress}%</p>
      </div>

      {/* Scan line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-hacker-green/50 to-transparent animate-scan" />
      </div>

      {/* Corners */}
      <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-white/10" />
      <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-white/10" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-white/10" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-white/10" />
    </div>
  );
}
