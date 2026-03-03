export default function About() {
  return (
    <section
      id="about"
      className="py-6 relative backdrop-blur-sm"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
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
                  About Me
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
                  About Me
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
          
          <div className="bg-gradient-to-br from-gray-900/60 via-blue-900/20 to-purple-900/20 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-cyan-400/30 shadow-2xl">
            <div className="space-y-6 text-lg md:text-xl text-gray-100 leading-relaxed">
              <p className="text-gray-200">
                A technology leader specializing in cloud security, system administration, and full-stack development. I combine expertise in AI automation, cybersecurity, and DevOps to create robust, scalable systems that support business innovation.
              </p>
              
              <p className="text-gray-200">
                As CEO of <strong className="text-cyan-400 font-bold">Aimlake Inc.</strong> and <strong className="text-purple-400 font-bold">Capitalizedmoney Inc.</strong>, I deliver cutting-edge solutions that blend technology with finance and automation. My focus is on creating secure, efficient systems that help organizations achieve their goals and stay ahead in a fast-evolving digital world.
              </p>
              
              <p className="text-gray-200">
                Based in Toronto, Ontario, Canada, I work with businesses across various industries to build infrastructures that are not only secure and scalable but also intelligent and automated. Whether it&apos;s protecting critical data, optimizing cloud deployments, or integrating AI solutions, I bring a comprehensive approach to every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

