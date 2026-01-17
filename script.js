const players = ['X', 'O'];
let currentPlayer = 0;
let popup = document.getElementById('popup');
let popupdraw = document.getElementById('popupdraw');
let gameOver = false;

const currentPlayerSpan = document.getElementById('currentPlayer');
const winnerSpan = document.getElementById('winner');
const cards = document.querySelectorAll(".card img");

function turnCard(card) {
    if (gameOver == true) {
        return;
    }
    const img = card.querySelector("img");
    if (img.src.includes('cross.png') || img.src.includes('circle.png')) {
        return; 
    }
    if (currentPlayer == 0) {
        img.src = 'images/cross.png';
    } 
    if (currentPlayer == 1 ) {
        img.src = 'images/circle.png';
    }

    img.style.display = "block";
   
    currentPlayer = (currentPlayer + 1) % players.length;
    win();
    currentPlayerSpan.textContent = players[currentPlayer];
    
}

function resetGame() {
    gameOver = false;
    cards.forEach(img => {
        img.src = '';
        img.style.display = "none";
    });
    currentPlayer = 0;
    currentPlayerSpan.textContent = players[currentPlayer];
}

function win() {

    if ((cards[0].src.includes('cross.png') || cards[0].src.includes('circle.png')) && cards[0].src === cards[1].src && cards[1].src === cards[2].src ||
        (cards[3].src.includes('cross.png') || cards[3].src.includes('circle.png')) && cards[3].src === cards[4].src && cards[4].src === cards[5].src ||
        (cards[6].src.includes('cross.png') || cards[6].src.includes('circle.png')) && cards[6].src === cards[7].src && cards[7].src === cards[8].src ||
        (cards[0].src.includes('cross.png') || cards[0].src.includes('circle.png')) && cards[0].src === cards[3].src && cards[3].src === cards[6].src ||
        (cards[1].src.includes('cross.png') || cards[1].src.includes('circle.png')) && cards[1].src === cards[4].src && cards[4].src === cards[7].src ||
        (cards[2].src.includes('cross.png') || cards[2].src.includes('circle.png')) && cards[2].src === cards[5].src && cards[5].src === cards[8].src ||
        (cards[0].src.includes('cross.png') || cards[0].src.includes('circle.png')) && cards[0].src === cards[4].src && cards[4].src === cards[8].src ||
        (cards[2].src.includes('cross.png') || cards[2].src.includes('circle.png')) && cards[2].src === cards[4].src && cards[4].src === cards[6].src) {
            winnerSpan.textContent = players[(currentPlayer + 1) % players.length];
            openPopup();
            gameOver = true;
    } 
    else if ((cards[0].src.includes('cross.png') || cards[0].src.includes('circle.png') )&&
        (cards[1].src.includes('cross.png') || cards[1].src.includes('circle.png') )&&
        (cards[2].src.includes('cross.png') || cards[2].src.includes('circle.png') )&&
        (cards[3].src.includes('cross.png') || cards[3].src.includes('circle.png') )&&
        (cards[4].src.includes('cross.png') || cards[4].src.includes('circle.png') )&&
        (cards[5].src.includes('cross.png') || cards[5].src.includes('circle.png') )&&
        (cards[6].src.includes('cross.png') || cards[6].src.includes('circle.png') )&&
        (cards[7].src.includes('cross.png') || cards[7].src.includes('circle.png') )&&
        (cards[8].src.includes('cross.png') || cards[8].src.includes('circle.png')) ) {
        openPopupDraw();
        gameOver = true;
    }

}

function openPopup() {
    popup.classList.add('open-popup');

}

function closePopup() {
    popup.classList.remove('open-popup');
    resetGame();
}

function openPopupDraw() {
    popupdraw.classList.add('open-popup');
}
function closePopupDraw() {
    popupdraw.classList.remove('open-popup');
    resetGame();
}

