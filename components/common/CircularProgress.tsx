"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CircularProgressProps {
  percentage: number;
  label: string;
  sublabel?: string;
  size?: number;
  strokeWidth?: number;
}

export default function CircularProgress({
  percentage = 89,
  label = "Success Rate",
  sublabel = "Projects delivered on time & within budget",
  size = 180,
  strokeWidth = 12,
}: CircularProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 glass-card rounded-3xl relative">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Animated gradient progress ring */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#gradient-green)"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: isInView ? strokeDashoffset : circumference }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient-green" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Percentage Display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl font-black font-mono text-white"
          >
            {percentage}%
          </motion.span>
          <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase mt-0.5">
            {label}
          </span>
        </div>
      </div>

      {sublabel && (
        <p className="text-xs text-slate-400 text-center mt-4 max-w-xs font-medium leading-relaxed">
          {sublabel}
        </p>
      )}
    </div>
  );
}
