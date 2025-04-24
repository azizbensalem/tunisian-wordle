
import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import GameBoard from "@/components/GameBoard";
import Keyboard from "@/components/Keyboard";
import GameStats from "@/components/GameStats";
import HowToPlay from "@/components/HowToPlay";
import { Button } from "@/components/ui/button";
import { getRandomWord, isValidWord } from "@/data/tunisianWords";

const Index = () => {
  // Game state
  const [targetWord, setTargetWord] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showHowToPlay, setShowHowToPlay] = useState(false);

  // Stats
  const [stats, setStats] = useState(() => {
    const savedStats = localStorage.getItem("tunisian-wordle-stats");
    if (savedStats) {
      return JSON.parse(savedStats);
    }
    return {
      gamesPlayed: 0,
      wins: 0,
      currentStreak: 0,
      maxStreak: 0,
      guessDistribution: [0, 0, 0, 0, 0, 0],
    };
  });

  // Initialize game
  useEffect(() => {
    startNewGame();
    // Show how to play on first visit
    const hasPlayed = localStorage.getItem("tunisian-wordle-played");
    if (!hasPlayed) {
      setShowHowToPlay(true);
      localStorage.setItem("tunisian-wordle-played", "true");
    }
  }, []);

  // Save stats when they change
  useEffect(() => {
    localStorage.setItem("tunisian-wordle-stats", JSON.stringify(stats));
  }, [stats]);

  // Start a new game
  const startNewGame = () => {
    const newTarget = getRandomWord();
    setTargetWord(newTarget);
    setGuesses([]);
    setCurrentGuess("");
    setGameOver(false);
    setHasWon(false);
    console.log("New game started. Word to guess:", newTarget); // For debugging
  };

  // Handle game completion
  const handleGameEnd = (won: boolean) => {
    setGameOver(true);
    setHasWon(won);

    const newStats = { ...stats };
    newStats.gamesPlayed++;

    if (won) {
      newStats.wins++;
      newStats.currentStreak++;
      newStats.maxStreak = Math.max(newStats.maxStreak, newStats.currentStreak);
      newStats.guessDistribution[guesses.length] += 1;

      toast.success("Great job! 🎉", {
        description: `You found the word in ${guesses.length + 1} ${guesses.length === 0 ? 'try' : 'tries'}!`,
      });
    } else {
      newStats.currentStreak = 0;

      toast.error("Game over!", {
        description: `The word was ${targetWord}.`,
      });
    }

    setStats(newStats);
    setTimeout(() => setShowStats(true), 1500);
  };

  // Handle keyboard input
  const handleKeyPress = (key: string) => {
    if (gameOver) return;

    if (key === "Enter") {
      // Submit guess
      if (currentGuess.length !== 5) {
        toast.error("Word must be 5 letters!");
        document.querySelector(".game-board")?.classList.add("animate-shake");
        setTimeout(() => document.querySelector(".game-board")?.classList.remove("animate-shake"), 500);
        return;
      }

      if (!isValidWord(currentGuess)) {
        toast.error("Not in word list!");
        document.querySelector(".game-board")?.classList.add("animate-shake");
        setTimeout(() => document.querySelector(".game-board")?.classList.remove("animate-shake"), 500);
        return;
      }

      const newGuesses = [...guesses, currentGuess.toUpperCase()];
      setGuesses(newGuesses);
      setCurrentGuess("");

      // Check if the player won
      if (currentGuess.toUpperCase() === targetWord) {
        handleGameEnd(true);
        return;
      }
      
      // Check if the player lost
      if (newGuesses.length === 6) {
        handleGameEnd(false);
        return;
      }
    } else if (key === "Backspace") {
      // Delete last character
      setCurrentGuess((prev) => prev.slice(0, -1));
    } else {
      // Add letter (if not already 5 letters)
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
      }
    }
  };

  // Handle physical keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameOver) return;

      if (e.key === "Enter") {
        handleKeyPress("Enter");
      } else if (e.key === "Backspace") {
        handleKeyPress("Backspace");
      } else {
        const key = e.key.toUpperCase();
        if (/^[A-Z]$/.test(key)) {
          handleKeyPress(key);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentGuess, guesses, gameOver, targetWord]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-tunisia-red text-white py-4 shadow-md">
        <div className="container max-w-lg mx-auto px-4 flex justify-between items-center">
          <Button 
            variant="ghost" 
            onClick={() => setShowHowToPlay(true)}
            className="text-white hover:bg-red-700"
          >
            ?
          </Button>
          <h1 className="text-2xl font-bold tracking-wide">TUNISIAN WORDLE</h1>
          <Button 
            variant="ghost" 
            onClick={() => setShowStats(true)}
            className="text-white hover:bg-red-700"
          >
            📊
          </Button>
        </div>
      </header>

      {/* Game Board */}
      <main className="flex-1 container max-w-lg mx-auto px-4 py-8 flex flex-col items-center justify-between gap-8">
        <div className="game-board w-full flex justify-center">
          <GameBoard
            guesses={guesses}
            currentGuess={currentGuess}
            targetWord={targetWord}
          />
        </div>

        {/* Keyboard */}
        <div className="w-full">
          <Keyboard
            onKeyPress={handleKeyPress}
            guesses={guesses}
            targetWord={targetWord}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-2 text-center text-sm text-gray-600">
        <p>Tunisian Wordle &copy; 2025</p>
      </footer>

      {/* Modals */}
      <GameStats
        isOpen={showStats}
        onClose={() => setShowStats(false)}
        stats={stats}
        hasWon={hasWon}
        guessCount={guesses.length}
        targetWord={targetWord}
        handleNewGame={startNewGame}
      />

      <HowToPlay
        isOpen={showHowToPlay}
        onClose={() => setShowHowToPlay(false)}
      />
    </div>
  );
};

export default Index;
