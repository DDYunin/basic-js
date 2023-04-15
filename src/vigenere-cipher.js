const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(directMachine = true) {
    this.directMachine = directMachine;
  }

  encrypt(str, keyWord) {
    if (str === undefined || keyWord === undefined) {
      throw new Error('Incorrect arguments!');
    }

    // Создание ключа одинаковой длинный
    let keyUpper = ''
    let index = 0
    for (let i = 0; i < str.length; i++) {
      if (index === keyWord.length) {
        index = 0;
      }
      keyUpper += keyWord[index].toUpperCase();
      index++;
    }

    let finalStr = ''
    index = 0;
    for (let i = 0; i < str.length; i++) {
      let strLetterCode = str[i].toUpperCase().codePointAt(0);
      let keyLetterCode = keyUpper[index].codePointAt(0);
      let offset = 65;
      if (strLetterCode < 65 || strLetterCode > 90) {
        finalStr += str[i];
      } else {
        finalStr += String.fromCodePoint((((strLetterCode - offset) + (keyLetterCode - offset)) % 26) + offset)
        index++;
      }
    }
    if (this.directMachine) {
      return finalStr;
    } else {
      return finalStr.split('').reverse().join('');
    }
  }
  decrypt(str, keyWord) {
    if (str === undefined || keyWord === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let keyUpper = ''
    let index = 0
    for (let i = 0; i < str.length; i++) {
      if (index === keyWord.length) {
        index = 0;
      }
      keyUpper += keyWord[index].toUpperCase();
      index++;
    }

    let finalStr = '';
    index = 0;
    for (let i = 0; i < str.length; i++) {
      let strLetterCode = str[i].toUpperCase().codePointAt(0);
      let keyLetterCode = keyUpper[index].codePointAt(0);
      let offset = 65;
      if (strLetterCode < 65 || strLetterCode > 90) {
        finalStr += str[i];
      } else {
        let difference = (strLetterCode - offset) - (keyLetterCode - offset);
        if (difference < 0) {
          difference = 26 + difference;
        }
        finalStr += String.fromCodePoint((difference % 26) + offset)
        index++;
      }
    }
    if (this.directMachine) {
      return finalStr;
    } else {
      return finalStr.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
