// players.js
const players = [
    {
        id: "zoink",
        name: "Zoink",
        hardest: "Tidal Wave",
        hardestVideo: "https://www.youtube.com/embed/9fsZ014qB3s",

        thumbnail: "images/zoink.png",

        achievements: ["Tidal Wave", "Acheron", "Avernus"],

        theme: {
            primary: "#00c3ff",
            secondary: "#0b0f1a",
            accent: "#ffffff"
        }
    },

    {
        id: "wpopoff",
        name: "wPopoff",
        hardest: "Acheron",
        hardestVideo: "https://www.youtube.com/embed/QV0lz9c8BYw",

        thumbnail: "images/wpopoff.png",


        achievements: ["Acheron", "Slaughterhouse", "Sakupen Circles"],

        theme: {
            primary: "#ff4444",
            secondary: "#111111",
            accent: "#ffcc00"
        }
    },

    {
        id: "trick",
        name: "Trick",
        hardest: "Acheron",
        hardestVideo: "https://www.youtube.com/embed/ttsK0KYHJb8",

        thumbnail: "images/trick.png",


        achievements: ["Acheron", "Firework", "Silent Clubstep"],

        theme: {
            primary: "#aa00ff",
            secondary: "#0d0d0d",
            accent: "#ffffff"
        }
    },

    {
        id: "netermind",
        name: "Netermind",
        hardest: "Avernus",
        hardestVideo: "https://www.youtube.com/embed/csTgoj00VQI",

        thumbnail: "images/netermind.png",


        achievements: ["Avernus", "Kyouki", "Slaughterhouse"],

        theme: {
            primary: "#ff6600",
            secondary: "#1a1a1a",
            accent: "#ffd700"
        }
    },

    {
        id: "servax",
        name: "SerVax",
        hardest: "Acheron",
        hardestVideo: "https://www.youtube.com/embed/dYounJFa6f8",

        thumbnail: "images/servax.png",

        achievements: ["Acheron", "Kenos", "Codependence"],

        theme: {
            primary: "#ff6600",
            secondary: "#1a1a1a",
            accent: "#ffd700"
        }
    },

    {
        id: "a6",
        name: "A6",
        hardest: "Acheron",
        hardestVideo: "https://www.youtube.com/embed/wLlQAWoSsPo",

        thumbnail: "images/a6.png",

        achievements: ["Acheron", "Kyouki", "Firework"],

        theme: {
            primary: "#3366ff",
            secondary: "#0a0a0a",
            accent: "#66ccff"
        }
    },

    {
        id: "w3rty",
        name: "w3rty",
        hardest: "Avernus",
        hardestVideo: "https://www.youtube.com/embed/SAgyELodik8",
        thumbnail: "images/w3rty.png",

        achievements: ["Avernus", "Slaughterhouse", "Kenos"],

        theme: {
            primary: "#ff0055",
            secondary: "#111111",
            accent: "#ffffff"
        }
    },

    {
        id: "taiago",
        name: "Taiago",
        hardest: "Kyouki",
        hardestVideo: "https://www.youtube.com/embed/UyKJ4VAz5Hc",

        thumbnail: "images/taiago.png",

        achievements: ["Kyouki", "Acheron", "Limbo"],

        theme: {
            primary: "#00ffaa",
            secondary: "#0d1117",
            accent: "#88ffee"
        }
    },

    {
        id: "doggie",
        name: "Doggie",
        hardest: "Slaughterhouse",
        hardestVideo: "https://www.youtube.com/embed/kpcF1-QAHQc",

        thumbnail: "images/doggie.png",

        achievements: ["Slaughterhouse", "Firework", "Kenos"],

        theme: {
            primary: "#ff2222",
            secondary: "#1a0000",
            accent: "#ffffff"
        }
    },

    {
        id: "roze",
        name: "ROZE",
        hardest: "Acheron",
        hardestVideo: "https://www.youtube.com/embed/QLxVOIzFCO4",
        thumbnail: "images/roze.png",

        achievements: ["Acheron", "Kyouki", "Sakupen Circles"],

        theme: {
            primary: "#ff66cc",
            secondary: "#120012",
            accent: "#ffffff"
        }
    },

    {
        id: "diamond",
        name: "Diamond",
        hardest: "Acheron",
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/diamond.png",

        achievements: [
            "Acheron",
            "Kyouki",
            "Firework"
        ],

        theme: {
            primary: "#00e5ff",
            secondary: "#0a0a0a",
            accent: "#ffffff"
        }
    },
    {
        id: "spaceuk",
        name: "SpaceUK",
        hardest: "Slaughterhouse",

        hardestVideo: "https://www.youtube.com/embed/xxxx",
        thumbnail: "images/spaceuk.png",

        achievements: [
            "Slaughterhouse",
            "Sakupen Circles",
            "Firework"
        ],

        theme: {
            primary: "#00ff88",
            secondary: "#08120d",
            accent: "#ffffff"
        }
    },
    {
        id: "cursed",
        name: "Cursed",
        hardest: "Acheron",

        hardestVideo: "https://www.youtube.com/embed/xxxx",
        thumbnail: "images/cursed.png",

        achievements: [
            "Acheron",
            "Avernus",
            "Kyouki"
        ],

        theme: {
            primary: "#ff3333",
            secondary: "#100000",
            accent: "#ffffff"
        }
    },
    {
        id: "akira",
        name: "Akira",
        hardest: "Avernus",

        hardestVideo: "https://www.youtube.com/embed/xxxx",
        thumbnail: "images/akira.png",

        achievements: [
            "Avernus",
            "Kenos",
            "Slaughterhouse"
        ],

        theme: {
            primary: "#ff8800",
            secondary: "#1a1100",
            accent: "#ffe066"
        }
    },
    {
        id: "nswish",
        name: "nSwish",
        hardest: "Acheron",

        hardestVideo: "https://www.youtube.com/embed/xxxx",
        thumbnail: "images/nswish.png",

        achievements: [
            "Acheron",
            "The Golden",
            "Kenos"
        ],

        theme: {
            primary: "#ff4444",
            secondary: "#111111",
            accent: "#ffdd55"
        }
    },
    {
        id: "luqualizer",
        name: "Luqualizer",
        hardest: "Kyouki",

        hardestVideo: "https://www.youtube.com/embed/xxxx",
        thumbnail: "images/luqualizer.png",

        achievements: [
            "Kyouki",
            "Acheron",
            "Limbo"
        ],

        theme: {
            primary: "#aa00ff",
            secondary: "#12001a",
            accent: "#ffffff"
        }
    },
    {
        id: "vision",
        name: "Vision",
        hardest: "Acheron",

        hardestVideo: "https://www.youtube.com/embed/xxxx",
        thumbnail: "images/vision.png",

        achievements: [
            "Acheron",
            "Avernus",
            "Firework"
        ],

        theme: {
            primary: "#00ffaa",
            secondary: "#001a14",
            accent: "#ffffff"
        }
    },
    {
        id: "krazyman50",
        name: "KrazyMan50",
        hardest: "Acheron",

        hardestVideo: "https://www.youtube.com/embed/xxxx",
        thumbnail: "images/krazyman50.png",

        achievements: [
            "Acheron",
            "Kenos",
            "Bloodlust"
        ],

        theme: {
            primary: "#ff0000",
            secondary: "#150000",
            accent: "#ffffff"
        }
    },
    {
        id: "parallax",
        name: "Parallax",
        hardest: "Kyouki",

        hardestVideo: "https://www.youtube.com/embed/xxxx",
        thumbnail: "images/parallax.png",

        achievements: [
            "Kyouki",
            "Acheron",
            "Firework"
        ],

        theme: {
            primary: "#4488ff",
            secondary: "#000c1f",
            accent: "#ffffff"
        }
    },
    {
        id: "timo",
        name: "Timo",
        hardest: "Avernus",

        hardestVideo: "https://www.youtube.com/embed/xxxx",
        thumbnail: "images/timo.png",

        achievements: [
            "Avernus",
            "Kyouki",
            "Slaughterhouse"
        ],

        theme: {
            primary: "#00ccff",
            secondary: "#00131a",
            accent: "#ffffff"
        }
    },

    {
        id: "technical",
        name: "Technical",
        hardest: "Firework",
        hardestVideo: "https://www.youtube.com/embed/xxxx",
        thumbnail: "images/technical.png",

        achievements: ["Firework", "Bloodlust", "Digital Descent"],

        theme: {
            primary: "#ff9900",
            secondary: "#1a1100",
            accent: "#ffffff"
        }
    },
    {
        id: "riot",
        name: "Riot",
        hardest: "Bloodlust",
        hardestVideo: "https://www.youtube.com/embed/xxxx",
        thumbnail: "images/riot.png",

        achievements: ["Bloodlust", "Bloodbath", "Cataclysm"],

        theme: {
            primary: "#ff0000",
            secondary: "#0f0000",
            accent: "#ffffff"
        }
    },
    {
        id: "sunix",
        name: "Sunix",
        hardest: "Sonic Wave",
        hardestVideo: "https://www.youtube.com/embed/xxxx",
        thumbnail: "images/sunix.png",

        achievements: ["Sonic Wave", "Yatagarasu", "Bloodbath"],

        theme: {
            primary: "#00ccff",
            secondary: "#00131a",
            accent: "#ffffff"
        }
    },
    {
        id: "xanii",
        name: "Xanii",
        hardest: "Kyouki",
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/xanii.png",
        achievements: ["Kyouki", "Avernus", "Acheron"],

        theme: {
            primary: "#44ff88",
            secondary: "#001a0d",
            accent: "#ffffff"
        }
    },
    {
        id: "dorami",
        name: "Dorami",
        hardest: "The Golden",
        hardestVideo: "https://www.youtube.com/embed/xxxx",
        thumbnail: "images/dorami.png",

        achievements: ["The Golden", "Bloodlust", "Yatagarasu"],

        theme: {
            primary: "#ff66aa",
            secondary: "#1a0010",
            accent: "#ffffff"
        }
    },
    {
        id: "krmal",
        name: "KrmaL",
        hardest: "Black Blizzard",
        hardestVideo: "https://www.youtube.com/embed/xxxx",
        thumbnail: "images/krmal.png",

        achievements: ["Black Blizzard", "Phobos", "Artificial Ascent"],

        theme: {
            primary: "#9900ff",
            secondary: "#12001a",
            accent: "#ffffff"
        }
    },
    {
        id: "npesta",
        name: "Npesta",
        hardest: "Kenos",
        hardestVideo: "https://www.youtube.com/embed/xxxx",
        thumbnail: "images/npesta.png",

        achievements: ["Kenos", "Bloodlust", "Black Blizzard"],

        theme: {
            primary: "#ff4444",
            secondary: "#111111",
            accent: "#ffffff"
        }
    },
    {
        id: "michigun",
        name: "Michigun",
        hardest: "Artificial Ascent",
        hardestVideo: "https://www.youtube.com/embed/xxxx",
        thumbnail: "images/michigun.png",

        achievements: ["Artificial Ascent", "Bloodbath", "Temple Series"],

        theme: {
            primary: "#00ffcc",
            secondary: "#001a14",
            accent: "#ffffff"
        }
    },
    {
        id: "mulpan",
        name: "Mulpan",
        hardest: "Acheron",
        hardestVideo: "https://www.youtube.com/embed/xxxx",
        thumbnail: "images/mulpan.png",

        achievements: ["Acheron", "Kyouki", "Avernus"],

        theme: {
            primary: "#ffaa00",
            secondary: "#1a1200",
            accent: "#ffffff"
        }
    },
    {
        id: "paqoe",
        name: "Paqoe",
        hardest: "Avernus",
        hardestVideo: "https://www.youtube.com/embed/xxxx",
        thumbnail: "images/paqoe.png",

        achievements: ["Avernus", "Slaughterhouse", "Kyouki"],

        theme: {
            primary: "#ff8800",
            secondary: "#1a0d00",
            accent: "#ffffff"
        }
    },
    {
        id: "juniper",
        name: "Juniper",
        hardest: "Cataclysm",
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/juniper.png",

        achievements: ["Cataclysm", "Acu", "Future Funk"],

        theme: {
                primary: "#ff99ff",
                secondary: "#1a001a",
                accent: "#ffffff"
            }
        },
    {
        id: "evw",
        name: "EVW",
        hardest: "Bloodbath",
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/evw.png",

        achievements: ["Bloodbath", "Yatagarasu", "Digital Descent"],

        theme: {
            primary: "#ffff00",
            secondary: "#1a1a00",
            accent: "#ffffff"
        }
    },
    {
        id: "partition",
        name: "Partition",
        hardest: "Acheron",
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/partition.png",

        achievements: ["Acheron", "Avernus", "Kyouki"],

        theme: {
            primary: "#00ffaa",
            secondary: "#001a12",
            accent: "#ffffff"
        }
    },
    {
        id: "ufwm",
        name: "UFWM",
        hardest: "Firework",
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/ufwm.png",

        achievements: ["Firework", "Slaughterhouse", "Kenos"],

        theme: {
            primary: "#ff3300",
            secondary: "#1a0500",
            accent: "#ffffff"
        }
    },
    {
        id: "snowy",
        name: "Snowy",
        hardest: "Kyouki",
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/snowy.png",

        achievements: ["Kyouki", "Acheron", "Firework"],

        theme: {
            primary: "#99ddff",
            secondary: "#00131a",
            accent: "#ffffff"
        }
    },
    {
        id: "crack",
        name: "Crack",
        hardest: "Avernus",
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/crack.png",

        achievements: ["Avernus", "Kyouki", "Acheron"],

        theme: {
            primary: "#ff0055",
            secondary: "#1a0010",
            accent: "#ffffff"
        }
    },
    {
        id: "cyclic",
        name: "Cyclic",
        hardest: "Cataclysm",
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/cyclic.png",

        achievements: ["Cataclysm", "ICDX", "Theory of Skrillex"],

        theme: {
            primary: "#00ff66",
            secondary: "#001a08",
            accent: "#ffffff"
        }
    },
    {
        id: "andromeda",
        name: "Andromeda",
        hardest: "Bloodbath",
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/andromeda.png",

        achievements: ["Bloodbath", "Cataclysm", "Sonic Wave"],

        theme: {
            primary: "#ff4444",
            secondary: "#150000",
            accent: "#ffffff"
        }
    },
    {
        id: "guitar",
        name: "GuitarHeroStyles",
        hardest: "Bloodlust",
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/guitar.png",

        achievements: ["Bloodlust", "Bloodbath", "Yatagarasu"],

        theme: {
            primary: "#ffaa00",
            secondary: "#1a1200",
            accent: "#ffffff"
        }
    },
    {
        id: "trusta",
        name: "Trusta",
        hardest: "Acheron",
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/trusta.png",

        achievements: ["Acheron", "Avernus", "Kyouki"],

        theme: {
            primary: "#00aaff",
            secondary: "#00111a",
            accent: "#ffffff"
        }
    },
    {
        id: "bgram",
        name: "BGram",
        hardest: "Kenos",
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/bgram.png",

        achievements: ["Kenos", "Firework", "Bloodlust"],

        theme: {
            primary: "#ff0088",
            secondary: "#1a0011",
            accent: "#ffffff"
        }
    },
    {
        id: "stormfly",
        name: "Stormfly",
        hardest: "Avernus",
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/stormfly.png",

        achievements: ["Avernus", "Acheron", "Firework"],

        theme: {
            primary: "#00ff99",
            secondary: "#001a11",
            accent: "#ffffff"
        }
    },
    {
        id: "nexus",
        name: "Nexus",
        hardest: "Bloodbath",
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/nexus.png",

        achievements: ["Bloodbath", "Artificial Ascent", "Sonic Wave"],

        theme: {
            primary: "#4488ff",
            secondary: "#000d1a",
            accent: "#ffffff"
        }
    },
    {
        id: "surv",
        name: "Surv",
        hardest: "Acheron",
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/surv.png",

        achievements: ["Acheron", "Kyouki", "Avernus"],

        theme: {
            primary: "#cc00ff",
            secondary: "#14001a",
            accent: "#ffffff"
        }
    },
    {
        id: "cob",
        name: "Cob",
        hardest: "Firework",
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/cob.png",

        achievements: ["Firework", "Kenos", "Slaughterhouse"],

        theme: {
            primary: "#ff6600",
            secondary: "#1a0a00",
            accent: "#ffffff"
        }
    },
    {
        id: "ufd",
        name: "UFD",
        hardest: "Acheron",
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/ufd.png",

        achievements: ["Acheron", "Avernus", "Kyouki"],

        theme: {
            primary: "#00ddff",
            secondary: "#00151a",
            accent: "#ffffff"
        }
    },
    {
        id: "shukketsu",
        name: "Shukketsu",
        hardest: "Avernus",
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/shukketsu.png",

        achievements: ["Avernus", "Acheron", "Firework"],

        theme: {
            primary: "#ff2222",
            secondary: "#150000",
            accent: "#ffffff"
        }
    },
    {
        id: "gdcolon",
        name: "GD Colon",
        hardest: "Acu",
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/gdcolon.png",

        achievements: ["Acu", "Future Funk II", "Magma Bound"],

        theme: {
            primary: "#ffaa44",
            secondary: "#1a1000",
            accent: "#ffffff"
        }
    },
    {
        id: "moric",
        name: "Moric",
        hardest: "Kyouki",
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/moric.png",

        achievements: ["Kyouki", "Avernus", "Acheron"],

        theme: {
            primary: "#66ffcc",
            secondary: "#001a14",
            accent: "#ffffff"
        }
    },
    {
        id: "vortrox",
        name: "Vortrox",
        hardest: "Firework",
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/vortrox.png",

        achievements: ["Firework", "Kenos", "Slaughterhouse"],

        theme: {
            primary: "#00ccff",
            secondary: "#00131a",
            accent: "#ffffff"
        }
    }
];