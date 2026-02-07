"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Personality, AxisScores, PersonalityCode } from "@/types";
import { decodeScores } from "@/lib/calculate";
import TypeCard from "./TypeCard";
import AxisBreakdown from "./AxisBreakdown";
import CompatibilityInfo from "./CompatibilityInfo";
import ProductRecommendation from "./ProductRecommendation";
import ShareButtons from "./ShareButtons";
import Link from "next/link";

interface ResultContentProps {
  personality: Personality;
}

export default function ResultContent({ personality }: ResultContentProps) {
  const searchParams = useSearchParams();
  const encoded = searchParams.get("s") || "2222";
  const scores: AxisScores = decodeScores(encoded);

  return (
    <div className="w-full max-w-lg mx-auto space-y-8 py-12 px-4">
      <TypeCard personality={personality} />

      {/* Keywords */}
      <motion.div
        className="flex flex-wrap justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {personality.keywords.map((keyword) => (
          <Badge
            key={keyword}
            variant="secondary"
            className="rounded-full px-4 py-1 text-sm bg-lavender-light/50 text-lavender border-0 hover:bg-lavender-light"
          >
            {keyword}
          </Badge>
        ))}
      </motion.div>

      {/* Traits */}
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="font-serif text-lg font-bold text-warm-gray text-center">
          나의 독서 특성
        </h2>
        <div className="space-y-2">
          {personality.traits.map((trait, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
            >
              <span className="text-peach">•</span>
              <span className="text-sm text-warm-gray">{trait}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Axis Breakdown */}
      <AxisBreakdown scores={scores} personality={personality} />

      {/* Recommended Activities */}
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h2 className="font-serif text-lg font-bold text-warm-gray text-center">
          추천 활동
        </h2>
        <div className="grid grid-cols-1 gap-2">
          {personality.activities.map((activity, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
            >
              <span className="text-mint">✦</span>
              <span className="text-sm text-warm-gray">{activity}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Product Recommendations */}
      <ProductRecommendation code={personality.code as PersonalityCode} />

      {/* Compatibility */}
      <CompatibilityInfo personality={personality} />

      {/* Share Buttons */}
      <ShareButtons code={personality.code as PersonalityCode} />

      {/* Retry Button */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      >
        <Link
          href="/"
          className="text-sm text-soft-brown/60 hover:text-soft-brown transition-colors underline underline-offset-4"
        >
          다시 테스트하기
        </Link>
      </motion.div>
    </div>
  );
}
