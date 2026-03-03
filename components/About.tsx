import TerminalWindow from "./TerminalWindow";

export default function About() {
  return (
    <TerminalWindow
      id="about"
      title="about_me"
      command="cat about_me.txt"
      kernelInfo={true}
    >
      <pre className="whitespace-pre-wrap break-words font-mono text-sm md:text-base">
{`A technology leader specializing in cloud security, system administration,
and full-stack development. I combine expertise in AI automation, cybersecurity,
and DevOps to create robust, scalable systems that support business innovation.

As CEO of Aimlake Inc. and Capitalizedmoney Inc., I deliver cutting-edge
solutions that blend technology with finance and automation. My focus is on
creating secure, efficient systems that help organizations achieve their
goals and stay ahead in a fast-evolving digital world.

Based in Toronto, Ontario, Canada, I work with businesses across various
industries to build infrastructures that are not only secure and scalable
but also intelligent and automated. Whether it's protecting critical data,
optimizing cloud deployments, or integrating AI solutions, I bring a
comprehensive approach to every project.`}
      </pre>
    </TerminalWindow>
  );
}
