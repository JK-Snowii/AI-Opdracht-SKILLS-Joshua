// ==========================
// PLAYER DATA
// ==========================

const players = [

    {
        id: "zoink",
        name: "Zoink",
        hardest: "Tidal Wave",
        hardestVideo: "https://www.youtube.com/embed/9fsZ014qB3s",

        thumbnail: "images/zoink.jpg",

        icons: {
            iconset: "icons/zoink-icons.png"
        },

        achievements: [
            "Tidal Wave",
            "Acheron",
            "Avernus"
        ],

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
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/wpopoff.jpg",

        icons: {
            iconset: "icons/wpopoff-icons.png"
        },

        achievements: [
            "Acheron",
            "Slaughterhouse",
            "Sakupen Circles"
        ],

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
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/trick.jpg",

        icons: {
            iconset: "icons/trick-icons.png"
        },

        achievements: [
            "Acheron",
            "Firework",
            "Silent Clubstep"
        ],

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
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/netermind.jpg",

        icons: {
            iconset: "icons/netermind-icons.png"
        },

        achievements: [
            "Avernus",
            "Kyouki",
            "Slaughterhouse"
        ],

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
        hardestVideo: "https://www.youtube.com/embed/xxxx",

        thumbnail: "images/servax.jpg",

        icons: {
            iconset: "icons/servax-icons.png"
        },

        achievements: [
            "Acheron",
            "Kenos",
            "Codependence"
        ],

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
        hardestVideo: "https://www.youtube.com/embed/xxxx",
        icons: {
            cube: "url",
            ship: "url",
            ball: "url"
        },
        achievements: [
            "Acheron",
            "Kyouki",
            "Firework"
        ],
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
        hardestVideo: "https://www.youtube.com/embed/xxxx",
        icons: {
            cube: "url",
            ship: "url",
            ball: "url"
        },
        achievements: [
            "Avernus",
            "Slaughterhouse",
            "Kenos"
        ],
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
        hardestVideo: "https://www.youtube.com/embed/xxxx",
        icons: {
            cube: "url",
            ship: "url",
            ball: "url"
        },
        achievements: [
            "Kyouki",
            "Acheron",
            "Limbo"
        ],
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
        hardestVideo: "https://www.youtube.com/embed/xxxx",
        icons: {
            cube: "url",
            ship: "url",
            ball: "url"
        },
        achievements: [
            "Slaughterhouse",
            "Firework",
            "Kenos"
        ],
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
        hardestVideo: "https://www.youtube.com/embed/xxxx",
        icons: {
            cube: "url",
            ship: "url",
            ball: "url"
        },
        achievements: [
            "Acheron",
            "Kyouki",
            "Sakupen Circles"
        ],
        theme: {
            primary: "#ff66cc",
            secondary: "#120012",
            accent: "#ffffff"
        }
    }
];


// ==========================
// HOMEPAGE PLAYER LIST
// ==========================

const playerList = document.getElementById("player-list");

if (playerList) {

    players.forEach((player, index) => {

        const card = document.createElement("div");

        card.classList.add("player-card");

        card.onclick = () => {
            window.location.href =
                `player.html?id=${player.id}`;
        };

        card.innerHTML = `
        
            <div class="player-info">

                <span class="rank">
                    #${index + 1}
                </span>

                <span class="name">
                    ${player.name}
                </span>

                <span class="hardest">
                    ${player.hardest}
                </span>

            </div>

            <img 
                src="${player.thumbnail}" 
                class="hardest-thumb"
                alt="${player.name}"
            >
        `;

        playerList.appendChild(card);
    });
}


// ==========================
// PLAYER PAGE LOGIC
// ==========================

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const player = players.find(p => p.id === id);

if (player) {

    // Theme Colors

    document.documentElement.style.setProperty(
        "--primary",
        player.theme.primary
    );

    document.documentElement.style.setProperty(
        "--secondary",
        player.theme.secondary
    );

    document.documentElement.style.setProperty(
        "--accent",
        player.theme.accent
    );


    // Name

    const playerName =
        document.getElementById("player-name");

    if (playerName) {
        playerName.textContent = player.name;
    }


    // Hardest

    const hardest =
        document.getElementById("hardest");

    if (hardest) {
        hardest.textContent =
            `Hardest: ${player.hardest}`;
    }


    // Video

    const video =
        document.getElementById("video");

    if (video) {
        video.src = player.hardestVideo;
    }


    // Achievements

    const achievementList =
        document.getElementById("achievements");

    if (achievementList) {

        player.achievements.forEach(achievement => {

            const li = document.createElement("li");

            li.textContent = achievement;

            achievementList.appendChild(li);
        });
    }
}