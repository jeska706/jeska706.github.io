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
    // $positions.removeClass("click", "red", "yellow");
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
  var $theClass = $(this).attr("class");
  var $that = $(this);
  console.log($theClass);
  console.log($that);

      if ($that.hasClass("clicked")){
        alert("This space is taken, please select another");
        console.log(this);

      } else {
        $(this).addClass("clicked");
        $assignSpace($that);
        console.log("this is that: " + $that);
        console.log($theClass);

      }
    }

//assigns color class
var $assignSpace = function($that){
  console.log($that);
  var $win = this;
  console.log("This is this in assignSpace: " + $win);
      if ($player === "red"){
        console.log("Hey red");
        $that.addClass("red");
        $player = "yellow";
      } else {
        console.log("Hey yellow");
        $that.addClass("yellow");
        $player = "red";
       }
       console.log($that);
       $winner($that);
     }

//individual div id's
var $A = $("#A"); var $B = $("#B"); var $C = $("#C");
var $D = $("#D"); var $E = $("#E"); var $F = $("#F");
var $G = $("#G"); var $H = $("#H"); var $I = $("#I");
var $J = $("#J"); var $K = $("#K"); var $L = $("#L");
var $M = $("#M"); var $N = $("#N"); var $O = $("#O");
var $P = $("#P"); var $Q = $("#Q"); var $R = $("#R");
var $S = $("#S"); var $T = $("#T"); var $U = $("#U");
var $V = $("#V"); var $W = $("#W"); var $X = $("#X");
var $Y = $("#Y"); var $Z = $("#Z"); var $AA = $("#AA");
var $BB = $("#BB"); var $CC = $("#CC"); var $DD = $("#DD");
var $EE = $("#EE"); var $FF = $("#FF"); var $GG = $("#GG");
var $HH = $("#HH"); var $II = $("#II"); var $JJ = $("#JJ");
var $KK = $("#KK"); var $LL = $("#LL"); var $MM = $("#MM");
var $NN = $("#NN"); var $OO = $("#OO"); var $PP = $("#PP");

//winning conditions
var $winner = function(){
    //ROW 1
  if($A.hasClass("red") && $B.hasClass("red") && $C.hasClass("red") && $D.hasClass("red") ||
     $B.hasClass("red") && $C.hasClass("red") && $D.hasClass("red") && $E.hasClass("red") ||
     $C.hasClass("red") && $D.hasClass("red") && $E.hasClass("red") && $F.hasClass("red") ||
     $D.hasClass("red") && $E.hasClass("red") && $F.hasClass("red") && $G.hasClass("red") ||
    //ROW 2
     $H.hasClass("red") && $I.hasClass("red") && $J.hasClass("red") && $K.hasClass("red") ||
     $I.hasClass("red") && $J.hasClass("red") && $K.hasClass("red") && $L.hasClass("red") ||
     $J.hasClass("red") && $K.hasClass("red") && $L.hasClass("red") && $M.hasClass("red") ||
     $K.hasClass("red") && $L.hasClass("red") && $M.hasClass("red") && $N.hasClass("red") ||
    //ROW 3
     $O.hasClass("red") && $P.hasClass("red") && $Q.hasClass("red") && $R.hasClass("red") ||
     $P.hasClass("red") && $Q.hasClass("red") && $R.hasClass("red") && $S.hasClass("red") ||
     $Q.hasClass("red") && $R.hasClass("red") && $S.hasClass("red") && $T.hasClass("red") ||
     $R.hasClass("red") && $S.hasClass("red") && $T.hasClass("red") && $U.hasClass("red") ||
    //ROW 4
     $V.hasClass("red") && $W.hasClass("red") && $X.hasClass("red") && $Y.hasClass("red") ||
     $W.hasClass("red") && $X.hasClass("red") && $Y.hasClass("red") && $Z.hasClass("red") ||
     $X.hasClass("red") && $Y.hasClass("red") && $Z.hasClass("red") && $AA.hasClass("red") ||
     $Y.hasClass("red") && $Z.hasClass("red") && $AA.hasClass("red") && $BB.hasClass("red") ||
    //ROW 5
     $CC.hasClass("red") && $DD.hasClass("red") && $EE.hasClass("red") && $FF.hasClass("red") ||
     $DD.hasClass("red") && $EE.hasClass("red") && $FF.hasClass("red") && $GG.hasClass("red") ||
     $EE.hasClass("red") && $FF.hasClass("red") && $GG.hasClass("red") && $HH.hasClass("red") ||
     $FF.hasClass("red") && $GG.hasClass("red") && $HH.hasClass("red") && $II.hasClass("red") ||
    //ROW 6
     $JJ.hasClass("red") && $KK.hasClass("red") && $LL.hasClass("red") && $MM.hasClass("red") ||
     $KK.hasClass("red") && $LL.hasClass("red") && $MM.hasClass("red") && $NN.hasClass("red") ||
     $LL.hasClass("red") && $MM.hasClass("red") && $NN.hasClass("red") && $OO.hasClass("red") ||
     $MM.hasClass("red") && $NN.hasClass("red") && $OO.hasClass("red") && $PP.hasClass("red") ||
    //COLUMN 1
     $A.hasClass("red") && $H.hasClass("red") && $O.hasClass("red") && $V.hasClass("red") ||
     $H.hasClass("red") && $O.hasClass("red") && $V.hasClass("red") && $CC.hasClass("red") ||
     $O.hasClass("red") && $V.hasClass("red") && $CC.hasClass("red") && $JJ.hasClass("red") ||
    //COLUMN 2
     $B.hasClass("red") && $I.hasClass("red") && $P.hasClass("red") && $W.hasClass("red") ||
     $I.hasClass("red") && $P.hasClass("red") && $W.hasClass("red") && $DD.hasClass("red") ||
     $P.hasClass("red") && $W.hasClass("red") && $DD.hasClass("red") && $KK.hasClass("red") ||
    //COLUMN 3
     $C.hasClass("red") && $J.hasClass("red") && $Q.hasClass("red") && $X.hasClass("red") ||
     $J.hasClass("red") && $Q.hasClass("red") && $X.hasClass("red") && $EE.hasClass("red") ||
     $Q.hasClass("red") && $X.hasClass("red") && $EE.hasClass("red") && $LL.hasClass("red") ||
    //COLUMN 4
     $D.hasClass("red") && $K.hasClass("red") && $R.hasClass("red") && $Y.hasClass("red") ||
     $K.hasClass("red") && $R.hasClass("red") && $Y.hasClass("red") && $FF.hasClass("red") ||
     $R.hasClass("red") && $Y.hasClass("red") && $FF.hasClass("red") && $MM.hasClass("red") ||
    //COLUMN 5
     $E.hasClass("red") && $L.hasClass("red") && $S.hasClass("red") && $Z.hasClass("red") ||
     $L.hasClass("red") && $S.hasClass("red") && $Z.hasClass("red") && $GG.hasClass("red") ||
     $S.hasClass("red") && $Z.hasClass("red") && $GG.hasClass("red") && $NN.hasClass("red") ||
    //COLUMN 6
     $F.hasClass("red") && $M.hasClass("red") && $T.hasClass("red") && $AA.hasClass("red") ||
     $M.hasClass("red") && $T.hasClass("red") && $AA.hasClass("red") && $HH.hasClass("red") ||
     $T.hasClass("red") && $AA.hasClass("red") && $HH.hasClass("red") && $OO.hasClass("red") ||
    //COLUMN 6
     $G.hasClass("red") && $N.hasClass("red") && $U.hasClass("red") && $BB.hasClass("red") ||
     $N.hasClass("red") && $U.hasClass("red") && $BB.hasClass("red") && $II.hasClass("red") ||
     $U.hasClass("red") && $BB.hasClass("red") && $II.hasClass("red") && $PP.hasClass("red") ||
    //DIAGONAL SOUTH
     $O.hasClass("red") && $W.hasClass("red") && $EE.hasClass("red") && $MM.hasClass("red") ||
     $H.hasClass("red") && $P.hasClass("red") && $X.hasClass("red") && $FF.hasClass("red") ||
     $P.hasClass("red") && $X.hasClass("red") && $FF.hasClass("red") && $NN.hasClass("red") ||
     $A.hasClass("red") && $I.hasClass("red") && $Q.hasClass("red") && $Y.hasClass("red") ||
     $I.hasClass("red") && $Q.hasClass("red") && $Y.hasClass("red") && $GG.hasClass("red") ||
     $Q.hasClass("red") && $Y.hasClass("red") && $GG.hasClass("red") && $OO.hasClass("red") ||
     $B.hasClass("red") && $J.hasClass("red") && $R.hasClass("red") && $Z.hasClass("red") ||
     $J.hasClass("red") && $R.hasClass("red") && $Z.hasClass("red") && $HH.hasClass("red") ||
     $R.hasClass("red") && $Z.hasClass("red") && $HH.hasClass("red") && $PP.hasClass("red") ||
     $C.hasClass("red") && $K.hasClass("red") && $S.hasClass("red") && $AA.hasClass("red") ||
     $K.hasClass("red") && $S.hasClass("red") && $AA.hasClass("red") && $II.hasClass("red") ||
     $D.hasClass("red") && $L.hasClass("red") && $T.hasClass("red") && $BB.hasClass("red") ||
    //DIAGONAL NORTH
     $V.hasClass("red") && $P.hasClass("red") && $J.hasClass("red") && $D.hasClass("red") ||
     $CC.hasClass("red") && $W.hasClass("red") && $Q.hasClass("red") && $K.hasClass("red") ||
     $W.hasClass("red") && $Q.hasClass("red") && $K.hasClass("red") && $E.hasClass("red") ||
     $JJ.hasClass("red") && $DD.hasClass("red") && $X.hasClass("red") && $R.hasClass("red") ||
     $DD.hasClass("red") && $X.hasClass("red") && $R.hasClass("red") && $L.hasClass("red") ||
     $X.hasClass("red") && $R.hasClass("red") && $L.hasClass("red") && $F.hasClass("red") ||
     $KK.hasClass("red") && $EE.hasClass("red") && $Y.hasClass("red") && $S.hasClass("red") ||
     $EE.hasClass("red") && $Y.hasClass("red") && $S.hasClass("red") && $M.hasClass("red") ||
     $Y.hasClass("red") && $S.hasClass("red") && $M.hasClass("red") && $G.hasClass("red") ||
     $LL.hasClass("red") && $FF.hasClass("red") && $Z.hasClass("red") && $T.hasClass("red") ||
     $FF.hasClass("red") && $Z.hasClass("red") && $T.hasClass("red") && $N.hasClass("red") ||
     $MM.hasClass("red") && $GG.hasClass("red") && $AA.hasClass("red") && $U.hasClass("red")){
            alert("Red is the winner");
  } else if ($A.hasClass("yellow") && $B.hasClass("yellow") && $C.hasClass("yellow") && $D.hasClass("yellow") ||
             $B.hasClass("yellow") && $C.hasClass("yellow") && $D.hasClass("yellow") && $E.hasClass("yellow") ||
             $C.hasClass("yellow") && $D.hasClass("yellow") && $E.hasClass("yellow") && $F.hasClass("yellow") ||
             $D.hasClass("yellow") && $E.hasClass("yellow") && $F.hasClass("yellow") && $G.hasClass("yellow") ||
            //ROW 2
             $H.hasClass("yellow") && $I.hasClass("yellow") && $J.hasClass("yellow") && $K.hasClass("yellow") ||
             $I.hasClass("yellow") && $J.hasClass("yellow") && $K.hasClass("yellow") && $L.hasClass("yellow") ||
             $J.hasClass("yellow") && $K.hasClass("yellow") && $L.hasClass("yellow") && $M.hasClass("yellow") ||
             $K.hasClass("yellow") && $L.hasClass("yellow") && $M.hasClass("yellow") && $N.hasClass("yellow") ||
            //ROW 3
             $O.hasClass("yellow") && $P.hasClass("yellow") && $Q.hasClass("yellow") && $R.hasClass("yellow") ||
             $P.hasClass("yellow") && $Q.hasClass("yellow") && $R.hasClass("yellow") && $S.hasClass("yellow") ||
             $Q.hasClass("yellow") && $R.hasClass("yellow") && $S.hasClass("yellow") && $T.hasClass("yellow") ||
             $R.hasClass("yellow") && $S.hasClass("yellow") && $T.hasClass("yellow") && $U.hasClass("yellow") ||
            //ROW 4
             $V.hasClass("yellow") && $W.hasClass("yellow") && $X.hasClass("yellow") && $Y.hasClass("yellow") ||
             $W.hasClass("yellow") && $X.hasClass("yellow") && $Y.hasClass("yellow") && $Z.hasClass("yellow") ||
             $X.hasClass("yellow") && $Y.hasClass("yellow") && $Z.hasClass("yellow") && $AA.hasClass("yellow") ||
             $Y.hasClass("yellow") && $Z.hasClass("yellow") && $AA.hasClass("yellow") && $BB.hasClass("yellow") ||
            //ROW 5
             $CC.hasClass("yellow") && $DD.hasClass("yellow") && $EE.hasClass("yellow") && $FF.hasClass("yellow") ||
             $DD.hasClass("yellow") && $EE.hasClass("yellow") && $FF.hasClass("yellow") && $GG.hasClass("yellow") ||
             $EE.hasClass("yellow") && $FF.hasClass("yellow") && $GG.hasClass("yellow") && $HH.hasClass("yellow") ||
             $FF.hasClass("yellow") && $GG.hasClass("yellow") && $HH.hasClass("yellow") && $II.hasClass("yellow") ||
            //ROW 6
             $JJ.hasClass("yellow") && $KK.hasClass("yellow") && $LL.hasClass("yellow") && $MM.hasClass("yellow") ||
             $KK.hasClass("yellow") && $LL.hasClass("yellow") && $MM.hasClass("yellow") && $NN.hasClass("yellow") ||
             $LL.hasClass("yellow") && $MM.hasClass("yellow") && $NN.hasClass("yellow") && $OO.hasClass("yellow") ||
             $MM.hasClass("yellow") && $NN.hasClass("yellow") && $OO.hasClass("yellow") && $PP.hasClass("yellow") ||
            //COLUMN 1
             $A.hasClass("yellow") && $H.hasClass("yellow") && $O.hasClass("yellow") && $V.hasClass("yellow") ||
             $H.hasClass("yellow") && $O.hasClass("yellow") && $V.hasClass("yellow") && $CC.hasClass("yellow") ||
             $O.hasClass("yellow") && $V.hasClass("yellow") && $CC.hasClass("yellow") && $JJ.hasClass("yellow") ||
            //COLUMN 2
             $B.hasClass("yellow") && $I.hasClass("yellow") && $P.hasClass("yellow") && $W.hasClass("yellow") ||
             $I.hasClass("yellow") && $P.hasClass("yellow") && $W.hasClass("yellow") && $DD.hasClass("yellow") ||
             $P.hasClass("yellow") && $W.hasClass("yellow") && $DD.hasClass("yellow") && $KK.hasClass("yellow") ||
            //COLUMN 3
             $C.hasClass("yellow") && $J.hasClass("yellow") && $Q.hasClass("yellow") && $X.hasClass("yellow") ||
             $J.hasClass("yellow") && $Q.hasClass("yellow") && $X.hasClass("yellow") && $EE.hasClass("yellow") ||
             $Q.hasClass("yellow") && $X.hasClass("yellow") && $EE.hasClass("yellow") && $LL.hasClass("yellow") ||
            //COLUMN 4
             $D.hasClass("yellow") && $K.hasClass("yellow") && $R.hasClass("yellow") && $Y.hasClass("yellow") ||
             $K.hasClass("yellow") && $R.hasClass("yellow") && $Y.hasClass("yellow") && $FF.hasClass("yellow") ||
             $R.hasClass("yellow") && $Y.hasClass("yellow") && $FF.hasClass("yellow") && $MM.hasClass("yellow") ||
            //COLUMN 5
             $E.hasClass("yellow") && $L.hasClass("yellow") && $S.hasClass("yellow") && $Z.hasClass("yellow") ||
             $L.hasClass("yellow") && $S.hasClass("yellow") && $Z.hasClass("yellow") && $GG.hasClass("yellow") ||
             $S.hasClass("yellow") && $Z.hasClass("yellow") && $GG.hasClass("yellow") && $NN.hasClass("yellow") ||
            //COLUMN 6
             $F.hasClass("yellow") && $M.hasClass("yellow") && $T.hasClass("yellow") && $AA.hasClass("yellow") ||
             $M.hasClass("yellow") && $T.hasClass("yellow") && $AA.hasClass("yellow") && $HH.hasClass("yellow") ||
             $T.hasClass("yellow") && $AA.hasClass("yellow") && $HH.hasClass("yellow") && $OO.hasClass("yellow") ||
            //COLUMN 6
             $G.hasClass("yellow") && $N.hasClass("yellow") && $U.hasClass("yellow") && $BB.hasClass("yellow") ||
             $N.hasClass("yellow") && $U.hasClass("yellow") && $BB.hasClass("yellow") && $II.hasClass("yellow") ||
             $U.hasClass("yellow") && $BB.hasClass("yellow") && $II.hasClass("yellow") && $PP.hasClass("yellow") ||
            //DIAGONAL SOUTH
             $O.hasClass("yellow") && $W.hasClass("yellow") && $EE.hasClass("yellow") && $MM.hasClass("yellow") ||
             $H.hasClass("yellow") && $P.hasClass("yellow") && $X.hasClass("yellow") && $FF.hasClass("yellow") ||
             $P.hasClass("yellow") && $X.hasClass("yellow") && $FF.hasClass("yellow") && $NN.hasClass("yellow") ||
             $A.hasClass("yellow") && $I.hasClass("yellow") && $Q.hasClass("yellow") && $Y.hasClass("yellow") ||
             $I.hasClass("yellow") && $Q.hasClass("yellow") && $Y.hasClass("yellow") && $GG.hasClass("yellow") ||
             $Q.hasClass("yellow") && $Y.hasClass("yellow") && $GG.hasClass("yellow") && $OO.hasClass("yellow") ||
             $B.hasClass("yellow") && $J.hasClass("yellow") && $R.hasClass("yellow") && $Z.hasClass("yellow") ||
             $J.hasClass("yellow") && $R.hasClass("yellow") && $Z.hasClass("yellow") && $HH.hasClass("yellow") ||
             $R.hasClass("yellow") && $Z.hasClass("yellow") && $HH.hasClass("yellow") && $PP.hasClass("yellow") ||
             $C.hasClass("yellow") && $K.hasClass("yellow") && $S.hasClass("yellow") && $AA.hasClass("yellow") ||
             $K.hasClass("yellow") && $S.hasClass("yellow") && $AA.hasClass("yellow") && $II.hasClass("yellow") ||
             $D.hasClass("yellow") && $L.hasClass("yellow") && $T.hasClass("yellow") && $BB.hasClass("yellow") ||
            //DIAGONAL NORTH
             $V.hasClass("yellow") && $P.hasClass("yellow") && $J.hasClass("yellow") && $D.hasClass("yellow") ||
             $CC.hasClass("yellow") && $W.hasClass("yellow") && $Q.hasClass("yellow") && $K.hasClass("yellow") ||
             $W.hasClass("yellow") && $Q.hasClass("yellow") && $K.hasClass("yellow") && $E.hasClass("yellow") ||
             $JJ.hasClass("yellow") && $DD.hasClass("yellow") && $X.hasClass("yellow") && $R.hasClass("yellow") ||
             $DD.hasClass("yellow") && $X.hasClass("yellow") && $R.hasClass("yellow") && $L.hasClass("yellow") ||
             $X.hasClass("yellow") && $R.hasClass("yellow") && $L.hasClass("yellow") && $F.hasClass("yellow") ||
             $KK.hasClass("yellow") && $EE.hasClass("yellow") && $Y.hasClass("yellow") && $S.hasClass("yellow") ||
             $EE.hasClass("yellow") && $Y.hasClass("yellow") && $S.hasClass("yellow") && $M.hasClass("yellow") ||
             $Y.hasClass("yellow") && $S.hasClass("yellow") && $M.hasClass("yellow") && $G.hasClass("yellow") ||
             $LL.hasClass("yellow") && $FF.hasClass("yellow") && $Z.hasClass("yellow") && $T.hasClass("yellow") ||
             $FF.hasClass("yellow") && $Z.hasClass("yellow") && $T.hasClass("yellow") && $N.hasClass("yellow") ||
             $MM.hasClass("yellow") && $GG.hasClass("yellow") && $AA.hasClass("yellow") && $U.hasClass("yellow")){
                          alert("Yellow is the winner");
         } else {
              console.log("Next player moves");
        }
      }

});
//$A.hasClass("yellow") && $B.hasClass("yellow") &&
 // $C.hasClass("yellow") && $D.hasClass("yellow") ||
 // $A.hasClass("yellow") && $E.hasClass("yellow") &&
 // $I.hasClass("yellow") && $M.hasClass("yellow") ||
 // $A.hasClass("yellow") && $F.hasClass("yellow") &&
 // $K.hasClass("yellow") && $P.hasClass("yellow") ||
 // $D.hasClass("yellow") && $H.hasClass("yellow") &&
 // $L.hasClass("yellow") && $P.hasClass("yellow") ||
 // $D.hasClass("yellow") && $G.hasClass("yellow") &&
 // $J.hasClass("yellow") && $M.hasClass("yellow") ||
 // $M.hasClass("yellow") && $N.hasClass("yellow") &&
 // $O.hasClass("yellow") && $P.hasClass("yellow") ||
 // $E.hasClass("yellow") && $F.hasClass("yellow") &&
 // $G.hasClass("yellow") && $H.hasClass("yellow") ||
 // $I.hasClass("yellow") && $J.hasClass("yellow") &&
 // $K.hasClass("yellow") && $L.hasClass("yellow") ||
 // $B.hasClass("yellow") && $F.hasClass("yellow") &&
 // $J.hasClass("yellow") && $N.hasClass("yellow") ||
 // $C.hasClass("yellow") && $G.hasClass("yellow") &&
 // $K.hasClass("yellow") && $O.hasClass("yellow")
