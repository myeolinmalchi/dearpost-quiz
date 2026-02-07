"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";
import { calculateResult, encodeScores } from "@/lib/calculate";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";

export default function TestContainer() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<
    Array<{ axis: string; direction: "left" | "right" }>
  >([]);

  const handleAnswer = useCallback(
    (choiceIndex: number) => {
      const question = questions[currentIndex];
      const choice = question.choices[choiceIndex];

      const newAnswers = [
        ...answers,
        { axis: choice.axis, direction: choice.direction },
      ];
      setAnswers(newAnswers);

      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        const { code, scores } = calculateResult(newAnswers);
        const encoded = encodeScores(scores);
        router.push(`/result/${code}?s=${encoded}`);
      }
    },
    [currentIndex, answers, router]
  );

  return (
    <div className="w-full max-w-lg mx-auto space-y-8">
      <ProgressBar current={currentIndex} total={questions.length} />
      <QuestionCard
        question={questions[currentIndex]}
        questionIndex={currentIndex}
        onAnswer={handleAnswer}
      />
    </div>
  );
}
