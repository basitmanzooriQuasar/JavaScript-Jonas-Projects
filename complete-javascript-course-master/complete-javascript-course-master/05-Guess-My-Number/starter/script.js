'use strict';

// //reading the content of the element
// console.log(document.querySelector('.message').textContent);

// //new content set to the element
// document.querySelector('.message').textContent = 'Correct Number!';

// //read the new content
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 30;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//defining secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//initial score
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  //if there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number 😢 ';
  } else if (guess === secretNumber) {
    //displaying message
    document.querySelector('.message').textContent = 'Correct Number 🎊 ';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //displaying Correct Number
    document.querySelector('.number').textContent = secretNumber;
  } //when the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? 'Number is too High 🔺 '
          : 'Number is too Low 🔻 ';
      score--;
      //Displaying updated Score
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Lost ❌';
      document.querySelector('.score').textContent = 0;
    }
  }
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Number is too High 🔺 ';
  //       score--;
  //       //Displaying updated Score
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'Game Lost ❌';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Number is too Low 🔻 ';
  //       score--;
  //       //Displaying updated Score
  //       document.querySelector('.score').textContent = score;
  // }
  else {
    document.querySelector('.message').textContent = 'Game Lost ❌';
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#000000';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
