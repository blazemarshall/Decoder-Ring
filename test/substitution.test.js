const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

//
describe("testing suite", () => {
  const cipher = "plmoknijbuhvygctfxrdzeswaq";

  // It ignores capital letters. (For example, the results of A Message and a message should be the same.)
  it("returns false if given alphabet isn't 26 letters long", () => {
    const actual = substitution("Plunder Blunder", "mistranslationStation");
    expect(actual).to.be.false;
  });
  it("correctly translates the given phrase, based on the alphabet given to the function.", () => {
    const expected = "p txctkx mzt cn mcnnkk bg p mcttkx mcnnkk mzt";
    const actual = substitution(
      "A proper cup of coffee in a copper coffee cup",
      cipher
    );
    expect(actual).to.equal(expected);
  });
  it("should return false if there are any duplicate characters in the given alphabet.", () => {
    const expected = false;
    const actual = substitution("string", "plmoknijbuhvygctfxrdzeswaqq", false);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces in the message, before and after encoding or decoding.", () => {
    const expected = "g xyfp oyftm";
    const actual = substitution("i want candy", cipher, false);
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters.", () => {
    const expected = "oyagpyb";
    const actual = substitution("CAPITAL", cipher, false);
    expect(actual).to.equal(expected);
  });
});
