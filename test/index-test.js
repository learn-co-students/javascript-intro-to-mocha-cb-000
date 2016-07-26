describe('Intro to Mocha', function() {
  describe('favoriteIceCream()', function() {
    it('returns "I love ${flavor}."', function() {
      expect(favoriteIceCream("mint chocolate chip")).toEqual("I love mint chocolate chip.");
    });
  });

  describe('shouting()', function() {
    it('returns the given string in all caps', function() {
      expect(shouting("i love javascript soooooo much")).toEqual('I LOVE JAVASCRIPT SOOOOOO MUCH');
    });
  });

  describe('roundDown()', function() {
    it('rounds the given number down', function() {
      expect(roundDown(5.99)).toEqual(5);
    });
  });

  describe('theTruth()', function() {
    it('returns true', function() {
      expect(theTruth()).toEqual(true);
    });
  });
});
