const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let countCommonCharacters = 0;
  const mapCharactersS1 = new Map(), mapCharactersS2 = new Map();

  s1.split('').forEach((elem) => {
    console.log(elem)
    if (mapCharactersS1.has(elem)) {
      mapCharactersS1.set(elem, mapCharactersS1.get(elem) + 1);
    } else {
      mapCharactersS1.set(elem, 1);
    }
  })

  for (let temp of mapCharactersS1.entries()) {
    console.log(temp);
  }

  s2.split('').forEach((elem) => {
    console.log(elem)
    if (mapCharactersS2.has(elem)) {
      mapCharactersS2.set(elem, mapCharactersS2.get(elem) + 1);
    } else {
      mapCharactersS2.set(elem, 1);
    }
  })
  
  for (let temp of mapCharactersS2.entries()) {
    console.log(temp);
  }

  if (mapCharactersS1.size <= mapCharactersS2.size) {
    for (let pair of mapCharactersS1.entries()) {
      let currentNumber = mapCharactersS2.get(pair[0]);
      console.log(currentNumber);
      if (pair[1] > currentNumber && currentNumber !== undefined) {
        countCommonCharacters += currentNumber;
      }
      if (pair[1] <= currentNumber && currentNumber !== undefined) {
        countCommonCharacters += pair[1];
      }
    }
  } else {
    for (let pair of mapCharactersS2.entries()) {
      let currentNumber = mapCharactersS1.get(pair[0]);
      console.log(currentNumber);
      if (pair[1] > currentNumber && currentNumber !== undefined) {
        countCommonCharacters += currentNumber;
      }
      if (pair[1] <= currentNumber && currentNumber !== undefined) {
        countCommonCharacters += pair[1];
      }
    }
  }
  console.log(countCommonCharacters);
  return countCommonCharacters;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
