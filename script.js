'use strict';

// console.log(document.querySelector('.message').textContent); // start message
// document.querySelector('.message').textContent = 'Correct Number🎉'; // chage to Correct Number
// document.querySelector('.number').textContent = '13'; //  ? change to 13
// document.querySelector('.score').textContent = '12'; //
// function toGuess() {
//   document.querySelector('.guess').value = '3';
// }
// console.log(document.querySelector('.guess').value); // 3

// let secretNumber = Math.trunc(Math.random() * 20) + 1;

// let score = 5;
// let hscore = 0;
// const message = function message(message) {
//   document.querySelector('message').textContent = message;
// };
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess);

//if the guess is not enterd
// if (!guess) {
//   message('😶‍🌫️ no number');
//   // document.querySelector('.message').textContent = '😶‍🌫️ no number';
// }

//the correct number is guessed
// else if (guess === secretNumber) {
//   // message('Correct Number🎉');
//   // document.querySelector('.message').textContent = 'Correct Number🎉';
//   document.querySelector('body').style.backgroundColor = '#60b347';
//   document.querySelector('.number').textContent = secretNumber;
//   document.querySelector('.highscore').textContent = hscore;
//   if (score > hscore) {
//     hscore = score;
//     document.querySelector('.highscore').textContent = hscore;
//   }
// } else if (guess !== secretNumber) {
//   // document.querySelector('.message').textContent =guess < secretNumber ? 'too low🦡' : 'too high🐫'
//   message(guess < secretNumber ? 'too low🦡' : 'too high🐫');
//   if (score > 1) {
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.score').textContent = 0;
//     document.querySelector('.message').textContent = 'You lost the Game🥴';
//   }
// }
//if the guess is below the secret number
// else if (guess < secretNumber) {
//   document.querySelector('.message').textContent = 'too low🦡';
//   if (score > 1) {
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.score').textContent = 0;
//     document.querySelector('.message').textContent = 'You lost the Game🥴';
//   }
// }

// //if the guess is above the secret number
// else if (guess > secretNumber) {
//   document.querySelector('.message').textContent = 'too high🐫';
//   if (score > 1) {
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.score').textContent = 0;
//     document.querySelector('.message').textContent = 'You lost the Game🥴';
//   }
// }
// });

//reset the game start new game
// document.querySelector('.again').addEventListener('click', function () {
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('body').style.backgroundColor = '#222';
//   score = 5;
//   document.querySelector('.score').textContent = score;
//   message('Start guessing...');
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.guess').value = '';
//   document.querySelector('.number').textContent = '?';
// });

// let guess = Number(document.querySelector('.guess').value);
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
