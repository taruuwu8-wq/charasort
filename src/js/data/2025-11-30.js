// aespa song sorter data (updated to Oct 2026)
// Replace each img value with the file name of the cover image you upload.
// Delete any song or whole album you do not want. Keep the commas.

dataSetVersion = "2026-10-14";
dataSet[dataSetVersion] = {};
dataSet[dataSetVersion].options = [
  {
    name: "Filter by Album",
    key: "album",
    tooltip: "Check this to restrict to certain albums.",
    checked: false,
    sub: [
      { name: "Singles (non-album)", tooltip: "Black Mamba to Better Things", key: "singles" },
      { name: "Savage", tooltip: "2021", key: "savage" },
      { name: "Girls", tooltip: "2022", key: "girls" },
      { name: "MY WORLD", tooltip: "2023", key: "myworld" },
      { name: "Drama", tooltip: "2023", key: "drama" },
      { name: "Armageddon", tooltip: "2024", key: "armageddon" },
      { name: "Hot Mess (Japan single)", tooltip: "2024", key: "hotmess" },
      { name: "Whiplash", tooltip: "2024", key: "whiplash" },
      { name: "Dirty Work", tooltip: "2025", key: "dirtywork" },
      { name: "Rich Man", tooltip: "2025", key: "richman" },
      { name: "Lemonade", tooltip: "2026", key: "lemonade" },
      { name: "KISS N TELL", tooltip: "Japan mini album, 2026", key: "kissntell" },
      { name: "SYNK Solo / Unit", tooltip: "SYNK special digital singles", key: "synk" },
    ]
  }
];
dataSet[dataSetVersion].characterData = [
  // ---------- Singles (non-album) ----------
  { name: "Black Mamba", img: "singles.png", opts: { album: ["singles"] } },
  { name: "Forever (약속)", img: "singles.png", opts: { album: ["singles"] } },
  { name: "Next Level", img: "singles.png", opts: { album: ["singles"] } },
  { name: "Dreams Come True", img: "singles.png", opts: { album: ["singles"] } },
  { name: "Better Things", img: "singles.png", opts: { album: ["singles"] } },
  { name: "Regret of the Times (시대유감)", img: "singles.png", opts: { album: ["singles"] } },
  // ---------- Savage ----------
  { name: "Aenergy", img: "savage.png", opts: { album: ["savage"] } },
  { name: "Savage", img: "savage.png", opts: { album: ["savage"] } },
  { name: "I'll Make You Cry", img: "savage.png", opts: { album: ["savage"] } },
  { name: "Yeppi Yeppi", img: "savage.png", opts: { album: ["savage"] } },
  { name: "Iconic", img: "savage.png", opts: { album: ["savage"] } },
  { name: "Lucid Dream (자각몽)", img: "savage.png", opts: { album: ["savage"] } },
  // ---------- Girls ----------
  { name: "Girls", img: "girls.png", opts: { album: ["girls"] } },
  { name: "Illusion (도깨비불)", img: "girls.png", opts: { album: ["girls"] } },
  { name: "Lingo", img: "girls.png", opts: { album: ["girls"] } },
  { name: "Life's Too Short", img: "girls.png", opts: { album: ["girls"] } },
  { name: "ICU (쉬어가도 돼)", img: "girls.png", opts: { album: ["girls"] } },
  // ---------- MY WORLD ----------
  { name: "Welcome to MY World (feat. nævis)", img: "myworld.png", opts: { album: ["myworld"] } },
  { name: "Spicy", img: "myworld.png", opts: { album: ["myworld"] } },
  { name: "Salty & Sweet", img: "myworld.png", opts: { album: ["myworld"] } },
  { name: "Thirsty", img: "myworld.png", opts: { album: ["myworld"] } },
  { name: "I'm Unhappy", img: "myworld.png", opts: { album: ["myworld"] } },
  { name: "'Til We Meet Again", img: "myworld.png", opts: { album: ["myworld"] } },
  // ---------- Drama ----------
  { name: "Drama", img: "drama.png", opts: { album: ["drama"] } },
  { name: "Trick or Trick", img: "drama.png", opts: { album: ["drama"] } },
  { name: "Don't Blink", img: "drama.png", opts: { album: ["drama"] } },
  { name: "Hot Air Balloon", img: "drama.png", opts: { album: ["drama"] } },
  { name: "YOLO", img: "drama.png", opts: { album: ["drama"] } },
  { name: "You", img: "drama.png", opts: { album: ["drama"] } },
  // ---------- Armageddon ----------
  { name: "Supernova", img: "armageddon.png", opts: { album: ["armageddon"] } },
  { name: "Armageddon", img: "armageddon.png", opts: { album: ["armageddon"] } },
  { name: "Set the Tone", img: "armageddon.png", opts: { album: ["armageddon"] } },
  { name: "Licorice", img: "armageddon.png", opts: { album: ["armageddon"] } },
  { name: "Mine", img: "armageddon.png", opts: { album: ["armageddon"] } },
  { name: "Bahama", img: "armageddon.png", opts: { album: ["armageddon"] } },
  { name: "Long Chat (#♥︎)", img: "armageddon.png", opts: { album: ["armageddon"] } },
  { name: "Prologue", img: "armageddon.png", opts: { album: ["armageddon"] } },
  { name: "Live My Life", img: "armageddon.png", opts: { album: ["armageddon"] } },
  { name: "Melody (목소리)", img: "armageddon.png", opts: { album: ["armageddon"] } },
  // ---------- Hot Mess (Japan single) ----------
  { name: "Hot Mess", img: "hotmess.png", opts: { album: ["hotmess"] } },
  { name: "Sun and Moon", img: "hotmess.png", opts: { album: ["hotmess"] } },
  // ---------- Whiplash ----------
  { name: "Whiplash", img: "whiplash.png", opts: { album: ["whiplash"] } },
  { name: "Kill It", img: "whiplash.png", opts: { album: ["whiplash"] } },
  { name: "Flights, Not Feelings", img: "whiplash.png", opts: { album: ["whiplash"] } },
  { name: "Pink Hoodie", img: "whiplash.png", opts: { album: ["whiplash"] } },
  { name: "Flowers", img: "whiplash.png", opts: { album: ["whiplash"] } },
  { name: "Just Another Girl", img: "whiplash.png", opts: { album: ["whiplash"] } },
  // ---------- Dirty Work ----------
  { name: "Dirty Work", img: "dirtywork.png", opts: { album: ["dirtywork"] } },
  { name: "Dark Arts", img: "dirtywork.png", opts: { album: ["dirtywork"] } },
  // ---------- Rich Man ----------
  { name: "Rich Man", img: "richman.png", opts: { album: ["richman"] } },
  { name: "Drift", img: "richman.png", opts: { album: ["richman"] } },
  { name: "Count on Me", img: "richman.png", opts: { album: ["richman"] } },
  { name: "Angel #48", img: "richman.png", opts: { album: ["richman"] } },
  { name: "To the Girls", img: "richman.png", opts: { album: ["richman"] } },
  { name: "Bubble", img: "richman.png", opts: { album: ["richman"] } },
  // ---------- Lemonade ----------
  { name: "WDA (Whole Different Animal) (feat. G-DRAGON)", img: "lemonade.png", opts: { album: ["lemonade"] } },
  { name: "Lemonade", img: "lemonade.png", opts: { album: ["lemonade"] } },
  { name: "Shakin'", img: "lemonade.png", opts: { album: ["lemonade"] } },
  { name: "Can't Help Myself", img: "lemonade.png", opts: { album: ["lemonade"] } },
  { name: "Camouflage", img: "lemonade.png", opts: { album: ["lemonade"] } },
  { name: "Bite", img: "lemonade.png", opts: { album: ["lemonade"] } },
  { name: "Switchblade (feat. Ty Dolla $ign)", img: "lemonade.png", opts: { album: ["lemonade"] } },
  { name: "Roll", img: "lemonade.png", opts: { album: ["lemonade"] } },
  { name: "My Plan", img: "lemonade.png", opts: { album: ["lemonade"] } },
  { name: "'Til We Die", img: "lemonade.png", opts: { album: ["lemonade"] } },
  // ---------- KISS N TELL ----------
  { name: "KISS N TELL", img: "kissntell.png", opts: { album: ["kissntell"] } },
  { name: "Orbit Pop", img: "kissntell.png", opts: { album: ["kissntell"] } },
  { name: "Fangirl", img: "kissntell.png", opts: { album: ["kissntell"] } },
  { name: "Done with Rules", img: "kissntell.png", opts: { album: ["kissntell"] } },
  { name: "ATTITUDE", img: "kissntell.png", opts: { album: ["kissntell"] } },
  { name: "In Halo", img: "kissntell.png", opts: { album: ["kissntell"] } },
  // ---------- SYNK Solo / Unit ----------
  { name: "Up (Karina)", img: "synk.png", opts: { album: ["synk"] } },
  { name: "Dopamine (Giselle)", img: "synk.png", opts: { album: ["synk"] } },
  { name: "Bored! (Ningning)", img: "synk.png", opts: { album: ["synk"] } },
  { name: "Spark (Winter)", img: "synk.png", opts: { album: ["synk"] } },
  { name: "Blue (Winter)", img: "synk.png", opts: { album: ["synk"] } },
  { name: "Ketchup and Lemonade (Ningning)", img: "synk.png", opts: { album: ["synk"] } },
  { name: "Tornado (Giselle)", img: "synk.png", opts: { album: ["synk"] } },
  { name: "Good Stuff (Karina)", img: "synk.png", opts: { album: ["synk"] } },
  { name: "Serenade (Karina & Winter)", img: "synk.png", opts: { album: ["synk"] } },
  { name: "Lollipop (Giselle & Ningning)", img: "synk.png", opts: { album: ["synk"] } },
  { name: "16 Bit (Karina)", img: "synk.png", opts: { album: ["synk"] } },
  { name: "Saddle Up (Winter)", img: "synk.png", opts: { album: ["synk"] } },
  { name: "I Love You But I Gotta Let You Go (Ningning)", img: "synk.png", opts: { album: ["synk"] } },
];
