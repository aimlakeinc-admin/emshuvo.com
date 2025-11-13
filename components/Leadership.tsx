const companies = [
  {
    name: "Aimlake Inc.",
    role: "CEO & Founder",
    description:
      "Leading innovative technology solutions and digital transformation projects that help businesses grow using AI, automation, and cloud infrastructure.",
    email: "emshuvo@aimlake.com",
    website: "https://www.aimlake.com",
  },
  {
    name: "Capitalizedmoney Inc.",
    role: "CEO & Founder",
    description:
      "Building fintech systems that combine investment analytics, automation, and data science for smarter financial decision-making.",
    email: "emshuvo@capitalizedmoney.com",
    website: "https://www.capitalizedmoney.com",
  },
  {
    name: "CarCare24x7 Inc.",
    role: "CTO / Chief Business Growth Officer",
    description:
      "An upcoming AI-powered automotive ecosystem that connects garages and car owners through an app. Offers service bookings, wallet and reward systems, and garage analytics.",
    email: "emshuvo@carcare24x7.com",
    website: "https://www.carcare24x7.com",
  },
];

export default function Leadership() {
  return (
    <section 
      className="py-12 relative backdrop-blur-sm"
      style={{
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.98) 0%, rgba(0, 0, 0, 0.95) 100%)'
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
                Leadership
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
                Leadership
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {companies.map((company, index) => {
            const colors = [
              { bg: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-400/50', text: 'text-cyan-300', link: 'text-cyan-300 hover:text-cyan-200' },
              { bg: 'from-green-500/20 to-emerald-500/20', border: 'border-green-400/50', text: 'text-green-300', link: 'text-green-300 hover:text-green-200' },
              { bg: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-400/50', text: 'text-purple-300', link: 'text-purple-300 hover:text-purple-200' },
            ];
            const colorScheme = colors[index % colors.length];
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br ${colorScheme.bg} backdrop-blur-md rounded-xl shadow-xl p-6 md:p-8 border ${colorScheme.border} transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
              >
                <div className="mb-4">
                  <h3 className={`text-2xl md:text-3xl font-display font-bold ${colorScheme.text} mb-2 tracking-tight group-hover:opacity-80 transition-opacity`}>
                    {company.name}
                  </h3>
                  <p className="text-lg md:text-xl font-display text-gray-200 font-semibold tracking-tight">
                    {company.role}
                  </p>
                </div>
                <p className="text-gray-200 leading-relaxed mb-6 text-base md:text-lg">
                  {company.description}
                </p>
                <div className="space-y-3 pt-4 border-t border-gray-700/50">
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block ${colorScheme.link} font-medium transition-colors group/link`}
                  >
                    <span className="group-hover/link:underline">{company.website.replace("https://", "")}</span>
                  </a>
                  <a
                    href={`mailto:${company.email}`}
                    className={`block ${colorScheme.link} font-medium transition-colors group/link`}
                  >
                    <span className="group-hover/link:underline">{company.email}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

