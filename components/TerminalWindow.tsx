"use client";

import { useEffect, useState, useRef } from "react";

export default function TerminalWindow({
  id,
  title,
  command,
  kernelInfo = false,
  kernelLines,
  outputLines,
  asciiTitle,
  children,
}: {
  id?: string;
  title: string;
  command: string;
  kernelInfo?: boolean;
  kernelLines?: [string, string];
  outputLines?: string[];
  asciiTitle?: string;
  children?: React.ReactNode;
}) {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="py-16 md:py-24 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 lg:py-6">
        <div
          className={`mx-auto max-w-5xl glass-panel rounded-2xl overflow-hidden transition-all duration-1000 ease-out border border-white/10 bg-zinc-900/40 shadow-xl ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          {/* Title bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center gap-3">
              {title}
              <div className="h-px w-12 bg-blue-500/50 hidden sm:block"></div>
            </h2>
          </div>

          {/* Body */}
          <div className="relative p-6 md:p-10 min-h-[140px]">
            {kernelInfo && kernelLines && (
              <div className="mb-8 space-y-2 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <div className="text-blue-400 font-semibold">{kernelLines[0]}</div>
                <div className="text-zinc-300">{kernelLines[1]}</div>
              </div>
            )}
            {outputLines && outputLines.length > 0 && (
              <div className="mt-4 space-y-2 text-zinc-300">
                {outputLines.map((line, i) => (
                  <div key={i} className="leading-relaxed">
                    {line}
                  </div>
                ))}
              </div>
            )}
            {children && (
              <div className="text-zinc-300 leading-relaxed mt-6">
                {children}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
