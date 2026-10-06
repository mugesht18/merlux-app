"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is a Progressive Web App (PWA)?",
      a: "A Progressive Web App is a website that works like a mobile application. Customers can open it in a browser and also install it on their phone home screen — just like a normal app — without going through an app store.",
    },
    {
      q: "Why should my business use a PWA?",
      a: "A PWA helps your business reach mobile customers easily, load faster than normal websites, work like a mobile app, and allow customers to install it on their phone. This improves customer engagement and convenience.",
    },
    {
      q: "Is it better than a normal mobile app?",
      a: "Yes, for most growing businesses. PWAs have significantly lower development costs, require zero app store approval, and work across all devices (Android, iPhone, desktop) from a single codebase.",
    },
    {
      q: "Can customers install it like an app?",
      a: 'Yes. When customers open the website on their mobile browser, they will see an "Add to Home Screen" option. Once installed, it works exactly like a mobile app with its own icon on the home screen.',
    },
    {
      q: "What features can be included?",
      a: "Business information, product or service listings, contact and WhatsApp buttons, Google Maps location, booking or enquiry forms, and push notification capabilities.",
    },
    {
      q: "What services does Merlux Software Solutions provide?",
      a: "Business website development, PWA mobile app experience, cloud & backend API development, hosting and domain support, and ongoing maintenance.",
    },
    {
      q: "What is the cost?",
      a: "Our basic package starts from ₹19,999 — includes Website + PWA + 1 Year Hosting. Pricing depends on the features required.",
    },
    {
      q: "How long does development take?",
      a: "Usually 5–10 working days, depending on the project complexity and the features included in your package.",
    },
    {
      q: "Will it work on Android and iPhone?",
      a: "Yes. A PWA works seamlessly on Android, iPhone, tablets, and desktop browsers — one solution that works everywhere without separate apps.",
    },
    {
      q: "How can I get started?",
      a: "Contact us for a free demo or consultation. We are happy to guide you through the right package for your business needs.",
    },
  ];

  const comparison = [
    { feature: "Development Cost", native: "Very High", pwa: "Affordable (Starting ₹19,999)" },
    { feature: "App Store Approval", native: "Required", pwa: "Not Required (Direct Install)" },
    { feature: "Cross-Device Support", native: "Separate Apps Needed", pwa: "One Solution Everywhere" },
    { feature: "Updates & Maintenance", native: "Manual App Store Downloads", pwa: "Instant Automatic Updates" },
  ];

  return (
    <section id="faq" className="py-32 relative bg-[#030407] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#22c55e]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Clear Answers for Your <span className="text-gradient-gold-green">Business</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all border overflow-hidden ${
                  isOpen
                    ? "bg-[#090d16] border-[#22c55e]/50 shadow-lg"
                    : "glass-card border-white/5 hover:border-white/15"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <h3 className="font-bold text-sm sm:text-base text-white">{faq.q}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#22c55e]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4 font-normal"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-white text-center mb-8">Native Mobile App vs. PWA Architecture</h3>
          <div className="glass-card-luxury rounded-3xl overflow-hidden border border-white/10">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#090d16] border-b border-white/10">
                  <th className="py-4 px-6 font-bold text-slate-300">Feature</th>
                  <th className="py-4 px-6 font-bold text-slate-400">Native Mobile App</th>
                  <th className="py-4 px-6 font-bold text-[#22c55e]">MERLUX PWA Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparison.map((row, rIdx) => (
                  <tr key={rIdx}>
                    <td className="py-4 px-6 font-semibold text-white">{row.feature}</td>
                    <td className="py-4 px-6 text-slate-400">{row.native}</td>
                    <td className="py-4 px-6 text-emerald-300 font-semibold">{row.pwa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#22c55e] hover:text-white uppercase tracking-wider transition"
          >
            <span>View Full FAQ Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
