"use client";

import { motion } from "framer-motion";
import { AxisScores, Personality } from "@/types";
import { scoreToPercent } from "@/lib/calculate";

interface AxisBreakdownProps {
  scores: AxisScores;
  personality: Personality;
}

const axisLabels: Record<keyof AxisScores, [string, string]> = {
  TM: ["탐험", "몰입"],
  GS: ["기록", "감상"],
  ER: ["감성", "이성"],
  NQ: ["나눔", "고요"],
};

const axisColors: Record<keyof AxisScores, string> = {
  TM: "bg-peach",
  GS: "bg-lavender",
  ER: "bg-blossom",
  NQ: "bg-mint",
};

export default function AxisBreakdown({ scores, personality }: AxisBreakdownProps) {
  const axes: (keyof AxisScores)[] = ["TM", "GS", "ER", "NQ"];

  return (
    <motion.div
      className="w-full space-y-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <h2 className="font-serif text-lg font-bold text-warm-gray text-center">
        나의 독서 성향 분석
      </h2>

      <div className="space-y-4">
        {axes.map((axis, i) => {
          const [leftLabel, rightLabel] = axisLabels[axis];
          const leftPercent = scoreToPercent(scores[axis]);
          const rightPercent = 100 - leftPercent;

          return (
            <motion.div
              key={axis}
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
            >
              <div className="flex justify-between text-sm">
                <span className={`font-semibold ${leftPercent >= 50 ? "text-warm-gray" : "text-soft-brown/50"}`}>
                  {leftLabel} {leftPercent}%
                </span>
                <span className={`font-semibold ${rightPercent > 50 ? "text-warm-gray" : "text-soft-brown/50"}`}>
                  {rightPercent}% {rightLabel}
                </span>
              </div>
              <div className="w-full h-3 bg-muted rounded-full overflow-hidden flex">
                <motion.div
                  className={`h-full ${axisColors[axis]} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${leftPercent}%` }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                />
              </div>
              <p className="text-xs text-soft-brown/60">{personality.axisDescriptions[axis]}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
