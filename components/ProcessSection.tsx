"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Compass, Layout, Code, Rocket, CheckCircle2 } from "lucide-react";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Strategy & Planning",
      icon: Compass,
      desc: "We deeply analyze your business goals, user needs, and technical requirements to build a solid execution roadmap.",
    },
    {
      number: "02",
      title: "UI / UX Design",
      icon: Layout,
      desc: "We craft clean, intuitive, and conversion-driven interfaces focused on scalability and performance.",
    },
    {
      number: "03",
      title: "Development",
      icon: Code,
      desc: "Our engineers build robust frontend and backend systems using modern, scalable technologies.",
    },
    {
      number: "04",
      title: "Launch & Growth",
      icon: Rocket,
      desc: "We deploy, monitor, optimize, and continuously improve your product for long-term success.",
    },
  ];

  return (
    <section id="process" className="py-32 relative bg-[#04060b] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#22c55e]" />
            <span>HOW WE DELIVER VALUE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Our Proven <span className="text-gradient-gold-green">Execution Process</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            A structured, transparent, and scalable approach designed to turn ideas into powerful digital products.
          </p>
        </div>

        {/* Timeline Desktop/Mobile */}
        <div className="relative">
          {/* Connecting Line background */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
          
          {/* Animated active progress line */}
          <motion.div
            className="hidden lg:block absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-[#22c55e] to-emerald-400 -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              const isPast = activeStep >= idx;

              return (
                <motion.div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(idx)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-3xl transition-all duration-300 relative cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? "bg-[#090e17] border border-[#22c55e]/60 shadow-2xl shadow-emerald-500/10 -translate-y-2"
                      : "glass-card border-white/5 hover:border-white/20"
                  }`}
                >
                  <div>
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-black font-mono text-[#22c55e]">{step.number}</span>
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                          isPast
                            ? "bg-[#22c55e] text-slate-950 shadow-lg shadow-emerald-500/20"
                            : "bg-white/5 text-slate-400"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">{step.desc}</p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Phase {step.number}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
