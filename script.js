function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".menu-toggle");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}