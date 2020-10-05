let burger = document.getElementById("burger");

function BurgerMenu() {
  if (burger.getAttribute("src") == "/images/icon-hamburger.svg") {
    burger.src = "/images/icon-close.svg";
  } else if (burger.getAttribute("src") == "/images/icon-close.svg") {
    burger.src = "/images/icon-hamburger.svg";
  }
}
