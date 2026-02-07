"use client";

import { motion } from "framer-motion";

interface ChoiceButtonProps {
  text: string;
  label: string;
  index: number;
  onClick: () => void;
}

export default function ChoiceButton({ text, label, index, onClick }: ChoiceButtonProps) {
  return (
    <motion.button
      className="w-full text-left p-5 rounded-2xl border-2 border-border bg-white/80 backdrop-blur-sm hover:border-lavender hover:bg-lavender-light/30 transition-colors group"
      onClick={onClick}
      initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start gap-3">
        <span className="shrink-0 w-7 h-7 rounded-full bg-lavender-light text-lavender font-semibold text-sm flex items-center justify-center group-hover:bg-lavender group-hover:text-white transition-colors">
          {label}
        </span>
        <span className="text-warm-gray leading-relaxed">{text}</span>
      </div>
    </motion.button>
  );
}
