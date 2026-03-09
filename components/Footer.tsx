"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Leadership", href: "#leadership" },
  { label: "Ventures", href: "#companies" },
  { label: "Industries", href: "#industries" },
  { label: "Legacy", href: "#legacy" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#030305] border-t border-white/5 overflow-hidden">
      {/* Aurora top accent */}
      <div className="absolute top-0 left-0 right-0 h-px gradient-divider" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-violet-600/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="section-container relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-12">
          {/* Brand */}
          <div>
            <Link href="#home" className="group inline-flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 opacity-80 group-hover:opacity-100 transition-opacity blur-[2px]" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-black text-base md:text-sm tracking-widest">ES</span>
                </div>
              </div>
              <span className="text-base font-bold text-white">Evan Shuvo</span>
            </Link>
            <p className="text-base md:text-sm text-zinc-400 leading-relaxed max-w-xs">
              Cloud Security Engineer, System Architect & Full-Stack Developer based in Toronto, Canada.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm md:text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-base md:text-sm text-zinc-300 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm md:text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-4">Connect</p>
            <div className="space-y-2">
              <a href="mailto:emshuvo@aimlake.com" className="block text-base md:text-sm text-zinc-300 hover:text-white transition-colors">emshuvo@aimlake.com</a>
              <a href="mailto:emshuvo@capitalizedmoney.com" className="block text-base md:text-sm text-zinc-300 hover:text-white transition-colors">emshuvo@capitalizedmoney.com</a>
              <a href="https://aimlake.com/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 btn-primary text-sm md:text-xs px-4 py-2">
                Aimlake Contact
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gradient-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm md:text-xs text-zinc-600">
            © {new Date().getFullYear()} Evan Mahmud Shuvo. All rights reserved.
          </p>
          <p className="text-sm md:text-xs text-zinc-700">
            Engineered with Next.js · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
