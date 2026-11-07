
const bouton = document.getElementById("theme-toggle");

function appliquerTheme(theme) {
    document.body.classList.toggle("dark-mode", theme === "dark");
    localStorage.setItem("theme", theme);
}
const themeEnregistre = localStorage.getItem("theme") || "dark";
appliquerTheme(themeEnregistre);

if (bouton) {
    bouton.addEventListener("click", () => {
        const modeNuit = document.body.classList.contains("dark-mode");
        appliquerTheme(modeNuit ? "light" : "dark");
    });
}
