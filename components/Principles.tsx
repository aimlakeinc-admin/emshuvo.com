"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BELIEFS = [
  { topic: "Security", emoji: "🔐", text: "Not a feature. A foundation. If it's bolted on later, it's already too late.", gradient: "from-violet-500/10 to-blue-500/10" },
  { topic: "Money", emoji: "💰", text: "Systems that move capital should be transparent, auditable, and aligned with long-term value—not just velocity.", gradient: "from-emerald-500/10 to-cyan-500/10" },
  { topic: "Systems", emoji: "⚙️", text: "Architecture outlives implementation. Think in layers, boundaries, and failure modes first.", gradient: "from-blue-500/10 to-indigo-500/10" },
  { topic: "AI", emoji: "🤖", text: "Amplifier of intent. Build it so that the wrong intent fails fast and the right one scales.", gradient: "from-indigo-500/10 to-violet-500/10" },
  { topic: "Power", emoji: "⚡", text: "Infrastructure is power. Those who control the stack control the game. Use it responsibly.", gradient: "from-amber-500/10 to-rose-500/10" },
  { topic: "Infrastructure", emoji: "🏗️", text: "The boring stuff is the load-bearing wall. Make it dull, reliable, and invisible.", gradient: "from-rose-500/10 to-pink-500/10" },
  { topic: "Scale", emoji: "📈", text: "Scale is a discipline, not a button. Design for it from day one or pay later.", gradient: "from-cyan-500/10 to-teal-500/10" },
  { topic: "Discipline", emoji: "🎯", text: "Consistency over intensity. Systems that run every day beat heroics that run once.", gradient: "from-teal-500/10 to-emerald-500/10" },
];

export default function Principles() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="principles" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-violet-600/6 rounded-full blur-[130px] pointer-events-none" />

      <div className="section-container" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-label"
          >
            Principles
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading text-white"
          >
            How I{" "}
            <span className="gradient-text">think</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-zinc-400 mt-4 max-w-md mx-auto"
          >
            Not resume bullets. Operating principles.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BELIEFS.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`glass-card rounded-2xl p-5 relative overflow-hidden group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${b.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
              <div className="relative z-10">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-2xl">{b.emoji}</span>
                  <h3 className="text-sm font-bold text-white">{b.topic}</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">{b.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
