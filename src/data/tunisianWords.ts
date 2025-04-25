// Words in Tunisian dialect with their Arabic script
interface TunisianWord {
  arabic: string;
  length: number;
}

// Helper function to calculate correct Arabic word length
const getArabicLength = (word: string): number => {
  return [...word].length;
};

export const tunisianWords: TunisianWord[] = [
  // Common verbs
  { arabic: "مشى", length: getArabicLength("مشى") },
  { arabic: "جاء", length: getArabicLength("جاء") },
  { arabic: "قعد", length: getArabicLength("قعد") },
  { arabic: "شرب", length: getArabicLength("شرب") },
  { arabic: "كلى", length: getArabicLength("كلى") },
  { arabic: "رقد", length: getArabicLength("رقد") },
  { arabic: "قال", length: getArabicLength("قال") },
  { arabic: "سمع", length: getArabicLength("سمع") },
  { arabic: "شاف", length: getArabicLength("شاف") },
  { arabic: "كتب", length: getArabicLength("كتب") },

  // Common nouns
  { arabic: "دار", length: getArabicLength("دار") },
  { arabic: "حوش", length: getArabicLength("حوش") },
  { arabic: "بيت", length: getArabicLength("بيت") },
  { arabic: "كرسي", length: getArabicLength("كرسي") },
  { arabic: "طاولة", length: getArabicLength("طاولة") },
  { arabic: "باب", length: getArabicLength("باب") },
  { arabic: "شباك", length: getArabicLength("شباك") },
  { arabic: "حيط", length: getArabicLength("حيط") },
  { arabic: "سقف", length: getArabicLength("سقف") },
  { arabic: "مطبخ", length: getArabicLength("مطبخ") },

  // Food and drinks
  { arabic: "خبز", length: getArabicLength("خبز") },
  { arabic: "زيت", length: getArabicLength("زيت") },
  { arabic: "حليب", length: getArabicLength("حليب") },
  { arabic: "ماء", length: getArabicLength("ماء") },
  { arabic: "لحم", length: getArabicLength("لحم") },
  { arabic: "سمك", length: getArabicLength("سمك") },
  { arabic: "دجاج", length: getArabicLength("دجاج") },
  { arabic: "بيض", length: getArabicLength("بيض") },
  { arabic: "فلفل", length: getArabicLength("فلفل") },
  { arabic: "طماطم", length: getArabicLength("طماطم") },

  // Family members
  { arabic: "بابا", length: getArabicLength("بابا") },
  { arabic: "يما", length: getArabicLength("يما") },
  { arabic: "خوي", length: getArabicLength("خوي") },
  { arabic: "ختي", length: getArabicLength("ختي") },
  { arabic: "جدي", length: getArabicLength("جدي") },
  { arabic: "نانا", length: getArabicLength("نانا") },
  { arabic: "عمي", length: getArabicLength("عمي") },
  { arabic: "خالي", length: getArabicLength("خالي") },
  { arabic: "عمتي", length: getArabicLength("عمتي") },
  { arabic: "خالتي", length: getArabicLength("خالتي") },

  // Common adjectives
  { arabic: "كبير", length: getArabicLength("كبير") },
  { arabic: "صغير", length: getArabicLength("صغير") },
  { arabic: "طويل", length: getArabicLength("طويل") },
  { arabic: "قصير", length: getArabicLength("قصير") },
  { arabic: "زين", length: getArabicLength("زين") },
  { arabic: "خايب", length: getArabicLength("خايب") },
  { arabic: "باهي", length: getArabicLength("باهي") },
  { arabic: "مليح", length: getArabicLength("مليح") },
  { arabic: "ساخن", length: getArabicLength("ساخن") },
  { arabic: "بارد", length: getArabicLength("بارد") },

  // Time expressions
  { arabic: "توا", length: getArabicLength("توا") },
  { arabic: "غدوة", length: getArabicLength("غدوة") },
  { arabic: "البارح", length: getArabicLength("البارح") },
  { arabic: "بكري", length: getArabicLength("بكري") },
  { arabic: "عشية", length: getArabicLength("عشية") },
  { arabic: "صباح", length: getArabicLength("صباح") },
  { arabic: "ليل", length: getArabicLength("ليل") },
  { arabic: "نهار", length: getArabicLength("نهار") },
  { arabic: "سنة", length: getArabicLength("سنة") },
  { arabic: "شهر", length: getArabicLength("شهر") },

  // Clothes and accessories
  { arabic: "سروال", length: getArabicLength("سروال") },
  { arabic: "قميجة", length: getArabicLength("قميجة") },
  { arabic: "صباط", length: getArabicLength("صباط") },
  { arabic: "جبة", length: getArabicLength("جبة") },
  { arabic: "فيست", length: getArabicLength("فيست") },
  { arabic: "كسوة", length: getArabicLength("كسوة") },
  { arabic: "منديل", length: getArabicLength("منديل") },
  { arabic: "شاش", length: getArabicLength("شاش") },
  { arabic: "جاكيتة", length: getArabicLength("جاكيتة") },
  { arabic: "برنس", length: getArabicLength("برنس") },

  // Transportation
  { arabic: "كرهبة", length: getArabicLength("كرهبة") },
  { arabic: "بيسكلات", length: getArabicLength("بيسكلات") },
  { arabic: "طيارة", length: getArabicLength("طيارة") },
  { arabic: "باتيندة", length: getArabicLength("باتيندة") },
  { arabic: "تاكسي", length: getArabicLength("تاكسي") },
  { arabic: "كار", length: getArabicLength("كار") },
  { arabic: "مترو", length: getArabicLength("مترو") },
  { arabic: "تران", length: getArabicLength("تران") },
  { arabic: "موتو", length: getArabicLength("موتو") },
  { arabic: "فلوكة", length: getArabicLength("فلوكة") },
  
  // Colors
  { arabic: "أحمر", length: getArabicLength("أحمر") },
  { arabic: "أزرق", length: getArabicLength("أزرق") },
  { arabic: "أخضر", length: getArabicLength("أخضر") },
  { arabic: "أصفر", length: getArabicLength("أصفر") },
  { arabic: "أبيض", length: getArabicLength("أبيض") },
  { arabic: "أسود", length: getArabicLength("أسود") },
  { arabic: "بني", length: getArabicLength("بني") },
  { arabic: "رمادي", length: getArabicLength("رمادي") },
  { arabic: "وردي", length: getArabicLength("وردي") },
  { arabic: "برتقالي", length: getArabicLength("برتقالي") },
  
  // Numbers
  { arabic: "واحد", length: getArabicLength("واحد") },
  { arabic: "زوز", length: getArabicLength("زوز") },
  { arabic: "ثلاثة", length: getArabicLength("ثلاثة") },
  { arabic: "أربعة", length: getArabicLength("أربعة") },
  { arabic: "خمسة", length: getArabicLength("خمسة") },
  { arabic: "ستة", length: getArabicLength("ستة") },
  { arabic: "سبعة", length: getArabicLength("سبعة") },
  { arabic: "ثمنية", length: getArabicLength("ثمنية") },
  { arabic: "تسعة", length: getArabicLength("تسعة") },
  { arabic: "عشرة", length: getArabicLength("عشرة") },
  
  // Weather
  { arabic: "شمس", length: getArabicLength("شمس") },
  { arabic: "مطر", length: getArabicLength("مطر") },
  { arabic: "ثلج", length: getArabicLength("ثلج") },
  { arabic: "ريح", length: getArabicLength("ريح") },
  { arabic: "غيم", length: getArabicLength("غيم") },
  { arabic: "ضباب", length: getArabicLength("ضباب") },
  { arabic: "برق", length: getArabicLength("برق") },
  { arabic: "رعد", length: getArabicLength("رعد") },
  { arabic: "عاصفة", length: getArabicLength("عاصفة") },
  { arabic: "قوس قزح", length: getArabicLength("قوس قزح") },
  
  // Body parts
  { arabic: "راس", length: getArabicLength("راس") },
  { arabic: "وجه", length: getArabicLength("وجه") },
  { arabic: "عين", length: getArabicLength("عين") },
  { arabic: "أنف", length: getArabicLength("أنف") },
  { arabic: "فم", length: getArabicLength("فم") },
  { arabic: "أذن", length: getArabicLength("أذن") },
  { arabic: "يد", length: getArabicLength("يد") },
  { arabic: "رجل", length: getArabicLength("رجل") },
  { arabic: "ظهر", length: getArabicLength("ظهر") },
  { arabic: "بطن", length: getArabicLength("بطن") },
  
  // Fruits
  { arabic: "تفاح", length: getArabicLength("تفاح") },
  { arabic: "برتقال", length: getArabicLength("برتقال") },
  { arabic: "موز", length: getArabicLength("موز") },
  { arabic: "فراولة", length: getArabicLength("فراولة") },
  { arabic: "عنب", length: getArabicLength("عنب") },
  { arabic: "خوخ", length: getArabicLength("خوخ") },
  { arabic: "بطيخ", length: getArabicLength("بطيخ") },
  { arabic: "دلاع", length: getArabicLength("دلاع") },
  { arabic: "كرموس", length: getArabicLength("كرموس") },
  { arabic: "رمان", length: getArabicLength("رمان") },
  
  // Vegetables
  { arabic: "بطاطا", length: getArabicLength("بطاطا") },
  { arabic: "جزر", length: getArabicLength("جزر") },
  { arabic: "بصل", length: getArabicLength("بصل") },
  { arabic: "ثوم", length: getArabicLength("ثوم") },
  { arabic: "فلفل", length: getArabicLength("فلفل") },
  { arabic: "خس", length: getArabicLength("خس") },
  { arabic: "قرنبيط", length: getArabicLength("قرنبيط") },
  { arabic: "باذنجان", length: getArabicLength("باذنجان") },
  { arabic: "كوسة", length: getArabicLength("كوسة") },
  { arabic: "لفت", length: getArabicLength("لفت") },
  
  // Animals
  { arabic: "كلب", length: getArabicLength("كلب") },
  { arabic: "قط", length: getArabicLength("قط") },
  { arabic: "حصان", length: getArabicLength("حصان") },
  { arabic: "حمار", length: getArabicLength("حمار") },
  { arabic: "بقرة", length: getArabicLength("بقرة") },
  { arabic: "خروف", length: getArabicLength("خروف") },
  { arabic: "دجاجة", length: getArabicLength("دجاجة") },
  { arabic: "عصفور", length: getArabicLength("عصفور") },
  { arabic: "سمكة", length: getArabicLength("سمكة") },
  { arabic: "أرنب", length: getArabicLength("أرنب") },
  
  // Professions
  { arabic: "طبيب", length: getArabicLength("طبيب") },
  { arabic: "معلم", length: getArabicLength("معلم") },
  { arabic: "مهندس", length: getArabicLength("مهندس") },
  { arabic: "تاجر", length: getArabicLength("تاجر") },
  { arabic: "فلاح", length: getArabicLength("فلاح") },
  { arabic: "نجار", length: getArabicLength("نجار") },
  { arabic: "حداد", length: getArabicLength("حداد") },
  { arabic: "خباز", length: getArabicLength("خباز") },
  { arabic: "سائق", length: getArabicLength("سائق") },
  { arabic: "شرطي", length: getArabicLength("شرطي") },
  
  // Places
  { arabic: "سوق", length: getArabicLength("سوق") },
  { arabic: "مدرسة", length: getArabicLength("مدرسة") },
  { arabic: "مستشفى", length: getArabicLength("مستشفى") },
  { arabic: "مطعم", length: getArabicLength("مطعم") },
  { arabic: "مقهى", length: getArabicLength("مقهى") },
  { arabic: "حديقة", length: getArabicLength("حديقة") },
  { arabic: "شاطئ", length: getArabicLength("شاطئ") },
  { arabic: "جامع", length: getArabicLength("جامع") },
  { arabic: "سينما", length: getArabicLength("سينما") },
  { arabic: "ملعب", length: getArabicLength("ملعب") },
  
  // Tunisian expressions
  { arabic: "شنية", length: getArabicLength("شنية") },
  { arabic: "شوف", length: getArabicLength("شوف") },
  { arabic: "فما", length: getArabicLength("فما") },
  { arabic: "يزي", length: getArabicLength("يزي") },
  { arabic: "بري", length: getArabicLength("بري") },
  { arabic: "يالله", length: getArabicLength("يالله") },
  { arabic: "اعمل", length: getArabicLength("اعمل") },
  { arabic: "اسمع", length: getArabicLength("اسمع") },
  { arabic: "معنى", length: getArabicLength("معنى") },
  { arabic: "فكرة", length: getArabicLength("فكرة") },
  
  // More expressions
  { arabic: "باللهي", length: getArabicLength("باللهي") },
  { arabic: "بالك", length: getArabicLength("بالك") },
  { arabic: "مرة", length: getArabicLength("مرة") },
  { arabic: "توتة", length: getArabicLength("توتة") },
  { arabic: "سكة", length: getArabicLength("سكة") },
  { arabic: "وقتي", length: getArabicLength("وقتي") },
  { arabic: "وينها", length: getArabicLength("وينها") },
  { arabic: "توة", length: getArabicLength("توة") },
  { arabic: "ماشي", length: getArabicLength("ماشي") },
  { arabic: "احكي", length: getArabicLength("احكي") },
  
  // Greetings and social expressions
  { arabic: "لاباس", length: getArabicLength("لاباس") },
  { arabic: "سهرة", length: getArabicLength("سهرة") },
  { arabic: "قهوة", length: getArabicLength("قهوة") },
  { arabic: "مزيان", length: getArabicLength("مزيان") },
  { arabic: "صحيح", length: getArabicLength("صحيح") },
  { arabic: "مشيت", length: getArabicLength("مشيت") },
  { arabic: "سلامات", length: getArabicLength("سلامات") },
  { arabic: "معلم", length: getArabicLength("معلم") },
  { arabic: "بالسلامة", length: getArabicLength("بالسلامة") },
  { arabic: "نستناك", length: getArabicLength("نستناك") },
  
  // Question words
  { arabic: "باش", length: getArabicLength("باش") },
  { arabic: "كان", length: getArabicLength("كان") },
  { arabic: "شنو", length: getArabicLength("شنو") },
  { arabic: "فوق", length: getArabicLength("فوق") },
  { arabic: "تحت", length: getArabicLength("تحت") },
  { arabic: "خير", length: getArabicLength("خير") },
  { arabic: "شر", length: getArabicLength("شر") },
  { arabic: "برا", length: getArabicLength("برا") },
  { arabic: "جوا", length: getArabicLength("جوا") },
  { arabic: "هاك", length: getArabicLength("هاك") },
  
  // More common words
  { arabic: "جيت", length: getArabicLength("جيت") },
  { arabic: "قوم", length: getArabicLength("قوم") },
  { arabic: "نوم", length: getArabicLength("نوم") },
  { arabic: "يوم", length: getArabicLength("يوم") },
  { arabic: "حار", length: getArabicLength("حار") },
  { arabic: "برد", length: getArabicLength("برد") },
  { arabic: "شكون", length: getArabicLength("شكون") },
  { arabic: "علاش", length: getArabicLength("علاش") },
  { arabic: "وقتاش", length: getArabicLength("وقتاش") },
  { arabic: "كيفاش", length: getArabicLength("كيفاش") },
  
  // Places and locations
  { arabic: "بلاصة", length: getArabicLength("بلاصة") },
  { arabic: "حاجة", length: getArabicLength("حاجة") },
  { arabic: "زربة", length: getArabicLength("زربة") },
  { arabic: "بحري", length: getArabicLength("بحري") },
  { arabic: "جبال", length: getArabicLength("جبال") },
  { arabic: "قديم", length: getArabicLength("قديم") },
  { arabic: "جديد", length: getArabicLength("جديد") },
  { arabic: "طويل", length: getArabicLength("طويل") },
  { arabic: "قصير", length: getArabicLength("قصير") },
  { arabic: "سوق", length: getArabicLength("سوق") },
  
  // Commerce terms
  { arabic: "شراء", length: getArabicLength("شراء") },
  { arabic: "بياع", length: getArabicLength("بياع") },
  { arabic: "فلوس", length: getArabicLength("فلوس") },
  { arabic: "سلامة", length: getArabicLength("سلامة") },
  { arabic: "مرحبا", length: getArabicLength("مرحبا") },
  { arabic: "بالحق", length: getArabicLength("بالحق") },
  { arabic: "تشوف", length: getArabicLength("تشوف") },
  { arabic: "نشوف", length: getArabicLength("نشوف") },
  { arabic: "تمشي", length: getArabicLength("تمشي") },
  { arabic: "نمشي", length: getArabicLength("نمشي") },
  
  // Verbs in first person
  { arabic: "نحكي", length: getArabicLength("نحكي") },
  { arabic: "تحكي", length: getArabicLength("تحكي") },
  { arabic: "نعرف", length: getArabicLength("نعرف") },
  { arabic: "تعرف", length: getArabicLength("تعرف") },
  { arabic: "نفهم", length: getArabicLength("نفهم") },
  { arabic: "تفهم", length: getArabicLength("تفهم") },
  { arabic: "نسمع", length: getArabicLength("نسمع") },
  { arabic: "تسمع", length: getArabicLength("تسمع") },
  { arabic: "ثقيل", length: getArabicLength("ثقيل") },
  { arabic: "خفيف", length: getArabicLength("خفيف") },
  
  // Health and condition
  { arabic: "مريض", length: getArabicLength("مريض") },
  { arabic: "ماكلة", length: getArabicLength("ماكلة") },
  { arabic: "شرباة", length: getArabicLength("شرباة") },
  { arabic: "سماء", length: getArabicLength("سماء") },
  { arabic: "صباح", length: getArabicLength("صباح") },
  { arabic: "مساء", length: getArabicLength("مساء") },
  { arabic: "دنيا", length: getArabicLength("دنيا") },
  { arabic: "عائلة", length: getArabicLength("عائلة") },
  { arabic: "مدرسة", length: getArabicLength("مدرسة") },
  { arabic: "جامعة", length: getArabicLength("جامعة") },
  
  // More places
  { arabic: "مكتبة", length: getArabicLength("مكتبة") },
  { arabic: "ليل", length: getArabicLength("ليل") },
  { arabic: "عام", length: getArabicLength("عام") },
  { arabic: "شهر", length: getArabicLength("شهر") },
  { arabic: "حوت", length: getArabicLength("حوت") },
  { arabic: "روح", length: getArabicLength("روح") },
  { arabic: "جيب", length: getArabicLength("جيب") },
  { arabic: "حب", length: getArabicLength("حب") },
  { arabic: "مطار", length: getArabicLength("مطار") },
  { arabic: "محطة", length: getArabicLength("محطة") },
  
  // Roads and transportation
  { arabic: "طريق", length: getArabicLength("طريق") },
  { arabic: "شارع", length: getArabicLength("شارع") },
  { arabic: "نهار", length: getArabicLength("نهار") },
  { arabic: "دراجة", length: getArabicLength("دراجة") },
  { arabic: "سيارة", length: getArabicLength("سيارة") },
  { arabic: "حانوت", length: getArabicLength("حانوت") },
  { arabic: "مغازة", length: getArabicLength("مغازة") },
  { arabic: "حلوة", length: getArabicLength("حلوة") },
  { arabic: "مالح", length: getArabicLength("مالح") },
  { arabic: "حامض", length: getArabicLength("حامض") },
  
  // Countries
  { arabic: "تونس", length: getArabicLength("تونس") },
  { arabic: "جزائر", length: getArabicLength("جزائر") },
  { arabic: "مغرب", length: getArabicLength("مغرب") },
  { arabic: "ليبيا", length: getArabicLength("ليبيا") },
  { arabic: "فرنسا", length: getArabicLength("فرنسا") },
  { arabic: "ايطاليا", length: getArabicLength("ايطاليا") },
  { arabic: "معناها", length: getArabicLength("معناها") },
  { arabic: "بالله", length: getArabicLength("بالله") },
  { arabic: "خاطر", length: getArabicLength("خاطر") },
  { arabic: "طبيعة", length: getArabicLength("طبيعة") },
  
  // Emotions and feelings
  { arabic: "سعادة", length: getArabicLength("سعادة") },
  { arabic: "رجولية", length: getArabicLength("رجولية") },
  { arabic: "بطولة", length: getArabicLength("بطولة") },
  { arabic: "مباراة", length: getArabicLength("مباراة") },
  { arabic: "حفلة", length: getArabicLength("حفلة") },
  { arabic: "موسيقى", length: getArabicLength("موسيقى") },
  { arabic: "زيتون", length: getArabicLength("زيتون") },
  { arabic: "حر", length: getArabicLength("حر") },
  { arabic: "ثلج", length: getArabicLength("ثلج") },
  { arabic: "مطر", length: getArabicLength("مطر") },
  
  // Nature elements
  { arabic: "ريح", length: getArabicLength("ريح") },
  { arabic: "بحر", length: getArabicLength("بحر") },
  { arabic: "قمر", length: getArabicLength("قمر") },
  { arabic: "شمس", length: getArabicLength("شمس") },
  { arabic: "نجوم", length: getArabicLength("نجوم") },
  { arabic: "سحاب", length: getArabicLength("سحاب") },
  { arabic: "غيم", length: getArabicLength("غيم") },
  { arabic: "هواء", length: getArabicLength("هواء") },
  { arabic: "غابة", length: getArabicLength("غابة") },
  { arabic: "جبل", length: getArabicLength("جبل") },
  
  // Geography
  { arabic: "واد", length: getArabicLength("واد") },
  { arabic: "بلاد", length: getArabicLength("بلاد") },
  { arabic: "مدينة", length: getArabicLength("مدينة") },
  { arabic: "قرية", length: getArabicLength("قرية") },
  { arabic: "غرفة", length: getArabicLength("غرفة") },
  { arabic: "سقف", length: getArabicLength("سقف") },
  { arabic: "ارض", length: getArabicLength("ارض") },
  { arabic: "حيط", length: getArabicLength("حيط") },
  { arabic: "فراش", length: getArabicLength("فراش") },
  { arabic: "مخدة", length: getArabicLength("مخدة") },
  
  // Home items
  { arabic: "لحاف", length: getArabicLength("لحاف") },
  { arabic: "صالة", length: getArabicLength("صالة") },
  { arabic: "حمام", length: getArabicLength("حمام") },
  { arabic: "شاي", length: getArabicLength("شاي") },
  { arabic: "سكر", length: getArabicLength("سكر") },
  { arabic: "عصير", length: getArabicLength("عصير") },
  { arabic: "تفاح", length: getArabicLength("تفاح") },
  { arabic: "عنب", length: getArabicLength("عنب") },
  { arabic: "خوخ", length: getArabicLength("خوخ") },
  { arabic: "كرز", length: getArabicLength("كرز") },
  
  // Food items
  { arabic: "حمص", length: getArabicLength("حمص") },
  { arabic: "فول", length: getArabicLength("فول") },
  { arabic: "لوز", length: getArabicLength("لوز") },
  { arabic: "قرع", length: getArabicLength("قرع") },
  { arabic: "بصل", length: getArabicLength("بصل") },
  { arabic: "ثوم", length: getArabicLength("ثوم") },
  { arabic: "جزر", length: getArabicLength("جزر") },
  { arabic: "خضرة", length: getArabicLength("خضرة") },
  { arabic: "غلة", length: getArabicLength("غلة") },
  { arabic: "سبت", length: getArabicLength("سبت") },
  
  // Days of the week
  { arabic: "احد", length: getArabicLength("احد") },
  { arabic: "اثنين", length: getArabicLength("اثنين") },
  { arabic: "ثلاثاء", length: getArabicLength("ثلاثاء") },
  { arabic: "اربعاء", length: getArabicLength("اربعاء") },
  { arabic: "خميس", length: getArabicLength("خميس") },
  { arabic: "جمعة", length: getArabicLength("جمعة") },
  { arabic: "شهرين", length: getArabicLength("شهرين") },
  { arabic: "عامين", length: getArabicLength("عامين") },
  { arabic: "يومين", length: getArabicLength("يومين") },
  { arabic: "ساعة", length: getArabicLength("ساعة") },
  
  // Time units
  { arabic: "دقيقة", length: getArabicLength("دقيقة") },
  { arabic: "ثانية", length: getArabicLength("ثانية") },
  { arabic: "عشرة", length: getArabicLength("عشرة") },
  { arabic: "عشرين", length: getArabicLength("عشرين") },
  { arabic: "ثلاثين", length: getArabicLength("ثلاثين") },
  { arabic: "ستين", length: getArabicLength("ستين") },
  { arabic: "سبعين", length: getArabicLength("سبعين") },
  { arabic: "هذاكة", length: getArabicLength("هذاكة") },
  { arabic: "هكا", length: getArabicLength("هكا") },
  { arabic: "بيها", length: getArabicLength("بيها") },
  
  // Prepositions
  { arabic: "فيها", length: getArabicLength("فيها") },
  { arabic: "عليها", length: getArabicLength("عليها") },
  { arabic: "تحتها", length: getArabicLength("تحتها") },
  { arabic: "قدامها", length: getArabicLength("قدامها") },
  { arabic: "وراها", length: getArabicLength("وراها") },
  { arabic: "يمين", length: getArabicLength("يمين") },
  { arabic: "يسار", length: getArabicLength("يسار") },
  { arabic: "قريب", length: getArabicLength("قريب") },
  { arabic: "بعيد", length: getArabicLength("بعيد") },
  { arabic: "وسط", length: getArabicLength("وسط") },
  
  // More common expressions
  { arabic: "برشا", length: getArabicLength("برشا") },
  { arabic: "شوية", length: getArabicLength("شوية") },
  { arabic: "بالزاف", length: getArabicLength("بالزاف") },
  { arabic: "قداش", length: getArabicLength("قداش") },
  { arabic: "عاد", length: getArabicLength("عاد") },
  { arabic: "توا", length: getArabicLength("توا") },
  { arabic: "بعد", length: getArabicLength("بعد") },
  { arabic: "قبل", length: getArabicLength("قبل") },
  { arabic: "زعمة", length: getArabicLength("زعمة") },
  { arabic: "يعني", length: getArabicLength("يعني") },
  
  // More verbs
  { arabic: "يجي", length: getArabicLength("يجي") },
  { arabic: "يمشي", length: getArabicLength("يمشي") },
  { arabic: "يقعد", length: getArabicLength("يقعد") },
  { arabic: "يشرب", length: getArabicLength("يشرب") },
  { arabic: "ياكل", length: getArabicLength("ياكل") },
  { arabic: "يرقد", length: getArabicLength("يرقد") },
  { arabic: "يقول", length: getArabicLength("يقول") },
  { arabic: "يسمع", length: getArabicLength("يسمع") },
  { arabic: "يشوف", length: getArabicLength("يشوف") },
  { arabic: "يكتب", length: getArabicLength("يكتب") }
];

// Get a random word based on specified length
export const getRandomWord = (wordLength: number): TunisianWord => {
  const validWords = tunisianWords.filter((word) => word.length === wordLength);
  if (validWords.length === 0) {
    return tunisianWords[Math.floor(Math.random() * tunisianWords.length)];
  }
  return validWords[Math.floor(Math.random() * validWords.length)];
};

// Check if a word exists in our dictionary
export const isValidWord = (word: string, wordLength: number): boolean => {
  return tunisianWords.some(
    (w) => w.arabic === word && w.length === wordLength
  );
};
