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

//individual div id's
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
  if($A.hasClass("red") && $B.hasClass("red") &&
     $C.hasClass("red") && $D.hasClass("red") ||
     $A.hasClass("red") && $E.hasClass("red") &&
     $I.hasClass("red") && $M.hasClass("red") ||
     $A.hasClass("red") && $F.hasClass("red") &&
     $K.hasClass("red") && $P.hasClass("red") ||
     $D.hasClass("red") && $H.hasClass("red") &&
     $L.hasClass("red") && $P.hasClass("red") ||
     $D.hasClass("red") && $G.hasClass("red") &&
     $J.hasClass("red") && $M.hasClass("red") ||
     $M.hasClass("red") && $N.hasClass("red") &&
     $O.hasClass("red") && $P.hasClass("red") ||
     $E.hasClass("red") && $F.hasClass("red") &&
     $G.hasClass("red") && $H.hasClass("red") ||
     $I.hasClass("red") && $J.hasClass("red") &&
     $K.hasClass("red") && $L.hasClass("red") ||
     $B.hasClass("red") && $F.hasClass("red") &&
     $J.hasClass("red") && $N.hasClass("red") ||
     $C.hasClass("red") && $G.hasClass("red") &&
     $K.hasClass("red") && $O.hasClass("red")){
            alert("Red is the winner");
          } else if ($A.hasClass("yellow") && $B.hasClass("yellow") &&
                     $C.hasClass("yellow") && $D.hasClass("yellow") ||
                     $A.hasClass("yellow") && $E.hasClass("yellow") &&
                     $I.hasClass("yellow") && $M.hasClass("yellow") ||
                     $A.hasClass("yellow") && $F.hasClass("yellow") &&
                     $K.hasClass("yellow") && $P.hasClass("yellow") ||
                     $D.hasClass("yellow") && $H.hasClass("yellow") &&
                     $L.hasClass("yellow") && $P.hasClass("yellow") ||
                     $D.hasClass("yellow") && $G.hasClass("yellow") &&
                     $J.hasClass("yellow") && $M.hasClass("yellow") ||
                     $M.hasClass("yellow") && $N.hasClass("yellow") &&
                     $O.hasClass("yellow") && $P.hasClass("yellow") ||
                     $E.hasClass("yellow") && $F.hasClass("yellow") &&
                     $G.hasClass("yellow") && $H.hasClass("yellow") ||
                     $I.hasClass("yellow") && $J.hasClass("yellow") &&
                     $K.hasClass("yellow") && $L.hasClass("yellow") ||
                     $B.hasClass("yellow") && $F.hasClass("yellow") &&
                     $J.hasClass("yellow") && $N.hasClass("yellow") ||
                     $C.hasClass("yellow") && $G.hasClass("yellow") &&
                     $K.hasClass("yellow") && $O.hasClass("yellow")){
                          alert("Yellow is the winner");
         } else {
              console.log("Next player moves");
        }
      }

});
