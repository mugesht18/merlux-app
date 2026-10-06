"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function DigitalCoreMesh() {
  const outerTorusRef = useRef<THREE.Mesh>(null);
  const innerIcoRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const mouseX = (state.pointer.x * Math.PI) / 10;
    const mouseY = (state.pointer.y * Math.PI) / 10;

    if (groupRef.current) {
      // Smooth reactive rotation to cursor
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouseY * 0.4 + Math.sin(t * 0.3) * 0.05,
        0.05
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouseX * 0.4 + t * 0.15,
        0.05
      );
    }

    if (outerTorusRef.current) {
      outerTorusRef.current.rotation.z = Math.sin(t * 0.2) * 0.2;
    }

    if (innerIcoRef.current) {
      innerIcoRef.current.rotation.x = -t * 0.2;
      innerIcoRef.current.rotation.y = t * 0.3;
    }

    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2 + Math.cos(t * 0.3) * 0.1;
      ringRef.current.rotation.z = t * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={1.15}>
      {/* Outer Glass & Metallic Interconnected Geometric Structure */}
      <mesh ref={outerTorusRef}>
        <torusKnotGeometry args={[1.3, 0.22, 128, 32, 2, 3]} />
        <meshPhysicalMaterial
          color="#0f1f17"
          roughness={0.15}
          metalness={0.85}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={0.9}
          emissive="#0d2818"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Inner Crystalline Data Core */}
      <mesh ref={innerIcoRef} scale={0.75}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          resolution={512}
          transmission={0.92}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          thickness={0.6}
          ior={1.5}
          chromaticAberration={0.06}
          anisotropy={0.1}
          distortion={0.2}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color="#d4af37"
        />
      </mesh>

      {/* Floating Data Ring */}
      <mesh ref={ringRef}>
        <ringGeometry args={[2.0, 2.05, 64]} />
        <meshBasicMaterial color="#d4af37" side={THREE.DoubleSide} transparent opacity={0.4} />
      </mesh>

      {/* Internal Energy Glow */}
      <pointLight position={[0, 0, 0]} intensity={3.5} color="#22c55e" distance={5} />
      <pointLight position={[1, 1, 1]} intensity={2.0} color="#d4af37" distance={4} />
    </group>
  );
}

export default function Hero3DCore() {
  return (
    <div className="w-full h-[450px] sm:h-[560px] lg:h-[640px] relative flex items-center justify-center">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-amber-500/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#22c55e" />
        <spotLight position={[0, 5, 5]} intensity={2} angle={0.6} penumbra={1} color="#d4af37" />

        <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
          <DigitalCoreMesh />
        </Float>

        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.8} minPolarAngle={Math.PI / 2.2} />
      </Canvas>
    </div>
  );
}
