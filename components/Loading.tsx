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
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(cyan 1px, transparent 1px),
              linear-gradient(90deg, cyan 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }} 
        />
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center">
        {/* Welcome text */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-2">
            <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
              Welcome to Evan&apos;s Heaven
            </span>
          </h1>
          <div className="text-xl md:text-2xl font-display text-purple-400 mt-2">
            <span className="animate-pulse">Ha ha ha</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 md:w-96 mx-auto mb-4">
          <div className="h-2 bg-gray-900 border border-cyan-400/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-300 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse" />
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_white]" />
            </div>
          </div>
        </div>

        {/* Progress percentage */}
        <div className="text-cyan-400 font-display text-lg font-bold">
          {progress}%
        </div>

        {/* Scanning lines effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan" />
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-400" />
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-cyan-400" />
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-cyan-400" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyan-400" />
    </div>
  );
}

