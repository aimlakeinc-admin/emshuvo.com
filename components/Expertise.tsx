import TerminalWindow from "./TerminalWindow";

const expertiseAreas = [
  { title: "Cloud Security", desc: "Designing and managing secure cloud infrastructures focused on compliance, protection, and scalability." },
  { title: "System Administration", desc: "Overseeing complex IT systems with performance optimization and 24/7 reliability." },
  { title: "Full-Stack Development", desc: "Building modern web applications from UI to backend infrastructure." },
  { title: "AI & Automation", desc: "Integrating artificial intelligence to streamline processes and drive productivity." },
  { title: "Cybersecurity", desc: "Protecting critical data through ethical hacking, vulnerability assessment, and network defense." },
  { title: "DevOps", desc: "Automating software delivery pipelines and managing scalable cloud deployments." },
];

export default function Expertise() {
  return (
    <TerminalWindow
      id="expertise"
      title="expertise"
      command="cat expertise.conf"
      asciiTitle="expertise"
    >
      <div className="space-y-4">
        {expertiseAreas.map((area, i) => (
          <div key={i}>
            <div className="text-amber-400/90 font-semibold">[{area.title}]</div>
            <div className="pl-2 border-l-2 border-green-500/40 ml-1">{area.desc}</div>
          </div>
        ))}
      </div>
    </TerminalWindow>
  );
}