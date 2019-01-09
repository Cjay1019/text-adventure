// Attribute Generation
function rollAttributes() {
  var attributes = [];
  for (j = 0; j < 6; j++) {
    var rolls = rollSeperate(4, 6);
    rolls.sort(function(a, b) {
      return a - b;
    });
    rolls.shift();
    score = rolls[0] + rolls[1] + rolls[2];
    attributes.push(score);
  }
  attributes.sort(function(a, b) {
    return a - b;
  });
  return attributes;
}

// Dice Rollers
function rollTogether(amount, sides) {
  value = 0;
  for (i = 0; i < amount; i++) {
    var randomNumber = Math.floor(Math.random() * sides) + 1;
    value += randomNumber;
  }
  return value;
}
function rollSeperate(amount, sides) {
  rolls = [];
  for (i = 0; i < amount; i++) {
    var randomNumber = Math.floor(Math.random() * sides) + 1;
    rolls.push(randomNumber);
  }
  return rolls;
}

// Character Constructor
function Character(name, hp, ac, str, dex, con, int, wis, cha) {
  this.name = name;
  this.hp = hp;
  this.ac = ac;
  this.attributes = {
    str,
    dex,
    con,
    int,
    wis,
    cha
  };
}

var fighter = new Character("name", 12, 16, 15, 13, 14, 10, 12, 8);

console.log(fighter.attributes.str);
