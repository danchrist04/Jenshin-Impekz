// Side Menu
var navItems = document.getElementById("nav-items");
function show() {
  navItems.style.right = "0";
}
function hide() {
  navItems.style.right = "-300px";
}

// Sticky Navigation Bar
window.onscroll = function () {
  stickyFunc();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyFunc() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}