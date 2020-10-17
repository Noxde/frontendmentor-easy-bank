let burgerClosed = document.getElementById("burger-closed");
let burgerOpened = document.getElementById("burger-opened");
let mobileMenu = document.getElementById("mobile-menu");
let overlay = document.getElementById("menu-overlay");

function BurgerMenu() {
  if (burgerClosed.style.display == "inline-block") {
    burgerOpened.style.display = "inline-block";
    burgerClosed.style.display = "none";
    mobileMenu.style.display = "inline-block";
    overlay.style.display = "inline-block";
  } else if (burgerOpened.style.display == "inline-block") {
    burgerClosed.style.display = "inline-block";
    burgerOpened.style.display = "none";
    mobileMenu.style.display = "none";
    overlay.style.display = "none";
  }
}
