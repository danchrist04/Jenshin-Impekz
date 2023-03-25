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

// Carousel
const carousel = document.querySelector(".slide");
first = carousel.querySelectorAll("img")[0];
arrow = document.querySelectorAll(".container i");

const showHide = () => {
  let maxScroll = carousel.scrollWidth - carousel.clientWidth;
  arrow[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  if (
    Math.round(carousel.scrollLeft) == maxScroll ||
    Math.round(carousel.scrollLeft) == maxScroll - 1 ||
    Math.round(carousel.scrollLeft) == maxScroll + 1
  ) {
    arrow[1].style.display = "none";
  } else {
    arrow[1].style.display = "block";
  }
  console.log(Math.round(carousel.scrollLeft));
  console.log(maxScroll);
};

arrow.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstWidth = first.clientWidth + 5;
    if (icon.id == "left") {
      carousel.scrollLeft += -firstWidth + 1;
    } else {
      carousel.scrollLeft += firstWidth;
    }
    setTimeout(() => showHide(), 60);
  });
});

// const slider = document.querySelector(".slider");
// const prev = document.getElementById("left");
// const next = document.getElementById("right");

// next.addEventListener("click" = () => {
//     slider.style.transform = "translate(-20%)";
// });
