import TerminalWindow from "./TerminalWindow";

const companies = [
  {
    name: "Aimlake Inc.",
    role: "CEO",
    description: "Digital innovation: automation, design, business growth. Custom web/app solutions, AI chatbots, SEO.",
    industries: ["Healthcare", "Hospitality", "Automotive", "Marketing"],
    website: "https://www.aimlake.com",
  },
  {
    name: "Capitalizedmoney Inc.",
    role: "CEO",
    description: "Fintech education and automation. AI investment dashboards and tools for traders and investors.",
    industries: ["Fintech", "Investment", "Trading", "Education"],
    website: "https://www.capitalizedmoney.com",
  },
  {
    name: "CarCare24x7 Inc.",
    role: "CTO / Chief Business Growth Officer",
    description: "AI-powered automotive ecosystem: garages + car owners app, service bookings, wallet, rewards, analytics.",
    industries: ["Automotive", "AI", "Mobile App", "Ecosystem"],
    website: "https://www.carcare24x7.com",
  },
];

export default function Projects() {
  return (
    <TerminalWindow
      id="companies"
      title="companies"
      command="ls -la /opt/ventures/"
      kernelInfo={false}
    >
      <div className="space-y-5">
        {companies.map((c, i) => (
          <div key={i} className="border-b border-green-500/20 pb-4 last:border-0 last:pb-0">
            <div className="text-amber-400/90 font-semibold">{c.name}</div>
            <div className="text-green-400/80 text-sm">{c.role}</div>
            <div className="my-1">{c.description}</div>
            <div className="text-sm text-cyan-300">
              <a href={c.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{c.website.replace("https://", "")}</a>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {c.industries.map((ind, j) => (
                <span key={j} className="px-2 py-0.5 rounded border border-green-500/40 text-xs text-green-300/90">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </TerminalWindow>
  );
}
