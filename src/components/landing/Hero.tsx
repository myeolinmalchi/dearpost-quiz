"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="text-center space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-warm-gray leading-tight">
          당신의 독서 유형은
          <br />
          무엇인가요?
        </h1>
      </motion.div>

      <motion.p
        className="text-soft-brown text-lg sm:text-xl leading-relaxed max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        독서와 기록 습관으로 알아보는
        <br />
        나만의 독서 성격 유형 테스트
      </motion.p>

      <motion.div
        className="flex items-center justify-center gap-3 text-soft-brown/60 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <span>16문항</span>
        <span className="w-1 h-1 rounded-full bg-soft-brown/40" />
        <span>약 3분 소요</span>
        <span className="w-1 h-1 rounded-full bg-soft-brown/40" />
        <span>16가지 유형</span>
      </motion.div>
    </div>
  );
}
