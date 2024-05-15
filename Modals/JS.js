"use strict";

// DOM manipulations of the CSS selectors to be used in JS
const template = document.querySelector(".template");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".close");
const openTemplate = document.querySelectorAll(".show-template");
console.log(openTemplate);

// looping through each of the show template button and adding an event listener
for (let i = 0; i < openTemplate.length; i++)
  openTemplate[i].addEventListener("click", function () {
    console.log("Button clicked ");
    template.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

// a function that closes the template when opened
const closeTemplate = function () {
  template.classList.add("hidden");
  overlay.classList.add("hidden");
};

// using the close button to close the template when opened
closeButton.addEventListener("click", closeTemplate);

// clicking outside the template to close the template
overlay.addEventListener("click", closeTemplate);

// using the ESC key in out Template doc
document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !template.classList.contains("hidden")) {
    closeTemplate();
  }
});
