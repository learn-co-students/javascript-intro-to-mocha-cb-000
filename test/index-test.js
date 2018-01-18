describe('Intro to Mocha', function () {
  describe('theTruth()', function () {
    it('should return true', function () {
      expect(theTruth()).toEqual(true);
    });
  });

  describe('sayHey()', function () {
    it('should return the string "Hey!"', function () {
      expect(sayHey()).toEqual('Hey!');
    });
  });

  describe('sayHeyFriend(name)', function () {
    it("should return a greeting with the given name", function () {
      expect(sayHeyFriend('Kristin')).toBe('Hey, Kristin!');
    });
  });

  describe('favoriteIceCream()', function () {
    it('should return the correct sentence when passed an icecream flavor', function () {
      expect(favoriteIceCream('mint chocolate chip')).toEqual('I love mint chocolate chip');
    });
  });

  describe('shouting()', function () {
    it('should return a string in all caps', function () {
      expect(shouting('i love javascript soooooo much')).toEqual('I LOVE JAVASCRIPT SOOOOOO MUCH');
    });
  });

  describe('roundDown()', function () {
    it('should correctly floor the number', function () {
      expect(roundDown(5.99)).toEqual(5);
    });
  });
});

global.expect = require('expect');

const jsdom = require('jsdom');
const path = require('path');

before(function(done) {
  const src = path.resolve(__dirname, '..', 'index.js');
  const babelResult = require('babel-core').transformFileSync(src, {
    presets: ['es2015']
  });
  const html = path.resolve(__dirname, '..', 'index.html');

  jsdom.env(html, [], { src: babelResult.code }, (err, window) => {
    if (err) {
      return done(err);
    }

    Object.keys(window).forEach(key => {
      global[key] = window[key];
    });

    return done();
  });
});

describe('favoriteIceCream', () => {
  it('should return the correct sentence when passed an icecream flavor', () => {
    const result = favoriteIceCream('mint chocolate chip');
    const expectedResult = 'I love mint chocolate chip';
    expect(result).toBe(expectedResult);
  });
});
