"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PARAGRAPHS = [
  "A technology leader specializing in cloud security, system administration, and full-stack development. Combines deep expertise in AI automation, cybersecurity, and DevOps to build robust, scalable systems that support business innovation and long-term growth.",
  "As CEO of Aimlake Inc. and Capitalizedmoney Inc., Evan delivers cutting-edge solutions that bridge technology, finance, and automation — creating secure, intelligent systems that help organizations stay ahead in a fast-evolving digital landscape.",
  "Based in Toronto, Ontario, Canada. Working with businesses across industries to build infrastructures that are not only secure and scalable, but also intelligent and automated — from protecting critical data to integrating AI at scale.",
];

const HIGHLIGHTS = [
  { icon: "🏗️", label: "Architecture First" },
  { icon: "🔐", label: "Security Driven" },
  { icon: "🤖", label: "AI-Powered" },
  { icon: "☁️", label: "Cloud Native" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative orb */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-sm mx-auto lg:mx-0">
              {/* Multi-layer glass card stack */}
              <div className="absolute inset-8 glass-card rounded-3xl rotate-6 scale-95 opacity-40" />
              <div className="absolute inset-5 glass-card rounded-3xl rotate-3 scale-97 opacity-60" />
              <div className="glass-card rounded-3xl p-8 h-full flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-4">
                  {HIGHLIGHTS.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/3 border border-white/5 hover:border-violet-500/30 transition-colors"
                    >
                      <span className="text-3xl mb-2">{h.icon}</span>
                      <span className="text-xs font-semibold text-zinc-400 text-center">{h.label}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                  </div>
                  <span className="text-sm text-zinc-400 font-medium">Available worldwide · Remote-first</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — content */}
          <div className="order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="section-label"
            >
              About
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="section-heading text-white mb-8"
            >
              Thinking in{" "}
              <span className="gradient-text">systems</span>.
            </motion.h2>

            <div className="space-y-5">
              {PARAGRAPHS.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="text-zinc-400 leading-relaxed text-base md:text-lg"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="gradient-divider mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
