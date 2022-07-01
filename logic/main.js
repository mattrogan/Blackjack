function generateDeck() {
    var deck = [];
    var suits = ["clubs", "hearts", "spades", "diamonds"];

    // Iterate over each suit & value
    for (let s in suits)
    {
        deck.push("ace of " + suits[s]);
        for (let i = 2; i <= 10; i++) {
            deck.push(i + " of " + suits[s]);
        }
        deck.push("jack of " + suits[s]);
        deck.push("queen of " + suits[s]);
        deck.push("king of " + suits[s]);
    }

    deck = shuffleArray(deck);
    return deck;
}

function updateCards()
{
    document.getElementById("currentCard1").innerHTML = deck[firstCard];
    document.getElementById("currentCard2").innerHTML = deck[secondCard];
}

function nextCard() 
{ 
    firstCard = (firstCard + 1) % 52;
    secondCard = (secondCard + 1) % 52;
    updateCards();
    getValues();
}


/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function getCardValue(card)
{
    var value = card.split(" ")[0];

    switch (value)
    {
        case "jack":
            return 11;
        case "queen":
            return 11;
        case "king":
            return 11;
        case "ace":
            return "A";
        default:
            return parseInt(value);
    }

}

function getValues()
{
    var val1 = getCardValue(deck[firstCard]);
    var val2 = getCardValue(deck[secondCard]);
    var total = calcTotals(val1, val2);
    document.getElementById("card1value").innerHTML = val1;
    document.getElementById("card2value").innerHTML = val2;
}

var firstCard = 0;
var secondCard = 1;
var deck = generateDeck();
updateCards();
getValues();