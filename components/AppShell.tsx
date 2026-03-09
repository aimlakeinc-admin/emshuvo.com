"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SplashScreen = dynamic(() => import("@/components/SplashScreen"), { ssr: false });

export default function AppShell({ children }: { children: React.ReactNode }) {
    const [showSplash, setShowSplash] = useState(true);

    const handleSplashComplete = useCallback(() => {
        setShowSplash(false);
    }, []);

    return (
        <>
            {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
            <Header />
            <main className="relative z-10 w-full min-h-screen">{children}</main>
            <Footer />
        </>
    );
}
