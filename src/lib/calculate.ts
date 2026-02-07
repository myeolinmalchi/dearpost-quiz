import { AxisScores, PersonalityCode } from "@/types";

export function calculateResult(answers: Array<{ axis: string; direction: "left" | "right" }>): {
  code: PersonalityCode;
  scores: AxisScores;
} {
  const scores: AxisScores = { TM: 0, GS: 0, ER: 0, NQ: 0 };

  for (const answer of answers) {
    const axis = answer.axis as keyof AxisScores;
    if (answer.direction === "left") {
      scores[axis]++;
    }
  }

  const tm = scores.TM >= 3 ? "T" : scores.TM <= 1 ? "M" : scores.TM >= 2 ? "T" : "M";
  const gs = scores.GS >= 3 ? "G" : scores.GS <= 1 ? "S" : scores.GS >= 2 ? "G" : "S";
  const er = scores.ER >= 3 ? "E" : scores.ER <= 1 ? "R" : scores.ER >= 2 ? "E" : "R";
  const nq = scores.NQ >= 3 ? "N" : scores.NQ <= 1 ? "Q" : scores.NQ >= 2 ? "N" : "Q";

  const code = `${tm}${gs}${er}${nq}` as PersonalityCode;

  return { code, scores };
}

// 점수를 퍼센티지 쿼리스트링으로 인코딩 (각 축 0~4 → single digit)
export function encodeScores(scores: AxisScores): string {
  return `${scores.TM}${scores.GS}${scores.ER}${scores.NQ}`;
}

// 쿼리스트링에서 점수 디코딩
export function decodeScores(encoded: string): AxisScores {
  return {
    TM: parseInt(encoded[0]) || 0,
    GS: parseInt(encoded[1]) || 0,
    ER: parseInt(encoded[2]) || 0,
    NQ: parseInt(encoded[3]) || 0,
  };
}

// 축 점수를 왼쪽 방향 퍼센티지로 변환 (0~4 → 0~100)
export function scoreToPercent(score: number): number {
  return Math.round((score / 4) * 100);
}
