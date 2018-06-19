
const Player = function(name){
  this.name = name;
  this.hand = [];
}

Player.prototype.addCard = function (card) {
  this.hand.push(card);
};

Player.prototype.showBiggestValue = function () {
  const card = this.hand[0];
  let value = 0
  if (card.intelligence > value) {
    value = card.intelligence;
  }
  else if (card.strength > value) {
    value = card.strength;
  }

  else if (card.agility > value) {
    value = card.agility;
  }
  return value;
};

module.exports = Player;
