var countdown = document.querySelector(".timer");
var secondsLeft = 180;
var newStyle = document.querySelectorAll("button");

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
