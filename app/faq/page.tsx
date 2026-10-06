import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";

export default function FaqPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#030509] text-slate-100 selection:bg-[#22c55e]/30 selection:text-[#22c55e]">
      <Navbar />

      <section className="pt-36 pb-16 relative bg-[#04060b] border-b border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#22c55e]" />
            <span>KNOWLEDGE & HELP</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Frequently Asked <span className="text-gradient-gold-green">Questions</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Everything you need to know about our PWA development service, hosting plans, and technical execution.
          </p>
        </div>
      </section>

      <FaqSection />

      <section className="py-20 bg-gradient-to-r from-[#070c14] via-[#09121f] to-[#070c14] border-t border-white/10 text-center px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-white">Still have questions?</h2>
          <p className="text-slate-300 text-sm">
            Talk to us — we&apos;re happy to help you get started.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#22c55e] text-slate-950 px-8 py-3.5 rounded-full font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition shadow-lg shadow-emerald-500/20"
          >
            <span>Talk to Engineering Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
