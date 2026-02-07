import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { personalities, allPersonalityCodes } from "@/data/personalities";
import { PersonalityCode } from "@/types";
import BackgroundDecoration from "@/components/landing/BackgroundDecoration";
import ResultContent from "@/components/result/ResultContent";

interface PageProps {
  params: Promise<{ type: string }>;
}

export function generateStaticParams() {
  return allPersonalityCodes.map((code) => ({ type: code }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { type } = await params;
  const personality = personalities[type as PersonalityCode];

  if (!personality) {
    return { title: "결과를 찾을 수 없습니다 - DearPost" };
  }

  return {
    title: `${personality.name} (${personality.code}) - DearPost`,
    description: personality.subtitle,
    openGraph: {
      title: `나의 독서 유형: ${personality.name}`,
      description: personality.subtitle,
    },
  };
}

export default async function ResultPage({ params }: PageProps) {
  const { type } = await params;
  const personality = personalities[type as PersonalityCode];

  if (!personality) {
    notFound();
  }

  return (
    <main className="min-h-dvh">
      <BackgroundDecoration />
      <Suspense fallback={<div className="min-h-dvh flex items-center justify-center text-soft-brown">로딩 중...</div>}>
        <ResultContent personality={personality} />
      </Suspense>
    </main>
  );
}
