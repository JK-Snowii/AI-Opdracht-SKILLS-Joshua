// ==========================
// APPLY THEME
// ==========================

function applyTheme(theme) {
    document.documentElement.style.setProperty("--primary", theme.primary);
    document.documentElement.style.setProperty("--secondary", theme.secondary);
    document.documentElement.style.setProperty("--accent", theme.accent);
}



// ==========================
// HOMEPAGE PLAYER LIST
// ==========================

const playerList = document.getElementById("player-list");

if (playerList) {

    players.forEach((player, index) => {

        const card = document.createElement("div");
        card.classList.add("player-card");

        card.onclick = () => {
            window.location.href = `player.html?id=${player.id}`;
        };

        card.innerHTML = `
            <div class="player-info">
                <span class="rank">#${index + 1}</span>
                <span class="name">${player.name}</span>
                <span class="hardest">${player.hardest}</span>
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
// PLAYER PAGE LOADER
// ==========================

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const player = players.find(p => p.id === id);

if (player) {

    // Apply theme
    applyTheme(player.theme);

    // Name
    const playerName = document.getElementById("player-name");
    if (playerName) playerName.textContent = player.name;

    // Hardest
    const hardest = document.getElementById("hardest");
    if (hardest) hardest.textContent = `Hardest: ${player.hardest}`;

    // Video
    const video = document.getElementById("video");
    if (video) video.src = player.hardestVideo;

    // Achievements
    const achievementList = document.getElementById("achievements");
    if (achievementList) {
        player.achievements.forEach(a => {
            const li = document.createElement("li");
            li.textContent = a;
            achievementList.appendChild(li);
        });
    }
}