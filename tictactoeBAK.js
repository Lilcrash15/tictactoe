var turn = "X";
var winner = "";
// Var for score board
var xWinner = 0;
var oWinner = 0;
// Board layout
var board = [["", "", ""], ["", "", ""], ["", "", ""]];

// Checks for each players turn.
function nextTurn() {
  if (turn == "X") {
    turn = "O";
  } else {
    turn = "X";
  }
}

function didWin(x, y) {
  // Check column
  var count = 0;
  for (var i = 0; i < board.length; i++) {
    if (board[i][y] == turn) {
      count += 1;
    }
  }
  if (count == 3) {
    return true;
  }

  count = 0;
  // Check row
  for (var i = 0; i < board[0].length; i++) {
    if (board[x][i] == turn) {
      count += 1;
    }
  }
  if (count == 3) {
    return true;
  }

  count = 0;
  // Check diagonals
  for (var i = 0; i < board.length; i++) {
    if (board[i][i] == turn) {
      count += 1;
    }
  }
  if (count == 3) {
    return true;
  }

  count = 0;
  // Check diagonals
  for (var i = 0, j = 2; i < board.length; i++) {
    if (board[i][j] == turn) {
      count += 1;
    }
    j -= 1;
  }
  if (count == 3) {
    return true;
  }

  return false;
}

function xWinner() {
  xWinner = xWinner + 1;
  document.getElementById("xWinner").innerHTML = "X Score: " + xWinner;
}

function oWinner() {
  oWinner = oWinner + 1;
  document.getElementById("oWinner").innerHTML = "O Score: " + oWinner;
}

function move(x, y) {
  if (board[x][y] == "" && winner == "") {
    board[x][y] = turn;
    console.log(x.toString() + y.toString());
    var id = x.toString() + y.toString();
    document.getElementById(id).innerHTML = turn;
  } else {
    return;
  }
  console.log(board);

  if (didWin(x, y)) {
    winner = turn;
    if (winner == "X") {
      xWinner();
    } else {
      oWinner();
    }

    setTimeout(function() {
      alert("Congratulations! " + turn + " won!");
    }, 25);
    console.log("Congratulations! " + turn + " won!");
  } else {
    nextTurn();
  }
}
// Resets the board to play again.
function resetBoard() {
  turn = "X";
  winner = "";

  board = [["", "", ""], ["", "", ""], ["", "", ""]];

  console.log(board.length);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      1;
      let id = i.toString() + j.toString();
      document.getElementById(id).innerHTML = "";
    }
  }
}
// Changes the style to light mode
function lightMode() {
  document.getElementById("background").style.background = "white";
  document.getElementById("Banner").style.color = "black";
  document.getElementById("greeting").style.color = "black";
  document.getElementById("form").style.color = "black";
  document.getElementById("Footer").style.color = "black";
  document.getElementById("FooterLogo").style.color = "black";
}
// Changes the style to dark mode.
function darkMode() {
  document.getElementById("background").style.background = "#404040";
  document.getElementById("Banner").style.color = "orange";
  document.getElementById("greeting").style.color = "orange";
  document.getElementById("form").style.color = "orange";
  document.getElementById("Footer").style.color = "orange";
  document.getElementById("FooterLogo").style.color = "orange";
}
