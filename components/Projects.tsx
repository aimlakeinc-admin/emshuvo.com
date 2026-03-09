"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const companies = [
  {
    name: "Aimlake Inc.",
    role: "CEO",
    description: "Digital innovation: automation, design, business growth. Custom web/app solutions, AI chatbots, SEO.",
    industries: ["Healthcare", "Hospitality", "Automotive", "Marketing"],
    website: "https://www.aimlake.com",
    gradient: "from-violet-600 to-blue-600",
  },
  {
    name: "Capitalizedmoney Inc.",
    role: "CEO",
    description: "Fintech education and automation. AI investment dashboards and tools for traders and investors.",
    industries: ["FinTech", "Investment", "Trading", "Education"],
    website: "https://www.capitalizedmoney.com",
    gradient: "from-emerald-600 to-cyan-500",
  },
  {
    name: "CarCare24x7 Inc.",
    role: "CTO · CBGO",
    description: "AI-powered automotive ecosystem: garages + car owners app, service bookings, wallet, rewards, analytics.",
    industries: ["Automotive", "AI", "Mobile App", "Ecosystem"],
    website: "https://www.carcare24x7.com",
    gradient: "from-rose-600 to-amber-500",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="companies" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-emerald-600/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-label"
          >
            Ventures
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading text-white"
          >
            Companies I{" "}
            <span className="gradient-text">built</span>.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {companies.map((c, i) => (
            <motion.a
              key={i}
              href={c.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="glass-card rounded-3xl p-7 flex flex-col relative overflow-hidden group cursor-pointer"
            >
              {/* Gradient header line */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${c.gradient}`} />

              {/* Number */}
              <span className={`text-6xl font-black opacity-10 bg-gradient-to-br ${c.gradient} bg-clip-text text-transparent absolute top-4 right-6`}>
                0{i + 1}
              </span>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-extrabold text-white mb-1">{c.name}</h3>
                    <p className="text-xs text-zinc-500 font-semibold uppercase tracking-widest">{c.role}</p>
                  </div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{c.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {c.industries.map((ind, j) => (
                    <span key={j} className="pill-tag">{ind}</span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
                  <span>{c.website.replace("https://www.", "")}</span>
                  <svg className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}