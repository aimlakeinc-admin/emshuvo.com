"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import ParticleField from "./3D/ParticleField";
import { motion } from "framer-motion";

const FloatingOrb = dynamic(() => import("./3D/FloatingOrb"), { ssr: false });

const STATS = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Live Deployments" },
  { value: "5+", label: "Organizations" },
  { value: "2", label: "Ventures Founded" },
];

const ROLES = [
  "Cloud Security Engineer",
  "System Architect",
  "Full-Stack Developer",
  "AI Automation Expert",
  "CEO & Founder",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => { setMounted(true); }, []);

  // Typewriter cycle through ROLES
  useEffect(() => {
    const current = ROLES[roleIndex];
    if (!isDeleting) {
      if (charIndex < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 60);
      } else {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), 1800);
      }
    } else {
      if (charIndex > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 35);
      } else {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [charIndex, isDeleting, roleIndex]);

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden aurora flex items-center"
    >
      {/* Interactive particle field */}
      <ParticleField />

      {/* Abstract decorative blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10 w-full pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center min-h-[80vh]">

          {/* ── Left: Text Content ─── */}
          <div className="flex flex-col items-start">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full glass border border-white/8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-base md:text-sm font-medium text-zinc-300">Open to strategic opportunities</span>
            </motion.div>

            {/* Eyebrow label */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="section-label"
            >
              Evan Mahmud Shuvo · Toronto, Canada
            </motion.span>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-6"
            >
              Building the{" "}
              <span className="gradient-text">digital <br className="hidden sm:block" /> infrastructure</span>{" "}
              of tomorrow.
            </motion.h1>

            {/* Typewriter sub-role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 mb-8 h-8"
            >
              <span className="text-lg font-medium text-zinc-300">/&gt;</span>
              <span className="text-lg md:text-xl font-semibold text-violet-300 tracking-wide min-w-[260px]">
                {displayText}
                <span className="inline-block w-0.5 h-5 bg-violet-400 ml-0.5 animate-pulse align-middle" />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-zinc-300 max-w-xl leading-relaxed mb-10"
            >
              CEO of <span className="text-white font-medium">Aimlake Inc.</span> & <span className="text-white font-medium">Capitalizedmoney Inc.</span> — specializing in secure, scalable, AI-powered infrastructures that outlive trends and drive real-world impact.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16"
            >
              <Link
                href="https://aimlake.com/contact-us"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Start a Conversation
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="#expertise" className="btn-ghost">
                View Expertise
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-lg"
            >
              {STATS.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">{s.value}</span>
                  <span className="text-sm md:text-xs font-medium text-zinc-400 uppercase tracking-wider mt-0.5">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Portrait & 3D Orb ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:flex items-center justify-center h-[600px] w-full"
          >
            {/* Background 3D Orb & Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px]">
              <div className="absolute inset-8 rounded-full bg-violet-600/20 blur-[60px] animate-pulse-ring" />
              <div className="absolute inset-0 rounded-full bg-blue-600/10 blur-[80px]" />
              <div className="absolute inset-0 opacity-60 mix-blend-screen scale-110">
                <FloatingOrb />
              </div>
            </div>

            {/* User Portrait */}
            <div className="relative z-10 w-[450px] h-[580px] mt-12 flex justify-center items-end drop-shadow-2xl">
              {/* Bottom fade gradient to blend portrait cleanly into the hero background */}
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050508] via-[#050508]/80 to-transparent z-20 pointer-events-none" />

              <Image
                src="/images/evan-shuvo.png"
                alt="Evan Mahmud Shuvo Portrait"
                width={800}
                height={1000}
                className="w-full h-auto object-contain object-bottom filter contrast-[1.05] brightness-[0.95] drop-shadow-[0_0_30px_rgba(139,92,246,0.3)] z-10"
                priority
              />
            </div>

            {/* Floating info chip — top right */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [1, -1, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-12 right-0 z-30 glass-card rounded-2xl px-5 py-4 min-w-[180px] shadow-[0_0_40px_rgba(139,92,246,0.15)] border border-white/10 backdrop-blur-xl"
            >
              <p className="text-sm md:text-xs text-zinc-400 font-medium mb-1 tracking-wide uppercase">Current Focus</p>
              <p className="text-lg md:text-base font-bold text-white tracking-tight">AI Infrastructure</p>
            </motion.div>

            {/* Floating info chip — bottom left */}
            <motion.div
              animate={{ y: [0, 14, 0], rotate: [-1, 1, -1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-28 left-4 z-30 glass-card rounded-2xl px-5 py-4 min-w-[190px] shadow-[0_0_40px_rgba(59,130,246,0.15)] border border-white/10 backdrop-blur-xl"
            >
              <p className="text-sm md:text-xs text-zinc-400 font-medium mb-1 tracking-wide uppercase">Based in</p>
              <p className="text-lg md:text-base font-bold text-white tracking-tight flex items-center gap-2">Toronto <span className="text-xl">🇨🇦</span></p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent pointer-events-none" />
    </section>
  );
}