'use strict';
const number = document.querySelector('.number');
const check = document.querySelector('.check');
const highScoreText = document.querySelector('.highscore');
const scoreText = document.querySelector('.score');
const displayText = function (message) {
  document.querySelector('.message').textContent = message;
};
const again = document.querySelector('.again');
const body = document.querySelector('body');
let score = 20;
let highScore = 0;
let secretNumber = Math.floor(Math.random() * 20) + 1; //random number generator

// console.log(secretNumber);

//function to compare values and output accordingly.
check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayText('Enter a value! 🚫');
  } else if (guess === secretNumber) {
    displayText('You did it! 🍻');
    body.style.backgroundColor = '#007f5f';
    number.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      highScoreText.textContent = highScore;
    }
  } else if (guess != secretNumber) {
    if (score > 0) {
      displayText(guess > secretNumber ? 'Too High! 📈' : 'Too Low! 📉');
      score--;
      scoreText.textContent = score;
    } else {
      displayText('You lost!👨🏻‍💻');
      scoreText.textContent = 0;
      body.style.backgroundColor = '#880808';
    }
  }
});
// function to restart the game
again.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  scoreText.textContent = score;
  document.querySelector('.guess').value = '';
  body.style.backgroundColor = '#090909';
  displayText('Start guessing...');
  number.textContent = '?';
});
