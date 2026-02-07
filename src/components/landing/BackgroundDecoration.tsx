"use client";

export default function BackgroundDecoration() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Pastel blur circles */}
      <div className="absolute top-[10%] left-[10%] w-64 h-64 rounded-full bg-peach/30 blur-3xl animate-float" />
      <div className="absolute top-[60%] right-[5%] w-80 h-80 rounded-full bg-lavender/20 blur-3xl animate-float-slow" />
      <div className="absolute bottom-[10%] left-[20%] w-72 h-72 rounded-full bg-mint/25 blur-3xl animate-float-delayed" />
      <div className="absolute top-[30%] right-[25%] w-48 h-48 rounded-full bg-blossom/20 blur-3xl animate-float" />
      <div className="absolute top-[5%] right-[40%] w-36 h-36 rounded-full bg-peach-light/40 blur-2xl animate-float-slow" />
    </div>
  );
}
