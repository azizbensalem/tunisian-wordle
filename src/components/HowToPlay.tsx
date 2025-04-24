
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface HowToPlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const HowToPlay: React.FC<HowToPlayProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>How to Play Tunisian Wordle</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p>
            Guess the Tunisian word in 6 tries. Each guess must be a valid 5 
            letter word in Tunisian dialect.
          </p>
          
          <p>
            After each guess, the color of the tiles will change to show how 
            close your guess was to the word.
          </p>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-tunisia-correct rounded-md flex items-center justify-center text-white font-bold">
                A
              </div>
              <p>The letter A is in the word and in the correct spot.</p>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-tunisia-present rounded-md flex items-center justify-center text-white font-bold">
                B
              </div>
              <p>The letter B is in the word but in the wrong spot.</p>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-tunisia-absent rounded-md flex items-center justify-center text-white font-bold">
                C
              </div>
              <p>The letter C is not in the word.</p>
            </div>
          </div>
          
          <p>
            A new Tunisian word will be available each time you start a new game!
          </p>
          
          <h3 className="font-bold">About Tunisian Dialect</h3>
          <p>
            Tunisian Arabic, or Derja, is the variety of Arabic spoken in 
            Tunisia. It's a blend of Arabic with influences from Berber, 
            French, Italian, Turkish and other languages.
          </p>
          
          <p className="italic">
            Note: Words are latinized for easier gameplay.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HowToPlay;
