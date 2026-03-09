"use client";

const KALI_GREEN = "#00ff00";

function makeBox(title: string) {
  const raw = title.toUpperCase().replace(/\s/g, "_");
  const width = Math.max(48, Math.min(64, raw.length + 10));
  const line = "═".repeat(width - 2);
  const pad = width - 4 - raw.length;
  const content = "║  " + raw + " ".repeat(Math.max(0, pad)) + "  ║";
  return [
    "╔" + line + "╗",
    content,
    "╚" + line + "╝",
  ].join("\n");
}

export default function AsciiBanner({ title, visible }: { title: string; visible: boolean }) {
  if (!visible) return null;
  return (
    <pre
      className="ascii-reveal text-center font-sans text-xs md:text-sm mb-4 md:mb-6 whitespace-pre opacity-90"
      style={{ color: KALI_GREEN, textShadow: "0 0 8px rgba(0,255,0,0.3)" }}
      aria-hidden
    >
      {makeBox(title)}
    </pre>
  );
}
