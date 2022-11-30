'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 10;
*/

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = '🎉Correct number';
});
