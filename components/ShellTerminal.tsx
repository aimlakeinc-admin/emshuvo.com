"use client";

import { useState, useRef, useEffect } from "react";

const PROMPT = "root@evan:~$ ";
const COMMANDS: Record<string, { output: string; scroll?: string }> = {
  help: {
    output: "help\t\tthis message\nabout\t\tidentity & context\nprinciples\toperating principles\ncerts\t\tskills & certifications\ncompanies\tventures\nvision\t\tlegacy & long-term\nstack\t\ttech & capabilities\nclear\t\tclear screen",
  },
  about: { output: "Navigating to identity...", scroll: "#about" },
  principles: { output: "Opening principles...", scroll: "#principles" },
  certs: { output: "Opening stack...", scroll: "#certifications" },
  companies: { output: "Opening ventures...", scroll: "#companies" },
  vision: { output: "Opening legacy...", scroll: "#legacy" },
  stack: { output: "Opening capabilities...", scroll: "#expertise" },
  "sudo whoami": { output: "root" },
  whoami: { output: "evan" },
  clear: { output: "\x0c" },
};

export default function ShellTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<{ cmd: string; out: string }[]>([]);
  const [input, setInput] = useState("");
  const [currentOut, setCurrentOut] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, currentOut]);

  const run = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const key = Object.keys(COMMANDS).find((k) => trimmed === k || (k.includes(trimmed) && trimmed.length >= 2));
    const entry = key ? COMMANDS[key] : { output: `bash: ${trimmed}: command not found. Type 'help' for commands.` };

    if (entry.scroll) {
      document.querySelector(entry.scroll)?.scrollIntoView({ behavior: "smooth" });
    }
    if (entry.output === "\x0c") {
      setHistory([]);
      setCurrentOut("");
    } else {
      setHistory((h) => [...h, { cmd: trimmed, out: entry.output }]);
      setCurrentOut("");
    }
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      run(input);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-zinc-950 border border-white/10 text-blue-400 flex items-center justify-center font-sans text-lg hover:bg-hacker-green/10 transition-colors"
        aria-label="Open shell"
      >
        {isOpen ? "×" : "⟩"}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-6 z-40 w-full max-w-md bg-zinc-950 border border-white/10 shadow-[0_0_30px_rgba(0,255,65,0.1)] font-sans text-sm overflow-hidden rounded">
          <div className="px-3 py-2 border-b border-white/10 text-zinc-300 text-xs">
            shell — type help
          </div>
          <div className="p-3 max-h-64 overflow-y-auto text-zinc-400">
            {history.map((h, i) => (
              <div key={i} className="mb-2">
                <div className="text-blue-300">{PROMPT}{h.cmd}</div>
                <pre className="whitespace-pre-wrap text-zinc-400 text-xs mt-0.5 font-sans">{h.out}</pre>
              </div>
            ))}
            {currentOut && <pre className="whitespace-pre-wrap text-zinc-400 text-xs">{currentOut}</pre>}
            <div className="flex items-center gap-1 mt-1">
              <span className="text-blue-300 shrink-0">{PROMPT}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-blue-400 placeholder-hacker-green/40"
                placeholder=""
                spellCheck={false}
                autoComplete="off"
              />
            </div>
          </div>
          <div ref={bottomRef} />
        </div>
      )}
    </>
  );
}