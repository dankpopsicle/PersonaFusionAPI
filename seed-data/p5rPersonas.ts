interface p5rPersona {
  inherits?: string,
  item: string,
  itemr: string,
  level: number,
  arcana: string,
  elems: Array<string>,
  skills: skill,
  stats: Array<number>,
  trait: string,
  area?: string,
  floor?: string,
  skillCard?: boolean,
  special?: boolean,
  max?: boolean,
  note?: string,
  rare?: boolean,
  personality?: string,
  dlc?: boolean,
  background: string
}

interface skill {
  [key: string]: number
}

interface p5rPersonas {
  [key: string]: p5rPersona
}

export const p5rPersonas: p5rPersonas = {
    "Abaddon": {
      "inherits": "Curse",
      "item": "Megaton Raid Belt",
      "itemr": "God's Hand Belt",
      "level": 75,
      "arcana": "Judgement",
      "elems": [
        "ab",
        "ab",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "rs",
        "ab"
      ],
      "skills": {
        "Mabufudyne": 0,
        "Megaton Raid": 0,
        "Enduring Soul": 0,
        "Flash Bomb": 78,
        "Ailment Boost": 79,
        "Absorb Phys": 80,
        "Gigantomachia": 81
      },
      "stats": [
        51,
        42,
        58,
        38,
        43
      ],
      "trait": "Mouth of Savoring",
      "area": "Da'at",
      "floor": "All",
      "background": "The \"Destroyer\" and \"Angel of the Bottomless Pit,\" as described in ancient scriptures. He controls locusts and uses them to cause massive destruction to villages."
    },
    "Agathion": {
      "inherits": "Electric",
      "item": "Zio",
      "itemr": "Mazio",
      "skillCard": true,
      "level": 3,
      "arcana": "Chariot",
      "elems": [
        "-",
        "rs",
        "-",
        "-",
        "rs",
        "wk",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Dia": 0,
        "Baisudi": 0,
        "Lunge": 4,
        "Rakukaja": 6,
        "Zio": 7,
        "Dodge Elec": 8
      },
      "stats": [
        3,
        4,
        5,
        7,
        3
      ],
      "trait": "Rare Antibody",
      "area": "Aiyatsbus",
      "floor": "L1",
      "background": "A general term for familiars used by Judeo-Christian magicians, they are usually sealed away in bottles, rings, or talismans. They torment the target selected by the conjurer."
    },
    "Alice": {
      "special": true,
      "inherits": "Curse",
      "item": "Spiral Hell Ring",
      "itemr": "Cursed Ribbon",
      "level": 83,
      "arcana": "Death",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "rs",
        "rs",
        "wk",
        "rp"
      ],
      "skills": {
        "Mamudoon": 0,
        "Mudo Boost": 0,
        "Maeigaon": 0,
        "Die For Me!": 85,
        "Megidolaon": 86,
        "Concentrate": 87,
        "Survival Trick": 88
      },
      "stats": [
        45,
        61,
        49,
        54,
        47
      ],
      "trait": "Just Die",
      "max": true,
      "background": "A mysterious blond girl. She is quite powerful, despite her looks. Some say she is the ghost of a girl who died a sad death. Others say she is a spirit born from someone's imagination."
    },
    "Alilat": {
      "inherits": "Ice",
      "item": "Mabufudyne",
      "itemr": "Diamond Dust",
      "skillCard": true,
      "level": 81,
      "arcana": "Empress",
      "elems": [
        "rp",
        "rp",
        "wk",
        "ab",
        "-",
        "-",
        "nu",
        "-",
        "-",
        "wk"
      ],
      "skills": {
        "Diamond Dust": 0,
        "Marakukaja": 0,
        "Freeze Boost": 0,
        "Mabufudyne": 82,
        "Concentrate": 83,
        "Auto-Maraku": 85,
        "Ice Amp": 86,
        "Ice Age": 87
      },
      "stats": [
        45,
        54,
        57,
        49,
        45
      ],
      "trait": "Frigid Bloodline",
      "note": "Only available after 1/12",
      "background": "The Arabian mother goddess also known as Allat. She was thought to reside in the Black Stone at the Kaaba. She and her son, Dusura, were worshipped there by desert nomads"
    },
    "Ame-no-Uzume": {
      "inherits": "Almighty",
      "item": "Senryou Yakusha",
      "itemr": "Senryou Yakusha R",
      "level": 13,
      "arcana": "Lovers",
      "elems": [
        "-",
        "-",
        "ab",
        "-",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Mazio": 0,
        "Magaru": 0,
        "Media": 0,
        "Nocturnal Flash": 15,
        "Baisudi": 16,
        "Divine Grace": 18
      },
      "stats": [
        7,
        10,
        9,
        11,
        9
      ],
      "trait": "Electric Bloodline",
      "area": "Chemdah",
      "floor": "L6 & 7",
      "background": "Japanese goddess of entertainment, she governs many sacred dances. She is most famous for luring out Amaterasu, who had barricaded herself inside a cave."
    },
    "Ananta": {
      "inherits": "Nuclear",
      "item": "Spiral Nuclear Ring",
      "itemr": "Reactor Ring",
      "level": 44,
      "arcana": "Councillor",
      "elems": [
        "-",
        "-",
        "-",
        "ab",
        "wk",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Mafreila": 0,
        "Defense Master": 0,
        "Elec Wall": 0,
        "Abysmal Surge": 46,
        "Growth 2": 47,
        "Marakukaja": 48,
        "Freidyne": 49,
        "Nuke Boost": 50
      },
      "stats": [
        26,
        30,
        31,
        27,
        25
      ],
      "trait": "Atomic Bloodline",
      "background": "The 1,000-headed serpent of Hindu legend, Ananta is Sanskrit for \"infinite.\" After resting on him, Vishnu woke up and created the universe."
    },
    "Andras": {
      "inherits": "Ice",
      "item": "Evil Touch",
      "itemr": "Evil Smile",
      "skillCard": true,
      "level": 27,
      "arcana": "Devil",
      "elems": [
        "-",
        "-",
        "wk",
        "rs",
        "-",
        "-",
        "rs",
        "-",
        "wk",
        "nu"
      ],
      "skills": {
        "Foul Breath": 0,
        "Terror Claw": 0,
        "Evil Touch": 28,
        "Fear Boost": 29,
        "Rakunda": 31,
        "Ghastly Wail": 32
      },
      "stats": [
        15,
        19,
        19,
        21,
        14
      ],
      "trait": "Foul Odor",
      "area": "Akzeriyyuth",
      "floor": "???",
      "background": "One of the 72 demons of the Goetia. The great Marquis of Hell, he appears where there is battle to stoke the hatred within soldiers. He helps defeat the enemies of those who summon him."
    },
    "Angel": {
      "inherits": "Bless",
      "item": "Kouha",
      "itemr": "Makouha",
      "skillCard": true,
      "level": 9,
      "arcana": "Justice",
      "elems": [
        "-",
        "wk",
        "-",
        "-",
        "rs",
        "-",
        "-",
        "-",
        "nu",
        "wk"
      ],
      "skills": {
        "Kouha": 0,
        "Makajam": 0,
        "Dia": 0,
        "Baisudi": 10,
        "Dodge Curse": 11,
        "Dekunda": 12
      },
      "stats": [
        6,
        9,
        5,
        9,
        5
      ],
      "trait": "Skillful Combo",
      "area": "Aiyatsbus / Kaitul",
      "floor": "L5 & 6 / L1-4",
      "background": "Ninth of the nine orders of angels. They are closest in nature to humans. They watch over individuals and warn those who stray from the path."
    },
    "Anubis": {
      "inherits": "Almighty",
      "item": "Makouga",
      "itemr": "Kougaon",
      "skillCard": true,
      "level": 34,
      "arcana": "Judgement",
      "elems": [
        "-",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "rs",
        "-",
        "nu",
        "nu"
      ],
      "skills": {
        "Hamaon": 0,
        "Mudoon": 0,
        "Makouga": 0,
        "Maeiga": 36,
        "Dekunda": 37,
        "Resist Bless": 38
      },
      "stats": [
        19,
        24,
        22,
        21,
        23
      ],
      "trait": "Deathly Illness",
      "area": "Akzeriyyuth",
      "floor": "L10 & 11",
      "background": "The jackal-headed god of the dead and embalming from Egyptian myth. He weighs the hearts of the dead to determine their final destination."
    },
    "Anzu": {
      "inherits": "Wind",
      "item": "Garula",
      "itemr": "Magarula",
      "skillCard": true,
      "level": 25,
      "arcana": "Hierophant",
      "elems": [
        "-",
        "wk",
        "-",
        "-",
        "rs",
        "rp",
        "-",
        "wk",
        "-",
        "-"
      ],
      "skills": {
        "Garula": 0,
        "Masukukaja": 0,
        "Wind Break": 0,
        "Assault Dive": 27,
        "Dekaja": 28,
        "Null Forget": 29
      },
      "stats": [
        14,
        18,
        15,
        21,
        14
      ],
      "trait": "Wind Bloodline",
      "area": "Akzeriyyuth",
      "floor": "L1-3, 5-7, 9-11",
      "background": "An evil deity of Mesopotamian folklore with an eagle's body and lion's head. While the god of Enlil purified himself, Anzu stole the Tablets of Destiny from him."
    },
    "Apsaras": {
      "inherits": "Ice",
      "item": "Media",
      "itemr": "Diarama",
      "skillCard": true,
      "level": 11,
      "arcana": "Priestess",
      "elems": [
        "-",
        "-",
        "wk",
        "rs",
        "wk",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Rebellion": 0,
        "Ice Wall": 0,
        "Bufu": 0,
        "Media": 13,
        "Elec Wall": 14,
        "Wind Wall": 16
      },
      "stats": [
        7,
        11,
        6,
        10,
        6
      ],
      "trait": "Internal Hypnosis",
      "area": "Chemdah",
      "floor": "L1-4",
      "background": "Hindu water spirits, they are beautiful young women who dance for the gods. They also guide heroes fallen in battle to paradise."
    },
    "Ara Mitama": {
      "inherits": "Nuclear",
      "item": "Nuclear Ring",
      "itemr": "Spiral Nuclear Ring",
      "level": 30,
      "arcana": "Chariot",
      "elems": [
        "rs",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Miracle Punch": 0,
        "Freila": 0,
        "Taunt": 0,
        "Rebellion": 31,
        "Marakunda": 32,
        "Rage Boost": 34,
        "Matarukaja": 35
      },
      "stats": [
        20,
        18,
        20,
        20,
        19
      ],
      "trait": "Atomic Bloodline",
      "background": "One of the four aspects of Shinto thought, it has the power to grant ferocity. It is said to aid in one's bravery, growth, and endeavors, though it can lead in a negative direction."
    },
    "Arahabaki": {
      "inherits": "Ailment",
      "item": "Tapsuan",
      "itemr": "Fine Tapsuan",
      "level": 35,
      "arcana": "Hermit",
      "elems": [
        "rp",
        "rp",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "wk",
        "rs",
        "rs"
      ],
      "skills": {
        "Makarakarn": 0,
        "Abysmal Surge": 0,
        "Null Brainwash": 0,
        "Spirit Drain": 37,
        "Flash Bomb": 38,
        "Defense Master": 39
      },
      "stats": [
        21,
        23,
        22,
        24,
        22
      ],
      "trait": "Immunity",
      "area": "Adyeshach",
      "floor": "L1-4, 6-8, 10",
      "background": "A mysterious god of ancient Japan. Most famously worshipped by Nagasunehiko, who was defeated in battle against Emperor Jimmu, Arahabaki came to be treated as a symbol of rebellion and defiance."
    },
    "Archangel": {
      "inherits": "Bless",
      "item": "Hama",
      "itemr": "Mahama",
      "skillCard": true,
      "level": 14,
      "arcana": "Justice",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "nu",
        "wk"
      ],
      "skills": {
        "Giant Slice": 0,
        "Dazzler": 0,
        "Hama": 0,
        "Rebellion": 16,
        "Power Slash": 17,
        "Vajra Blast": 19
      },
      "stats": [
        11,
        9,
        10,
        12,
        7
      ],
      "trait": "Skillful Combo",
      "area": "Aiyatsbus",
      "floor": "L5 & 6",
      "background": "Eighth of the nine orders of angels. Their duty is to minister to humans and deliver messages. They are warriors of Heaven and lead Heaven's forces during battle with the armies of evil."
    },
    "Ardha": {
      "special": true,
      "inherits": "Almighty",
      "item": "Sahasrara",
      "itemr": "Sahasrara EX",
      "level": 84,
      "arcana": "Temperance",
      "elems": [
        "rs",
        "-",
        "-",
        "nu",
        "nu",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "God's Hand": 0,
        "Cosmic Flare": 0,
        "Invigorate 3": 0,
        "Agneyastra": 87,
        "Auto-Masuku": 88,
        "Fortified Moxy": 89,
        "Salvation": 90
      },
      "stats": [
        54,
        56,
        55,
        54,
        40
      ],
      "trait": "Naranari",
      "max": true,
      "background": "A god of dual gender whose appearance is half that of the destroyer, Shiva, and half his wife, Parvati. Ardha is the ideal figure of Shaktism, the perfect god."
    },
    "Arsène": {
      "inherits": "Curse",
      "item": "Arsène's Cane",
      "itemr": "The Great Thief Stick",
      "level": 1,
      "arcana": "Fool",
      "elems": [
        "-",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "rs"
      ],
      "skills": {
        "Eiha": 0,
        "Cleave": 2,
        "Sukunda": 4,
        "Dream Needle": 5,
        "Adverse Resolve": 7
      },
      "stats": [
        2,
        2,
        2,
        3,
        1
      ],
      "trait": "Pinch Anchor",
      "background": "A being based off the main character of Maurice Leblanc's novels, Arsène Lupin. He appears everywhere and is a master of disguise. He is known to help law-abiding citizens."
    },
    "Asura": {
      "special": true,
      "inherits": "Nuclear",
      "item": "Vajra",
      "itemr": "Unparalleled Vajra",
      "level": 76,
      "arcana": "Sun",
      "elems": [
        "-",
        "-",
        "nu",
        "-",
        "-",
        "-",
        "wk",
        "rp",
        "-",
        "-"
      ],
      "skills": {
        "Atomic Flare": 0,
        "Mahamaon": 0,
        "Marakukaja": 0,
        "Auto-Mataru": 78,
        "Mafreidyne": 79,
        "High Counter": 80,
        "Unshaken Will": 81
      },
      "stats": [
        52,
        48,
        51,
        49,
        35
      ],
      "trait": "Atomic Hellscape",
      "max": true,
      "background": "The Hindu king of Asuras is named Maha Vairocana, or \"One Who Shines On All.\" In Buddhism, he is known as Dainichi Nyorai."
    },
    "Atavaka": {
      "inherits": "Physical",
      "item": "Brave Blade",
      "itemr": "Sword Dance",
      "skillCard": true,
      "level": 65,
      "arcana": "Faith",
      "elems": [
        "rs",
        "nu",
        "rp",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "rs"
      ],
      "skills": {
        "Maragidyne": 0,
        "Oni Kagura": 0,
        "Mediarahan": 0,
        "High Counter": 67,
        "Samarecarm": 68,
        "Brave Blade": 70,
        "Attack Master": 71
      },
      "stats": [
        51,
        36,
        43,
        38,
        34
      ],
      "trait": "Savior Bloodline",
      "background": "One of the eight Yashaou. His domain is war and protection. Once a child-eating demon, he became one of the Wisdom Kings after Buddha converted him to good."
    },
    "Atropos": {
      "inherits": "Electric",
      "item": "Mazionga",
      "itemr": "Ziodyne",
      "skillCard": true,
      "level": 39,
      "arcana": "Fortune",
      "elems": [
        "-",
        "-",
        "wk",
        "-",
        "-",
        "nu",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Mazionga": 0,
        "Fire Wall": 0,
        "Elec Break": 0,
        "Mediarama": 41,
        "Elec Boost": 42,
        "Ziodyne": 44,
        "Concentrate": 45
      },
      "stats": [
        23,
        30,
        22,
        27,
        22
      ],
      "trait": "Mighty Gaze",
      "background": "The eldest of the three Moirae Sisters of Greek mythology. She cuts the threads of life for those whose time has come."
    },
    "Attis": {
      "inherits": "Fire",
      "item": "Null Curse",
      "itemr": "Absorb Curse",
      "skillCard": true,
      "level": 82,
      "arcana": "Hanged",
      "elems": [
        "-",
        "-",
        "nu",
        "-",
        "-",
        "rp",
        "-",
        "-",
        "-",
        "wk"
      ],
      "skills": {
        "Maragidyne": 0,
        "Salvation": 0,
        "Thermopylae": 0,
        "Enduring Soul": 84,
        "Samarecarm": 85,
        "Absorb Curse": 86,
        "Blazing Hell": 88
      },
      "stats": [
        49,
        50,
        48,
        54,
        52
      ],
      "trait": "Vitality of the Tree",
      "max": true,
      "background": "A Phrygian god who symbolizes life, death, and revival. He rejected Cybele's love and was driven mad, dying after he castrated himself. Cybele then resurrected him."
    },
    "Baal": {
      "inherits": "Wind",
      "item": "Yagrush",
      "itemr": "Yagrush EX",
      "level": 82,
      "arcana": "Emperor",
      "elems": [
        "-",
        "-",
        "rs",
        "-",
        "-",
        "ab",
        "-",
        "-",
        "rs",
        "-"
      ],
      "skills": {
        "Panta Rhei": 0,
        "Revolution": 0,
        "Matarukaja": 0,
        "Ayamur": 84,
        "Tetraja": 85,
        "Charge": 86,
        "Vacuum Wave": 87
      },
      "stats": [
        54,
        58,
        53,
        47,
        41
      ],
      "trait": "Wind Bloodline",
      "background": "The chief Semitic god who governs over fertility. He is the god of Canaan and brother and consort to the goddess Anat, who saved him from Mot."
    },
    "Baphomet": {
      "inherits": "Almighty",
      "item": "Bufudyne",
      "itemr": "Mabufudyne",
      "skillCard": true,
      "level": 58,
      "arcana": "Devil",
      "elems": [
        "-",
        "-",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "nu"
      ],
      "skills": {
        "Agidyne": 0,
        "Evade Fire": 0,
        "Burn Boost": 0,
        "Bufudyne": 59,
        "Ziodyne": 61,
        "Shock Boost": 62,
        "Freeze Boost": 63
      },
      "stats": [
        34,
        42,
        36,
        38,
        31
      ],
      "trait": "Thermal Conduct",
      "area": "Sheriruth",
      "floor": "L13 (after Palace 7)",
      "background": "A goat-headed demon that is worshiped in Black Sabbaths. His name can be used as a catch-all term for demons in general. He would become an object of worship for witches."
    },
    "Barong": {
      "inherits": "Electric",
      "item": "Ziodyne",
      "itemr": "Maziodyne",
      "skillCard": true,
      "level": 52,
      "arcana": "Emperor",
      "elems": [
        "-",
        "rs",
        "-",
        "-",
        "rs",
        "wk",
        "-",
        "-",
        "nu",
        "wk"
      ],
      "skills": {
        "Ziodyne": 0,
        "Wage War": 0,
        "Invigorate 2": 0,
        "Elec Break": 54,
        "Null Elec": 55,
        "Maziodyne": 57
      },
      "stats": [
        33,
        35,
        33,
        37,
        25
      ],
      "trait": "Blessed Bloodline",
      "area": "Sheriruth",
      "floor": "L11 & 12 (after Palace 7)",
      "background": "A mystical creature in Balinese lore, it represents good and is Rangda's eternal rival. Even if defeated, it will be reborn. The result is a never-ending struggle..."
    },
    "Beelzebub": {
      "inherits": "Curse",
      "item": "Fleurs du Mal",
      "itemr": "Fleurs du Mal R",
      "level": 87,
      "arcana": "Devil",
      "elems": [
        "-",
        "-",
        "ab",
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "rp"
      ],
      "skills": {
        "Maeigaon": 0,
        "Mamudoon": 0,
        "Evil Smile": 0,
        "Curse Amp": 88,
        "Concentrate": 89,
        "Demonic Decree": 90,
        "Repel Ice": 91,
        "Megidolaon": 92
      },
      "stats": [
        55,
        61,
        54,
        56,
        42
      ],
      "trait": "Mother's Lament",
      "max": true,
      "background": "Demonic Lord of the Flies whose insect minions carry souls for him to control. He is mentioned in the Bible as a leader of evil spirits and is seen as a powerful demon."
    },
    "Belial": {
      "inherits": "Curse",
      "item": "Mamudoon",
      "itemr": "Demonic Decree",
      "skillCard": true,
      "level": 82,
      "arcana": "Devil",
      "elems": [
        "nu",
        "-",
        "-",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "nu"
      ],
      "skills": {
        "Eigaon": 0,
        "Bloodbath": 0,
        "Curse Amp": 0,
        "Maeigaon": 84,
        "Fear Boost": 85,
        "Mamudoon": 86,
        "Demonic Decree": 88
      },
      "stats": [
        52,
        53,
        51,
        48,
        49
      ],
      "trait": "Bloodstained Eyes",
      "background": "One of the 72 demons of the Goetia. He led Sodom and Gomorrah to ruin and persecuted Jesus. He grants high social status to those who summon him."
    },
    "Belphegor": {
      "inherits": "Ice",
      "item": "Mabufula",
      "itemr": "Bufudyne",
      "skillCard": true,
      "level": 37,
      "arcana": "Tower",
      "elems": [
        "-",
        "-",
        "wk",
        "rs",
        "rs",
        "-",
        "-",
        "rs",
        "-",
        "rp"
      ],
      "skills": {
        "Mabufula": 0,
        "Ice Break": 0,
        "Null Rage": 38,
        "Dodge Fire": 39,
        "Bufudyne": 41,
        "Concentrate": 42
      },
      "stats": [
        25,
        27,
        24,
        23,
        19
      ],
      "trait": "Intense Focus",
      "area": "Adyeshach",
      "floor": "L6-8, 10",
      "background": "Demonic governor of the deadly sin of sloth. He also excels at invention and discovery. May derive from Ba'al Pe'or, Syrian god of abundant crops."
    },
    "Berith": {
      "inherits": "Physical",
      "item": "Cleave",
      "itemr": "Power Slash",
      "skillCard": true,
      "level": 9,
      "arcana": "Hierophant",
      "elems": [
        "-",
        "nu",
        "rs",
        "wk",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Cleave": 0,
        "Rakukaja": 0,
        "Tarukaja": 10,
        "Dodge Fire": 11,
        "Power Slash": 13
      },
      "stats": [
        9,
        6,
        8,
        8,
        3
      ],
      "trait": "Crisis Control",
      "area": "Aiyatsbus",
      "floor": "L5 & 6",
      "background": "One of the 72 demons of Goetia. Known as the Duke of Hell, he rides a gigantic horse and burns those without manners."
    },
    "Bicorn": {
      "inherits": "Wind",
      "item": "Lunge",
      "itemr": "Assault Dive",
      "skillCard": true,
      "level": 4,
      "arcana": "Hermit",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "-",
        "rs"
      ],
      "skills": {
        "Lunge": 0,
        "Tarunda": 0,
        "Garu": 6,
        "Ice Wall": 7,
        "Apt Pupil": 8
      },
      "stats": [
        5,
        3,
        3,
        5,
        3
      ],
      "trait": "Striking Weight",
      "area": "Aiyatsbus",
      "floor": "L1 & 2",
      "background": "An evil creature with two curving horns. It represents impurity, unlike the Unicorn. Said to be derived from Re'em in the Bible. Another legend says that it feeds off of disloyal husbands."
    },
    "Bishamonten": {
      "inherits": "Nuclear",
      "item": "Mafreidyne",
      "itemr": "Atomic Flare",
      "skillCard": true,
      "level": 67,
      "arcana": "Hierophant",
      "elems": [
        "-",
        "-",
        "ab",
        "wk",
        "-",
        "-",
        "-",
        "-",
        "rs",
        "rs"
      ],
      "skills": {
        "Freidyne": 0,
        "Diarahan": 0,
        "Deadly Fury": 0,
        "Mafreidyne": 69,
        "Nuke Amp": 71,
        "Tetrakarn": 72,
        "God's Hand": 73
      },
      "stats": [
        51,
        37,
        42,
        44,
        34
      ],
      "trait": "Savior Bloodline",
      "background": "Also known as Tamonten and Vaishravana in Buddhist lore, he is the strongest of the Heavenly Kings. He protects the North and is the god of war."
    },
    "Black Frost": {
      "special": true,
      "inherits": "Almighty",
      "item": "Naraka Whip",
      "itemr": "Dainaraka Whip",
      "level": 67,
      "arcana": "Fool",
      "elems": [
        "-",
        "-",
        "rp",
        "ab",
        "-",
        "-",
        "-",
        "nu",
        "-",
        "rp"
      ],
      "skills": {
        "Mabufudyne": 0,
        "One-shot Kill": 0,
        "Miracle Punch": 0,
        "Ice Amp": 68,
        "Freeze Boost": 70,
        "Repel Fire": 71,
        "Diamond Dust": 72
      },
      "stats": [
        44,
        46,
        41,
        42,
        35
      ],
      "trait": "Frigid Bloodline",
      "background": "A Jack Frost that yearned for evil. This powerful demon is born when a cute Jack Frost remembers its nature as a demon."
    },
    "Black Ooze": {
      "inherits": "Curse",
      "item": "Headbutt",
      "itemr": "Memory Blow",
      "skillCard": true,
      "level": 18,
      "arcana": "Moon",
      "elems": [
        "rs",
        "rs",
        "-",
        "rs",
        "wk",
        "-",
        "wk",
        "-",
        "wk",
        "nu"
      ],
      "skills": {
        "Sledgehammer": 0,
        "Evil Touch": 0,
        "Foul Breath": 0,
        "Ambient Aid": 20,
        "Headbutt": 21,
        "Brain Jack": 23,
        "Flash Bomb": 24
      },
      "stats": [
        15,
        7,
        16,
        8,
        15
      ],
      "trait": "Rare Antibody",
      "area": "Adyeshach",
      "floor": "L1-4, 6",
      "background": "A mass of malevolent intent and emotion that failed to become a true demon. All it does is eat prey and grow."
    },
    "Black Rider": {
      "inherits": "Curse",
      "item": "Megidola",
      "itemr": "Megidolaon",
      "skillCard": true,
      "level": 59,
      "arcana": "Tower",
      "elems": [
        "-",
        "-",
        "wk",
        "ab",
        "-",
        "-",
        "-",
        "-",
        "rs",
        "rs"
      ],
      "skills": {
        "Mamudoon": 0,
        "Flash Bomb": 0,
        "Maeigaon": 0,
        "Ambient Aid": 60,
        "Bloodbath": 61,
        "Ghastly Wail": 63,
        "Megidola": 64
      },
      "stats": [
        36,
        42,
        34,
        42,
        30
      ],
      "trait": "Gloomy Child",
      "background": "One of the Four Horsemen of the Apocalypse, he rides a black horse and carries scales. He brings famine and has the right to end lives through suffering."
    },
    "Bugs": {
      "special": true,
      "inherits": "Almighty",
      "item": "Bear Gloves",
      "itemr": "Big Bear Gloves",
      "level": 49,
      "arcana": "Fool",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "rs",
        "wk",
        "-",
        "nu"
      ],
      "skills": {
        "Miracle Punch": 0,
        "Masukunda": 0,
        "Psiodyne": 0,
        "Auto-Mataru": 51,
        "Triple Down": 52,
        "Evade Phys": 54,
        "Fast Heal": 55
      },
      "stats": [
        35,
        33,
        30,
        32,
        24
      ],
      "trait": "Potent Hypnosis",
      "background": "A Welsh creature commonly known as \"Bugbear\" or the \"Boogeyman.\" Its existence is often used by mothers to scare children into behaving."
    },
    "Byakhee": {
      "inherits": "Fire",
      "item": "Null Wind",
      "itemr": "Repel Wind",
      "skillCard": true,
      "level": 70,
      "arcana": "Moon",
      "elems": [
        "-",
        "-",
        "nu",
        "wk",
        "-",
        "nu",
        "-",
        "wk",
        "-",
        "nu"
      ],
      "skills": {
        "Agidyne": 0,
        "Foul Breath": 0,
        "Death Scythe": 0,
        "Maragidyne": 72,
        "Ailment Boost": 73,
        "Fire Break": 74,
        "Heat Riser": 75
      },
      "stats": [
        42,
        49,
        43,
        51,
        32
      ],
      "trait": "Heated Bloodline",
      "note": "Only available after 1/12",
      "background": "A malformed, winged servant of the Cthulhu Mythos' cosmic god Hastur. They can fly even in the vacuum of space and it's said that if you can summon one, it will carry you wherever you wish."
    },
    "Byakko": {
      "inherits": "Ice",
      "item": "Spiral Snow Ring",
      "itemr": "Blizzard Ring",
      "level": 45,
      "arcana": "Temperance",
      "elems": [
        "-",
        "-",
        "wk",
        "ab",
        "-",
        "-",
        "-",
        "wk",
        "-",
        "rs"
      ],
      "skills": {
        "Swift Strike": 0,
        "Mabufula": 0,
        "Counterstrike": 0,
        "Ice Boost": 47,
        "Ice Break": 48,
        "Evade Fire": 49,
        "Null Rage": 50,
        "Bufudyne": 51
      },
      "stats": [
        35,
        28,
        30,
        32,
        17
      ],
      "trait": "Retaliating Body",
      "background": "One of the Ssu-Ling, celestial creatures of Chinese myth. It represents the direction west, the season of autumn, and the element of metal. He is believed to be the king of all beasts."
    },
    "Cait Sith": {
      "inherits": "Ailment",
      "item": "Agi",
      "itemr": "Maragi",
      "skillCard": true,
      "level": 5,
      "arcana": "Magician",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "rs",
        "wk",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Agi": 0,
        "Cleave": 0,
        "Tarukaja": 0,
        "Resist Sleep": 6,
        "Sukukaja": 7,
        "Media": 9
      },
      "stats": [
        6,
        4,
        4,
        5,
        3
      ],
      "trait": "Thermal Conduct",
      "background": "A fae beast from the Scottish highlands. Their kingdoms are in tree hollows or abandoned houses. Dog-sized, with vivid green eyes. Some live with humans, as they understand our speech."
    },
    "Cerberus": {
      "inherits": "Fire",
      "item": "Megaton Raid",
      "itemr": "God's Hand",
      "skillCard": true,
      "level": 55,
      "arcana": "Chariot",
      "elems": [
        "-",
        "-",
        "ab",
        "wk",
        "-",
        "-",
        "-",
        "rs",
        "-",
        "-"
      ],
      "skills": {
        "Agidyne": 0,
        "Megaton Raid": 0,
        "Rebellion": 56,
        "High Counter": 57,
        "Maragidyne": 58,
        "Enduring Soul": 60
      },
      "stats": [
        39,
        35,
        32,
        39,
        27
      ],
      "trait": "Heated Bloodline",
      "area": "Sheriruth",
      "floor": "L7-9 (after Palace 7)",
      "background": "The guardian hound who prevents anyone from entering or exiting the underworld in Greek lore. It was born from Typhon and Echidna, and is the older brother of Orthrus."
    },
    "Chernobog": {
      "inherits": "Ailment",
      "item": "Mudoon",
      "itemr": "Mamudoon",
      "skillCard": true,
      "level": 62,
      "arcana": "Death",
      "elems": [
        "-",
        "rs",
        "wk",
        "ab",
        "nu",
        "-",
        "-",
        "-",
        "wk",
        "ab"
      ],
      "skills": {
        "Mudoon": 0,
        "Bloodbath": 0,
        "Myriad Slashes": 0,
        "Foul Breath": 63,
        "Deathbound": 64,
        "Fear Boost": 66,
        "Brave Blade": 67
      },
      "stats": [
        40,
        37,
        39,
        38,
        39
      ],
      "trait": "Crisis Control",
      "area": "Da'at",
      "floor": "All",
      "background": "A cursed god of death, evil, and the night in Slavic lore. His name means \"Black God,\" and he is the counterpart of the \"White God,\" Belobog. Despite being feared, he was also worshipped."
    },
    "Chi You": {
      "special": true,
      "inherits": "Psy",
      "item": "Repel Phys",
      "itemr": "Absorb Phys",
      "skillCard": true,
      "level": 88,
      "arcana": "Chariot",
      "elems": [
        "rs",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "nu",
        "wk",
        "-",
        "-"
      ],
      "skills": {
        "Psycho Force": 0,
        "Repel Phys": 0,
        "Gigantomachia": 0,
        "Fortify Spirit": 90,
        "Psycho Blast": 91,
        "Absorb Psy": 92,
        "Concentrate": 94
      },
      "stats": [
        56,
        57,
        54,
        53,
        51
      ],
      "trait": "Chi You's Blessing",
      "background": "A Chinese god of war, he is said to have invented many weapons. He and his followers rebelled against the Yellow Emperor, Huang Di, but were ultimately defeated."
    },
    "Chimera": {
      "inherits": "Physical",
      "item": "Null Fire",
      "itemr": "Absorb Fire",
      "skillCard": true,
      "level": 74,
      "arcana": "Strength",
      "elems": [
        "-",
        "-",
        "ab",
        "nu",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "wk"
      ],
      "skills": {
        "Maragidyne": 0,
        "Heat Wave": 0,
        "Bufudyne": 0,
        "Marakunda": 76,
        "Fire Amp": 77,
        "Mabufudyne": 78,
        "Ice Amp": 79
      },
      "stats": [
        51,
        40,
        42,
        48,
        48
      ],
      "trait": "Foul Stench",
      "note": "Only available after 1/12",
      "background": "Part lion, part goat and part snake, this creature originally represented the seasons. In Greek mythology, it was viewed as a violent monster. Born of Typhon and Echidna."
    },
    "Choronzon": {
      "inherits": "Curse",
      "item": "Curse Ring",
      "itemr": "Spiral Curse Ring",
      "level": 28,
      "arcana": "Magician",
      "elems": [
        "rs",
        "-",
        "ab",
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "-"
      ],
      "skills": {
        "Pulinpa": 0,
        "Life Drain": 0,
        "Rampage": 0,
        "Maeiha": 29,
        "Dodge Elec": 30,
        "Eiga": 31,
        "Curse Boost": 32,
        "Climate Decorum": 33
      },
      "stats": [
        16,
        19,
        19,
        18,
        19
      ],
      "trait": "Draining Mouth",
      "area": "Kaitul",
      "floor": "L1-4",
      "background": "A demon summoned by a sorcerer named Crowley at the beginning of the 20th century. He prevents those from attempting to reach enlightenment."
    },
    "Clotho": {
      "inherits": "Healing",
      "item": "Tetraja",
      "itemr": "Makarakarn",
      "skillCard": true,
      "level": 27,
      "arcana": "Fortune",
      "elems": [
        "-",
        "-",
        "-",
        "wk",
        "-",
        "nu",
        "-",
        "wk",
        "-",
        "-"
      ],
      "skills": {
        "Mahama": 0,
        "Me Patra": 0,
        "Makajam": 0,
        "Tetraja": 28,
        "Makajamaon": 30,
        "Energy Shower": 31,
        "Invigorate 1": 33
      },
      "stats": [
        14,
        19,
        18,
        20,
        17
      ],
      "trait": "Relief Bloodline",
      "background": "The youngest of the three Moirae Sisters of Greek legend. She spins the threads of life with her spindle."
    },
    "Crystal Skull": {
      "rare": true,
      "item": "Crystal Skull",
      "itemr": "Crystal Skull R",
      "level": 50,
      "arcana": "Fool",
      "elems": [
        "rs",
        "rs",
        "-",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Maragidyne": 0,
        "Mabufudyne": 0,
        "Magarudyne": 0,
        "Maziodyne": 0,
        "Mapsiodyne": 0,
        "Mafreidyne": 0,
        "Makougaon": 0,
        "Maeigaon": 0,
        "Foul Stench": 0,
        "Ailment Hunter": 0,
        "Cursed Bloodline": 0
      },
      "stats": [
        50,
        50,
        50,
        50,
        50
      ],
      "trait": "Ultimate Vessel",
      "area": "Sheriruth / Da'at",
      "floor": "L7-9. 11-13 (after Palace 7) / All",
      "background": "An ancient Out-Of-Place-Artifact found in Central and South America. It is said that if you collect 13 of them in one spot, the truth of the universe will be revealed."
    },
    "Cu Chulainn": {
      "inherits": "Almighty",
      "item": "One-shot Kill",
      "itemr": "Riot Gun",
      "skillCard": true,
      "level": 76,
      "arcana": "Faith",
      "elems": [
        "rs",
        "rs",
        "-",
        "-",
        "wk",
        "rp",
        "-",
        "-",
        "nu",
        "-"
      ],
      "skills": {
        "High Counter": 0,
        "One-shot Kill": 0,
        "Rebellion": 0,
        "Matarukaja": 78,
        "Brave Blade": 79,
        "Charge": 80,
        "Apt Pupil": 81
      },
      "stats": [
        55,
        44,
        46,
        48,
        42
      ],
      "trait": "Potent Hypnosis",
      "background": "A hero in Celtic folklore. He was called Setanta until he earned the name, \"Culann's Hound.\" There are many tales of his adventures. He received his spear, Gae Bolg, from his mentor, Scathach."
    },
    "Cybele": {
      "inherits": "Healing",
      "item": "Sabazios",
      "itemr": "Gordios",
      "level": 83,
      "arcana": "Priestess",
      "elems": [
        "-",
        "-",
        "rs",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "nu",
        "-"
      ],
      "skills": {
        "Samarecarm": 0,
        "Mediarahan": 0,
        "Makougaon": 0,
        "Amrita Shower": 84,
        "Auto-Maraku": 86,
        "Absorb Bless": 87,
        "Salvation": 89
      },
      "stats": [
        44,
        57,
        49,
        51,
        55
      ],
      "trait": "Linked Bloodline",
      "max": true,
      "background": "The Phrygian mother goddess of the earth, she is often depicted with wild animals, and lions in particular. She had her priest, Attis, as a lover, but drove him insane when he was forced to marry another."
    },
    "Daisoujou": {
      "inherits": "Bless",
      "item": "Spiral Blessing Ring",
      "itemr": "Divine Ring",
      "level": 40,
      "arcana": "Hierophant",
      "elems": [
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "nu",
        "wk"
      ],
      "skills": {
        "Spirit Drain": 0,
        "Makouga": 0,
        "Samsara": 41,
        "Bless Boost": 42,
        "Diarahan": 43,
        "Me Patra": 44,
        "Null Rage": 45
      },
      "stats": [
        21,
        33,
        24,
        24,
        25
      ],
      "trait": "Draining Mouth",
      "background": "A monk who died while fasting, his spiritual power allows his body to exist without rotting. It is said that he will appear before people on the day of salvation."
    },
    "Dakini": {
      "inherits": "Physical",
      "item": "Tempest Slash",
      "itemr": "Myriad Slashes",
      "skillCard": true,
      "level": 50,
      "arcana": "Empress",
      "elems": [
        "-",
        "nu",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Bad Beat": 0,
        "Myriad Slashes": 0,
        "Rising Slash": 0,
        "High Counter": 52,
        "Deathbound": 53,
        "Rebellion": 54,
        "Charge": 55
      },
      "stats": [
        34,
        32,
        34,
        28,
        29
      ],
      "trait": "Skillful Combo",
      "area": "Sheriruth",
      "floor": "L7-9 (after Palace 7)",
      "background": "Hindu deities of passion and relations. They are Kali's attendants. They eat human flesh and gather at graveyards and crematories each night. Their name means \"sky dancer."
    },
    "Decarabia": {
      "inherits": "Fire",
      "item": "Maragion",
      "itemr": "Agidyne",
      "skillCard": true,
      "level": 32,
      "arcana": "Councillor",
      "elems": [
        "wk",
        "-",
        "rp",
        "-",
        "-",
        "-",
        "-",
        "rs",
        "-",
        "rs"
      ],
      "skills": {
        "Agilao": 0,
        "Ominous Words": 0,
        "Tetrakarn": 33,
        "Fire Boost": 35,
        "Agidyne": 36,
        "Null Fire": 37,
        "Megidola": 38
      },
      "stats": [
        21,
        23,
        19,
        22,
        18
      ],
      "trait": "Heated Bloodline",
      "area": "Adyeshach",
      "floor": "L3, 4, 6-8",
      "background": "One of the 72 demons of the Goetia, this demon appears as a pentacle. Keeper of jewels and herbal lore, Decarabia is said to have the ability to shape-shift at will."
    },
    "Dionysus": {
      "inherits": "Ailment",
      "item": "Maziodyne",
      "itemr": "Thunder Reign",
      "skillCard": true,
      "level": 71,
      "arcana": "Councillor",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "rp",
        "-",
        "-",
        "-",
        "nu",
        "nu"
      ],
      "skills": {
        "Maziodyne": 0,
        "Ziodyne": 0,
        "Brain Jack": 0,
        "Thermopylae": 72,
        "Ailment Boost": 73,
        "Amrita Shower": 75,
        "Debilitate": 76
      },
      "stats": [
        42,
        48,
        44,
        42,
        44
      ],
      "trait": "Pinch Anchor",
      "background": "The Greek god of wine and theater. He was originally a god of life protecting the mountains of Thrace. He taught humans how to make wine."
    },
    "Dominion": {
      "inherits": "Bless",
      "item": "Makougaon",
      "itemr": "Divine Judgement",
      "skillCard": true,
      "level": 68,
      "arcana": "Justice",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "rp",
        "nu",
        "rs"
      ],
      "skills": {
        "Makajamaon": 0,
        "Hamaon": 0,
        "Kougaon": 0,
        "Makougaon": 70,
        "Hama Boost": 71,
        "Mahamaon": 72,
        "Evade Curse": 74
      },
      "stats": [
        42,
        45,
        43,
        44,
        37
      ],
      "trait": "Blessed Bloodline",
      "area": "Da'at",
      "floor": "All",
      "background": "The fourth of the nine orders of angels. Their duty is to oversee the other angels. Their actions are the manifestation of God's will."
    },
    "Eligor": {
      "inherits": "Fire",
      "item": "Tarukaja",
      "itemr": "Matarukaja",
      "skillCard": true,
      "level": 16,
      "arcana": "Emperor",
      "elems": [
        "-",
        "-",
        "rs",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "-",
        "rs"
      ],
      "skills": {
        "Maragi": 0,
        "Sharp Student": 0,
        "Tarukaja": 0,
        "Double Fangs": 18,
        "Sukunda": 19,
        "Memory Blow": 20
      },
      "stats": [
        12,
        10,
        13,
        10,
        10
      ],
      "trait": "Thermal Conduct",
      "area": "Chemdah",
      "floor": "L3 & 4",
      "background": "One of the 72 demons of the Goetia. He looks like a knight and has the power to see things to come. He also knows much about war."
    },
    "Emperor's Amulet": {
      "rare": true,
      "item": "Emperor's Amulet",
      "itemr": "Emperor's Charm R",
      "level": 35,
      "arcana": "Hanged",
      "elems": [
        "rs",
        "rs",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Agidyne": 0,
        "Bufudyne": 0,
        "Garudyne": 0,
        "Ziodyne": 0,
        "Psiodyne": 0,
        "Freidyne": 0,
        "Kougaon": 0,
        "Eigaon": 0,
        "Frigid Bloodline": 0,
        "Wind Bloodline": 0,
        "Psychic Bloodline": 0
      },
      "stats": [
        35,
        35,
        35,
        35,
        35
      ],
      "trait": "Ultimate Vessel",
      "area": "Sheriruth",
      "floor": "L7-9, 11-13 (after Palace 7)",
      "background": "Also known as Charlemagne's talisman, it is said to make its owner an emperor. In between the two gems is a piece of Jesus' cross and a hair of the Virgin Mary."
    },
    "Fafnir": {
      "inherits": "Nuclear",
      "item": "Spiral Reactor Ring",
      "itemr": "Fire Dragon Horn",
      "level": 86,
      "arcana": "Hermit",
      "elems": [
        "rp",
        "rp",
        "ab",
        "-",
        "rs",
        "-",
        "-",
        "ab",
        "-",
        "-"
      ],
      "skills": {
        "Gigantomachia": 0,
        "Evil Smile": 0,
        "Cosmic Flare": 0,
        "Atomic Flare": 88,
        "Nuke Amp": 90,
        "Debilitate": 91,
        "Absorb Nuke": 92
      },
      "stats": [
        61,
        55,
        58,
        48,
        43
      ],
      "trait": "Ailment Hunter",
      "note": "Only available after 1/12",
      "background": "An evil dragon of Norse lore, it was vanquished by the hero, Siegfried. According to the Völsunga saga, it was venomous, had legs like snakes and shook the ground with every step."
    },
    "Flauros": {
      "special": true,
      "inherits": "Ailment",
      "item": "Giant Slice Belt",
      "itemr": "Rising Slash Belt",
      "level": 19,
      "arcana": "Devil",
      "elems": [
        "-",
        "-",
        "nu",
        "wk",
        "-",
        "rs",
        "-",
        "rs",
        "-",
        "-"
      ],
      "skills": {
        "Giant Slice": 0,
        "Dormin Rush": 0,
        "Dekaja": 0,
        "Dodge Phys": 20,
        "Rebellion": 22,
        "Cornered Fang": 23,
        "Heat Up": 24
      },
      "stats": [
        15,
        11,
        13,
        14,
        11
      ],
      "trait": "Gluttonmouth",
      "background": "One of the 72 demons of the Goetia. He appears as a leopard and can see the past and future. He can control fire and burn all his adversaries to death."
    },
    "Forneus": {
      "inherits": "Psy",
      "item": "Psiodyne",
      "itemr": "Mapsiodyne",
      "skillCard": true,
      "level": 63,
      "arcana": "Magician",
      "elems": [
        "-",
        "-",
        "-",
        "ab",
        "wk",
        "-",
        "nu",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Psiodyne": 0,
        "Masukunda": 0,
        "Brain Jack": 0,
        "Survival Trick": 65,
        "Stagnant Air": 66,
        "Mapsiodyne": 67,
        "Evade Psy": 68
      },
      "stats": [
        41,
        39,
        40,
        42,
        34
      ],
      "trait": "Bloodstained Eyes",
      "area": "Sheriruth",
      "floor": "L12 & 13 (after Palace 7)",
      "background": "One of the 72 demons of the Goetia, he appears as a great sea monster. Known as the great Marquis of Hell, he is skilled linguistically, and is a master of rhetoric."
    },
    "Fortuna": {
      "inherits": "Wind",
      "item": "Lucky Robe",
      "itemr": "Super Lucky Robe",
      "level": 46,
      "arcana": "Fortune",
      "elems": [
        "-",
        "-",
        "nu",
        "-",
        "wk",
        "nu",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Magarula": 0,
        "Masukukaja": 0,
        "Tetraja": 0,
        "Garudyne": 47,
        "Touch n' Go": 49,
        "Amrita Drop": 50,
        "Evade Elec": 51
      },
      "stats": [
        23,
        32,
        29,
        34,
        27
      ],
      "trait": "Wind Bloodline",
      "background": "The Roman goddess of luck, she spins the Wheel of Fortune. She is believed to have originally been a fertility goddess. Her Greek counterpart is Tyche."
    },
    "Futsunushi": {
      "inherits": "Physical",
      "item": "Hinokagutsuchi",
      "itemr": "Hinokagutsuchi II",
      "level": 86,
      "arcana": "Magician",
      "elems": [
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "-",
        "-"
      ],
      "skills": {
        "Myriad Slashes": 0,
        "Matarukaja": 0,
        "Apt Pupil": 0,
        "Charge": 88,
        "Brave Blade": 89,
        "Regenerate 3": 90,
        "Firm Stance": 91,
        "Auto-Maraku": 92
      },
      "stats": [
        60,
        58,
        55,
        52,
        40
      ],
      "trait": "Will of the Sword",
      "max": true,
      "background": "The Nihonshoki sword deity who pacified Ashihara-no-Nakatsukuni. His name comes from \"futsu,\" the fashion in which things are cut, and \"nushi,\" his nature as a god."
    },
    "Fuu-Ki": {
      "inherits": "Wind",
      "item": "Wind Boost",
      "itemr": "Wind Amp",
      "skillCard": true,
      "level": 23,
      "arcana": "Star",
      "elems": [
        "-",
        "rs",
        "-",
        "-",
        "wk",
        "ab",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Tetra Break": 0,
        "Tarukaja": 0,
        "Garula": 0,
        "Wind Boost": 25,
        "Magarula": 26,
        "Resist Wind": 27
      },
      "stats": [
        14,
        17,
        16,
        15,
        14
      ],
      "trait": "Intense Focus",
      "area": "Kaitul",
      "floor": "L8 & 9",
      "background": "One of the four oni controlled by Fujiwara no Chikata, it sends hurricanes to blow away its enemies. Some say that Fuu-Ki is the original ninja."
    },
    "Gabriel": {
      "inherits": "Almighty",
      "item": "Spiral Blizzard Ring",
      "itemr": "Diamond Dust Lily",
      "level": 77,
      "arcana": "Temperance",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "nu",
        "-",
        "ab",
        "-"
      ],
      "skills": {
        "Maziodyne": 0,
        "Mabufudyne": 0,
        "Divine Judgement": 78,
        "Ali Dance": 79,
        "Evade Curse": 80,
        "Touch n' Go": 81,
        "Ice Amp": 82,
        "Salvation": 83
      },
      "stats": [
        43,
        51,
        48,
        54,
        42
      ],
      "trait": "Relentless",
      "background": "One of the four major archangels. She is also the only female angel at this rank. Her name comes from the Sumerian word for \"governor.\" She is the angel who told Mary of her pregnancy."
    },
    "Ganesha": {
      "inherits": "Ailment",
      "item": "Rebellion",
      "itemr": "Revolution",
      "skillCard": true,
      "level": 53,
      "arcana": "Sun",
      "elems": [
        "rs",
        "rs",
        "-",
        "-",
        "-",
        "ab",
        "wk",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Miracle Punch": 0,
        "Tempest Slash": 0,
        "Rebellion": 0,
        "Tetraja": 55,
        "Resist Psy": 56,
        "Masukunda": 57,
        "Charge": 60
      },
      "stats": [
        39,
        31,
        37,
        33,
        26
      ],
      "trait": "Gluttonmouth",
      "area": "Sheriruth",
      "floor": "L5, 7-9 (before Palace 7) / L3 & 4 (after Palace 7)",
      "background": "The Hindu elephant-headed god. He was originally created by Parvati in order to prevent anyone from watching her bathe. Shiva batted off his original head and replaced it with an elephant's head."
    },
    "Garuda": {
      "inherits": "Wind",
      "item": "Garudyne",
      "itemr": "Magarudyne",
      "skillCard": true,
      "level": 52,
      "arcana": "Star",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "-",
        "rs",
        "-",
        "-",
        "rp",
        "-"
      ],
      "skills": {
        "Garudyne": 0,
        "Mind Slice": 0,
        "Amrita Shower": 53,
        "Masukukaja": 54,
        "Evade Elec": 55,
        "Magarudyne": 57,
        "Wind Amp": 59
      },
      "stats": [
        30,
        36,
        29,
        39,
        29
      ],
      "trait": "Wind Bloodline",
      "area": "Sheriruth",
      "floor": "L12 (after Palace 7)",
      "background": "A divine bird-man in Hindu lore, he once fought the gods and received immortality in exchange for becoming Vishnu's carrier."
    },
    "Genbu": {
      "inherits": "Ice",
      "item": "Frost Ring",
      "itemr": "Spiral Frost Ring",
      "level": 7,
      "arcana": "Temperance",
      "elems": [
        "-",
        "-",
        "-",
        "nu",
        "wk",
        "-",
        "rs",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Bufu": 0,
        "Rakunda": 0,
        "Patra": 8,
        "Mabufu": 10,
        "Resist Forget": 11,
        "Defense Master": 12
      },
      "stats": [
        5,
        6,
        7,
        6,
        4
      ],
      "trait": "Cold-Blooded",
      "background": "One of the Ssu-Ling, celestial creatures of Chinese myth. It represents the direction north, the season of winter, and the element of water. Known to be a great warrior, it supports the Earth from below."
    },
    "Girimehkala": {
      "inherits": "Ailment",
      "item": "Swift Strike",
      "itemr": "Deathbound",
      "skillCard": true,
      "level": 43,
      "arcana": "Moon",
      "elems": [
        "rp",
        "rp",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "nu"
      ],
      "skills": {
        "Mudoon": 0,
        "Marakunda": 0,
        "Deathbound": 0,
        "Agidyne": 45,
        "Wage War": 47,
        "Repel Phys": 50
      },
      "stats": [
        32,
        24,
        32,
        29,
        19
      ],
      "trait": "Cursed Bloodline",
      "area": "Adyeshach",
      "floor": "L4, 6-8, 10",
      "background": "A giant elephant monster of Sri Lankan myth, it is typically portrayed as being ridden by the Evil One, Mara. Whoever looks into its evil eye is said to be met with misfortune."
    },
    "Hanuman": {
      "inherits": "Physical",
      "item": "Ruyi Jingu Bang",
      "itemr": "Fine Ruyi Jingu Bang",
      "level": 64,
      "arcana": "Strength",
      "elems": [
        "-",
        "rs",
        "-",
        "wk",
        "-",
        "-",
        "rs",
        "-",
        "rs",
        "-"
      ],
      "skills": {
        "Tempest Slash": 0,
        "Matarunda": 0,
        "Revolution": 0,
        "Deathbound": 65,
        "Tetra Break": 67,
        "Regenerate 3": 69
      },
      "stats": [
        43,
        38,
        40,
        40,
        38
      ],
      "trait": "Potent Hypnosis",
      "area": "Sheriruth",
      "floor": "L12 & 13 (after Palace 7)",
      "background": "A monkey god of Hindu descent. His father is Vayu, the wind god. Extremely nimble, he performed many heroic deeds in the Ramayana. He is powerful, can fly, and can change his shape into many forms."
    },
    "Hariti": {
      "inherits": "Electric",
      "item": "Revival Charm",
      "itemr": "Rejuvenate Charm",
      "level": 40,
      "arcana": "Empress",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "rs",
        "-",
        "rs",
        "-"
      ],
      "skills": {
        "Zionga": 0,
        "Energy Shower": 0,
        "Mabaisudi": 0,
        "Samarecarm": 41,
        "Nocturnal Flash": 42,
        "Mediarama": 44,
        "Dizzy Boost": 45,
        "Spirit Drain": 46
      },
      "stats": [
        21,
        32,
        24,
        23,
        27
      ],
      "trait": "Electric Bloodline",
      "background": "Also known as Kishimojin, she once ate children, but stopped after Buddha changed her ways. She now eats pomegranates and is a goddess of parenting."
    },
    "Hastur": {
      "inherits": "Wind",
      "item": "Spiral Gale Ring",
      "itemr": "Storm Sculpture",
      "level": 84,
      "arcana": "Star",
      "elems": [
        "-",
        "-",
        "rs",
        "-",
        "-",
        "ab",
        "nu",
        "-",
        "-",
        "nu"
      ],
      "skills": {
        "Vacuum Wave": 0,
        "Nocturnal Flash": 0,
        "Debilitate": 0,
        "Abyssal Eye": 86,
        "Wind Amp": 87,
        "Spirit Drain": 88,
        "Repel Wind": 89
      },
      "stats": [
        51,
        59,
        52,
        56,
        41
      ],
      "trait": "Mouth of Savoring",
      "note": "Only available after 1/12",
      "background": "An evil god of the Cthulhu Mythos and one of the eldritch deities known as Great Old Ones. It wields great power over wind. Also called \"The Unspeakable\" and \"The King in Yellow."
    },
    "Hecatoncheires": {
      "inherits": "Physical",
      "item": "Swift Strike Belt",
      "itemr": "Gatling Belt",
      "level": 42,
      "arcana": "Hanged",
      "elems": [
        "-",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "nu"
      ],
      "skills": {
        "Swift Strike": 0,
        "Regenerate 2": 0,
        "Tarukaja": 0,
        "Endure": 43,
        "Rebellion": 45,
        "Fortified Moxy": 46,
        "Gatling Blows": 49
      },
      "stats": [
        35,
        22,
        27,
        23,
        26
      ],
      "trait": "Gluttonmouth",
      "background": "Giants born from Uranus and Gaia. The name means \"those with a hundred arms.\" During the war of the Titans, Zeus freed them from the Underworld to help him obtain victory."
    },
    "Hell Biker": {
      "special": true,
      "inherits": "Fire",
      "item": "Black Jacket",
      "itemr": "Dark Jacket",
      "level": 37,
      "arcana": "Death",
      "elems": [
        "-",
        "-",
        "rp",
        "-",
        "-",
        "rs",
        "-",
        "-",
        "wk",
        "-"
      ],
      "skills": {
        "Mudoon": 0,
        "Agilao": 0,
        "Speed Master": 0,
        "Tentarafoo": 38,
        "Fire Boost": 39,
        "Maragion": 40,
        "Mamudoon": 41
      },
      "stats": [
        23,
        24,
        24,
        30,
        17
      ],
      "trait": "Internal Hypnosis",
      "background": "A motorcyclist whose violent nature turned him into a demon. His anger with himself and the world causes him to lash out, that everyone else would suffer as well."
    },
    "High Pixie": {
      "inherits": "Healing",
      "item": "Magaru",
      "itemr": "Garula",
      "skillCard": true,
      "level": 16,
      "arcana": "Fool",
      "elems": [
        "-",
        "wk",
        "-",
        "-",
        "rs",
        "rs",
        "-",
        "wk",
        "-",
        "-"
      ],
      "skills": {
        "Garu": 0,
        "Media": 0,
        "Dormina": 0,
        "Diarama": 19,
        "Pulinpa": 20,
        "Magaru": 22
      },
      "stats": [
        8,
        14,
        10,
        13,
        10
      ],
      "trait": "Skillful Combo",
      "area": "Kaitul",
      "floor": "L1-3",
      "background": "The leader of a swarm of pixies. Any pixie in a leadership role or with remarkable power is called by this name."
    },
    "Hope Diamond": {
      "rare": true,
      "item": "Hope Diamond",
      "itemr": "Hope Diamond R",
      "level": 40,
      "arcana": "Death",
      "elems": [
        "rs",
        "rs",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Auto-Mataru": 0,
        "Auto-Maraku": 0,
        "Auto-Masuku": 0,
        "Endure": 0,
        "Regenerate 2": 0,
        "Invigorate 2": 0,
        "High Counter": 0,
        "Fast Heal": 0,
        "Internal Hypnosis": 0,
        "Striking Weight": 0,
        "Retaliating Body": 0
      },
      "stats": [
        40,
        40,
        40,
        40,
        40
      ],
      "trait": "Ultimate Vessel",
      "area": "Sheriruth",
      "floor": "L7-9. 11-13 (after Palace 7)",
      "background": "Unlike its name suggests, the Hope Diamond is a cursed jewel that brings ruin from one owner to the next. A few supposed victims include King Louis XVI and his wife, Marie Antoinette."
    },
    "Horus": {
      "inherits": "Almighty",
      "item": "Hallowed Ring",
      "itemr": "Spiral Hallowed Ring",
      "level": 47,
      "arcana": "Sun",
      "elems": [
        "-",
        "-",
        "wk",
        "-",
        "nu",
        "-",
        "-",
        "-",
        "rp",
        "-"
      ],
      "skills": {
        "Megidola": 0,
        "Diarama": 0,
        "Kougaon": 0,
        "Flash Bomb": 49,
        "Masukukaja": 50,
        "Hamaon": 51,
        "Hama Boost": 52
      },
      "stats": [
        30,
        32,
        29,
        35,
        22
      ],
      "trait": "Potent Hypnosis",
      "background": "An ancient god of Egypt whose eyes are the sun and moon. Revered by some as the chief god, he is often depicted as a hawk or a falcon."
    },
    "Hua Po": {
      "inherits": "Fire",
      "item": "Ember Ring",
      "itemr": "Spiral Ember Ring",
      "level": 9,
      "arcana": "Hanged",
      "elems": [
        "-",
        "wk",
        "rp",
        "wk",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Agi": 0,
        "Dormina": 0,
        "Tarunda": 11,
        "Resist Forget": 12,
        "Maragi": 13,
        "Burn Boost": 15
      },
      "stats": [
        4,
        10,
        4,
        8,
        8
      ],
      "trait": "Thermal Conduct",
      "area": "Chemdah",
      "floor": "L1-3",
      "background": "A spirit of Chinese folklore who dwells in trees once used for hangings. She is smaller than a human and cannot speak, but her voice is said to be as clear and as beautiful as a bird's song."
    },
    "Incubus": {
      "inherits": "Ailment",
      "item": "Dream Needle",
      "itemr": "Dormin Rush",
      "skillCard": true,
      "level": 5,
      "arcana": "Devil",
      "elems": [
        "-",
        "-",
        "wk",
        "-",
        "rs",
        "-",
        "-",
        "-",
        "wk",
        "-"
      ],
      "skills": {
        "Life Drain": 0,
        "Dream Needle": 0,
        "Dormina": 7,
        "Tarunda": 8,
        "Dodge Curse": 9
      },
      "stats": [
        4,
        6,
        4,
        5,
        3
      ],
      "trait": "Draining Mouth",
      "area": "Aiyatsbus",
      "floor": "L2, 3 & 6",
      "background": "A male demon of European lore in medieval times. They visit sleeping women and have sexual intercourse with them. The resulting children become witches or wizards."
    },
    "Inugami": {
      "inherits": "Fire",
      "item": "Giant Slice",
      "itemr": "Rising Slash",
      "skillCard": true,
      "level": 14,
      "arcana": "Hanged",
      "elems": [
        "-",
        "nu",
        "nu",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "nu"
      ],
      "skills": {
        "Pulinpa": 0,
        "Tarukaja": 0,
        "Giant Slice": 0,
        "Dream Needle": 15,
        "Lucky Punch": 17,
        "Brain Shake": 18,
        "Confuse Boost": 19
      },
      "stats": [
        11,
        9,
        9,
        12,
        8
      ],
      "trait": "Foul Odor",
      "area": "Chemdah",
      "floor": "L4, 6 & 7",
      "background": "A dog spirit said to possess people in Japanese lore. Those possessed are in a state of \"inu-tsuki\" and lose consciousness. Onmyoji use Inugami as familiars."
    },
    "Ippon-Datara": {
      "inherits": "Physical",
      "item": "Sledgehammer",
      "itemr": "Flash Bomb",
      "skillCard": true,
      "level": 13,
      "arcana": "Hermit",
      "elems": [
        "-",
        "rs",
        "rs",
        "wk",
        "-",
        "rp",
        "-",
        "-",
        "rs",
        "rs"
      ],
      "skills": {
        "Sledgehammer": 0,
        "Tarukaja": 0,
        "Resist Dizzy": 0,
        "Rampage": 15,
        "Sharp Student": 17,
        "Counter": 18
      },
      "stats": [
        11,
        7,
        14,
        6,
        8
      ],
      "trait": "Striking Weight",
      "area": "Chemdah",
      "floor": "L1-4",
      "background": "A one-eyed, one-legged monster said to live deep in the mountains of Kumano, Japan. It's believed to be the degraded blacksmith god, Ame no Me-Hitotsu no Kami."
    },
    "Ishtar": {
      "inherits": "Healing",
      "item": "Spiral Thunder Ring",
      "itemr": "Goddess Horn",
      "level": 85,
      "arcana": "Lovers",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "nu",
        "wk",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Mediarahan": 0,
        "Samarecarm": 0,
        "Absorb Wind": 0,
        "Insta-Heal": 87,
        "Maziodyne": 88,
        "Spell Master": 89,
        "Salvation": 90
      },
      "stats": [
        48,
        59,
        49,
        58,
        48
      ],
      "trait": "Grace of Mother",
      "max": true,
      "background": "The revered goddess of war and love in ancient Mesopotamia. She seduced many men to their doom. When Gilgamesh, the hero, spurned her, she murdered his best friend, Enkidu."
    },
    "Isis": {
      "inherits": "Healing",
      "item": "Kouga",
      "itemr": "Makouga",
      "skillCard": true,
      "level": 26,
      "arcana": "Priestess",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "-",
        "nu",
        "-"
      ],
      "skills": {
        "Makouga": 0,
        "Mahama": 0,
        "Diarama": 0,
        "Resist Despair": 27,
        "Hamaon": 29,
        "Hama Boost": 30,
        "Makarakarn": 32
      },
      "stats": [
        14,
        20,
        17,
        18,
        16
      ],
      "trait": "Savior Bloodline",
      "area": "Akzeriyyuth",
      "floor": "L5-7, 9-11",
      "background": "Osiris's wife as well as his younger sister. Upon the death of her husband, she revived him with her incredible magic power. Isis is seen at many gravesites as the guardian goddess of the dead."
    },
    "Jack Frost": {
      "inherits": "Ice",
      "item": "Frost Hood",
      "itemr": "Frost Ace Hood",
      "level": 11,
      "arcana": "Magician",
      "elems": [
        "-",
        "-",
        "wk",
        "nu",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Bufu": 0,
        "Ice Break": 0,
        "Baisudi": 0,
        "Mabufu": 12,
        "Rakunda": 13,
        "Freeze Boost": 15
      },
      "stats": [
        8,
        9,
        7,
        9,
        7
      ],
      "trait": "Frigid Bloodline",
      "area": "Chemdah",
      "floor": "L4 & 6",
      "background": "A winter fairy of European descent. He leaves ice patterns on windows and nips people's noses. Though normally an innocent creature, he will freeze his victims to death if provoked."
    },
    "Jack-o'-Lantern": {
      "inherits": "Fire",
      "item": "Pumpkin Bomb",
      "itemr": "Pumpkin Buster",
      "level": 2,
      "arcana": "Magician",
      "elems": [
        "-",
        "-",
        "ab",
        "wk",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Agi": 0,
        "Rakunda": 0,
        "Sharp Student": 4,
        "Dazzler": 5,
        "Resist Sleep": 7
      },
      "stats": [
        2,
        3,
        3,
        3,
        2
      ],
      "trait": "Thermal Conduct",
      "area": "Qimranut / Aiyatsbus",
      "floor": "Any / L1",
      "background": "A drunkard who tricked the Devil out of taking him to Hell. When refused entry to Heaven, he was forced to wander the earth with only an ember as a light."
    },
    "Jatayu": {
      "inherits": "Wind",
      "item": "Speed Master",
      "itemr": "Auto-Masuku",
      "skillCard": true,
      "level": 51,
      "arcana": "Hanged",
      "elems": [
        "-",
        "-",
        "-",
        "rs",
        "-",
        "rp",
        "-",
        "wk",
        "rs",
        "-"
      ],
      "skills": {
        "Garudyne": 0,
        "Masukukaja": 0,
        "Nocturnal Flash": 0,
        "Dizzy Boost": 52,
        "Wind Amp": 54,
        "Magarudyne": 55,
        "Speed Master": 57
      },
      "stats": [
        31,
        34,
        29,
        36,
        30
      ],
      "trait": "Wind Bloodline",
      "background": "The Hindu king of birds. In the Ramayana, he fought bravely against Ravana in an attempt to save Site, Rama's wife and the 7th avatar of Vishnu, but lost."
    },
    "Jikokuten": {
      "inherits": "Physical",
      "item": "Assault Belt",
      "itemr": "Rush Belt",
      "level": 22,
      "arcana": "Temperance",
      "elems": [
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "rs",
        "wk"
      ],
      "skills": {
        "Assault Dive": 0,
        "Defense Master": 0,
        "Rakunda": 0,
        "Kill Rush": 24,
        "Counter": 25,
        "Matarukaja": 27,
        "Adverse Resolve": 28
      },
      "stats": [
        18,
        11,
        16,
        15,
        13
      ],
      "trait": "Internal Hypnosis",
      "background": "Also known as Dhritarashtra, he is the protector of the East, and is one of the four Heavenly Kings of Buddhist origin. He helps maintain the security of the nation."
    },
    "Kaiwan": {
      "inherits": "Almighty",
      "item": "Makajam",
      "itemr": "Makajamaon",
      "skillCard": true,
      "level": 36,
      "arcana": "Star",
      "elems": [
        "-",
        "nu",
        "-",
        "-",
        "-",
        "-",
        "nu",
        "wk",
        "-",
        "-"
      ],
      "skills": {
        "Makajam": 0,
        "Psio": 0,
        "Forget Boost": 37,
        "Speed Master": 38,
        "Makajamaon": 39,
        "Psiodyne": 40,
        "Marakunda": 41
      },
      "stats": [
        23,
        26,
        24,
        22,
        20
      ],
      "trait": "Psychic Bloodline",
      "area": "Adyeshach",
      "floor": "L10-12",
      "background": "A god in Assyrian legend, his name is interchangeable with Sakkut, another incarnation of the star-god, Saturn."
    },
    "Kali": {
      "inherits": "Fire",
      "item": "Null Psy",
      "itemr": "Repel Psy",
      "skillCard": true,
      "level": 63,
      "arcana": "Empress",
      "elems": [
        "-",
        "rp",
        "nu",
        "-",
        "-",
        "-",
        "rp",
        "-",
        "-",
        "rs"
      ],
      "skills": {
        "Heat Wave": 0,
        "Bloodbath": 0,
        "Brave Blade": 0,
        "Charge": 65,
        "High Counter": 66,
        "Repel Psy": 67,
        "Vorpal Blade": 68
      },
      "stats": [
        43,
        41,
        39,
        39,
        34
      ],
      "trait": "Relentless",
      "background": "A goddess of death and destruction. She is said to be another face of Parvati. She is violent, wears a string of skulls, and carries bloody weapons, but she also blesses her followers."
    },
    "Kelpie": {
      "inherits": "Wind",
      "item": "Garu",
      "itemr": "Magaru",
      "skillCard": true,
      "level": 6,
      "arcana": "Strength",
      "elems": [
        "-",
        "-",
        "-",
        "rs",
        "wk",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Garu": 0,
        "Lunge": 0,
        "Resist Brainwash": 8,
        "Sukukaja": 9,
        "Terror Claw": 10
      },
      "stats": [
        5,
        5,
        5,
        6,
        4
      ],
      "trait": "Striking Weight",
      "area": "Aiyatsbus",
      "floor": "L3",
      "background": "A horse-like fairy of Celtic folklore that lives by the water. It drowns those who ride on it, but is a valuable mount if you can tame it."
    },
    "Kikuri-Hime": {
      "inherits": "Healing",
      "item": "Energy Drop",
      "itemr": "Energy Shower",
      "skillCard": true,
      "level": 40,
      "arcana": "Priestess",
      "elems": [
        "-",
        "-",
        "wk",
        "-",
        "-",
        "nu",
        "-",
        "-",
        "rs",
        "-"
      ],
      "skills": {
        "Lullaby": 0,
        "Marakukaja": 0,
        "Energy Drop": 0,
        "Mediarama": 41,
        "Tetraja": 43,
        "Divine Grace": 45
      },
      "stats": [
        22,
        31,
        24,
        28,
        22
      ],
      "trait": "Relief Bloodline",
      "area": "Sheriruth",
      "floor": "L3-5 (before Palace 7) / L2 & 3 (after Palace 7)",
      "background": "The goddess of life in Shinto myth. She once mediated between Izanagi and Izanami during their confrontation in Yomi, the land of the dead."
    },
    "Kin-Ki": {
      "inherits": "Physical",
      "item": "Vajra Blast",
      "itemr": "Vicious Strike",
      "skillCard": true,
      "level": 25,
      "arcana": "Chariot",
      "elems": [
        "rs",
        "rp",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Vajra Blast": 0,
        "Rakukaja": 0,
        "Regenerate 1": 0,
        "Dodge Psy": 27,
        "Sledgehammer": 28,
        "Bad Beat": 30,
        "Counterstrike": 31
      },
      "stats": [
        21,
        13,
        21,
        15,
        12
      ],
      "trait": "Retaliating Body",
      "area": "Kaitul",
      "floor": "L4, 5, 7-9",
      "background": "One of the four oni controlled by Fujiwara no Chikata, its body is so hard that no weapons can penetrate it."
    },
    "King Frost": {
      "inherits": "Ice",
      "item": "King Frost Cape",
      "itemr": "King Frost Cape EX",
      "level": 61,
      "arcana": "Emperor",
      "elems": [
        "-",
        "-",
        "-",
        "ab",
        "-",
        "-",
        "-",
        "-",
        "nu",
        "-"
      ],
      "skills": {
        "Bufudyne": 0,
        "Ice Break": 0,
        "Megaton Raid": 0,
        "Freeze Boost": 62,
        "Mabufudyne": 64,
        "Concentrate": 65,
        "Ice Amp": 67
      },
      "stats": [
        40,
        44,
        43,
        29,
        34
      ],
      "trait": "Frigid Bloodline",
      "area": "Sheriruth",
      "floor": "L8, 11, 12, 13 (after Palace 7)",
      "background": "The king of snow who rules over an infinite number of Jack Frosts. He has the power to freeze the entire world, but is unaware of it due to his naive personality."
    },
    "Kodama": {
      "inherits": "Ailment",
      "item": "Psy Ring",
      "itemr": "Spiral Psy Ring",
      "level": 11,
      "arcana": "Star",
      "elems": [
        "-",
        "-",
        "wk",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Garu": 0,
        "Rakunda": 0,
        "Psi": 12,
        "Evil Touch": 13,
        "Tarukaja": 14,
        "Fear Boost": 15,
        "Resist Fear": 17
      },
      "stats": [
        7,
        11,
        8,
        10,
        4
      ],
      "trait": "Skillful Combo",
      "area": "Aiyatsbus",
      "floor": "L1-3",
      "background": "Japanese plant spirits born from trees that have lived for a 100 years. Cutting down one of these trees is said to cause misfortune."
    },
    "Koh-i-Noor": {
      "rare": true,
      "item": "Koh-i-Noor",
      "itemr": "Koh-i-Noor R",
      "level": 25,
      "arcana": "Priestess",
      "elems": [
        "rs",
        "wk",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Dodge Fire": 0,
        "Dodge Ice": 0,
        "Dodge Wind": 0,
        "Dodge Elec": 0,
        "Dodge Psy": 0,
        "Dodge Nuke": 0,
        "Dodge Bless": 0,
        "Dodge Curse": 0,
        "Crisis Control": 0,
        "Bloodstained Eyes": 0,
        "Rare Antibody": 0,
      },
      "stats": [
        25,
        25,
        25,
        25,
        25
      ],
      "trait": "Ultimate Vessel",
      "area": "Adyeshach",
      "floor": "L1-4, 6-8, 10-12",
      "background": "Once called the world's largest diamond, it was cut when it came to the British royal family. It is said to bring bad luck to any man who wears it, so only the females have ever adorned it."
    },
    "Kohryu": {
      "special": true,
      "inherits": "Psy",
      "item": "Spiral Mystic Ring",
      "itemr": "Dragon's Heart",
      "level": 76,
      "arcana": "Hierophant",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "rp",
        "-",
        "nu",
        "wk",
        "nu",
        "-"
      ],
      "skills": {
        "Psycho Force": 0,
        "Mediarahan": 0,
        "Mapsiodyne": 0,
        "Life Aid": 78,
        "Concentrate": 79,
        "Psy Amp": 80,
        "Spell Master": 82
      },
      "stats": [
        43,
        51,
        50,
        53,
        38
      ],
      "trait": "Universal Law",
      "max": true,
      "background": "Known as the Gold Dragon, it reigns over the Ssu-Ling, celestial creatures of Chinese lore. It is located at the center of the four beasts."
    },
    "Koppa Tengu": {
      "inherits": "Wind",
      "item": "Breeze Ring",
      "itemr": "Spiral Breeze Ring",
      "level": 11,
      "arcana": "Temperance",
      "elems": [
        "-",
        "-",
        "-",
        "wk",
        "-",
        "rs",
        "-",
        "-",
        "wk",
        "-"
      ],
      "skills": {
        "Garu": 0,
        "Sukukaja": 0,
        "Growth 1": 12,
        "Taunt": 13,
        "Rage Boost": 14,
        "Wage War": 15
      },
      "stats": [
        7,
        8,
        8,
        11,
        6
      ],
      "trait": "Intense Focus",
      "area": "Chemdah",
      "floor": "L6 & 7",
      "background": "A type of tengu. Their spiritual power is weaker than other tengu, so they are much smaller. They are said to be the reincarnations of long-lived wolves."
    },
    "Koropokkuru": {
      "inherits": "Ice",
      "item": "Bufu",
      "itemr": "Mabufu",
      "skillCard": true,
      "level": 9,
      "arcana": "Hermit",
      "elems": [
        "-",
        "-",
        "wk",
        "rs",
        "-",
        "rs",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Makajam": 0,
        "Bufu": 0,
        "Dodge Ice": 11,
        "Sukunda": 12,
        "Fire Wall": 13,
        "Mabufu": 14,
        "Climate Decorum": 15
      },
      "stats": [
        5,
        8,
        6,
        9,
        6
      ],
      "trait": "Foul Odor",
      "area": "Chemdah",
      "floor": "L2 & 3",
      "background": "Small human-like creatures, that have kind, calm personalities. Once coexisting with the Ainu people of Japan, there was a falling out at some point, and they disappeared."
    },
    "Koumokuten": {
      "inherits": "Physical",
      "item": "Regenerate 2",
      "itemr": "Regenerate 3",
      "skillCard": true,
      "level": 49,
      "arcana": "Hermit",
      "elems": [
        "rs",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "-",
        "rs",
        "-"
      ],
      "skills": {
        "Assault Dive": 0,
        "Regenerate 2": 0,
        "Revolution": 0,
        "Attack Master": 51,
        "Ice Wall": 52,
        "Enduring Soul": 54,
        "Deadly Fury": 55
      },
      "stats": [
        37,
        29,
        34,
        29,
        25
      ],
      "trait": "Gluttonmouth",
      "background": "Also known as Virupaksha, he is the protector of the West, and is one of the four Heavenly Kings of Buddhist origin. He keeps a close watch on the world with his sharp gaze."
    },
    "Kumbhanda": {
      "inherits": "Ailment",
      "item": "Terror Claw",
      "itemr": "Bloodbath",
      "skillCard": true,
      "level": 42,
      "arcana": "Hermit",
      "elems": [
        "-",
        "-",
        "nu",
        "-",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "rs"
      ],
      "skills": {
        "Magarula": 0,
        "Stagnant Air": 0,
        "Bloodbath": 0,
        "Tempest Slash": 43,
        "Dekaja": 45,
        "Fear Boost": 46,
        "Revolution": 47
      },
      "stats": [
        25,
        30,
        25,
        27,
        26
      ],
      "trait": "Rare Antibody",
      "area": "Sheriruth",
      "floor": "L8, 9, 11-13 (before Palace 7) / L4 & 5 (after Palace 7)",
      "background": "A Buddhist demon said to drain human life energy. He has dark skin, stands 3 meters tall, and sometimes changes his shape to a gourd. Known to have once served Rudra, the god of storms."
    },
    "Kurama Tengu": {
      "inherits": "Wind",
      "item": "Wind Ring",
      "itemr": "Spiral Wind Ring",
      "level": 31,
      "arcana": "Hermit",
      "elems": [
        "-",
        "-",
        "-",
        "nu",
        "-",
        "rp",
        "-",
        "-",
        "rs",
        "rs"
      ],
      "skills": {
        "Double Shot": 0,
        "Masukunda": 0,
        "Magarula": 0,
        "Wind Boost": 32,
        "Brain Jack": 34,
        "Growth 2": 36
      },
      "stats": [
        20,
        19,
        21,
        24,
        16
      ],
      "trait": "Skillful Combo",
      "area": "Sheriruth",
      "floor": "L11 (after Palace 7)",
      "background": "A type of tengu said to have lived on Mt. Kurama in Kyoto. The most powerful and well-known of the tengu, they have the power to fend off disease and bring good fortune."
    },
    "Kushinada": {
      "inherits": "Healing",
      "item": "Cure Charm",
      "itemr": "Spiral Cure Charm",
      "level": 42,
      "arcana": "Lovers",
      "elems": [
        "-",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "wk",
        "rp",
        "-"
      ],
      "skills": {
        "Hysterical Slap": 0,
        "Psy Wall": 0,
        "Mediarama": 0,
        "Matarukaja": 44,
        "Null Confuse": 45,
        "Wind Wall": 46,
        "Amrita Shower": 47,
        "Null Ice": 48
      },
      "stats": [
        24,
        30,
        26,
        28,
        25
      ],
      "trait": "Savior Bloodline",
      "area": "Sheriruth",
      "floor": "L5, 7-9 (before Palace 7) / L3 & 4 (after Palace 7)",
      "background": "A Japanese goddess. She governs fields and fertility. All of her sisters were sacrificed to Yamata-no-Orochi, but she was saved by Susano-o and became his wife."
    },
    "Kushi Mitama": {
      "inherits": "Healing",
      "item": "Aid Charm",
      "itemr": "Spiral Aid Charm",
      "level": 12,
      "arcana": "Councillor",
      "elems": [
        "-",
        "-",
        "wk",
        "-",
        "-",
        "rs",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Dia": 0,
        "Media": 0,
        "Makajam": 0,
        "Regenerate 1": 13,
        "Wind Wall": 14,
        "Forget Boost": 16
      },
      "stats": [
        7,
        11,
        9,
        8,
        8
      ],
      "trait": "Gluttonmouth",
      "background": "One of the four aspects of Shinto thought, it uses its power to bring good omens. It is said to aid in one's wisdom, observation, and skill, and can mend fractured paths."
    },
    "Lachesis": {
      "inherits": "Ice",
      "item": "Snow Ring",
      "itemr": "Spiral Snow Ring",
      "level": 35,
      "arcana": "Fortune",
      "elems": [
        "-",
        "-",
        "-",
        "nu",
        "wk",
        "rs",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Mabaisudi": 0,
        "Bufula": 0,
        "Growth 2": 0,
        "Marakukaja": 36,
        "Elec Wall": 37,
        "Mabufula": 39,
        "Ice Boost": 41
      },
      "stats": [
        18,
        26,
        22,
        25,
        21
      ],
      "trait": "Internal Hypnosis",
      "background": "The middle sister of the three Moirae Sisters of Greek legend. She is the apportioner, measuring the thread which determines each person's lifespan."
    },
    "Lakshmi": {
      "inherits": "Healing",
      "item": "Amrita Charm",
      "itemr": "Spiral Amrita Charm",
      "level": 69,
      "arcana": "Fortune",
      "elems": [
        "-",
        "-",
        "wk",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "rs",
        "-"
      ],
      "skills": {
        "Lullaby": 0,
        "Diarahan": 0,
        "Bufudyne": 0,
        "Mediarahan": 70,
        "Climate Decorum": 71,
        "Amrita Shower": 72,
        "Life Aid": 74
      },
      "stats": [
        39,
        49,
        41,
        47,
        38
      ],
      "trait": "Wealth of Lotus",
      "max": true,
      "background": "The Hindu goddess of beauty and good fortune, Vishnu's wife and Kama's mother. She is the goddess of love, believed to have been born from an ocean of milk."
    },
    "Lamia": {
      "inherits": "Fire",
      "item": "Rakukaja",
      "itemr": "Marakukaja",
      "skillCard": true,
      "level": 26,
      "arcana": "Empress",
      "elems": [
        "-",
        "-",
        "-",
        "wk",
        "rs",
        "-",
        "-",
        "wk",
        "-",
        "nu"
      ],
      "skills": {
        "Mudo": 0,
        "Rakukaja": 0,
        "Rising Slash": 0,
        "Ominous Words": 27,
        "Foul Breath": 28,
        "Mamudo": 30,
        "Despair Boost": 31
      },
      "stats": [
        21,
        15,
        18,
        19,
        12
      ],
      "trait": "Foul Odor",
      "area": "Akzeriyyuth",
      "floor": "L3, 5-7, 9-11",
      "background": "A serpentine woman of Greek myth, she was once the queen of Libya. Zeus's jealous wife, Hera, killed her children, causing her to go mad and transform into a monster."
    },
    "Leanan Sidhe": {
      "inherits": "Almighty",
      "item": "Mudo",
      "itemr": "Mamudo",
      "skillCard": true,
      "level": 19,
      "arcana": "Lovers",
      "elems": [
        "-",
        "-",
        "wk",
        "-",
        "-",
        "rs",
        "rs",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Rakunda": 0,
        "Psio": 0,
        "Marin Karin": 20,
        "Mamudo": 21,
        "Mapsi": 22,
        "Eiga": 23
      },
      "stats": [
        9,
        17,
        12,
        16,
        10
      ],
      "trait": "Skillful Technique",
      "area": "Kaitul",
      "floor": "L3-5",
      "background": "A beautiful fairy of Irish lore that yearns for the love of a human man. She drains the life of her lovers in return for granting them artistic inspiration."
    },
    "Legion": {
      "inherits": "Psy",
      "item": "Foul Breath",
      "itemr": "Stagnant Air",
      "skillCard": true,
      "level": 38,
      "arcana": "Fool",
      "elems": [
        "rs",
        "-",
        "rs",
        "-",
        "-",
        "-",
        "rs",
        "-",
        "wk",
        "nu"
      ],
      "skills": {
        "Bloodbath": 0,
        "Life Drain": 0,
        "Evil Smile": 0,
        "Foul Breath": 39,
        "Tetra Break": 40,
        "Null Dizzy": 42,
        "Eigaon": 45
      },
      "stats": [
        24,
        24,
        30,
        23,
        20
      ],
      "trait": "Draining Mouth",
      "area": "Adyeshach",
      "floor": "L1-4",
      "background": "The spirit who said, \"For we are many,\" in ancient scriptures. The name comes from the Roman military term for an army unit of 3,000 to 6,000 men."
    },
    "Lilim": {
      "inherits": "Ice",
      "item": "Ice Boost",
      "itemr": "Ice Amp",
      "skillCard": true,
      "level": 32,
      "arcana": "Devil",
      "elems": [
        "-",
        "-",
        "-",
        "rs",
        "-",
        "wk",
        "-",
        "-",
        "wk",
        "nu"
      ],
      "skills": {
        "Bufula": 0,
        "Lullaby": 0,
        "Freeze Boost": 0,
        "Masukunda": 34,
        "Dodge Bless": 35,
        "Spirit Drain": 36,
        "Mabufula": 37
      },
      "stats": [
        17,
        23,
        18,
        25,
        20
      ],
      "trait": "Cold-Blooded",
      "area": "Adyeshach",
      "floor": "L6-8, 10-12",
      "background": "A demon who tempts sleeping men and attacks infants. She is the daughter of the demoness, Lilith. Like her mother, she drains men of their essence."
    },
    "Lilith": {
      "inherits": "Almighty",
      "item": "Null Nuke",
      "itemr": "Repel Nuke",
      "skillCard": true,
      "level": 60,
      "arcana": "Moon",
      "elems": [
        "-",
        "-",
        "wk",
        "rp",
        "-",
        "-",
        "-",
        "rp",
        "-",
        "nu"
      ],
      "skills": {
        "Mabufudyne": 0,
        "Makarakarn": 0,
        "Freidyne": 0,
        "Mafreidyne": 62,
        "Spirit Drain": 63,
        "Freeze Boost": 64,
        "Nuke Amp": 65
      },
      "stats": [
        33,
        43,
        37,
        39,
        35
      ],
      "trait": "Mighty Gaze",
      "area": "Da'at",
      "floor": "All",
      "background": "Said to have been Adam's first wife, she desired to be his equal and refused to obey him. She was cast out of Eden and became a demon of the night. She is the mother of the demoness, Lilim."
    },
    "Loa": {
      "inherits": "Curse",
      "item": "Ominous Words",
      "itemr": "Abysmal Surge",
      "skillCard": true,
      "level": 70,
      "arcana": "Hermit",
      "elems": [
        "-",
        "-",
        "rs",
        "-",
        "nu",
        "-",
        "wk",
        "rs",
        "wk",
        "-"
      ],
      "skills": {
        "Mamudoon": 0,
        "Abysmal Surge": 0,
        "Life Drain": 0,
        "Maeigaon": 72,
        "Absorb Curse": 73,
        "Spirit Drain": 74,
        "Fortify Spirit": 75
      },
      "stats": [
        42,
        47,
        43,
        46,
        39
      ],
      "trait": "Draining Mouth",
      "note": "Only available after 1/12",
      "background": "A general name for gods and spirits of Vodum. The gods that actually affect human lives are called by this name. Those with negative power are said to be able to kill with a fatal curse."
    },
    "Lucifer": {
      "special": true,
      "inherits": "Almighty",
      "item": "Tyrant Pistol",
      "itemr": "Tyrant Pistol EX",
      "level": 93,
      "arcana": "Star",
      "elems": [
        "nu",
        "nu",
        "rs",
        "rs",
        "rs",
        "rs",
        "-",
        "-",
        "wk",
        "ab"
      ],
      "skills": {
        "Gigantomachia": 0,
        "Absorb Curse": 0,
        "Morning Star": 94,
        "Spell Master": 95,
        "Heat Riser": 96,
        "Repel Bless": 97,
        "Insta-Heal": 98,
        "Absorb Phys": 99
      },
      "stats": [
        61,
        59,
        59,
        56,
        51
      ],
      "trait": "Allure of Wisdom",
      "max": true,
      "background": "A fallen Judeo-Christian angel, he lead a rebellion with an army of angels against God and lost. He waits in Hell for his chance to challenge God once more and strike him down."
    },
    "Macabre": {
      "inherits": "Curse",
      "item": "Bloodbath",
      "itemr": "Death Scythe",
      "skillCard": true,
      "level": 73,
      "arcana": "Hanged",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "rs",
        "-",
        "-",
        "-",
        "wk",
        "nu"
      ],
      "skills": {
        "Death Scythe": 0,
        "Evil Smile": 0,
        "Mamudoon": 0,
        "Auto-Masuku": 74,
        "Ghastly Wail": 75,
        "Myriad Slashes": 76,
        "Ali Dance": 78
      },
      "stats": [
        48,
        49,
        42,
        48,
        39
      ],
      "trait": "Ailment Hunter",
      "note": "Only available after 1/12",
      "background": "An evil spirit with the same name as the Death appearing in medieval oratorios. It is depicted as a skeleton with a black cloak and a sickle to reap humans. It dances the feared \"Dance of Death."
    },
    "Mada": {
      "inherits": "Fire",
      "item": "Spiral Inferno Ring",
      "itemr": "Dark Flame Band",
      "level": 90,
      "arcana": "Tower",
      "elems": [
        "-",
        "-",
        "ab",
        "wk",
        "-",
        "-",
        "rs",
        "nu",
        "-",
        "-"
      ],
      "skills": {
        "Inferno": 0,
        "Fire Amp": 0,
        "Burn Boost": 0,
        "Fortify Spirit": 91,
        "Blazing Hell": 92,
        "Amrita Shower": 93,
        "Enduring Soul": 95,
        "Spell Master": 96
      },
      "stats": [
        55,
        54,
        61,
        59,
        48
      ],
      "trait": "Drunken Passion",
      "max": true,
      "background": "A giant Hindu monster. Its mouth is so enormous it can swallow the Earth and the heavens in one bite. Its name means \"He who Intoxicates\"."
    },
    "Makami": {
      "inherits": "Nuclear",
      "item": "Frei",
      "itemr": "Mafrei",
      "skillCard": true,
      "level": 15,
      "arcana": "Temperance",
      "elems": [
        "-",
        "nu",
        "-",
        "-",
        "wk",
        "rs",
        "-",
        "rs",
        "nu",
        "-"
      ],
      "skills": {
        "Double Fangs": 0,
        "Frei": 0,
        "Energy Drop": 0,
        "Mafrei": 17,
        "Makajam": 18,
        "Resist Despair": 19,
        "Dodge Elec": 20
      },
      "stats": [
        13,
        12,
        8,
        11,
        8
      ],
      "trait": "Skillful Technique",
      "area": "Chemdah",
      "floor": "L6 & 7",
      "background": "A divine wolf god in Japanese folklore, also written as \"Oguchi-no-Magami.\" It is often drawn on prayer boards to prevent fires and thefts, but it is also feared as a human-eater."
    },
    "Mandrake": {
      "inherits": "Electric",
      "item": "Sukunda",
      "itemr": "Masukunda",
      "skillCard": true,
      "level": 3,
      "arcana": "Death",
      "elems": [
        "-",
        "-",
        "wk",
        "-",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Pulinpa": 0,
        "Energy Drop": 0,
        "Lunge": 4,
        "Sukunda": 5
      },
      "stats": [
        2,
        3,
        3,
        4,
        4
      ],
      "trait": "Savior Bloodline",
      "area": "Qimranut / Aiyatsbus",
      "floor": "All / L1",
      "background": "A magical plant whose roots look like a human. They are valued for their healing properties in potions, but the screams they let out when pulled from the ground will kill anyone who hears them."
    },
    "Mara": {
      "inherits": "Psy",
      "item": "Mapsiodyne",
      "itemr": "Psycho Force",
      "skillCard": true,
      "level": 73,
      "arcana": "Tower",
      "elems": [
        "-",
        "nu",
        "ab",
        "-",
        "-",
        "-",
        "rp",
        "-",
        "rs",
        "nu"
      ],
      "skills": {
        "Mapsiodyne": 0,
        "One-shot Kill": 0,
        "Tetra Break": 0,
        "Charge": 74,
        "Brain Buster": 76,
        "Psy Amp": 77,
        "Psycho Force": 78
      },
      "stats": [
        51,
        43,
        43,
        45,
        44
      ],
      "trait": "Mighty Gaze",
      "area": "Da'at",
      "floor": "All",
      "background": "A Buddhist demon that represents the fear of death. Also known as \"The Evil One,\" he sent his daughters to tempt Buddha during his meditations."
    },
    "Maria": {
      "inherits": "Healing",
      "item": "Spiral Heal Charm",
      "itemr": "Rosary of Purity",
      "level": 93,
      "arcana": "Faith",
      "elems": [
        "-",
        "-",
        "wk",
        "-",
        "rs",
        "nu",
        "-",
        "-",
        "ab",
        "-"
      ],
      "skills": {
        "Invigorate 3": 0,
        "Salvation": 0,
        "Holy Benevolence": 0,
        "Heat Riser": 94,
        "Holy Embrace": 96,
        "Angelic Grace": 97,
        "Holy Whisper": 98
      },
      "stats": [
        52,
        66,
        53,
        54,
        61
      ],
      "trait": "Ave Maria",
      "max": true,
      "background": "The maternal figure of Christianity. Gabriel informed her that she was to be the mother of Jesus. Some sects revere her as Virgin Mary, but other denominations do not focus on her."
    },
    "Matador": {
      "inherits": "Psy",
      "item": "Blood Red Capote",
      "itemr": "Bloodied Capote",
      "level": 17,
      "arcana": "Death",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "wk",
        "nu",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Psi": 0,
        "Null Dizzy": 0,
        "Sukukaja": 0,
        "Mapsi": 18,
        "Double Shot": 20,
        "Swift Strike": 22
      },
      "stats": [
        11,
        13,
        10,
        16,
        8
      ],
      "trait": "Potent Hypnosis",
      "background": "A master sportsman who entertains the audience in exchange for his own life: one mistake can mean death. Some believe that matadors who die while performing remain in this world."
    },
    "Melchizedek": {
      "inherits": "Bless",
      "item": "Hamaon",
      "itemr": "Mahamaon",
      "skillCard": true,
      "level": 58,
      "arcana": "Justice",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "rs",
        "-",
        "ab",
        "nu"
      ],
      "skills": {
        "Megaton Raid": 0,
        "Hamaon": 0,
        "Hama Boost": 59,
        "Revolution": 60,
        "Mahamaon": 62,
        "Matarukaja": 63,
        "God's Hand": 65
      },
      "stats": [
        37,
        32,
        40,
        39,
        33
      ],
      "trait": "Deathly Illness",
      "area": "Da'at",
      "floor": "All",
      "background": "An angel of Gnosticism, governing over peace and righteousness. Though said to be the savior of the angels, he used to be a human, the king of Salem."
    },
    "Metatron": {
      "special": true,
      "inherits": "Bless",
      "item": "Nataraja",
      "itemr": "Nataraja EX",
      "level": 89,
      "arcana": "Justice",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "wk",
        "rp",
        "ab",
        "ab",
        "-",
        "wk"
      ],
      "skills": {
        "Mahamaon": 0,
        "Sword Dance": 0,
        "Makougaon": 0,
        "Megidolaon": 91,
        "Hama Boost": 92,
        "Concentrate": 93,
        "Bless Amp": 94,
        "Divine Judgement": 95
      },
      "stats": [
        54,
        61,
        60,
        57,
        42
      ],
      "trait": "Martyr's Gift",
      "background": "The greatest angel in Judeo-Christian legend. He is known as the Voice of God or the Angel of Contracts. Despite his duty to maintain the world's order, he shows no mercy towards humanity."
    },
    "Michael": {
      "special": true,
      "inherits": "Almighty",
      "item": "Judge of Hell",
      "itemr": "Judge End",
      "level": 87,
      "arcana": "Judgement",
      "elems": [
        "-",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "rp",
        "nu"
      ],
      "skills": {
        "Divine Judgement": 0,
        "Mabufudyne": 0,
        "Debilitate": 0,
        "Sword Dance": 89,
        "Mahamaon": 90,
        "Megidolaon": 91,
        "Cosmic Flare": 92
      },
      "stats": [
        57,
        54,
        55,
        56,
        46
      ],
      "trait": "Potent Hypnosis",
      "background": "One of the four major archangels, he is at the top of the angelic hierarchy. He carries a long spear that can cut through anything, and his name means \"one who is like God."
    },
    "Mishaguji": {
      "inherits": "Ailment",
      "item": "Spiral Karma Ring",
      "itemr": "Mystic Ring",
      "level": 52,
      "arcana": "Hierophant",
      "elems": [
        "rs",
        "-",
        "-",
        "wk",
        "nu",
        "-",
        "-",
        "-",
        "-",
        "ab"
      ],
      "skills": {
        "Regenerate 3": 0,
        "Brain Jack": 0,
        "Psiodyne": 0,
        "One-shot Kill": 54,
        "Endure": 55,
        "Deathbound": 56,
        "Ailment Boost": 57
      },
      "stats": [
        32,
        32,
        32,
        32,
        35
      ],
      "trait": "Ailment Hunter",
      "background": "An indigenous god of the Shinano region from before the forces of Yamato occupied the land. Said to be born from the belief that divine spirits dwelled in rocks and stones"
    },
    "Mitra": {
      "inherits": "Bless",
      "item": "Death Contract",
      "itemr": "Death Promise",
      "level": 33,
      "arcana": "Temperance",
      "elems": [
        "-",
        "-",
        "-",
        "nu",
        "wk",
        "-",
        "-",
        "-",
        "nu",
        "-"
      ],
      "skills": {
        "Kouga": 0,
        "Mahama": 0,
        "Diarama": 0,
        "Makouga": 34,
        "Dekunda": 35,
        "Bless Boost": 36,
        "Thermopylae": 38
      },
      "stats": [
        19,
        26,
        19,
        24,
        18
      ],
      "trait": "Blessed Bloodline",
      "background": "An ancient Persian god of contracts, who was also revered as a sun god who brought harvests when he was introduced to the Zoroastrian religion."
    },
    "Mithras": {
      "inherits": "Nuclear",
      "item": "Nuke Boost",
      "itemr": "Nuke Amp",
      "skillCard": true,
      "level": 39,
      "arcana": "Sun",
      "elems": [
        "rs",
        "rs",
        "ab",
        "-",
        "-",
        "-",
        "wk",
        "nu",
        "-",
        "-"
      ],
      "skills": {
        "Tentarafoo": 0,
        "Mafreila": 0,
        "Heat Wave": 0,
        "Tetra Break": 41,
        "Nuke Break": 42,
        "Mabaisudi": 43,
        "Freidyne": 45
      },
      "stats": [
        27,
        25,
        27,
        25,
        20
      ],
      "trait": "Skillful Technique",
      "area": "Adyeshach",
      "floor": "L11 & 12",
      "background": "A sun deity who was worshipped in the Roman Empire from the 1st to the 4th century AD. He was said to be reborn after death, and a festival was held on the winter solstice for him."
    },
    "Mokoi": {
      "inherits": "Ailment",
      "item": "Dekunda",
      "itemr": "Dekaja",
      "skillCard": true,
      "level": 9,
      "arcana": "Death",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "rs",
        "wk",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Tarukaja": 0,
        "Dazzler": 0,
        "Skull Cracker": 10,
        "Marin Karin": 12,
        "Dodge Elec": 13,
        "Dekunda": 14
      },
      "stats": [
        9,
        5,
        6,
        10,
        4
      ],
      "trait": "Gloomy Child",
      "area": "Chemdah",
      "floor": "L1-4",
      "background": "Evil spirits of Murngin lore believed to be reborn shadows. They kidnap and eat children, and strike down any sorcerer who uses black magic."
    },
    "Moloch": {
      "inherits": "Fire",
      "item": "Inferno Ring",
      "itemr": "Spiral Inferno Ring",
      "level": 60,
      "arcana": "Hanged",
      "elems": [
        "-",
        "-",
        "ab",
        "wk",
        "rs",
        "rs",
        "ab",
        "-",
        "-",
        "nu"
      ],
      "skills": {
        "Agidyne": 0,
        "Stagnant Air": 0,
        "Evil Smile": 0,
        "Maragidyne": 62,
        "Ghastly Wail": 63,
        "Absorb Fire": 64,
        "Fire Amp": 65
      },
      "stats": [
        32,
        45,
        42,
        31,
        37
      ],
      "trait": "Immunity",
      "area": "Da'at",
      "floor": "All",
      "background": "A Canaanite god of fire. A bronze statue of a man with a bull's head stands at his alter. The statue was heated and sacrificial children were thrown inside."
    },
    "Mot": {
      "inherits": "Ailment",
      "item": "Null Elec",
      "itemr": "Repel Elec",
      "skillCard": true,
      "level": 72,
      "arcana": "Death",
      "elems": [
        "-",
        "rs",
        "-",
        "-",
        "ab",
        "wk",
        "-",
        "-",
        "-",
        "rp"
      ],
      "skills": {
        "Megidola": 0,
        "Matarukaja": 0,
        "Maeigaon": 0,
        "Concentrate": 74,
        "Megidolaon": 76,
        "Repel Elec": 77
      },
      "stats": [
        43,
        51,
        48,
        42,
        39
      ],
      "trait": "Mighty Gaze",
      "area": "Da'at",
      "floor": "All",
      "background": "The Canaanite god of death. Every year he attempts to kill Baal, the god of fertility, only to see him raised from the dead with the help of Baal's sister, Anat."
    },
    "Mother Harlot": {
      "inherits": "Ice",
      "item": "Claiomh Solais",
      "itemr": "Claiomh Solais R",
      "level": 85,
      "arcana": "Empress",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "rp",
        "-",
        "-",
        "-",
        "wk",
        "nu"
      ],
      "skills": {
        "Mabufudyne": 0,
        "Mamudoon": 0,
        "Mudo Boost": 0,
        "Ice Age": 86,
        "Ice Amp": 87,
        "Repel Bless": 88,
        "Debilitate": 90
      },
      "stats": [
        55,
        54,
        48,
        50,
        55
      ],
      "trait": "Ghost Nest",
      "max": true,
      "background": "The fiend known as the \"Whore of Babylon,\" riding a beast with seven heads and ten horns, she carries a golden cup of abominations and the filth of her acts."
    },
    "Mothman": {
      "inherits": "Electric",
      "item": "Skull Cracker",
      "itemr": "Mind Slice",
      "skillCard": true,
      "level": 33,
      "arcana": "Moon",
      "elems": [
        "-",
        "wk",
        "-",
        "-",
        "nu",
        "-",
        "rs",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Skull Cracker": 0,
        "Mazionga": 0,
        "Shock Boost": 0,
        "Tentarafoo": 35,
        "Ambient Aid": 36,
        "Makajamaon": 37,
        "Ziodyne": 38
      },
      "stats": [
        21,
        24,
        16,
        24,
        21
      ],
      "trait": "Static Electricity",
      "area": "Adyeshach",
      "floor": "L3, 4, 7, 8, 10",
      "background": "A cryptid sighted during the 60s-80s in West Virginia. It has shining red eyes and is named for the fin-like appendages on its sides. It uses its keen sense for blood to track down the source and feed on it."
    },
    "Naga": {
      "inherits": "Electric",
      "item": "Counter",
      "itemr": "Counterstrike",
      "skillCard": true,
      "level": 24,
      "arcana": "Hermit",
      "elems": [
        "-",
        "rs",
        "-",
        "-",
        "nu",
        "wk",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Power Slash": 0,
        "Memory Blow": 0,
        "Zionga": 0,
        "Shock Boost": 26,
        "Counter": 27,
        "Mazionga": 28,
        "Marakukaja": 29
      },
      "stats": [
        15,
        17,
        15,
        17,
        15
      ],
      "trait": "Striking Weight",
      "area": "Akzeriyyuth",
      "floor": "L2, 3, 5-7, 9",
      "background": "Half-snake, half-human divine beings in Hindu lore, worshipped as bringers of rain. They live in the bottoms of lakes and seas, singing and dancing when they are not fighting."
    },
    "Narcissus": {
      "inherits": "Ailment",
      "item": "Dazzler",
      "itemr": "Nocturnal Flash",
      "skillCard": true,
      "level": 48,
      "arcana": "Lovers",
      "elems": [
        "-",
        "-",
        "wk",
        "-",
        "nu",
        "rs",
        "-",
        "-",
        "rs",
        "-"
      ],
      "skills": {
        "Dazzler": 0,
        "Magarula": 0,
        "Energy Drop": 0,
        "Growth 3": 50,
        "Dizzy Boost": 51,
        "Mediarama": 52,
        "Ambient Aid": 53
      },
      "stats": [
        27,
        31,
        29,
        33,
        31
      ],
      "trait": "Gluttonmouth",
      "area": "Sheriruth",
      "floor": "L7 & 8 (after Palace 7)",
      "background": "A young man of Greek myth. He rejected the nymph Echo, who faded to a whisper out of despair. Cursed by Nemesis, he fell in love with his own reflection and wasted away."
    },
    "Nebiros": {
      "inherits": "Curse",
      "item": "Marin Karin",
      "itemr": "Brain Jack",
      "skillCard": true,
      "level": 74,
      "arcana": "Devil",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "nu",
        "-",
        "wk",
        "rs"
      ],
      "skills": {
        "Marin Karin": 0,
        "Mapsiodyne": 0,
        "Marakukaja": 0,
        "Brain Jack": 76,
        "Brainwash Boost": 77,
        "Megidolaon": 78,
        "Null Bless": 80
      },
      "stats": [
        45,
        52,
        44,
        46,
        42
      ],
      "trait": "Psychic Bloodline",
      "background": "The general of Hell. He keeps watch over other demons. One of Hell's greatest necromancers, he can control souls and corpses."
    },
    "Neko Shogun": {
      "special": true,
      "inherits": "Almighty",
      "item": "Catnap",
      "itemr": "Cat Buster",
      "level": 30,
      "arcana": "Star",
      "elems": [
        "rs",
        "-",
        "-",
        "-",
        "rs",
        "wk",
        "-",
        "-",
        "nu",
        "rs"
      ],
      "skills": {
        "Psio": 0,
        "Diarama": 0,
        "Masukukaja": 0,
        "Invigorate 1": 31,
        "Cornered Fang": 33,
        "Defense Master": 35,
        "Fortified Moxy": 36
      },
      "stats": [
        19,
        20,
        19,
        21,
        18
      ],
      "trait": "Pinch Anchor",
      "background": "A prophetic taoist god, originally known as Mao Shogun. Due to a linguistic error involving the Chinese word for \"cat,\" his name was changed to Neko Shogun."
    },
    "Nekomata": {
      "inherits": "Ailment",
      "item": "Pawzooka",
      "itemr": "Paw-omber",
      "level": 17,
      "arcana": "Magician",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "wk",
        "-",
        "rs",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Magaru": 0,
        "Terror Claw": 0,
        "Evil Touch": 0,
        "Hysterical Slap": 18,
        "Wind Break": 20,
        "Elec Wall": 21,
        "Dodge Elec": 22
      },
      "stats": [
        13,
        10,
        12,
        15,
        8
      ],
      "trait": "Foul Odor",
      "area": "Kaitul",
      "floor": "L2-4",
      "background": "Long-lived cats are said to become these malevolent cat demons. Their powers vary according to how long they have lived, ranging from shape-shifting to controlling the dead."
    },
    "Nigi Mitama": {
      "inherits": "Healing",
      "item": "Prayer Ring",
      "itemr": "Spiral Prayer Ring",
      "level": 22,
      "arcana": "Councillor",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "rs",
        "rs"
      ],
      "skills": {
        "Baisudi": 0,
        "Diarama": 0,
        "Makouha": 0,
        "Divine Grace": 24,
        "Me Patra": 25,
        "Climate Decorum": 26
      },
      "stats": [
        13,
        15,
        15,
        16,
        14
      ],
      "trait": "Relief Bloodline",
      "background": "One of the four aspects of Shinto thought, it works gently to help maintain a calm mind. It is said to aid in one's relations and sociability, and can lead one in a positive direction."
    },
    "Norn": {
      "inherits": "Almighty",
      "item": "Recarm",
      "itemr": "Samarecarm",
      "skillCard": true,
      "level": 52,
      "arcana": "Fortune",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "rp",
        "ab",
        "-",
        "-",
        "rs",
        "-"
      ],
      "skills": {
        "Ziodyne": 0,
        "Garudyne": 0,
        "Nocturnal Flash": 0,
        "Diarahan": 54,
        "Amrita Drop": 55,
        "Tetraja": 56,
        "Samarecarm": 57
      },
      "stats": [
        30,
        38,
        33,
        34,
        28
      ],
      "trait": "Intense Focus",
      "area": "Sheriruth",
      "floor": "L11-13 (before Palace 7) / L5 (after Palace 7)",
      "background": "Goddesses of fate in Norse lore. They live below the roots of Yggdrasil and weave the threads of fate, which even the gods are bound by."
    },
    "Nue": {
      "inherits": "Curse",
      "item": "Maeiha",
      "itemr": "Eiga",
      "skillCard": true,
      "level": 20,
      "arcana": "Death",
      "elems": [
        "-",
        "-",
        "wk",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "nu"
      ],
      "skills": {
        "Maeiha": 0,
        "Skull Cracker": 0,
        "Mudo": 21,
        "Pulinpa": 22,
        "Mamudo": 24,
        "Assault Dive": 25,
        "Curse Boost": 26
      },
      "stats": [
        16,
        10,
        17,
        14,
        10
      ],
      "trait": "Mighty Gaze",
      "area": "Chemdah",
      "floor": "L4",
      "background": "A creature of Japanese lore with a monkey's head, tiger's legs, and snake's tail. The Tale of Heike says it hid behind a dark cloud each night to attack the Emperor."
    },
    "Obariyon": {
      "inherits": "Physical",
      "item": "Lucky Punch",
      "itemr": "Miracle Punch",
      "skillCard": true,
      "level": 8,
      "arcana": "Fool",
      "elems": [
        "rs",
        "-",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Snap": 0,
        "Sukunda": 0,
        "Lucky Punch": 9,
        "Resist Fear": 10,
        "Dekaja": 12
      },
      "stats": [
        7,
        3,
        9,
        8,
        4
      ],
      "trait": "Striking Weight",
      "area": "Aiyatsbus",
      "floor": "L3, 5 & 6",
      "background": "A \"piggyback monster\" of Japan that jumps on the backs of those who who pass grassy paths. It is heavy and not easily removed, but will turn into gold coins if you can carry it back home."
    },
    "Oberon": {
      "inherits": "Electric",
      "item": "Heat Wave",
      "itemr": "Vorpal Blade",
      "skillCard": true,
      "level": 66,
      "arcana": "Emperor",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "rs",
        "-",
        "nu",
        "wk",
        "-",
        "-"
      ],
      "skills": {
        "Ziodyne": 0,
        "Nocturnal Flash": 0,
        "Heat Wave": 0,
        "Matarukaja": 68,
        "Myriad Slashes": 69,
        "Evade Nuke": 70,
        "Samarecarm": 71,
        "Elec Amp": 72
      },
      "stats": [
        40,
        45,
        42,
        43,
        35
      ],
      "trait": "Static Electricity",
      "area": "Sheriruth",
      "floor": "L13 (after Palace 7)",
      "background": "The king of the fairies and Titania's husband. He is quite old, but due to a curse, his looks are that of a young boy. He often flirts with human women, ending in a scolding from his wife."
    },
    "Odin": {
      "inherits": "Electric",
      "item": "Wild Hunt",
      "itemr": "Gungnir",
      "level": 84,
      "arcana": "Emperor",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "nu",
        "ab",
        "-",
        "-",
        "rp",
        "rp"
      ],
      "skills": {
        "Thunder Reign": 0,
        "Myriad Slashes": 0,
        "Marakukaja": 0,
        "Wild Thunder": 86,
        "Concentrate": 87,
        "Fast Heal": 88,
        "Elec Amp": 89
      },
      "stats": [
        53,
        58,
        54,
        52,
        42
      ],
      "trait": "Bargain Bolts",
      "max": true,
      "background": "The father of all gods in Norse legend. He willingly sacrificed one eye to gain wisdom. In preparation for Ragnarok, he gathers the souls of fallen warriors to his hall, Valhalla."
    },
    "Okuninushi": {
      "inherits": "Psy",
      "item": "Official's Robe",
      "itemr": "Official's Robe R",
      "level": 54,
      "arcana": "Faith",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "rp",
        "wk",
        "nu",
        "wk",
        "-",
        "-"
      ],
      "skills": {
        "Mapsio": 0,
        "Myriad Slashes": 0,
        "Matarukaja": 0,
        "Psy Boost": 55,
        "Psy Break": 56,
        "Evade Nuke": 57,
        "Heat Wave": 59
      },
      "stats": [
        39,
        35,
        33,
        32,
        30
      ],
      "trait": "Psychic Bloodline",
      "background": "A Kunitsu deity of Japanese mythology that governs agriculture and medicine. He's said to have built the country of Izumo with Susano-o's daughter, Suseri-Hime."
    },
    "Ongyo-Ki": {
      "special": true,
      "inherits": "Physical",
      "item": "Myriad Slash Belt",
      "itemr": "Sword Dance Belt",
      "level": 89,
      "arcana": "Hermit",
      "elems": [
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "rp",
        "rp"
      ],
      "skills": {
        "Myriad Slashes": 0,
        "Makajamaon": 0,
        "Last Stand": 0,
        "Arms Master": 91,
        "Regenerate 3": 92,
        "Firm Stance": 93,
        "Agneyastra": 95
      },
      "stats": [
        56,
        53,
        57,
        59,
        49
      ],
      "trait": "Demon's Bite",
      "max": true,
      "background": "One of the four oni controlled by Fujiwara no Chikata. By eliminating its aura and preventing others from sensing its presence, it is able to surprise its enemies."
    },
    "Oni": {
      "inherits": "Physical",
      "item": "Rampage",
      "itemr": "Kill Rush",
      "skillCard": true,
      "level": 20,
      "arcana": "Strength",
      "elems": [
        "rs",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Rampage": 0,
        "Counter": 0,
        "Snap": 0,
        "Giant Slice": 22,
        "Sharp Student": 23,
        "Memory Blow": 24
      },
      "stats": [
        19,
        9,
        17,
        12,
        10
      ],
      "trait": "Retaliating Body",
      "area": "Kaitul",
      "floor": "L3-5, 8, 9",
      "background": "An evil monster from Japanese lore known for its hideous appearance and brute strength. They loot and plunder villages, massacring the townspeople with their iron clubs."
    },
    "Onmoraki": {
      "inherits": "Curse",
      "item": "Grudge Ring",
      "itemr": "Spiral Grudge Ring",
      "level": 12,
      "arcana": "Moon",
      "elems": [
        "-",
        "-",
        "rs",
        "wk",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "nu"
      ],
      "skills": {
        "Eiha": 0,
        "Ice Wall": 0,
        "Agi": 13,
        "Evil Touch": 14,
        "Pulinpa": 15,
        "Confuse Boost": 17
      },
      "stats": [
        9,
        12,
        7,
        10,
        5
      ],
      "trait": "Intense Focus",
      "area": "Chemdah",
      "floor": "L3 & 4",
      "background": "A monstrous, fire spitting, Japanese bird with a man's face. It is actually a corpse that was not given a proper memorial service. They appear before monks who neglect their duties."
    },
    "Orichalcum": {
      "rare": true,
      "item": "Orichalcum",
      "itemr": "Orichalcum R",
      "level": 60,
      "arcana": "Faith",
      "elems": [
        "rs",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "-"
      ],
      "skills": {
        "Inferno": 0,
        "Diamond Dust": 0,
        "Panta Rhei": 0,
        "Thunder Reign": 0,
        "Psycho Force": 0,
        "Atomic Flare": 0,
        "Divine Judgement": 0,
        "Demonic Decree": 0,
        "Immunity": 0,
        "Mouth of Savoring": 0,
        "Blessed Bloodline": 0
      },
      "stats": [
        60,
        60,
        60,
        60,
        60
      ],
      "trait": "Ultimate Vessel",
      "background": "A metal mentioned in ancient Greek literature. Some accounts say it was merely brass, but other stories suggest it was, in fact, a legendary material."
    },
    "Orlov": {
      "rare": true,
      "item": "Orlov",
      "itemr": "Orlov R",
      "level": 30,
      "arcana": "Strength",
      "elems": [
        "rs",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk"
      ],
      "skills": {
        "Maragion": 0,
        "Mabufula": 0,
        "Magarula": 0,
        "Mazionga": 0,
        "Mapsio": 0,
        "Mafreila": 0,
        "Makouga": 0,
        "Maeiga": 0,
        "Heated Bloodline": 0,
        "Electric Bloodline": 0,
        "Atomic Bloodline": 0
      },
      "stats": [
        30,
        30,
        30,
        30,
        30
      ],
      "trait": "Ultimate Vessel",
      "area": "Sheriruth",
      "floor": "Any (before Palace 7) / L1-5 (after Palace 7)",
      "background": "A diamond stolen from a Hindu temple that is said to drive its owner to their death. It was cut into smaller pieces in an attempt to break the curse."
    },
    "Orobas": {
      "inherits": "Fire",
      "item": "Rakunda",
      "itemr": "Marakunda",
      "skillCard": true,
      "level": 17,
      "arcana": "Hierophant",
      "elems": [
        "-",
        "-",
        "-",
        "wk",
        "-",
        "rs",
        "-",
        "-",
        "-",
        "rs"
      ],
      "skills": {
        "Maragi": 0,
        "Sukukaja": 0,
        "Dekaja": 0,
        "Marakunda": 19,
        "Fire Break": 20,
        "Makajamaon": 21
      },
      "stats": [
        11,
        14,
        15,
        12,
        6
      ],
      "trait": "Mighty Gaze",
      "area": "Kaitul",
      "floor": "L1-3",
      "background": "One of the 72 demons of the Goetia. Known as the Prince of Hell, he appears as a horse and answers questions of the past, present, and future. He is faithful to his conjurer."
    },
    "Orthrus": {
      "inherits": "Fire",
      "item": "Agilao",
      "itemr": "Maragion",
      "skillCard": true,
      "level": 21,
      "arcana": "Hanged",
      "elems": [
        "-",
        "-",
        "ab",
        "wk",
        "-",
        "-",
        "-",
        "rs",
        "-",
        "-"
      ],
      "skills": {
        "Agilao": 0,
        "Double Fangs": 0,
        "Maragi": 0,
        "Burn Boost": 22,
        "Cornered Fang": 24,
        "Matarukaja": 26
      },
      "stats": [
        16,
        14,
        14,
        19,
        7
      ],
      "trait": "Thermal Conduct",
      "area": "Kaitul",
      "floor": "L4, 5, 7-9",
      "background": "The two-headed pet dog belonging to the giant, Geryon, in Greek myth. He guarded a herd of red oxen, but was killed by Hercules during one of his twelve labors."
    },
    "Ose": {
      "inherits": "Ailment",
      "item": "Counterstrike",
      "itemr": "High Counter",
      "skillCard": true,
      "level": 42,
      "arcana": "Fool",
      "elems": [
        "-",
        "nu",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "nu"
      ],
      "skills": {
        "Oni Kagura": 0,
        "Counterstrike": 0,
        "Charge": 0,
        "Tempest Slash": 43,
        "Matarukaja": 45,
        "Heat Wave": 47
      },
      "stats": [
        32,
        24,
        25,
        31,
        21
      ],
      "trait": "Retaliating Body",
      "area": "Sheriruth",
      "floor": "L1-5, 9 (before Palace 7) / L1-4 (after Palace 7)",
      "background": "One of the 72 demons of the Goetia, he is known as the President of Hell. He can shapeshift from leopard to human and reveal the truth behind divine mysteries."
    },
    "Pale Rider": {
      "inherits": "Curse",
      "item": "Hex Ring",
      "itemr": "Spiral Hex Ring",
      "level": 54,
      "arcana": "Death",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "-",
        "rs",
        "-",
        "-",
        "wk",
        "rp"
      ],
      "skills": {
        "Abysmal Surge": 0,
        "Eigaon": 0,
        "Brain Shake": 0,
        "Curse Boost": 55,
        "Megidola": 56,
        "Evade Bless": 58,
        "Deathbound": 59
      },
      "stats": [
        32,
        37,
        33,
        40,
        27
      ],
      "trait": "Foul Stench",
      "background": "One of the Four Horseman of the Apocalypse, he rides a pale horse and represents death. He has the power to destroy life."
    },
    "Parvati": {
      "inherits": "Psy",
      "item": "Null Ice",
      "itemr": "Repel Ice",
      "skillCard": true,
      "level": 56,
      "arcana": "Lovers",
      "elems": [
        "-",
        "-",
        "-",
        "rp",
        "-",
        "-",
        "rs",
        "-",
        "rs",
        "wk"
      ],
      "skills": {
        "Diarama": 0,
        "Psiodyne": 0,
        "Psy Break": 0,
        "Energy Shower": 57,
        "Diarahan": 58,
        "Mapsiodyne": 59,
        "Null Ice": 61
      },
      "stats": [
        33,
        39,
        33,
        39,
        31
      ],
      "trait": "Skillful Technique",
      "area": "Sheriruth",
      "floor": "L9, 11, 12 (after Palace 7)",
      "background": "A beautiful Hindu goddess of love and one of Shiva's wives. Always by his side, she played a role in opening his third eye. She can turn into Durga or Kali when angered."
    },
    "Pazuzu": {
      "inherits": "Curse",
      "item": "Spiral Curse Ring",
      "itemr": "Hex Ring",
      "level": 45,
      "arcana": "Devil",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "-",
        "rs",
        "-",
        "-",
        "wk",
        "nu"
      ],
      "skills": {
        "Maeiga": 0,
        "Tentarafoo": 0,
        "Mudoon": 0,
        "Ambient Aid": 47,
        "Evil Smile": 48,
        "Stagnant Air": 49,
        "Eigaon": 50
      },
      "stats": [
        29,
        33,
        27,
        26,
        27
      ],
      "trait": "Cursed Bloodline",
      "background": "The Babylonian lord of wind and scorching sands. He has the body of a man, a lion's head, the claws and wings of an eagle, and has a deadly poison. The diseases he spreads can only be cured with magic."
    },
    "Phoenix": {
      "inherits": "Nuclear",
      "item": "Heavensent Dress",
      "itemr": "Godsent Dress",
      "level": 21,
      "arcana": "Faith",
      "elems": [
        "-",
        "-",
        "-",
        "rs",
        "wk",
        "nu",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Freila": 0,
        "Dream Needle": 0,
        "Diarama": 22,
        "Recarm": 23,
        "Nuke Boost": 25,
        "Mafreila": 26
      },
      "stats": [
        12,
        15,
        15,
        17,
        11
      ],
      "trait": "Atomic Bloodline",
      "background": "The legendary bird of Chinese myth, said to appear only in times of peace. It is the ruler of all birds. When it dies, birds across the land chirp with sadness."
    },
    "Pisaca": {
      "inherits": "Curse",
      "item": "Headhunter Ladle",
      "itemr": "Headhunter Ladle EX",
      "level": 28,
      "arcana": "Death",
      "elems": [
        "-",
        "-",
        "wk",
        "-",
        "rs",
        "-",
        "-",
        "-",
        "wk",
        "nu"
      ],
      "skills": {
        "Dream Needle": 0,
        "Rampage": 0,
        "Stagnant Air": 0,
        "Mamudo": 29,
        "Abysmal Surge": 31,
        "Despair Boost": 32,
        "Mudoon": 33
      },
      "stats": [
        19,
        21,
        21,
        16,
        14
      ],
      "trait": "Rare Antibody",
      "area": "Akzeriyyuth",
      "floor": "L5-7, 9-11",
      "background": "A type of preta, or \"hungry ghost,\" in Hindu lore that eats human corpses. It enters a human through the mouth and causes harm. Those who see one are said to die within nine months."
    },
    "Pixie": {
      "inherits": "Electric",
      "item": "Static Ring",
      "itemr": "Spiral Static Ring",
      "level": 2,
      "arcana": "Lovers",
      "elems": [
        "-",
        "wk",
        "-",
        "wk",
        "rs",
        "-",
        "-",
        "-",
        "rs",
        "wk"
      ],
      "skills": {
        "Zio": 0,
        "Dia": 0,
        "Patra": 3,
        "Tarukaja": 5,
        "Resist Confuse": 6
      },
      "stats": [
        1,
        3,
        3,
        4,
        2
      ],
      "trait": "Static Electricity",
      "area": "Qimranut / Aiyatsbus",
      "floor": "Any / L1 & 3",
      "background": "Friendly fairies of the forest that tend to hide from humans. They like to play tricks on the Laz sic people. It is said they are the souls of dead, unbaptized children."
    },
    "Power": {
      "inherits": "Bless",
      "item": "Bless Boost",
      "itemr": "Bless Amp",
      "skillCard": true,
      "level": 41,
      "arcana": "Justice",
      "elems": [
        "-",
        "wk",
        "-",
        "-",
        "-",
        "rs",
        "-",
        "-",
        "nu",
        "wk"
      ],
      "skills": {
        "Hamaon": 0,
        "Brain Shake": 0,
        "Swift Strike": 42,
        "Makouga": 43,
        "Bless Boost": 44,
        "Masukukaja": 45,
        "Null Curse": 46
      },
      "stats": [
        30,
        26,
        28,
        25,
        21
      ],
      "trait": "Internal Hypnosis",
      "area": "Sheriruth",
      "floor": "L1-5, 7 (before Palace 7) / L1-3 (after Palace 7)",
      "background": "The sixth of the nine orders of angels. It is said that they were the first order to be created. Their duty is to protect human souls from demons."
    },
    "Principality": {
      "inherits": "Bless",
      "item": "Blessing Ring",
      "itemr": "Spiral Blessing Ring",
      "level": 29,
      "arcana": "Justice",
      "elems": [
        "-",
        "-",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "nu",
        "wk"
      ],
      "skills": {
        "Makouga": 0,
        "Makajamaon": 0,
        "Tetraja": 0,
        "Mediarama": 30,
        "Forget Boost": 32,
        "Bless Boost": 34,
        "Mabaisudi": 35
      },
      "stats": [
        17,
        19,
        18,
        21,
        19
      ],
      "trait": "Blessed Bloodline",
      "background": "The seventh of the nine orders of angels. They guard cities and nations, and protect various religious figures."
    },
    "Queen Mab": {
      "inherits": "Almighty",
      "item": "Masquerade Ribbon",
      "itemr": "Masquerade Ribbon R",
      "level": 43,
      "arcana": "Magician",
      "elems": [
        "-",
        "-",
        "nu",
        "-",
        "rs",
        "wk",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Mazionga": 0,
        "Makajamaon": 0,
        "Burn Boost": 0,
        "Matarunda": 44,
        "Makara Break": 46,
        "Agidyne": 47,
        "Concentrate": 48
      },
      "stats": [
        23,
        35,
        26,
        30,
        22
      ],
      "trait": "Static Electricity",
      "area": "Sheriruth",
      "floor": "L5, 7-9 (before Palace 7) / L3 & 4 (after Palace 7)",
      "background": "The fairy queen in Celtic myth. Often identified with Titania. She would offer mead mixed with her blood to her many consorts."
    },
    "Queen's Necklace": {
      "rare": true,
      "item": "Queen's Necklace",
      "itemr": "Queen's Necklace R",
      "level": 15,
      "arcana": "Empress",
      "elems": [
        "rs",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Tarukaja": 0,
        "Rakukaja": 0,
        "Sukukaja": 0,
        "Recarm": 0,
        "Media": 0,
        "Tarunda": 0,
        "Rakunda": 0,
        "Sukunda": 0,
        "Potent Hypnosis": 0,
        "Relief Bloodline": 0,
        "Savior Bloodline": 0
      },
      "stats": [
        15,
        15,
        15,
        15,
        15
      ],
      "trait": "Ultimate Vessel",
      "area": "Kaitul",
      "floor": "L1-5, 7-9",
      "background": "The diamond necklace that Jeanne de la Motte swindled from jewelers in 1785 by claiming it was on behalf of the Queen of France, Marie Antoinette."
    },
    "Quetzalcoatl": {
      "inherits": "Wind",
      "item": "Magarudyne",
      "itemr": "Panta Rhei",
      "skillCard": true,
      "level": 66,
      "arcana": "Sun",
      "elems": [
        "-",
        "-",
        "nu",
        "-",
        "-",
        "rs",
        "wk",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Magarula": 0,
        "Garudyne": 0,
        "Memory Blow": 0,
        "Growth 3": 68,
        "Regenerate 3": 69,
        "Magarudyne": 70,
        "Wind Amp": 71
      },
      "stats": [
        41,
        46,
        41,
        43,
        34
      ],
      "trait": "Wind Bloodline",
      "background": "An Aztec deity known as the Feathered Serpent. He created humans with his own blood and taught them how to sustain themselves."
    },
    "Raja Naga": {
      "inherits": "Electric",
      "item": "Thunder Ring",
      "itemr": "Spiral Thunder Ring",
      "level": 55,
      "arcana": "Temperance",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "nu",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Ziodyne": 0,
        "Elec Break": 0,
        "Tentarafoo": 0,
        "Shock Boost": 57,
        "Makarakarn": 58,
        "Maziodyne": 59,
        "Evade Wind": 60
      },
      "stats": [
        33,
        37,
        36,
        35,
        31
      ],
      "trait": "Electric Bloodline",
      "background": "The king of the Naga, a half-man, half-snake tribe in Hindu lore. The dragon kings Nanda and Takshaka of Buddhist myth fall into this royal category."
    },
    "Rakshasa": {
      "inherits": "Physical",
      "item": "Regenerate 1",
      "itemr": "Regenerate 2",
      "skillCard": true,
      "level": 24,
      "arcana": "Strength",
      "elems": [
        "rs",
        "nu",
        "rs",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "wk",
        "rs"
      ],
      "skills": {
        "Giant Slice": 0,
        "Wind Wall": 0,
        "Tarukaja": 0,
        "Regenerate 1": 26,
        "Mind Slice": 27,
        "Counterstrike": 28,
        "Adverse Resolve": 30
      },
      "stats": [
        20,
        15,
        18,
        17,
        9
      ],
      "trait": "Skillful Combo",
      "personality": "Irritable",
      "area": "Kaitul",
      "floor": "L5, 7-9",
      "background": "A Hindu demon. He is an enemy of the gods and attacks humans to feed off of them. His hideous appearance strikes fear into those who see him. Rakshasa shape-shifts to deceive his enemies."
    },
    "Rangda": {
      "inherits": "Curse",
      "item": "Maeiga",
      "itemr": "Eigaon",
      "skillCard": true,
      "level": 48,
      "arcana": "Magician",
      "elems": [
        "rp",
        "rp",
        "nu",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "wk",
        "nu"
      ],
      "skills": {
        "Swift Strike": 0,
        "Bloodbath": 0,
        "Counterstrike": 0,
        "Eigaon": 49,
        "Matarunda": 51,
        "Mudoon": 53
      },
      "stats": [
        28,
        34,
        30,
        33,
        26
      ],
      "trait": "Cursed Bloodline",
      "area": "Sheriruth",
      "floor": "L11-13 (before Palace 7) / L5 (after Palace 7)",
      "background": "A wicked witch of Balinese lore, she represents evil and is Barong's eternal rival. Even if defeated, she will come back to life, and their battle will have no end."
    },
    "Raphael": {
      "inherits": "Almighty",
      "item": "Null Bless",
      "itemr": "Repel Bless",
      "skillCard": true,
      "level": 78,
      "arcana": "Lovers",
      "elems": [
        "-",
        "-",
        "-",
        "ab",
        "-",
        "-",
        "nu",
        "-",
        "nu",
        "-"
      ],
      "skills": {
        "Sword Dance": 0,
        "Charge": 0,
        "Dekaja": 0,
        "Heat Riser": 80,
        "Growth 3": 81,
        "Adverse Resolve": 82,
        "Arms Master": 83
      },
      "stats": [
        57,
        45,
        49,
        55,
        35
      ],
      "trait": "Pinch Anchor",
      "background": "One of the four major archangels, his name means \"healer.\" He recites the history of the fallen angels and the creation of Adam and Eve."
    },
    "Red Rider": {
      "inherits": "Psy",
      "item": "Karma Ring",
      "itemr": "Spiral Karma Ring",
      "level": 41,
      "arcana": "Tower",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "nu"
      ],
      "skills": {
        "Rising Slash": 0,
        "Psy Break": 0,
        "Mapsio": 0,
        "Negative Pile": 42,
        "Despair Boost": 44,
        "Ominous Words": 45,
        "Last Stand": 46
      },
      "stats": [
        26,
        27,
        25,
        29,
        23
      ],
      "trait": "Ailment Hunter",
      "background": "One of the Four Horseman of the Apocalypse, he rides a red horse and carries a great sword. He has the power to destroy peace and make men slay one another."
    },
    "Regent": {
      "rare": true,
      "item": "Regent",
      "itemr": "Regent R",
      "level": 10,
      "arcana": "Emperor",
      "elems": [
        "rs",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "-",
        "-"
      ],
      "skills": {
        "Maragi": 0,
        "Mabufu": 0,
        "Magaru": 0,
        "Mazio": 0,
        "Mapsi": 0,
        "Mafrei": 0,
        "Makouha": 0,
        "Maeiha": 0,
        "Mighty Gaze": 0,
        "Skillful Technique": 0,
        "Skillful Combo": 0
      },
      "stats": [
        10,
        10,
        10,
        10,
        10
      ],
      "trait": "Ultimate Vessel",
      "area": "Qimranut / Aiyatsbus / Chemdah",
      "floor": "Any / L1-3, 5 & 6 / L1-4, 6 & 7",
      "background": "A bluish-tinged diamond that Napoleon Bonaparte had mounted to the pommel of his sword. It was named after the French Regent Philippe II, Duke of Orleans, who had purchased it in 1717."
    },
    "Saki Mitama": {
      "inherits": "Healing",
      "item": "Energy Charm",
      "itemr": "Spiral Energy Charm",
      "level": 6,
      "arcana": "Lovers",
      "elems": [
        "-",
        "-",
        "-",
        "rs",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Bufu": 0,
        "Energy Drop": 0,
        "Wind Wall": 0,
        "Growth 1": 7,
        "Rakukaja": 8,
        "Resist Dizzy": 10
      },
      "stats": [
        4,
        6,
        5,
        6,
        4
      ],
      "trait": "Internal Hypnosis",
      "background": "One of the four aspects of Shinto thought, it brings great bounty from the hunt. It is said to aid in love, profit, and growth, and can create new paths."
    },
    "Sandalphon": {
      "inherits": "Bless",
      "item": "Sword of Sinai",
      "itemr": "Sword of Sinai II",
      "level": 75,
      "arcana": "Moon",
      "elems": [
        "rs",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "rp",
        "nu"
      ],
      "skills": {
        "Mahamaon": 0,
        "Samarecarm": 0,
        "Amrita Shower": 0,
        "Angelic Grace": 77,
        "Repel Curse": 78,
        "Sword Dance": 79,
        "Megidolaon": 81
      },
      "stats": [
        46,
        51,
        49,
        48,
        38
      ],
      "trait": "Omen",
      "max": true,
      "background": "Metatron's twin brother in Judeo-Christian lore, he is the master of heavenly songs. It is said that a human would take 500 years to walk the length of his body."
    },
    "Sandman": {
      "inherits": "Wind",
      "item": "Dormina",
      "itemr": "Lullaby",
      "skillCard": true,
      "level": 23,
      "arcana": "Magician",
      "elems": [
        "-",
        "-",
        "wk",
        "-",
        "wk",
        "rs",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Dormina": 0,
        "Garula": 0,
        "Dormin Rush": 0,
        "Sukunda": 24,
        "Null Sleep": 26,
        "Magarula": 27,
        "Sleep Boost": 28
      },
      "stats": [
        11,
        13,
        14,
        17,
        21
      ],
      "trait": "Foul Odor",
      "area": "Akzeriyyuth",
      "floor": "L1-3",
      "background": "A fairy in German folklore who carries a bag of magical sand, which puts humans to sleep when thrown into their eyes. If the victim resists, the Sandman will sit on their eyelids."
    },
    "Sarasvati": {
      "inherits": "Healing",
      "item": "Mediarama",
      "itemr": "Diarahan",
      "skillCard": true,
      "level": 50,
      "arcana": "Priestess",
      "elems": [
        "-",
        "-",
        "-",
        "nu",
        "rs",
        "-",
        "-",
        "wk",
        "-",
        "-"
      ],
      "skills": {
        "Mediarama": 0,
        "Ice Wall": 0,
        "Tentarafoo": 0,
        "Psy Wall": 51,
        "Dekaja": 52,
        "Matarunda": 53,
        "Diarahan": 54
      },
      "stats": [
        30,
        35,
        32,
        33,
        27
      ],
      "trait": "Relief Bloodline",
      "area": "Sheriruth",
      "floor": "L7-9. 12 (after Palace 7)",
      "background": "The Hindu goddess of rivers, and patron of speech, writing, learning, the arts, and sciences. Brahma is her husband."
    },
    "Satan": {
      "inherits": "Ice",
      "item": "Tantric Oath",
      "itemr": "Tantric Oath R",
      "level": 92,
      "arcana": "Judgement",
      "elems": [
        "-",
        "rs",
        "-",
        "rp",
        "-",
        "-",
        "-",
        "-",
        "-",
        "rp"
      ],
      "skills": {
        "Diamond Dust": 0,
        "Ice Age": 0,
        "Regenerate 3": 0,
        "Black Viper": 94,
        "Invigorate 3": 95,
        "Fortify Spirit": 96,
        "Concentrate": 97,
        "Absorb Ice": 98
      },
      "stats": [
        62,
        59,
        55,
        52,
        55
      ],
      "trait": "Cocytus",
      "max": true,
      "background": "The Judeo-Christian prince of darkness, he is known for his role as the snake that tempted Adam and Eve in Eden. It is also said that he was sent by God to test man's piety."
    },
    "Satanael": {
      "special": true,
      "inherits": "Almighty",
      "item": "Paradise Lost",
      "itemr": "Paradise Lost R",
      "level": 95,
      "arcana": "Fool",
      "elems": [
        "rs",
        "rs",
        "rs",
        "rs",
        "rs",
        "rs",
        "rs",
        "rs",
        "nu",
        "ab"
      ],
      "skills": {
        "Maeigaon": 0,
        "Megidolaon": 0,
        "Survival Trick": 0,
        "Riot Gun": 0,
        "Black Viper": 96,
        "Heat Riser": 97,
        "Tyrant's Mind": 98,
        "Victory Cry": 99
      },
      "stats": [
        63,
        60,
        57,
        56,
        56
      ],
      "trait": "Pagan Allure",
      "note": "Only available on NG+",
      "background": "An archangel who is said to be the form of Satan before he fell from Heaven. The second son of God, he rebelled against Him for freedom and bestowed free will and chaos upon humanity."
    },
    "Scathach": {
      "inherits": "Wind",
      "item": "Makarakarn",
      "itemr": "Tetrakarn",
      "skillCard": true,
      "level": 77,
      "arcana": "Priestess",
      "elems": [
        "-",
        "-",
        "-",
        "nu",
        "rp",
        "-",
        "-",
        "-",
        "-",
        "nu"
      ],
      "skills": {
        "Mabufudyne": 0,
        "Myriad Slashes": 0,
        "Makarakarn": 0,
        "Freeze Boost": 78,
        "Matarukaja": 79,
        "Vorpal Blade": 81,
        "Attack Master": 82
      },
      "stats": [
        48,
        52,
        46,
        48,
        44
      ],
      "trait": "Skillful Technique",
      "area": "Adyeshach",
      "floor": "L10-12",
      "background": "A warrior woman of the Land of Shadows in Celtic lore. She taught the hero, Cu Chulainn, the art of war and gave him the spear, Gae Bolg."
    },
    "Seiryu": {
      "inherits": "Ice",
      "item": "Blizzard Ring",
      "itemr": "Spiral Blizzard Ring",
      "level": 62,
      "arcana": "Councillor",
      "elems": [
        "-",
        "-",
        "-",
        "rs",
        "-",
        "-",
        "-",
        "wk",
        "-",
        "-"
      ],
      "skills": {
        "Bufudyne": 0,
        "Diarahan": 0,
        "Marakukaja": 0,
        "Repel Nuke": 63,
        "Mabufudyne": 65,
        "Amrita Drop": 66,
        "Makarakarn": 67
      },
      "stats": [
        38,
        41,
        43,
        37,
        34
      ],
      "trait": "Relentless",
      "background": "The noblest of the Ssu-Ling creatures of Chinese myth. It represents the direction east, the season of spring, and the element of wood. He dwells in a palace at the bottom of the ocean."
    },
    "Setanta": {
      "inherits": "Physical",
      "item": "Rebellion Anklet",
      "itemr": "Revolution Anklet",
      "level": 25,
      "arcana": "Emperor",
      "elems": [
        "-",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "rs",
        "-",
        "-"
      ],
      "skills": {
        "Giant Slice": 0,
        "Dormin Rush": 0,
        "Counter": 0,
        "Charge": 27,
        "Rebellion": 29,
        "Rising Slash": 30
      },
      "stats": [
        19,
        16,
        18,
        13,
        16
      ],
      "trait": "Retaliating Body",
      "background": "A brave young man in Celtic myth. After defeating a fierce guard dog, he volunteered to take its place, earning him the nickname \"Hound of Culann\"."
    },
    "Seth": {
      "special": true,
      "inherits": "Fire",
      "item": "Triple Shot Belt",
      "itemr": "Special Shot Belt",
      "level": 51,
      "arcana": "Tower",
      "elems": [
        "-",
        "-",
        "rp",
        "-",
        "-",
        "nu",
        "-",
        "-",
        "wk",
        "rs"
      ],
      "skills": {
        "One-shot Kill": 0,
        "Agidyne": 0,
        "Masukukaja": 0,
        "Gun Amp": 53,
        "Fire Break": 54,
        "Fortify Spirit": 56
      },
      "stats": [
        32,
        35,
        30,
        35,
        28
      ],
      "trait": "Potent Hypnosis",
      "background": "The Egyptian god of the desert, chaos, and evil. He murdered his brother, Osiris, and tried to become chief god, but he was castrated by Osiris's son, Horus."
    },
    "Shiisaa": {
      "inherits": "Electric",
      "item": "Double Fangs",
      "itemr": "Cornered Fang",
      "skillCard": true,
      "level": 15,
      "arcana": "Strength",
      "elems": [
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "-",
        "nu",
        "wk"
      ],
      "skills": {
        "Double Fangs": 0,
        "Skull Cracker": 0,
        "Frei": 0,
        "Dodge Curse": 16,
        "Rampage": 17,
        "Dodge Elec": 19
      },
      "stats": [
        10,
        11,
        11,
        11,
        9
      ],
      "trait": "Atomic Bloodline",
      "background": "A holy beast said to protect houses from evil and bring good fortune. They look similar to Shinto guardian dogs, but are actually modeled after a lion. There are many stories about it in Ryukyu lore."
    },
    "Shiki-Ouji": {
      "inherits": "Psy",
      "item": "Double Shot",
      "itemr": "Triple Down",
      "skillCard": true,
      "level": 18,
      "arcana": "Chariot",
      "elems": [
        "nu",
        "nu",
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "nu",
        "nu"
      ],
      "skills": {
        "Tarukaja": 0,
        "Taunt": 0,
        "Double Shot": 0,
        "Mapsi": 19,
        "Dekaja": 21,
        "Psio": 23,
        "Oni Kagura": 24
      },
      "stats": [
        16,
        14,
        12,
        9,
        10
      ],
      "trait": "Psychic Bloodline",
      "area": "Chemdah",
      "floor": "L6 & 7",
      "background": "An exceptionally powerful shikigami. Only the most elite onmyoji are able to summon and bind it to paper. It can ward off disaster or cure illness, but its ordinary temperament is quite vicious."
    },
    "Shiva": {
      "special": true,
      "inherits": "Psy",
      "item": "Megido Fire",
      "itemr": "Megido Blaster",
      "level": 82,
      "arcana": "Judgement",
      "elems": [
        "-",
        "-",
        "-",
        "nu",
        "rp",
        "-",
        "ab",
        "wk",
        "nu",
        "nu"
      ],
      "skills": {
        "Psycho Force": 0,
        "Maziodyne": 0,
        "Enduring Soul": 0,
        "Riot Gun": 85,
        "Megidolaon": 86,
        "Auto-Mataru": 87,
        "Psycho Blast": 88
      },
      "stats": [
        55,
        54,
        53,
        53,
        38
      ],
      "trait": "Psychic Bloodline",
      "background": "One of the major Hindu gods, he is known as the Destroyer but is also related to regeneration. His wife is Parvati."
    },
    "Siegfried": {
      "inherits": "Physical",
      "item": "Vorpal Blade Belt",
      "itemr": "Brave Belt",
      "level": 84,
      "arcana": "Faith",
      "elems": [
        "nu",
        "rs",
        "-",
        "rs",
        "nu",
        "-",
        "-",
        "wk",
        "-",
        "-"
      ],
      "skills": {
        "Brave Blade": 0,
        "Masukukaja": 0,
        "High Counter": 0,
        "Charge": 85,
        "Apt Pupil": 87,
        "Vorpal Blade": 89,
        "Auto-Mataru": 90
      },
      "stats": [
        61,
        43,
        55,
        55,
        45
      ],
      "trait": "Retaliating Body",
      "background": "The German name of the hero in the epic poem, \"The Nibelungenlied.\" The dragon Fafnir's blood made him invincible, but a single leaf on his back resulted in a weak spot."
    },
    "Silky": {
      "inherits": "Healing",
      "item": "Silk Dress",
      "itemr": "Fine Silk Dress",
      "level": 6,
      "arcana": "Priestess",
      "elems": [
        "-",
        "-",
        "wk",
        "rs",
        "wk",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Dormina": 0,
        "Bufu": 0,
        "Dia": 7,
        "Patra": 9,
        "Sharp Student": 10
      },
      "stats": [
        4,
        7,
        4,
        5,
        5
      ],
      "trait": "Intense Focus",
      "area": "Aiyatsbus",
      "floor": "L2, 3, 5 & 6",
      "background": "A fairy of England and Scotland. She carries out household chores while everyone sleeps and is a welcome spirit. It is said you can hear her silk skirt rustle as she works."
    },
    "Skadi": {
      "inherits": "Ice",
      "item": "Snow Queen's Whip",
      "itemr": "Snow Queen's Whip II",
      "level": 53,
      "arcana": "Priestess",
      "elems": [
        "-",
        "-",
        "-",
        "rp",
        "-",
        "-",
        "-",
        "-",
        "-",
        "nu"
      ],
      "skills": {
        "Deadly Fury": 0,
        "Evil Smile": 0,
        "Fear Boost": 0,
        "Ghastly Wail": 54,
        "Mabufudyne": 56,
        "Maeigaon": 57,
        "Spirit Drain": 58
      },
      "stats": [
        33,
        39,
        32,
        34,
        28
      ],
      "trait": "Bloodstained Eyes",
      "area": "Sheriruth",
      "floor": "L12 & 13 (before Palace 7) / L5 (after Palace 7)",
      "background": "A Norse giantess called the \"snow-shoe goddess\" and the embodiment of winter. According to legend, all the gods will return to her at the end of Ragnarok."
    },
    "Slime": {
      "inherits": "Curse",
      "item": "Tarunda",
      "itemr": "Matarunda",
      "skillCard": true,
      "level": 10,
      "arcana": "Chariot",
      "elems": [
        "rs",
        "rs",
        "wk",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Lunge": 0,
        "Evil Touch": 0,
        "Tarunda": 11,
        "Fire Wall": 13,
        "Headbutt": 14
      },
      "stats": [
        9,
        6,
        11,
        6,
        5
      ],
      "trait": "Rare Antibody",
      "area": "Qimranut / Aiyatsbus",
      "floor": "Any / L1, 2, 3, 6",
      "background": "A primitive monster with a viscous body. There are various theories as to its origin, but it is still under debate. Said to compulsively collect shiny objects."
    },
    "Sraosha": {
      "special": true,
      "inherits": "Bless",
      "item": "Archangel Bra",
      "itemr": "High Archangel Bra",
      "level": 80,
      "arcana": "Star",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "ab",
        "-",
        "-",
        "-",
        "rp",
        "wk"
      ],
      "skills": {
        "Kougaon": 0,
        "Mahamaon": 0,
        "Hama Boost": 0,
        "Makougaon": 81,
        "Angelic Grace": 83,
        "Amrita Shower": 84,
        "Debilitate": 85
      },
      "stats": [
        47,
        56,
        45,
        56,
        43
      ],
      "trait": "Blessed Bloodline",
      "background": "In Zoroastrian lore, Sraosha's duty is to listen to the cry of humans for Ahura Mazda. He is also known to descend after sunset to vanquish evil. His name literally means \"observance."
    },
    "Stone of Scone": {
      "rare": true,
      "item": "Stone of Scone",
      "itemr": "Stone of Scone R",
      "level": 20,
      "arcana": "Fortune",
      "elems": [
        "rs",
        "rs",
        "wk",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Agilao": 0,
        "Bufula": 0,
        "Garula": 0,
        "Zionga": 0,
        "Psio": 0,
        "Freila": 0,
        "Kouga": 0,
        "Eiga": 0,
        "Relentless": 0,
        "Gluttonmouth": 0,
        "Intense Focus": 0
      },
      "stats": [
        20,
        20,
        20,
        20,
        20
      ],
      "trait": "Ultimate Vessel",
      "area": "Akzeriyyuth",
      "floor": "L1-3, 5-7, 9-11",
      "background": "Also known as the Stone of Destiny, it is a stone used in the coronations of Scotland's monarchs. Legends say the stone is linked to angels."
    },
    "Succubus": {
      "inherits": "Curse",
      "item": "Brain Shot",
      "itemr": "Pink Buster",
      "level": 7,
      "arcana": "Moon",
      "elems": [
        "-",
        "-",
        "rs",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "wk",
        "nu"
      ],
      "skills": {
        "Dormina": 0,
        "Rebellion": 0,
        "Agi": 8,
        "Dekaja": 10,
        "Sleep Boost": 11,
        "Mudo": 12
      },
      "stats": [
        4,
        7,
        5,
        8,
        4
      ],
      "trait": "Foul Odor",
      "area": "Aiyatsbus",
      "floor": "L5 & 6",
      "background": "A female demon of European lore in medieval times. They visit sleeping men and have sexual intercourse with them. The victims don't wake up but may dream of the encounter."
    },
    "Sudama": {
      "inherits": "Psy",
      "item": "Mapsi",
      "itemr": "Psio",
      "skillCard": true,
      "level": 17,
      "arcana": "Hermit",
      "elems": [
        "-",
        "-",
        "-",
        "wk",
        "-",
        "rp",
        "-",
        "wk",
        "-",
        "-"
      ],
      "skills": {
        "Mapsi": 0,
        "Lucky Punch": 0,
        "Tarukaja": 0,
        "Ambient Aid": 20,
        "Wind Wall": 21,
        "Apt Pupil": 22,
        "Psio": 23
      },
      "stats": [
        9,
        14,
        12,
        13,
        10
      ],
      "trait": "Gloomy Child",
      "area": "Chemdah",
      "floor": "L6 & 7",
      "background": "A spirit of rivers and mountains in Japanese lore, they dwell in ancient trees and ageless rocks. They are not evil, and will often appear as humans or supernatural wonders to warn people."
    },
    "Sui-Ki": {
      "inherits": "Ice",
      "item": "Bufula",
      "itemr": "Mabufula",
      "skillCard": true,
      "level": 24,
      "arcana": "Moon",
      "elems": [
        "-",
        "rs",
        "-",
        "ab",
        "rs",
        "-",
        "-",
        "wk",
        "-",
        "-"
      ],
      "skills": {
        "Mabufu": 0,
        "Sledgehammer": 0,
        "Bufula": 0,
        "Null Ice": 26,
        "Wage War": 27,
        "Mabufula": 28,
        "Dodge Fire": 29
      },
      "stats": [
        16,
        15,
        15,
        18,
        15
      ],
      "trait": "Frigid Bloodline",
      "area": "Kaitul",
      "floor": "L7-9",
      "background": "One of the four oni controlled by Fujiwara no Chikata, it can cause floods with the swing of its arms. In the Taiheiki, Ki no Tomoo expelled the oni by reading a Japanese poem."
    },
    "Surt": {
      "inherits": "Fire",
      "item": "Maragidyne",
      "itemr": "Inferno",
      "skillCard": true,
      "level": 83,
      "arcana": "Magician",
      "elems": [
        "-",
        "rs",
        "ab",
        "wk",
        "nu",
        "-",
        "-",
        "rs",
        "-",
        "-"
      ],
      "skills": {
        "Blazing Hell": 0,
        "Attack Master": 0,
        "Brave Blade": 0,
        "Fire Amp": 84,
        "Marakunda": 85,
        "Evade Ice": 86,
        "Gigantomachia": 88
      },
      "stats": [
        55,
        54,
        51,
        50,
        46
      ],
      "trait": "Heated Bloodline",
      "background": "A fire giant in Norse lore. He rules the fire realm, Muspelheim, and brandishes a burning sword. At Ragnarok, he will set the world ablaze."
    },
    "Suzaku": {
      "inherits": "Nuclear",
      "item": "Atom Ring",
      "itemr": "Spiral Atom Ring",
      "level": 16,
      "arcana": "Sun",
      "elems": [
        "-",
        "-",
        "ab",
        "wk",
        "-",
        "-",
        "-",
        "rs",
        "-",
        "-"
      ],
      "skills": {
        "Frei": 0,
        "Tarunda": 0,
        "Marin Karin": 0,
        "Dekunda": 18,
        "Mafrei": 19,
        "Speed Master": 20,
        "Matarunda": 21
      },
      "stats": [
        9,
        12,
        10,
        15,
        9
      ],
      "trait": "Gluttonmouth",
      "background": "One of the Ssu-Ling, celestial creatures of Chinese myth. It is a giant bird that is said to chirp in five beautiful voices. It represents the direction south, the season of summer, and the element of fire."
    },
    "Take-Minakata": {
      "inherits": "Electric",
      "item": "Zionga",
      "itemr": "Mazionga",
      "skillCard": true,
      "level": 26,
      "arcana": "Hanged",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "rs",
        "-",
        "wk",
        "-",
        "-",
        "rs"
      ],
      "skills": {
        "Zionga": 0,
        "Assault Dive": 0,
        "Defense Master": 0,
        "Mazionga": 27,
        "Elec Boost": 29,
        "Swift Strike": 31,
        "Shock Boost": 32
      },
      "stats": [
        17,
        19,
        18,
        16,
        15
      ],
      "trait": "Electric Bloodline",
      "area": "Kaitul",
      "floor": "L7-9",
      "background": "A Japanese god of war, hunting and fertility. He fought Take-Mikazuchi for control of Japan and lost. He escaped to Suwa, but was prohibited to leave since."
    },
    "Tam Lin": {
      "special": true,
      "inherits": "Almighty",
      "item": "Fairy Knight Armor",
      "itemr": "Fairy Hero Armor",
      "level": 27,
      "arcana": "Faith",
      "elems": [
        "rs",
        "-",
        "nu",
        "-",
        "-",
        "rs",
        "-",
        "-",
        "ab",
        "wk"
      ],
      "skills": {
        "Assault Dive": 0,
        "Brain Shake": 0,
        "Rebellion": 0,
        "Sharp Student": 28,
        "Brain Buster": 30,
        "Brainwash Boost": 31,
        "Heat Up": 32
      },
      "stats": [
        21,
        16,
        18,
        16,
        17
      ],
      "trait": "Gluttonmouth",
      "background": "A fae knight of the Seelie Court, said to protect the forest of Carterhaugh. After being kidnapped by the faeries at the tender age of 9, he lived much of his life among them."
    },
    "Thor": {
      "inherits": "Electric",
      "item": "Mjolnir",
      "itemr": "Imprisoned Mjolnir",
      "level": 64,
      "arcana": "Chariot",
      "elems": [
        "rs",
        "-",
        "-",
        "-",
        "nu",
        "-",
        "-",
        "-",
        "rs",
        "rs"
      ],
      "skills": {
        "Ziodyne": 0,
        "Megaton Raid": 0,
        "High Counter": 0,
        "Elec Amp": 66,
        "Maziodyne": 67,
        "Heat Up": 68,
        "Wild Thunder": 71
      },
      "stats": [
        44,
        39,
        43,
        38,
        35
      ],
      "trait": "Intense Focus",
      "area": "Da'at",
      "floor": "All",
      "background": "The Norse thunder god and son of Odin, Thor owns the power enhancing belt, Megingjard, and wields Mjolnir, a hammer that causes lightning to strike and returns to its owner after thrown."
    },
    "Thoth": {
      "inherits": "Nuclear",
      "item": "Mafreila",
      "itemr": "Freidyne",
      "skillCard": true,
      "level": 36,
      "arcana": "Emperor",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "nu",
        "nu",
        "rs"
      ],
      "skills": {
        "Taunt": 0,
        "Freila": 0,
        "Masukunda": 0,
        "Megido": 37,
        "Psy Wall": 39,
        "Concentrate": 40,
        "Growth 2": 42
      },
      "stats": [
        21,
        28,
        21,
        24,
        21
      ],
      "trait": "Skillful Technique",
      "area": "Akzeriyyuth",
      "floor": "L6, 7, 9-11",
      "background": "Egyptian moon god that takes the form of a baboon, he is the one who measures time. He gave Isis the power to resurrect Osiris after he was killed by the evil god Seth."
    },
    "Throne": {
      "inherits": "Bless",
      "item": "Spiral Divine Ring",
      "itemr": "Judgement Cross",
      "level": 72,
      "arcana": "Justice",
      "elems": [
        "-",
        "-",
        "nu",
        "-",
        "-",
        "nu",
        "-",
        "wk",
        "rp",
        "-"
      ],
      "skills": {
        "Agidyne": 0,
        "Hamaon": 0,
        "Burn Boost": 0,
        "Fire Amp": 74,
        "Makougaon": 75,
        "Invigorate 3": 76,
        "Inferno": 78
      },
      "stats": [
        42,
        49,
        43,
        46,
        43
      ],
      "trait": "Crisis Control",
      "area": "Da'at",
      "floor": "All",
      "background": "The third of the nine orders of angels. They are the angels of dignity and justice who carry God's throne and govern thought. They are angels of knowledge."
    },
    "Thunderbird": {
      "inherits": "Electric",
      "item": "Elec Boost",
      "itemr": "Elec Amp",
      "skillCard": true,
      "level": 34,
      "arcana": "Sun",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "ab",
        "-",
        "wk",
        "-",
        "-",
        "wk"
      ],
      "skills": {
        "Mazionga": 0,
        "Tarukaja": 0,
        "Shock Boost": 0,
        "Rebellion": 35,
        "Ziodyne": 37,
        "Elec Boost": 38,
        "Maziodyne": 39
      },
      "stats": [
        17,
        24,
        24,
        26,
        18
      ],
      "trait": "Electric Bloodline",
      "background": "A revered bird of Native American mythology said to live atop cloud-shrouded peaks. Resembles an eagle. Its wingbeats create thunderclaps, and some legends say its eyes can unleash lightning."
    },
    "Titania": {
      "inherits": "Nuclear",
      "item": "Freidyne",
      "itemr": "Mafreidyne",
      "skillCard": true,
      "level": 56,
      "arcana": "Empress",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "rs",
        "rs",
        "rs"
      ],
      "skills": {
        "Freidyne": 0,
        "Ziodyne": 0,
        "Lullaby": 0,
        "Concentrate": 59,
        "Nuke Amp": 60,
        "Mediarahan": 61
      },
      "stats": [
        32,
        40,
        35,
        38,
        30
      ],
      "trait": "Foul Stench",
      "area": "Sheriruth",
      "floor": "L8, 9, 11-13 (after Palace 7)",
      "background": "The queen of the fairies and Oberon's wife. She is derived from the Roman goddess Diana. She was later immortalized in Shakespeare's play \"A Midsummer Night's Dream."
    },
    "Trumpeter": {
      "special": true,
      "inherits": "Almighty",
      "item": "Reactor Ring",
      "itemr": "Spiral Reactor Ring",
      "level": 59,
      "arcana": "Judgement",
      "elems": [
        "-",
        "-",
        "-",
        "ab",
        "rp",
        "-",
        "-",
        "-",
        "rp",
        "nu"
      ],
      "skills": {
        "Mafreidyne": 0,
        "Abysmal Surge": 0,
        "Brain Buster": 0,
        "Fortify Spirit": 61,
        "Gun Amp": 62,
        "Life Aid": 63,
        "Debilitate": 65
      },
      "stats": [
        33,
        42,
        40,
        38,
        31
      ],
      "trait": "Relentless",
      "background": "Angels that sound the trumpets at the time of the apocalypse. As each trumpet sounds, the more plagues and disasters will occur, turning the earth into a land of death and suffering."
    },
    "Unicorn": {
      "inherits": "Bless",
      "item": "Mahama",
      "itemr": "Hamaon",
      "skillCard": true,
      "level": 39,
      "arcana": "Faith",
      "elems": [
        "-",
        "-",
        "-",
        "nu",
        "-",
        "-",
        "rs",
        "-",
        "nu",
        "wk"
      ],
      "skills": {
        "Assault Dive": 0,
        "Mahama": 0,
        "Dekunda": 0,
        "Samarecarm": 41,
        "Swift Strike": 42,
        "Kougaon": 43,
        "Hamaon": 44
      },
      "stats": [
        20,
        27,
        25,
        28,
        24
      ],
      "trait": "Blessed Bloodline",
      "area": "Sheriruth",
      "floor": "L1-4 (before Palace 7) / L1 & 2 (after Palace 7)",
      "background": "A legendary white horse with a single spiral horn. It can only be tamed by a pure maiden, and its horn supposedly has miraculous healing capablities."
    },
    "Uriel": {
      "inherits": "Almighty",
      "item": "Heaven's Gate",
      "itemr": "Providence",
      "level": 81,
      "arcana": "Justice",
      "elems": [
        "-",
        "-",
        "nu",
        "-",
        "-",
        "-",
        "-",
        "ab",
        "rp",
        "-"
      ],
      "skills": {
        "Deathbound": 0,
        "Myriad Slashes": 0,
        "Bloodbath": 0,
        "Repel Nuke": 83,
        "Megidolaon": 84,
        "Angelic Grace": 85,
        "Spell Master": 86
      },
      "stats": [
        50,
        54,
        49,
        55,
        42
      ],
      "trait": "Mouth of Savoring",
      "background": "One of the four major archangels. His name means \"Flame of God,\" and he knows all the celestial phenomena. He is the first angel Satan met on earth."
    },
    "Valkyrie": {
      "inherits": "Physical",
      "item": "Rising Slash",
      "itemr": "Deadly Fury",
      "skillCard": true,
      "level": 44,
      "arcana": "Strength",
      "elems": [
        "-",
        "rs",
        "wk",
        "rp",
        "-",
        "-",
        "-",
        "-",
        "nu",
        "-"
      ],
      "skills": {
        "Rising Slash": 0,
        "Counterstrike": 0,
        "Attack Master": 45,
        "Deathbound": 46,
        "Matarukaja": 47,
        "Dodge Phys": 49
      },
      "stats": [
        33,
        24,
        28,
        29,
        25
      ],
      "trait": "Skillful Combo",
      "area": "Sheriruth",
      "floor": "L3-5, 7-9 (before Palace 7) / L2-4 (after Palace 7)",
      "background": "\"Choosers of the slain\" in Norse lore. Armed with shining armor and swords, they look for brave warriors to take to Valhalla, so that they may fight in Ragnarok."
    },
    "Vasuki": {
      "special": true,
      "inherits": "Ailment",
      "item": "Kuzuryu Gouhou",
      "itemr": "Kuzuryu Gouhou EX",
      "level": 68,
      "arcana": "Star",
      "elems": [
        "-",
        "-",
        "-",
        "nu",
        "nu",
        "-",
        "-",
        "-",
        "-",
        "wk"
      ],
      "skills": {
        "Mahamaon": 0,
        "Brain Jack": 0,
        "Triple Down": 0,
        "Trigger Happy": 70,
        "Makarakarn": 71,
        "Brainwash Boost": 72,
        "Null Curse": 73
      },
      "stats": [
        42,
        45,
        44,
        42,
        38
      ],
      "trait": "Foul Stench",
      "background": "A giant serpent of Hindu legend. It is said the gods and demons used him to churn the sea of milk. The strain caused him to exhale incredibly potent venom, but Shiva swallowed it."
    },
    "Vishnu": {
      "inherits": "Almighty",
      "item": "Sudarshana",
      "itemr": "Sudarshana EX",
      "level": 83,
      "arcana": "Fool",
      "elems": [
        "-",
        "-",
        "wk",
        "ab",
        "-",
        "-",
        "-",
        "-",
        "nu",
        "nu"
      ],
      "skills": {
        "Megidolaon": 0,
        "Magarudyne": 0,
        "Ali Dance": 0,
        "Vacuum Wave": 85,
        "Concentrate": 86,
        "Repel Fire": 87,
        "Wind Amp": 88,
        "Riot Gun": 90
      },
      "stats": [
        56,
        51,
        49,
        57,
        43
      ],
      "trait": "Vahana's Wings",
      "max": true,
      "background": "One of the major Hindu gods, he is the preserver of the universe. Legends claim that he will make ten appearances across time and space to strike down evil and uphold justice."
    },
    "Vohu Manah": {
      "inherits": "Almighty",
      "item": "Doomsday",
      "itemr": "Ancient Day",
      "level": 80,
      "arcana": "Councillor",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "rs",
        "wk",
        "-",
        "-",
        "ab",
        "nu"
      ],
      "skills": {
        "Divine Judgement": 0,
        "Bless Amp": 0,
        "Makougaon": 0,
        "Absorb Bless": 82,
        "Fortify Spirit": 83,
        "Invigorate 3": 84,
        "Salvation": 85
      },
      "stats": [
        46,
        59,
        45,
        56,
        41
      ],
      "trait": "Positive Thoughts",
      "max": true,
      "background": "The second of Zoroastrianism's \"divine sparks,\" Amesha Spenta, its name means \"good thought.\" This holy entity is said to have given Zoroaster revelations from God."
    },
    "White Rider": {
      "inherits": "Curse",
      "item": "Gun Boost",
      "itemr": "Gun Amp",
      "skillCard": true,
      "level": 38,
      "arcana": "Chariot",
      "elems": [
        "-",
        "-",
        "nu",
        "wk",
        "-",
        "-",
        "-",
        "-",
        "nu",
        "rp"
      ],
      "skills": {
        "Triple Down": 0,
        "Evil Touch": 0,
        "Oni Kagura": 0,
        "Gun Boost": 40,
        "Maeiga": 41,
        "Masukukaja": 42,
        "Foul Breath": 43,
        "Ailment Boost": 44
      },
      "stats": [
        22,
        21,
        26,
        27,
        25
      ],
      "trait": "Bloodstained Eyes",
      "background": "One of the Four Horsemen of the Apocalypse, he rides a white horse with a bow in hand. A crown was granted to him, and he promises victory."
    },
    "Yaksini": {
      "inherits": "Ice",
      "item": "Hysterical Slap",
      "itemr": "Oni Kagura",
      "skillCard": true,
      "level": 20,
      "arcana": "Empress",
      "elems": [
        "-",
        "nu",
        "-",
        "rs",
        "-",
        "-",
        "-",
        "wk",
        "-",
        "-"
      ],
      "skills": {
        "Hysterical Slap": 0,
        "Wage War": 0,
        "Counter": 0,
        "Oni Kagura": 22,
        "Attack Master": 23,
        "Vicious Strike": 24
      },
      "stats": [
        14,
        11,
        13,
        16,
        13
      ],
      "trait": "Foul Odor",
      "area": "Kaitul",
      "floor": "L3-5, 7",
      "background": "A female demon in Hindu lore. Though originally a Dravidian fertility goddess, the spread of Hinduism changed perception of her to a demonic figure. Usually depicted as a nude, voluptuous, female."
    },
    "Yamata-no-Orochi": {
      "inherits": "Ice",
      "item": "Triple Down",
      "itemr": "One-shot Kill",
      "skillCard": true,
      "level": 64,
      "arcana": "Judgement",
      "elems": [
        "rs",
        "-",
        "-",
        "ab",
        "-",
        "rs",
        "-",
        "-",
        "-",
        "rs"
      ],
      "skills": {
        "One-shot Kill": 0,
        "Mabufudyne": 0,
        "Freeze Boost": 0,
        "Absorb Ice": 66,
        "Ice Amp": 67,
        "Diamond Dust": 69
      },
      "stats": [
        44,
        38,
        48,
        36,
        33
      ],
      "trait": "Cold-Blooded",
      "area": "Da'at",
      "floor": "All",
      "background": "A giant snake with eight heads that Susano-o defeated to save Kushinada-Hime. The legendary sword Ame-no-Murakumo-no-Tsurugi, also known as the \"Sword of Kusanagi,\" emerged from its belly."
    },
    "Yatagarasu": {
      "inherits": "Fire",
      "item": "Black Wing Robe",
      "itemr": "Black Wing Robe R",
      "level": 57,
      "arcana": "Councillor",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "-",
        "rs",
        "-",
        "-",
        "nu",
        "wk"
      ],
      "skills": {
        "Agidyne": 0,
        "Makara Break": 0,
        "Dekunda": 0,
        "Mediarahan": 59,
        "Last Stand": 60,
        "Wind Break": 61,
        "Null Wind": 64
      },
      "stats": [
        35,
        41,
        30,
        40,
        32
      ],
      "trait": "Potent Hypnosis",
      "background": "A divine creature in Japanese lore. They are three-legged birds sent by Amaterasu to help humans. They are said to have helped emperor Jinmu claim victory."
    },
    "Yoshitsune": {
      "special": true,
      "inherits": "Physical",
      "item": "Usumidori",
      "itemr": "Usumidori R",
      "level": 87,
      "arcana": "Tower",
      "elems": [
        "nu",
        "-",
        "rs",
        "-",
        "rp",
        "-",
        "-",
        "-",
        "rp",
        "-"
      ],
      "skills": {
        "Brave Blade": 0,
        "Charge": 0,
        "Ziodyne": 0,
        "Last Stand": 89,
        "Fast Heal": 90,
        "Elec Amp": 92,
        "Hassou Tobi": 94
      },
      "stats": [
        63,
        52,
        50,
        54,
        49
      ],
      "trait": "Retaliating Body",
      "background": "A Japanese general of the Genpei War near the end of the Heian era and start of the Kamakura era. His bold ingenuity and ruthless skill with a blade are still praised in Japan today."
    },
    "Yurlungur": {
      "inherits": "Electric",
      "item": "Mirrirmina",
      "itemr": "Mirrirmina EX",
      "level": 43,
      "arcana": "Sun",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "nu",
        "-",
        "wk",
        "-",
        "rs",
        "-"
      ],
      "skills": {
        "Brain Jack": 0,
        "Mazionga": 0,
        "Megidola": 0,
        "Revolution": 45,
        "Elec Break": 46,
        "Tetra Break": 48,
        "Elec Boost": 49
      },
      "stats": [
        26,
        29,
        30,
        27,
        24
      ],
      "trait": "Mouth of Savoring",
      "background": "A snake with a rainbow body from Murngin lore. He is a fertility deity who controls the weather and resides in a holy pond filled with rainbow-colored water."
    },
    "Zaou-Gongen": {
      "inherits": "Fire",
      "item": "God's Hand Belt",
      "itemr": "Gigantomachia Belt",
      "level": 80,
      "arcana": "Strength",
      "elems": [
        "-",
        "-",
        "rp",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "nu",
        "nu"
      ],
      "skills": {
        "Maragidyne": 0,
        "Abysmal Surge": 0,
        "God's Hand": 0,
        "Evade Phys": 82,
        "Enduring Soul": 83,
        "Gun Amp": 84,
        "Blazing Hell": 86
      },
      "stats": [
        57,
        45,
        50,
        56,
        39
      ],
      "trait": "Undying Fury",
      "max": true,
      "background": "Repeller of evil found at Kinpusen by En-no-Ozunu. Believed to be a fusion of Buddha, Guanyin, and Maitreya, he's a god who originated from Japan rather than the Buddhavacana."
    },
    "Zouchouten": {
      "inherits": "Electric",
      "item": "Spark Ring",
      "itemr": "Spiral Spark Ring",
      "level": 31,
      "arcana": "Strength",
      "elems": [
        "rs",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Kill Rush": 0,
        "Zionga": 0,
        "Terror Claw": 32,
        "Sharp Student": 33,
        "Resist Fear": 34,
        "Swift Strike": 35,
        "Attack Master": 36
      },
      "stats": [
        22,
        19,
        24,
        18,
        17
      ],
      "trait": "Electric Bloodline",
      "background": "Also known as Virudhaka, he is the protector of the South, and is one of the four Heavenly Kings of Buddhist origin. He is the god of the five grains, and was once the chief of the gods."
    },
    "Ariadne": {
      "inherits": "Almighty",
      "item": "Red String",
      "itemr": "Red String R",
      "level": 30,
      "arcana": "Fortune",
      "elems": [
        "-",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "nu",
        "rs",
        "-"
      ],
      "skills": {
        "Beast Weaver": 0,
        "Apt Pupil": 0,
        "Miracle Punch": 0,
        "Attack Master": 31,
        "Fortified Moxy": 32,
        "Evade Phys": 34,
        "Charge": 36
      },
      "stats": [
        23,
        19,
        20,
        17,
        18
      ],
      "trait": "Tag Team",
      "dlc": true,
      "background": "A Persona of another story. She is the daughter of Minos, the king of Crete. She helped Theseus defeat the Minotaur and gave him a ball of yarn so he could escape the labyrinth."
    },
    "Ariadne Picaro": {
      "inherits": "Almighty",
      "item": "Auto-Mataru",
      "itemr": "Auto-Maraku",
      "skillCard": true,
      "level": 42,
      "arcana": "Fortune",
      "elems": [
        "-",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "nu",
        "rs",
        "-"
      ],
      "skills": {
        "Beast Weaver": 0,
        "Apt Pupil": 0,
        "Miracle Punch": 0,
        "Auto-Mataru": 43,
        "Heat Up": 44,
        "Evade Phys": 46,
        "Charge": 48
      },
      "stats": [
        36,
        23,
        29,
        24,
        21
      ],
      "trait": "Tag Team",
      "dlc": true,
      "background": "A Persona turned picaro after becoming the Trickster's mask. She is the daughter of Minos. She helped Theseus defeat the Minotaur and gave him a ball of yarn so he could escape the labyrinth."
    },
    "Asterius": {
      "inherits": "Almighty",
      "item": "Blazing Horns",
      "itemr": "Inferno Horns",
      "level": 56,
      "arcana": "Fortune",
      "elems": [
        "-",
        "-",
        "rs",
        "wk",
        "-",
        "-",
        "rs",
        "-",
        "-",
        "nu"
      ],
      "skills": {
        "Titanomachia": 0,
        "Maragidyne": 0,
        "Burn Boost": 0,
        "Auto-Mataru": 57,
        "Fire Amp": 59,
        "Tetrakarn": 60,
        "Gigantomachia": 62
      },
      "stats": [
        43,
        43,
        32,
        32,
        25
      ],
      "trait": "Frenzied Bull",
      "dlc": true,
      "background": "A Persona of another story. Due to a curse on his mother Pasiphae, he was born a bull-headed monster. Locked away in the labyrinth as the Minotaur, he wielded a double-sided axe."
    },
    "Asterius Picaro": {
      "inherits": "Almighty",
      "item": "Gigantomachia",
      "itemr": "Agneyastra",
      "skillCard": true,
      "level": 62,
      "arcana": "Fortune",
      "elems": [
        "-",
        "-",
        "rs",
        "wk",
        "-",
        "-",
        "rs",
        "-",
        "-",
        "nu"
      ],
      "skills": {
        "Titanomachia": 0,
        "Maragidyne": 0,
        "Burn Boost": 0,
        "Auto-Masuku": 63,
        "Fire Amp": 65,
        "Makarakarn": 66,
        "Gigantomachia": 68
      },
      "stats": [
        46,
        46,
        36,
        36,
        29
      ],
      "trait": "Frenzied Bull",
      "dlc": true,
      "background": "A Persona turned picaro after becoming the Trickster's mask. Son of Pasiphae, he was born a bull-headed monster. Locked away in the labyrinth as the Minotaur, he wielded a double-sided axe."
    },
    "Athena": {
      "inherits": "Almighty",
      "item": "Kugelbein",
      "itemr": "Kugelbein R",
      "level": 46,
      "arcana": "Chariot",
      "elems": [
        "rs",
        "nu",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Akashic Arts": 0,
        "Marakukaja": 0,
        "Rising Slash": 0,
        "Diarahan": 47,
        "Matarukaja": 48,
        "Auto-Maraku": 50,
        "Samarecarm": 51,
        "Megaton Raid": 52
      },
      "stats": [
        33,
        27,
        29,
        29,
        27
      ],
      "trait": "Grace of the Olive",
      "dlc": true,
      "background": "A Persona of another story. Daughter of Zeus, and a goddess of great martial ability. She fights to protect her land or her family, but never for sheer bloodlust. Her symbol is the olive tree."
    },
    "Athena Picaro": {
      "inherits": "Almighty",
      "item": "Charge",
      "itemr": "Concentrate",
      "skillCard": true,
      "level": 50,
      "arcana": "Chariot",
      "elems": [
        "rs",
        "nu",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      "skills": {
        "Akashic Arts": 0,
        "Matarukaja": 0,
        "Rising Slash": 0,
        "Diarahan": 51,
        "Marakukaja": 52,
        "Auto-Mataru": 54,
        "Samarecarm": 55,
        "Megaton Raid": 56
      },
      "stats": [
        35,
        30,
        31,
        32,
        29
      ],
      "trait": "Grace of the Olive",
      "dlc": true,
      "background": "A Persona turned picaro after becoming the Trickster's mask. Daughter of Zeus, and a goddess of great martial ability. She fights for her land or her family, but never out of sheer bloodlust."
    },
    "Izanagi": {
      "inherits": "Almighty",
      "item": "White Headband",
      "itemr": "White Headband R",
      "level": 20,
      "arcana": "Fool",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "rs",
        "wk",
        "-",
        "-",
        "-",
        "nu"
      ],
      "skills": {
        "Cross Slash": 0,
        "Zionga": 0,
        "Tarukaja": 0,
        "Rising Slash": 21,
        "Dodge Phys": 22,
        "Mazionga": 24,
        "Growth 3": 25
      },
      "stats": [
        14,
        13,
        13,
        14,
        13
      ],
      "trait": "God Maker",
      "dlc": true,
      "background": "A Persona of another story. One of the ancient gods who existed before Japan was formed. He created the Oyashima from chaos, then gave birth to countless children and laid the foundation of soil and nature."
    },
    "Izanagi Picaro": {
      "inherits": "Almighty",
      "item": "Growth 2",
      "itemr": "Growth 3",
      "skillCard": true,
      "level": 23,
      "arcana": "Fool",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "nu",
        "wk",
        "-",
        "-",
        "-",
        "nu"
      ],
      "skills": {
        "Cross Slash": 0,
        "Zionga": 0,
        "Rakukaja": 0,
        "Rising Slash": 24,
        "Null Phys": 25,
        "Mazionga": 27,
        "Growth 3": 28
      },
      "stats": [
        16,
        15,
        15,
        16,
        14
      ],
      "trait": "God Maker",
      "dlc": true,
      "background": "A Persona turned picaro after becoming the Trickster's mask. One of the ancient gods who existed before Japan was formed. He created the Oyashima from chaos, then gave birth to countless children."
    },
    "Izanagi-no-Okami": {
      "special": true,
      "inherits": "Almighty",
      "item": "Shiny Belt",
      "itemr": "Shiny Belt R",
      "level": 80,
      "arcana": "World",
      "elems": [
        "rs",
        "rs",
        "rs",
        "rs",
        "rs",
        "rs",
        "rs",
        "rs",
        "-",
        "-"
      ],
      "skills": {
        "Myriad Truths": 0,
        "Victory Cry": 0,
        "Angelic Grace": 0,
        "Concentrate": 81,
        "Heat Riser": 82,
        "Heat Up": 83,
        "Salvation": 84,
        "Almighty Boost": 85
      },
      "stats": [
        52,
        56,
        46,
        48,
        45
      ],
      "trait": "Country Maker",
      "dlc": true,
      "background": "A Persona of another story. A Japanese god of creation, he begat the sky, ocean, and night, and 8 million other gods. Opposes his once-wife, the goddess Izanami, after an encounter in Yomotsu Hirasaka."
    },
    "Izanagi-no-Okami Picaro": {
      "special": true,
      "inherits": "Almighty",
      "item": "Mediarahan",
      "itemr": "Salvation",
      "skillCard": true,
      "level": 89,
      "arcana": "World",
      "elems": [
        "rs",
        "rs",
        "rs",
        "rs",
        "rs",
        "rs",
        "rs",
        "rs",
        "-",
        "-"
      ],
      "skills": {
        "Myriad Truths": 0,
        "Victory Cry": 0,
        "Angelic Grace": 0,
        "Concentrate": 90,
        "Debilitate": 91,
        "Enduring Soul": 92,
        "Salvation": 93,
        "Almighty Boost": 94
      },
      "stats": [
        54,
        61,
        56,
        58,
        45
      ],
      "trait": "Country Maker",
      "dlc": true,
      "background": "A Persona turned picaro after becoming the Trickster's mask. A Japanese god of creation, he begat the sky, the ocean, and night, and 8 million other gods. Opposes his once-wife, the goddess Izanami."
    },
    "Kaguya": {
      "inherits": "Almighty",
      "item": "Moonlight Robe",
      "itemr": "Moonlight Robe R",
      "level": 16,
      "arcana": "Moon",
      "elems": [
        "-",
        "-",
        "wk",
        "-",
        "-",
        "rs",
        "-",
        "-",
        "nu",
        "nu"
      ],
      "skills": {
        "Shining Arrows": 0,
        "Mediarama": 0,
        "Counterstrike": 0,
        "Divine Grace": 17,
        "Amrita Shower": 18,
        "Diarahan": 21,
        "Repel Phys": 22
      },
      "stats": [
        11,
        15,
        12,
        11,
        6
      ],
      "trait": "Inviolable Beauty",
      "dlc": true,
      "background": "A Persona of another story. A divine being born from a glowing bamboo shoot. Though many proposed to her, none could complete her strict tasks. She eventually returned to her home the moon."
    },
    "Kaguya Picaro": {
      "inherits": "Almighty",
      "item": "Diarahan",
      "itemr": "Mediarahan",
      "skillCard": true,
      "level": 25,
      "arcana": "Moon",
      "elems": [
        "-",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "-",
        "-",
        "nu",
        "nu"
      ],
      "skills": {
        "Shining Arrows": 0,
        "Mediarama": 0,
        "High Counter": 0,
        "Divine Grace": 26,
        "Amrita Shower": 27,
        "Diarahan": 30,
        "Repel Phys": 31
      },
      "stats": [
        17,
        20,
        19,
        15,
        11
      ],
      "trait": "Inviolable Beauty",
      "dlc": true,
      "background": "A Persona turned picaro after becoming the Trickster's mask. She appeared from a glowing bamboo shoot. She received many proposals, but rejected them and returned to the moon."
    },
    "Magatsu-Izanagi": {
      "inherits": "Almighty",
      "item": "Black Headband",
      "itemr": "Black Headband R",
      "level": 44,
      "arcana": "Tower",
      "elems": [
        "-",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "nu",
        "nu"
      ],
      "skills": {
        "Magatsu Mandala": 0,
        "Megidola": 0,
        "Ghastly Wail": 0,
        "Maziodyne": 45,
        "Bloodbath": 46,
        "Attack Master": 48,
        "Heat Riser": 50
      },
      "stats": [
        37,
        35,
        32,
        25,
        10
      ],
      "trait": "Hollow Jester",
      "dlc": true,
      "background": "A Persona of another story. He's Izanagi's rival and looks just like him. Magatsu means \"calamity.\" Unlike Izanagi, who founded the land and brought order, he leads all back into chaos."
    },
    "Magatsu-Izanagi Picaro": {
      "inherits": "Almighty",
      "item": "Heat Riser",
      "itemr": "Debilitate",
      "skillCard": true,
      "level": 48,
      "arcana": "Tower",
      "elems": [
        "-",
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "nu",
        "nu"
      ],
      "skills": {
        "Magatsu Mandala": 0,
        "Megidola": 0,
        "Ghastly Wail": 0,
        "Magarudyne": 49,
        "Bloodbath": 50,
        "Speed Master": 52,
        "Heat Riser": 54
      },
      "stats": [
        40,
        38,
        35,
        27,
        11
      ],
      "trait": "Hollow Jester",
      "dlc": true,
      "background": "A Persona turned picaro after becoming the Trickster's mask. He is Izanagi's rival. Magatsu means \"calamity,\" so, unlike Izanagi who founded the land and brought order, he leads all back into chaos."
    },
    "Messiah": {
      "inherits": "Almighty",
      "item": "Sirius Armor",
      "itemr": "Sirius Armor EX",
      "level": 81,
      "arcana": "Judgement",
      "elems": [
        "-",
        "-",
        "rs",
        "rs",
        "rs",
        "rs",
        "rs",
        "rs",
        "rp",
        "wk"
      ],
      "skills": {
        "Oratorio": 0,
        "Megidolaon": 0,
        "God's Hand": 0,
        "Regenerate 3": 82,
        "Enduring Soul": 83,
        "Invigorate 3": 84,
        "Absorb Phys": 85,
        "Almighty Boost": 87
      },
      "stats": [
        50,
        50,
        50,
        50,
        50
      ],
      "trait": "Hallowed Spirit",
      "dlc": true,
      "background": "A Persona of another story. He appears before Judgement Day to save the virtuous. He is a universal figure, appearing in myths around the world. Many stories involve his death and rebirth."
    },
    "Messiah Picaro": {
      "inherits": "Almighty",
      "item": "Insta-Heal",
      "itemr": "Firm Stance",
      "skillCard": true,
      "level": 90,
      "arcana": "Judgement",
      "elems": [
        "-",
        "-",
        "rs",
        "rs",
        "rs",
        "rs",
        "rs",
        "rs",
        "rp",
        "wk"
      ],
      "skills": {
        "Oratorio": 0,
        "Megidolaon": 0,
        "Agneyastra": 0,
        "Insta-Heal": 91,
        "Enduring Soul": 92,
        "Life Aid": 93,
        "Firm Stance": 94,
        "Almighty Boost": 96
      },
      "stats": [
        56,
        56,
        55,
        55,
        55
      ],
      "trait": "Hallowed Spirit",
      "dlc": true,
      "background": "A Persona turned picaro after becoming the Trickster's mask. He appears before Judgment Day to save the virtuous. He is a universal figure, appearing in myths around the world."
    },
    "Orpheus": {
      "inherits": "Almighty",
      "item": "Hades Harp",
      "itemr": "Hades Harp R",
      "level": 26,
      "arcana": "Fool",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "rs",
        "wk"
      ],
      "skills": {
        "Cadenza": 0,
        "Agilao": 0,
        "Tarunda": 0,
        "Endure": 27,
        "Maragion": 29,
        "Marakukaja": 30,
        "Fire Boost": 32
      },
      "stats": [
        17,
        17,
        17,
        17,
        17
      ],
      "trait": "Circle of Sadness",
      "dlc": true,
      "background": "A Persona of another story. A Greek poet who tried to retrieve his wife from Hades, but she vanished when he looked back before reaching the surface."
    },
    "Orpheus F": {
      "inherits": "Almighty",
      "item": "Graceful Harp",
      "itemr": "Graceful Harp R",
      "level": 11,
      "arcana": "Fool",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "rs",
        "wk"
      ],
      "skills": {
        "Neo Cadenza": 0,
        "Agi": 0,
        "Tarunda": 0,
        "Endure": 0,
        "Maragion": 12,
        "Marakukaja": 14,
        "Dodge Curse": 15
      },
      "stats": [
        8,
        9,
        8,
        9,
        6
      ],
      "trait": "Circle of Sadness",
      "dlc": true,
      "background": "A Persona of another story. A Greek poet who tried to retrieve his wife from Hades, but she vanished when he looked back before reaching the surface."
    },
    "Orpheus F Picaro": {
      "inherits": "Almighty",
      "item": "Endure",
      "itemr": "Enduring Soul",
      "skillCard": true,
      "level": 13,
      "arcana": "Fool",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "rs",
        "wk"
      ],
      "skills": {
        "Neo Cadenza": 0,
        "Maragi": 0,
        "Rakunda": 0,
        "Endure": 0,
        "Agilao": 14,
        "Marakukaja": 16,
        "Dodge Curse": 17
      },
      "stats": [
        9,
        11,
        9,
        10,
        7
      ],
      "trait": "Circle of Sadness",
      "dlc": true,
      "background": "A Persona turned picaro after becoming the Trickster's mask. A Greek poet who tried to retrieve his wife from Hades, but she vanished when he looked back before reaching the surface."
    },
    "Orpheus Picaro": {
      "inherits": "Almighty",
      "item": "Agidyne",
      "itemr": "Maragidyne",
      "skillCard": true,
      "level": 29,
      "arcana": "Fool",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "wk",
        "-",
        "-",
        "-",
        "rs",
        "wk"
      ],
      "skills": {
        "Cadenza": 0,
        "Maragion": 0,
        "Matarunda": 0,
        "Endure": 30,
        "Agidyne": 32,
        "Matarukaja": 33,
        "Fire Boost": 35
      },
      "stats": [
        19,
        19,
        19,
        19,
        18
      ],
      "trait": "Circle of Sadness",
      "dlc": true,
      "background": "A Persona turned picaro after becoming the Trickster's mask. A Greek poet who tried to retrieve his wife from Hades, but she vanished when he looked back before reaching the surface."
    },
    "Raoul": {
      "inherits": "Almighty",
      "item": "Picaresque Hat",
      "itemr": "Picaresque Crown",
      "level": 76,
      "arcana": "Fool",
      "elems": [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "nu"
      ],
      "skills": {
        "Phantom Show": 0,
        "Eigaon": 0,
        "Ali Dance": 0,
        "Maeigaon": 78,
        "Heat Riser": 79,
        "Curse Amp": 80,
        "Concentrate": 81,
        "Life Aid": 82
      },
      "stats": [
        47,
        49,
        43,
        54,
        42
      ],
      "trait": "Hazy Presence",
      "dlc": true,
      "background": "Another alias of Maurice Leblanc's hero, Arsène Lupin. Infamous as a phantom thief, he was also known to be a man of many friends, lovers, and treasured allies."
    },
    "Thanatos": {
      "inherits": "Almighty",
      "item": "Darkness Ring",
      "itemr": "Darkness Ring R",
      "level": 65,
      "arcana": "Death",
      "elems": [
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "rp"
      ],
      "skills": {
        "Door of Hades": 0,
        "Maeigaon": 0,
        "Mamudoon": 0,
        "Curse Amp": 66,
        "One-shot Kill": 68,
        "Fortified Moxy": 69,
        "Enduring Soul": 70
      },
      "stats": [
        43,
        49,
        41,
        38,
        31
      ],
      "trait": "Iron Heart",
      "dlc": true,
      "background": "A Persona of another story. The Greek god of death, he is the son of Nyx and the twin brother of Hypnos. He is known to provide mortals with a peaceful death."
    },
    "Thanatos Picaro": {
      "inherits": "Almighty",
      "item": "Maeigaon",
      "itemr": "Demonic Decree",
      "skillCard": true,
      "level": 69,
      "arcana": "Death",
      "elems": [
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "rp"
      ],
      "skills": {
        "Door of Hades": 0,
        "Maeigaon": 0,
        "Mamudoon": 0,
        "Mudo Boost": 70,
        "One-shot Kill": 72,
        "Adverse Resolve": 73,
        "Enduring Soul": 74
      },
      "stats": [
        45,
        51,
        43,
        40,
        35
      ],
      "trait": "Iron Heart",
      "dlc": true,
      "background": "A Persona turned picaro after becoming the Trickster's mask. The Greek god of death, he is the son of Nyx and the twin brother of Hypnos. He is known to provide mortals with a peaceful death."
    },
    "Tsukiyomi": {
      "inherits": "Almighty",
      "item": "Black Moon",
      "itemr": "Black Moon R",
      "level": 50,
      "arcana": "Moon",
      "elems": [
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "rs",
        "rp"
      ],
      "skills": {
        "Abyssal Wings": 0,
        "Absorb Curse": 0,
        "Myriad Slashes": 0,
        "Life Drain": 0,
        "Curse Amp": 53,
        "Vorpal Blade": 55,
        "Arms Master": 56
      },
      "stats": [
        38,
        32,
        33,
        37,
        17
      ],
      "trait": "Bolstering Force",
      "dlc": true,
      "background": "A Persona of another story. An important god born from the Japanese god Izanagi, he governs over the moon and the night. There are many theories behind this mysterious god."
    },
    "Tsukiyomi Picaro": {
      "inherits": "Almighty",
      "item": "Spell Master",
      "itemr": "Arms Master",
      "skillCard": true,
      "level": 55,
      "arcana": "Moon",
      "elems": [
        "rs",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "wk",
        "rs",
        "rp"
      ],
      "skills": {
        "Abyssal Wings": 0,
        "Absorb Curse": 0,
        "Myriad Slashes": 0,
        "Spirit Drain": 0,
        "Curse Amp": 58,
        "Vorpal Blade": 60,
        "Spell Master": 61
      },
      "stats": [
        41,
        35,
        36,
        40,
        20
      ],
      "trait": "Bolstering Force",
      "dlc": true,
      "background": "A Persona turned picaro after becoming the Trickster's mask. An important god born from the Japanese god Izanagi, he governs over the moon and the night. There are many theories behind this mysterious god."
    }
  }