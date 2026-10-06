"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Smartphone, Globe, Layout, Lock } from "lucide-react";

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Web", "Mobile", "UI/UX"];

  // Projects data with authentic links when available, or null when unavailable
  const projects: Array<{
    id: number;
    title: string;
    category: string;
    subtitle: string;
    description: string;
    tech: string[];
    link?: string | null;
  }> = [
    {
      id: 1,
      title: "Sriragavendratemplejewellery",
      category: "Web",
      subtitle: "Web E-Commerce Platform",
      description: "High-performance online store for traditional temple jewellery with instant catalog browsing.",
      tech: ["React", "Next.js", "Node.js", "PWA"],
      link: null,
    },
    {
      id: 2,
      title: "Medishop",
      category: "Web",
      subtitle: "Healthcare & Digital Pharmacy",
      description: "Digital medicine ordering and healthcare service booking interface with PWA capabilities.",
      tech: ["React", "MongoDB", "Express", "PWA"],
      link: null,
    },
    {
      id: 3,
      title: "Sriragavendratemplejewellery App",
      category: "Mobile",
      subtitle: "PWA Mobile Experience",
      description: "Installable Progressive Web App for mobile users with instant offline product catalog.",
      tech: ["PWA Engine", "Service Worker", "Firebase"],
      link: null,
    },
    {
      id: 4,
      title: "Medishop Mobile",
      category: "Mobile",
      subtitle: "Mobile Pharmacy PWA App",
      description: "Fast-loading mobile pharmacy application with prescription uploading & prescription tracking.",
      tech: ["Mobile PWA", "Node.js", "AWS"],
      link: null,
    },
    {
      id: 5,
      title: "ProHome Interface",
      category: "UI/UX",
      subtitle: "Smart Home Management UI",
      description: "Clean, conversion-focused user interface design for real estate and home automation controls.",
      tech: ["Figma", "UI/UX System", "TailwindCSS"],
      link: null,
    },
    {
      id: 6,
      title: "ProHome Dashboard",
      category: "UI/UX",
      subtitle: "Real Estate Analytics UI",
      description: "Interactive administrative control dashboard for real estate property management.",
      tech: ["UI Architecture", "Figma", "Design System"],
      link: null,
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-10">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all uppercase cursor-pointer ${
                isActive
                  ? "bg-[#22c55e] text-slate-950 shadow-lg shadow-emerald-500/20"
                  : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => {
            const hasValidLink = Boolean(
              project.link &&
                project.link !== "#" &&
                project.link !== "https://merluxsolutions.com" &&
                project.link !== "https://merluxsoftware.com"
            );

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card-luxury p-6 rounded-3xl border border-white/10 hover:border-[#22c55e]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Header Badge with Official MERLUX Logo Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase font-mono font-extrabold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                      {project.category}
                    </span>
                    
                    <div className="flex items-center gap-2">
                      <div className="relative w-16 h-5 opacity-80 group-hover:opacity-100 transition-opacity">
                        <Image
                          src="/logo.png"
                          alt="MERLUX Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-emerald-400 transition">
                        {project.category === "Web" && <Globe className="w-3.5 h-3.5" />}
                        {project.category === "Mobile" && <Smartphone className="w-3.5 h-3.5" />}
                        {project.category === "UI/UX" && <Layout className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-[#22c55e] block mb-1">
                    {project.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#22c55e] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal mb-6">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-white/[0.04] text-[10px] font-mono text-slate-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Navigation Action Area */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  {hasValidLink ? (
                    <a
                      href={project.link!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-white transition"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 cursor-not-allowed select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                      <span>Showcase Only</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
