$( document ).ready(function() {
   console.log("Pizza");
 // var square = $(".square");
 //   console.log("Pie");
 // square.on("click", updateSquare);
 //   console.log("Boop");


var click = 0;
// var boxes = $(".square");

var square1 = document.getElementById("square1");
// square1.addEventListener("click", updateSquare);
var square2 = document.getElementById("square2");
// square2.addEventListener("click", updateSquare);
var square3 = document.getElementById("square3");
// square3.addEventListener("click", updateSquare3);
var square4 = document.getElementById("square4");
// square4.addEventListener("click", updateSquare4);
var square5 = document.getElementById("square5");
// square5.addEventListener("click", updateSquare5);
var square6 = document.getElementById("square6");
// square6.addEventListener("click", updateSquare6);
var square7 = document.getElementById("square7");
// square7.addEventListener("click", updateSquare7);
var square8 = document.getElementById("square8");
// square8.addEventListener("click", updateSquare8);
var square9 = document.getElementById("square9");
// square9.addEventListener("click", updateSquare9);

var square = [square1, square2, square3,square4,square5,square6,square7, square8, square9];


// Robin's way
for (i=1; i<10; i++) {
  document.getElementById("square" + i).addEventListener("click",updateSquare);
}
//
// // No functions isnide a "for" loop!
function updateSquare() {
  click = click + 1;
  if ((click%2) !==0) {
    this.textContent="x";
    this.removeEventListener("click", updateSquare);
    this.style.backgroundColor = "gray";
    this.style.color = "white";
  } else {
    this.textContent="O";
    this.removeEventListener("click", updateSquare);
    this.style.backgroundColor = "lightBlue";
    this.style.color = "black";
  }
  declareWinner();
}

var reset = document.getElementById("reset");
reset.addEventListener("click",resetBoard);

function resetBoard() {
  for (i=0; i<square.length; i++) {
    square[i].textContent="";
    square[i].style.backgroundColor = "lightBlue";
  }
}

var conditions = [
  [square1, square2, square3],
  [square4, square5, square6]
];

function checkWinner() {
  console.log(conditions.length);
  for (var i=0; i<conditions.length; i ++) {
    console.log(i);
  }
}

function declareWinner() {
  console.log("checking if there is a winner");
  if ((((((square1.textContent) == (square2.textContent)) && ((square2.textContent) == (square3.textContent))) && (click>2)) || ((((square4.textContent) == (square5.textContent)) && ((square5.textContent) == (square6.textContent))) && (click>2))) || (((((square7.textContent) == (square8.textContent)) && ((square8.textContent) == (square9.textContent))) && (click>2)))){
    alert ("We have a winner!");


// the code below worked for the top row
// function declareWinner() {
//   console.log("checking if there is a winner");
//   if ((((square1.textContent) == (square2.textContent)) && ((square2.textContent) == (square3.textContent))) && (click>2)){
//     alert ("We have a winner!");


  }
}
  //  ||(((((square4.textContent) == (square5.textContent)) && ((square5.textContent) == (square6.textContent)))) && (click>2))


  // ||(((((square7.textContent) == (square8.textContent)) && ((square8.textContent) == (square9.textContent)))) && (click>2))||(((((square1.textContent) == (square4.textContent)) && ((square4.textContent) == (square7.textContent)))) && (click>2))||
  // (((((square2.textContent) == (square5.textContent)) && ((square5.textContent) == (square8.textContent)))) && (click>2))||(((((square3.textContent) == (square6.textContent)) && ((square6.textContent) == (square9.textContent))))) && (click>2))){
  //   alert ("We have a winner!");


// psuedocode
// if click is an odd number and a vertical, diagonal, or horizontal have the same text content, alert for x wins;
// else if click is an even number and a vertical, diagonal, or horizontal have the same text content, alert for y wins;
// else if text content for all squares != "" & click>0, alert for we have a tie


// function updateSquare() {
 // console.log("jk");
 // boxes.on("click", function() {
 // console.log("hello");
 // click = click + 1;
 // console.log(click);
 // if ((click%2) !==0) {
 //   square1.textContent="x";
  //  $(".square").html("X");
  // square1.className += "FFG715";
 //   square1.removeEventListener("click", updateSquare);
 //   square1.style.backgroundColor = "pink";
 //   square1.style.color = "white";
 // } else {
 //   square1.textContent="O";
  //  $(".square").html("O");
  // square1.removeEventListener("click", updateSquare);
  // square2.style.backgroundColor = "lightBlue";
  // square2.style.color = "black";
 // square1.className += "FFF445";




// function updateSquare2() {
//
// console.log("hello");
//  click = click + 1;
//  console.log(click);
//  if ((click%2) !==0) {
//    square2.textContent="x";
//    square2.removeEventListener("click", updateSquare2);
//    square2.style.backgroundColor = "pink";
//    square2.style.color = "white";
//  } else {
//    square2.textContent="O";
//    square2.removeEventListener("click", updateSquare2);
//    square3.style.backgroundColor = "lightBlue";
//    square3.style.color = "black";
//  }
// }
//
//
//
//
// function updateSquare3() {
//
// console.log("hello");
//  click = click + 1;
//  console.log(click);
//  if ((click%2) !==0) {
//    square3.textContent="x";
//    square3.removeEventListener("click", updateSquare3);
//    square3.style.backgroundColor = "pink";
//    square3.style.color = "white";
//  } else {
//    square3.textContent="O";
//    square3.removeEventListener("click", updateSquare3);
//  }
// }
//
//
//
//
// function updateSquare4() {
//
// console.log("hello");
//  click = click + 1;
//  console.log(click);
//  if ((click%2) !==0) {
//    square4.textContent="x";
//    square4.removeEventListener("click", updateSquare4);
//    square4.style.backgroundColor = "pink";
//    square4.style.color = "white";
//  } else {
//    square4.textContent="O";
//    square4.removeEventListener("click", updateSquare4);
//    square4.style.backgroundColor = "lightBlue";
//    square4.style.color = "black";
//  }
// }
//
//
//
//
// function updateSquare5() {
//
// console.log("hello");
//  click = click + 1;
//  console.log(click);
//  if ((click%2) !==0) {
//    square5.textContent="x";
//    square5.removeEventListener("click", updateSquare5);
//    square5.style.backgroundColor = "pink";
//    square5.style.color = "white";
//  } else {
//    square5.textContent="O";
//    square5.removeEventListener("click", updateSquare5);
//    square5.style.backgroundColor = "lightBlue";
//    square5.style.color = "black";
//  }
// }
//
//
//
//
// function updateSquare6() {
//
// console.log("hello");
//  click = click + 1;
//  console.log(click);
//  if ((click%2) !==0) {
//    square6.textContent="x";
//    square6.removeEventListener("click", updateSquare6);
//    square6.style.backgroundColor = "pink";
//    square6.style.color = "white";
//  } else {
//    square6.textContent="O";
//    square6.removeEventListener("click", updateSquare6);
//    square6.style.backgroundColor = "lightBlue";
//    square6.style.color = "black";
//  }
// }
//
//
//
//
//
// function updateSquare7() {
//
// console.log("hello");
//  click = click + 1;
//  console.log(click);
//  if ((click%2) !==0) {
//    square7.textContent="x";
//    square7.removeEventListener("click", updateSquare7);
//    square7.style.backgroundColor = "pink";
//    square7.style.color = "white";
//  } else {
//    square7.textContent="O";
//    square7.removeEventListener("click", updateSquare7);
//    square7.style.backgroundColor = "lightBlue";
//    square7.style.color = "black";
//  }
// }
//
//
//
//
//
// function updateSquare8() {
//
// console.log("hello");
//  click = click + 1;
//  console.log(click);
//  if ((click%2) !==0) {
//    square8.textContent="x";
//    square8.removeEventListener("click", updateSquare8);
//    square8.style.backgroundColor = "pink";
//    square8.style.color = "white";
//  } else {
//    square8.textContent="O";
//    square8.removeEventListener("click", updateSquare8);
//    square8.style.backgroundColor = "lightBlue";
//    square8.style.color = "black";
//  }
// }
//
//
//
//
// function updateSquare9() {
//
// console.log("hello");
//  click = click + 1;
//  console.log(click);
//  if ((click%2) !==0) {
//    square9.textContent="x";
//    square9.removeEventListener("click", updateSquare9);
//    square9.style.backgroundColor = "pink";
//    square9.style.color = "white";
//  } else {
//    square9.textContent="O";
//    square9.removeEventListener("click", updateSquare9);
//    square9.style.backgroundColor = "lightBlue";
//    square9.style.color = "black";
//  }
// }

// square1.removeEventListener("click", leaveValue);
// function leaveValue(){
//   if square1.textContent === "x" {
//       square1.textContent === square1.textContent;
//   } else {
//       (square1.innerHTML) ===="O";
//   }
// }



  // square1.textContent="";
  // square2.textContent="";
  // square3.textContent="";
  // square4.textContent="";
  // square5.textContent="";
  // square6.textContent="";
  // square7.textContent="";
  // square8.textContent="";
  // square9.textContent="";
  // square1.style.backgroundColor = "lightBlue";
  // square2.style.backgroundColor = "lightBlue";
  // square3.style.backgroundColor = "lightBlue";
  // square4.style.backgroundColor = "lightBlue";
  // square5.style.backgroundColor = "lightBlue";
  // square6.style.backgroundColor = "lightBlue";
  // square7.style.backgroundColor = "lightBlue";
  // square8.style.backgroundColor = "lightBlue";
  // square9.style.backgroundColor = "lightBlue";
});

// var board = document.getElementById("board");

// why isn't winnerIs working?
// function winnerIs (){
//   if (square1.textContent=== square2.textContent===square3.textContent==="x") {
//     alert("Player X has won");
//   }
//   else{
//     alert("I'll declare a winner later.");
//   }
// }

// all your code dgoes inside document.ready

// reset.on("click", resetBoard);
//    console.log("reset here.");
// function resetBoard() {
//    square1.textContent = "";
// }
// Second variable.
// var reset = $("#reset");
// boxes.on("click", function(){
//    click++;
//    console.log(click);
//    if (click % 2 !== 0) {
//       boxes.html("X");
//       console.log("XXXXXXXXXXX");
//    } else if (click % 2 === 0) {
//       boxes.html("O");
//       console.log("OOOOOOOOOOOOOO");
//    }}
// );
//
// square3 = document.getElementById("square3");
// square3.addEventListener("click",updateSquare)
// function updateSquare() {
//    click = click + 1
//    if (click%2 !==0) {
//       square3.textContent = "X";
//    } else {
//       square3.textContent = "O";
// }
// }
//
// square4 = document.getElementById("square4");
// square4.addEventListener("click",updateSquare)
// function updateSquare() {
//    click = click + 1
//    if (click%2 !==0) {
//       square4.textContent = "X";
//    } else {
//       square4.textContent = "O";
// }
// }
//
// square5 = document.getElementById("square5");
// square5.addEventListener("click",updateSquare)
// function updateSquare() {
//    click = click + 1
//    if (click%2 !==0) {
//       square5.textContent = "X";
//    } else {
//       square5.textContent = "O";
// }
// }
//
// square6  = document.getElementById("square6");
// square6.addEventListener("click",updateSquare)
// function updateSquare() {
//    click = click + 1
//    if (click%2 !==0) {
//       square6.textContent = "X";
//    } else {
//       square6.textContent = "O";
// }
// }
//
// square7 = document.getElementById("square7");
// square7.addEventListener("click",updateSquare)
// function updateSquare() {
//    click = click + 1
//    if (click%2 !==0) {
//       square7.textContent = "X";
//    } else {
//       square7.textContent = "O";
// }
// }
//
// square8 = document.getElementById("square8");
// square8.addEventListener("click",updateSquare)
// function updateSquare() {
//    click = click + 1
//    if (click%2 !==0) {
//       square8.textContent = "X";
//    } else {
//       square8.textContent = "O";
// }
// }
//
// square9 = document.getElementById("square9");
// square9.addEventListener("click",updateSquare)
// function updateSquare() {
//    click = click + 1
//    if (click%2 !==0) {
//       square9.textContent = "X";
//    } else {
//       square9.textContent = "O";
// }
// }

// var click = 0;
//
// function updateSquare() {
//   console.log("jk");
//   click = click + 1;
//   console.log(click);
//   if (click%2 !==0) {
//     square1.textContent= "X";
//
//   } else {
//     square1.textContent= "0";
//   }
// }
//
// $( document ).ready(function() {
//   console.log("Pizza");
//   var square1 = $("#square1");
//   square1.on("click", updateSquare);
// });
//
//
// // Second variable.
// // var square =
// // ["square1",
// // "square2",
// // "square3",
// // "square4",
// // "square5",
// // "square6",
// // "square7",
// // "square8",
// // "square9"]
// // // initial values.
// // square = null;
// // // Turn variable.
// // var turn = 1
// // // Turn countervairable.
// // var turnCounter = $("#button")
// // function turnSquare () {}
//
// // if square one is clicked and it is the first click event.
// // This square should display x.
// // All following squares should alternate between y and x.
// // Each event listener will only occur one time.
// //
// // If a squares are null and a square is clicked, the clicked swuare will have a value of x. All squares clicked after that will alterante between y and x.
// // $("#square").toggle(function())
// // document.querySelectorAll(".square")[0]
// // .square1.addeventlistener("click", playerTurn)
// //
// // turnCounter.addEventListerner("click", updateTurnCount)
// //
// // function updateTurnCount () {
// //    turn = turn++
// //    turnCounter.textContent = ("It is turn"+""+turn);
// // }
// // // .on("click", turnCounter++)
// //
// // function playerTurn()
// //
// // function turn()
// //    if turn == odd number
// //    $("square1").html("x")
//
//
// //
//
// //
// square2.addEventListener("click",updateSquare)
//
// function updateSquare(){
//   click = click + 1
// // if (click%2) !==0 {
// // square2.textContent= "X"
// // }
// // else {
// //   square2.textContent= "0"
// // }
// //
//
// //
// square3.addEventListener("click",updateSquare)
//
// function updateSquare(){
//   click = click + 1
// //   if (click%2) !==0 {
// //   square3.textContent= "X"
// //   }
// //   else {
// //     square3.textContent= "0"
// //   }
// //   }
// //
//
// //
// square4.addEventListener("click",updateSquare)
//
// function updateSquare(){
//   click = click + 1
// //   iif (click%2) !==0 {
// //   square4.textContent= "X"
// // }
// //   else {
// //     square4.textContent= "0"
// //   }
// // }
// //
// //
// //
// square5.addEventListener("click",updateSquare)
//
// function updateSquare(){
//   click = click + 1
// //   if (click%2) !==0 {
// //   square5.textContent= "X"
// //   }
// //   else {
// //     square5.textContent= "0"
// //   }
// //   }
// //
// //
// // //
// // // square1 = document.getElementById("#square1")
// // //
// // // square1.addEventListener("click",updateSquare)
// // //
// // // function updateSquare(){
// // //   click = click + 1
// // // }
// //
// //
//
// //
// // square6.addEventListener("click",updateSquare)
// //
// // function updateSquare(){
// //   click = click + 1
// //   if (click%2) !==0 {
// //   square6.textContent= "X"
// //   }
// //   else {
// //     square6.textContent= "0"
// //   }
// //   }
// //
// //
// //
// square7.addEventListener("click",updateSquare)
//
// function updateSquare(){
//   click = click + 1
// // }
// //
//
// //
// // square8.addEventListener("click",updateSquare)
// //
// // function updateSquare(){
// //   click = click + 1
// // }
// //
// square2 = document.getElementById("square2")
// square3 = document.getElementById("square3")
// square4 = document.getElementById("square4")
// square5 = document.getElementById("square5")
// square6 = document.getElementById("square6")
// square7 = document.getElementById("square7")
// square8 = document.getElementById("square8")
// square9 = document.getElementById("square9")
// //
// square9.addEventListener("click",updateSquare)
//
// function updateSquare(){
//   click = click + 1
// // }
// //
// //
// // }


// function sayHello(){
//   console.log("Hello");
// }
//
// function nameOfFunctionYoureCreatig(){
//
// }
