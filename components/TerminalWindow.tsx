"use client";

const KALI_GREEN = "#00ff00";
const KALI_AMBER = "#ffb000";
const KALI_BG = "#0d1117";

export default function TerminalWindow({
  id,
  title,
  command,
  children,
  kernelInfo = true,
}: {
  id?: string;
  title: string;
  command: string;
  children: React.ReactNode;
  kernelInfo?: boolean;
}) {
  return (
    <section
      id={id}
      className="py-6 relative"
      style={{ background: "linear-gradient(180deg, #0a0e14 0%, #0d1117 100%)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div
          className="mx-auto max-w-5xl rounded-lg overflow-hidden border shadow-2xl font-mono text-sm md:text-base"
          style={{
            backgroundColor: KALI_BG,
            borderColor: "rgba(0, 255, 0, 0.25)",
            boxShadow: "0 0 40px rgba(0, 255, 0, 0.08), inset 0 1px 0 rgba(255,255,255,0.03)",
          }}
        >
          {/* Title bar - Kali / xterm style */}
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
              <span
                className="ml-3 text-xs font-medium opacity-80"
                style={{ color: KALI_GREEN }}
              >
                root@emshuvo:~ — {title}
              </span>
            </div>
          </div>

          {/* Terminal body */}
          <div className="relative p-4 md:p-6 min-h-[120px] overflow-hidden" style={{ color: KALI_GREEN }}>
            {/* Subtle scan line */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.15) 2px, rgba(0,255,0,0.15) 4px)" }} />
            <div className="relative z-10">
            {kernelInfo && (
              <div className="mb-4 space-y-1 opacity-90">
                <div style={{ color: KALI_AMBER }}>
                  $ uname -a
                </div>
                <div className="text-green-300/90">
                  Linux emshuvo 6.1.0-kali9-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.46-1kali1 (2024-01-08) x86_64 GNU/Linux
                </div>
                <div style={{ color: KALI_AMBER }} className="mt-2">
                  $ {command}
                </div>
              </div>
            )}
            {!kernelInfo && (
              <div className="mb-4" style={{ color: KALI_AMBER }}>
                $ {command}
              </div>
            )}
            <div className="terminal-output text-green-300/95 leading-relaxed space-y-1">
              {children}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
