import TerminalWindow from "./TerminalWindow";

const skillCategories = [
  {
    title: "Cybersecurity / System Administration",
    items: ["Red Hat: RHCSA, RHCE", "CompTIA: ITF+, A+, Network+, Security+", "OSCP", "CEH", "PCCSE (Palo Alto)"],
  },
  {
    title: "Networking & Cloud",
    items: ["Cisco CCNA, CCNP", "Amazon AWS", "Microsoft Azure", "Google IT Support"],
  },
  {
    title: "Finance",
    items: ["TTC", "IDSC", "MFDA", "IFC"],
  },
  {
    title: "Software & Tools",
    items: ["Final Cut Pro X", "DaVinci Resolve", "Adobe PS/LR/Illustrator/XD", "Jira | Asana | Confluence", "Splunk | Kibana | Wireshark | Docker | K8s"],
  },
  {
    title: "Operating Systems",
    items: ["Windows Server · macOS · RHEL · CentOS · Fedora", "Ubuntu · Linux Mint · Parrot OS · Kali Linux", "iOS · Android · iPadOS"],
  },
  {
    title: "Programming & Stack",
    items: ["HTML/CSS/JS · Tailwind · Python 3 · C++ · MySQL", "Node.js · PostgreSQL · MongoDB", "Next.js 14 · React 18 · TypeScript · Vite"],
  },
];

export default function Skills() {
  return (
    <TerminalWindow
      id="certifications"
      title="skills"
      command="dpkg -l | grep -E 'cert|skill' || cat /var/lib/skills 2>/dev/null"
      kernelInfo={false}
    >
      <div className="space-y-4">
        {skillCategories.map((cat, i) => (
          <div key={i}>
            <div className="text-amber-400/90 font-semibold">--- {cat.title} ---</div>
            <ul className="mt-1 space-y-0.5 pl-2">
              {cat.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="text-green-500 shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </TerminalWindow>
  );
}
