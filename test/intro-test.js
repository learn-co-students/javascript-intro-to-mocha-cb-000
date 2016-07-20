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

  describe('favoriteIceCream()', () => {
    it('should return your fav icecream', () => {
      expect(favoriteIceCream("mint chocolate chip")).toEqual("I love mint chocolate chip");
    });
  });

  describe('shouting()', () => {
    it('should return a string in all caps', () => {
      expect(shouting("i love javascript soooooo much")).toEqual('I LOVE JAVASCRIPT SOOOOOO MUCH');
    });
  });

  describe('roundDown()', () => {
    it('should correctly floor the number', () => {
      expect(roundDown(5.99)).toEqual(5);
    });
  });

  describe('theTruth()', () => {
    it('return true', () => {
      expect(theTruth()).toEqual(true);
    });
  });
});
