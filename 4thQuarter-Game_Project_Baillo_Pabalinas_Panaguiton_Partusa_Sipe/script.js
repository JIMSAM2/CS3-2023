let level = 1;
let highestLevel = 0;
let boardSize = 3;
let pattern = [];
let playerPattern = [];
let canClick = false;

const board = document.getElementById('game-board');
const startButton = document.getElementById('start-button');
const levelDisplay = document.getElementById('level-display');
const highestLevelDisplay = document.getElementById('highest-level-display');
const messageDisplay = document.getElementById('message-display');
const clickSound = document.getElementById('click-sound');
const successSound = document.getElementById('success-sound');
const failSound = document.getElementById('fail-sound');

startButton.addEventListener('click', startGame);

function startGame() {
    startButton.disabled = true;
    updateLevelDisplay();
    resetGame();
    generatePattern();
    displayPattern();
    messageDisplay.textContent = '';
    messageDisplay.classList.remove('message-correct', 'message-fail');
    messageDisplay.style.visibility = 'hidden';
}

function resetGame() {
    playerPattern = [];
    canClick = false;
    board.innerHTML = '';
    board.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;
    for (let i = 0; i < boardSize * boardSize; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.addEventListener('click', () => handleBoxClick(i));
        board.appendChild(div);
    }
}

function generatePattern() {
    pattern = [];
    var numPattern;
    if(level % 2 === 0 && level > 10) {
        numPattern = level;
    } else if(level === 1) {
        numPattern = level;
    } else {
        numPattern = level - 1;
    }
    for (let i = 0; i < numPattern; i++) {
        pattern.push(Math.floor(Math.random() * boardSize * boardSize));
    }
}

function displayPattern() {
    pattern.forEach((index, i) => {
        setTimeout(() => {
            board.children[index].classList.add('active');
        }, i * 1000);
        setTimeout(() => {
            board.children[index].classList.remove('active');
            if (i === pattern.length - 1) canClick = true;
        }, (i + 1) * 1000);
    });
}

function handleBoxClick(index) {
    if (!canClick) return;
    playerPattern.push(index);
    board.children[index].classList.add('clicked');
    clickSound.play();
    setTimeout(() => {
        board.children[index].classList.remove('clicked');
    }, 300);
    if (pattern[playerPattern.length - 1] !== index) {
        failSound.play();
        messageDisplay.textContent = 'Fail!';
        messageDisplay.classList.remove('message-correct');
        messageDisplay.classList.add('message-fail');
        messageDisplay.style.visibility = 'visible';
        alert('Wrong! Game Over');
        level = 1;
        boardSize = 3;
        startButton.disabled = false;
        updateLevelDisplay();
        return;
    }
    if (playerPattern.length === pattern.length) {
        successSound.play();
        messageDisplay.textContent = 'Correct!';
        messageDisplay.classList.remove('message-fail');
        messageDisplay.classList.add('message-correct');
        messageDisplay.style.visibility = 'visible';
        level++;
        if (level > highestLevel) {
            highestLevel = level - 1;
            updateHighestLevelDisplay();
        }
        if (level % 5 === 0) {
            boardSize++;
        }
        startButton.disabled = false;
        alert('Correct! Next level');
        updateLevelDisplay();
    }
}

function updateLevelDisplay() {
    levelDisplay.textContent = `Level: ${level}`;
}

function updateHighestLevelDisplay() {
    highestLevelDisplay.textContent = `Highest Level: ${highestLevel}`;
}

updateLevelDisplay();
updateHighestLevelDisplay();