"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Question } from "@/types";
import ChoiceButton from "./ChoiceButton";

interface QuestionCardProps {
  question: Question;
  questionIndex: number;
  onAnswer: (choiceIndex: number) => void;
}

export default function QuestionCard({ question, questionIndex, onAnswer }: QuestionCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        className="w-full space-y-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="text-center space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-lavender-light/50 text-lavender text-xs font-medium">
            Q{questionIndex + 1}
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-warm-gray leading-relaxed">
            {question.text}
          </h2>
        </div>

        <div className="space-y-3 pt-2">
          {question.choices.map((choice, idx) => (
            <ChoiceButton
              key={idx}
              text={choice.text}
              label={String.fromCharCode(65 + idx)}
              index={idx}
              onClick={() => onAnswer(idx)}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
