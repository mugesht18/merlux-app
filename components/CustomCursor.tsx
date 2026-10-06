"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device is desktop
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Check if mouse is hovering over interactive element
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("data-cursor-hover") === "true")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Inner precise dot */}
      <motion.div
        className="fixed w-2 h-2 bg-[#d4af37] rounded-full"
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      {/* Outer ambient ring */}
      <motion.div
        className="fixed rounded-full border border-emerald-500/40 pointer-events-none"
        animate={{
          x: mousePos.x - (isHovered ? 24 : 16),
          y: mousePos.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          backgroundColor: isHovered ? "rgba(34, 197, 94, 0.08)" : "rgba(255, 255, 255, 0)",
          borderColor: isHovered ? "rgba(212, 175, 55, 0.6)" : "rgba(255, 255, 255, 0.25)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.2 }}
      />
    </div>
  );
}
