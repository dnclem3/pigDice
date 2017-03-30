//Business Logic
function Player(playerName){
  this.playerName = playerName;
  this.roll = 0;
  this.total = 0;
  this.tracker = 0;
}

Player.prototype.hold = function(){
  this.total+= this.roll;
  this.roll = 0;
}

Player.prototype.addTotal = function(dice){
  this.roll+= dice;
  this.tracker++;
  if (this.total + this.roll >= 100){
    $(".win").show();
    $("#totalScore").text(this.total+= this.roll);
  }
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
    if (dice === 1) {
      player.clear();
    }
    else {
      player.addTotal(dice);
    }
}

var users =[];

var createUser = function(name) {
    $(".name").text(name);
    return new Player(name);
}

var updateText = function(name) {
    $("#score").text(name.roll);
    $("#tracker").text(name.tracker);
    $("#totalScore").text(name.total);
}

//User Interface
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var input = $("#name").val();
    var name = createUser(input);j
    $("#rollDice").click(function() {
      generator(name);
      updateText(name);
    });
    $("#holdDice").click(function() {
      name.hold();
      updateText(name);
    });
  });
});
