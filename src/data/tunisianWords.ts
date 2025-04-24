
// List of 5-letter words in Tunisian dialect
export const tunisianWords = [
  "CHNIA", // what
  "CHOUF", // look
  "FAMMA", // there is
  "YEZZI", // enough
  "BARRI", // outside
  "YALLA", // come on
  "AAMEL", // do
  "ASEMA", // name
  "MAANA", // meaning
  "FIKRA", // idea
  "BELHI", // slow
  "BELEK", // watch out
  "MARRA", // once
  "TOUTA", // strawberry
  "SIKKA", // road
  "WAQTI", // time
  "WINHA", // where
  "TAWWA", // now
  "MESHI", // walking
  "AHKEE", // talk
  "LABAS", // fine
  "SAHRA", // party
  "SHNWA", // what
  "WAQET", // time
  "SAKAT", // quiet
  "KAHWA", // coffee
  "MEZZI", // small
  "KBEER", // big
  "BARRA", // outside
  "ZARDA", // feast
];

// Get a random word from the list
export const getRandomWord = (): string => {
  const randomIndex = Math.floor(Math.random() * tunisianWords.length);
  return tunisianWords[randomIndex];
};

// Check if a word exists in our dictionary
export const isValidWord = (word: string): boolean => {
  return tunisianWords.includes(word.toUpperCase());
};
