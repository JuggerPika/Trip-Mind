// Menu
let header_nav_burger = document.querySelector(".header_nav_burger");
let menu = document.querySelector(".menu");

header_nav_burger.addEventListener("click", function () {
  header_nav_burger.classList.toggle("active");
  menu.classList.toggle("active");
});
