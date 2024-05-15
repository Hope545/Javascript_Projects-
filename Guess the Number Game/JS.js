"use strict";

// // How to select an html elements and styles with JS, using the DOM manipulation
// console.log(document.querySelector(".message").textContent);

// // Using DOM elements and properties to manipulate html element with a class of message
// document.querySelector(".message").textContent = "Correct Number!";
// console.log(document.querySelector(".message").textContent); // checking for the update on the content of the class manipulated

// // DOM on both the number class and score class in the html document
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// //DOM on the input class
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

// implementing game logic
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector(".number").textContent = secretNumber;

// click of buttons, using event listeners
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when the player didn't give an input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";
  }

  // when the player wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = secretNumber;
    // DOM manipulations on CSS
    document.querySelector(".one").style.backgroundColor = "#60b200";
    document.querySelector(".two").style.backgroundColor = "#60b200";
    document.querySelector(".number").style.width = "100px";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  // when the player's guess is greater than the random number generated
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".one").style.backgroundColor = "#808080";
      document.querySelector(".two").style.backgroundColor = "#808080";
      document.querySelector(".number").textContent = secretNumber;
    }
  }

  // when the player's guess is less than the random generated nummber
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".one").style.backgroundColor = "#808080";
      document.querySelector(".two").style.backgroundColor = "#808080";
      document.querySelector(".number").textContent = secretNumber;
    }
  }
});

// restoring the game to it's initial values after it has been won or lost
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = " ";
  document.querySelector(".message").textContent = "Start guessing ...";
  document.querySelector(".one").style.backgroundColor = "#faebd7";
  document.querySelector(".two").style.backgroundColor = "#faebd7";
  document.querySelector(".number").style.width = "50px";
});
