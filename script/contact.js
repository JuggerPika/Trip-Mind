// Menu
let header_nav_burger = document.querySelector(".header_nav_burger");
let menu = document.querySelector(".menu");

header_nav_burger.addEventListener("click", function () {
  header_nav_burger.classList.toggle("active");
  menu.classList.toggle("active");
});

// Counter
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondEl = document.getElementById("second");

const newTour = "30 Nov 2023";

function countDown() {
  const newTourDate = new Date(newTour);
  const currentDown = new Date();

  const totalSeconds = new Date(newTourDate - currentDown) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = mins;
  secondEl.innerHTML = seconds;
}

// initial call
countDown();

setInterval(countDown, 1000);
