const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
      return arr.length;
  },
  addLink(value) {
    if (value !== undefined) {
      this.arr.push(value);
      return this;
    } else {
      this.arr.push(`'(  )'`);
      return this;
    }
  },
  removeLink(position) {
    let num = position - 1;
		if (num >= 0 && num < this.arr.length - 1 && Number.isInteger(num)) {
			this.arr.splice(num, 1);
			return this;
		} else {
			this.arr = [];
			throw new Error("You can't remove incorrect link!");
		}
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const result = this.arr.map(item => `( ${item} )`);
		this.arr = [];
		return result.join('~~');
  }
};

module.exports = {
  chainMaker
};
