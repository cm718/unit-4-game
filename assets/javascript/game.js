$(document).ready(function() {

  var targetNum = 0;
  var score = 0;
  var redVal = 0;
  var blueVal = 0;
  var yellowVal = 0;
  var greenVal = 0;
  var wins = 0;
  var losses = 0;

  function generateNum(min_value, max_value) {
    return Math.floor(Math.random() * (max_value - min_value) + min_value);
  };

  function newGame() {
    // Setting new values for target and gems

    // Set the targetNum between 19 and 120
    targetNum = generateNum(19, 120);
    // Set the html for the new target number
    $("#targetNum").text(targetNum);

    // Give a random number between 1 - 12 to redVal
    redVal = generateNum(1, 12);
    $("#red").attr("data-value", redVal);

    // Give a random number between 1 - 12 to blueVal
    blueVal = generateNum(1, 12);
    $("#blue").attr("data-value", blueVal);

    // Give a random number between 1 - 12 to yellowVal
    yellowVal = generateNum(1, 12);
    $("#yellow").attr("data-value", yellowVal);

    // Give a random number between 1 - 12 to greenVal
    greenVal = generateNum(1, 12);
    $("#green").attr("data-value", greenVal);

    // Console logging for debugging and testing
    // console.log("Target Number is " + targetNum);
    // console.log("Red is " + redVal);
    // console.log("Blue is " + blueVal);
    // console.log("Yellow is " + yellowVal);
    // console.log("Green is " + greenVal);
  };

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
