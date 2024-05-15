"use strict";
const startBtn = document.querySelector(".start"),
  stopBtn = document.querySelector(".stop"),
  resetBtn = document.querySelector(".reset");
let hr = "0" + 0,
  min = "0" + 0,
  sec = "0" + 0,
  ms = "0" + 0,
  startTimer;

const putValue = () => {
  document.querySelector(".millisecond").textContent = ms;
  document.querySelector(".second").textContent = sec;
  document.querySelector(".minute").textContent = min;
  document.querySelector(".hour").textContent = hr;
};

const start = () => {
  startBtn.classList.add("active");
  stopBtn.classList.remove("active");
  resetBtn.classList.remove("active");

  startTimer = setInterval(() => {
    ms++;
    ms = ms < 10 ? "0" + ms : ms;

    if (ms == 100) {
      sec++;
      ms = "0" + 0;
      sec = sec < 10 ? "0" + sec : sec;
    }
    if (sec == 60) {
      min++;
      sec = "0" + 0;
      min = min < 10 ? "0" + min : min;
    }
    if (min == 60) {
      hr++;
      min = "0" + 0;
      hr = hr < 10 ? "0" + hr : hr;
    }
    putValue();
    document.querySelector(".start").textContent = "Start";
  }, 10);
};

const stop = () => {
  startBtn.classList.remove("active");
  stopBtn.classList.add("active");
  resetBtn.classList.remove("active");
  clearInterval(startTimer);
  document.querySelector(".start").textContent = "Continue";
};

const reset = () => {
  startBtn.classList.remove("active");
  stopBtn.classList.remove("active");
  resetBtn.classList.add("active");
  clearInterval(startTimer);
  (hr = "0" + 0), (min = "0" + 0), (sec = "0" + 0), (ms = "0" + 0);
  document.querySelector(".start").textContent = "Start";
  putValue();
};

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
