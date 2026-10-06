"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, MapPin, Clock, Send, CheckCircle2, Sparkles, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "PWA Development",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  return (
    <section id="contact" className="py-32 relative bg-[#04060b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Wording */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#22c55e]" />
              <span>INITIATE CONVERSATION</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Let&apos;s Build{" "}
              <span className="text-gradient-gold-green">What Comes Next.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Have a project in mind or want to explore ideas? We&apos;d love to hear from you. Our teams in Nagercoil & Chennai are ready to help you build something that scales.
            </p>

            {/* Contact Action Cards */}
            <div className="space-y-4 pt-2">
              <a
                href="mailto:contact@merluxsolutions.com"
                className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/10 hover:border-[#22c55e]/50 transition group"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#22c55e]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Direct Email</span>
                  <span className="text-sm font-bold text-white group-hover:text-[#22c55e] transition">
                    contact@merluxsolutions.com
                  </span>
                </div>
              </a>

              <a
                href="tel:8825411046"
                className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/10 hover:border-[#22c55e]/50 transition group"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#22c55e]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Direct Phone</span>
                  <span className="text-sm font-bold text-white group-hover:text-[#22c55e] transition">
                    +91 8825411046
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/918760816813"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#22c55e] text-slate-950 flex items-center justify-center font-bold">
                  <MessageSquare className="w-5 h-5 fill-slate-950" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-400 block">Instant WhatsApp</span>
                  <span className="text-sm font-bold text-white">+91 8760816813</span>
                </div>
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-slate-400 space-y-1 font-normal">
              <p><strong className="text-slate-200">Headquarters:</strong> Nagercoil, Kanyakumari District, Tamil Nadu - 629001</p>
              <p><strong className="text-slate-200">Branch Office:</strong> Chennai, Tamil Nadu, India</p>
              <p><strong className="text-slate-200">Business Hours:</strong> Mon - Fri 9 AM - 6 PM · Sat 9 AM - 5 PM IST</p>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6 glass-card-luxury p-8 sm:p-10 rounded-3xl border border-white/10"
          >
            {status === "success" ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-[#22c55e] flex items-center justify-center text-[#22c55e] mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#22c55e]" />
                </div>
                <h3 className="text-2xl font-black text-white">Message Received!</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thanks for reaching out to MERLUX Software Solutions. Fill in your details and our team will connect with you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs font-bold text-[#22c55e] hover:underline pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-1">Feel free to write</h3>
                <p className="text-xs text-slate-400 mb-4">Fill in your details and our team will connect with you shortly.</p>

                {status === "error" && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Please fill in all required fields (*).</span>
                  </div>
                )}

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs sm:text-sm focus:border-[#22c55e] focus:outline-none transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs sm:text-sm focus:border-[#22c55e] focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Phone"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs sm:text-sm focus:border-[#22c55e] focus:outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Company / Business
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company Name"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs sm:text-sm focus:border-[#22c55e] focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Select a Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-white text-xs sm:text-sm focus:border-[#22c55e] focus:outline-none transition"
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="Cloud & Backend">Cloud & Backend</option>
                      <option value="Automation">Automation</option>
                      <option value="UI / UX Engineering">UI / UX Engineering</option>
                      <option value="PWA Development">PWA Development</option>
                      <option value="Native Mobile App">Native Mobile App</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs sm:text-sm focus:border-[#22c55e] focus:outline-none transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-[#22c55e] via-emerald-400 to-[#22c55e] text-slate-950 flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-emerald-500/20 transition uppercase tracking-wider"
                >
                  {status === "loading" ? (
                    <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Connect With Us</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
