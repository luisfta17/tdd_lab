const assert = require('assert');
const Player = require('../player.js');
const Card = require('../card.js');

describe('Player', function() {
  let player;
  let card;

  beforeEach(function(){
    player = new Player('Hamish');
    card = new Card('Superman', 6, 9, 7);
  })

  it('should have a name', function (){
    const actualValue = player.name;
    assert.strictEqual(actualValue, 'Hamish');
  });

  it('should have an empty hand', function(){
    const actualValue = player.hand.length;
    assert.strictEqual(actualValue, 0);
  })

  it('should be able to have a card', function(){
    player.addCard(card);
    const actualValue = player.hand.length;
    assert.strictEqual(actualValue, 1);
  })

});
