"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Environment } from "@react-three/drei";
import * as THREE from "three";

function AnimatedOrb() {
    const meshRef = useRef<THREE.Mesh>(null!);
    const ringRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.3;
            meshRef.current.rotation.y = t * 0.25;
            meshRef.current.rotation.z = Math.cos(t * 0.2) * 0.2;
        }
        if (ringRef.current) {
            ringRef.current.rotation.x = t * 0.15;
            ringRef.current.rotation.z = Math.sin(t * 0.1) * 0.5;
        }
    });

    return (
        <group scale={0.7}>
            {/* Pulse ring — scaled down to stay inside canvas */}
            <mesh ref={ringRef} scale={[1.6, 1.6, 0.02]}>
                <torusGeometry args={[1, 0.02, 8, 80]} />
                <meshStandardMaterial
                    color="#8b5cf6"
                    emissive="#8b5cf6"
                    emissiveIntensity={0.6}
                    transparent
                    opacity={0.45}
                />
            </mesh>

            {/* Second thinner ring */}
            <mesh rotation={[Math.PI / 2.5, 0.3, 0]} scale={[1.3, 1.3, 0.02]}>
                <torusGeometry args={[1, 0.012, 8, 80]} />
                <meshStandardMaterial
                    color="#3b82f6"
                    emissive="#3b82f6"
                    emissiveIntensity={0.8}
                    transparent
                    opacity={0.3}
                />
            </mesh>

            {/* Core distorted sphere */}
            <Sphere ref={meshRef} args={[1.1, 128, 128]}>
                <MeshDistortMaterial
                    color="#4f46e5"
                    attach="material"
                    distort={0.45}
                    speed={2}
                    roughness={0.1}
                    metalness={0.8}
                    envMapIntensity={2}
                />
            </Sphere>

            {/* Inner glowing core */}
            <Sphere args={[0.65, 64, 64]}>
                <meshStandardMaterial
                    color="#a78bfa"
                    emissive="#a78bfa"
                    emissiveIntensity={0.4}
                    roughness={0.2}
                    metalness={0.9}
                    transparent
                    opacity={0.9}
                />
            </Sphere>

            {/* Orbiting dot — pulled closer */}
            <mesh position={[1.3, 0, 0]}>
                <sphereGeometry args={[0.06, 16, 16]} />
                <meshStandardMaterial
                    color="#f43f5e"
                    emissive="#f43f5e"
                    emissiveIntensity={2}
                />
            </mesh>
        </group>
    );
}

export default function FloatingOrb() {
    return (
        <Canvas
            camera={{ position: [0, 0, 3.2], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
            style={{ background: "transparent" }}
        >
            <ambientLight intensity={0.3} />
            <pointLight position={[5, 5, 5]} intensity={2} color="#6d28d9" />
            <pointLight position={[-5, -5, -5]} intensity={1} color="#3b82f6" />
            <pointLight position={[0, 5, -3]} intensity={1.5} color="#f43f5e" />
            <Environment preset="city" />
            <AnimatedOrb />
        </Canvas>
    );
}
