"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Smartphone, Server, Check, ArrowRight, Layers, ShieldCheck, Zap } from "lucide-react";

export default function ProductsSolutionsSection() {
  const showcaseProducts = [
    {
      title: "Progressive Web Apps (PWA)",
      subtitle: "The Smart Mobile Solution for Growing Businesses",
      description:
        "Fast, installable Progressive Web Apps with offline support, push notifications, and seamless cross-platform performance across Android, iOS, tablets, and desktops.",
      capabilities: [
        "Direct home screen installation without app store fees",
        "Instant push notifications trigger for customer re-engagement",
        "Offline caching & ultra-fast page load speeds",
        "Full backend integration with Node.js & MongoDB/Firebase",
      ],
      packagesInfo: "Flagship PWA packages starting from ₹19,999 (Includes Website + PWA + 1 Year Hosting)",
      badge: "Flagship Solution",
      slug: "/pricing",
    },
    {
      title: "Enterprise Web & Cloud Systems",
      subtitle: "Scalable Infrastructure Built for Commercial Growth",
      description:
        "Custom high-performance web applications equipped with administrative control dashboards, secure API architecture, and managed SSD cloud hosting.",
      capabilities: [
        "React & Next.js frontend with Angular support",
        "Dynamic admin dashboards & user management",
        "High-throughput RESTful API & payment gateways",
        "cPanel access + Free SSL + Business Email setup",
      ],
      packagesInfo: "Custom Web & Cloud Architectures starting from ₹50,000 to ₹1,00,000+",
      badge: "Enterprise Tier",
      slug: "/pricing",
    },
  ];

  return (
    <section id="solutions" className="py-32 relative bg-[#030407] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-[#22c55e]" />
            <span>SOLUTIONS & PRODUCTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            High-Impact Technical <span className="text-gradient-gold-green">Solutions</span>
          </h2>
        </div>

        {/* Product Cards */}
        <div className="space-y-12">
          {showcaseProducts.map((prod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-luxury p-8 sm:p-12 rounded-3xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="lg:col-span-8 space-y-6">
                <span className="inline-block px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/30">
                  {prod.badge}
                </span>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white">{prod.title}</h3>
                  <p className="text-sm font-semibold text-[#22c55e]">{prod.subtitle}</p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                  {prod.description}
                </p>

                <div className="pt-2 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Core Features</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {prod.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-bold text-slate-300">{prod.packagesInfo}</span>
                  <Link
                    href={prod.slug}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#22c55e] to-emerald-400 text-slate-950 font-black text-xs px-6 py-3 rounded-full hover:brightness-110 transition shadow-lg shadow-emerald-500/10 uppercase tracking-wider"
                  >
                    <span>View Pricing & Packages</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* 2D Graphic Indicator Panel */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-[#090d16] border border-white/10 flex flex-col justify-center space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#22c55e]">
                  {idx === 0 ? <Smartphone className="w-6 h-6" /> : <Server className="w-6 h-6" />}
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Production Architecture</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Engineered with strict code quality standards, automated CI/CD pipelines, and zero app store delays.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
