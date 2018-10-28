$(document).ready(function() {
  // Set my four global variables for the game
  var targetNum = 0;
  var score = 0;
  var wins = 0;
  var losses = 0;

  // Declare a function to generate a random number in a range.
  function generateNum(min_value, max_value) {
    return Math.floor(Math.random() * (max_value - min_value) + min_value);
  };

  // Declare a function that will set a crytal value and create an html attribute
  function setCrystal(crystalType){
    var crystalVal = generateNum(1, 12);
    $("#" + crystalType).attr("data-value", crystalVal);
  }

  // Declare a variable that will reset the game by assigning new values
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

  // Declare a variable that will check when the game is over
  function gameOver(){
    // Check if the game is over because of a loss
    if (score > targetNum){
      // Increase the losses variable
      losses++;
      // Update the losses score on the page
      $("#losses").text(losses);
      // Alert the user that they lost
      alert("BUMMER BRO! Let's play again.");
      // Set the score tracking variable to 0 again
      score = 0;
      // Run the new game function
      newGame();
      // Change the html score to reflect the reset variable
      $("#score").text(score);
      // Or run if the game is over because of a win
    } else if (score == targetNum){
      // Increase the wins variable
      wins++;
      // Increase the wins text on the page
      $("#wins").text(wins);
      // Alert the user that they won and invite to play again.
      alert("RIGHTEOUS WIN! Let's play again.");
      // Run the new game function to reset the values
      newGame();
      // Reset the score counting variable.
      score = 0;
      // Reset the score counting text on the page.
      $("#score").text(score);
    }
  }

  // Set click event listener for each crystal
  $(".crystal").on("click", function(){
    // Increase the score by the data-value of the crystal that was clicked
    score = score + parseInt($(this).attr("data-value"));
    // Update the html score on the page
    $("#score").text(score);
    // Check if this new score ends the game or not.
    gameOver();
  });

  newGame();
});
