import React from "react";
import { cn } from "@/lib/utils";

type KeyState = "absent" | "present" | "correct" | "default";

interface KeyboardProps {
  onKeyPress: (key: string) => void;
  guesses: string[];
  targetWord: string;
}

const Keyboard: React.FC<KeyboardProps> = ({
  onKeyPress,
  guesses,
  targetWord,
}) => {
  const rows = [
    ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج"],
    ["ش", "س", "ي", "ب", "ل", "ا", "ت", "ن", "م", "ك"],
    ["Enter", "ظ", "ط", "ذ", "د", "ز", "ر", "و", "ة", "Backspace"],
  ];

  const getKeyState = (key: string): KeyState => {
    // Ignore non-letter keys
    if (key === "Enter" || key === "Backspace") {
      return "default";
    }

    let state: KeyState = "default";

    for (const guess of guesses) {
      const keyPositions = guess
        .split("")
        .map((char, index) => (char === key ? index : -1))
        .filter((pos) => pos !== -1);

      for (const position of keyPositions) {
        if (targetWord[position] === key) {
          return "correct";
        } else if (targetWord.includes(key)) {
          state = "present";
        } else {
          if (state !== "present") {
            state = "absent";
          }
        }
      }
    }

    return state;
  };

  return (
    <div className="w-full max-w-lg" dir="rtl">
      {rows.map((row, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className={cn(
            "flex justify-center gap-1 mb-2",
            rowIndex === 1 && "px-4"
          )}
        >
          {row.map((key) => {
            const state = getKeyState(key);

            let buttonStyle = "bg-tunisia-keyboard text-gray-800";
            if (state === "correct")
              buttonStyle = "bg-tunisia-correct text-white";
            if (state === "present")
              buttonStyle = "bg-tunisia-present text-white";
            if (state === "absent")
              buttonStyle = "bg-tunisia-absent text-white";

            return (
              <button
                key={key}
                onClick={() => onKeyPress(key)}
                className={cn(
                  "rounded h-14 font-bold text-sm sm:text-base flex items-center justify-center transition-colors",
                  key === "Enter"
                    ? "px-2 flex-grow"
                    : key === "Backspace"
                    ? "px-3 flex-grow"
                    : "w-8 sm:w-10",
                  buttonStyle
                )}
              >
                {key === "Backspace" ? "⌫" : key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
