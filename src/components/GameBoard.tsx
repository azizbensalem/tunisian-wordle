
import React from "react";
import { cn } from "@/lib/utils";

type CellState = "absent" | "present" | "correct" | "empty" | "filled";

interface GameBoardProps {
  guesses: string[];
  currentGuess: string;
  targetWord: string;
  wordLength: number;
}

interface CellProps {
  value: string;
  state: CellState;
  position: number;
}

const Cell: React.FC<CellProps> = ({ value, state, position }) => {
  const stateStyles: Record<CellState, string> = {
    empty: "border-2 border-gray-300",
    filled: "border-2 border-gray-500",
    absent: "bg-tunisia-absent text-white border-tunisia-absent",
    present: "bg-tunisia-present text-white border-tunisia-present",
    correct: "bg-tunisia-correct text-white border-tunisia-correct",
  };

  return (
    <div
      className={cn(
        "w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-2xl font-bold rounded-md animate-pop",
        stateStyles[state]
      )}
      style={{ 
        animationDelay: `${position * 100}ms`,
      }}
    >
      {value}
    </div>
  );
};

const GameBoard: React.FC<GameBoardProps> = ({
  guesses,
  currentGuess,
  targetWord,
  wordLength,
}) => {
  const getEvaluations = (guess: string): CellState[] => {
    const evaluation: CellState[] = Array(wordLength).fill("absent");
    const targetChars = targetWord.split("");

    // First, mark correct ones
    guess.split("").forEach((char, i) => {
      if (targetChars[i] === char) {
        evaluation[i] = "correct";
        targetChars[i] = "#"; // Mark as used
      }
    });

    // Then, mark present ones
    guess.split("").forEach((char, i) => {
      if (evaluation[i] !== "correct") {
        const targetIndex = targetChars.indexOf(char);
        if (targetIndex !== -1) {
          evaluation[i] = "present";
          targetChars[targetIndex] = "#"; // Mark as used
        }
      }
    });

    return evaluation;
  };

  const rows = [];

  // Past guesses
  for (let i = 0; i < guesses.length; i++) {
    const guess = guesses[i];
    const evaluation = getEvaluations(guess);

    rows.push(
      <div key={`guess-${i}`} className="flex gap-1 mb-2" dir="rtl">
        {guess.split("").map((char, j) => (
          <Cell
            key={`guess-${i}-${j}`}
            value={char}
            state={evaluation[j]}
            position={j}
          />
        ))}
      </div>
    );
  }

  // Current guess
  if (guesses.length < 6) {
    const currentGuessArray = currentGuess.split("");
    const currentRow = [];
    
    for (let i = 0; i < targetWord.length; i++) {
      currentRow.push(
        <Cell
          key={`current-${i}`}
          value={currentGuessArray[i] || ""}
          state={currentGuessArray[i] ? "filled" : "empty"}
          position={i}
        />
      );
    }
    
    rows.push(
      <div key="current-guess" className="flex gap-1 mb-2" dir="rtl">
        {currentRow}
      </div>
    );

    // Empty rows
    for (let i = guesses.length + 1; i < 6; i++) {
      rows.push(
        <div key={`empty-${i}`} className="flex gap-1 mb-2" dir="rtl">
          {Array(targetWord.length)
            .fill(0)
            .map((_, j) => (
              <Cell key={`empty-${i}-${j}`} value="" state="empty" position={j} />
            ))}
        </div>
      );
    }
  }

  return <div className="grid gap-1">{rows}</div>;
};

export default GameBoard;

