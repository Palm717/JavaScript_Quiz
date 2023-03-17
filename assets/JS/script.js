var countdown = document.querySelector(".timer");
var secondsLeft = 180;
var newStyle = document.querySelectorAll("button");
var cardDisplay = document.querySelector(".card-display");
var startBtn = document.querySelector("#start");
var saveBtn = document.querySelector("#save");
var questionDisplay = document.querySelector("#question-display");
var timerDisplay = document.querySelector("#timer-display");
var answerDisplay = document.querySelector("#answer-display");
var nextBtn = document.querySelector("#next");

function quizCountdown() {
  var quizTimer = setInterval(function () {
    secondsLeft--;
    countdown.textContent = "Timer: " + secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(quizTimer);
      alert("Time is up! Try again!");
    }
  }, 1000);
}

quizCountdown();

function buttons() {
  for (i = 0; i < newStyle.length; i++) {
    newStyle[i].classList.add("buttonStyles");
  }
}

buttons();
