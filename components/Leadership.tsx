import TerminalWindow from "./TerminalWindow";

const companies = [
  {
    name: "Aimlake Inc.",
    role: "CEO & Founder",
    description: "Leading innovative technology solutions and digital transformation projects that help businesses grow using AI, automation, and cloud infrastructure.",
    email: "emshuvo@aimlake.com",
    website: "https://www.aimlake.com",
  },
  {
    name: "Capitalizedmoney Inc.",
    role: "CEO & Founder",
    description: "Building fintech systems that combine investment analytics, automation, and data science for smarter financial decision-making.",
    email: "emshuvo@capitalizedmoney.com",
    website: "https://www.capitalizedmoney.com",
  },
  {
    name: "CarCare24x7 Inc.",
    role: "CTO / Chief Business Growth Officer",
    description: "An upcoming AI-powered automotive ecosystem that connects garages and car owners through an app. Offers service bookings, wallet and reward systems, and garage analytics.",
    email: "emshuvo@carcare24x7.com",
    website: "https://www.carcare24x7.com",
  },
];

export default function Leadership() {
  return (
    <TerminalWindow
      id="leadership"
      title="leadership"
      command="cat /etc/leadership 2>/dev/null || echo '--- companies ---'"
      asciiTitle="leadership"
    >
      <div className="space-y-6">
        {companies.map((company, i) => (
          <div key={i} className="border-b border-green-500/20 pb-4 last:border-0 last:pb-0">
            <div className="text-amber-400/90 font-semibold text-base">{company.name}</div>
            <div className="text-green-400/80 text-sm mb-1">{company.role}</div>
            <div className="mb-2">{company.description}</div>
            <div className="text-sm space-y-0.5 opacity-90">
              <a href={company.website} target="_blank" rel="noopener noreferrer" className="block hover:underline text-cyan-300">
                → {company.website.replace("https://", "")}
              </a>
              <a href={`mailto:${company.email}`} className="block hover:underline text-cyan-300">
                → {company.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </TerminalWindow>
  );
}