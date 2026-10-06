"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Cpu, CheckCircle2, ArrowRight } from "lucide-react";

export default function TechnologySection() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const techNodes = [
    { id: "react", name: "React / Next.js", category: "Frontend & Mobile", desc: "Component-driven Web Architecture" },
    { id: "angular", name: "Angular", category: "Frontend & Mobile", desc: "Enterprise Single-Page Application Framework" },
    { id: "ts", name: "TypeScript", category: "Frontend & Mobile", desc: "Strict Type-Safe Software Systems" },
    { id: "pwa", name: "PWA Engine", category: "Frontend & Mobile", desc: "Installable Progressive Web App Engine" },
    { id: "node", name: "Node.js", category: "Backend & Database", desc: "High-Throughput Asynchronous APIs" },
    { id: "firebase", name: "Firebase", category: "Backend & Database", desc: "Realtime Database & Authentication" },
    { id: "mongo", name: "MongoDB", category: "Backend & Database", desc: "Flexible NoSQL Document Storage" },
    { id: "aws", name: "AWS", category: "Cloud & Infrastructure", desc: "Amazon Cloud Compute & Storage" },
    { id: "gcp", name: "Google Cloud", category: "Cloud & Infrastructure", desc: "Google Cloud Infrastructure Deployments" },
    { id: "figma", name: "Figma", category: "Design & UX", desc: "UX Wireframing & Interface Prototyping" },
  ];

  return (
    <section id="technology" className="py-32 relative bg-[#04060b] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-[#22c55e]" />
            <span>TECHNOLOGY STACK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Battle-Tested <span className="text-gradient-gold-green">Technologies</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            We utilize proven enterprise frameworks and modern web standards to ensure high performance, security, and scalability.
          </p>
        </div>

        {/* Central Hub & Technology Grid */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central MERLUX Core Hub Node */}
          <div className="flex justify-center mb-12">
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-36 h-36 rounded-full bg-gradient-to-tr from-[#090d16] via-[#0d1624] to-[#090d16] border-2 border-[#22c55e]/60 flex flex-col items-center justify-center text-center p-4 shadow-[0_0_60px_rgba(34,197,94,0.15)] z-20"
            >
              <span className="text-xs font-black tracking-widest text-[#22c55e] uppercase">MERLUX</span>
              <span className="text-[9px] text-slate-400 font-bold tracking-wider uppercase mt-1">Tech Core</span>
            </motion.div>
          </div>

          {/* Tech Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {techNodes.map((tech) => {
              const isHovered = hoveredTech === tech.id;
              return (
                <motion.div
                  key={tech.id}
                  onMouseEnter={() => setHoveredTech(tech.id)}
                  onMouseLeave={() => setHoveredTech(null)}
                  whileHover={{ y: -4 }}
                  className={`p-5 rounded-2xl transition-all cursor-pointer relative ${
                    isHovered
                      ? "bg-[#090e17] border border-[#22c55e] shadow-lg shadow-emerald-500/10"
                      : "glass-card border-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] uppercase font-bold text-slate-400">{tech.category}</span>
                    <CheckCircle2 className={`w-3.5 h-3.5 ${isHovered ? "text-[#22c55e]" : "text-slate-600"}`} />
                  </div>
                  <h3 className="text-sm font-bold text-white">{tech.name}</h3>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">{tech.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/technologies"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#22c55e] hover:text-white uppercase tracking-wider transition"
            >
              <span>Explore Full Tech Stack Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
