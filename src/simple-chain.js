const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arrOfValues: [],
  chain: '',
  getLength() {
    return this.arrOfValues.length;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    let myValue = '';
    if (value !== undefined) {
      myValue = value;
    }
    if (this.length === 0) {
      chain = `( ${myValue} )`;
      this.arrOfValues.push(myValue);
    } else {
      this.chain += `~~( ${myValue} )`;
      this.arrOfValues.push(myValue);
    }
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && Number.isInteger(position) && position > 0 && position <= this.arrOfValues.length) {
      this.arrOfValues.splice(position - 1, 1);
      this.chain = '';
      for (let element of this.arrOfValues) {
        this.chain += `( ${element} )~~`
      }
      this.chain = this.chain.slice(0, this.chain.length - 2)
      return this;
    } else {
      this.arrOfValues = [];
      this.chain = '';
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.arrOfValues = this.arrOfValues.reverse();
    this.chain = '';
    for (let element of this.arrOfValues) {
      this.chain += `( ${element} )~~`;
    }
    this.chain = this.chain.slice(0, this.chain.length - 2);
    return this
  },
  finishChain() {
    let currentChain = this.chain;
    this.arrOfValues = [];
    this.chain = '';
    return currentChain
  }
};

module.exports = {
  chainMaker
};
