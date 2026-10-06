"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Technologies", href: "/technologies" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#030509]/90 backdrop-blur-2xl py-3 border-b border-white/10 shadow-2xl shadow-black/90"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-20 sm:h-24">
        {/* OFFICIAL LOGO ICON (BIGGER) + COMPANY NAME (SMALLER) */}
        <Link href="/" className="flex items-center gap-3 group relative z-50 shrink-0">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="MERLUX Logo Mark"
              fill
              priority
              className="object-contain filter drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
            />
          </div>
          <div className="flex items-center gap-1.5 font-extrabold text-xs sm:text-sm tracking-widest uppercase leading-none transition-transform duration-300 group-hover:scale-[1.01]">
            <span className="text-[#22c55e]">MERLUX</span>
            <span className="text-[#facc15]">SOFTWARE SOLUTIONS</span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION LINKS — PERFECTLY CENTERED */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 shadow-inner h-11">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 uppercase whitespace-nowrap ${
                  isActive
                    ? "bg-[#22c55e] text-slate-950 shadow-md shadow-emerald-500/20"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP CTA BUTTON — PERFECTLY CENTERED */}
        <div className="hidden lg:flex items-center shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#22c55e] via-emerald-400 to-[#22c55e] text-slate-950 font-extrabold text-xs px-6 h-11 rounded-full shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:brightness-110 transition-all duration-300 transform hover:-translate-y-0.5 uppercase tracking-wider whitespace-nowrap"
          >
            <span>Get Free Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white relative z-50 transition"
          aria-label="Toggle Mobile Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE FULLSCREEN GLASS MENU DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#030509]/98 backdrop-blur-3xl z-40 flex flex-col justify-between px-6 pt-28 pb-10 overflow-y-auto"
          >
            {/* Sequential Mobile Nav Items */}
            <div className="space-y-2 max-w-lg mx-auto w-full">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * idx }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all text-sm font-bold tracking-widest uppercase ${
                        isActive
                          ? "bg-[#22c55e]/10 border-[#22c55e] text-[#22c55e]"
                          : "bg-white/[0.02] border-white/5 text-slate-200 hover:border-white/20"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? "text-[#22c55e]" : "text-slate-500"}`} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Mobile CTA & Contact Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="max-w-lg mx-auto w-full pt-6 border-t border-white/10 space-y-4"
            >
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-black text-xs uppercase tracking-wider bg-gradient-to-r from-[#22c55e] to-emerald-400 text-slate-950 shadow-xl shadow-emerald-500/25"
              >
                <span>Let&apos;s Talk — Start Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="text-center text-[11px] text-slate-400">
                <span>Nagercoil & Chennai Operations · +91 8825411046</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
