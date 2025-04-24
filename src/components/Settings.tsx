
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
  wordLength: number;
  showArabic: boolean;
  onWordLengthChange: (length: number) => void;
  onShowArabicChange: (show: boolean) => void;
}

const Settings: React.FC<SettingsProps> = ({
  isOpen,
  onClose,
  wordLength,
  showArabic,
  onWordLengthChange,
  onShowArabicChange,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Game Settings</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Word Length</Label>
            <Select 
              value={wordLength.toString()} 
              onValueChange={(value) => onWordLengthChange(parseInt(value))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select word length" />
              </SelectTrigger>
              <SelectContent>
                {[5, 6, 7].map((length) => (
                  <SelectItem key={length} value={length.toString()}>
                    {length} letters
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <Label>Show Arabic Script</Label>
            <Switch
              checked={showArabic}
              onCheckedChange={onShowArabicChange}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Settings;

