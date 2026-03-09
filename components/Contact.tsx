"use client";

import TerminalWindow from "./TerminalWindow";

export default function Contact() {
  return (
    <TerminalWindow
      id="contact"
      title="contact"
      command="cat .contact"
      asciiTitle="contact"
    >
      <p className="text-zinc-400 mb-6 text-sm">
        Identity. Depth. Principles. Precision.
      </p>
      <div className="space-y-4 border-t border-white/10 pt-4">
        <div>
          <div className="text-zinc-300 font-semibold mb-1 text-sm">email</div>
          <a href="mailto:emshuvo@aimlake.com" className="block text-zinc-400 hover:text-blue-300 transition-colors text-sm">
            emshuvo@aimlake.com
          </a>
          <a href="mailto:emshuvo@capitalizedmoney.com" className="block text-zinc-400 hover:text-blue-300 transition-colors text-sm">
            emshuvo@capitalizedmoney.com
          </a>
        </div>
        <div>
          <div className="text-zinc-300 font-semibold mb-1 text-sm">location</div>
          <p className="text-zinc-400 text-sm">Toronto, Ontario, Canada</p>
        </div>
      </div>
    </TerminalWindow>
  );
}