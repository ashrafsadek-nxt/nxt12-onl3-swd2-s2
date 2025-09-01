// ===== متغيرات اللعبة الأساسية =====
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let score = 0;
let moves = 0;
let timer = 0;
let timerInterval;
let gameStarted = false;
let matchedCards = 0;

const cardSymbols = ['🐶', '🐱', '🐸', '🐰', '🐶', '🐱', '🐸', '🐰'];


function shuffleCards(array) {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function createGameBoard() {
    const gameBoard = document.querySelector('.game-board');
    gameBoard.innerHTML = '';


    const shuffledSymbols = shuffleCards([...cardSymbols]);


    shuffledSymbols.forEach(symbol => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card-front">?</div>
            <div class="card-back">${symbol}</div>
        `;
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });
}


function flipCard() {
    if (!gameStarted) {
        startTimer();
        gameStarted = true;
    }
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    checkMatch();
}


function checkMatch() {
    let isMatch = firstCard.querySelector('.card-back').textContent ===
        secondCard.querySelector('.card-back').textContent;

    if (isMatch) {
        disableCards();
        updateScore();
        matchedCards += 2;
        if (matchedCards === cardSymbols.length) {
            endGame();
        }
    } else {
        unflipCards();
    }
    moves++;
    updateMoves();
}


function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    resetBoard();
}


function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1500);
}


function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}


function updateScore() {
    score += 10;
    document.querySelector('.score span').textContent = score;
}


function updateScoreDisplay() {
    document.querySelector('.score span').textContent = score;
}


function updateMoves() {
    document.querySelector('.moves span').textContent = moves;
}

// Timer Functions


function startTimer() {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
        timer++;
        updateTimerDisplay();
    }, 1000);
}


function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}


function resetTimer() {
    stopTimer();
    timer = 0;
    updateTimerDisplay();
    gameStarted = false;
}


function updateTimerDisplay() {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.querySelector('.timer span').textContent = formattedTime;
}


function endGame() {
    stopTimer();
    const modal = document.getElementById('successModal');
    const finalStats = document.getElementById('finalStats');
    finalStats.innerHTML = `
        <strong>Your Stats:</strong><br>
        🏆 Points: ${score}<br>
        ⏱️ Time: ${document.querySelector('.timer span').textContent}<br>
        🎯 Moves: ${moves}
    `;
    modal.style.display = 'block';
}


function closeSuccessModal() {
    document.getElementById('successModal').style.display = 'none';
    restartGame();
}


function restartGame() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    score = 0;
    moves = 0;
    matchedCards = 0;
    updateScoreDisplay();
    updateMoves();
    resetTimer();
    createGameBoard();
}


function resetGame() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('flipped', 'matched');
        card.addEventListener('click', flipCard);
    });
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    score = 0;
    moves = 0;
    matchedCards = 0;
    updateScoreDisplay();
    updateMoves();
    resetTimer();
}


document.addEventListener('DOMContentLoaded', function () {
    createGameBoard();
    document.querySelector('.restart-btn').addEventListener('click', restartGame);
    document.querySelector('.reset-btn').addEventListener('click', resetGame);
});


window.onclick = function (event) {
    const modal = document.getElementById('successModal');
    if (event.target === modal) {
        closeSuccessModal();
    }
}