import TerminalWindow from "./TerminalWindow";

const ABOUT_LINES = [
  "A technology leader specializing in cloud security, system administration,",
  "and full-stack development. He combines expertise in AI automation, cybersecurity,",
  "and DevOps to create robust, scalable systems that support business innovation.",
  "",
  "As CEO of Aimlake Inc. and Capitalizedmoney Inc., Evan delivers cutting-edge",
  "solutions that blend technology with finance and automation. His focus is on",
  "creating secure, efficient systems that help organizations achieve their",
  "goals and stay ahead in a fast-evolving digital world.",
  "",
  "Based in Toronto, Ontario, Canada, he works with businesses across various",
  "industries to build infrastructures that are not only secure and scalable",
  "but also intelligent and automated. Whether it's protecting critical data,",
  "optimizing cloud deployments, or integrating AI solutions, he brings a",
  "comprehensive approach to every project.",
];

const KERNEL_LINES: [string, string] = [
  "uname -a",
  "Linux emshuvo 6.1.0-kali9-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.46-1kali1 (2024-01-08) x86_64 GNU/Linux",
];

export default function About() {
  return (
    <TerminalWindow
      id="about"
      title="about_me"
      command="cat about_me.txt"
      kernelInfo={true}
      kernelLines={KERNEL_LINES}
      outputLines={ABOUT_LINES}
      asciiTitle="about_me"
    />
  );
}
