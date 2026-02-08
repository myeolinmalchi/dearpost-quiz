import type { Metadata } from "next";
import { Gowun_Batang } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: [
    {
      path: "../fonts/PretendardVariable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
  fallback: ["-apple-system", "BlinkMacSystemFont", "system-ui", "Roboto", "sans-serif"],
});

const gowunBatang = Gowun_Batang({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-gowun",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dearpost.kr/dearpost-quiz"),
  title: "DearPost - 나의 독서 유형 테스트",
  description:
    "독서와 기록 습관으로 알아보는 나만의 독서 성격 유형 테스트. 16가지 유형 중 나는 어떤 독서인일까?",
  openGraph: {
    title: "DearPost - 나의 독서 유형 테스트",
    description:
      "독서와 기록 습관으로 알아보는 나만의 독서 성격 유형 테스트. 16가지 유형 중 나는 어떤 독서인일까?",
    type: "website",
    siteName: "DearPost",
    locale: "ko_KR",
    images: [
      {
        url: "/og/og-main.png",
        width: 1200,
        height: 630,
        alt: "DearPost - 나의 독서 유형 테스트",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DearPost - 나의 독서 유형 테스트",
    description:
      "독서와 기록 습관으로 알아보는 나만의 독서 성격 유형 테스트. 16가지 유형 중 나는 어떤 독서인일까?",
    images: ["/og/og-main.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} ${gowunBatang.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
