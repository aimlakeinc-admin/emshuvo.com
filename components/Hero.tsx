"use client";

import { useEffect, useState } from "react";

const FULL_TEXT = "I specialize in designing secure, scalable, and AI-powered infrastructures that merge technology, finance, and automation. Based in Toronto, Ontario, Canada, I lead projects that help businesses innovate, grow with confidence.";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 30; // milliseconds per character
    let timeoutId: NodeJS.Timeout;
    let cursorInterval: NodeJS.Timeout;

    const typeText = () => {
      if (currentIndex < FULL_TEXT.length) {
        setDisplayedText(FULL_TEXT.substring(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeText, typingSpeed);
      } else {
        // Blink cursor after typing is complete
        cursorInterval = setInterval(() => {
          setShowCursor((prev) => !prev);
        }, 530);
      }
    };

    // Start typing after a short delay
    const startDelay = setTimeout(() => {
      typeText();
    }, 1000);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(timeoutId);
      if (cursorInterval) clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.98) 30%, rgba(0, 0, 0, 0.95) 70%, rgba(0, 0, 0, 0.98) 100%)'
      }}
    >
      {/* Animated Cyberpunk grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(cyan 1px, transparent 1px),
              linear-gradient(90deg, cyan 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }} 
        />
      </div>

      {/* Cybersecurity Code Rain Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/20 font-mono text-xs animate-code-rain"
            style={{
              left: `${(i * 5) % 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          >
            {i % 2 === 0 ? '0' : '1'}
          </div>
        ))}
      </div>

      {/* Hacking Scan Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-hack-scan" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent animate-hack-scan" style={{ animationDelay: '2s' }} />
      </div>

      {/* Terminal Cursor Effect */}
      <div className="absolute top-1/4 left-1/4 pointer-events-none">
        <div className="text-cyan-400/30 font-mono text-xs flex items-center">
          <span className="mr-2">$</span>
          <span className="animate-terminal-blink">_</span>
        </div>
      </div>

      {/* Animated particles/glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight animate-fade-in-up relative inline-block">
            <span className="relative z-10">Hi, I&apos;m Evan Mahmud Shuvo</span>
            {/* Animated underline effect */}
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 animate-pulse" />
          </h1>
          
          {/* Futuristic Video-Style Tagline */}
          <div className="relative mb-6 inline-block">
            <div className="text-2xl md:text-3xl font-display font-bold tracking-tight relative">
              {/* Main text with gradient */}
              <span 
                className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient"
                style={{
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Cloud Security, SysAdmin, AI, Business Growth & Digitalization Expertise
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
                Cloud Security, SysAdmin, AI, Business Growth & Digitalization Expertise
              </span>
              
              {/* Cybersecurity scan effect */}
              <div 
                className="absolute inset-0 pointer-events-none overflow-hidden"
                style={{ height: '100%' }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-400/40 to-transparent animate-hack-scan" />
              </div>
              
              {/* Terminal-style brackets */}
              <span className="absolute -left-4 top-0 text-cyan-400/50 font-mono text-lg">[</span>
              <span className="absolute -right-4 top-0 text-cyan-400/50 font-mono text-lg">]</span>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Building secure systems that scales like never before.
          </p>
          
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="inline-block">
              {displayedText}
              <span className={`inline-block w-0.5 h-5 bg-cyan-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} style={{ animation: 'blink-cursor 0.75s step-end infinite' }} />
            </span>
          </p>

          {/* Quick Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-xl shadow-xl p-6 border border-blue-400/50 hover:border-blue-300 transition-all duration-300 hover:shadow-blue-500/20 hover:-translate-y-1">
              <div className="text-4xl font-display font-bold text-blue-300 mb-2">5+</div>
              <div className="text-gray-200 font-medium">Years of Experience</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-xl shadow-xl p-6 border border-green-400/50 hover:border-green-300 transition-all duration-300 hover:shadow-green-500/20 hover:-translate-y-1">
              <div className="text-4xl font-display font-bold text-green-300 mb-2">50+</div>
              <div className="text-gray-200 font-medium">Projects Completed</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-xl shadow-xl p-6 border border-purple-400/50 hover:border-purple-300 transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-1">
              <div className="text-4xl font-display font-bold text-purple-300 mb-2">5+</div>
              <div className="text-gray-200 font-medium">Companies Founded & Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

