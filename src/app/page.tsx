import BackgroundDecoration from "@/components/landing/BackgroundDecoration";
import Hero from "@/components/landing/Hero";
import StartButton from "@/components/landing/StartButton";

export default function Home() {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center px-4">
      <BackgroundDecoration />
      <div className="max-w-lg mx-auto flex flex-col items-center gap-10">
        <div className="text-5xl">📚</div>
        <Hero />
        <StartButton />
        <p className="text-soft-brown/40 text-xs mt-4">DearPost</p>
      </div>
    </main>
  );
}
