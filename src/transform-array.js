const { NotImplementedError } = require("../extensions/index.js");

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
    throw new Error(`\'arr\' parameter must be an instance of the Array!`);
  }
  let res = [];
  let arrCopy = [];
  for (i = 0; i < arr.length; i++) {
    arrCopy[i] = arr[i];
  }
  let dn = "--discard-next";
  let ddn = "--double-next";
  let dp = "--discard-prev";
  let ddp = "--double-prev";

  if (arrCopy[0] === dp || arrCopy[0] === ddp) {
    arrCopy.splice(0, 1);
  }
  if (
    arrCopy[arrCopy.length - 1] === dn ||
    arrCopy[arrCopy.length - 1] === ddn
  ) {
    arrCopy.splice(arrCopy.length - 1, 1);
  }

  for (let i = 2; i < arrCopy.length; i++) {
    if (arrCopy[i - 2] === dn && (arrCopy[i] === ddp || arrCopy[i] === dp)) {
      arrCopy.splice(i, 1);
    }
  }

  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] === dn) {
      i += 1;
      continue;
    }
    if (arrCopy[i] === ddn && arrCopy[i + 1]) {
      res.push(arrCopy[i + 1]);
      res.push(arrCopy[i + 1]);
      i += 1;
      continue;
    }
    if (arrCopy[i] === dp) {
      res.splice(res.length - 1, 1);
      continue;
    }
    if (arrCopy[i] === ddp) {
      res.push(res[res.length - 1]);
      continue;
    }

    res.push(arrCopy[i]);
  }

  return res;
}

module.exports = {
  transform,
};
