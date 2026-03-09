"use client";

import { useState, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

export default function AppShell({ children }: { children: React.ReactNode }) {
    const [showSplash, setShowSplash] = useState(true);

    const handleSplashComplete = useCallback(() => {
        setShowSplash(false);
    }, []);

    return (
        <>
            {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
            <div style={{ opacity: showSplash ? 0 : 1, transition: "opacity 0.5s ease" }}>
                <Header />
                <main className="relative z-10 w-full min-h-screen">{children}</main>
                <Footer />
            </div>
        </>
    );
}
