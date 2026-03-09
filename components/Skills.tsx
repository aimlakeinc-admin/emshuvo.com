"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    title: "Cybersecurity & SysAdmin",
    emoji: "🔐",
    color: "from-violet-500 to-purple-600",
    items: ["Red Hat RHCSA / RHCE", "CompTIA A+, Net+, Sec+", "OSCP", "CEH", "Palo Alto PCCSE"],
  },
  {
    title: "Networking & Cloud",
    emoji: "☁️",
    color: "from-blue-500 to-cyan-500",
    items: ["Cisco CCNA / CCNP", "Amazon AWS", "Microsoft Azure", "Google IT Support"],
  },
  {
    title: "Finance",
    emoji: "💰",
    color: "from-emerald-500 to-teal-500",
    items: ["TTC", "IDSC", "MFDA", "IFC"],
  },
  {
    title: "Software & Tools",
    emoji: "🛠️",
    color: "from-amber-500 to-orange-500",
    items: ["Final Cut Pro X", "DaVinci Resolve", "Adobe Suite", "Jira / Asana / Confluence", "Splunk / Kibana / Docker / K8s"],
  },
  {
    title: "Operating Systems",
    emoji: "💻",
    color: "from-rose-500 to-pink-600",
    items: ["Windows Server / macOS", "RHEL / CentOS / Fedora", "Ubuntu / Kali / Parrot OS", "iOS / Android / iPadOS"],
  },
  {
    title: "Programming & Stack",
    emoji: "⚡",
    color: "from-indigo-500 to-violet-500",
    items: ["HTML / CSS / JS / TS", "Python 3 / C++ / SQL", "Node.js / Next.js / React", "PostgreSQL / MongoDB"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-label"
          >
            Skills & Certifications
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading text-white"
          >
            The full{" "}
            <span className="gradient-text">stack</span>.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-2xl p-6 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-lg shadow-lg`}>
                  {cat.emoji}
                </div>
                <h3 className="text-sm font-bold text-white">{cat.title}</h3>
              </div>

              <ul className="space-y-2">
                {cat.items.map((item, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.08 + j * 0.05 + 0.2 }}
                    className="flex items-center gap-2.5 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${cat.color} shrink-0`} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}