"use client";

import { useEffect, useState, useRef } from "react";
import AsciiBanner from "./AsciiBanner";

const KALI_GREEN = "#00ff00";
const KALI_AMBER = "#ffb000";
const KALI_BG = "#0d1117";
const PROMPT = "root@emshuvo:~$ ";
const TYPING_MS = 42;
const CURSOR_BLINK_MS = 520;

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
  const [typedLength, setTypedLength] = useState(0);
  const [commandDone, setCommandDone] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [cursorOn, setCursorOn] = useState(true);
  const [kernelVisible, setKernelVisible] = useState(false);
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

  useEffect(() => {
    if (!inView) return;
    if (kernelInfo) {
      const t = setTimeout(() => setKernelVisible(true), 200);
      return () => clearTimeout(t);
    }
    setKernelVisible(true);
  }, [inView, kernelInfo]);

  useEffect(() => {
    if (!inView || !kernelVisible) return;
    if (typedLength < command.length) {
      const t = setTimeout(() => setTypedLength((n) => n + 1), TYPING_MS);
      return () => clearTimeout(t);
    }
    setCommandDone(true);
  }, [inView, kernelVisible, typedLength, command.length]);

  useEffect(() => {
    if (!commandDone) return;
    setProcessing(true);
    const t = setTimeout(() => {
      setProcessing(false);
      setShowOutput(true);
    }, 700);
    return () => clearTimeout(t);
  }, [commandDone]);

  useEffect(() => {
    const id = setInterval(() => setCursorOn((c) => !c), CURSOR_BLINK_MS);
    return () => clearInterval(id);
  }, []);

  const displayCommand = command.slice(0, typedLength);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="py-8 md:py-12 relative"
      style={{ background: "linear-gradient(180deg, #0a0e14 0%, #0d1117 100%)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {asciiTitle && <AsciiBanner title={asciiTitle} visible={inView} />}
        <div
          className="terminal-glow-pulse mx-auto max-w-5xl rounded-lg overflow-hidden border font-mono text-sm md:text-base transition-shadow duration-300"
          style={{
            backgroundColor: KALI_BG,
            borderColor: "rgba(0, 255, 0, 0.28)",
          }}
        >
          {/* Title bar */}
          <div
            className="flex items-center justify-between px-4 py-2.5 border-b"
            style={{
              backgroundColor: "rgba(20, 22, 28, 0.98)",
              borderColor: "rgba(0, 255, 0, 0.2)",
            }}
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="ml-3 text-xs font-medium opacity-80" style={{ color: KALI_GREEN }}>
                root@emshuvo:~ — {title}
              </span>
            </div>
          </div>

          {/* Terminal body */}
          <div
            className="relative p-4 md:p-6 min-h-[140px] overflow-hidden"
            style={{ color: KALI_GREEN }}
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                background:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.12) 2px, rgba(0,255,0,0.12) 4px)",
              }}
            />
            <div className="relative z-10">
              {kernelInfo && kernelLines && kernelVisible && (
                <div className="mb-3 space-y-1 opacity-90">
                  <div style={{ color: KALI_AMBER }}>$ {kernelLines[0]}</div>
                  <div className="text-green-300/90">{kernelLines[1]}</div>
                </div>
              )}

              {kernelVisible && (
                <div className={`flex flex-wrap items-center gap-0.5 ${kernelInfo ? "mt-2" : ""}`}>
                  <span style={{ color: KALI_AMBER }}>{PROMPT}</span>
                  <span>{displayCommand}</span>
                  {!commandDone && !processing && (
                    <span
                      className="inline-block w-2.5 h-4 ml-0.5 align-middle bg-current"
                      style={{
                        color: KALI_GREEN,
                        opacity: cursorOn ? 1 : 0,
                      }}
                    />
                  )}
                  {processing && (
                    <span className="ml-1 text-amber-400/90 inline-flex gap-0.5">
                      <span className="animate-pulse">.</span>
                      <span className="animate-pulse" style={{ animationDelay: "0.2s" }}>.</span>
                      <span className="animate-pulse" style={{ animationDelay: "0.4s" }}>.</span>
                    </span>
                  )}
                </div>
              )}

              {showOutput && (
                <>
                  {outputLines && outputLines.length > 0 && (
                    <div className="mt-4 space-y-1 text-green-300/95">
                      {outputLines.map((line, i) => (
                        <div
                          key={i}
                          className="terminal-output-line"
                          style={{
                            animationDelay: `${i * 80}ms`,
                            opacity: 0,
                          }}
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  )}
                  {children && (
                    <div
                      className="terminal-block-reveal mt-4 text-green-300/95 leading-relaxed"
                      style={{ opacity: 0 }}
                    >
                      {children}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
