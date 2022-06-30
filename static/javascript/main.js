var deck = generateDeck();
var index = 0;
document.getElementById("card").innerHTML = deck[0];

function generateDeck() {
    var deck = [];
    var suits = ["Clubs", "Hearts", "Spades", "Diamonds"];

    // Iterate over each suit & value
    for (let suit in suits)
    {
        deck.push("Ace of " + suits[suit]);
        for (let i = 2; i <= 10; i++) {
            deck.push(i + " of " + suits[suit]);
        }
        deck.push("Jack of " + suits[suit]);
        deck.push("Queen of " + suits[suit]);
        deck.push("King of " + suits[suit]);
    }

    return deck;
}

function next() {
    if (index == 51) {
        index = 0;
    } else {
        index++;
    }
    document.getElementById("card").innerHTML = deck[index];
}

function bust() {
    return null;
}