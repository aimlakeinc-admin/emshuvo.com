"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const companies = [
  {
    name: "Aimlake Inc.",
    role: "CEO & Founder",
    description: "Leading innovative technology solutions and digital transformation projects that help businesses grow using AI, automation, and cloud infrastructure.",
    email: "emshuvo@aimlake.com",
    website: "https://www.aimlake.com",
    gradient: "from-violet-600 to-blue-600",
    glowColor: "rgba(109, 40, 217, 0.25)",
    tag: "Technology",
  },
  {
    name: "Capitalizedmoney Inc.",
    role: "CEO & Founder",
    description: "Building fintech systems that combine investment analytics, automation, and data science for smarter financial decision-making.",
    email: "emshuvo@capitalizedmoney.com",
    website: "https://www.capitalizedmoney.com",
    gradient: "from-emerald-600 to-cyan-600",
    glowColor: "rgba(16, 185, 129, 0.25)",
    tag: "FinTech",
  },
  {
    name: "CarCare24x7 Inc.",
    role: "CTO · Chief Business Growth Officer",
    description: "An upcoming AI-powered automotive ecosystem connecting garages and car owners through an app — service bookings, wallet & rewards, and garage analytics.",
    email: "emshuvo@carcare24x7.com",
    website: "https://www.carcare24x7.com",
    gradient: "from-rose-600 to-amber-500",
    glowColor: "rgba(244, 63, 94, 0.25)",
    tag: "Automotive AI · Upcoming",
  },
];

export default function Leadership() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="leadership" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-600/6 rounded-full blur-[130px] pointer-events-none" />

      <div className="section-container" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-label"
          >
            Leadership
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading text-white"
          >
            Ventures I{" "}
            <span className="gradient-text-rose">lead</span>.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {companies.map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass-card rounded-3xl p-7 flex flex-col relative overflow-hidden group"
              style={{
                "--glow": company.glowColor,
              } as React.CSSProperties}
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${company.gradient}`} />

              {/* Hover glow overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${company.glowColor} 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="text-xl font-extrabold text-white mb-1">{company.name}</h3>
                    <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">{company.role}</p>
                  </div>
                  <span className={`pill-tag shrink-0`} style={{ fontSize: "10px" }}>{company.tag}</span>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-6">{company.description}</p>

                {/* Links */}
                <div className="space-y-2 pt-4 border-t border-white/5">
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white group/link transition-colors"
                  >
                    <span className={`w-4 h-4 rounded-full bg-gradient-to-br ${company.gradient} opacity-70 group-hover/link:opacity-100 transition-opacity`} />
                    {company.website.replace("https://www.", "")}
                    <svg className="w-3 h-3 ml-auto opacity-0 group-hover/link:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white group/link transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 opacity-50 group-hover/link:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {company.email}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}