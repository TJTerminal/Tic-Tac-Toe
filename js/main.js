/*----- constants -----*/
const lookup = {
    '1': 'blue',
    '-1': 'red',
    'null': 'white'
};

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/*----- app's state (variables) -----*/
let board, turn, winner

/*----- cached element references -----*/
let squares = documnet.querySelectorAll('td div');
let message = document.querySelector('h1');

/*----- event listeners -----*/
document.querySelector('table').addEventListener('click', handleMove);
document.querySelector('button').addEventListener('click', initialize);
/*----- functions -----*/
