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
      className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden bg-hacker-black"
    >
      {/* Cybersecurity Code Rain Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-hacker-green font-mono text-xs animate-code-rain"
            style={{
              left: `${(i * 4) % 100}%`,
              animationDelay: `${i * 0.15}s`,
              animationDuration: `${3 + (i % 4)}s`,
            }}
          >
            {Math.random() > 0.5 ? '0' : '1'}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 font-mono">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          <div className="mb-4 text-hacker-cyan text-sm">
            <span>root@emshuvo.com:~$</span> ./execute_profile.sh
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-hacker-green mb-6 animate-glitch border-b border-hacker-green/50 pb-4 inline-block pr-6">
            &gt; EVAN_MAHMUD_SHUVO
          </h1>

          <div className="relative mb-6">
            <div className="text-xl md:text-2xl font-bold text-hacker-cyan bg-hacker-green/5 border border-hacker-green/30 p-4 shadow-[0_0_15px_rgba(0,255,65,0.1)]">
              [ ACCESS_LEVEL: ROOT ] <br className="md:hidden" />
              <span className="text-hacker-green mt-2 inline-block">Cloud Security | SysAdmin | AI | Business Growth</span>
            </div>
          </div>

          <p className="text-lg text-hacker-green/80 mb-6 font-mono">
            <span className="text-hacker-cyan">&gt;</span> Building secure systems that scale like never before.
          </p>

          <div className="bg-hacker-dark border border-hacker-green/30 p-5 mb-10 shadow-[inset_0_0_20px_rgba(0,255,65,0.05)] min-h-[140px] md:min-h-[100px]">
            <p className="text-lg text-hacker-green leading-relaxed font-mono">
              <span className="text-hacker-red mr-3">root@sys:~#</span>
              <span className="inline-block">
                {displayedText}
                <span className={`inline-block w-2.5 h-6 bg-hacker-green ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              </span>
            </p>
          </div>

          {/* Quick Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
            <div className="bg-hacker-dark border border-hacker-green p-6 hover:bg-hacker-green hover:text-hacker-dark transition-all duration-300 group cursor-default relative overflow-hidden">
              <div className="absolute top-0 right-0 p-1 text-xs text-hacker-green/40 group-hover:text-hacker-dark/40">SYS.VAR.01</div>
              <div className="text-4xl font-bold mb-2 text-hacker-cyan group-hover:text-hacker-dark group-hover:animate-glitch">&gt; 5+</div>
              <div className="text-hacker-green font-medium group-hover:text-hacker-dark">&gt; YEARS_EXP_</div>
            </div>
            <div className="bg-hacker-dark border border-hacker-green p-6 hover:bg-hacker-green hover:text-hacker-dark transition-all duration-300 group cursor-default relative overflow-hidden">
              <div className="absolute top-0 right-0 p-1 text-xs text-hacker-green/40 group-hover:text-hacker-dark/40">SYS.VAR.02</div>
              <div className="text-4xl font-bold mb-2 text-hacker-cyan group-hover:text-hacker-dark group-hover:animate-glitch">&gt; 50+</div>
              <div className="text-hacker-green font-medium group-hover:text-hacker-dark">&gt; DEPLOYMENTS_</div>
            </div>
            <div className="bg-hacker-dark border border-hacker-green p-6 hover:bg-hacker-green hover:text-hacker-dark transition-all duration-300 group cursor-default relative overflow-hidden">
              <div className="absolute top-0 right-0 p-1 text-xs text-hacker-green/40 group-hover:text-hacker-dark/40">SYS.VAR.03</div>
              <div className="text-4xl font-bold mb-2 text-hacker-cyan group-hover:text-hacker-dark group-hover:animate-glitch">&gt; 5+</div>
              <div className="text-hacker-green font-medium group-hover:text-hacker-dark">&gt; ORGS_INITIALIZED_</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

