$( document ).ready(function() {
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
    checkWinner();
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
    [square1,square2,square3],
    [square4, square5, square6],
    [square7, square8, square9],
    [square1, square4, square7],
    [square2, square5, square8],
    [square3, square6, square9],
    [square1, square5, square9],
    [square3, square5, square7]

  ];

  function checkWinner() {
    for (var i = 0; i<conditions.length; i ++) {
      if ((conditions[i][0].textContent == conditions[i][1].textContent) && (conditions[i][1].textContent == conditions[i][2].textContent) && conditions[i][0].textContent !== "") {
        alert("We have a winner!");
      }
    }

  }

  //
  // function declareWinner() {
  //   console.log("checking if there is a winner");
  //   if ((((((square1.textContent) == (square2.textContent)) && ((square2.textContent) == (square3.textContent))) && (click>2)) || ((((square4.textContent) == (square5.textContent)) && ((square5.textContent) == (square6.textContent))) && (click>2))) || (((((square7.textContent) == (square8.textContent)) && ((square8.textContent) == (square9.textContent))) && (click>2)))){
  //     alert ("We have a winner!");
  //   }
  // }
});
