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

  function newGemsAndTarget() {
    // Setting new values for target and gems
    var targetNum = generateNum(19, 120);
    // Set the html for the new target number
    $("#targetNum").text(targetNum);

    // Set give a random number between 1 - 12 to redVal
    var redVal = generateNum(1, 12);
    // Click event for red
    $("#red").on("click", function(){
      score = score + redVal;
      $("#score").text(score);
    });

    // Set give a random number between 1 - 12 to blueVal
    var blueVal = generateNum(1, 12);
    // Click event for blueVal
    $("#blue").on("click", function(){
      score = score + blueVal;
      $("#score").text(score);
    });

    // Set give a random number between 1 - 12 to yellowVal
    var yellowVal = generateNum(1, 12);
    // Click event for yellow
    $("#yellow").on("click", function(){
      score = score + yellowVal;
      $("#score").text(score);
    });

    // Set give a random number between 1 - 12 to greenVal
    var greenVal = generateNum(1, 12);
    // Click event for green
    $("#green").on("click", function(){
      score = score + greenVal;
      $("#score").text(score);
    });
    // Console logging for debugging and testing
    console.log("Target Number is " + targetNum);
    console.log("Red Number is " + redVal);
    console.log("Blue Number is " + blueVal);
    console.log("Yellow Number is " + yellowVal);
    console.log("Green Number is " + greenVal);

  };

  function resetGame() {
    // Call for new gem values and a new target number
    newGemsAndTarget();
    // Reset the score to 0
    score = 0;
    // Reset the html score to 0
    $("#score").text("0");
    // Reset the wins value to 0
    wins = 0;
    // Reset the html wins to 0
    $("#wins").text("0");
    // Reset the losses value to 0
    losses = 0;
    // Reset the losses html to 0
    $("#losses").text("0");
  };

  // function gameOver(){
    // Check if the game is over
    if (score > targetNum){
      losses = losses + 1;
      $("#losses").text(losses);
      newGemsAndTarget();
    } else if (score = targetNum){
      wins = wins + 1;
      $("#wins").text(wins);
      newGemsAndTarget();
    }
  // }

  resetGame();
});
