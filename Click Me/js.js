"use strict";
const clickMeBtn = document.querySelector(".click-me");
clickMeBtn.addEventListener("click", (e) => {
  document.body.style.backgroundColor = `rgb( ${Math.round(
    Math.random() * 255
  )}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
});
