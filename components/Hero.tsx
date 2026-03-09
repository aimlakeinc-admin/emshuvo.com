"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SIGNATURE = "Think in systems & strategic infrastructure.";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-24 relative z-10 flex flex-col items-center text-center mt-16">
        <div
          className={`max-w-4xl mx-auto flex flex-col items-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Building scalable <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              digital ecosystems.
            </span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
            I&apos;m <span className="text-zinc-200 font-semibold">Evan Mahmud Shuvo</span>. A Cloud Security Engineer, System Administrator, and Full-Stack Developer creating resilient architectures for the modern web.
            <br className="mt-2 block" />
            <span className="italic opacity-80">{SIGNATURE}</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="#expertise"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Explore Expertise
            </Link>
            <Link
              href="mailto:emshuvo@aimlake.com"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Get in Touch
            </Link>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 mt-20 pt-12 border-t border-white/10 w-full max-w-3xl">
            {[
              { label: "Experience", value: "5+ Years" },
              { label: "Deployments", value: "50+" },
              { label: "Organizations", value: "5+" },
              { label: "Ventures", value: "2+" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl font-bold tracking-tight text-white mb-1">{stat.value}</span>
                <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}