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
let p1P=document.getElementById("player-points");
let p2P=document.getElementById("player2-points");

let player1={hLabel: $("#player1-hand"), pLabel:pP, points:0, bet:0, totalBet:0, bank:500};
let player2={hLabel: $("#player2-hand"), pLabel:pP, points:0, bet:0, totalBet:0, bank:500};
// let communitCard = {"", "", "", "", ""};
let curCard={};
let df=0;




//initialize the game, wait player2 to join if only one player











//start the game




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
console.log(deck);

////////////////////////////////////////////

$("#bet-info").html("Place Your Bet");
$("#bank").html("You have $"+ player.bank+".");
bBtn="";
let fund='<h4>Insufficient Fund</h4><img src="https://images-na.ssl-images-amazon.com/images/I/61cL%2BM-SN%2BL._SX425_.jpg" style="width:180px;height: auto ;" alt="">';

$("#betButton").click((e)=>{
    bBtn=e.target.textContent;
    if((bBtn=="$10"||bBtn=="$25"||bBtn=="$100")&&(dealCount!=0)){
        alert("Not More Bet after Deal!");
    }
    else if(bBtn=="$10"){
        bet=10;
    }
    else if(bBtn=="$25"){
        bet=25;
    }
    else if(bBtn=="$100"){
        bet=100;
        };
    if(player.bank>=bet&&bet!=0){
        totalBet = totalBet + bet;
        player.bank = player.bank-bet;
        $("#bet-info").html("You are betting $" + totalBet);
        $("#bank").html("You have $"+ player.bank + ".");
    }
    else if(player.bank<bet){
        $("#bet-info").html(fund);
    };
    bet=0;
});




////////////// deal card/////////

///dealer position

///blinds

player1.bet = 10;
pleuer2.bet = 20;

////preflop



////flop

////turn

////river

///compare cards





