import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Code2, CheckCircle2, ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#030509] text-slate-100 selection:bg-[#22c55e]/30 selection:text-[#22c55e]">
      <Navbar />

      <section className="pt-36 pb-20 relative bg-[#04060b] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5 text-[#22c55e]" />
            <span>SERVICE 01</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Web <span className="text-gradient-gold-green">Development</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-xl max-w-3xl font-normal leading-relaxed">
            High-performance web apps using React, Angular, and modern backend stacks. Custom web applications engineered to transform your ideas into powerful, scalable solutions.
          </p>
        </div>
      </section>

      <section className="py-24 relative bg-[#030407]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8">
            <div className="glass-card-luxury p-8 rounded-3xl space-y-4">
              <h2 className="text-2xl font-bold text-white">Capabilities & Technology Stack</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                  <h4 className="text-sm font-bold text-white">React & Next.js</h4>
                  <p className="text-xs text-slate-400">Server-side rendering, static generation, and lightning-fast page speed.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                  <h4 className="text-sm font-bold text-white">Angular Architecture</h4>
                  <p className="text-xs text-slate-400">Enterprise single-page application framework for structured workflows.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                  <h4 className="text-sm font-bold text-white">SEO & Performance</h4>
                  <p className="text-xs text-slate-400">Search engine optimization setup, clean metadata, and fast initial load.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                  <h4 className="text-sm font-bold text-white">Mobile-First UI</h4>
                  <p className="text-xs text-slate-400">Responsive across smartphones, tablets, laptops, and desktop displays.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="glass-card p-6 rounded-3xl space-y-4 border border-white/10">
              <h3 className="text-lg font-bold text-white">Start Web Project</h3>
              <p className="text-xs text-slate-400">Get in touch with our engineering team in Nagercoil & Chennai for a free consultation.</p>
              <Link
                href="/contact"
                className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#22c55e] text-slate-950 flex items-center justify-center gap-2 hover:brightness-110 transition shadow-lg shadow-emerald-500/20"
              >
                <span>Get Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
