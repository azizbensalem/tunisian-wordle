
// Words in Tunisian dialect with their Arabic script and English transliteration
interface TunisianWord {
  arabic: string;
  latin: string;
  length: number;
}

export const tunisianWords: TunisianWord[] = [
  // Original words
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

  // Additional Tunisian words
  // 3-letter words
  { arabic: "باش", latin: "BASH", length: 3 }, // will/going to
  { arabic: "دار", latin: "DAR", length: 3 }, // house/home
  { arabic: "كان", latin: "KAN", length: 3 }, // if/was
  { arabic: "شنو", latin: "CHNOU", length: 3 }, // what
  { arabic: "خبز", latin: "KHOBZ", length: 3 }, // bread
  { arabic: "ماء", latin: "MAA", length: 3 }, // water
  { arabic: "دوا", latin: "DAWA", length: 3 }, // medicine
  { arabic: "فوق", latin: "FOUQ", length: 3 }, // above
  { arabic: "تحت", latin: "TAHT", length: 3 }, // under
  { arabic: "خير", latin: "KHEIR", length: 3 }, // good
  { arabic: "شر", latin: "SHAR", length: 3 }, // bad/evil
  { arabic: "برا", latin: "BARRA", length: 3 }, // outside
  { arabic: "جوا", latin: "JAWWA", length: 3 }, // inside
  { arabic: "هاك", latin: "HAK", length: 3 }, // take this
  { arabic: "جيت", latin: "JIT", length: 3 }, // I came
  { arabic: "قوم", latin: "QUM", length: 3 }, // get up
  { arabic: "نوم", latin: "NUM", length: 3 }, // sleep
  { arabic: "يوم", latin: "YUM", length: 3 }, // day
  { arabic: "حار", latin: "HAR", length: 3 }, // hot
  { arabic: "برد", latin: "BARD", length: 3 }, // cold

  // 4-letter words
  { arabic: "شكون", latin: "CHKOUN", length: 4 }, // who
  { arabic: "علاش", latin: "ALECH", length: 4 }, // why
  { arabic: "وقتاش", latin: "WAQTASH", length: 5 }, // when
  { arabic: "كيفاش", latin: "KIFASH", length: 5 }, // how
  { arabic: "بلاصة", latin: "BLASA", length: 5 }, // place
  { arabic: "حاجة", latin: "HAJA", length: 4 }, // thing
  { arabic: "زربة", latin: "ZARBA", length: 4 }, // hurry
  { arabic: "بحري", latin: "BAHRI", length: 4 }, // sea
  { arabic: "جبال", latin: "JBAL", length: 4 }, // mountains
  { arabic: "صغير", latin: "SGHIR", length: 4 }, // small
  { arabic: "كبير", latin: "KBIR", length: 4 }, // big
  { arabic: "قديم", latin: "QDIM", length: 4 }, // old
  { arabic: "جديد", latin: "JDID", length: 4 }, // new
  { arabic: "بكري", latin: "BEKRI", length: 4 }, // early
  { arabic: "طويل", latin: "TWIL", length: 4 }, // long/tall
  { arabic: "قصير", latin: "QSIR", length: 4 }, // short
  { arabic: "سوق", latin: "SOUQ", length: 3 }, // market
  { arabic: "شراء", latin: "CHIRA", length: 4 }, // buying
  { arabic: "بياع", latin: "BYAA", length: 4 }, // selling
  { arabic: "فلوس", latin: "FLOUS", length: 4 }, // money

  // 5-letter words
  { arabic: "سلامة", latin: "SLAMA", length: 5 }, // safety
  { arabic: "مرحبا", latin: "MARHBA", length: 5 }, // hello
  { arabic: "بالحق", latin: "BILHAQ", length: 5 }, // really
  { arabic: "تشوف", latin: "TCHOUF", length: 4 }, // you see
  { arabic: "نشوف", latin: "NCHOUF", length: 4 }, // I see
  { arabic: "تمشي", latin: "TEMCHI", length: 4 }, // you go
  { arabic: "نمشي", latin: "NEMCHI", length: 4 }, // I go
  { arabic: "نحكي", latin: "NEHKI", length: 4 }, // I speak
  { arabic: "تحكي", latin: "TEHKI", length: 4 }, // you speak
  { arabic: "نعرف", latin: "NAAREF", length: 4 }, // I know
  { arabic: "تعرف", latin: "TAAREF", length: 4 }, // you know
  { arabic: "نفهم", latin: "NEFHEM", length: 4 }, // I understand
  { arabic: "تفهم", latin: "TEFHEM", length: 4 }, // you understand
  { arabic: "نسمع", latin: "NESMAA", length: 4 }, // I hear
  { arabic: "تسمع", latin: "TESMAA", length: 4 }, // you hear
  { arabic: "ثقيل", latin: "THQIL", length: 4 }, // heavy
  { arabic: "خفيف", latin: "KHFIF", length: 4 }, // light
  { arabic: "مريض", latin: "MRIDH", length: 4 }, // sick
  { arabic: "بحري", latin: "BAHRI", length: 4 }, // sea
  { arabic: "زربة", latin: "ZARBA", length: 4 }, // hurry

  // 6-letter words
  { arabic: "ماكلة", latin: "MAKLA", length: 5 }, // food
  { arabic: "شرباة", latin: "CHARBA", length: 5 }, // drink
  { arabic: "سماء", latin: "SMAA", length: 4 }, // sky
  { arabic: "صباح", latin: "SBAH", length: 4 }, // morning
  { arabic: "مساء", latin: "MSAA", length: 4 }, // evening
  { arabic: "دنيا", latin: "DONIA", length: 4 }, // world
  { arabic: "عائلة", latin: "AILA", length: 5 }, // family
  { arabic: "مدرسة", latin: "MADRSA", length: 5 }, // school
  { arabic: "جامعة", latin: "JAMAA", length: 5 }, // university
  { arabic: "مكتبة", latin: "MAKTBA", length: 5 }, // library/office
  
  // More 3-letter words
  { arabic: "ليل", latin: "LIL", length: 3 }, // night
  { arabic: "يوم", latin: "YUM", length: 3 }, // day
  { arabic: "عام", latin: "AAM", length: 3 }, // year
  { arabic: "شهر", latin: "SHHAR", length: 3 }, // month
  { arabic: "حوت", latin: "HOUT", length: 3 }, // fish
  { arabic: "لحم", latin: "LHAM", length: 3 }, // meat
  { arabic: "بيض", latin: "BIDH", length: 3 }, // eggs
  { arabic: "روح", latin: "RUH", length: 3 }, // soul/go
  { arabic: "جيب", latin: "JIB", length: 3 }, // pocket/bring
  { arabic: "حب", latin: "HOB", length: 2 }, // love
  
  // More 4-letter words
  { arabic: "مطار", latin: "MTAR", length: 4 }, // airport
  { arabic: "محطة", latin: "MAHTA", length: 4 }, // station
  { arabic: "طريق", latin: "TRIQ", length: 4 }, // road
  { arabic: "شارع", latin: "CHARAA", length: 4 }, // street
  { arabic: "نهار", latin: "NHAR", length: 4 }, // day
  { arabic: "دراجة", latin: "DRAJA", length: 5 }, // bicycle
  { arabic: "سيارة", latin: "SAYARA", length: 5 }, // car
  { arabic: "كرهبة", latin: "KARHBA", length: 5 }, // car (colloquial)
  { arabic: "حانوت", latin: "HANUT", length: 5 }, // shop
  { arabic: "مغازة", latin: "MGHAZA", length: 5 }, // store
  
  // More 5-letter words
  { arabic: "حلوة", latin: "HELWA", length: 4 }, // sweet
  { arabic: "مالح", latin: "MALEH", length: 4 }, // salty
  { arabic: "حامض", latin: "HAMEDH", length: 4 }, // sour
  { arabic: "مزيان", latin: "MEZYEN", length: 5 }, // good/nice
  { arabic: "تونس", latin: "TUNIS", length: 4 }, // Tunisia
  { arabic: "جزائر", latin: "JZAYER", length: 5 }, // Algeria
  { arabic: "مغرب", latin: "MGHREB", length: 4 }, // Morocco
  { arabic: "ليبيا", latin: "LIBYA", length: 5 }, // Libya
  { arabic: "فرنسا", latin: "FRANSA", length: 5 }, // France
  { arabic: "ايطاليا", latin: "ITALIA", length: 7 }, // Italy
  
  // More 6-letter words
  { arabic: "معناها", latin: "MAANEHA", length: 6 }, // meaning
  { arabic: "بالله", latin: "BELLAH", length: 5 }, // by God
  { arabic: "خاطر", latin: "KHATER", length: 5 }, // because
  { arabic: "طبيعة", latin: "TABIAA", length: 5 }, // nature
  { arabic: "سعادة", latin: "SAADA", length: 5 }, // happiness
  { arabic: "رجولية", latin: "RJULIYA", length: 7 }, // manhood
  { arabic: "بطولة", latin: "BTULA", length: 5 }, // championship
  { arabic: "مباراة", latin: "MBARA", length: 5 }, // match/game
  { arabic: "حفلة", latin: "HAFLA", length: 4 }, // party
  { arabic: "موسيقى", latin: "MUSIQA", length: 6 }, // music

  // Additional words with various lengths
  { arabic: "زيت", latin: "ZIT", length: 3 }, // oil
  { arabic: "زيتون", latin: "ZITOUN", length: 5 }, // olives
  { arabic: "حر", latin: "HOR", length: 2 }, // hot/free
  { arabic: "برد", latin: "BARD", length: 3 }, // cold
  { arabic: "ثلج", latin: "THALJ", length: 3 }, // snow
  { arabic: "مطر", latin: "MTAR", length: 3 }, // rain
  { arabic: "ريح", latin: "RIH", length: 3 }, // wind
  { arabic: "بحر", latin: "BHAR", length: 3 }, // sea
  { arabic: "قمر", latin: "QMAR", length: 3 }, // moon
  { arabic: "شمس", latin: "CHEMS", length: 3 }, // sun
  { arabic: "نجوم", latin: "NJOUM", length: 4 }, // stars
  { arabic: "سماء", latin: "SMAA", length: 4 }, // sky
  { arabic: "سحاب", latin: "SHAB", length: 4 }, // clouds
  { arabic: "غيم", latin: "GHIM", length: 3 }, // clouds
  { arabic: "هواء", latin: "HAWA", length: 4 }, // air
  { arabic: "غابة", latin: "GHABA", length: 4 }, // forest
  { arabic: "جبل", latin: "JBAL", length: 3 }, // mountain
  { arabic: "واد", latin: "WED", length: 3 }, // valley/river
  { arabic: "بلاد", latin: "BLED", length: 4 }, // country
  { arabic: "مدينة", latin: "MDINA", length: 5 }, // city
  { arabic: "قرية", latin: "QARYA", length: 5 }, // village
  { arabic: "بيت", latin: "BIT", length: 3 }, // house
  { arabic: "غرفة", latin: "GHURFA", length: 4 }, // room
  { arabic: "باب", latin: "BEB", length: 3 }, // door
  { arabic: "شباك", latin: "CHBEK", length: 4 }, // window
  { arabic: "سقف", latin: "SQIF", length: 3 }, // ceiling/roof
  { arabic: "ارض", latin: "ARDH", length: 3 }, // floor/ground
  { arabic: "حيط", latin: "HIT", length: 3 }, // wall
  { arabic: "كرسي", latin: "KURSI", length: 4 }, // chair
  { arabic: "طاولة", latin: "TAWLA", length: 5 }, // table
  { arabic: "فراش", latin: "FRACH", length: 4 }, // bed/mattress
  { arabic: "مخدة", latin: "MAKHDA", length: 4 }, // pillow
  { arabic: "لحاف", latin: "LHAF", length: 4 }, // blanket/duvet
  { arabic: "صالة", latin: "SALA", length: 4 }, // living room
  { arabic: "مطبخ", latin: "MATBAKH", length: 4 }, // kitchen
  { arabic: "حمام", latin: "HAMMEM", length: 4 }, // bathroom
  { arabic: "قهوة", latin: "QAHWA", length: 4 }, // coffee
  { arabic: "شاي", latin: "CHAY", length: 3 }, // tea
  { arabic: "سكر", latin: "SUKKAR", length: 3 }, // sugar
  { arabic: "حليب", latin: "HLIB", length: 4 }, // milk
  { arabic: "عصير", latin: "ASIR", length: 4 }, // juice
  { arabic: "موز", latin: "MOZ", length: 3 }, // banana
  { arabic: "تفاح", latin: "TUFFAH", length: 4 }, // apple
  { arabic: "عنب", latin: "ANAB", length: 3 }, // grapes
  { arabic: "خوخ", latin: "KHOKH", length: 3 }, // peach
  { arabic: "كرز", latin: "KRAZ", length: 3 }, // cherry
  { arabic: "حمص", latin: "HOMMOS", length: 3 }, // chickpeas
  { arabic: "فول", latin: "FUL", length: 3 }, // beans
  { arabic: "لوز", latin: "LOZ", length: 3 }, // almonds
  { arabic: "قرع", latin: "GRAA", length: 3 }, // pumpkin
  { arabic: "بطاطا", latin: "BATATA", length: 5 }, // potato
  { arabic: "طماطم", latin: "TMATEM", length: 5 }, // tomato
  { arabic: "بصل", latin: "BSAL", length: 3 }, // onion
  { arabic: "ثوم", latin: "THOM", length: 3 }, // garlic
  { arabic: "جزر", latin: "JAZAR", length: 3 }, // carrots
  { arabic: "خضرة", latin: "KHODHRA", length: 5 }, // vegetables
  { arabic: "غلة", latin: "GHALLA", length: 3 }, // fruits
  { arabic: "سبت", latin: "SEBT", length: 3 }, // Saturday
  { arabic: "احد", latin: "AHAD", length: 3 }, // Sunday
  { arabic: "اثنين", latin: "ETHNEN", length: 5 }, // Monday
  { arabic: "ثلاثاء", latin: "THLATHA", length: 5 }, // Tuesday
  { arabic: "اربعاء", latin: "ARBAA", length: 5 }, // Wednesday
  { arabic: "خميس", latin: "KHMIS", length: 4 }, // Thursday
  { arabic: "جمعة", latin: "JEMAA", length: 4 }, // Friday
  { arabic: "شهرين", latin: "CHAHRIN", length: 5 }, // two months
  { arabic: "عامين", latin: "AAMIN", length: 5 }, // two years
  { arabic: "يومين", latin: "YOUMIN", length: 5 }, // two days
  { arabic: "ساعة", latin: "SAA", length: 4 }, // hour/watch
  { arabic: "دقيقة", latin: "DQIQA", length: 5 }, // minute
  { arabic: "ثانية", latin: "THANYA", length: 5 }, // second
  { arabic: "عشرة", latin: "ACHRA", length: 4 }, // ten
  { arabic: "عشرين", latin: "AACHRIN", length: 5 }, // twenty
  { arabic: "ثلاثين", latin: "TLATHIN", length: 6 }, // thirty
  { arabic: "ستين", latin: "SITTIN", length: 5 }, // sixty
  { arabic: "سبعين", latin: "SABAIN", length: 5 }, // seventy
  { arabic: "هذاكة", latin: "HEDEKA", length: 5 }, // that one
  { arabic: "هكا", latin: "HAKKA", length: 3 }, // like this
  { arabic: "بيها", latin: "BIHA", length: 4 }, // with it
  { arabic: "فيها", latin: "FIHA", length: 4 }, // in it
  { arabic: "عليها", latin: "ALIHA", length: 5 }, // on it
  { arabic: "تحتها", latin: "TAHTHA", length: 5 }, // under it
  { arabic: "قدامها", latin: "QUDAMHA", length: 6 }, // in front of it
  { arabic: "وراها", latin: "WRAHA", length: 5 }, // behind it
];

// Get a random word based on specified length
export const getRandomWord = (wordLength: number): TunisianWord => {
  const validWords = tunisianWords.filter((word) => word.length === wordLength);
  if (validWords.length === 0) {
    // Fallback if no words match the requested length
    return tunisianWords[Math.floor(Math.random() * tunisianWords.length)];
  }
  const randomIndex = Math.floor(Math.random() * validWords.length);
  return validWords[randomIndex];
};

// Check if a word exists in our dictionary
export const isValidWord = (word: string, wordLength: number): boolean => {
  return tunisianWords.some(
    (w) => w.arabic === word && w.length === wordLength
  );
};
