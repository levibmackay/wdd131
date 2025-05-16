const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("hide");
}

menuButton.addEventListener('click', toggleMenu);