"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = ((current + 1) / total) * 100;

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between text-sm text-soft-brown/60">
        <span>
          {current + 1} / {total}
        </span>
        <span>{Math.round(percent)}%</span>
      </div>
      <div className="w-full h-2 bg-peach-light/50 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-lavender to-blossom rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
