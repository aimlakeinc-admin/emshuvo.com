export default function Contact() {
  return (
    <section
      id="contact"
      className="py-6 relative overflow-hidden"
    >
      {/* Cyberpunk grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(cyan 1px, transparent 1px),
            linear-gradient(90deg, cyan 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
            Contact
          </h2>
          
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            I&apos;m open to new collaborations, partnerships, and opportunities.
            Let&apos;s build something secure, scalable, and future-ready.
          </p>
          
          <div className="space-y-6">
            <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-gray-600 transition-all">
              <h3 className="text-xl font-display font-semibold mb-4 tracking-tight text-cyan-300">Email</h3>
              <div className="space-y-2">
                <a
                  href="mailto:emshuvo@aimlake.com"
                  className="block text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  emshuvo@aimlake.com
                </a>
                <a
                  href="mailto:emshuvo@capitalizedmoney.com"
                  className="block text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  emshuvo@capitalizedmoney.com
                </a>
              </div>
            </div>
            
            <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-gray-600 transition-all">
              <h3 className="text-xl font-display font-semibold mb-2 tracking-tight text-cyan-300">Location</h3>
              <p className="text-gray-300">Toronto, Ontario, Canada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

