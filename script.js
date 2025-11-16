function showHideMenu() {
    const menu = document.getElementById("menu");
    if (menu.className === "menu") {
        menu.className += "-mobile"
    } else {
        menu.className = "menu"
    }
}