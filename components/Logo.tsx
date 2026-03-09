"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link href="#home" className="flex items-center group">
      <div className="relative px-2">
        <span className="text-2xl md:text-3xl font-bold tracking-tighter text-white group-hover:text-blue-400 transition-colors duration-300">
          EVAN.
        </span>
      </div>
    </Link>
  );
}
