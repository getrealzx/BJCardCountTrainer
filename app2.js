var Hand = require('pokersolver').Hand;

var hand1 = Hand.solve(['Ad', 'As', 'Jc', 'Th', '2d', '3c', 'Kd']);
var hand2 = Hand.solve(['Ad', 'As', 'Jc', 'Th', '2d', 'Qs', 'Qd']);
var hand3 = Hand.solve(['Ac', '5d', '5c', '5s', '3d', 'Ad', 'As']);


var winner = Hand.winners([hand1, hand2, hand3]); // hand2
// console.log(winner);
console.log(hand3);
