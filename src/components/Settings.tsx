import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
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
          <DialogDescription>
            اختر طول الكلمات التي تريد التخمين بها
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label>طول الكلمة</Label>
            <Select
              defaultValue={wordLength.toString()}
              onValueChange={(value) => {
                const length = parseInt(value);
                onWordLengthChange(length);
                onClose();
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="اختر طول الكلمة">
                  {wordLength}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3">3 حروف</SelectItem>
                <SelectItem value="4">4 حروف</SelectItem>
                <SelectItem value="5">5 حروف</SelectItem>
                <SelectItem value="6">6 حروف</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Settings;
