const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  if (!arr.length) {
    return []
  }

  const resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next') {
      if (i !== arr.length - 1) {
        resultArray.push(arr[i + 1])
      }
      continue;
    }
    if (arr[i] === '--double-prev') {
      if (arr[i - 2] === '--discard-next') {
        continue;
      }
      if (resultArray.length) {
        resultArray.push(resultArray[resultArray.length - 1])
      }
      continue;
    }
    if (arr[i] === '--discard-prev') {
      if (arr[i - 2] === '--discard-next') {
        continue;
      }
      if (resultArray.length) {
        resultArray.pop();
      }
      continue;
    }
    if (arr[i] === '--discard-next') {
      i++;
      continue;
    }
    resultArray.push(arr[i]);
  }
  return resultArray
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
