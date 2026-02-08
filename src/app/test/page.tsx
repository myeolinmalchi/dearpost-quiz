import BackgroundDecoration from "@/components/landing/BackgroundDecoration";
import TestContainer from "@/components/test/TestContainer";

export const metadata = {
  title: "테스트 진행 중 - DearPost",
  description: "나의 독서 유형을 알아보는 16문항 테스트",
  openGraph: {
    title: "DearPost - 나의 독서 유형 테스트",
    description: "독서와 기록 습관으로 알아보는 나만의 독서 성격 유형 테스트",
    images: [{ url: "/og/og-main.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "DearPost - 나의 독서 유형 테스트",
    description: "독서와 기록 습관으로 알아보는 나만의 독서 성격 유형 테스트",
    images: ["/og/og-main.png"],
  },
};

export default function TestPage() {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center px-4 py-12">
      <BackgroundDecoration />
      <TestContainer />
    </main>
  );
}
