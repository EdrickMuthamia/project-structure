const countdown = document.getElementById("countdown");

const confuseThem = document.getElementById("confuse-them");
const PlayBtn = document.getElementById("play-btn");

const BtnRock = document.getElementById("btn-rock");
const BtnPaper = document.getElementById("btn-paper");
const BtnScissor = document.getElementById("btn-scissor");

const PlaySection = document.getElementById("make-choice");

let consufusionInterVal = null;
let countdownInterVal = null;

let countDownValue = 15;

// console.log(countdown);
// console.log(confuseThem);
// console.log(PlayBtn);
PlayBtn.addEventListener("click", function () {
  StartCountDown();
  ConfusionStart();
  PlaySection.style.display = "block";
});

//
BtnRock.addEventListener("click", () => {
  console.log("Rock option Clicked");
  StopGame();
  const randomNumber = Math.floor(Math.random() * 4);
  console.log(randomNumber);
  if (randomNumber === 1 || randomNumber === 0) {
    // person
    alert("You won. I will get you next time");
    return;
  }

  alert("HaHaHaHaHa. Computers are superior. You lost");
});

BtnPaper.addEventListener("click", () => {
  StopGame();
  const randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);

  if (randomNumber === 2) {
    // person
    alert("You won. I will get you next time promise");
    return;
  }

  alert("HaHaHaHaHa. Computers are superior. You lost");
});

BtnScissor.addEventListener("click", () => {
  StopGame();
  const randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  if (randomNumber === 3) {
    // person
    alert("You won. I will get you next time promise");
    return;
  }

  alert("HaHaHaHaHa. Computers are superior. You lost");
});

function StopGame() {
  //console.log("Stop Game");
  clearInterval(countdownInterVal);
  clearInterval(consufusionInterVal);
  countdown.innerText = 15;
  countDownValue = 15;
  PlaySection.style.display = "none";
}

function StartCountDown() {
  countDownValue = 15;
  countdownInterVal = setInterval(function () {
    if (countDownValue <= 0) {
      clearInterval(countdownInterVal); //Logic
      countdown.innerText = 15;
      StopGame();
      return;
    }
    countdown.innerText = countDownValue - 1;
    countDownValue = countDownValue - 1;
  }, 1000);
}

function ConfusionStart() {
  let arr = [
    `<i class="fa-solid fa-hand-back-fist" style="font-size: 100px"></i>`,
    `<i class="fa-solid fa-hand" style="font-size: 100px"></i>`,
    `<i class="fa-solid fa-hand-scissors" style="font-size: 100px"></i>`,
  ];
  consufusionInterVal = setInterval(() => {
    // Math.random
    const randomNumber = Math.floor(Math.random() * 3); // 0,1,2
    //console.log(randomNumber);
    confuseThem.innerHTML = arr[randomNumber];
  }, 200);
}


// Have the score section <human,pc> Tally Total:
// Have the player name being Shown