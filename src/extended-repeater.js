const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let finalStr = '';
  
  let repeatTimes = options.repeatTimes;
  if (repeatTimes === undefined) {
    repeatTimes = 1;
  }

  let additionRepeatTimes  = options.additionRepeatTimes ;
  if (additionRepeatTimes  === undefined) {
    additionRepeatTimes  = 1;
  }

  let separator  = options.separator ;
  if (separator  === undefined) {
    separator  = '+';
  }

  let additionSeparator = options.additionSeparator ;
  if (additionSeparator === undefined) {
    additionSeparator  = '|';
  }

  let addition = options.addition;
  if (addition === undefined) {
    addition  = '';
  }

  for (let i = 0; i < repeatTimes; i++) {
    finalStr += `${str}`;
    for (let j = 0; j < additionRepeatTimes; j++) {
      if (j === additionRepeatTimes - 1) {
        finalStr += `${addition}`
      } else {
        finalStr += `${addition}${additionSeparator}`;
      }
    }
    if (i !== repeatTimes - 1) {
      finalStr += `${separator}`;
    }
  }
  return finalStr;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
