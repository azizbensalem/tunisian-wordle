import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface HowToPlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const HowToPlay: React.FC<HowToPlayProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="sm:max-w-md max-h-[90vh] overflow-auto"
        dir="rtl"
      >
        <DialogHeader>
          <DialogTitle>كيفاش تلعب وَردل تونسي</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p>
            حاول تلقى الكلمة التونسية في 6 محاولات. كل محاولة لازم تكون كلمة
            صحيحة باللهجة التونسية.
          </p>

          <p>
            بعد كل محاولة، لون المربعات راح يتبدل باش يوريك قداش قريب من الكلمة
            الصحيحة.
          </p>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-tunisia-correct rounded-md flex items-center justify-center text-white font-bold">
                ا
              </div>
              <p>الحرف موجود في الكلمة وفي المكان الصحيح.</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-tunisia-present rounded-md flex items-center justify-center text-white font-bold">
                ب
              </div>
              <p>الحرف موجود في الكلمة لكن في مكان غلط.</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-tunisia-absent rounded-md flex items-center justify-center text-white font-bold">
                ج
              </div>
              <p>الحرف مش موجود في الكلمة.</p>
            </div>
          </div>

          <p>كل مرة تبدا لعبة جديدة، باش تلقى كلمة تونسية جديدة!</p>

          <h3 className="font-bold">على اللهجة التونسية</h3>
          <p>كل مرة تبدا لعبة جديدة، راح تلقى كلمة تونسية جديدة!</p>

          <h3 className="font-bold">على اللهجة التونسية</h3>
          <p>
            اللهجة التونسية هي اللغة المحكية في تونس. هي مزيج من العربية مع
            تأثيرات من الأمازيغية والفرنسية والإيطالية والتركية ولغات أخرى.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HowToPlay;
