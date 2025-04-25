import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
  wordLength: number;
  onWordLengthChange: (length: number) => void;
}

const Settings: React.FC<SettingsProps> = ({
  isOpen,
  onClose,
  wordLength,
  onWordLengthChange,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md" dir="rtl">
        <DialogHeader>
          <DialogTitle>إعدادات اللعبة</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label>طول الكلمة</Label>
            <Select
              value={wordLength.toString()}
              onValueChange={(value) => onWordLengthChange(parseInt(value))}
            >
              <SelectTrigger>
                <SelectValue placeholder="اختر طول الكلمة" />
              </SelectTrigger>
              <SelectContent>
                {[3, 4, 5, 6].map((length) => (
                  <SelectItem key={length} value={length.toString()}>
                    {length} حروف
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Settings;
