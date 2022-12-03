'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const init = function () {
  // reassign
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // reset the score on the interface
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // if the class is there, js do nothing
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');

  // if the class is not there, js do nothing
  player1El.classList.remove('player--active');

  diceEl.classList.add('hidden');
};

// call the function when page loads
init();

const switchPlayer = function () {
  // Switch to next player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 1 ? 0 : 1;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    console.log(dice);
    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Holding functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    // add current score to total score
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check total socre >= 100
    if (scores[activePlayer] >= 10) {
      // finish the game
      playing = false;
      diceEl.classList.add('hidden'); // hide the dice
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // switch player
      switchPlayer();
    }
  }
});

// // New game functionality
// btnNew.addEventListener('click', function () {
//   // // remove winner
//   // document
//   //   .querySelector(`.player--${activePlayer}`)
//   //   .classList.remove('player--winner');

//   // // player 0 play first
//   // if (!player0El.classList.contains('player--active')) {
//   //   player0El.classList.add('player--active');
//   // }
//   // playing = true;
//   // currentScore = 0;
//   // activePlayer = 0;
//   // scores[0] = 0;
//   // scores[1] = 0;
//   // score0El.textContent = 0;
//   // score1El.textContent = 0;
//   // current0El.textContent = 0;
//   // current1El.textContent = 0;
// });
btnNew.addEventListener('click', init);
