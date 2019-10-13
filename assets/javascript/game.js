$(document).ready(function() {
  let targetNumber;
  let crystal1;
  let crystal2;
  let crystal3;
  let crystal4;
  let totalScore = 0;
  let wins = 0;
  let losses = 0;
  let message;

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

  // NewGame / Reset function
  function newGame() {
    getRandomNumbers();
    totalScore = 0;
    $("#target-number").text(targetNumber);
    $("#total-score").text(totalScore);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#message").text(message);
  }

  // Click functions for each crystal
  $("#crystal1").on("click", function() {
    totalScore += crystal1;
    $("#total-score").text(totalScore);
    console.log(totalScore);
    winLose();
  });

  $("#crystal2").on("click", function() {
    totalScore += crystal2;
    $("#total-score").text(totalScore);
    console.log(totalScore);
    winLose();
  });

  $("#crystal3").on("click", function() {
    totalScore += crystal3;
    $("#total-score").text(totalScore);
    console.log(totalScore);
    winLose();
  });

  $("#crystal4").on("click", function() {
    totalScore += crystal4;
    $("#total-score").text(totalScore);
    console.log(totalScore);
    winLose();
  });

  // Win or Lose check function
  function winLose() {
    if (totalScore === targetNumber) {
      $("#message").html(message);
      wins++;
      message = "YOU WIN! - PLAY AGAIN";
      $("#wins").text(wins);
      newGame();
    } else if (totalScore > targetNumber) {
      message = "YOU LOSE - TRY AGAIN";
      $("#message").html(message);
      losses++;
      $("#losses").text(losses);
      newGame();
    }
  }
  newGame();
});
