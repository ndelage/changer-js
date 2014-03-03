function Changer(cents) {
}

Changer.prototype.asFewestUSCoins = function() {
  var coins = {pennies:  0,
               nickels:  0,
               dimes:    0,
               quarters: 0};

  if(this.cents < 5) {
    coins.pennies = cents;
  }

  return coins;
}


