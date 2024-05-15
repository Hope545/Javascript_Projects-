"use scrict";

// if i were using an ID in my html doc, instead of using '.querySelector' after the 'document', i could simply use write;
// 'document.getElementById.('NAME OF ID TO BE SELECTED');

//selecting elemnts
const player1Lost = document.querySelector(".player1");
const player2Lost = document.querySelector(".player2");
const winner1HighScoreColor = document.querySelector(".player1-highscore");
const winner2HighScoreColor = document.querySelector(".player2-highscore");
const player1Winner = document.querySelector(".player1");
const player2Winner = document.querySelector(".player2");
const player1Part2 = document.querySelector(".player1-part2");
const player2Part2 = document.querySelector(".player2-part2");
const player1Current = document.querySelector(".player1-current");
const player2Current = document.querySelector(".player2-current");
const player1ActiveRegion = document.querySelector(".one");
const player2ActiveRegion = document.querySelector(".two");
const player1Play = document.querySelector(".player1-play");
const player2Play = document.querySelector(".player2-play");
const player1HighScore = document.querySelector(".player1-highscore");
const player1ScoreValue = document.querySelector(".player1-score-value");
const player2HighScore = document.querySelector(".player2-highscore");
const player2ScoreValue = document.querySelector(".player2-score-value");
const buttonRollDice = document.querySelector(".roll-dice");
const buttonHoldDice = document.querySelector(".hold");
const buttonNewGame = document.querySelector(".new-game");
const dice = document.querySelectorAll(".dice");
const totalDice = dice.length;

// starting conditions
let currentScore, activePlayer, scores, playing;

// if a player wins the game
const playerWins = function () {
  // if the highscore of player1 is >= 100
  if (scores[activePlayer] >= 100 && activePlayer === 1) {
    player1Winner.classList.add("player-winner");
    winner1HighScoreColor.classList.add("winner-highscore-color");
    player1ActiveRegion.classList.add("game-winner");
    playing = false;
    document.querySelector(".player1").textContent = "PLAYER 1 WON";
    document.querySelector(".player2").textContent = "PLAYER 2 LOST";
    player2Lost.classList.add("player-lost");
    player2ScoreValue.textContent = 0;
    player2HighScore.textContent = 0;
    // document.querySelectorAll(".dice").classList.add("hidden");
    dice[0].classList.add("hidden");
    dice[1].classList.add("hidden");
    dice[2].classList.add("hidden");
    dice[3].classList.add("hidden");
    dice[4].classList.add("hidden");
    dice[5].classList.add("hidden");
  }
  // if the highscore of player 2 is >= 100
  else if (scores[activePlayer] >= 100 && activePlayer === 2) {
    player2Winner.classList.add("player-winner");
    winner2HighScoreColor.classList.add("winner-highscore-color");
    player2ActiveRegion.classList.add("game-winner");
    playing = false;
    document.querySelector(".player2").textContent = "PLAYER 2 WON";
    document.querySelector(".player1").textContent = "PLAYER 1 LOST";
    player1Lost.classList.add("player-lost");
    player1ScoreValue.textContent = 0;
    player1HighScore.textContent = 0;
    // document.querySelectorAll(".dice").classList.add("hidden");
    dice[0].classList.add("hidden");
    dice[1].classList.add("hidden");
    dice[2].classList.add("hidden");
    dice[3].classList.add("hidden");
    dice[4].classList.add("hidden");
    dice[5].classList.add("hidden");
  } else {
    // switching player
    switchPlayer();
  }
};

//initializing the game after the new game button has been clicked
const initialValues = function () {
  //starting conditions
  currentScore = 0;
  activePlayer = 1;
  scores = [0, 0, 0];
  playing = true;

  // hidding dice
  dice[0].classList.add("hidden");
  dice[1].classList.add("hidden");
  dice[2].classList.add("hidden");
  dice[3].classList.add("hidden");
  dice[4].classList.add("hidden");
  dice[5].classList.add("hidden");

  // reseting the visual aspecct of the game
  player1ScoreValue.textContent = 0;
  player1HighScore.textContent = 0;
  document.querySelector(".player1").textContent = "PLAYER 1";
  player1Winner.classList.remove("player-winner");
  winner1HighScoreColor.classList.remove("winner-highscore-color");
  player1ActiveRegion.classList.remove("game-winner");
  player2ScoreValue.textContent = 0;
  player2HighScore.textContent = 0;
  document.querySelector(".player2").textContent = "PLAYER 2";
  player2Winner.classList.remove("player-winner");
  winner2HighScoreColor.classList.remove("winner-highscore-color");
  player2ActiveRegion.classList.remove("game-winner");
  player2ActiveRegion.classList.remove("active-player-region");
  player1ActiveRegion.classList.add("active-player-region");
  player1Current.classList.add("active-current");
  player2Current.classList.remove("active-current");
  player2ScoreValue.classList.remove("active-score-value");
  player1ScoreValue.classList.add("active-score-value");
  player2HighScore.classList.remove("active-highscore");
  player1HighScore.classList.add("active-highscore");
  player2Play.classList.remove("active-player");
  player1Play.classList.add("active-player");
  player2Part2.classList.remove("active-part2");
  player1Part2.classList.add("active-part2");
  player2Lost.classList.remove("player-lost");
  player1Lost.classList.remove("player-lost");
};

initialValues();

// switching player if the random rolled dice is 1 or the hold button is clicked
const switchPlayer = function () {
  document.querySelector(`.player${activePlayer}-score-value`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 1 ? 2 : 1;

  // making the active player stand out visually
  player1Play.classList.toggle("active-player");
  player2Play.classList.toggle("active-player");

  player1ActiveRegion.classList.toggle("active-player-region");
  player2ActiveRegion.classList.toggle("active-player-region");

  player1Current.classList.toggle("active-current");
  player2Current.classList.toggle("active-current");

  player1ScoreValue.classList.toggle("active-score-value");
  player2ScoreValue.classList.toggle("active-score-value");

  player1Part2.classList.toggle("active-part2");
  player2Part2.classList.toggle("active-part2");

  player1HighScore.classList.toggle("active-highscore");
  player2HighScore.classList.toggle("active-highscore");
};

// setting the initial values of the high score of each player to zero
player1HighScore.textContent = 0;
player2HighScore.textContent = 0;

//rolling dice function
// ROLL DICE BUTTON
buttonRollDice.addEventListener("click", function () {
  if (playing) {
    // generating a random dice roll
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    console.log(randomDice);

    //writing an if else statement to dispay each due with each roll
    if (randomDice === 1) {
      dice[0].classList.remove("hidden");
      dice[1].classList.add("hidden");
      dice[2].classList.add("hidden");
      dice[3].classList.add("hidden");
      dice[4].classList.add("hidden");
      dice[5].classList.add("hidden");
    } else if (randomDice === 2) {
      dice[1].classList.remove("hidden");
      dice[0].classList.add("hidden");
      dice[2].classList.add("hidden");
      dice[3].classList.add("hidden");
      dice[4].classList.add("hidden");
      dice[5].classList.add("hidden");
    } else if (randomDice === 3) {
      dice[2].classList.remove("hidden");
      dice[0].classList.add("hidden");
      dice[1].classList.add("hidden");
      dice[3].classList.add("hidden");
      dice[4].classList.add("hidden");
      dice[5].classList.add("hidden");
    } else if (randomDice === 4) {
      dice[3].classList.remove("hidden");
      dice[0].classList.add("hidden");
      dice[1].classList.add("hidden");
      dice[2].classList.add("hidden");
      dice[4].classList.add("hidden");
      dice[5].classList.add("hidden");
    } else if (randomDice === 5) {
      dice[4].classList.remove("hidden");
      dice[0].classList.add("hidden");
      dice[1].classList.add("hidden");
      dice[2].classList.add("hidden");
      dice[3].classList.add("hidden");
      dice[5].classList.add("hidden");
    } else {
      dice[5].classList.remove("hidden");
      dice[0].classList.add("hidden");
      dice[1].classList.add("hidden");
      dice[2].classList.add("hidden");
      dice[3].classList.add("hidden");
      dice[4].classList.add("hidden");
    }
    document.querySelector("body").style.height = "100vh";
    // NOTE: i wrote codes to display each die individually but i used a CSS property to hide them which made my HTML code a bit longer
    // NOW i can just write the HTML code to display anyone of the die and use JS to display the rest if i want
    //  OPEN THE JS_3_DRY FOR THE CONCISE CODE

    // check if the player rolled 1; and if true switch to next player
    if (randomDice !== 1) {
      // add to current score
      currentScore += randomDice;
      document.querySelector(`.player${activePlayer}-score-value`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// HOLD BUTTON
buttonHoldDice.addEventListener("click", function () {
  if (playing) {
    // add current score to the active player's high score
    // console.log(activePlayer, currentScore);
    scores[activePlayer] += currentScore;
    // console.log(activePlayer, scores[activePlayer]);
    document.querySelector(`.player${activePlayer}-highscore`).textContent =
      scores[activePlayer];

    // checking if player's score is >= 100 and which player wins the game
    playerWins();
  }
});

// reseting the game when the new button is clicked
buttonNewGame.addEventListener("click", function () {
  initialValues();
});
