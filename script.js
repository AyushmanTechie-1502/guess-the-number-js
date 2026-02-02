"use strict";
let score = 3;
let highScore = 0;
let answer = Math.floor(Math.random() * 10) + 1;
document.querySelector(".win").classList.add("hidden");
document.querySelector(".lose").classList.add("hidden");
document.querySelector("#check").addEventListener("click", function () {
  let guess = Number(document.querySelector("#number").value);
  if (guess === answer) {
    document.querySelector(".win").classList.remove("hidden");
    document.querySelector("body").style.background = "#00FF00";
    document.querySelector("body").style.color = "black";
    document.querySelector(".score").innerText = score;
    document.querySelector(".startHint").innerHTML = "<h1>Yahoo!</h1>";
    document.querySelector("#reset").innerText = "Play Again";
    if (score >= highScore) {
      highScore = score;
      document.querySelector(".highscore").innerText = score;
    }
  } else if (guess != answer) {
    score--;
    document.querySelector(".score").innerText = score;
    if (guess > answer) {
      document.querySelector(".startHint").innerHTML =
        "<h4>Guess is bit high<br>&nbsp; Guess again! 📈</h4>";
    } else if (guess < answer) {
      document.querySelector(".startHint").innerHTML =
        "<h4>Guess is bit low<br>&nbsp; Guess again! 📉</h4>";
    }
  }
  if (score < 1) {
    document.querySelector("body").style.background = "#E8162E";
    document.querySelector("body").style.color = "black";
    document.querySelector("#check").disabled = true;
    document.querySelector(".lose").classList.remove("hidden");
    document.querySelector(".startHint").innerHTML = "<h1>Try Again!</h1>";
  }
});
document.querySelector("#reset").addEventListener("click", function () {
  score = 3;
  document.querySelector("#check").disabled = false;
  document.querySelector("body").style.background =
    "linear-gradient(to right, #F018F0, #E64040)";
  answer = Math.floor(Math.random() * 10) + 1;
  document.querySelector(".startHint").innerHTML = "<h2>Hint:Let's Go!</h2>";
  document.querySelector(".win").classList.add("hidden");
  document.querySelector(".lose").classList.add("hidden");
  document.querySelector(".score").innerText = 3;
  document.querySelector("#number").value = "";
  document.querySelector("body").style.color = "white";
  document.querySelector("#reset").innerText = "Try Again";
});
