describe('Intro to Mocha', function() {
  describe('favoriteIceCream()', function() {
    it('should return your favorite ice cream', function() {
      expect(favoriteIceCream("mint chocolate chip")).toEqual("I love mint chocolate chip");
    });
  });

  describe('shouting()', function() {
    it('should return a string in all caps', function() {
      expect(shouting("i love javascript soooooo much")).toEqual('I LOVE JAVASCRIPT SOOOOOO MUCH');
    });
  });

  describe('roundDown()', function() {
    it('should correctly floor the number', function() {
      expect(roundDown(5.99)).toEqual(5);
    });
  });

  describe('theTruth()', function() {
    it('return true', function() {
      expect(theTruth()).toEqual(true);
    });
  });
});
