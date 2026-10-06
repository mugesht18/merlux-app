"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<"pwa" | "hosting">("pwa");

  const hostingPlans = [
    {
      name: "Starter",
      price: "₹249",
      period: "/month",
      badge: null,
      desc: "Best for: Individuals / small shops",
      includes: [
        "1 Website",
        "2 GB SSD Storage",
        "Free SSL Certificate",
        "2 Business Emails",
      ],
      highlight: false,
    },
    {
      name: "Business",
      price: "₹499",
      period: "/month",
      badge: "Most Popular",
      desc: "Best for: Growing businesses",
      includes: [
        "1 Website",
        "5 GB SSD Storage",
        "Free SSL Certificate",
        "10 Business Emails",
        "10 Databases",
        "cPanel Access",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      price: "₹899",
      period: "/month",
      badge: "Premium 💎",
      desc: "Best for: Serious / revenue-generating businesses",
      includes: [
        "1 Website",
        "10 GB SSD Storage",
        "Free SSL Certificate",
        "Unlimited Emails",
        "Unlimited Databases",
        "cPanel Access",
        "Free Static Website Setup",
      ],
      highlight: false,
    },
  ];

  const pwaPackages = [
    {
      name: "Starter PWA",
      price: "₹25,000",
      period: "/ one-time",
      badge: null,
      desc: "Essential Web & PWA solution for local businesses",
      includes: [
        "Custom Business Website",
        "PWA Mobile App Engine",
        "1 Year SSD Hosting Included",
        "Free SSL Certificate",
        "2 Business Emails",
        "2 Months Free Support",
      ],
      highlight: false,
    },
    {
      name: "Business PWA",
      price: "₹50,000",
      period: "/ one-time",
      badge: "Most Popular",
      desc: "Complete PWA + Admin Dashboard for growing startups",
      includes: [
        "Custom Website + PWA Engine",
        "Push Notifications Capabilities",
        "Admin Control Dashboard",
        "1 Year SSD Hosting + cPanel",
        "10 Business Emails",
        "10 Databases Integration",
        "Priority Support & Maintenance",
      ],
      highlight: true,
    },
    {
      name: "Premium PWA",
      price: "₹1,00,000+",
      period: "/ one-time",
      badge: "Enterprise Tier",
      desc: "Full enterprise Web, Mobile & Cloud Backend system",
      includes: [
        "Full Custom Web & Mobile Solution",
        "Dedicated Node.js / Cloud Backend APIs",
        "E-Commerce / Booking / Payment Integration",
        "1 Year High-Performance SSD Hosting",
        "Unlimited Business Emails",
        "cPanel & Full Root Access",
        "Dedicated Technical Consultations",
      ],
      highlight: false,
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#030509] text-slate-100 selection:bg-[#22c55e]/30 selection:text-[#22c55e]">
      <Navbar />

      {/* Page Header */}
      <section className="pt-36 pb-16 relative bg-[#04060b] border-b border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#22c55e]" />
            <span>TRANSPARENT PRICING & PACKAGES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Plans & <span className="text-gradient-gold-green">Pricing</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Affordable, world-class web hosting plans and Progressive Web App packages built for Indian startups and SMEs.
          </p>

          {/* Toggle Switch */}
          <div className="pt-6 flex justify-center">
            <div className="bg-white/5 border border-white/10 p-1.5 rounded-full flex items-center gap-2">
              <button
                onClick={() => setActiveTab("pwa")}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === "pwa"
                    ? "bg-[#22c55e] text-slate-950 shadow-lg shadow-emerald-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                PWA Service Packages
              </button>
              <button
                onClick={() => setActiveTab("hosting")}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === "hosting"
                    ? "bg-[#22c55e] text-slate-950 shadow-lg shadow-emerald-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Web Hosting Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section id="solutions" className="py-24 relative bg-[#030407]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(activeTab === "pwa" ? pwaPackages : hostingPlans).map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-3xl p-8 relative flex flex-col justify-between bg-[#080d16]/90 backdrop-blur-xl border border-white/10 hover:border-[#22c55e] hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2 transition-all duration-300"
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-[#22c55e]/15 border border-[#22c55e]/40 text-[#22c55e] group-hover:bg-[#22c55e] group-hover:text-slate-950 shadow-sm transition-all duration-300">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#22c55e] transition-colors">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mb-6">{plan.desc}</p>

                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black font-mono text-white">{plan.price}</span>
                    <span className="text-xs text-slate-400 font-medium">{plan.period}</span>
                  </div>

                  <div className="border-t border-white/10 pt-6 mb-8 space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Included Features
                    </span>
                    {plan.includes.map((inc, iIdx) => (
                      <div key={iIdx} className="flex items-center gap-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-[#22c55e] shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-4 rounded-2xl font-black text-xs uppercase tracking-wider text-center transition-all duration-300 bg-white/5 group-hover:bg-[#22c55e] text-white group-hover:text-slate-950 border border-white/10 group-hover:border-[#22c55e] group-hover:shadow-lg group-hover:shadow-emerald-500/20"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
