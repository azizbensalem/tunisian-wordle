import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface GameStats {
  gamesPlayed: number;
  wins: number;
  currentStreak: number;
  maxStreak: number;
  guessDistribution: number[];
}

interface GameStatsProps {
  isOpen: boolean;
  onClose: () => void;
  stats: GameStats;
  hasWon: boolean;
  guessCount: number;
  targetWord: string;
  handleNewGame: () => void;
}

const GameStats: React.FC<GameStatsProps> = ({
  isOpen,
  onClose,
  stats,
  hasWon,
  guessCount,
  targetWord,
  handleNewGame,
}) => {
  const winPercentage =
    stats.gamesPlayed > 0
      ? Math.round((stats.wins / stats.gamesPlayed) * 100)
      : 0;

  const maxInDistribution = Math.max(...stats.guessDistribution, 1);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md" dir="rtl">
        <DialogHeader>
          <DialogTitle>{hasWon ? "مبروك!" : "انتهت اللعبة"}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {hasWon ? (
            <p>
              You guessed the word in {guessCount}{" "}
              {guessCount === 1 ? "try" : "tries"}!
            </p>
          ) : (
            <p>
              The word was:{" "}
              <strong className="text-tunisia-red">{targetWord}</strong>
            </p>
          )}

          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">{stats.gamesPlayed}</span>
              <span className="text-xs">لعبت</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">{winPercentage}</span>
              <span className="text-xs">نسبة الفوز ٪</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">{stats.currentStreak}</span>
              <span className="text-xs">سلسلة حالية</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">{stats.maxStreak}</span>
              <span className="text-xs">أطول سلسلة</span>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">توزيع المحاولات</h3>
            <div className="space-y-1">
              {stats.guessDistribution.map((count, i) => (
                <div key={i} className="flex items-center gap-1">
                  <div className="w-4">{i + 1}</div>
                  <div
                    className={cn(
                      "text-right px-2 py-1 text-xs font-medium",
                      hasWon && i + 1 === guessCount
                        ? "bg-tunisia-correct text-white"
                        : "bg-tunisia-absent text-white"
                    )}
                    style={{
                      width: `${(count / maxInDistribution) * 100}%`,
                      minWidth: count > 0 ? "10%" : "0",
                    }}
                  >
                    {count}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={handleNewGame}
            className="w-full bg-tunisia-red hover:bg-red-700 text-white"
          >
            New Game
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

import { cn } from "@/lib/utils";
export default GameStats;
