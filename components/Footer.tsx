"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, Phone, MessageSquare, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#020408] border-t border-white/10 pt-24 pb-12 relative text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block relative w-52 h-13">
              <Image
                src="/logo.png"
                alt="MERLUX SOFTWARE SOLUTIONS Logo"
                fill
                priority
                className="object-contain filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
              />
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm font-normal">
              Merlux Software Solutions is an India-based product studio partnering with startups and growing businesses as their end-to-end technology team — delivering custom web, mobile, and PWA solutions that are built to scale.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/918760816813"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 hover:bg-[#22c55e] hover:text-slate-950 transition"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@merluxsolutions.com"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 hover:bg-[#22c55e] hover:text-slate-950 transition"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:8825411046"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 hover:bg-[#22c55e] hover:text-slate-950 transition"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="hover:text-[#22c55e] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#22c55e] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/technologies" className="hover:text-[#22c55e] transition">
                  Technologies
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#22c55e] transition">
                  Projects Showcase
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#22c55e] transition">
                  Hosting & Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Services</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services/web-development" className="hover:text-[#22c55e] transition">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-backend" className="hover:text-[#22c55e] transition">
                  Cloud & Backend
                </Link>
              </li>
              <li>
                <Link href="/services/automation" className="hover:text-[#22c55e] transition">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux" className="hover:text-[#22c55e] transition">
                  UI / UX Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/pwa" className="hover:text-[#22c55e] transition">
                  PWA Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile" className="hover:text-[#22c55e] transition">
                  Native Mobile Apps
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations & Support */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Locations & Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                <span>Nagercoil HQ & Chennai Branch Office, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#22c55e] shrink-0" />
                <a href="mailto:contact@merluxsolutions.com" className="hover:text-[#22c55e] transition">
                  contact@merluxsolutions.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#22c55e] shrink-0" />
                <a href="tel:8825411046" className="hover:text-[#22c55e] transition">
                  +91 8825411046
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} MERLUX SOFTWARE SOLUTIONS. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/faq" className="hover:text-slate-300 transition">
              FAQs
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition">
              Support
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#22c55e] border border-white/10 transition"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
