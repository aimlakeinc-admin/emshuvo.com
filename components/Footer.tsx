"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-hacker-black border-t border-hacker-green/20 font-mono">
      {/* Top accent */}
      <div
        className="h-px w-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0, 255, 65, 0.5), transparent)",
          boxShadow: "0 0 12px rgba(0, 255, 65, 0.2)",
        }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center max-w-lg mx-auto">
          <Link href="#home" className="inline-block mb-4">
            <Logo />
          </Link>
          <p className="text-hacker-green/80 text-sm leading-relaxed mb-2">
            Cloud Security, SysAdmin & Full-Stack. Building secure, scalable systems for the future.
          </p>
          <p className="text-hacker-cyan/60 text-xs tracking-widest masterpiece-tagline mb-8">
            CREATIVITY  ·  PRODUCTIVITY  ·  ENGINEERING
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-hacker-green/20">
          <p className="text-hacker-green/50 text-sm">
            © {new Date().getFullYear()} Evan Mahmud Shuvo. All rights reserved.
          </p>
          <p className="text-hacker-green/40 text-xs">
            Engineered with Next.js · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
