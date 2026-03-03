"use client";

import { useState, useCallback } from "react";
import BootIntro from "./BootIntro";

export default function HackIntroWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showBoot, setShowBoot] = useState(true);

  const handleComplete = useCallback(() => {
    setShowBoot(false);
  }, []);

  return (
    <>
      {showBoot && <BootIntro onComplete={handleComplete} />}
      {children}
    </>
  );
}
