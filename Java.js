// ==========================
// APPLY THEME
// ==========================

function applyTheme(theme) {
    document.documentElement.style.setProperty("--primary", theme.primary);
    document.documentElement.style.setProperty("--secondary", theme.secondary);
    document.documentElement.style.setProperty("--accent", theme.accent);
}



// ==========================
// HOMEPAGE PLAYER LIST + SEARCH
// ==========================

const playerList = document.getElementById("player-list");
const searchBar = document.getElementById("search-bar");

if (playerList) {

    function renderPlayers(filter = "") {
        playerList.innerHTML = "";

        players
            .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
            .forEach((player, index) => {

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

    renderPlayers();

    if (searchBar) {
        searchBar.addEventListener("input", () => {
            renderPlayers(searchBar.value);
        });
    }
}



// ==========================
// PLAYER PAGE LOADER
// ==========================

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const player = players.find(p => p.id === id);

if (player) {

    applyTheme(player.theme);

    const playerName = document.getElementById("player-name");
    if (playerName) playerName.textContent = player.name;

    const hardest = document.getElementById("hardest");
    if (hardest) hardest.textContent = `Hardest: ${player.hardest}`;

    const video = document.getElementById("video");
    if (video) video.src = player.hardestVideo;

    const achievementList = document.getElementById("achievements");
    if (achievementList) {
        player.achievements.forEach(a => {
            const li = document.createElement("li");
            li.textContent = a;
            achievementList.appendChild(li);
        });
    }
}

const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("side-menu");

hamburger.addEventListener("click", () => {
    sideMenu.classList.toggle("open");
});