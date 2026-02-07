"use client";

import { motion } from "framer-motion";
import { Personality } from "@/types";

interface TypeCardProps {
  personality: Personality;
}

export default function TypeCard({ personality }: TypeCardProps) {
  return (
    <motion.div
      className={`w-full rounded-3xl bg-gradient-to-br ${personality.color} p-[2px]`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="rounded-3xl bg-white/90 backdrop-blur-sm p-8 text-center space-y-4" id="type-card">
        <motion.div
          className="text-5xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          {personality.emoji}
        </motion.div>

        <div className="space-y-1">
          <p className="text-sm text-lavender font-semibold tracking-widest">
            {personality.code}
          </p>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-warm-gray">
            {personality.name}
          </h1>
          <p className="text-soft-brown text-sm">{personality.subtitle}</p>
        </div>

        <p className="text-warm-gray/80 text-sm leading-relaxed max-w-sm mx-auto">
          {personality.description}
        </p>
      </div>
    </motion.div>
  );
}
