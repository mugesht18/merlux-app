import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSolutionsSection from "@/components/ProductsSolutionsSection";
import TechnologySection from "@/components/TechnologySection";
import ProcessSection from "@/components/ProcessSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#030509] text-slate-100 selection:bg-[#22c55e]/30 selection:text-[#22c55e]">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProductsSolutionsSection />
      <TechnologySection />
      <ProcessSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
