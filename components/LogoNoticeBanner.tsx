"use client";

import React, { useState } from "react";
import { Info, X, FileCheck } from "lucide-react";

export default function LogoNoticeBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-gradient-to-r from-[#0d1522] via-[#0f1d19] to-[#0d1522] border-b border-emerald-500/30 px-4 py-2.5 text-xs text-slate-300 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 min-w-0">
          <FileCheck className="w-4 h-4 text-[#3cff00] shrink-0" />
          <p className="truncate">
            <span className="font-bold text-white">MERLUX Logo Asset Notice:</span> Vector typography logo active. To supply your official logo manually, place <code className="bg-white/10 px-1.5 py-0.5 rounded text-emerald-300 font-mono">public/logo.png</code> or <code className="bg-white/10 px-1.5 py-0.5 rounded text-emerald-300 font-mono">public/logo.svg</code> in the workspace.
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white shrink-0 transition"
          aria-label="Dismiss notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
