import BackgroundDecoration from "@/components/landing/BackgroundDecoration";
import TestContainer from "@/components/test/TestContainer";

export const metadata = {
  title: "테스트 진행 중 - DearPost",
  description: "나의 독서 유형을 알아보는 16문항 테스트",
};

export default function TestPage() {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center px-4 py-12">
      <BackgroundDecoration />
      <TestContainer />
    </main>
  );
}
