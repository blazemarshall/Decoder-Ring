const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    //guard clause for shift
    if (!shift || shift === 0) return false;
    if (shift < -25 || shift > 25) return false;
    try {
      //variable for reference alphabet
      const alpha = "abcdefghijklmnopqrstuvwxyz";
      //guard clause for input
      if (input === undefined || !input || typeof input !== "string") {
        throw "Not a valid input";
      }
      //empty string to deposit translated charactercs in.
      let result = "";
      let code = input.toLowerCase();
      //loop to iterate through input.
      for (let i = 0; i < code.length; i++) {
        let inputChar = code[i];
        let alphaIndex = alpha.indexOf(inputChar);
        if (alphaIndex === -1) {
          result += inputChar;
          continue;
        }
        //decides whether to encode or decode
        if (encode === true) {
          alphaIndex += shift;
        } else {
          alphaIndex -= shift;
        }
        if (alphaIndex < 0) alphaIndex += alpha.length;
        if (alphaIndex >= alpha.length) alphaIndex -= alpha.length;
        // deposits chars into result var
        result += alpha[alphaIndex];
      }
      return result;
    } catch (err) {
      return err;
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
