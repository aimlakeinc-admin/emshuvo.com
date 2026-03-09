"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const expertiseAreas = [
  {
    icon: "🔐",
    title: "Cloud Security",
    desc: "Designing and managing secure cloud infrastructures focused on compliance, zero-trust architecture, and threat mitigation.",
    gradient: "from-violet-600/20 to-blue-600/20",
    glow: "rgba(139, 92, 246, 0.15)",
  },
  {
    icon: "⚙️",
    title: "System Administration",
    desc: "Overseeing complex IT systems with performance optimization, automation, and battle-tested 24/7 reliability.",
    gradient: "from-blue-600/20 to-cyan-600/20",
    glow: "rgba(59, 130, 246, 0.15)",
  },
  {
    icon: "🌐",
    title: "Full-Stack Development",
    desc: "Building modern web applications from pixel-perfect UI to resilient backend infrastructure and API design.",
    gradient: "from-cyan-600/20 to-emerald-600/20",
    glow: "rgba(6, 182, 212, 0.15)",
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    desc: "Integrating LLMs, computer vision, and workflow automation to amplify productivity and unlock new capabilities.",
    gradient: "from-emerald-600/20 to-violet-600/20",
    glow: "rgba(16, 185, 129, 0.15)",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    desc: "Protecting critical data through ethical hacking, OSCP-level vulnerability assessment, and network defense strategies.",
    gradient: "from-rose-600/20 to-orange-500/20",
    glow: "rgba(244, 63, 94, 0.15)",
  },
  {
    icon: "🚀",
    title: "DevOps",
    desc: "Automating software delivery pipelines with Docker, Kubernetes, and CI/CD to ship code fast and confidently.",
    gradient: "from-amber-600/20 to-rose-600/20",
    glow: "rgba(245, 158, 11, 0.15)",
  },
];

function TiltCard({ area, index, inView }: { area: typeof expertiseAreas[0]; index: number; inView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({ x: -(y / rect.height) * 10, y: (x / rect.width) * 10 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setRotate({ x: 0, y: 0 }); }}
      style={{
        transform: hovered
          ? `perspective(800px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(8px)`
          : "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
        transition: hovered ? "transform 0.05s ease" : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        boxShadow: hovered ? `0 20px 60px ${area.glow}` : "0 0 0 transparent",
      }}
      className="glass-card rounded-2xl p-7 cursor-default overflow-hidden relative"
    >
      {/* Background gradient blob */}
      <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 ${hovered ? "opacity-100" : ""} transition-opacity duration-500 rounded-2xl`} />

      <div className="relative z-10">
        <span className="text-4xl mb-5 block">{area.icon}</span>
        <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{area.title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed">{area.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Expertise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="expertise" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[140px] pointer-events-none translate-y-[-50%]" />

      <div className="section-container" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading text-white"
          >
            What I do{" "}
            <span className="gradient-text">best</span>.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertiseAreas.map((area, i) => (
            <TiltCard key={i} area={area} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}