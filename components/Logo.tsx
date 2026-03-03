"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link href="#home" className="flex items-center group">
      <div className="relative px-2">
        {/* Main Logo Text */}
        <div className="text-xl md:text-2xl lg:text-3xl font-display font-bold tracking-tight relative">
          {/* Gradient text */}
          <span 
            className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient"
            style={{
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            EMS
          </span>
          
          {/* Glitch overlay effect */}
          <span 
            className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-glitch pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mixBlendMode: 'screen',
            }}
            aria-hidden="true"
          >
            EMS
          </span>
        </div>
        
        {/* Decorative brackets */}
        <span className="absolute -left-3 top-0 text-cyan-400/50 font-mono text-lg group-hover:text-cyan-400 transition-colors">[</span>
        <span className="absolute -right-3 top-0 text-cyan-400/50 font-mono text-lg group-hover:text-cyan-400 transition-colors">]</span>
        
        {/* Bottom accent line */}
        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </Link>
  );
}

