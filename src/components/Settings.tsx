
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ThemeToggle } from "./ThemeToggle";

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
  hardMode: boolean;
  onHardModeChange: (enabled: boolean) => void;
  wordLength: number;
  onWordLengthChange: (length: number) => void;
}

const Settings = ({
  isOpen,
  onClose,
  hardMode,
  onHardModeChange,
  wordLength,
  onWordLengthChange,
}: SettingsProps) => {
  const [localWordLength, setLocalWordLength] = useState(wordLength);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md" dir="rtl">
        <DialogHeader>
          <DialogTitle>الإعدادات</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="hard-mode">وضع صعب</Label>
            <Switch
              id="hard-mode"
              checked={hardMode}
              onCheckedChange={onHardModeChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="word-length">طول الكلمة</Label>
            <select
              id="word-length"
              value={localWordLength}
              onChange={(e) => {
                const newLength = parseInt(e.target.value);
                setLocalWordLength(newLength);
                onWordLengthChange(newLength);
              }}
              className="border rounded p-1"
            >
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <Label>المظهر</Label>
            <ThemeToggle />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Settings;
