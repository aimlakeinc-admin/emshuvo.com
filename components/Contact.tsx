"use client";

import TerminalWindow from "./TerminalWindow";

export default function Contact() {
  return (
    <TerminalWindow
      id="contact"
      title="contact"
      command="echo 'Open to collaborations · Secure · Scalable · Future-ready'"
      asciiTitle="contact"
    >
      <p className="text-hacker-green/90 mb-4">
        I&apos;m open to new collaborations, partnerships, and opportunities. Let&apos;s build something secure, scalable, and future-ready.
      </p>
      <div className="space-y-4 border-t border-hacker-green/20 pt-4">
        <div>
          <div className="text-hacker-cyan font-semibold mb-1">$ cat .email</div>
          <a href="mailto:emshuvo@aimlake.com" className="block text-hacker-green hover:text-hacker-cyan transition-colors">
            → emshuvo@aimlake.com
          </a>
          <a href="mailto:emshuvo@capitalizedmoney.com" className="block text-hacker-green hover:text-hacker-cyan transition-colors">
            → emshuvo@capitalizedmoney.com
          </a>
        </div>
        <div>
          <div className="text-hacker-cyan font-semibold mb-1">$ cat .location</div>
          <p className="text-hacker-green/90">Toronto, Ontario, Canada</p>
        </div>
      </div>
    </TerminalWindow>
  );
}
