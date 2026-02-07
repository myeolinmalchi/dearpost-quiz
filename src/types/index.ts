// 4개 축 타입
export type Axis = "TM" | "GS" | "ER" | "NQ";

// 축의 각 방향
export type AxisDirection = {
  TM: "T" | "M"; // 탐험 vs 몰입
  GS: "G" | "S"; // 기록 vs 감상
  ER: "E" | "R"; // 감성 vs 이성
  NQ: "N" | "Q"; // 나눔 vs 고요
};

// 16유형 코드
export type PersonalityCode =
  | "TGEN" | "TGEQ" | "TGRN" | "TGRQ"
  | "TSEN" | "TSEQ" | "TSRN" | "TSRQ"
  | "MGEN" | "MGEQ" | "MGRN" | "MGRQ"
  | "MSEN" | "MSEQ" | "MSRN" | "MSRQ";

// 질문 선택지
export interface Choice {
  text: string;
  axis: Axis;
  direction: "left" | "right"; // left = T/G/E/N, right = M/S/R/Q
}

// 질문
export interface Question {
  id: number;
  text: string;
  scenario?: string;
  choices: [Choice, Choice];
}

// 축 점수 (왼쪽 방향 점수 0-4)
export interface AxisScores {
  TM: number; // T 점수 (0~4, 높을수록 탐험)
  GS: number; // G 점수 (0~4, 높을수록 기록)
  ER: number; // E 점수 (0~4, 높을수록 감성)
  NQ: number; // N 점수 (0~4, 높을수록 나눔)
}

// 제품 데이터
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  category: "set" | "paper" | "envelope" | "sticker";
  url: string;
  imageUrl: string;
}

// 유형 데이터
export interface Personality {
  code: PersonalityCode;
  name: string;
  subtitle: string;
  description: string;
  emoji: string;
  color: string;
  keywords: string[];
  traits: string[];
  activities: string[];
  compatibility: PersonalityCode;
  axisDescriptions: {
    TM: string;
    GS: string;
    ER: string;
    NQ: string;
  };
}
