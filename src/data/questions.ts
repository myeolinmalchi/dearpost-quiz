import { Question } from "@/types";

export const questions: Question[] = [
  // Round 1: 축1(TM) → 축2(GS) → 축3(ER) → 축4(NQ)
  {
    id: 1,
    text: "서점에 들어왔어요. 당신의 발걸음은?",
    choices: [
      { text: "이 코너 저 코너 돌아다니며 다양한 책을 구경한다", axis: "TM", direction: "left" },
      { text: "좋아하는 장르 코너로 바로 직행한다", axis: "TM", direction: "right" },
    ],
  },
  {
    id: 2,
    text: "마음에 드는 문장을 발견했을 때, 당신은?",
    choices: [
      { text: "노트에 깔끔하게 필사하고 페이지 번호도 적어둔다", axis: "GS", direction: "left" },
      { text: "마음속에 담아두고, 그 느낌을 오래 음미한다", axis: "GS", direction: "right" },
    ],
  },
  {
    id: 3,
    text: "책을 고를 때 가장 먼저 끌리는 요소는?",
    choices: [
      { text: "감정을 울리는 이야기와 따뜻한 문장", axis: "ER", direction: "left" },
      { text: "새로운 지식과 인사이트를 줄 수 있는 내용", axis: "ER", direction: "right" },
    ],
  },
  {
    id: 4,
    text: "좋은 책을 읽고 난 직후, 당신의 모습은?",
    choices: [
      { text: "누군가에게 바로 이야기하고 싶어진다", axis: "NQ", direction: "left" },
      { text: "혼자 조용히 여운을 즐기고 싶다", axis: "NQ", direction: "right" },
    ],
  },

  // Round 2
  {
    id: 5,
    text: "한 달에 읽는 책의 장르를 살펴보면?",
    choices: [
      { text: "소설, 에세이, 과학, 역사 등 매번 다른 분야", axis: "TM", direction: "left" },
      { text: "비슷한 주제나 장르의 책이 대부분이다", axis: "TM", direction: "right" },
    ],
  },
  {
    id: 6,
    text: "독서 후 기록에 대한 당신의 스타일은?",
    choices: [
      { text: "독서 노트나 앱에 핵심 내용을 정리한다", axis: "GS", direction: "left" },
      { text: "특별히 기록하지 않고 자연스럽게 흡수한다", axis: "GS", direction: "right" },
    ],
  },
  {
    id: 7,
    text: "친구가 책을 추천해달라고 합니다. 당신의 기준은?",
    choices: [
      { text: "읽으면서 울컥했거나 마음이 따뜻해졌던 책", axis: "ER", direction: "left" },
      { text: "관점이 바뀌거나 생각이 깊어졌던 책", axis: "ER", direction: "right" },
    ],
  },
  {
    id: 8,
    text: "독서 모임에 초대받았어요. 당신의 반응은?",
    choices: [
      { text: "재미있겠다! 다양한 의견을 나누고 싶다", axis: "NQ", direction: "left" },
      { text: "혼자 읽는 시간이 더 소중해서 고민된다", axis: "NQ", direction: "right" },
    ],
  },

  // Round 3
  {
    id: 9,
    text: "온라인 서점에서 장바구니를 열어보면?",
    choices: [
      { text: "여러 분야의 책이 골고루 담겨 있다", axis: "TM", direction: "left" },
      { text: "관심 있는 한두 분야의 책이 집중되어 있다", axis: "TM", direction: "right" },
    ],
  },
  {
    id: 10,
    text: "책에 밑줄을 긋는 스타일은?",
    choices: [
      { text: "다양한 색 펜으로 분류하며 체계적으로 표시한다", axis: "GS", direction: "left" },
      { text: "밑줄 없이 읽거나, 마음 가는 대로 자유롭게 표시한다", axis: "GS", direction: "right" },
    ],
  },
  {
    id: 11,
    text: "비 오는 오후, 읽고 싶은 책은?",
    choices: [
      { text: "감성적인 에세이나 따뜻한 소설", axis: "ER", direction: "left" },
      { text: "집중하기 좋은 전문서나 논픽션", axis: "ER", direction: "right" },
    ],
  },
  {
    id: 12,
    text: "SNS에 독서 관련 게시물을 올리는 편인가요?",
    choices: [
      { text: "읽은 책이나 인상 깊은 구절을 종종 공유한다", axis: "NQ", direction: "left" },
      { text: "독서는 개인적인 활동이라 공유하지 않는다", axis: "NQ", direction: "right" },
    ],
  },

  // Round 4
  {
    id: 13,
    text: "새해 독서 목표를 세운다면?",
    choices: [
      { text: "올해는 새로운 장르에 도전해보자!", axis: "TM", direction: "left" },
      { text: "올해는 이 분야를 확실히 파고들자!", axis: "TM", direction: "right" },
    ],
  },
  {
    id: 14,
    text: "독서 관련 앱이나 도구를 쓴다면?",
    choices: [
      { text: "독서 기록 앱으로 체계적으로 관리한다", axis: "GS", direction: "left" },
      { text: "앱 없이 마음 가는 대로 읽는다", axis: "GS", direction: "right" },
    ],
  },
  {
    id: 15,
    text: "서재에서 가장 눈에 띄는 책장의 특징은?",
    choices: [
      { text: "감동을 준 이야기와 아름다운 문장의 책들", axis: "ER", direction: "left" },
      { text: "지식과 통찰을 넓혀준 실용적인 책들", axis: "ER", direction: "right" },
    ],
  },
  {
    id: 16,
    text: "책에서 얻은 깨달음이 생겼을 때, 당신은?",
    choices: [
      { text: "블로그나 대화에서 다른 사람과 나누고 싶다", axis: "NQ", direction: "left" },
      { text: "내 안에서 천천히 소화하고 싶다", axis: "NQ", direction: "right" },
    ],
  },
];
