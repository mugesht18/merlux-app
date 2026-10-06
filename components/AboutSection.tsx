"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Target, MapPin, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import AnimatedCounter from "./common/AnimatedCounter";
import CircularProgress from "./common/CircularProgress";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative bg-[#04060b] border-t border-white/5 overflow-hidden">
      {/* Background Ambient Gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-4xl space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Target className="w-3.5 h-3.5 text-emerald-400" />
            <span>WHO WE ARE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Your dedicated end-to-end{" "}
            <span className="text-gradient-gold-green">
              technology studio
            </span>
          </h2>
        </motion.div>

        {/* Narrative & Visual Architecture */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: Authentic Wording & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-slate-200 text-base sm:text-xl leading-relaxed font-semibold border-l-2 border-[#22c55e] pl-4">
              Merlux Software Solutions is an India-based product studio partnering with startups and growing businesses as their end-to-end technology team — delivering custom web, mobile, and PWA solutions that are built to scale.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              We combine smart planning, design thinking, and modern technologies to help businesses move fast, launch confidently, and grow digitally — without the overhead of a large agency.
            </p>

            {/* Core Pillars */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Experienced Engineering Team</h4>
                  <p className="text-xs text-slate-400">Senior developers with strong product and enterprise experience.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Modern & Scalable Architecture</h4>
                  <p className="text-xs text-slate-400">Built using cloud-native, PWA, and microservices architecture.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Long-Term Support & Maintenance</h4>
                  <p className="text-xs text-slate-400">Continuous server monitoring, updates, and technical assistance.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#22c55e] hover:text-white uppercase tracking-wider transition"
              >
                <span>Read Full Company Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT: 89% Success Stats Circular SVG & Location Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* 89% Success Circular SVG */}
            <CircularProgress
              percentage={89}
              label="Success Stats"
              sublabel="High satisfaction rate across delivered web, mobile, and cloud projects"
            />

            {/* Office Locations */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#090d16] border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-[#22c55e]">
                  <MapPin className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Headquarters</span>
                </div>
                <h4 className="text-sm font-bold text-white">Nagercoil</h4>
                <p className="text-[10px] text-slate-400">Kanyakumari Dist, TN</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#090d16] border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Branch Office</span>
                </div>
                <h4 className="text-sm font-bold text-white">Chennai</h4>
                <p className="text-[10px] text-slate-400">Tamil Nadu, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
