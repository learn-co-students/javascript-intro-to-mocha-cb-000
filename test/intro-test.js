const expect = require('expect');
const fs = require('fs');
const jsdom = require('jsdom');
const path = require('path');

describe('Intro to Mocha', () => {
  before(done => {
    const src = path.resolve(__dirname, '..', 'code.js');

    jsdom.env('<div></div>', [src], {}, (err, window) => {
      if (err) {
        return done(err);
      }

      Object.keys(window).forEach(key => {
        global[key] = window[key]
      });

      done();
    });
  });

  describe('theTruth()', () => {
    it('should return true', () => {
      expect(theTruth()).toEqual(true);
    });
  });

  describe('sayHey()', () => {
    it('should return the string "Hey!"', () => {
      expect(sayHey()).toEqual('Hey!');
    });
  });

  describe('sayHeyFriend(name)', () => {
    it("should return a greeting with the given name", () => {
      expect(sayHeyFriend('Kristin')).toBe('Hey, Kristin!');
    });
  });

  describe('favoriteIceCream()', () => {
    it('should return the correct sentence when passed an icecream flavor', () => {
      expect(favoriteIceCream('mint chocolate chip')).toEqual('I love mint chocolate chip');
    });
  });

  describe('shouting()', () => {
    it('should return a string in all caps', () => {
      expect(shouting('i love javascript soooooo much')).toEqual('I LOVE JAVASCRIPT SOOOOOO MUCH');
    });
  });

  describe('roundDown()', () => {
    it('should correctly floor the number', () => {
      expect(roundDown(5.99)).toEqual(5);
    });
  });
});
