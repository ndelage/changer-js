describe("Changer", function() {
  describe("#asFewestUSCoins", function() {
    it("returns an empty set of coins for 0 cents", function() {
      var changer = new Changer(0);
      expect(changer.asFewestUSCoins()).toEqual({pennies:  0,
                                                 nickels:  0,
                                                 dimes:    0,
                                                 quarters: 0});
    });

    it("uses the correct coins for 49 cents", function() {
      var changer = new Changer(49);
      expect(changer.asFewestUSCoins()).toEqual({pennies:  4,
                                                 nickels:  0,
                                                 dimes:    2,
                                                 quarters: 1});
    });

  });
});
