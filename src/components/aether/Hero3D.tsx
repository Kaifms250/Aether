import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshDistortMaterial,
  Sparkles,
} from "@react-three/drei";
import type { Mesh } from "three";

function Knot() {
  const ref = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.12;
    ref.current.rotation.y += delta * 0.18;
    // mouse parallax
    const { x, y } = state.pointer;
    ref.current.position.x += (x * 0.6 - ref.current.position.x) * 0.05;
    ref.current.position.y += (y * 0.4 - ref.current.position.y) * 0.05;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.1}>
      <mesh
        ref={ref}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.06 : 1}
      >
        <torusKnotGeometry args={[1, 0.32, 220, 32]} />
        <MeshDistortMaterial
          color="#8ab4ff"
          roughness={0.15}
          metalness={0.9}
          distort={0.35}
          speed={1.4}
          emissive="#1a1f4a"
          emissiveIntensity={0.6}
        />
      </mesh>
    </Float>
  );
}

function Orb({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t * 0.6 + position[0]) * 0.25;
  });
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[0.35, 48, 48]} />
      <meshStandardMaterial
        color={color}
        roughness={0.1}
        metalness={1}
        emissive={color}
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

export function Hero3D() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // SSR fallback: pure CSS aurora so layout doesn't jump
    return <div className="absolute inset-0 bg-aurora" aria-hidden />;
  }

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <color attach="background" args={["#06080f"]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#8ab4ff" />
      <directionalLight position={[-5, -3, -2]} intensity={0.6} color="#c08aff" />
      <Suspense fallback={null}>
        <Knot />
        <Orb position={[-2.6, 0.8, -1]} color="#8ab4ff" scale={0.7} />
        <Orb position={[2.4, -0.6, -0.5]} color="#c0c5ce" scale={0.5} />
        <Orb position={[1.8, 1.4, -2]} color="#6d6cff" scale={0.4} />
        <Sparkles count={80} size={2} scale={[8, 5, 4]} speed={0.4} color="#c0c5ce" />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
