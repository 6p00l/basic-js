const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  console.log(backyard);

  let res = 0;
  for (let i = 0; i < backyard.length; i++) {
    for (let m = 0; m < backyard[i].length; m++) {
      if (backyard[i][m] == "^^") {
        res += 1;
      }
    }
  }
  return res;
}

module.exports = {
  countCats,
};
