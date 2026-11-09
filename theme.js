const bouton = document.getElementById("theme-toggle");

function appliquerTheme(theme) {
    document.body.classList.toggle("dark-mode", theme === "nuit");
    localStorage.setItem("site-theme", theme);

    if (bouton) {
      bouton.textContent = theme === "nuit" ? "☀️ Mode jour" : "🌙 Mode nuit";
    }
}

const themeEnregistre = localStorage.getItem("site-theme") || "nuit";
appliquerTheme(themeEnregistre);

if (bouton) {
    bouton.addEventListener("click", () => {
        const modeNuit = document.body.classList.contains("dark-mode");
        appliquerTheme(modeNuit ? "jour" : "nuit");
    });
}