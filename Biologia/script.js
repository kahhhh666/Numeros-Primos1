const images = [
    'plant.png', 'plant.png',
    'grasshopper.png', 'grasshopper.png',
    'frog.png', 'frog.png',
    'snake.png', 'snake.png'
];


images.sort(() => 0.5 - Math.random());

const gameBoard = document.getElementById('gameBoard');
let firstCard = null;
let secondCard = null;
let lockBoard = false;

function createCard(image) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.image = image;
    
    const img = document.createElement('img');
    img.src = `images/${image}`;
    
    card.appendChild(img);
    card.addEventListener('click', flipCard);
    return card;
}

function flipCard() {
    if (lockBoard || this === firstCard) return;
    this.classList.add('flipped');
    
    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;
    checkMatch();
}

function checkMatch() {
    if (firstCard.dataset.image === secondCard.dataset.image) {
        resetBoard();
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetBoard();
        }, 1000);
    }
}

function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

images.forEach(image => {
    const card = createCard(image);
    gameBoard.appendChild(card);
});
