const industryCategories = [
  {
    title: "Healthcare & Medical",
    items: [
      "Medical Clinics",
      "Dental Clinics",
      "Healthcare Providers",
      "Physiotherapy & Rehab",
      "Wellness Centers",
    ],
  },
  {
    title: "Legal & Law Enforcement",
    items: [
      "Law Firms",
      "Legal Advisors",
      "Regulatory & Compliance",
      "Law Enforcement Agencies",
    ],
  },
  {
    title: "Finance & Investment",
    items: [
      "FinTech",
      "Investment Firms",
      "Trading & Analytics",
      "Accounting & Tax Professionals",
    ],
  },
  {
    title: "Technology & SaaS",
    items: [
      "IT Companies",
      "AI & Automation Startups",
      "Software Development Firms",
      "Cybersecurity Teams",
    ],
  },
  {
    title: "Automotive",
    items: [
      "Garages & Service Centers",
      "Automotive Tech",
      "Fleet / Transportation Services",
    ],
  },
  {
    title: "Hospitality & Food",
    items: [
      "Restaurants & Chains",
      "Cloud Kitchens",
      "Franchise Operations",
    ],
  },
  {
    title: "Small & Medium Businesses (SMBs)",
    items: [
      "Retail",
      "E-commerce",
      "Service Providers",
      "Local Enterprises",
    ],
  },
  {
    title: "Education & Training",
    items: [
      "Schools & Colleges",
      "Online Learning Platforms (EdTech)",
      "Coaching & Tutoring Centers",
      "Corporate Training Providers",
    ],
  },
  {
    title: "Real Estate & Construction",
    items: [
      "Real Estate Agencies",
      "Property Developers",
      "Architecture & Interior Design Studios",
      "Construction & Contracting Firms",
    ],
  },
  {
    title: "Logistics & Supply Chain",
    items: [
      "Freight & Shipping Companies",
      "Warehousing & Distribution",
      "Courier & Delivery Services",
      "Supply Chain Management Solutions",
    ],
  },
  {
    title: "Media, Marketing & Communications",
    items: [
      "Advertising Agencies",
      "PR & Media Firms",
      "Influencer Marketing & Creators",
      "Video Production & Photography Studios",
    ],
  },
  {
    title: "Energy & Environment",
    items: [
      "Renewable Energy Startups",
      "Oil, Gas & Utilities",
      "Environmental Consulting Firms",
      "Waste Management Services",
    ],
  },
  {
    title: "Fashion & Lifestyle",
    items: [
      "Apparel Brands",
      "Beauty & Cosmetics",
      "Fitness & Sports Brands",
      "Luxury & Lifestyle Retail",
    ],
  },
  {
    title: "Entertainment & Events",
    items: [
      "Event Management Companies",
      "Music & Film Production",
      "Theaters & Venues",
      "Gaming & Esports",
    ],
  },
  {
    title: "Manufacturing & Industrial",
    items: [
      "Manufacturing Plants",
      "Industrial Equipment Suppliers",
      "Automation & Robotics",
      "3D Printing & Product Design",
    ],
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="py-6 relative backdrop-blur-sm"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8">
        <div className="text-center mb-6">
          <div className="relative inline-block mb-6">
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
                Industries Served
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
                Industries Served
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
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Me and my team/company has been providing services across diverse industries, delivering secure, scalable solutions tailored to each sector&apos;s unique needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {industryCategories.map((category, index) => {
            const colors = [
              { bg: 'from-green-500/20 to-emerald-500/20', border: 'border-green-400/50', text: 'text-green-300', accent: 'from-green-400 to-emerald-400', bullet: 'text-green-400' },
              { bg: 'from-blue-500/20 to-indigo-500/20', border: 'border-blue-400/50', text: 'text-blue-300', accent: 'from-blue-400 to-indigo-400', bullet: 'text-blue-400' },
              { bg: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-400/50', text: 'text-purple-300', accent: 'from-purple-400 to-pink-400', bullet: 'text-purple-400' },
              { bg: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-400/50', text: 'text-cyan-300', accent: 'from-cyan-400 to-blue-400', bullet: 'text-cyan-400' },
              { bg: 'from-orange-500/20 to-amber-500/20', border: 'border-orange-400/50', text: 'text-orange-300', accent: 'from-orange-400 to-amber-400', bullet: 'text-orange-400' },
              { bg: 'from-pink-500/20 to-rose-500/20', border: 'border-pink-400/50', text: 'text-pink-300', accent: 'from-pink-400 to-rose-400', bullet: 'text-pink-400' },
              { bg: 'from-indigo-500/20 to-purple-500/20', border: 'border-indigo-400/50', text: 'text-indigo-300', accent: 'from-indigo-400 to-purple-400', bullet: 'text-indigo-400' },
              { bg: 'from-teal-500/20 to-cyan-500/20', border: 'border-teal-400/50', text: 'text-teal-300', accent: 'from-teal-400 to-cyan-400', bullet: 'text-teal-400' },
              { bg: 'from-yellow-500/20 to-orange-500/20', border: 'border-yellow-400/50', text: 'text-yellow-300', accent: 'from-yellow-400 to-orange-400', bullet: 'text-yellow-400' },
              { bg: 'from-red-500/20 to-pink-500/20', border: 'border-red-400/50', text: 'text-red-300', accent: 'from-red-400 to-pink-400', bullet: 'text-red-400' },
              { bg: 'from-violet-500/20 to-purple-500/20', border: 'border-violet-400/50', text: 'text-violet-300', accent: 'from-violet-400 to-purple-400', bullet: 'text-violet-400' },
              { bg: 'from-emerald-500/20 to-green-500/20', border: 'border-emerald-400/50', text: 'text-emerald-300', accent: 'from-emerald-400 to-green-400', bullet: 'text-emerald-400' },
              { bg: 'from-sky-500/20 to-blue-500/20', border: 'border-sky-400/50', text: 'text-sky-300', accent: 'from-sky-400 to-blue-400', bullet: 'text-sky-400' },
              { bg: 'from-fuchsia-500/20 to-pink-500/20', border: 'border-fuchsia-400/50', text: 'text-fuchsia-300', accent: 'from-fuchsia-400 to-pink-400', bullet: 'text-fuchsia-400' },
              { bg: 'from-lime-500/20 to-green-500/20', border: 'border-lime-400/50', text: 'text-lime-300', accent: 'from-lime-400 to-green-400', bullet: 'text-lime-400' },
            ];
            const colorScheme = colors[index % colors.length];
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br ${colorScheme.bg} backdrop-blur-md rounded-xl shadow-xl p-6 md:p-8 border ${colorScheme.border} transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
              >
                <div className="flex items-center mb-5">
                  <div className={`w-1 h-8 bg-gradient-to-b ${colorScheme.accent} rounded-full mr-3`}></div>
                  <h3 className={`text-lg md:text-xl font-display font-bold ${colorScheme.text} tracking-tight group-hover:opacity-80 transition-opacity`}>
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-200 text-sm md:text-base leading-relaxed flex items-start"
                    >
                      <span className={`${colorScheme.bullet} mr-2.5 mt-0.5`}>▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

