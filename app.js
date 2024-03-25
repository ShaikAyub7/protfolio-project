"strict";

const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal-contact");
const modal3 = document.querySelector(".modal-about");
const modal4 = document.querySelector(".modal-projects");
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
const projects = document.querySelector(".projects");

// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
// navBtn.addEventListener("click", function () {
//   sidebar.classList.add("show-sidebar");
// });
// closeBtn.addEventListener("click", function () {
//   sidebar.classList.remove("show-sidebar");
// });
// set year
date.innerHTML = new Date().getFullYear();

var loader = document.getElementById("preloader");

// window.addEventListener("load", function () {
//   loader.style.display = "none";
// });

home.addEventListener("mouseenter", function () {
  // modal.classList.add("hidden");
  modal.classList.remove("hidden");
  modal2.classList.add("hidden");
  modal4.classList.add("hidden");
  modal3.classList.add("hidden");
});
navbar.addEventListener("mouseleave", function () {
  modal.classList.add("hidden");
  // modal.classList.remove("hidden");
});
modal.addEventListener("mouseleave", function () {
  modal.classList.add("hidden");
  // modal.classList.remove("hidden");
});
modal.addEventListener("mouseenter", function () {
  // modal.classList.add("hidden");
  modal.classList.remove("hidden");
});
about.addEventListener("mouseenter", function () {
  // modal.classList.add("hidden");
  modal3.classList.remove("hidden");
  modal2.classList.add("hidden");
  modal.classList.add("hidden");
  modal4.classList.add("hidden");
});
navbar.addEventListener("mouseleave", function () {
  modal3.classList.add("hidden");
  // modal.classList.remove("hidden");
});
contact.addEventListener("mouseenter", function () {
  // modal.classList.add("hidden");
  modal2.classList.remove("hidden");
  modal4.classList.add("hidden");
  modal.classList.add("hidden");
  modal3.classList.add("hidden");
});
projects.addEventListener("mouseenter", function () {
  // modal.classList.add("hidden");
  modal4.classList.remove("hidden");
  modal2.classList.add("hidden");
  modal.classList.add("hidden");
  modal3.classList.add("hidden");
});
navbar.addEventListener("mouseleave", function () {
  modal2.classList.add("hidden");
  // modal.classList.remove("hidden");
});
navbar.addEventListener("mouseleave", function () {
  modal4.classList.add("hidden");
  // modal.classList.remove("hidden");
});

modal2.addEventListener("mouseleave", function () {
  modal2.classList.add("hidden");
  // modal.classList.remove("hidden");
});
modal2.addEventListener("mouseenter", function () {
  // modal.classList.add("hidden");
  modal2.classList.remove("hidden");
});
modal3.addEventListener("mouseleave", function () {
  modal3.classList.add("hidden");
  // modal.classList.remove("hidden");
});
modal3.addEventListener("mouseenter", function () {
  // modal.classList.add("hidden");
  modal3.classList.remove("hidden");
});
modal4.addEventListener("mouseleave", function () {
  modal4.classList.add("hidden");
  // modal.classList.remove("hidden");
});
modal4.addEventListener("mouseenter", function () {
  // modal.classList.add("hidden");
  modal4.classList.remove("hidden");
});
