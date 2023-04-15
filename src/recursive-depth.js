const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;
    for (let element of arr) {
      let depth = 1;
      if (Array.isArray(element)) {
        depth += this.calculateDepth(element);
      }
      if (depth > maxDepth) {
        maxDepth = depth;
      }
    }
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
