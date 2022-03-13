let player = {
    name: 'Pris',
    chips: 100
}
let sum;
let cards = [];

let hasBlackJack = false;
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el") 
let playerEl = document.getElementById("player-el")

playerEl.textContent = `${player.name}: $${player.chips}`

function getRandomCard () {
    let randomCards = Math.floor((Math.random()* 13) + 1)
    
    if ( randomCards === 1) {
        return 11;
    } else if ( randomCards === 11 || randomCards === 12 || randomCards === 13 ) {
        return 10;
    } else {
        return randomCards;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    

    cardsEl.textContent = `Cards: `; 

    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum <= 20) {
        message = "Do you want to draw a new card? :)"
    } else if (sum === 21) {
        message = " Woohoo! You've got Blackjack! $$$"
        hasBlackJack = true
    } else {
        message = "You're out of the game! ;("
        isAlive = false
    }

    messageEl.textContent = message;
}

function newCard() {
    console.log(isAlive+"1");
    console.log(hasBlackJack);
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        console.log('yes')
        renderGame();
    } 
}   