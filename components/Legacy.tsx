"use client";

import TerminalWindow from "./TerminalWindow";

const LEGACY_LINES = [
  "> legacy --preview",
  "",
  "What I'm building long-term:",
  "Systems that outlive trends. Not products that chase them. Infrastructure that becomes invisible because it never breaks.",
  "",
  "What empire means to me:",
  "Not territory. Leverage. The ability to move capital, data, and trust at scale—with security and clarity as non-negotiables.",
  "",
  "Security at scale:",
  "When every node matters, security isn't a checklist. It's the default state. Zero trust. Assume breach. Design for it.",
  "",
  "2040 vision:",
  "A world where the boring stuff—identity, payments, compliance, infrastructure—just works. So the next generation builds on solid ground.",
];

export default function Legacy() {
  return (
    <TerminalWindow
      id="legacy"
      title="legacy"
      command="legacy --preview"
      outputLines={LEGACY_LINES}
      asciiTitle="legacy"
    />
  );
}