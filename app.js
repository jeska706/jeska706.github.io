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
  console.log("this is the checkedClicked function");
  $theId = $(this).attr("id");
  console.log("inside the checkedClicked function is the id: " + $theId);
  $elementClassList = this.classList;
  console.log("Inside the is the element classList: " + $elementClassList);
      if ($theId == "clicked"){
        console.log("this is the if statement")
      } else {
        // alert("This space is taken")
        $(this).addClass("clicked");
        console.log("this is the else statement");
};

var $assignSpace = function($checkedClicked){
  console.log("this is the assignSpace function");
  // $elementClassList = this.classList;
  // console.log("Inside the is the element classList: " + $elementClassList);
    if ($elementClassList === "clicked"){
      if ($playerTurn === "red"){
        console.log("Hey red");
        $(this).addClass("red");
        $playerTurn = "yellow";
      } else {
        console.log("Hey yellow");
        $(this).addClass("yellow");
        $playerTurn = "red";
       }
     }
 }
 $assignSpace();
 $winner();
};

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
var $winner = function(){
  if ($posPositions !== "clicked"){
   if ($A === $B && $C === $D ||
       $A === $E && $I === $M ||
       $A === $F && $K === $P ||
       $D === $H && $L === $P ||
       $D === $G && $J === $M ||
       $M === $N && $O === $P ||
       $E === $F && $G === $H ||
       $I === $J && $K === $L ||
       $B === $F && $J === $N ||
       $C === $G && $K === $O){
      alert(" We have a winner"); // need to set up color
    } else if ($posPositions === "clicked"){
      alert("Please selected another space");
     }
    }
  };
  $winner();

});
