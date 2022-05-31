'use strict';
let number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const showMeMessage = function(message){
    return document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    showMeMessage('Rəqəm deyil!');
  } else if (guess === number) {
    document.querySelector('body').style.backgroundColor = '#674EA7';
    showMeMessage('Qazandınız!');
    document.querySelector('.number').textContent = number;
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }else if (guess !== number) {
    if (score > 1) {
        showMeMessage(guess > number ? 'Çox yüksək! :)': 
        'Çox aşağı! :)')
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        showMeMessage('Uduzdunuz!');
        document.querySelector('.score').textContent = 0;
      }
    } 
  })
  

document
  .querySelector('.guess')
  .addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      document.getElementById('checky').click();
    }
  });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  showMeMessage('Tapmağa başla...');
  document.querySelector('body').style.backgroundColor = 'rgb(78, 74, 74)';
  document.querySelector('.guess').value = '';
});
