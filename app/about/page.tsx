"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import AnimatedCounter from "@/components/common/AnimatedCounter";
import CircularProgress from "@/components/common/CircularProgress";
import { MapPin, Target, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  const timeline = [
    { year: "2019", title: "Founded in Nagercoil", desc: "Started by developers in Nagercoil, Kanyakumari District, Tamil Nadu to build honest, reliable software." },
    { year: "2020", title: "First Web Projects", desc: "Delivered initial batch of custom websites and web applications for businesses across Tamil Nadu." },
    { year: "2021", title: "Mobile & PWA Expansion", desc: "Added Progressive Web Apps (PWA) and mobile services to help client businesses reach customers on any device." },
    { year: "2022", title: "Cloud Architecture Capabilities", desc: "Expanded backend systems (Node.js, Express, Firebase, MongoDB, AWS) for scalable data handling." },
    { year: "2023", title: "Chennai Branch Office", desc: "Expanded operations with a branch office in Chennai, Tamil Nadu." },
    { year: "2024", title: "Growing Client Base", desc: "Crossed 15+ happy clients and 10+ shipped projects with transparent, fast execution." },
    { year: "2025", title: "Empowering SMEs & Startups", desc: "Focused on helping Indian startups and growing SMEs go digital with affordable, world-class PWA & web solutions." },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#030509] text-slate-100 selection:bg-[#22c55e]/30 selection:text-[#22c55e]">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-20 relative bg-[#04060b] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Target className="w-3.5 h-3.5 text-[#22c55e]" />
            <span>OUR STORY & COMPANY IDENTITY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            About <span className="text-gradient-gold-green">MERLUX</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Merlux Software Solutions is an India-based product studio partnering with startups and growing businesses as their end-to-end technology team.
          </p>
        </div>
      </section>

      {/* Main About Component */}
      <AboutSection />

      {/* Company Journey Timeline */}
      <section className="py-28 relative bg-[#030407] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              OUR MILESTONES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">How We Got Here</h2>
          </div>

          <div className="relative border-l-2 border-[#22c55e]/40 pl-6 sm:pl-10 space-y-10">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Point Node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#22c55e] border-4 border-[#030407] shadow-md shadow-emerald-500/50" />
                
                <span className="text-xs font-mono font-bold text-[#22c55e] bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 inline-block mb-2">
                  {item.year}
                </span>

                <h3 className="text-lg font-bold text-white group-hover:text-[#22c55e] transition">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-20 bg-gradient-to-r from-[#070c14] via-[#09121f] to-[#070c14] border-t border-white/10 text-center px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-white">Have a project in mind?</h2>
          <p className="text-slate-300 text-sm">
            Let&apos;s talk about the right technology stack for your business. We&apos;re happy to advise — no strings attached.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#22c55e] text-slate-950 px-8 py-3.5 rounded-full font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition shadow-lg shadow-emerald-500/20"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
