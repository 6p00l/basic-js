const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  link: [],
  temp: [],
  getLength() {
    return this.link.length();
  },
  addLink(n) {
    this.link.push(`${n}`);

    return this;
  },
  removeLink(p) {
    if (!this.link[p - 1]) {
      this.link = [];
      throw new Error("You can't remove incorrect link!");
    } else this.link.splice(p - 1, 1);

    return this;
  },
  reverseChain() {
    this.link.reverse();
    return this;
  },
  finishChain() {
    const link = this.link.join(` )~~( `);
    this.link = [];
    return `( ` + link + ` )`;
  },
};

module.exports = {
  chainMaker,
};
