"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const PILLARS = [
  { title: "Systems that outlive trends.", body: "Not products that chase them. Infrastructure that becomes invisible because it never breaks." },
  { title: "What empire means.", body: "Not territory. Leverage. The ability to move capital, data, and trust at scale — with security and clarity as non-negotiables." },
  { title: "Security at scale.", body: "When every node matters, security isn't a checklist. It's the default state. Zero trust. Assume breach. Design for it." },
  { title: "2040 vision.", body: "A world where the boring stuff — identity, payments, compliance, infrastructure — just works. So the next generation builds on solid ground." },
];

export default function Legacy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="legacy" className="relative py-24 md:py-36 overflow-hidden aurora">
      {/* Big ambient orb */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-violet-600/8 blur-[160px]" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-label"
          >
            Legacy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight"
          >
            Building for{" "}
            <span className="gradient-text">the long game</span>.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto mb-16">
          {PILLARS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="text-zinc-400 text-lg mb-8 max-w-md mx-auto">
            Ready to build something that lasts?
          </p>
          <Link
            href="https://aimlake.com/contact-us"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4 inline-flex"
          >
            Let&apos;s Talk
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}