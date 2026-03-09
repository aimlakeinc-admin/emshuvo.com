"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Neural network node type ──
interface NeuralNode {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    pulsePhase: number;
    layer: number;
}

// ── Neural network canvas animation ──
function NeuralCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const nodesRef = useRef<NeuralNode[]>([]);
    const animRef = useRef<number>(0);
    const progressRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        // Create neural network-like nodes
        const nodeCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 12000));
        nodesRef.current = Array.from({ length: nodeCount }, (_, i) => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            radius: Math.random() * 2 + 1,
            pulsePhase: Math.random() * Math.PI * 2,
            layer: Math.floor(Math.random() * 3),
        }));

        const draw = (time: number) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            progressRef.current = Math.min(progressRef.current + 0.008, 1);
            const progress = progressRef.current;

            const nodes = nodesRef.current;
            const connectionDist = 120 + progress * 60;

            // Update and draw nodes
            nodes.forEach((node) => {
                node.x += node.vx;
                node.y += node.vy;

                // Wrap edges
                if (node.x < 0) node.x = canvas.width;
                if (node.x > canvas.width) node.x = 0;
                if (node.y < 0) node.y = canvas.height;
                if (node.y > canvas.height) node.y = 0;

                // Pulse animation
                const pulse = Math.sin(time * 0.002 + node.pulsePhase) * 0.5 + 0.5;
                const colors = [
                    `rgba(139, 92, 246, ${0.3 + pulse * 0.5})`,   // violet
                    `rgba(59, 130, 246, ${0.3 + pulse * 0.5})`,    // blue
                    `rgba(6, 182, 212, ${0.3 + pulse * 0.5})`,     // cyan
                ];

                // Draw node glow
                const gradient = ctx.createRadialGradient(
                    node.x, node.y, 0,
                    node.x, node.y, node.radius * 4
                );
                gradient.addColorStop(0, colors[node.layer]);
                gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Draw node core
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius * (0.8 + pulse * 0.4), 0, Math.PI * 2);
                ctx.fillStyle = colors[node.layer];
                ctx.fill();
            });

            // Draw connections (neural synapses)
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDist) {
                        const alpha = ((connectionDist - dist) / connectionDist) * 0.15 * progress;
                        const pulseAlpha = Math.sin(time * 0.003 + i * 0.1) * 0.5 + 0.5;

                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(139, 92, 246, ${alpha * (0.5 + pulseAlpha * 0.5)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();

                        // Data pulse traveling along connection
                        if (dist < connectionDist * 0.5 && Math.random() < 0.003) {
                            const t = (time % 2000) / 2000;
                            const px = nodes[i].x + (nodes[j].x - nodes[i].x) * t;
                            const py = nodes[i].y + (nodes[j].y - nodes[i].y) * t;
                            ctx.beginPath();
                            ctx.arc(px, py, 1.5, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(6, 182, 212, ${0.6 * pulseAlpha})`;
                            ctx.fill();
                        }
                    }
                }
            }

            animRef.current = requestAnimationFrame(draw);
        };

        animRef.current = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.8 }}
        />
    );
}

// ── Main Splash Component ──
export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
    const [phase, setPhase] = useState(0); // 0: initializing, 1: analyzing, 2: ready, 3: exit

    useEffect(() => {
        const timers = [
            setTimeout(() => setPhase(1), 800),
            setTimeout(() => setPhase(2), 2200),
            setTimeout(() => setPhase(3), 3400),
            setTimeout(() => onComplete(), 4200),
        ];
        return () => timers.forEach(clearTimeout);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {phase < 3 && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030305] overflow-hidden"
                >
                    {/* Neural network background */}
                    <NeuralCanvas />

                    {/* Radial glow behind center */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[80px] pointer-events-none" />

                    {/* Center content */}
                    <div className="relative z-10 flex flex-col items-center text-center px-6">
                        {/* AI brain icon / scanning ring */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-24 h-24 mb-10"
                        >
                            {/* Scanning ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-2 border-transparent"
                                style={{
                                    borderTopColor: "rgba(139, 92, 246, 0.6)",
                                    borderRightColor: "rgba(59, 130, 246, 0.3)",
                                }}
                            />
                            {/* Second ring */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-2 rounded-full border border-transparent"
                                style={{
                                    borderBottomColor: "rgba(6, 182, 212, 0.5)",
                                    borderLeftColor: "rgba(139, 92, 246, 0.2)",
                                }}
                            />
                            {/* Core dot */}
                            <motion.div
                                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 m-auto w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                            />
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4"
                        >
                            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Initializing Neural Interface
                            </span>
                        </motion.h1>

                        {/* Status text with typing effect */}
                        <div className="h-8 flex items-center gap-2">
                            <AnimatePresence mode="wait">
                                {phase === 0 && (
                                    <motion.p
                                        key="p0"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4 }}
                                        className="text-sm font-mono text-zinc-400 tracking-wider"
                                    >
                                        <span className="text-violet-400">$</span> loading neural pathways...
                                    </motion.p>
                                )}
                                {phase === 1 && (
                                    <motion.p
                                        key="p1"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4 }}
                                        className="text-sm font-mono text-zinc-400 tracking-wider"
                                    >
                                        <span className="text-blue-400">$</span> calibrating AI systems...
                                    </motion.p>
                                )}
                                {phase === 2 && (
                                    <motion.p
                                        key="p2"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4 }}
                                        className="text-sm font-mono text-cyan-400 tracking-wider"
                                    >
                                        <span className="text-emerald-400">✓</span> system ready — entering experience
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Progress bar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 w-48 h-[2px] bg-white/5 rounded-full overflow-hidden"
                        >
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: phase >= 2 ? "100%" : phase >= 1 ? "65%" : "25%" }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                className="h-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
