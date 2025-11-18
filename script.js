function showHideMenu() {
    const menu = document.getElementById("menu");
    const isOpen = menu.classList.toggle("open");
    document.querySelector('.burger-menu').setAttribute('aria-expanded', isOpen.toString());
}

document.querySelector('.burger-menu')?.addEventListener('click', showHideMenu);