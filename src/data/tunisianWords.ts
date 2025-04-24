
// Words in Tunisian dialect with their Arabic script and English transliteration
interface TunisianWord {
  arabic: string;
  latin: string;
  length: number;
}

export const tunisianWords: TunisianWord[] = [
  { arabic: "شنية", latin: "CHNIA", length: 5 }, // what
  { arabic: "شوف", latin: "CHOUF", length: 5 }, // look
  { arabic: "فما", latin: "FAMMA", length: 5 }, // there is
  { arabic: "يزي", latin: "YEZZI", length: 5 }, // enough
  { arabic: "بري", latin: "BARRI", length: 5 }, // outside
  { arabic: "يالله", latin: "YALLA", length: 5 }, // come on
  { arabic: "اعمل", latin: "AAMEL", length: 5 }, // do
  { arabic: "اسمع", latin: "ASEMA", length: 5 }, // name
  { arabic: "معنى", latin: "MAANA", length: 5 }, // meaning
  { arabic: "فكرة", latin: "FIKRA", length: 5 }, // idea
  { arabic: "بالهي", latin: "BELHI", length: 5 }, // slow
  { arabic: "بالك", latin: "BELEK", length: 5 }, // watch out
  { arabic: "مرة", latin: "MARRA", length: 5 }, // once
  { arabic: "توتة", latin: "TOUTA", length: 5 }, // strawberry
  { arabic: "سكة", latin: "SIKKA", length: 5 }, // road
  { arabic: "وقتي", latin: "WAQTI", length: 5 }, // time
  { arabic: "وينها", latin: "WINHA", length: 5 }, // where
  { arabic: "توة", latin: "TAWWA", length: 5 }, // now
  { arabic: "ماشي", latin: "MESHI", length: 5 }, // walking
  { arabic: "احكي", latin: "AHKEE", length: 5 }, // talk
  { arabic: "لاباس", latin: "LABAS", length: 5 }, // fine
  { arabic: "سهرة", latin: "SAHRA", length: 5 }, // party
  { arabic: "قهوة", latin: "KAHWA", length: 5 }, // coffee
  { arabic: "مزيان", latin: "MEZYEN", length: 6 }, // good
  { arabic: "صحيح", latin: "SAHIH", length: 5 }, // correct
  { arabic: "مشيت", latin: "MCHIT", length: 5 }, // I went
  { arabic: "سلامات", latin: "SLEMET", length: 6 }, // goodbyes
  { arabic: "معلمش", latin: "MALEMCH", length: 7 }, // never mind
  { arabic: "بالسلامة", latin: "BESLEMA", length: 7 }, // goodbye
  { arabic: "نستناك", latin: "NESTENK", length: 7 }, // I'll wait for you
];

// Get a random word based on specified length
export const getRandomWord = (wordLength: number): TunisianWord => {
  const validWords = tunisianWords.filter(word => word.length === wordLength);
  const randomIndex = Math.floor(Math.random() * validWords.length);
  return validWords[randomIndex];
};

// Check if a word exists in our dictionary
export const isValidWord = (word: string, wordLength: number): boolean => {
  return tunisianWords.some(w => w.latin === word.toUpperCase() && w.length === wordLength);
};

