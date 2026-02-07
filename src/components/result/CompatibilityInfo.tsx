"use client";

import { motion } from "framer-motion";
import { Personality } from "@/types";
import { personalities } from "@/data/personalities";
import Link from "next/link";

interface CompatibilityInfoProps {
  personality: Personality;
}

export default function CompatibilityInfo({ personality }: CompatibilityInfoProps) {
  const compatible = personalities[personality.compatibility];

  return (
    <motion.div
      className="w-full space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.5 }}
    >
      <h2 className="font-serif text-lg font-bold text-warm-gray text-center">
        나와 잘 맞는 독서 유형
      </h2>

      <Link href={`/result/${compatible.code}`}>
        <motion.div
          className="p-5 rounded-2xl border-2 border-border bg-white/80 backdrop-blur-sm hover:border-lavender transition-colors cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-4">
            <span className="text-3xl">{compatible.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs text-lavender font-semibold">{compatible.code}</span>
                <span className="font-serif font-bold text-warm-gray">{compatible.name}</span>
              </div>
              <p className="text-sm text-soft-brown truncate">{compatible.subtitle}</p>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
