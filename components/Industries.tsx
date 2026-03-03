import TerminalWindow from "./TerminalWindow";

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

export default function Industries() {
  return (
    <TerminalWindow
      id="industries"
      title="industries_served"
      command="cat /var/log/industries_served.log"
      kernelInfo={false}
    >
      <p className="text-green-400/80 mb-4">
        Services across diverse industries — secure, scalable solutions tailored to each sector.
      </p>
      <div className="space-y-3">
        {industryCategories.map((cat, i) => (
          <div key={i}>
            <div className="text-amber-400/90 font-semibold">[{cat.title}]</div>
            <ul className="pl-2 mt-0.5 space-y-0.5">
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
    </TerminalWindow>
  );
}
