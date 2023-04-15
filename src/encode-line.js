const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arrSymbols = [], prevSymbol = null, index = -1;
  for (let symbol of str) {
    if (prevSymbol !== symbol) {
      arrSymbols.push([symbol, 1]);
      prevSymbol = symbol;
      index++;
    } else {
      arrSymbols[index][1]++;
    }
  }
  let finalStr = '';
  for (let pair of arrSymbols) {
    if (pair[1] === 1) {
      finalStr += `${pair[0]}`
    } else {
      finalStr += `${pair[1]}${pair[0]}`
    }
  }
  return finalStr
}

module.exports = {
  encodeLine
};
