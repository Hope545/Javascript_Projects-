"use strict";
const body = document.querySelector("body"),
  hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secondHand = document.querySelector(".second"),
  modeSwitch = document.querySelector(".mode-switch");

const updateTime = () => {
  console.log("time");
  let date = new Date();
  let secToDeg = (date.getSeconds() / 60) * 360;
  let minToDeg = (date.getMinutes() / 60) * 360;
  let hourToDeg = (date.getHours() / 12) * 360;
  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hourToDeg}deg)`;
};

setInterval(updateTime, 1000);
updateTime();

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  const isDarkMode = body.classList.contains("dark");
  modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";

  localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

if (localStorage.getItem("mode") === "Dark Mode") {
  body.classList.add("dark");
  modeSwitch.textContent = "Light Mode";
}
