"use client";

import { useState, useCallback } from "react";
import HackIntro from "./HackIntro";

export default function HackIntroWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showHackIntro, setShowHackIntro] = useState(true);

  const handleComplete = useCallback(() => {
    setShowHackIntro(false);
  }, []);

  return (
    <>
      {showHackIntro && <HackIntro onComplete={handleComplete} />}
      {children}
    </>
  );
}
