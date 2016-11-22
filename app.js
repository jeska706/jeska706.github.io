console.log("Let's play! apps.js is connected");

$(function(){
//grab gameBoard
var $gameBoard = $("#game-board");
var $playerTurn = "red";
var $posPositions = $(".possible-positions");

//start button
var $startBtn = $("#start-game");
  $startBtn.on("click", function(){
  // alert("Red plays first");
    console.log("start button clicked");
    $play();
});

// rest button
var $resetBtn = $("#reset");
  $resetBtn.on("click", function(){
    $posPositions.css("background-color", "white");
    console.log("reset button clicked");
    alert("Click start for a new game");
});

//on click function
var $play = function(){
    $posPositions.on('click', $checkedClicked);
    console.log("this is the play function");
    
};

//checks if the space has been clicked
var $checkedClicked = function(){
  // console.log("this is the checkedClicked function");
  var $theClass = $(this).attr("class");
  var $that = $(this);
      // console.log($theClass + " this is the class");
      if ($theClass === "possible-positions clicked"){
        // console.log("this is the if statement");
        // alert("This space is taken, please select another");
      } else {
        $(this).addClass("clicked");
        // $(this).attr("played", "true");
        // console.log("this is the else statement");
        $assignSpace($that);
      }
    }

var $assignSpace = function($that){
  // console.log("this is the assignSpace function");
      if ($playerTurn === "red"){
        console.log("Hey red");
        $that.addClass("red");
        $playerTurn = "yellow";
      } else {
        console.log("Hey yellow");
        $that.addClass("yellow");
        $playerTurn = "red";
       }
     }


var $A = $("#A");
var $B = $("#B");
var $C = $("#C");
var $D = $("#D");
var $E = $("#E");
var $F = $("#F");
var $G = $("#G");
var $H = $("#H");
var $I = $("#I");
var $J = $("#J");
var $K = $("#K");
var $L = $("#L");
var $M = $("#M");
var $N = $("#N");
var $O = $("#O");
var $P = $("#P");

//winning conditions
var $winner = function($that){
  if ($that === "possible-positions clicked red"
          && $A === $B && $C === $D ||
             $A === $E && $I === $M ||
             $A === $F && $K === $P ||
             $D === $H && $L === $P ||
             $D === $G && $J === $M ||
             $M === $N && $O === $P ||
             $E === $F && $G === $H ||
             $I === $J && $K === $L ||
             $B === $F && $J === $N ||
             $C === $G && $K === $O){
            alert("Red is the winner");
          } else if ($that === "possible-positions clicked yellow"
            && $A === $B && $C === $D ||
               $A === $E && $I === $M ||
               $A === $F && $K === $P ||
               $D === $H && $L === $P ||
               $D === $G && $J === $M ||
               $M === $N && $O === $P ||
               $E === $F && $G === $H ||
               $I === $J && $K === $L ||
               $B === $F && $J === $N ||
               $C === $G && $K === $O){
              alert("Yellow is the winner");
         } else {
              console.log("Next player moves");
        }
      }
  $winner();

});
