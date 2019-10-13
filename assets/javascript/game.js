$(document).ready(function() {
  let targetNumber;
  let crystal1;
  let crystal2;
  let crystal3;
  let crystal4;
  let totalsore = 0;
  let wins = 0;
  let losses = 0;

  // Random number function
  function getRandomNumbers() {
    targetNumber = Math.floor(Math.random() * 110) + 20;
    crystal1 = Math.ceil(Math.random() * 12);
    crystal2 = Math.ceil(Math.random() * 12);
    crystal3 = Math.ceil(Math.random() * 12);
    crystal4 = Math.ceil(Math.random() * 12);
    console.log(targetNumber);
    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);
  }

  function newGame() {
    getRandomNumbers();
    totalsore = 0;
  }
  newGame();
});
