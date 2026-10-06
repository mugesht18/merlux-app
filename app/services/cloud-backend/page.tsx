import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Cloud, ArrowRight } from "lucide-react";

export default function CloudBackendPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#030509] text-slate-100 selection:bg-[#22c55e]/30 selection:text-[#22c55e]">
      <Navbar />
      <section className="pt-36 pb-20 relative bg-[#04060b] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Cloud className="w-3.5 h-3.5 text-[#22c55e]" />
            <span>SERVICE 02</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Cloud & <span className="text-gradient-gold-green">Backend</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-xl max-w-3xl font-normal leading-relaxed">
            Scalable APIs, serverless systems, and cloud-native architecture.
          </p>
        </div>
      </section>

      <section className="py-24 relative bg-[#030407]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8">
            <div className="glass-card-luxury p-8 rounded-3xl space-y-4">
              <h2 className="text-2xl font-bold text-white">Backend Features</h2>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                  <span>Node.js, Express & RESTful API architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                  <span>MongoDB & Firebase realtime database management</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                  <span>AWS & Google Cloud server setup and security auditing</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="glass-card p-6 rounded-3xl space-y-4 border border-white/10">
              <h3 className="text-lg font-bold text-white">Inquire Cloud Solution</h3>
              <Link href="/contact" className="w-full py-3 rounded-xl font-bold text-xs uppercase bg-[#22c55e] text-slate-950 flex items-center justify-center gap-2">
                <span>Contact Us</span>
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
