"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-zinc-950 border-t border-white/10 font-sans">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center max-w-lg mx-auto">
          <Link href="#home" className="inline-block mb-6">
            <Logo />
          </Link>
          <p className="text-zinc-400 text-base leading-relaxed mb-8">
            Systems that outlive trends.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 mt-8">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Evan Mahmud Shuvo. All rights reserved.
          </p>
          <p className="text-zinc-600 text-sm">
            Engineered with Next.js · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
