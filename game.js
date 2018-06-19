const Card = require('./card.js');

const superman = new Card("Superman", 6, 9, 7);
const scarletWitch = new Card("Scarlet Witch", 7, 10, 5);
const blackWidow = new Card("Black Widow", 8, 6, 9);
const theFlash = new Card("The Flash", 7, 4, 10);
const wonderWoman = new Card("Wonder Woman", 8, 7, 5);
const batman = new Card("Batman", 10, 5, 6);

const Game = function(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  this.deck = [superman, scarletWitch, blackWidow, theFlash, batman];
}

Game.prototype.dealCards = function () {
  this.player1.hand.push(deck.pop());
  this.player2.hand.push(deck.pop());
};
