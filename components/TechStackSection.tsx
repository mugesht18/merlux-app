"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Database,
  Cloud,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function TechStackSection() {
  const categories = [
    {
      id: "frontend",
      name: "Frontend & Mobile",
      icon: Code2,
      description: "Fast, installable, and modern user interfaces engineered for speed.",
      techs: [
        { name: "Angular", desc: "Enterprise Single-Page Framework" },
        { name: "React / Next.js", desc: "Component-driven Web Apps" },
        { name: "TypeScript", desc: "Strict Type-Safe Codebases" },
        { name: "JavaScript", desc: "Dynamic Scripting Core" },
        { name: "Progressive Web Apps", desc: "Cross-platform PWA Experience" },
      ],
    },
    {
      id: "backend",
      name: "Backend & Database",
      icon: Database,
      description: "Robust database pipelines, authentication systems, and cloud functions.",
      techs: [
        { name: "Node.js", desc: "High-performance Event Loop APIs" },
        { name: "Firebase", desc: "Realtime Database & Authentication" },
        { name: "MongoDB", desc: "Flexible NoSQL Document Storage" },
        { name: "SQL Datastores", desc: "Relational Data Integrity" },
      ],
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      icon: Cloud,
      description: "Automated cloud infrastructure for zero downtime deployment.",
      techs: [
        { name: "Amazon Web Services (AWS)", desc: "EC2, S3, CloudFront Deployments" },
        { name: "Google Cloud Platform", desc: "App Engine, Cloud Run, Firebase Hosting" },
        { name: "Git Version Control", desc: "Continuous Integration & Versioning" },
      ],
    },
    {
      id: "design",
      name: "Design & Collaboration",
      icon: Layers,
      description: "User-centric UI/UX prototypes crafted before code implementation.",
      techs: [
        { name: "Figma", desc: "Interactive UI/UX Wireframing & Design" },
      ],
    },
  ];

  const [activeCat, setActiveCat] = useState("frontend");

  const currentCategory = categories.find((c) => c.id === activeCat) || categories[0];

  return (
    <section id="technology" className="py-24 relative bg-[#08090d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3"
          >
            <Cpu className="w-3.5 h-3.5 text-[#3cff00]" />
            <span>Modern Stack</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Proven Technologies for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3cff00] to-[#22c55e]">
              Scale & Speed
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-slate-400 text-base sm:text-lg"
          >
            We choose battle-tested frameworks to guarantee fast load times, security, and effortless maintainability.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeCat;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-[#3cff00] to-[#22c55e] text-slate-950 shadow-lg shadow-emerald-500/20"
                    : "glass-card text-slate-300 hover:text-white hover:border-emerald-500/40"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Grid */}
        <motion.div
          key={activeCat}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-12 glass-panel p-8 sm:p-12 rounded-3xl border border-white/10"
        >
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-extrabold text-white">{currentCategory.name}</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              {currentCategory.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategory.techs.map((tech, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#3cff00] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{tech.name}</h4>
                  <p className="text-xs text-slate-400 mt-1">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
