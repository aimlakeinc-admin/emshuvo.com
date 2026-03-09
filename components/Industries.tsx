"use client";

import { useState, useRef, useEffect } from "react";
import AsciiBanner from "./AsciiBanner";

const industryCategories = [
  { title: "Healthcare & Medical", items: ["Medical Clinics", "Dental Clinics", "Healthcare Providers", "Physiotherapy & Rehab", "Wellness Centers"] },
  { title: "Legal & Law Enforcement", items: ["Law Firms", "Legal Advisors", "Regulatory & Compliance", "Law Enforcement Agencies"] },
  { title: "Finance & Investment", items: ["FinTech", "Investment Firms", "Trading & Analytics", "Accounting & Tax"] },
  { title: "Technology & SaaS", items: ["IT Companies", "AI & Automation Startups", "Software Dev", "Cybersecurity Teams"] },
  { title: "Automotive", items: ["Garages & Service Centers", "Automotive Tech", "Fleet / Transportation"] },
  { title: "Hospitality & Food", items: ["Restaurants & Chains", "Cloud Kitchens", "Franchise Operations"] },
  { title: "SMBs", items: ["Retail", "E-commerce", "Service Providers", "Local Enterprises"] },
  { title: "Education & Training", items: ["Schools & Colleges", "EdTech", "Coaching", "Corporate Training"] },
  { title: "Real Estate & Construction", items: ["Real Estate", "Property Developers", "Architecture", "Construction"] },
  { title: "Logistics & Supply Chain", items: ["Freight & Shipping", "Warehousing", "Courier", "Supply Chain"] },
  { title: "Media, Marketing & Comms", items: ["Advertising", "PR & Media", "Influencer Marketing", "Video & Photo"] },
  { title: "Energy & Environment", items: ["Renewable Energy", "Oil, Gas & Utilities", "Environmental Consulting"] },
  { title: "Fashion & Lifestyle", items: ["Apparel", "Beauty & Cosmetics", "Fitness & Sports", "Luxury Retail"] },
  { title: "Entertainment & Events", items: ["Event Management", "Music & Film", "Theaters & Venues", "Gaming & Esports"] },
  { title: "Manufacturing & Industrial", items: ["Manufacturing", "Industrial Equipment", "Automation & Robotics", "3D Printing"] },
];

const MID = Math.ceil(industryCategories.length / 2);
const LEFT_CATS = industryCategories.slice(0, MID);
const RIGHT_CATS = industryCategories.slice(MID);

const KALI_GREEN = "#00ff41";
const KALI_BG = "#0d1117";

function DraggableTerminal({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ startX: 0, startY: 0, startPosX: 0, startPosY: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a, button")) return;
    setIsDragging(true);
    dragRef.current = { startX: e.clientX, startY: e.clientY, startPosX: pos.x, startPosY: pos.y };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { startX, startY, startPosX, startPosY } = dragRef.current;
      setPos({
        x: startPosX + (e.clientX - startX),
        y: startPosY + (e.clientY - startY),
      });
    };
    const handleMouseUp = () => setIsDragging(false);
    if (!isDragging) return;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      className="relative flex-1 min-w-0 rounded-lg overflow-hidden border font-sans text-sm flex flex-col shadow-lg transition-shadow"
      style={{
        backgroundColor: KALI_BG,
        borderColor: "rgba(0, 255, 65, 0.28)",
        minHeight: "420px",
        maxHeight: "70vh",
        zIndex: isDragging ? 20 : 10,
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
    >
      <div
        className="flex items-center justify-between px-3 py-2 border-b cursor-grab active:cursor-grabbing select-none"
        style={{
          backgroundColor: "rgba(20, 22, 28, 0.98)",
          borderColor: "rgba(0, 255, 65, 0.2)",
        }}
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <span className="ml-2 text-xs font-medium opacity-80" style={{ color: KALI_GREEN }}>
            root@evan:~ — {title}
          </span>
        </div>
      </div>
      <div
        className="flex-1 overflow-y-auto p-4 text-zinc-400/95"
        style={{ color: KALI_GREEN }}
      >
        {children}
      </div>
    </div>
  );
}

function IndustryList({ categories }: { categories: typeof LEFT_CATS }) {
  return (
    <div className="space-y-2">
      {categories.map((cat, i) => (
        <div key={i}>
          <div className="text-amber-400/90 font-semibold text-xs">[{cat.title}]</div>
          <ul className="pl-2 mt-0.5 space-y-0.5 text-xs">
            {cat.items.map((item, j) => (
              <li key={j} className="flex items-center gap-2">
                <span className="text-green-500">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Industries() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="industries"
      className="relative py-8 md:py-12 min-h-[85vh]"
      style={{ background: "linear-gradient(180deg, #0a0e14 0%, #0d1117 100%)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AsciiBanner title="industries_served" visible={mounted} />
        <p className="text-center text-zinc-400 text-sm mb-6 font-sans">
          Services across diverse industries. Drag title bar to move.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 flex gap-4" style={{ minHeight: "520px" }}>
        <DraggableTerminal title="industries_1">
          <IndustryList categories={LEFT_CATS} />
        </DraggableTerminal>
        <DraggableTerminal title="industries_2">
          <IndustryList categories={RIGHT_CATS} />
        </DraggableTerminal>
      </div>
    </section>
  );
}
