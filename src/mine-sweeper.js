const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // console.log("Hell")
  // console.log(matrix[4])
  const setup = []
  for (let i = 0; i < matrix.length; i++) {
    let setupRow = []
    for (let j = 0; j < matrix[i].length; j++) {
      let numberBombs = [matrix[i][j + 1], matrix[i][j - 1]];
      
      if (matrix[i - 1] === undefined) {
        numberBombs.push(undefined);
      } else {
        numberBombs.push(matrix[i - 1][j], matrix[i - 1][j + 1], matrix[i - 1][j - 1]);
      }

      if (matrix[i + 1] === undefined) {
        numberBombs.push(undefined);
      } else {
        numberBombs.push(matrix[i + 1][j], matrix[i + 1][j + 1], matrix[i + 1][j - 1]);
      }

      setupRow.push(numberBombs.reduce((currentSum, currentElem) => {
        if (currentElem === undefined || currentElem === false) {
          return currentSum;
        } else {
          return currentSum + 1;
        }
      }, 0));
    }
    setup.push(setupRow);
  }
  return setup;
}

module.exports = {
  minesweeper
};
