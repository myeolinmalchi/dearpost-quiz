"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PersonalityCode, Product } from "@/types";
import { getRecommendedProducts } from "@/data/products";

const categoryLabels: Record<Product["category"], string> = {
  set: "편지 세트",
  paper: "편지지",
  envelope: "봉투",
  sticker: "스티커",
};

const categoryColors: Record<Product["category"], string> = {
  set: "bg-peach/20 text-peach",
  paper: "bg-lavender-light/50 text-lavender",
  envelope: "bg-mint/20 text-mint",
  sticker: "bg-blossom/20 text-blossom",
};

function formatPrice(price: number): string {
  return price.toLocaleString("ko-KR") + "원";
}

interface ProductRecommendationProps {
  code: PersonalityCode;
}

export default function ProductRecommendation({ code }: ProductRecommendationProps) {
  const recommendedProducts = getRecommendedProducts(code);

  return (
    <motion.div
      className="w-full space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.5 }}
    >
      <div className="text-center space-y-1">
        <h2 className="font-serif text-lg font-bold text-warm-gray">
          당신을 위한 편지 아이템
        </h2>
        <p className="text-sm text-soft-brown/70">
          당신의 독서 감성에 어울리는 편지 아이템을 골라봤어요
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {recommendedProducts.map((product, i) => (
          <motion.a
            key={product.id}
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-2xl border-2 border-border bg-white/80 backdrop-blur-sm hover:border-lavender transition-colors"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 + i * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden bg-warm-beige/30">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[product.category]}`}
                  >
                    {categoryLabels[product.category]}
                  </span>
                </div>
                <p className="font-serif font-bold text-warm-gray text-sm">
                  {product.name}
                </p>
                <p className="text-xs text-soft-brown/70 leading-relaxed">
                  {product.description}
                </p>
              </div>
              <div className="text-right shrink-0 space-y-0.5">
                <p className="text-sm font-bold text-warm-gray">
                  {formatPrice(product.price)}
                </p>
                <p className="text-xs text-soft-brown/40 line-through">
                  {formatPrice(product.originalPrice)}
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        className="text-center pt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.4 }}
      >
        <a
          href="https://www.dearpost.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-soft-brown/60 hover:text-soft-brown transition-colors underline underline-offset-4"
        >
          dearpost 전체 상품 보기 &rarr;
        </a>
      </motion.div>
    </motion.div>
  );
}
