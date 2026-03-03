"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link href="#home" className="flex items-center group">
      <div className="relative px-2">
        <span className="text-xl md:text-2xl lg:text-3xl font-display font-bold tracking-tight text-hacker-green group-hover:text-hacker-cyan transition-colors duration-300">
          [ EMS ]
        </span>
        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-hacker-green/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
      </div>
    </Link>
  );
}
