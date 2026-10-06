"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Layers, Sparkles, CheckCircle2 } from "lucide-react";
import Hero2DGraphic from "./hero/Hero2DGraphic";
import AnimatedCounter from "./common/AnimatedCounter";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#030509]"
    >
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#22c55e]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT: Company Identity, Real Wording, CTAs & Animated Counters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* REAL Hero Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              We Help Businesses Scale with{" "}
              <span className="text-gradient-gold-green">
                Modern Web & Mobile
              </span>{" "}
              Solutions
            </h1>

            {/* REAL Hero Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              Custom web applications to transform your ideas into powerful, scalable solutions.
            </p>

            {/* Primary Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#22c55e] via-emerald-400 to-[#22c55e] text-slate-950 font-extrabold text-xs sm:text-sm px-8 py-4 rounded-full shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:scale-[1.02] transition-all duration-300 uppercase tracking-wider"
              >
                <span>Get Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-slate-200 font-semibold text-xs sm:text-sm backdrop-blur-md transition-all duration-300 uppercase tracking-wider"
              >
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>Explore Services</span>
              </Link>
            </div>

            {/* REAL STATISTICS: 10+ Projects, 15+ Clients, 5+ Years */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-black font-mono text-white">
                  <AnimatedCounter value={10} suffix="+" />
                </div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mt-0.5">
                  Projects Delivered
                </span>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black font-mono text-[#22c55e]">
                  <AnimatedCounter value={15} suffix="+" />
                </div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mt-0.5">
                  Happy Clients
                </span>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black font-mono text-white">
                  <AnimatedCounter value={5} suffix="+" />
                </div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mt-0.5">
                  Years Experience
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Sophisticated 2D Technology Dashboard Graphic (NO 3D) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <Hero2DGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
