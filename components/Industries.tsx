"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const industryCategories = [
  { title: "Healthcare & Medical", emoji: "🏥", items: ["Medical Clinics", "Dental", "Physiotherapy", "Wellness"] },
  { title: "Legal & Compliance", emoji: "⚖️", items: ["Law Firms", "Legal Advisors", "Regulatory"] },
  { title: "Finance & Investment", emoji: "📈", items: ["FinTech", "Investment Firms", "Trading", "Accounting"] },
  { title: "Technology & SaaS", emoji: "💻", items: ["IT Companies", "AI Startups", "Cybersecurity Teams"] },
  { title: "Automotive", emoji: "🚗", items: ["Garages & Service", "Automotive Tech", "Fleet / Transport"] },
  { title: "Hospitality & Food", emoji: "🍽️", items: ["Restaurants", "Cloud Kitchens", "Franchise Ops"] },
  { title: "SMBs & Retail", emoji: "🏪", items: ["Retail", "E-commerce", "Service Providers"] },
  { title: "Education & Training", emoji: "🎓", items: ["Schools", "EdTech", "Corporate Training"] },
  { title: "Real Estate", emoji: "🏢", items: ["Property Dev", "Architecture", "Construction"] },
  { title: "Logistics", emoji: "📦", items: ["Freight", "Warehousing", "Supply Chain"] },
  { title: "Media & Marketing", emoji: "📣", items: ["Advertising", "PR & Media", "Video & Photo"] },
  { title: "Energy & Environment", emoji: "⚡", items: ["Renewable Energy", "Oil & Gas", "Environmental"] },
  { title: "Fashion & Lifestyle", emoji: "👗", items: ["Apparel", "Beauty", "Fitness", "Luxury"] },
  { title: "Entertainment", emoji: "🎬", items: ["Event Management", "Music & Film", "Gaming"] },
  { title: "Manufacturing", emoji: "🏭", items: ["Manufacturing", "Robotics", "3D Printing"] },
];

const COLORS = [
  "border-violet-500/30 hover:border-violet-400/60",
  "border-blue-500/30 hover:border-blue-400/60",
  "border-cyan-500/30 hover:border-cyan-400/60",
  "border-emerald-500/30 hover:border-emerald-400/60",
  "border-rose-500/30 hover:border-rose-400/60",
];

export default function Industries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="industries" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-600/6 rounded-full blur-[130px] pointer-events-none" />

      <div className="section-container" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-label"
          >
            Industries Served
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading text-white"
          >
            Where I{" "}
            <span className="gradient-text">operate</span>.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {industryCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={mounted && inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03, y: -4 }}
              className={`glass rounded-2xl p-5 border ${COLORS[i % COLORS.length]} transition-all duration-300 cursor-default`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{cat.emoji}</span>
                <h3 className="text-sm md:text-xs font-bold text-white leading-tight">{cat.title}</h3>
              </div>
              <ul className="space-y-1">
                {cat.items.map((item, j) => (
                  <li key={j} className="text-[11px] text-zinc-400 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
