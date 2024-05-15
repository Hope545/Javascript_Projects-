"use strict";
const tabsBox = document.querySelector(".tabs-box"),
  arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false;
const dragging = (e) => {
  console.log("dragging...");
  if (!isDragging) return;
  tabsBox.classList.add("dragging");
  tabsBox.scrollLeft -= e.movementX;
};

tabsBox.addEventListener("mousedown", () => {
  isDragging = true;
});
tabsBox.addEventListener("mousemove", dragging);

const dragStop = () => {
  isDragging = false;
  tabsBox.classList.remove("dragging");
};
document.addEventListener("mouseup", dragStop);

const handleIcons = () => {
  let scrollVal = Math.round(tabsBox.scrollLeft);
  let maxScrollWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
  arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
  arrowIcons[1].parentElement.style.display =
    maxScrollWidth > scrollVal ? "flex" : "none";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    console.log(icon.id);
    tabsBox.scrollLeft += icon.id === "left" ? -350 : 350;
    setTimeout(() => {
      handleIcons();
    }, 50);
  });
});
