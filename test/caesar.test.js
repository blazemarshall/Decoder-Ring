const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar Written By Blaze", () => {
  describe("shift handling Written by Blaze", () => {
    it("should return false if shift is 0", () => {
      const input = "Amazing Blazing Blaze";
      const encode = true;
      const shift = 0;
      const expected = false;
      const actual = caesar(input, shift, encode);
      console.log(actual);
      expect(actual).to.be.false;
    });
    it("should return false if shift is greater than 25", () => {
      let input = "gamerTag";
      let shift = 26;
      const expected = false;
      const actual = caesar(input, shift, (encode = true));

      expect(actual).to.be.false;
    });

    it("should return false if shift is less than -25", () => {
      let input = "Amazing Blazing Blaze";
      const actual = caesar(input, -26, encode);
      expect(actual).to.be.false;
    });

    it("should return false if shift is not present", () => {
      let input = "Amazing Blazing Blaze";
      const actual = caesar(input, undefined, encode);
      expect(actual).to.be.false;
    });
  });

  describe("input handling written by Blaze", () => {
    it("should return the error msg 'Not a valid input, if no input given", () => {
      input = undefined;
      const expected = "Not a valid input";
      const actual = caesar(input, 3, encode);
      expect(expected).to.equal(actual);
    });

    it("should return wklqnixo when input is thinkful", () => {
      const expected = "wklqnixo";
      const actual = caesar("thinkful", 3, encode);
      expect(actual).to.equal(expected);
    });

    it("should decode 'bpqa qa i amkzmb umaaiom!' to 'This is a secret message'", () => {
      let input = "wklv lv d vhfuhw phvvdjh";
      const expected = "this is a secret message";
      const actual = caesar(input, 3, false);
      expect(actual).to.equal(expected);
    });

    it("should return special character and spaces correctly", () => {
      const expected = " bdb! : - )";
      const actual = caesar(" yay! : - )", 3, true);
      expect(actual).to.equal(expected);
    });

    it("should return wklqnixo when input is thinkful", () => {
      let input = "thinkful";
      const shift = 3;
      const expected = "wklqnixo";
      const encode = true;
      const actual = caesar(input, shift, encode);
      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      let input = "THINKFUL";
      const shift = 3;
      const expected = "wklqnixo";
      const encode = true;
      const actual = caesar(input, shift, encode);
      expect(actual).to.equal(expected);
    });
  });
});
