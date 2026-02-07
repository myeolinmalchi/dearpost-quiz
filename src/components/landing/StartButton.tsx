"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function StartButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
    >
      <Link href="/test">
        <motion.button
          className="px-10 py-4 bg-gradient-to-r from-lavender to-blossom text-white font-semibold text-lg rounded-full shadow-lg shadow-lavender/25 hover:shadow-xl hover:shadow-lavender/30 transition-shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          테스트 시작하기
        </motion.button>
      </Link>
    </motion.div>
  );
}
