'use strict';
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const value = document.querySelector('.score');
const hscore = document.querySelector('.highscore');
const hiden = document.querySelector('.number');
const body = document.querySelector('body');
const button = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNumber);

function checkGuess() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.innerHTML = '⛔ No Number';
    return;
  }

  if (guess === secretNumber) {
    message.innerHTML = '🎉 Correct Number!';
    hiden.innerHTML = secretNumber;
    body.classList.add('win');

    if (score > highscore) {
      highscore = score;
    }
  } else if (guess > secretNumber) {
    message.innerHTML = '📈 Too high!';
    score--;
  } else {
    message.innerHTML = '📉 Too low!';
    score--;
  }
  value.innerHTML = score;
  hscore.innerHTML = highscore;
}

function again() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  body.classList.remove('win');
  score = 20;
  message.innerHTML = 'Start guessing...';
  value.innerHTML = score;
  hiden.innerHTML = '?';
  document.querySelector('.guess').value = '';
}

check.addEventListener('click', checkGuess);
button.addEventListener('click', again);
