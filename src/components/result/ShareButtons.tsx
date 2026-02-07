"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { toPng } from "html-to-image";
import { PersonalityCode } from "@/types";

interface ShareButtonsProps {
  code: PersonalityCode;
}

export default function ShareButtons({ code }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  }, []);

  const handleSaveImage = useCallback(async () => {
    const el = document.getElementById("type-card");
    if (!el) return;

    setSaving(true);
    try {
      const dataUrl = await toPng(el, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: "#FFF8F0",
      });
      const link = document.createElement("a");
      link.download = `dearpost-${code}.png`;
      link.href = dataUrl;
      link.click();
    } catch {
      // fallback
    } finally {
      setSaving(false);
    }
  }, [code]);

  return (
    <motion.div
      className="w-full flex gap-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.5 }}
    >
      <motion.button
        className="flex-1 py-3 rounded-xl bg-gradient-to-r from-lavender to-blossom text-white font-semibold text-sm"
        onClick={handleSaveImage}
        disabled={saving}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {saving ? "저장 중..." : "이미지 저장"}
      </motion.button>
      <motion.button
        className="flex-1 py-3 rounded-xl border-2 border-lavender text-lavender font-semibold text-sm hover:bg-lavender-light/30 transition-colors"
        onClick={handleCopyLink}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {copied ? "복사 완료!" : "링크 복사"}
      </motion.button>
    </motion.div>
  );
}
