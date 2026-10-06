"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Server,
  Zap,
  ShieldCheck,
  CheckCircle,
  TrendingUp,
  Code2,
  Lock,
  Layers,
  Sparkles,
} from "lucide-react";

export default function Hero2DGraphic() {
  return (
    <div className="relative w-full max-w-xl mx-auto py-4">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-tr from-emerald-500/20 via-[#22c55e]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* SVG Circuit Lines & Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#22c55e" strokeWidth="0.5" strokeDasharray="2,2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Main Container Stack */}
      <div className="relative z-10 space-y-5">
        {/* TOP PANEL: Desktop Application Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#090e17]/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/80 relative group"
        >
          {/* Top Window Bar */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="relative w-24 h-6 border-l border-white/15 pl-3 flex items-center">
                <Image
                  src="/logo.png"
                  alt="MERLUX Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-bold text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>SYSTEM LIVE</span>
            </div>
          </div>

          {/* Interior Grid Content */}
          <div className="grid grid-cols-12 gap-4">
            {/* Left Metrics Box */}
            <div className="col-span-7 bg-white/[0.03] border border-white/10 rounded-xl p-3.5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-slate-400">API Throughput</span>
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-2xl font-black font-mono text-white">
                99.98<span className="text-xs text-emerald-400 font-sans ml-1">% Uptime</span>
              </div>
              
              {/* Animated Progress Graph */}
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>Server Load</span>
                  <span className="text-emerald-400 font-mono">14ms</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "88%" }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    className="h-full bg-gradient-to-r from-[#22c55e] to-emerald-400 rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Right Tech Tags */}
            <div className="col-span-5 bg-white/[0.03] border border-white/10 rounded-xl p-3.5 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[9px] uppercase font-bold text-slate-400 block">Stack Active</span>
                <span className="text-xs font-bold text-white block">Next.js + PWA Engine</span>
              </div>
              <div className="flex items-center gap-1.5 pt-2">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span className="text-[9px] font-mono text-slate-300">SSL 256-Bit SSL</span>
              </div>
            </div>
          </div>

          {/* Animated Code Terminal Overlay Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 p-3 rounded-xl bg-[#04070d] border border-emerald-500/20 font-mono text-[11px] text-slate-300 flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-emerald-400 font-bold">&gt;</span>
              <span className="text-slate-200">merlux.deploy({`{ target: "PWA & Cloud" }`})</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
              SUCCESS
            </span>
          </motion.div>
        </motion.div>

        {/* BOTTOM FLOATING ROW: Mobile PWA Preview Card & Security Node */}
        <div className="grid grid-cols-12 gap-4">
          {/* Mobile App PWA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-7 bg-[#0d1422]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center gap-3.5 shadow-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#22c55e] to-emerald-700 flex items-center justify-center text-slate-950 font-bold shrink-0 shadow-lg shadow-emerald-500/20">
              <Smartphone className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold text-white">PWA Mobile Engine</h4>
              <p className="text-[10px] text-slate-300">Installable without App Store fees</p>
            </div>
          </motion.div>

          {/* Cloud Node Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="col-span-5 bg-[#0d1422]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center gap-3 shadow-xl"
          >
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
              <Server className="w-4.5 h-4.5" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[9px] uppercase font-bold text-slate-400 block">SSD Cloud</span>
              <span className="text-xs font-bold text-white block">cPanel + Node</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
