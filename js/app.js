let burger = document.getElementById("burger");
let mobileMenu = document.getElementById("mobile-menu");
let overlay = document.getElementById("menu-overlay");

function BurgerMenu() {
  if (burger.getAttribute("src") == "/images/icon-hamburger.svg") {
    burger.src = "/images/icon-close.svg";
    mobileMenu.style.display = "block";
    overlay.style.display = "block";
  } else if (burger.getAttribute("src") == "/images/icon-close.svg") {
    burger.src = "/images/icon-hamburger.svg";
    mobileMenu.style.display = "none";
    overlay.style.display = "none";
  }
}
