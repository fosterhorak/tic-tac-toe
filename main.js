
// 1) Define required constants
// 2) Define required variables used to track the state of the game
// 3) Store elements on the page that will be accessed in code more 
    // than once in variables to make code more concise, readable 
    // and performant.
// 4) Upon loading the app should:
// 	4.1) Initialize the state variables
// 	4.2) Render those values to the page
// 	4.3) Wait for the user to click a square
// 5) Handle a player clicking a square
// 6) Handle a player clicking the replay button




/*----- constants -----*/
// winning combinations, players & their values

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

const players = {
    '1': "url('https://media2.giphy.com/media/3o6ZsVbs2GzgKNvVpS/giphy.gif?cid=ecf05e47qp8333q5ikp2yjlyb1dts6d8qn9soocmj9cq2szy&rid=giphy.gif')",
    '-1': "url('https://media2.giphy.com/media/rWgLOxrdNNDzUXaQnd/giphy.gif?cid=ecf05e47vjskno3mgni8p3paagefb10yz3ysrjw8200931p6&rid=giphy.gif')",
    'null': 'white';
}

/*----- app's state (variables) -----*/
// who's turn it is, the game board, winner, scores
let turn, gameBoard, winner, scores;

/*----- cached element references -----*/
// the boxes, and the text message
let boxes = document.querySelectorAll('td div');
let message = document.getElementById('result-message')


/*----- event listeners -----*/
//clicking the game board (moves)
document.querySelector('table').addEventListener('click', handleMove);
//clicking the play again button
document.getElementById('play-again').addEventListener('click', playAgain);
//clicking the reset button
document.getElementById('reset').addEventListener('click', reset);


/*----- functions -----*/
initialize();


function initialize() {
//set state variables
    //game goard
    //determine who's turn it is
    //winner

//render

}

function render() {
    //fill the grid appropriately
    //update message
        //if there's a winner
            //update scores
        //if it's a ite
        //if it's someones' turn
}

//function for clicking the board (moves)
function handleMove() {
    //get box index
    //if available continue, if not - return
    //update board
    //check for winner
    //update turn
    //render
}


//fuction for clicking reset
function reset(){

}

//function for clicking play again
function playAgain() {

}

//function for checking for a winner
function checkWinner() {

}
