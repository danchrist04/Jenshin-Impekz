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

// arc
const buttons = document.querySelectorAll("[data-arc-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.arcButton === "next" ? 1 : -1
    const minimaps = button
      .closest("[data-arc]")
      .querySelector("[data-minimap]")
    
      const activeMinimap = minimaps.querySelector("[data-active]")
      let newIndex = [...minimaps.children].indexOf(activeMinimap) + offset
      if (newIndex < 0) newIndex = minimaps.children.length - 1
      if (newIndex >= minimaps.children.length) newIndex = 0

      minimaps.children[newIndex].dataset.active = true
      delete activeMinimap.dataset.active
  })
})