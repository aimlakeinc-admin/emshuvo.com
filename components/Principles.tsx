"use client";

import TerminalWindow from "./TerminalWindow";

const BELIEFS = [
  { topic: "Security", text: "Not a feature. A foundation. If it's bolted on later, it's already too late." },
  { topic: "Money", text: "Systems that move capital should be transparent, auditable, and aligned with long-term value—not just velocity." },
  { topic: "Systems", text: "Architecture outlives implementation. Think in layers, boundaries, and failure modes first." },
  { topic: "AI", text: "Amplifier of intent. Build it so that the wrong intent fails fast and the right one scales." },
  { topic: "Power", text: "Infrastructure is power. Those who control the stack control the game. Use it responsibly." },
  { topic: "Infrastructure", text: "The boring stuff is the load-bearing wall. Make it dull, reliable, and invisible." },
  { topic: "Scale", text: "Scale is a discipline, not a button. Design for it from day one or pay later." },
  { topic: "Discipline", text: "Consistency over intensity. Systems that run every day beat heroics that run once." },
];

export default function Principles() {
  return (
    <TerminalWindow
      id="principles"
      title="principles"
      command="cat /principles/core_values.txt"
      asciiTitle="principles"
    >
      <p className="text-zinc-400 mb-6 text-sm">
        What Evan believes. Not resume bullets—operating principles.
      </p>
      <div className="space-y-6">
        {BELIEFS.map((b, i) => (
          <div key={i} className="border-l-2 border-white/10 pl-4">
            <div className="text-blue-300 font-semibold text-sm mb-1">{b.topic}</div>
            <div className="text-zinc-400 text-sm leading-relaxed">{b.text}</div>
          </div>
        ))}
      </div>
    </TerminalWindow>
  );
}
