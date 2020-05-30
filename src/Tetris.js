//? document.addEventListener('DOMContentLoaded', () => {})

const grid = document.querySelector('.grid');
let squares = Array.from(document.querySelectorAll('.grid div')); //creates an Array from the 200 divs with the class of grid 
const scoreDisplay = document.querySelector('#score'); // creates score display constant to display the score on the webpage
const startButton = document.querySelector('#start-button'); //starts & pauses the game...
const width = 10;
let nextRandom = 0;
let timerID
let score = 0;
const colors = [
    '#FDDC5C', // Loverless light gold
    '#CB0162', // Tuppenny deep pink
    '#9900FA', // Grumpiest vivid purple
    '#728639', // Limiest khaki green
    '#0E87CC' // Ornate water blue
];

//!The Tetrominos 🤠
const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
];

const zTetromino = [
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1],
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1]
];

const tTetromino = [
    [1, width, width+1, width+2],
    [1, width+1, width+2, width*2+1],
    [width, width+1, width+2, width*2+1],
    [1, width, width+1, width*2+1]
];

const oTetromino = [
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1]
];

const iTetromino = [
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3],
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3]
];

const theTetrominos = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

let currentPosition = 3;
let currentRotation = 0;

//! Randomly select a Tetromino and its first rotation 
let random = Math.floor(Math.random()*theTetrominos.length)
let current = theTetrominos[random][currentRotation]

//! Draws the Tetromino
function draw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.add('tetromino');
        squares[currentPosition + index].style.backgroundColor = colors[random];
    })
};

//! Undraws the Tetromino 
function unDraw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.remove('tetromino');
        squares[currentPosition + index].style.backgroundColor = '';
    })
};

//! Makes the Tetromino move down every one (1) second...
//timerID = setInterval(moveDown, 1000);

//! Assigns functions to Keycodes
function controlTetromino(e) {
    if(e.keyCode === 70) { //70 = F 
        moveLeft()
    } else if(e.keyCode === 71) { // 71 = G
        moveRight()
    } else if(e.keyCode === 82) { //82 = R
        rotateTetromino()
    } else if(e.keyCode === 86) { //86 = V
        moveDown()
    }
};
document.addEventListener('keyup', controlTetromino);

function moveDown() {
    unDraw();
    currentPosition += width;
    draw();
    freezeTetromino();
};

function freezeTetromino() {
    if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
        current.forEach(index => squares[currentPosition + index].classList.add('taken'))
        // Starts a new Tetromino falling
        random = nextRandom;
        nextRandom = Math.floor(Math.random() * theTetrominos.length);
        current = theTetrominos[random][currentRotation];
        currentPosition = 3;
        draw();
        displayShape();
        scoreTally();
        gameOver();
    }
};

//! Move the Tetromino left, unless it is at the edge or there is a blockage 
function moveLeft() {
    unDraw();
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0);
    if(!isAtLeftEdge) currentPosition -=1;
    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
        currentPosition +=1
    }
    draw();
};

function moveRight() {
    unDraw();
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1);
    if(!isAtRightEdge) currentPosition +=1;
    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
        currentPosition -=1
    }
    draw();
};

function rotateTetromino() {
    unDraw();
    currentRotation ++;
    if(currentRotation === current.length) {
        currentRotation = 0;
    }
    current = theTetrominos[random][currentRotation];
    draw();
};

//! Shows the upcoming Tetromino in the mini-grid
const showUpcoming = document.querySelectorAll('.mini-grid div');
const displayWidth = 4;
const displayIndex = 0;

const upcomingTetromino = [
    [1, displayWidth+1, displayWidth*2+1, 2], //L Tetromino
    [0, displayWidth, displayWidth+1, displayWidth*2+1], //Z Tetromino
    [1, displayWidth, displayWidth+1, displayWidth+2], //T Tetromino
    [0, 1, displayWidth, displayWidth+1], // O Tetromino
    [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1] //I Tetromino
];

//! Displays the shape in the mini-grid
function displayShape() {
    showUpcoming.forEach(square => {
        square.classList.remove('tetromino')
        square.style.backgroundColor = ''
    })
    upcomingTetromino[nextRandom].forEach( index => {
        showUpcoming[displayIndex + index].classList.add('tetromino')
        showUpcoming[displayIndex + index].style.backgroundColor = colors[nextRandom];
    })
};

// Adds functionality to the Start/Pause button
startButton.addEventListener('click', () => {
    if (timerID) {
        clearInterval(timerID)
        timerID = null
    } else {
        draw();
        timerID = setInterval(moveDown, 1000)
        nextRandom = Math.floor(Math.random()*theTetrominos.length)
        displayShape();
    }
});

function scoreTally() {
    for (let i = 0; i < 199; i+=width) {
        const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9];

        if(row.every(index => squares[index].classList.contains('taken'))) {
            score +=10;
            scoreDisplay.innerHTML = score;
            row.forEach(index => {
                squares[index].classList.remove('taken');
                squares[index].classList.remove('tetromino');
                squares[index].style.backgroundColor = ''
            });
            const squaresRemoved = squares.splice(i, width);
            squares = squaresRemoved.concat(squares)
            squares.forEach(cell => grid.appendChild(cell));
        }
    }
};

function gameOver() {
    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
        scoreDisplay.innerHTML = 'Game Over!';
        clearInterval(timerID);
    }
};
 
