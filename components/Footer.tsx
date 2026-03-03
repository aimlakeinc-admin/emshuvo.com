"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top accent line */}
      <div
        className="h-px w-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.4), rgba(168, 85, 247, 0.4), transparent)",
        }}
      />

      <div
        className="relative border-t border-white/5"
        style={{
          background: "linear-gradient(180deg, rgba(5, 5, 15, 0.97) 0%, rgba(5, 5, 18, 0.98) 100%)",
          boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.03)",
        }}
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Brand */}
          <div className="text-center max-w-md mx-auto">
            <Link href="#home" className="inline-block mb-4">
              <Logo />
            </Link>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Cloud Security, SysAdmin & Full-Stack. Building secure, scalable systems for the future.
            </p>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-700/40">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Evan Mahmud Shuvo. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Built with Next.js · Deployed on Vercel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
