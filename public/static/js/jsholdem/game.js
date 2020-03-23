// Player join game
//player can get 1000 free money each day 24*3600*1000
// Assign seat (empty next seat)
// Wait for player(when only one player)
// Player quit
// Dealer button move /big+small blinds (db)
// Pre-flop deal cards
// Pre-flop 
// Player action round: bet/call/check/fold/allin/reraise (db)
// Player quit
// Dealer action flop 3
// Player action round	(db)
// Player quit
// Dealer action turn
// Player action round(db)
// Player quit
// Dear action river
// Player action round(db)
// Player quit
// Show hand
// Player compare card ranks
// Winner gets pot money(db)
// Reset Pot, cards, hands
// Player quit             


var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

let suits = ["H", "D", "S", "C"];
let cardValues = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let imgeURL="";
let deck=[];
let value=0;
let stand=0;
let dealCount=0;
let dP=document.getElementById("dealer-points");
let pP=document.getElementById("player-points");
let dealer={hLabel: $("#dealer-hand"), pLabel:dP, points:0, aCount:0};
let player={hLabel: $("#player-hand"), pLabel:pP, points:0, aCount:0, bank:500};
let curCard={};
let bet=0;
let totalBet=0;
let df=0;


suits.forEach(function(suit){
    cardValues.forEach(function(cardValue){
        imageURL="./images/"+cardValue+suit+".jpg";  //   console.log(imageURL);
        new Image().src=imageURL;//preload
        if (cardValue=="J"||cardValue=="Q"||cardValue=="K"){
            value=10;
        }
        else if (cardValue=="A"){
            value=11;
        }
        else{
            value=cardValue;
        };  console.log(value);
        let imgAndValue={URL:imageURL, v:value};
        deck.push(imgAndValue);
        deck.push(imgAndValue); //two decks;
       
    })
}); console.log(deck);

function shuffleArray(deck) {
    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck;
};

shuffleArray(deck);