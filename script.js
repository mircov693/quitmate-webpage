function showHideMenu() {
    const menu = document.getElementById("menu");
    const isOpen = menu.classList.toggle("open");
    const burgerMenu = document.querySelector('.burger-menu')
    burgerMenu.setAttribute('aria-expanded', isOpen.toString());
    burgerMenu.classList.toggle("open"); 
}

document.querySelector('.burger-menu').addEventListener('click', showHideMenu);
document.getElementById("year").textContent = new Date().getFullYear().toString()