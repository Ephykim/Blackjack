let cards = [];
let hasBlackjack = false;
let isAlive = false;
let message = "";
let sum = 0;
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let startBtn = document.getElementById("start-btn");
let newCardBtn = document.getElementById("newcard-btn");

startBtn.addEventListener("click", () => {
    isAlive = true;
    hasBlackjack = false;
    let firstcard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstcard, secondCard];
    sum = firstcard + secondCard;
    renderGame();
});

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;

    if (sum < 21) {
        message = "Draw a new Card";
    } else if (sum === 21) {
        message = "You've got BlackJack !";
        hasBlackjack = true;
    } else {
        message = "You are out of the game.";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 11) {
        return 1;
    } else {
        return randomNumber;
    }
}

newCardBtn.addEventListener("click", () => {
    if(isAlive === true && hasBlackjack === false){
        let card  = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
});