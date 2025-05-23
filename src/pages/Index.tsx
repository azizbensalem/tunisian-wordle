
import { useState, useEffect } from "react";
import { toast } from "sonner";
import GameBoard from "@/components/GameBoard";
import Keyboard from "@/components/Keyboard";
import GameStats from "@/components/GameStats";
import HowToPlay from "@/components/HowToPlay";
import Settings from "@/components/Settings";
import { Button } from "@/components/ui/button";
import { getRandomWord, isValidWord } from "@/data/tunisianWords";

const Index = () => {
  // Game state
  const [targetWord, setTargetWord] = useState({ arabic: "" });
  const [wordLength, setWordLength] = useState(5);
  const [hardMode, setHardMode] = useState(false);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

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

  // Initialize game with new word length
  const startNewGame = (length = wordLength) => {
    const newTarget = getRandomWord(length);
    setTargetWord({
      arabic: newTarget.arabic,
    });
    setGuesses([]);
    setCurrentGuess("");
    setGameOver(false);
    setHasWon(false);
  };

  // Handle word length change
  const handleWordLengthChange = (length: number) => {
    setWordLength(length);
    startNewGame(length);
  };

  // Handle hard mode change
  const handleHardModeChange = (enabled: boolean) => {
    setHardMode(enabled);
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

      toast.success("برافو عليك! 🎉", {
        description: `لقيت الكلمة في ${guesses.length + 1} ${
          guesses.length === 0 ? "محاولة" : "محاولات"
        }!`,
      });
    } else {
      newStats.currentStreak = 0;

      toast.error("خسرت!", {
        description: `الكلمة كانت ${targetWord.arabic}`,
      });
    }

    setStats(newStats);
    setTimeout(() => setShowStats(true), 1500);
  };

  // Handle keyboard input with word length validation
  const handleKeyPress = (key: string) => {
    if (gameOver) return;

    if (key === "Enter") {
      if (currentGuess.length !== targetWord.arabic.length) {
        toast.error(`الكلمة يجب أن تكون ${targetWord.arabic.length} حروف!`);
        document.querySelector(".game-board")?.classList.add("animate-shake");
        setTimeout(
          () =>
            document
              .querySelector(".game-board")
              ?.classList.remove("animate-shake"),
          500
        );
        return;
      }

      if (!isValidWord(currentGuess, wordLength)) {
        toast.error("الكلمة غير موجودة في القائمة!");
        document.querySelector(".game-board")?.classList.add("animate-shake");
        setTimeout(
          () =>
            document
              .querySelector(".game-board")
              ?.classList.remove("animate-shake"),
          500
        );
        return;
      }

      const newGuesses = [...guesses, currentGuess];
      setGuesses(newGuesses);
      setCurrentGuess("");

      if (currentGuess === targetWord.arabic) {
        handleGameEnd(true);
        return;
      }

      if (newGuesses.length === 6) {
        handleGameEnd(false);
        return;
      }
    } else if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
    } else {
      if (currentGuess.length < targetWord.arabic.length) {
        setCurrentGuess((prev) => prev + key);
      }
    }
  };

  // Handle physical keyboard
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900" dir="rtl">
      <header className="bg-tunisia-red text-white py-4 shadow-md">
        <div className="container max-w-lg mx-auto px-4 flex justify-between items-center">
          <Button
            variant="ghost"
            onClick={() => setShowHowToPlay(true)}
            className="text-white hover:bg-red-700"
          >
            ؟
          </Button>
          <h1 className="text-2xl font-bold tracking-wide text-center">
            <div>وَردل تونسي</div>
          </h1>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              onClick={() => setShowSettings(true)}
              className="text-white hover:bg-red-700"
            >
              ⚙️
            </Button>
            <Button
              variant="ghost"
              onClick={() => setShowStats(true)}
              className="text-white hover:bg-red-700"
            >
              📊
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container max-w-lg mx-auto px-4 py-8 flex flex-col items-center justify-between gap-8">
        <div className="game-board w-full flex justify-center">
          <GameBoard
            guesses={guesses}
            currentGuess={currentGuess}
            targetWord={targetWord.arabic}
            wordLength={wordLength}
          />
        </div>

        <div className="w-full">
          <Keyboard
            onKeyPress={handleKeyPress}
            guesses={guesses}
            targetWord={targetWord.arabic}
          />
        </div>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-2 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>Tunisian Wordle &copy; 2025</p>
      </footer>

      <GameStats
        isOpen={showStats}
        onClose={() => setShowStats(false)}
        stats={stats}
        hasWon={hasWon}
        guessCount={guesses.length}
        targetWord={targetWord.arabic}
        handleNewGame={() => {
          startNewGame();
          setShowStats(false);
        }}
      />

      <HowToPlay
        isOpen={showHowToPlay}
        onClose={() => setShowHowToPlay(false)}
      />

      <Settings
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        hardMode={hardMode}
        onHardModeChange={handleHardModeChange}
        wordLength={wordLength}
        onWordLengthChange={handleWordLengthChange}
      />
    </div>
  );
};

export default Index;
