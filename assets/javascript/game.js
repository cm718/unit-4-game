$(document).ready(function() {

  var targetNum = 0;
  var score = 0;
  var wins = 0;
  var losses = 0;

  function generateNum(min_value, max_value) {
    return Math.floor(Math.random() * (max_value - min_value) + min_value);
  };

  function setCrystal(crystalType){
    var crystalVal = generateNum(1, 12);
    $("#" + crystalType).attr("data-value", crystalVal);
  }

  function newGame() {
    // Set the targetNum between 19 and 120
    targetNum = generateNum(19, 120);
    // Set the html for the new target number
    $("#targetNum").text(targetNum);
    // Run setCrystal for each gem based on it's id
    $(".crystal").each(function(){
      setCrystal($(this).attr('id'));
    })
  }

  function gameOver(){
    // Check if the game is over
    if (score > targetNum){
      losses++;
      $("#losses").text(losses);
      alert("BUMMER BRO!");
      score = 0;
      newGame();
      $("#score").text(score);
    } else if (score == targetNum){
      wins++;
      $("#wins").text(wins);
      alert("MATHEMATICAL!");
      newGame();
      score = 0;
      $("#score").text(score);
    }
  }

  $(".crystal").on("click", function(){
    console.log($(this).attr("data-value"));
    score = score + parseInt($(this).attr("data-value"));
    $("#score").text(score);
    gameOver();
  });

  newGame();
});
