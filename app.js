console.log("Let's play! apps.js is connected");

$(function(){
//grab gameBoard
var $gameBoard = $("#game-board");
//start button
var $yel;//if var isn't a dom element how can you set the color?
// $yel.addClass("yellow");
var $red;
// $red.addClass("red");
var $playerTurn = "red";

var $startBtn = $("#start-game");
$startBtn.on("click", function(){
  alert("Red plays first");
  console.log("start button clicked");
  while($clicked == false){
    //continue game & toggle
  }
});

// rest button
var $resetBtn = $("#reset");
  $resetBtn.on("click", function(){
  $posPositions.css("background-color", "white");
  console.log("reset button clicked");
  alert("Click start for a new game")
});

//possible-positions divs
var $posPositions = $(".possible-positions");

//checking to see if element has been clicked
// var $clicked = false;
// $posPositions.on("click", function(){
//   $clicked = true;
//     if ($clicked == false){
//       alert("Please selected another space");
//     } else {
//         return false;
//     };
// })

//possible-positions
// var $play = function($possiblePositions){
//   for (var i = 0; i < $possiblePositions.length; i++){
//   $possiblePositions.on('click', $clicked);
//     console.log("play clicked");
//   };

 //set checkClass

// var $checkerVal;
//
// var $play = function(){
//   if ($startBtn && $posPositions == true){//if the start position & posPositions are clicked display red
//     // $posPositions.css("background-color", "red");
//       $posPositions.on("click", function(){
//       });
//     }
// }
//
// var $togglePlayer = function($checkerVal){
//   if($posPositions == false){
//     $posPositions.css("background-color", "red");
//   } else {
//     $posPositions.css("background-color", "yellow")
//   }
// }
// var $colorClass = false;
// //turn indicator
// var $turn;
// game rotation function
// var $toggle = function(){
//   if ($posPositions === $colorClass){
//     //assign new $colorClass
// }
//possible-positions id
// if ()

var $A = $("#A");
$A.on("click", function(){
  $(this).addClass("rowOne");
  $(this).addClass("columnOne");
    if ($playerTurn === "red"){
      console.log("Hey red");
      $(this).addClass("red");
      $playerTurn = "yellow"
    } else if ($playerTurn === "yellow"){
      console.log("Hey yellow");
      $(this).addClass("yellow");
      $playerTurn = "red"
    } else {
      console.log("Too crowded!!!");
    }
});

var $B = $("#B");
$B.on("click", function(){
  $(this).addClass("rowOne");
  $(this).addClass("columnTwo");
    if ($playerTurn === "red"){
      console.log("Hey red");
      $(this).addClass("red");
      $playerTurn = "yellow"
    } else if ($playerTurn === "yellow"){
      console.log("Hey yellow");
      $(this).addClass("yellow");
      $playerTurn = "red"
    } else {
      console.log("Too crowded!!!");
    }
});

var $C = $("#C");
$C.on("click", function(){
  $(this).addClass("rowOne");
  $(this).addClass("columnThree");
    if ($playerTurn === "red"){
      console.log("Hey red");
      $(this).addClass("red");
      $playerTurn = "yellow"
    } else if ($playerTurn === "yellow"){
      console.log("Hey yellow");
      $(this).addClass("yellow");
      $playerTurn = "red"
    } else {
      console.log("Too crowded!!!");
    }
});

var $D = $("#D");
$D.on("click", function(){
  $(this).addClass("rowOne");
  $(this).addClass("columnFour");
    if ($playerTurn === "red"){
      console.log("Hey red");
      $(this).addClass("red");
      $playerTurn = "yellow"
    } else if ($playerTurn === "yellow"){
      console.log("Hey yellow");
      $(this).addClass("yellow");
      $playerTurn = "red"
    } else {
      console.log("Too crowded!!!");
    }
});

var $E = $("#E");
$E.on("click", function(){
  $(this).addClass("rowTwo");
  $(this).addClass("columnOne");
    if ($playerTurn === "red"){
      console.log("Hey red");
      $(this).addClass("red");
      $playerTurn = "yellow"
    } else if ($playerTurn === "yellow"){
      console.log("Hey yellow");
      $(this).addClass("yellow");
      $playerTurn = "red"
    } else {
      console.log("Too crowded!!!");
    }
});

var $F = $("#F");
$F.on("click", function(){
  $(this).addClass("rowTwo");
  $(this).addClass("columnTwo");
    if ($playerTurn === "red"){
      console.log("Hey red");
      $(this).addClass("red");
      $playerTurn = "yellow"
    } else if ($playerTurn === "yellow"){
      console.log("Hey yellow");
      $(this).addClass("yellow");
      $playerTurn = "red"
    } else {
      console.log("Too crowded!!!");
    }
});

var $G = $("#G");
$G.on("click", function(){
  $(this).addClass("rowTwo");
  $(this).addClass("columnThree");
    if ($playerTurn === "red"){
      console.log("Hey red");
      $(this).addClass("red");
      $playerTurn = "yellow"
    } else if ($playerTurn === "yellow"){
      console.log("Hey yellow");
      $(this).addClass("yellow");
      $playerTurn = "red"
    } else {
      console.log("Too crowded!!!");
    }
});

var $H = $("#H");
$H.on("click", function(){
  $(this).addClass("rowTwo");
  $(this).addClass("columnFour");
    if ($playerTurn === "red"){
      console.log("Hey red");
      $(this).addClass("red");
      $playerTurn = "yellow"
    } else if ($playerTurn === "yellow"){
      console.log("Hey yellow");
      $(this).addClass("yellow");
      $playerTurn = "red"
    } else {
      console.log("Too crowded!!!");
    }
});

var $I = $("#I");
$I.on("click", function(){
  $(this).addClass("rowThree");
  $(this).addClass("columnOne");
    if ($playerTurn === "red"){
      console.log("Hey red");
      $(this).addClass("red");
      $playerTurn = "yellow"
    } else if ($playerTurn === "yellow"){
      console.log("Hey yellow");
      $(this).addClass("yellow");
      $playerTurn = "red"
    } else {
      console.log("Too crowded!!!");
    }
});

var $J = $("#J");
$J.on("click", function(){
  $(this).addClass("rowThree");
  $(this).addClass("columnTwo");
    if ($playerTurn === "red"){
      console.log("Hey red");
      $(this).addClass("red");
      $playerTurn = "yellow"
    } else if ($playerTurn === "yellow"){
      console.log("Hey yellow");
      $(this).addClass("yellow");
      $playerTurn = "red"
    } else {
      console.log("Too crowded!!!");
    }
});

var $K = $("#K");
$K.on("click", function(){
  $(this).addClass("rowThree");
  $(this).addClass("columnThree");
    if ($playerTurn === "red"){
      console.log("Hey red");
      $(this).addClass("red");
      $playerTurn = "yellow"
    } else if ($playerTurn === "yellow"){
      console.log("Hey yellow");
      $(this).addClass("yellow");
      $playerTurn = "red"
    } else {
      console.log("Too crowded!!!");
    }
});

var $L = $("#L");
$L.on("click", function(){
  $(this).addClass("rowThree");
  $(this).addClass("columnFour");
    if ($playerTurn === "red"){
      console.log("Hey red");
      $(this).addClass("red");
      $playerTurn = "yellow"
    } else if ($playerTurn === "yellow"){
      console.log("Hey yellow");
      $(this).addClass("yellow");
      $playerTurn = "red"
    } else {
      console.log("Too crowded!!!");
    }
});

var $M = $("#M");
$M.on("click", function(){
  $(this).addClass("rowFour");
  $(this).addClass("columnOne");
    if ($playerTurn === "red"){
      console.log("Hey red");
      $(this).addClass("red");
      $playerTurn = "yellow"
    } else if ($playerTurn === "yellow"){
      console.log("Hey yellow");
      $(this).addClass("yellow");
      $playerTurn = "red"
    } else {
      console.log("Too crowded!!!");
    }
});

var $N = $("#N");
$N.on("click", function(){
  $(this).addClass("rowFour");
  $(this).addClass("columnTwo");
    if ($playerTurn === "red"){
      console.log("Hey red");
      $(this).addClass("red");
      $playerTurn = "yellow"
    } else if ($playerTurn === "yellow"){
      console.log("Hey yellow");
      $(this).addClass("yellow");
      $playerTurn = "red"
    } else {
      console.log("Too crowded!!!");
    }
});

var $O = $("#O");
$O.on("click", function(){
  $(this).addClass("rowFour");
  $(this).addClass("columnThree");
    if ($playerTurn === "red"){
      console.log("Hey red");
      $(this).addClass("red");
      $playerTurn = "yellow"
    } else if ($playerTurn === "yellow"){
      console.log("Hey yellow");
      $(this).addClass("yellow");
      $playerTurn = "red"
    } else {
      console.log("Too crowded!!!");
    }
});

var $P = $("#P");
$P.on("click", function(){
  $(this).addClass("rowFour");
  $(this).addClass("columnFour");
    if ($playerTurn === "red"){
      console.log("Hey red");
      $(this).addClass("red");
      $playerTurn = "yellow"
    } else if ($playerTurn === "yellow"){
      console.log("Hey yellow");
      $(this).addClass("yellow");
      $playerTurn = "red"
    } else {
      console.log("Too crowded!!!");
    }
});

//tried to put into an array
// var $possiblePositionsId = {
//   $A = $("#A"),
//   $B = $("#B"),
//   $C = $("#C"),
//   $D = $("#D"),
//   $E = $("#E"),
//   $F = $("#F"),
//   $G = $("#G"),
//   $H = $("#H"),
//   $I = $("#I"),
//   $J = $("#J"),
//   $K = $("#K"),
//   $L = $("#L"),
//   $M = $("#M"),
//   $N = $("#N"),
//   $O = $("#O"),
//   $P = $("#P")
// }
// winning conditions
// var $winner = function(){
//    if ($A == $B && $C == $D ||
//        $A == $E && $I == $M ||
//        $A == $F && $K == $P ||
//        $D == $H && $L == $P ||
//        $D == $G && $J == $M ||
//        $M == $N && $O == $P ||
//        $E == $F && $G == $H ||
//        $I == $J && $K == $L ||
//        $B == $F && $J == $N ||
//        $C == $G && $K == $O){
//       //SET AS WINNER
//       alert($playerTurn + "is the winner"); // need to set up color
//     }
//   // else ($playerTurn === false){
//     }
  // }
// }
//

});
