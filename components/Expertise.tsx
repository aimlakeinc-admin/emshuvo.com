const expertiseAreas = [
  {
    title: "Cloud Security",
    description:
      "Designing and managing secure cloud infrastructures focused on compliance, protection, and scalability.",
  },
  {
    title: "System Administration",
    description:
      "Overseeing complex IT systems with performance optimization and 24/7 reliability.",
  },
  {
    title: "Full-Stack Development",
    description:
      "Building modern web applications from UI to backend infrastructure.",
  },
  {
    title: "AI & Automation",
    description:
      "Integrating artificial intelligence to streamline processes and drive productivity.",
  },
  {
    title: "Cybersecurity",
    description:
      "Protecting critical data through ethical hacking, vulnerability assessment, and network defense.",
  },
  {
    title: "DevOps",
    description:
      "Automating software delivery pipelines and managing scalable cloud deployments.",
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="py-12 relative backdrop-blur-sm"
      style={{
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.98) 100%)'
      }}
    >
      {/* Cybersecurity Grid Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(cyan 1px, transparent 1px),
              linear-gradient(90deg, cyan 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      {/* Binary Code Rain Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/10 font-mono text-xs"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 8) % 100}%`,
              animation: `code-rain ${3 + (i % 3)}s linear infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            {i % 2 === 0 ? '0' : '1'}
          </div>
        ))}
      </div>

      {/* Subtle Scan Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-hack-scan" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/15 to-transparent animate-hack-scan" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="text-center mb-12">
          <div className="relative inline-block mb-4">
            <div className="text-5xl md:text-6xl font-display font-bold tracking-tight relative">
              {/* Main text with gradient */}
              <span 
                className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient"
                style={{
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Expertise
              </span>
              
              {/* Glitch overlay effect - subtle */}
              <span 
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-glitch pointer-events-none"
                style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mixBlendMode: 'screen',
                }}
                aria-hidden="true"
              >
                Expertise
              </span>
              
              {/* Cybersecurity scan effect */}
              <div 
                className="absolute inset-0 pointer-events-none overflow-hidden"
                style={{ height: '100%' }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-400/40 to-transparent animate-hack-scan" />
              </div>
              
              {/* Terminal-style brackets */}
              <span className="absolute -left-6 top-0 text-cyan-400/50 font-mono text-2xl md:text-3xl">[</span>
              <span className="absolute -right-6 top-0 text-cyan-400/50 font-mono text-2xl md:text-3xl">]</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {expertiseAreas.map((area, index) => {
            const colors = [
              { bg: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-400/50', text: 'text-cyan-300', accent: 'from-cyan-400 to-blue-400' },
              { bg: 'from-green-500/20 to-emerald-500/20', border: 'border-green-400/50', text: 'text-green-300', accent: 'from-green-400 to-emerald-400' },
              { bg: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-400/50', text: 'text-purple-300', accent: 'from-purple-400 to-pink-400' },
              { bg: 'from-orange-500/20 to-amber-500/20', border: 'border-orange-400/50', text: 'text-orange-300', accent: 'from-orange-400 to-amber-400' },
              { bg: 'from-blue-500/20 to-indigo-500/20', border: 'border-blue-400/50', text: 'text-blue-300', accent: 'from-blue-400 to-indigo-400' },
              { bg: 'from-pink-500/20 to-rose-500/20', border: 'border-pink-400/50', text: 'text-pink-300', accent: 'from-pink-400 to-rose-400' },
            ];
            const colorScheme = colors[index % colors.length];
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br ${colorScheme.bg} backdrop-blur-md rounded-xl shadow-xl p-6 md:p-8 border ${colorScheme.border} transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-1 h-8 bg-gradient-to-b ${colorScheme.accent} rounded-full mr-3`}></div>
                  <h3 className={`text-xl md:text-2xl font-display font-bold ${colorScheme.text} tracking-tight group-hover:opacity-80 transition-opacity`}>
                    {area.title}
                  </h3>
                </div>
                <p className="text-gray-200 leading-relaxed text-base md:text-lg">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

