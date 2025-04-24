// Words in Tunisian dialect with their Arabic script and English transliteration
interface TunisianWord {
  arabic: string;
  latin: string;
  length: number;
}

export const tunisianWords: TunisianWord[] = [
  { arabic: "شنية", latin: "CHNIA", length: 4 }, // what
  { arabic: "شوف", latin: "CHOUF", length: 3 }, // look
  { arabic: "فما", latin: "FAMMA", length: 3 }, // there is
  { arabic: "يزي", latin: "YEZZI", length: 3 }, // enough
  { arabic: "بري", latin: "BARRI", length: 3 }, // outside
  { arabic: "يالله", latin: "YALLA", length: 5 }, // come on
  { arabic: "اعمل", latin: "AAMEL", length: 4 }, // do
  { arabic: "اسمع", latin: "ASEMA", length: 4 }, // name
  { arabic: "معنى", latin: "MAANA", length: 4 }, // meaning
  { arabic: "فكرة", latin: "FIKRA", length: 4 }, // idea
  { arabic: "باللهي", latin: "BELHI", length: 6 }, // please
  { arabic: "بالك", latin: "BELEK", length: 4 }, // watch out
  { arabic: "مرة", latin: "MARRA", length: 3 }, // once
  { arabic: "توتة", latin: "TOUTA", length: 4 }, // strawberry
  { arabic: "سكة", latin: "SIKKA", length: 3 }, // road
  { arabic: "وقتي", latin: "WAQTI", length: 4 }, // time
  { arabic: "وينها", latin: "WINHA", length: 5 }, // where
  { arabic: "توة", latin: "TAWWA", length: 3 }, // now
  { arabic: "ماشي", latin: "MESHI", length: 4 }, // walking
  { arabic: "احكي", latin: "AHKEE", length: 4 }, // talk
  { arabic: "لاباس", latin: "LABAS", length: 5 }, // fine
  { arabic: "سهرة", latin: "SAHRA", length: 4 }, // party
  { arabic: "قهوة", latin: "KAHWA", length: 4 }, // coffee
  { arabic: "مزيان", latin: "MEZYEN", length: 5 }, // good
  { arabic: "صحيح", latin: "SAHIH", length: 4 }, // correct
  { arabic: "مشيت", latin: "MCHIT", length: 4 }, // I went
  { arabic: "سلامات", latin: "SLEMET", length: 6 }, // goodbyes
  { arabic: "معلم", latin: "MAALEM", length: 4 }, // teach
  { arabic: "بالسلامة", latin: "BESLEMA", length: 8 }, // goodbye
  { arabic: "نستناك", latin: "NESTENK", length: 6 }, // I'll wait for you
];

// Get a random word based on specified length
export const getRandomWord = (wordLength: number): TunisianWord => {
  const validWords = tunisianWords.filter((word) => word.length === wordLength);
  const randomIndex = Math.floor(Math.random() * validWords.length);
  return validWords[randomIndex];
};

// Check if a word exists in our dictionary
export const isValidWord = (word: string, wordLength: number): boolean => {
  return tunisianWords.some(
    (w) => w.arabic === word.toUpperCase() && w.length === wordLength
  );
};
