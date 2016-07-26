describe('Intro to Mocha', function() {
  describe('theTruth()', function() {
    it('should return true', function() {
      expect(theTruth()).toEqual(true);
    });
  });

  describe('sayHey()', function() {
    it('should return the correct greeting', function() {
      expect(sayHey()).toEqual('Hey!');
    });
  });

  describe('sayHeyFriend()', function() {
    it('should return a greeting using the given name', function() {
      expect(sayHeyFriend('Johnny')).toEqual('Hey, Johnny!!');
    });
  });

  describe('favoriteIceCream()', function() {
    it('should return the correct sentence when passed an icecream flavor', function() {
      expect(favoriteIceCream('mint chocolate chip')).toEqual('I love mint chocolate chip.');
    });
  });

  describe('shouting()', function() {
    it('should return the given string in all caps', function() {
      expect(shouting('i love javascript soooooo much')).toEqual('I LOVE JAVASCRIPT SOOOOOO MUCH');
    });
  });

  describe('roundDown()', function() {
    it('should return the given number, rounded down', function() {
      expect(roundDown(5.99)).toEqual(5);
    });
  });
});
