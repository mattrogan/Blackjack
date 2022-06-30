var deck = generateDeck();
deck = shuffleArray(deck);
var index = 0;
var firstSourceLink = "static/images/" + deck[0];
document.getElementById("card").setAttribute("src", firstSourceLink);

function generateDeck() {
    var deck = [];
    var suits = ["clubs", "hearts", "spades", "diamonds"];

    // Iterate over each suit & value
    for (let suit in suits)
    {
        deck.push("ace_of_" + suits[suit] + ".png");
        for (let i = 2; i <= 10; i++) {
            deck.push(i + "_of_" + suits[suit] + ".png");
        }
        deck.push("jack_of_" + suits[suit] + ".png");
        deck.push("queen_of_" + suits[suit] + ".png");
        deck.push("king_of_" + suits[suit] + ".png");
    }

    return deck;
}

function next() {
    if (index == 51) {
        index = 0;
    } else {
        index++;
    }
    var nextCard = deck[index];
    var nextSrcLink = "static/images/" + nextCard;
    document.getElementById("card").setAttribute("src", nextSrcLink);
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

function bust() {
    return null;
}