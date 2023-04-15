const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const allNumbers = []
  for (let i = 0; i < String(n).length; i++) {
    let currentArr = String(n).split('');
    currentArr.splice(i, 1);
    allNumbers.push(Number(currentArr.join('')));
  }
  return Math.max(...allNumbers);
}

module.exports = {
  deleteDigit
};
