var firstCard = 0;
var secondCard = 1;
var deck = generateDeck();
var sourcePath = "/static/images/"
updateCards();
getValues();

function generateDeck() {
    var deck = [];
    var suits = ["clubs", "hearts", "spades", "diamonds"];

    // Iterate over each suit & value
    for (let s in suits)
    {
        deck.push("ace_of_" + suits[s] + ".png");
        for (let i = 2; i <= 10; i++) {
            deck.push(i + "_of_" + suits[s] + ".png");
        }
        deck.push("jack_of_" + suits[s] + ".png");
        deck.push("queen_of_" + suits[s] + ".png");
        deck.push("king_of_" + suits[s] + ".png");
    }

    deck = shuffleArray(deck);
    return deck;
}

function updateCards()
{
    document.getElementById("currentCard1").setAttribute("src", sourcePath+deck[firstCard]);
    document.getElementById("currentCard2").setAttribute("src", sourcePath+deck[secondCard]);
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
    var value = card.split("_")[0];

    switch (value)
    {
        case "jack":
            return 10;
        case "queen":
            return 10;
        case "king":
            return 10;
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
    var total = calcTotal(val1, val2);
    if (total > 21)
    {
        total = "BUST";
    }
    document.getElementById("card1value").innerHTML = val1;
    document.getElementById("card2value").innerHTML = val2;
    document.getElementById("total").innerHTML = total;
}

function calcTotal(val1, val2) 
{ 
    if (val1 == val2 == "A")
    {
        return 11;
    } else if (val1 == "A")
    {
        return closestToSeventeen(1+val2, 11+val2);
    } else if (val2 == "A")
    {
        return closestToSeventeen(1+val1, 11+val1);
    }
    else
    {
        return val1 + val2;
    }

}

function closestToSeventeen(val1, val2)
{
    if (Math.min(Math.abs(val1-17), Math.abs(val2-17)) == Math.abs(val1-17)){
        return val1;
    }
    else
    {
        return val2;
    }
}