"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Code2,
  Cloud,
  Cpu,
  Layout,
  Smartphone,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function ServicesSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const services = [
    {
      id: "01",
      title: "Web Development",
      slug: "/services/web-development",
      desc: "High-performance web apps using React, Angular, and modern backend stacks.",
      icon: Code2,
      capabilities: [
        "React & Next.js frontend architecture",
        "Angular Single-Page Applications",
        "SEO optimization & fast page speed",
        "Responsive, mobile-first design",
      ],
    },
    {
      id: "02",
      title: "Cloud & Backend",
      slug: "/services/cloud-backend",
      desc: "Scalable APIs, serverless systems, and cloud-native architecture.",
      icon: Cloud,
      capabilities: [
        "Node.js, Express & RESTful APIs",
        "MongoDB & Firebase realtime databases",
        "AWS & Google Cloud deployments",
        "High-throughput server infrastructure",
      ],
    },
    {
      id: "03",
      title: "Automation",
      slug: "/services/automation",
      desc: "Workflow automation, integrations, and CI/CD pipelines.",
      icon: Cpu,
      capabilities: [
        "Automated deployment & CI/CD pipelines",
        "Third-party API & payment integrations",
        "Automated data syncing",
        "Custom workflow automation",
      ],
    },
    {
      id: "04",
      title: "UI / UX Engineering",
      slug: "/services/ui-ux",
      desc: "Design-driven development with usability and performance in mind.",
      icon: Layout,
      capabilities: [
        "Figma design system prototyping",
        "Conversion-focused interface layouts",
        "User experience audits & wireframing",
        "Accessible, clean UI components",
      ],
    },
    {
      id: "05",
      title: "PWA Development",
      slug: "/services/pwa",
      desc: "Fast, installable Progressive Web Apps with offline support and push notifications.",
      icon: Smartphone,
      capabilities: [
        "Direct home screen app installation",
        "Push notification engine",
        "Offline caching & instant load times",
        "Cross-platform Android & iOS support",
      ],
    },
    {
      id: "06",
      title: "Native Mobile App",
      slug: "/services/mobile",
      desc: "High-quality Android and iOS apps with smooth performance and modern UI/UX.",
      icon: Layers,
      capabilities: [
        "Cross-platform mobile apps",
        "Smooth touch interactions",
        "Device feature integrations",
        "App store deployment assistance",
      ],
    },
  ];

  return (
    <section id="services" className="py-32 relative bg-[#030407] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#22c55e]" />
              <span>CORE TECHNICAL SERVICES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Engineering Solutions <span className="text-gradient-gold-green">That Scale</span>
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#22c55e] hover:text-white uppercase tracking-wider transition"
          >
            <span>View All Services</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Services Grid (Interactive Editorial Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isSelected = activeIdx === idx;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setActiveIdx(idx)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className={`p-8 rounded-3xl transition-all duration-300 relative group flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "bg-[#090e17] border border-[#22c55e]/50 shadow-2xl shadow-emerald-500/10 -translate-y-1.5"
                    : "glass-card border-white/5 hover:border-white/15"
                }`}
              >
                <div>
                  {/* Top Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className={`text-4xl font-black font-mono transition-opacity duration-300 ${
                        isSelected ? "text-[#22c55e] opacity-100" : "text-white/20 group-hover:opacity-60"
                      }`}
                    >
                      {service.id}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-[#22c55e] text-slate-950 shadow-lg shadow-emerald-500/30"
                          : "bg-white/5 border border-white/10 text-slate-300"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Authentic Wording */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#22c55e] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal mb-6">
                    {service.desc}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="space-y-2 border-t border-white/10 pt-4">
                    {service.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Detail Link */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-white transition">
                  <Link href={service.slug} className="flex items-center gap-2">
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4 text-[#22c55e]" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
