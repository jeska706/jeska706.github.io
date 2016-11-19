console.log("Let's play! apps.js is connected");

$(function(){
//grab gameBoard
var $gameBoard = $("#game-board");
//start button
// var $startBtn = $("#start-game");
// $startBtn.on("click", function(){
//   alert("Red plays first");
//   console.log("start button clicked");
// });

//rest button
// var $resetBtn = $("#reset");
// $resetBtn.on("click", function(){
//   $posPositions.css("background-color", "white");
//   console.log("reset button clicked");
//   $checkerClassVal = false;
// });

//possible-positions
var $posPositions = $(".possible-positions");
$posPositions.on('click', function(){
  console.log("clicked space");
  $posPositions.css("background-color", "$checkerClassVal");
});//set checkClass

$checkerClassVal = function($posPositions){
//   var $yel;
//   var $red;
//   if ($posPositions == false){
//     console.log("clicked");
//     assign new class
//     alert( nextclass + " turn");//assign next players turn
//   } else if ($posPositions == $blk || $posPositions == $red){
//     $checkClass == false;//if space is mark it's not avavilable
//     alert("That space is already taken, Please select another space.");
//   }
// };
//players

// var $colorClass = false;
// //turn indicator
// var $turn;
// game rotation function
// var $toggle = function(){
//   if ($posPositions === $colorClass){
//     //assign new $colorClass
// }
//possible-positions id
// var $A = $("#A");
// $A.on("click", function(){
//   console.log("clicked");
// })
// var $B = $("#B");
// var $C = $("#C");
// var $D = $("#D");
// var $E = $("#E");
// var $F = $("#F");
// var $G = $("#G");
// var $H = $("#H");
// var $I = $("#I");
// var $J = $("#J");
// var $K = $("#K");
// var $L = $("#L");
// var $M = $("#M");
// var $N = $("#N");
// var $O = $("#O");
// var $P = $("#P");

//winning conditions
// var $winner = function(){
//   if ($colorClass == true){
//     ($A == $B && $C == $D) ||
//     ($A == $E && $I == $M) ||
//     ($A == $F && $K == $P) ||
//     ($D == $H && $L == $P) ||
//     ($D == $G && $J == $M) ||
//     ($M == $N && $O == $P) ||
//     ($E == $F && $G == $H) ||
//     ($I == $J && $K == $L) ||
//     ($B == $F && $J == $N) ||
//     ($C == $G && $K == $O)){
//       //SET AS WINNER
//       alert( $colorClass + "is the winner"); // need to set up color
//     } else ($colorClass === false){
//     }
//   }
// }






















































});
