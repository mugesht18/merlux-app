"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingMonolith() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.15;
      meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={1.8}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshPhysicalMaterial
          color="#0a1510"
          roughness={0.1}
          metalness={0.9}
          clearcoat={1}
          clearcoatRoughness={0.05}
          emissive="#102518"
          emissiveIntensity={0.3}
          reflectivity={0.95}
        />
      </mesh>
    </Float>
  );
}

export default function Immersive3DScene() {
  return (
    <div className="w-full h-[380px] sm:h-[480px] relative flex items-center justify-center pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 8, 5]} intensity={2} color="#d4af37" />
        <spotLight position={[-5, -5, -2]} intensity={1.5} color="#22c55e" />
        <FloatingMonolith />
      </Canvas>
    </div>
  );
}
