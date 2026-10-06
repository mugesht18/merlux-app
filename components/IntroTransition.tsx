"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function IntroTransition() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[10000] bg-[#030407] flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Subtle horizontal light beam */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: [0, 0.6, 0] }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
          />

          {/* Official MERLUX Logo Fade & Scale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center gap-4"
          >
            <div className="relative w-40 h-20 sm:w-48 sm:h-24">
              <Image
                src="/logo.png"
                alt="MERLUX Logo"
                fill
                priority
                className="object-contain filter drop-shadow-[0_0_15px_rgba(212,175,55,0.25)]"
              />
            </div>

            {/* Subtle Progress Bar */}
            <div className="w-32 h-[2px] bg-white/10 rounded-full overflow-hidden mt-2">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-[#22c55e] to-[#d4af37]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
