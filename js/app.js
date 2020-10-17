let burgerClosed = document.getElementById("burger-closed");
let burgerOpened = document.getElementById("burger-opened");
let mobileMenu = document.getElementById("mobile-menu");
let overlay = document.getElementById("menu-overlay");

function BurgerMenu() {
  let compStyle = getComputedStyle(burgerClosed);
  let style = compStyle.getPropertyValue('display');
  switch (style) {
    case "block":
      burgerClosed.style.display = "none";
      burgerOpened.style.display = "block";
      mobileMenu.style.display = "block";
      overlay.style.display = "block";
      break;
    case "none":
          burgerOpened.style.display = "none";
          burgerClosed.style.display = "block";
          mobileMenu.style.display = "none";
          overlay.style.display = "none";
  }
}
