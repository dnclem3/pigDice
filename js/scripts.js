
function Player(playerName){
  this.playerName = playerName;
  this.roll = 0;
  this.total = 0;
  this.tracker = 0;
}


Player.prototype.hold = function(){
  this.total+= this.roll;
  console.log("Total score is " + this.total);
}

Player.prototype.addTotal = function(dice){
  this.roll+= dice;
  console.log("Roll total is " + this.roll);
}

Player.prototype.clear = function(){
  this.roll = 0;
}


var diceRolls = function() {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min)) + min;
}


var generator = function(player) {
    var dice = diceRolls();
    console.log("Dice amount is " + dice);
    if (dice === 1) {
      player.clear();
      console.log("clear run");
    }
    else {
      player.addTotal(dice);
    }
}

var createUser = function(name) {
    return new Player(name);
    console.log(name);
}


$(document).ready(function() {

  $("form").submit(function(event){
    event.preventDefault();
    var input = $("#name").val();
    var name = createUser(input);
    console.log(name);
    $("#rollDice").click(function() {
      generator(name);
    });
    $("#holdDice").click(function() {
      name.hold();
    });
  });
});
