console.log("Let's play! apps.js is connected");

$(function(){
//grab gameBoard
var $gameBoard = $("#game-board");
var $player = "red";
var $positions = $(".positions");

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
    $positions.css("background-color", "white");
    console.log("reset button clicked");
    alert("Click start for a new game");
});

//on click function
var $play = function(){
    $positions.on('click', $checkedClicked);
    console.log("this is the play function");

};

//checks if the space has been clicked
var $checkedClicked = function(){
  // console.log("this is the checkedClicked function");
  var $theClass = $(this).attr("class");
  var $that = $(this);
  console.log($that);
      // console.log($that);
      if ($theClass === "positions clicked"){
        // alert("This space is taken, please select another");
      } else {
        $(this).addClass("clicked");
        // $(this).attr("played", "true");
        $assignSpace($that);
      }
    }

var $assignSpace = function($that){
  // console.log("this is the assignSpace function");
  var $win = $(this);
  // console.log($win);
      if ($player === "red"){
        console.log("Hey red");
        $that.addClass("red");
        $player = "yellow";
      } else {
        console.log("Hey yellow");
        $that.addClass("yellow");
        $player = "red";
       }
       $winner($that);

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
var $winner = function($win){
  console.log("this is the winner function"+ $win);
  if (($win == "positions.clicked.red")
          && (($A === $B && $C === $D) ||
             ($A === $E && $I === $M) ||
             ($A === $F && $K === $P) ||
             ($D === $H && $L === $P) ||
             ($D === $G && $J === $M) ||
             ($M === $N && $O === $P) ||
             ($E === $F && $G === $H) ||
             ($I === $J && $K === $L) ||
             ($B === $F && $J === $N) ||
             ($C === $G && $K === $O))){
            alert("Red is the winner");
          } else if (($win == "positions.clicked.yellow")
            && ($A === $B && $C === $D )||
               ($A === $E && $I === $M) ||
               ($A === $F && $K === $P) ||
               ($D === $H && $L === $P) ||
               ($D === $G && $J === $M) ||
               ($M === $N && $O === $P) ||
               ($E === $F && $G === $H) ||
               ($I === $J && $K === $L) ||
               ($B === $F && $J === $N )||
               ($C === $G && $K === $O)){
              alert("Yellow is the winner");
         } else {
              console.log("Next player moves");
        }
      }

});
