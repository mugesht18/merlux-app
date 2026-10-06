import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MERLUX Software Solutions | Web, Mobile & PWA Solutions",
  description:
    "We are focused on helping more Indian startups and SMEs go digital — with affordable, world-class web, mobile, and PWA solutions.",
  keywords: [
    "MERLUX",
    "MERLUX Software Solutions",
    "PWA",
    "Progressive Web Apps",
    "Web Development India",
    "Nagercoil",
    "Chennai",
    "SME Digital Transformation",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#08090d] text-slate-100 font-sans selection:bg-[#22c55e]/30 selection:text-[#3cff00]">
        {children}
      </body>
    </html>
  );
}

