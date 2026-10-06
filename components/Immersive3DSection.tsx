"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Immersive3DScene = dynamic(() => import("./3d/Immersive3DScene"), {
  ssr: false,
  loading: () => <div className="h-[380px]" />,
});

export default function Immersive3DSection() {
  return (
    <section className="py-24 relative bg-[#020305] border-t border-b border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-[#d4af37] uppercase">
            ENTERPRISE VISION
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white max-w-4xl mx-auto leading-tight">
            Engineering technology that moves{" "}
            <span className="text-gradient-gold-green">businesses forward</span>.
          </h2>

          <Immersive3DScene />

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            From mobile PWA installations to high-capacity cloud deployments, MERLUX builds digital systems designed for longevity and commercial impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
