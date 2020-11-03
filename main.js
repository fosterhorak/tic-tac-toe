  /*----- constants -----*/

// fill the grid with...
const imgs = {
    '1': "url('https://media3.giphy.com/media/w7mLEAMcpjrpe/giphy.gif')",
    '-1': "url('https://media0.giphy.com/media/uTuLngvL9p0Xe/giphy.gif')",
}

// winning combos...
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]


/*----- app's state (variables) -----*/
// gameBoard, turn, winner
let gameBoard;
let turn;
let winner;

/*----- cached element references -----*/
// board, button, message
let board = document.getElementById('board');
let button = document.querySelector('button');
let message = document.querySelector('h1');

/*----- event listeners -----*/
// clicking the game board
board.addEventListener('click', handleClick);
// clicking the reset button
button.addEventListener('click', initialize);

/*----- functions -----*/
initialize();
console.log(gameBoard);

//initialize function
function initialize() {
  //gameBoard, whose turn, winner
    gameBoard = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = null;
  //render
    render();

}


//render function
function render() {
  //hide reset button
  button.style.display = 'none';
  //fill gameBoard
  gameBoard.forEach((element, idx) => {
      document.getElementById(idx).style.backgroundImage = element && imgs[element];
  });
  //display message
  if (winner) {
      message.textContent = `Player ${winner > 0 ? 1 : 2} wins!`;
      button.style.display = null;
  }
  //check for tie
  else if (!gameBoard.includes(null)) {
      message.textContent = "It's a Tie!";
      button.style.display = null;
  } 
  //display who's turn it is
  else {
    message.textContent = `Player ${turn > 0 ? 1 : 2}'s turn!`;
  }
}


//handleClick function
function handleClick(evt) {
  //don't register if box already been clicked (value of box = true)
  if (gameBoard[evt.target.id]) return;
  //don't register if there is already a winner (value of winner = true)
  if (winner) return;
  //assign new image to box on gameBoard (assign turn value to gameBoard)
  gameBoard[evt.target.id] = turn;
  //checkWinner
  checkWinner();
  //siwtch the turn
  turn *= -1;
  //render
  render();
}



// check for winner function
function checkWinner() {
    //check absolute value of winning combos
    let checkWinningCombos = winningCombos.some(combo => (
        Math.abs(gameBoard[combo[0]] + gameBoard[combo[1]] + gameBoard[combo[2]]) === 3)   
    );
    //assign winner to who's turn it is...
    if (checkWinningCombos) winner = turn;
}


