"use client";

import { useState, useEffect } from "react";

export default function ScrollBinary() {
  const [opacity, setOpacity] = useState(0.03);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          const max = 2000;
          const t = Math.min(1, y / max);
          setOpacity(0.03 + t * 0.06);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity }}
      aria-hidden
    >
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute text-blue-400 font-sans text-sm md:text-xs animate-code-rain"
          style={{
            left: `${(i * 8) % 100}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${5 + (i % 2)}s`,
          }}
        >
          {i % 2 === 0 ? "0" : "1"}
        </div>
      ))}
    </div>
  );
}